import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import PopupMenu from 'react-native-android-popup-menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Highlight mode</Text>
      <PopupMenu
        onPress={(event, index) => {
          if (event === 'itemSelected') {
            console.log('Pressed:', index);
          } else {
            console.log('Dismissed');
          }
        }}
        onError={() => {}}
        items={['teste']}
        containerStyle={{
          margin: 16
        }}
        mode="highlight"
      />

      <Text>Native mode</Text>
      <PopupMenu
        onPress={(event, index) => {
          if (event === 'itemSelected') {
            console.log('Pressed:', index);
          } else {
            console.log('Dismissed');
          }
        }}
        onError={() => {}}
        items={['teste']}
        containerStyle={{
          margin: 16
        }}
        mode="native"
      />

      <Text>Opacity mode</Text>
      <PopupMenu
        onPress={(event, index) => {
          if (event === 'itemSelected') {
            console.log('Pressed:', index);
          } else {
            console.log('Dismissed');
          }
        }}
        onError={() => {}}
        items={['teste']}
        containerStyle={{
          margin: 16
        }}
        mode="opacity"
      />

      <Text>Without Feedback mode</Text>
      <PopupMenu
        onPress={(event, index) => {
          if (event === 'itemSelected') {
            console.log('Pressed:', index);
          } else {
            console.log('Dismissed');
          }
        }}
        onError={() => {}}
        items={['teste']}
        containerStyle={{
          margin: 16
        }}
        mode="without-feedback"
      />
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
