import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { WebView } from 'react-native-webview';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native';
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

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: 'http://localhost:5173' }} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
