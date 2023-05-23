import {Button, FlatList, Text, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";


export default function Q1() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  return (<View style={styles.container}>
    <TextInput onChangeText={(t) => {
      setInfo({...info, id: t})
    }} style={styles.input}
               placeholder={"Enter ID"}
    />
    <TextInput onChangeText={(t) => {
      setInfo({...info, name: t})
    }}
               style={styles.input}
               placeholder={"Enter Name"}
    />
    <TextInput onChangeText={(t) => {
      setInfo({...info, regNo: t})
    }}
               style={styles.input}
               placeholder={"Enter Reg No"}
    />
    <TextInput onChangeText={(t) => {
      setInfo({...info, age: t})
    }}
               style={styles.input}
               placeholder={"Enter Age"}
    />
    <Button title="Add"  onPress={() => {
      let temp = `${info.id}, ${info.name}, ${info.regNo}, ${info.age}`;
      setData([...data, temp]);
    }}/>
    {
      data.length > 0 &&
        <FlatList data={data} renderItem={({item}) => <Text>{item}</Text>}
                                  style={styles.list}/>
    }
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: 50, backgroundColor: '#fff', // justifyContent: "center",
    alignItems: "center"
  }, input: {
    borderWidth: 0.5, borderColor: "black", borderRadius: 5, width: "90%", margin: 10, padding: 10
  }, list: {
    width: "90%", marginTop: 20, alignContent: 'flex-start'
  }
});