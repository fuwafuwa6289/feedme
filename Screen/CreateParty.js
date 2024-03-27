import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image  } from 'react-native';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/themed';
const CreateParty = (props) => {
    const [text, onChangeText] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
    const [text3, onChangeText3] = React.useState(null);
    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const [selectedImage, setSelectedImage] = React.useState([]);

    const openImagePicker = () => {
      const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
      };
  
      launchImageLibrary(options, (response) => {
          if (response.didCancel) {
              console.log('User cancelled image picker');
          } else if (response.error) {
              console.log('Image picker error: ', response.error);
          } else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              if (selectedImage.length < 3) {
                  setSelectedImage(prevImages => [...prevImages, imageUri]);
              } else {
                  console.log('You can only select up to 3 images.');
              }
          }
      });
  };
  
  const handleCameraLaunch = () => {
      const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
      };
  
      launchCamera(options, response => {
          console.log('Response = ', response);
          if (response.didCancel) {
              console.log('User cancelled camera');
          } else if (response.error) {
              console.log('Camera Error: ', response.error);
          } else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              if (selectedImage.length < 3) {
                  setSelectedImage(prevImages => [...prevImages, imageUri]);
              } else {
                  console.log('You can only select up to 3 images.');
              }
          }
      });
  };
  

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <LinearGradient
                colors={['#FF7336', '#FFFFFF']}
                style={{ flex: 0.30 }}>
            
            <Text style={styles.text}>
                สร้างปาร์ตี้
            </Text>
            <View style={styles.containerinput}>
                <View style={styles.textinput}>
                <LinearGradient
                colors={['#FFF4EF', '#FFFFFF']}
                style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', color: '#FF5C00' }}>ชื่อปาร์ตี้</Text>
                </LinearGradient>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="โปรดตั้งชื่อปาร์ตี้"
                />
                <View style={styles.textinput}><Text style={{ textAlign: 'center', color: '#FF5C00' }}>วันที่-เวลา</Text></View>
                <View style={styles.input}>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <View>
                            <Text style={{ color: 'black' }}>{date.toDateString()}, {date.toLocaleTimeString()} </Text>
                        </View>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                
                <View style={styles.textinput}><Text style={{ textAlign: 'center', color: '#FF5C00' }}>สถานที่</Text></View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder="เลือกสถานที่"
                />
                
                <View style={styles.textinput1}><Text style={{ textAlign: 'center', color: '#FF5C00' }}>จำนวนคน</Text></View>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="จำนวนคน"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
                <View style={styles.textinput2}><Text style={{ textAlign: 'center', color: '#FF5C00' }}>รายละเอียดเพิ่มเติม</Text></View>
                <TextInput
                    style={styles.input1}
                    onChangeText={onChangeText3}
                    value={text3}
                    placeholder="   -"
                />
                <View style={styles.textinput3}><Text style={{ textAlign: 'center', color: '#FF5C00' }}>รูปภาพ</Text></View>
                <View style={{justifyContent: 'center',borderWidth:1,borderColor:'#FF5C00',width:342,height:131,justifyContent:'flex-end',bottom:5 ,borderRadius: 12,}}>
                <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center'}}>
    {selectedImage.map((image, index) => (
        <Image
            key={index}
            source={{ uri: image }}
            style={{ width: 100, height: 80, margin: 5 }}
        />
       
    ))}
     </View>
                    <View style={{flexDirection: 'row',justifyContent:'center'}}>
                    <View >
                        {/* <Button title="Choose from Device" onPress={openImagePicker} /> */}
                        <TouchableOpacity onPress={() => setOpen(true)}>
                        <View>
                            <Icon name="image-outline" size={26} onPress={openImagePicker} />
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:30}}>
                        {/* <Button title="Open Camera" onPress={handleCameraLaunch} /> */}
                        <TouchableOpacity onPress={() => setOpen(true)}>
                        <View>
                            <Icon name="camera" size={26} onPress={handleCameraLaunch} />
                        </View>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
                <Button
              title="สร้างปาร์ตี้"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: '#FF8259',
                borderColor: 'transparent',
                borderRadius: 12,
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            </View>
            </LinearGradient>   
        </View>
    )
}

const styles = StyleSheet.create({
 

    text: {
        fontFamily:'Mitr Regular',
        fontSize:40,
       marginTop:140,
        alignSelf:'center',
        fontWeight:'bold',
        color:'#E6420C',
        textShadowColor: 'rgba(0, 0, 0, 0.45)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 10
      },
      input: {
        width:342,
        height: 44,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        color:'black',
        borderColor:'#FF5C00',
        display:'flex'
      },
      containerinput:{
        alignItems:'center',
      
        
      },
     textinput:{
      height:20,
      width:60,
      backgroundColor:'white',
      top:10,
      zIndex:1,
      right:120
     },
     dropdown: {
      width:'83%',
      margin: 16,
      height: 48,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      borderColor:'#FF5C00',
      borderWidth:1,
      bottom:15
    },
    placeholderStyle:{
      fontSize:15,
      color:'#A8ABAD',
    },
    textinput1:{
      height:20,
      width:65,
      backgroundColor:'white',
      top:10,
      zIndex:1,
      right:120,
      top:10
     },
     textinput2:{
      height:20,
      width:120,
      backgroundColor:'white',
      zIndex:1,
      right:90,
      bottom:19
     },input1: {
      width:342,
      height: 44,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      color:'black',
      borderColor:'#FF5C00',
      display:'flex',
      bottom:28
    },textinput3:{
        height:20,
        width:50,
        backgroundColor:'white',
        zIndex:1,
        right:90,
        bottom:19,
        position:'absolute',
        right:305,
        bottom:185
       }
     
     
})
export default CreateParty