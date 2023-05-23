import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Screens/Home";
import Name from "./Screens/Name";
import Registration from "./Screens/Registration";
import Claass from "./Screens/Claass";
import All from "./Screens/All";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

const HeaderButtons = ({navigation}) => {

  return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.button,{backgroundColor: "#b00000"}]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: "#9f9500"}]} onPress={() => navigation.navigate('Name')}>
          <Text style={styles.txt}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: "#218f00"}]} onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.txt}>Reg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: "#001496"}]} onPress={() => navigation.navigate('Claass')}>
          <Text style={styles.txt}>Class</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: "#000000"}]} onPress={() => navigation.navigate('All')}>
          <Text style={styles.txt}>All</Text>
        </TouchableOpacity>
      </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRoute={"Home"} screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: 'silver',
          },
          headerLeft: null,
          headerRight: () => <HeaderButtons navigation={navigation}/>,

        })}>
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  txt: {
    color: 'white', fontSize: 10,
    textAlign: 'center',
  }
});