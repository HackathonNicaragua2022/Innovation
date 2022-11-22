import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View , } from "react-native";

const supportedURL = 'https://www.facebook.com/edward.blandon.31/';

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback( () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
       Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress}/>;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL fdgdfg</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;