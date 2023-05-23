import {Button, FlatList, Text, TextInput, View} from "react-native";
import {useState} from "react";


export default function Q1() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  return (
      <View style={styles.container}>
        <TextInput onChangeText={(t) => {
          setInfo({...info, id: t})
        }}/>
        <TextInput onChangeText={(t) => {
          setInfo({...info, name: t})
        }}/>
        <TextInput onChangeText={(t) => {
          setInfo({...info, regNo: t})
        }}/>
        <TextInput onChangeText={(t) => {
          setInfo({...info, age: t})
        }}/>
        <Button title="Add" onPress={() => {
          let temp = `${info.id}, ${info.name}, ${info.regNo}, ${info.age}`;
          setData([...data, temp]);
        }}/>
        {data.length > 0 &&
            <FlatList data={data} renderItem={
              ({item}) => <Text>{item}</Text>
            }/>}
      </View>
  );
}