import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from '../pages/Home'
import Detail from '../pages/Detail'

const Stack = createNativeStackNavigator()

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
