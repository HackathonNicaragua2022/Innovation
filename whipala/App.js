/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';


const App = () => {
  return(
    <View style = {styles.fondo}>
      <Text>Hola</Text>

      <View style = {styles.dos}>
      <Text>tertgerfgvfedgetr</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#1c1b29',
    flex: 1,
    alignItems: 'center'
  },

  dos:{
    backgroundColor:  '#282840',
    height: 200,
    with: 200
  }
})

export default App;