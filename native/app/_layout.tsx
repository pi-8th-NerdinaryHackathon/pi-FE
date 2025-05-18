import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { WebView } from 'react-native-webview';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    (async () => {
      // 리소스 사전 로딩 …
      await new Promise((r) => setTimeout(r, 1000));
      await SplashScreen.hideAsync(); // 2) 준비 끝나면 숨김
    })();
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const host = 
  "https://pi-k3ob7s8fj-hin6150s-projects.vercel.app/"
  // Platform.OS === 'android'
  //   ? 'http://10.0.2.2:5173' 
  //   : 'http://localhost:5173';
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: host }} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
