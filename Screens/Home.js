import {Button, Text, View} from "react-native";


export default function Home({navigation}) {
  return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold',}}>I'm in Home Screen</Text>
        <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
        />
      </View>);
}