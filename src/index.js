import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ProviderNotes from './global/context/Context'

import Stack from './routes/Stack'

export default function Index() {
  return (
    <SafeAreaProvider>
      <ProviderNotes>
        <NavigationContainer>
          <StatusBar
            backgroundColor="rgba(0, 0, 0, 0)"
            barStyle="dark-content"
            translucent={true}
          />
          <Stack />
        </NavigationContainer>
      </ProviderNotes>
    </SafeAreaProvider>
  )
}
