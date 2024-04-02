import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';


const App = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
      <GluestackUIProvider config={config}>
        <Navigation />
      </GluestackUIProvider>
    </SafeAreaProvider>
  
  );
}

export default App;