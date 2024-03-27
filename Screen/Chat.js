import * as React from 'react';
import { Text, View } from 'react-native';

function Chat({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => navigation.navigate('Home')}>Chat Hi!</Text>
    </View>
  );
}

export default Chat;
