import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Screens/Home";
import Name from "./Screens/Name";
import Registration from "./Screens/Registration";
import Claass from "./Screens/Claass";
import All from "./Screens/All";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

const data = [
  {
    id: 1,
    name: 'Malik Ashir Khan',
    reg: 'FA20-BSE-154',
    claass: 'BCS-6A'

  },
  {
    id: 2,
    name: 'Itachi Uchiha',
    reg: 'FA21-BCS-002',
    claass: 'BCS-3A'

  },
  {
    id: 3,
    name: 'Paulo Coelho',
    reg: 'SP20-BCS-003',
    claass: 'BCS-6C'
  },
  {
    id: 4,
    name: 'Hatake Kakashi',
    reg: 'SP18-BCS-004',
    claass: 'BSE-8B'
  }
];
const HeaderButtons = ({navigation}) => {
  return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.button, {backgroundColor: "#b00000"}]}
                          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "#9f9500"}]}
                          onPress={() => navigation.navigate('Name', {
                            names: data.map((t) => {
                              return t.name
                            })
                          })}>
          <Text style={styles.txt}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "#218f00"}]}
                          onPress={() => navigation.navigate('Registration', {
                            regs: data.map((t) => {
                              return t.reg
                            })
                          })}>
          <Text style={styles.txt}>Reg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "#001496"}]}
                          onPress={() => navigation.navigate('Claass', {
                            claasses: data.map((t) => {
                              return t.claass
                            })
                          })}>
          <Text style={styles.txt}>Class</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "#000000"}]}
                          onPress={() => navigation.navigate('All', {data: data})}>
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
          headerLeft: null,//so that default back arrow button don't appear
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