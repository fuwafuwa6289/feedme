import * as React from 'react';
import { Text, View } from 'react-native';

function CreateParty({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => navigation.navigate('Home')}>Create Hi!</Text>
    </View>
  );
}

export default CreateParty;
