import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Screens/Home";
import Name from "./Screens/Name";
import Registration from "./Screens/Registration";
import Claass from "./Screens/Claass";
import All from "./Screens/All";

const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Name" component={Name}/>
          <Stack.Screen name="Registration" component={Registration}/>
          <Stack.Screen name="Claass" component={Claass}/>
          <Stack.Screen name="All" component={All}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default function Q2() {
  return <MyStack/>;
}