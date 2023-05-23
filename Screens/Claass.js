import {Button, Text, View} from "react-native";


export default function Claass({navigation,route}) {
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        {route.params.claasses.map((claass,index)=><Text key={index} style={{fontSize: 30, fontWeight: 'bold',}}>{claass}</Text>)}
        <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
        />
      </View>
  );
}
