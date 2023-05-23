import {Button, Text, View} from "react-native";


export default function Name({navigation,route}) {
  const names=route.params.names;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {route.params.names.map((name,index)=><Text key={index} style={{fontSize: 30, fontWeight: 'bold',}}>{name}</Text>)}
          <Button
              title="Go Back"
              onPress={() => navigation.goBack()}
          />
        </View>
    );
}
