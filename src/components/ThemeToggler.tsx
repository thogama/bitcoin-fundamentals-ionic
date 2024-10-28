import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useTheme } from '../providers/Theme';
import { moon, sunny } from 'ionicons/icons';

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <IonFab vertical='bottom' horizontal='end'>

            <IonFabButton   onClick={toggleTheme}  size="small">

                <IonIcon size='small'
                    icon={theme === 'light' ? moon : sunny}
                />
            </IonFabButton>
        </IonFab>
    );
};

export default ThemeToggleButton;
