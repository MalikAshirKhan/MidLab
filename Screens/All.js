import {Button, Text, View} from "react-native";


export default function All({navigation}) {
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Name Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
      </View>
  );
}
