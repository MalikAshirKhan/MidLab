import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>jyfjgfjgfjghg your app!</Text>
      <Button title={"Click me"} onPress={() => alert("Hello World")}/>
      <Text style={{
        color: "blue",
        fontSize: 30,
        fontWeight: "bold"
      }}>pa kuna de mnogay omndam</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
