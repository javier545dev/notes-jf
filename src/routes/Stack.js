import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Create from '../pages/Create'

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
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.item.title,
          headerStyle: {
            backgroundColor: route.params.item.colorPriority,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Edit" component={Create} />
    </Stack.Navigator>
  )
}
