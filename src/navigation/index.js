import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome/Welcome";
const Stack = createStackNavigator();

export default function Navigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="welcome" 
          component={Welcome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  )
}
