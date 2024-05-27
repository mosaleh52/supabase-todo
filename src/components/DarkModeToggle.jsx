import { IconButton } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useColorMode } from '@chakra-ui/react';

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position={'fixed'}
      top={'4'}
      right={'4'}
      isRound="true"
      icon={colorMode === 'dark' ? <FiMoon /> : <FiSun />}
      onClick={toggleColorMode}
    />
  );
}
