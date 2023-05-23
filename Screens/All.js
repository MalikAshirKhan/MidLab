import {Button, FlatList, Text, View} from "react-native";

function renderItem({item}) {
  return <Text style={{fontSize: 30, fontWeight: 'bold',}}>{item}</Text>;
}

export default function All({navigation,route}) {
  const data=route.params.data;
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FlatList data={data} renderItem={renderItem}/>
        <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
        />
      </View>
  );
}
