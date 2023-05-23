import {Button, FlatList, Text, View} from "react-native";

function renderItem({item}) {
  return (<View style={{flexDirection: "row"}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>{item.name}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>{item.reg}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>{item.claass}</Text>
      </View>)
}

export default function All({navigation, route}) {
  const data = route.params.data;
  return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <FlatList data={data} renderItem={renderItem} style={{
            width: "100%",
          }}/>
        </View>
        <View style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white',
        }}>
          <Button
              title="Go Back"
              onPress={() => navigation.goBack()}
          />
        </View>
      </View>);
}
