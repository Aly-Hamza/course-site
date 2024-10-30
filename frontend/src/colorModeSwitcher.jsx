
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle color mode"
        />
    );
};

export default ColorModeSwitcher;
