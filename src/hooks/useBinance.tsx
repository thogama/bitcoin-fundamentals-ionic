import React, { useRef, useState } from 'react';

export default function useBinance() {
    const [isConnected, setIsConnected] = useState(false)
    const socketRef = useRef<WebSocket | null>(null)
    const [lastMessage, setLastMessage] = useState<any>("")
    const connectToSocket = async () => {
        if (isConnected) return
        const newSocket = new WebSocket('wss://stream.binance.com:443/ws')

        newSocket.onopen = () => {
            setIsConnected(true)
            newSocket.send(JSON.stringify({
                method: "SUBSCRIBE",
                params: [
                    "btcusdt@ticker",
                ],
                id: 0
            }))
        }
        newSocket.onmessage = (event) => {
            setLastMessage(JSON.parse(event.data))
        }
        socketRef.current = newSocket


    }

    const disconnectSocket = () => {
        if (!isConnected) return
        socketRef.current?.send(JSON.stringify({
            method: "UNSUBSCRIBE",
            params: [
                "btcusdt@ticker",
            ],
            id: 0
        }))

        setIsConnected(false)
    }

    return {
        connectToSocket,
        disconnectSocket,
        lastMessage,
    }
}