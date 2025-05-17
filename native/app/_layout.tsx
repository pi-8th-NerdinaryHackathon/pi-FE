import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { WebView } from 'react-native-webview';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform, SafeAreaView } from 'react-native';
import React from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const host = 
  // "https://pi-k3ob7s8fj-hin6150s-projects.vercel.app/"
  Platform.OS === 'android'
    ? 'http://10.0.2.2:5173' 
    : 'http://localhost:5173';

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: host }} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
