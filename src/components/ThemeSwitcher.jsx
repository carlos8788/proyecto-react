import { useState, useEffect } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import toggleThemeClasses from '../helpers/toggleThemeClasses';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');  // Estado del tema (claro u oscuro)

    // Opciones para el SelectButton (Modo Claro/Oscuro)
    const themeOptions = [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' }
    ];

    // Cambiar la clase del body según el tema seleccionado
    useEffect(() => {
        toggleThemeClasses(theme)
    }, [theme]);

    return (
        <div className="theme-switcher">
            <SelectButton value={theme} options={themeOptions} onChange={(e) => setTheme(e.value)} />
        </div>
    );
};

export default ThemeSwitcher;
