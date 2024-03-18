import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import PopupMenu from 'react-native-simple-popup-menu';

export default function App() {
  return (
    <View style={styles.container}>
      <PopupMenu
        onPress={() => {
          console.log("teste")
        }}
        onError={() => {}}
        items={[
          'teste'
        ]}
        // underlayColor={"#2353fc"}
        style={{
          // backgroundColor: "#000"
        }}
      />
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
