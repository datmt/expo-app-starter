import { Drawer } from 'expo-router/drawer';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // Add any custom fonts here if needed
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="(screens)/profile"
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="(screens)/notifications"
        options={{
          drawerLabel: 'Notifications',
          title: 'Notifications',
        }}
      />
      <Drawer.Screen
        name="(screens)/settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
        }}
      />
    </Drawer>
  );
}
