import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ClassThai = () => {
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

        <View style={styles.Search2}>
        <Text style={[styles.textTopic, styles.textPosition2]}>ปาร์ตี้</Text>
        </View>

        <View style={styles.Search}>
          <Icon name="search" size={20} color="#FE502A" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            onChangeText={setInputText}
            value={inputText}
            placeholder="ค้นหาชื่อปาร์ตี้"
            
          />
        </View>
        <View style={styles.card}>

          <Text style={[styles.text, styles.textTypo]}>การเชิญชวนแนะนำ</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginTop: -20, }}>
            <View style={{ alignItems: 'flex-start' }}>
              <Image style={{ width: 170, height: 137, borderRadius: 10 }}
                resizeMode="cover"
                source={require("../assets/rectangle-131.png")}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', flex: 0.2, paddingLeft: 2 }}>
              <Image
                // style={[styles.mdifireIcon2, styles.mdifireIconLayout]}

                resizeMode="cover"
                source={require("../assets/mdifire.png")}

              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', flex: 1, }}>
              <Text style={styles.partyName}>โดยองหิวข้าว</Text>
              <Text style={styles.restaurantName}>หงส์ติ่มซำ</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                <Image style={{ marginTop: 3 }}
                  contentFit="cover"
                  source={require("../assets/star-1.png")} />
                <Text style={styles.detailStar} >5.0 (500) | อาหารนานาชาติ</Text>
              </View>
              <Text style={styles.detail}>500 km (40 นาที)</Text>

              {/* <Text style={styles.detail}>“รักปลารักเขาไม่รักเราเหรอ”</Text> */}
              <Text style={styles.memberDetail}>สมาชิกปาร์ตี้ ( 1/2 คน )</Text>
              <Pressable
                style={styles.parent}
              // onPress={onFramePressablePress}
              >
                <Text style={styles.joinButton} >เข้าร่วม</Text>
              </Pressable>
            </View>
          </View>
        </View>

       

       
      </View>
    </ScrollView>
  );
}

export default ClassThai;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  textPosition2: {
    left: "50%",
    position: "absolute",
  },
  textTopic: {
    marginLeft: -37,
    // top: 55,
    fontSize: 32,
    color: '#ff4b10',
    textAlign: "left",
    fontFamily: 'Mitr-Regular',
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FE502A',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '80%',
    height: 50,
    left: 45,
   
  },
  input: {
    flex: 1,
    fontFamily:'Mitr-Regular',
    // marginTop:-1,
    alignItems:'center',
    // backgroundColor:'pink',
    textAlignVertical:'center',
    alignContent:'center',


  },
  

  Search2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: '#FE502A',
    // borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 50,
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
  partyName: {
    fontSize: 16,
    marginTop: -1,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  restaurantName: {
    fontSize: 14,
    margin: 1,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  detail: {
    fontSize: 10,
    margin: 2,
    marginBottom: 2,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  detailStar: {
    fontSize: 10,
    margin: 2,
    marginBottom: 2,
    color: 'black',
    fontFamily: 'Mitr-Regular',
    paddingLeft: 2,

  },
  memberDetail: {
    fontSize: 10,
    margin: 2,
    marginBottom: 7,
    color: '#FF4B10',
    fontFamily: 'Mitr-Regular',

  },
  joinButton: {
    fontSize: 13,
    color: '#FF6C3A',
    fontFamily: 'Mitr-Regular',
  },
  parent: {
    borderRadius: 15,
    backgroundColor: '#ffe5dc',
    width: 87,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 11,
    paddingVertical: 4,
  },


  


});
