import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox, Stack } from '@rneui/themed';
import FrameComponent from "./FrameComponent";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Home = () => {

  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  // checkbox
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);

  const toggleCheckbox1 = () => setChecked1(!checked1);
  const toggleCheckbox2 = () => setChecked2(!checked2);

  const handleCreateParty = () => {
    console.log('Create Party'); // ทำการ console log เมื่อปุ่ม "สร้างปาร์ตี้" ถูกกด
  };

  const handletoClassthai = () => {
    console.log('Classthai');
    navigation.navigate('ClassThai'); // ทำการ console log เมื่อปุ่ม "สร้างปาร์ตี้" ถูกกด
  };


  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <TouchableOpacity onPress={() => console.log('Go to Profile')}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/ellipse-46.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Search}>
          <Icon name="search" size={20} color="#FE502A" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            onChangeText={setInputText}
            value={inputText}
            placeholder="ค้นหาชื่อร้านอาหาร"
            
          />
        </View>


        <View style={styles.titleclass}>
          <Text style={styles.txtclass}>ร้านอาหารใกล้ฉัน</Text>
        </View>

        {/* checkbox */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 17 }}>
          <CheckBox
            title="ทาน 2 คน"
            checked={checked1}
            checkedIcon="circle"
            uncheckedColor="#FFE5DC"
            uncheckedIcon="circle"
            checkedColor="#FF6C3A"
            onPress={toggleCheckbox1}
            size={20}
            textStyle={{ color: '#FF6C3A', fontWeight: 'normal', fontFamily: 'Mitr-Regular', }}
          />
          <CheckBox
            title="ปาร์ตี้ 3 คนขึ้นไป"
            checked={checked2}
            checkedIcon="circle"
            uncheckedColor="#FFE5DC"
            uncheckedIcon="circle"
            checkedColor="#FF6C3A"
            onPress={toggleCheckbox2}
            size={20}
            textStyle={{ color: '#FF6C3A', fontWeight: 'normal', fontFamily: 'Mitr-Regular', }}
          />
        </View>

        <View style={styles.categoryCard}>
          <Text style={[styles.text, styles.textTypo]}>หมวดหมู่</Text>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', flex: 1, flexWrap: 'wrap', marginTop: 25 }}>
            {/* row1 */}
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <TouchableOpacity onPress={handletoClassthai}>
                <Image
                  resizeMode="cover"
                  source={require("../assets/ellipse-14.png")}
                />
              </TouchableOpacity>
              <Text style={styles.categoryText} >อาหารไทย</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
              <Text style={styles.categoryText}>อาหารนานาชาติ</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={require("../assets/ellipse-16.png")}
              />
              <Text style={styles.categoryText}>อาหารเช้า</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={require("../assets/ellipse-17.png")}
              />
              <Text style={styles.categoryText}>คาเฟ่และขนมหวาน</Text>
            </View>

            {/* row2 */}
            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
              <Image
                resizeMode="cover"
                source={require("../assets/ellipse-183.png")}
              />
              <Text style={styles.categoryText} >อาหารบุฟเฟต์</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={require("../assets/ellipse-194.png")}
              />
              <Text style={styles.categoryText}>อาหารแบนด์ดัง</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={require("../assets/ellipse-201.png")}
              />
              <Text style={styles.categoryText}>อาหารทะเล</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image
                resizeMode="cover"
                source={require("../assets/ellipse-21.png")}
              />
              <Text style={styles.categoryText}>อาหารเพื่อสุขภาพ</Text>
            </View>
          </View>
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
          {/* 2 */}




        </View>



      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
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
    marginTop: 60,
    width: '80%',
    height: 50,
    left: 45
  },
  starIcon: {
    height: 11,
    width: 11,
    left: 100,
  },
  text35Position: {
    top: 46,
    left: -1,
    position: "absolute",
  },

  input: {
    flex: 1,
    fontFamily: 'Mitr-Regular',
    // marginTop:-1,
    alignItems:'center',
    // backgroundColor:'pink',
    textAlignVertical:'center',
    alignContent:'center',


  },

  searchIcon: {
    marginRight: 10,
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
    fontFamily: 'Mitr-Regular',

  },

  txtclass: {
    color: '#FF6C3A',
    fontFamily: 'Mitr-Regular',
  },
  categoryText: {
    fontSize: 12,
    marginBottom: 10,
    marginTop: 5,
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
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FEF1EE',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 0,
    width: '90%',
    height: 270,
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
    marginTop: 10,
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
    color: '#FF6C3A',
    textAlign: "left",
    fontFamily: 'Mitr-Regular',
  },

  starIcon: {
    position: 'absolute',
    top: 33,
    left: 15,
  },
  text: {
    fontFamily: 'Mitr-Regular',
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