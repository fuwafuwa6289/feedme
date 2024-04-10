import * as React from 'react';
import { Text, View,TouchableOpacity,Image,StyleSheet,TextInput,useState} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Chat({ navigation }) {
  const [inputText, setInputText] = React.useState('');
  return (
    <>
    <View>
    <TouchableOpacity onPress={() => console.log('Go to Profile')}>
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={require("../assets/ellipse-46.png")}
      />
    </TouchableOpacity>
  </View>
  
  <Text style={{color:'#FF4B10',fontSize:32,fontFamily:'Mitr-Regular',alignSelf:'center',top:45}}>
    แชท
  </Text>
  <View style={styles.Search}>

  <Icon name="search" size={20} color="#FE502A" style={styles.searchIcon} />
  <TextInput
    style={styles.input}
    onChangeText={setInputText}
    value={inputText}
    placeholder="ค้นหาบทสนทนา"
    
  />
</View>
<View style={{alignSelf:'center',justifyContent:'center',left:10}}>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/ellipse-184.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>ตี้น้อยปาร์ตี้</Text>
        <Text style={styles.textt}>ไว้เจอกันใหม่</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text >00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>ชอบอาหารไทย</Text>
        <Text style={styles.textt}>ขอบคุณที่มากินข้าวด้วยกันนะครับ</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text>00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>สุดหล่อต่อยตึง</Text>
        <Text style={styles.textt}>อาหารมื้อนี้อร่อยมากครับ</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text>00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>โดยองหิวข้าว</Text>
        <Text style={styles.textt}>กินข้าวด้วยกันไหมครับ</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text>00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>เจโน่รักมัมหมีนะคับ</Text>
        <Text style={styles.textt}>ถึงไหนแล้วครับ</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text>00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/group-62.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>มาสี่ใส่เดี่ยว มาคนเดียวใส่หมด</Text>
        <Text style={styles.textt}>ตอนนี้ถึงสามคนแล้วครับ</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text>00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/jan.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>น้องแจน</Text>
        <Text style={styles.textt}>ข้อความ</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text>00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('Go to Profile')}>
<View style={styles.con}>
<Image
        style={styles.image}
        contentFit="cover"
        source={require("../assets/group-561.png")}
      />
      <View style={{width:263,height:50,left:10,top:3}}>
        <View style={{width:200,height:30}}>
        <Text style={styles.text}>คิดว่าหล่อก็มา</Text>
        <Text style={styles.textt}>เดินทางกลับปลอดภัยนะครับพี่</Text>
        </View>
        <View style={{width:40,height:20,alignSelf:'flex-end',position:'absolute',top:10}}>
          <Text>00.00</Text>
        </View>
      </View>
</View>
</TouchableOpacity>

</View>
</>
  );
}
const styles = StyleSheet.create({
  textt:{
    fontFamily:'Mitr-Regular'
  },
  text:{
    fontSize:17 , color:'black',
    fontFamily:'Mitr-Regular'
  },
  con:{
    flexDirection:'row',
    alignItems: 'center',
    width:340,
    marginTop:20
  },
  image:{
    width:50,
    height:50,
    

  },
iconLayout: {
  position: 'absolute',
  top: 10,
  right: 20,
},
Search: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2,
  borderColor: '#FE502A',
  borderRadius: 10,
  paddingHorizontal: 10,
  marginTop: 45,
  width: '85%',
  height: 50,
  left: 32
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
})

export default Chat;
