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
        </View> 
        {/* ภาพร้านอาหาร */}
        <View >
          <View style={{flexDirection:'row',marginTop:65,
    height: 174,}}>
        <Image
        style={[styles.item, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-135.png")}
      />
      </View>
      <View style={{flexDirection:'row',paddingHorizontal:24,paddingVertical:5,justifyContent: 'space-around',left:5}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={[styles.inner]}
        resizeMode="cover"
        source={require("../assets/rectangle-145.png")}
      />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
        style={[styles.inner]}
        resizeMode="cover"
        source={require("../assets/rectangle-155.png")}
      />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
        style={[styles.inner]}
        resizeMode="cover"
        source={require("../assets/rectangle-166.png")}
      />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
        style={[styles.inner]}
        resizeMode="cover"
        source={require("../assets/rectangle-155.png")}
      />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
        style={[styles.inner]}
        resizeMode="cover"
        source={require("../assets/rectangle-155.png")}
      />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
        style={[styles.inner]}
        resizeMode="cover"
        source={require("../assets/rectangle-155.png")}
      />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
        style={[styles.inner2]}
        resizeMode="cover"
        source={require("../assets/rectangle-203.png")}
      />
        </View>
      </View>
         
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginTop:20,paddingHorizontal:24,marginLeft:5}}> 
            
            
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', flex: 1,}}>
            
              <Text style={styles.restaurantName}>หงส์ติ่มซำ</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                <Image style={{ marginTop: 3 }}
                  contentFit="cover"
                  source={require("../assets/star-1.png")} />
                <Text style={styles.detailStar} >5.0 (500) | อาหารนานาชาติ</Text>
              </View>
              <Text style={styles.detail}>500 km (40 นาที)</Text>

              <Text style={styles.showReview}>Show review</Text>
             
             
            </View>
            <View style={{justifyContent:'center',}}>
            <Image
        style={[styles.rectangleIcon1]}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <Text style={styles.showMap}>Show map</Text>
            </View>
          </View>

        <View style={styles.card}>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', flex: 1,}}>
            
        <Text style={styles.partyName}>โดยองหิวข้าว</Text>
        <Text style={styles.caption}>“รักปลารักเขาไม่รักเราเหรอ”</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
            <Image
          style={{ marginTop: 3 }}
          resizeMode="cover"
          source={require("../assets/linemdaccount.png")}
        />
              <Text style={styles.memberDetail} >สมาชิกปาร์ตี้ ( 1/2 คน )</Text>
            </View>
            <Text style={styles.timeTopic}>ช่วงเวลานัดหมาย</Text>

            <Text style={styles.timeDetail}>วันที่ 05/04/2024</Text>
            <Text style={styles.timeDetail}>เวลา 10:00 น.</Text>
          </View>
          <View style={{justifyContent:'center',}}>
          <TouchableOpacity  style={styles.parent}>
                <Text style={styles.joinButton} >เข้าร่วม</Text>
                </TouchableOpacity>
          </View>
        </View>
        <View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1,justifyContent:'flex-start',marginHorizontal:24,marginTop:15}}>
          <Text style={styles.membertopic}>รายชื่อสมาชิก</Text>
        </View>

        <View style={styles.card2}>
          <View>
          <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-461.png")}
        />
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:7}}>
          <Text style={styles.memberName}>
          พี่โดไม่ชอบคนทางขวา
        </Text>
          </View>
        </View>
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
  membertopic:{
    fontSize:14,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  memberName:{
    fontSize:13,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  partyName: {
    fontSize: 32,
    marginTop: -5,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  joinButton: {
    fontSize: 13,
    color: '#FFFFFF',
    fontFamily: 'Mitr-Regular',
  },
  parent: {
    borderRadius: 15,
    backgroundColor: '#FF8259',
    width: 99,
    height: 29,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 11,
    paddingVertical: 4,
  },
  
  restaurantName: {
    fontSize: 16,
    margin: 1,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  detail: {
    fontSize: 10 ,
    margin: 2,
    marginBottom: 1,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  timeTopic: {
    fontSize: 13 ,
    margin: 2,
    marginBottom: 2,
    color: 'black',
    fontFamily: 'Mitr-Regular',
  },
  showMap: {
    fontSize: 10 ,
    margin: 2,
    marginBottom: 2,
    color: '#F24E1E',
    fontFamily: 'Mitr-Regular',
    textAlign:'right'
  },
  showReview: {
    fontSize: 10 ,
    margin: 2,
    marginBottom: 2,
    color: '#F24E1E',
    fontFamily: 'Mitr-Regular',
  },
  timeDetail: {
    fontSize: 13 ,
    margin: 2,
    marginBottom: 2,
    color: '#5E5E5E',
    fontFamily: 'Mitr-Regular',
  },
  caption: {
    fontSize: 15 ,
    margin: 2,
    marginBottom: 2,
    color: '#5E5E5E',
    fontFamily: 'Mitr-Regular',
  },
  detailStar: {
    fontSize: 10,
    marginBottom: 1,
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
  rectangleIcon1: {
    justifyContent:'center',
    alignItems:'center',
    width: 206,
    height: 60,
    borderRadius: 6 ,
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
  inner2:{
  
      
      width: 20,
      height: 49,
  },
  input: {
    flex: 1,
  },

  
  item: {
    // top: 75,
    width: 363,
    height: 174,
    left: 30,
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
  childLayout1: {
    height: 49,
    top: 256,
    borderRadius: 6,
    position: "absolute",
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
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FEF1EE',
    borderRadius: 21,
    paddingHorizontal: 10,
    paddingVertical:10,
    marginTop: 10,
    height: 195,
    width: '90%',
    left: 20,
  },

  card2: {
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FEF1EE',
    borderRadius: 21,
    paddingTop:10,
    marginTop: 10,
    height: 152,
    width: 162,
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
  inner: {
    width: 53,
    height: 49,
    // top: 80,
    // left: 38,
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
    height: 175,
    width: 364,
    borderRadius: 5
  },

});
