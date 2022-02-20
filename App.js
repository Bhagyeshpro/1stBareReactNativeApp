import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={{color: "#000", fontSize: 29}}>I am successful freelancer + coder</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});