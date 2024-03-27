import * as React from 'react';
import { Text, View } from 'react-native';

function Post({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => navigation.navigate('Home')}>Post Hi!</Text>
    </View>
    // สวยมาก
  );
}

export default Post;
