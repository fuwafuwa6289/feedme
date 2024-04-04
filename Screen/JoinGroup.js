import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const JoinGroup = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  const handleCreateParty = () => {
    console.log('Create Party');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            style={styles.iconBack}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Go to Profile')}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-46.png")}
          />
        </TouchableOpacity>

        <View style={styles.Search}>
          <Icon name="search" size={20} color="#FE502A" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            onChangeText={setInputText}
            value={inputText}
            placeholder="ค้นหาร้านอาหาร..."
          />
        </View>

        <View style={styles.titleclass}>
          <Text style={styles.txtclass}>อาหารไทย</Text>
        </View>

        <View style={styles.card}>
          <Text style={[styles.text, styles.textTypo]}>ยายสวย</Text>
          <Image style={styles.starIcon}
            contentFit="cover"
            source={require("../assets/star-1.png")} />
          <Text
            style={styles.text1}>{`5.0 (500) | อาหารไทย `}</Text>
          <Text style={styles.text2}>500 km (40 นาที)</Text>

          <Image
            style={[styles.frameItem]}
            contentFit="cover"
            source={require("../assets/rectangle-3.png")}
          />

          <Image
            style={[styles.frameItem2]}
            contentFit="cover"
            source={require("../assets/rectangle-5.png")}
          />

          <Image
            style={[styles.frameItem3]}
            contentFit="cover"
            source={require("../assets/rectangle-6.png")}
          />

          <TouchableOpacity style={styles.createpartyBT} onPress={handleCreateParty}>
            <Text style={styles.txtcreatepartyBT}>สร้างปาร์ตี้</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={[styles.text, styles.textTypo]}>ยำเจ๊เล็ก กินสามคำสวดอภิธรรมสามคืน</Text>
          <Image style={styles.starIcon}
            contentFit="cover"
            source={require("../assets/star-1.png")} />
          <Text
            style={styles.text1}>{`5.0 (500) | อาหารไทย `}</Text>
          <Text style={styles.text2}>500 km (40 นาที)</Text>

          <Image
            style={[styles.frameItem]}
            contentFit="cover"
            source={require("../assets/rectangle-16.png")}
          />

          <Image
            style={[styles.frameItem2]}
            contentFit="cover"
            source={require("../assets/rectangle-17.png")}
          />

          <Image
            style={[styles.frameItem3]}
            contentFit="cover"
            source={require("../assets/rectangle-18.png")}
          />

          <TouchableOpacity style={styles.createpartyBT} onPress={handleCreateParty}>
            <Text style={styles.txtcreatepartyBT}>สร้างปาร์ตี้</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={[styles.text, styles.textTypo]}>ส้มตำเจ๊ไฝ ตำนรกครกแตก</Text>
          <Image style={styles.starIcon}
            contentFit="cover"
            source={require("../assets/star-1.png")} />
          <Text
            style={styles.text1}>{`5.0 (500) | อาหารไทย `}</Text>
          <Text style={styles.text2}>500 km (40 นาที)</Text>

          <Image
            style={[styles.frameItem]}
            contentFit="cover"
            source={require("../assets/rectangle-161.png")}
          />

          <Image
            style={[styles.frameItem2]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />

          <Image
            style={[styles.frameItem3]}
            contentFit="cover"
            source={require("../assets/rectangle-181.png")}
          />

          <TouchableOpacity style={styles.createpartyBT} onPress={handleCreateParty}>
            <Text style={styles.txtcreatepartyBT}>สร้างปาร์ตี้</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default JoinGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },

  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FE502A',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 60,
    width: '80%',
    height: 40,
    left: 45
  },

  input: {
    flex: 1,
  },

  searchIcon: {
    marginRight: 10,
  },

  titleclass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFE5DC',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '80%',
    height: 40,
    left: 45,
    backgroundColor: '#FFE5DC',


  },

  txtclass: {
    color: '#FF6C3A',
    fontFamily: 'Mitr-Regular',
  },

  iconLayout: {
    position: 'absolute',
    top: 10,
    right: 20,
  },

  iconBack: {
    position: 'absolute',
    top: 10,
    left: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FEF1EE',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '90%',
    height: 250,
    left: 20,
  },

  createpartyBT: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFE5DC',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '40%',
    height: 40,
    backgroundColor: '#FFE5DC'
  },

  txtcreatepartyBT: {
    color: '#FF6C3A',
    fontFamily: 'Inter'
  },

  textTypo: {
    position: 'absolute',
    top: 10,
    left: 15,
    color: 'black',
    textAlign: "left",
    fontFamily: 'interRegular',
  },

  starIcon: {
    position: 'absolute',
    top: 33,
    left: 15,
  },

  text1: {
    position: 'absolute',
    top: 30,
    left: 30,
    color: 'black',
    textAlign: "left",
    fontFamily: 'interRegular',
    fontSize: 12,
    color: 'Black'
  },

  text2: {
    position: 'absolute',
    top: 48,
    left: 15,
    color: 'black',
    textAlign: "left",
    fontFamily: 'interRegular',
    fontSize: 12,
    color: 'Black'
  },

  frameItem: {
    position: 'absolute',
    top: 70,
    left: 15,
  },

  frameItem2: {
    position: 'absolute',
    top: 70,
    left: 150,
  },

  frameItem3: {
    position: 'absolute',
    top: 70,
    left: 285,
    height: 112,
    width: 70,
    borderRadius: 5
  },

});
