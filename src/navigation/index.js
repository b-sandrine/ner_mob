import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="welcome" 
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  )
}
