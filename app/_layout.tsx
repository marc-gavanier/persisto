import { Stack } from 'expo-router';
import '../global.css';
import { provide } from '@/src/libraries/injection';
import { useColorScheme } from '@/src/libraries/theme';
import { THEME } from '@/src/libraries/theme/theme.key';
import { darkTheme, lightTheme } from '@/src/themes';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  provide(THEME, colorScheme === 'dark' ? darkTheme : lightTheme);

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
