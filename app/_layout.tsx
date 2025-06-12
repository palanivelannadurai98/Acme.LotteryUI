import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-reanimated';

import { LottoProvider } from '@/context/lottoContext/LottoContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ToastProvider } from 'react-native-toast-notifications';

export default function RootLayout() {
  
  const colorScheme = useColorScheme();

  //To load custom fonts asynchronously
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // To prevent rendering until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    // Global toast notification provider
    <ToastProvider>
      {/* Global app state provider */}
      <LottoProvider>
        {/* Theme provider based on system preference */}
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          {/* Navigation stack configuration */}
          <Stack>
            {/* Hide headers for specific screens */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="screens/PlayNumbers/PlayNumbers" options={{ headerShown: false }} />
          </Stack>

          {/* Status bar styling */}
          <StatusBar style="auto" />
        </ThemeProvider>
      </LottoProvider>
    </ToastProvider>
  );
}
