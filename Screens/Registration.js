import {Button, Text, View} from "react-native";


export default function Registration({navigation,route}) {
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {route.params.regs.map((reg,index)=><Text key={index} style={{fontSize: 30, fontWeight: 'bold',}}>{reg}</Text>)}
        <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
        />
      </View>
  );
}
