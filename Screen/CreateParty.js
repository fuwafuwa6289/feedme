import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Modal,useEffect, FlatList } from 'react-native';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/themed';
import { Image } from '@rneui/themed';
import { useNavigationState } from '@react-navigation/native';
import moment from 'moment';
import { push, ref, set,get } from "firebase/database";
import{db} from '../comp/config'



const CreateParty = ({ route,navigation }) => {
    const [nid, setnId] = React.useState(0);
    const { restaurantName, restaurantImages,restaurantType,restaurantStar,restaurantDistance,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10 } = route.params || {};
    const isPartyCreated = restaurantName || restaurantImages||restaurantType||restaurantDistance||restaurantStar||img1||img2||img3||img4||img5||img6||img7||img8||img9||img10;
    const [star, setstar] = React.useState(isPartyCreated ? restaurantStar : null);
    const [imgg0, setimg0] = React.useState(isPartyCreated ? img1 : null);
    const [imgg1, setimg1] = React.useState(isPartyCreated ? img2 : null);
    const [imgg2, setimg2] = React.useState(isPartyCreated ? img3 : null);
    const [imgg3, setimg3] = React.useState(isPartyCreated ? img4 : null);
    const [imgg4, setimg4] = React.useState(isPartyCreated ? img5 : null);
    const [imgg5, setimg5] = React.useState(isPartyCreated ? img6 : null);
    const [imgg6, setimg6] = React.useState(isPartyCreated ? img7 : null);
    const [imgg7, setimg7] = React.useState(isPartyCreated ? img8 : null);
    const [imgg8, setimg8] = React.useState(isPartyCreated ? img9 : null);
    const [imgg9, setimg9] = React.useState(isPartyCreated ? img10 : null);

    const [distance, setdistance] = React.useState(isPartyCreated ? restaurantDistance : null);
    const [type, settype] = React.useState(isPartyCreated ? restaurantType : null);
    const [text2, onChangeText2] = React.useState(isPartyCreated ? restaurantName : null);
    const [selectedImage1, setSelectedImage1] = React.useState(isPartyCreated && restaurantImages[0] ? [restaurantImages[0]] : []);
    const [selectedImage2, setSelectedImage2] = React.useState(isPartyCreated && restaurantImages[1] ? [restaurantImages[1]] : []);
    const [selectedImage3, setSelectedImage3] = React.useState(isPartyCreated && restaurantImages[2] ? [restaurantImages[2]] : []);
    React.useEffect(() => {
        if (route.params) {
        const { restaurantName, restaurantImages,restaurantType,restaurantStar,restaurantDistance,restaurantimg } = route.params || {};
        
        onChangeText(null);
        onChangeText3(null);
        onChangeText2(restaurantName || null);
          setimg0(img1 || null);
          setimg1(img2 || null);
          setimg2(img3 || null);
          setimg3(img4 || null);
          setimg4(img5 || null);
          setimg5(img6 || null);
          setimg6(img7 || null);
          setimg7(img8 || null);
          setimg8(img9 || null);
          setimg9(img10 || null);
          setstar(restaurantStar || null);
          setdistance(restaurantDistance || null);
          settype(restaurantType || null);
          setSelectedImage1(restaurantImages && restaurantImages.length > 0 ? [restaurantImages[0]] : []);
          setSelectedImage2(restaurantImages && restaurantImages.length > 1 ? [restaurantImages[1]] : []);
          setSelectedImage3(restaurantImages && restaurantImages.length > 2 ? [restaurantImages[2]] : []);
        }
      }, [route.params]);
    const image1 = require('../iconnn.png');
    const [text, onChangeText] = React.useState(null);
    // const [text2, onChangeText2] = React.useState(null);
    const [text3, onChangeText3] = React.useState(null);
    const [date1, setDate1] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const data = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
    ];
    // const [selectedImage1, setSelectedImage1] = React.useState([]);
    // const [selectedImage2, setSelectedImage2] = React.useState([]);
    // const [selectedImage3, setSelectedImage3] = React.useState([]);
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
                if (selectedImage1.length < 1) {
                    setSelectedImage1(prevImages => [...prevImages, imageUri]);
                } 
                else if (selectedImage2.length < 1) {
                    setSelectedImage2(prevImages => [...prevImages, imageUri]);
                } 
                else if (selectedImage3.length < 1) {
                    setSelectedImage3(prevImages => [...prevImages, imageUri]);
                } 
                
                else {
                    console.log('You can only select up to 3 images.');
                }
            }
        });
    };

    const [showModal, setShowModal] = React.useState(false);

    const handlePopup = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };
    const formatDateThai = (date) => {
        return moment(date).locale('th').format('DD/MM/YYYY');
    }
    const formatTime = (time) => {
        return moment(time).format('HH:mm');
    }

    function countItems() {
    const dbRef = ref(db, 'user');
    get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const count = Object.keys(data).length;
            setnId(count);
            console.log('Total number of items:', count);
        } else {
            console.log('No data available');
        }
    }).catch((error) => {
        console.error('Error getting data:', error);
    });
}
    
    function create(){
        // const newKey = push(child(ref(database),'users')).key;
        const newwId = nid + 1;
         set(ref(db, 'user/' + 'Id' +newwId), {
             nameParty: text,
             date : moment(date1).locale('th').format('DD/MM/YYYY'),
             time: moment(time).format('HH:mm'),
             position:text2,
             people:value,
             des:text3,
             img0:imgg0,
             img1:imgg1,
             img2:imgg2,
             img3:imgg3,
             img4:imgg4,
             img5:imgg5,
             img6:imgg6,
             img7:imgg7,
             img8:imgg8,
             img9:imgg9,
            //  resimg2:selectedImage2,
            //  resimg3:selectedImage3,
             type:type,
             star:star,
             distance:distance,
             party_id:nid
 
           }).then(() => {
             setnId(newwId);
             
           })
           .catch((error)=>{
             Alert(error);
           
           });
     }
 

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <LinearGradient
                colors={['#FF7336', '#FFFFFF']}
                style={{ flex: 0.35 }}>

            <Text style={styles.text}>
                    สร้างปาร์ตี้
                </Text>
        
                
                <View style={styles.containerinput}>
                    <View style={styles.textinput}>
                        <LinearGradient
                            colors={['#FFC0A6', '#FFD4C2']}
                            style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', color: '#FF5C00',fontFamily:'Mitr-Regular', }}>ชื่อปาร์ตี้</Text>
                        </LinearGradient>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="โปรดตั้งชื่อปาร์ตี้"
        
                    />
                    
                    <View style={styles.textdate}>
                    <LinearGradient
                            colors={['#FFE3D7', '#FFF0EA']}
                            style={{ flex: 1 }}><Text style={{ textAlign: 'center', color: '#FF5C00' ,fontFamily:'Mitr-Regular'}}>วันที่</Text>
                             </LinearGradient></View>
                    <View style={styles.input}>
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <View>
                                <Text style={{ color: 'black' ,fontFamily:'Mitr-Regular'}}>{formatDateThai(date1)} </Text>
                            </View>
                        </TouchableOpacity>
                        {open && (
                <DatePicker
                    modal
                    mode="date"
                    open={open}
                    date={date1}
                    onConfirm={(date1) => {
                        setOpen(false);
                        setDate1(date1);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                    locale="th-TH"
                />
            )}
                    </View>
                    <View style={styles.texttime}><Text style={{ textAlign: 'center', color: '#FF5C00' ,fontFamily:'Mitr-Regular'}}>เวลา</Text></View>
                    <View style={styles.inputtime}>
                        <TouchableOpacity onPress={() => setOpen1(true)}>
                            <View>
                                <Text style={{ color: 'black' ,fontFamily:'Mitr-Regular'}}>{formatTime(time)} </Text>
                            </View>
                        </TouchableOpacity>
                        {open1 && (
                <DatePicker
                    modal
                    mode="time"
                    open={open1}
                    date={time}
                    onConfirm={(time) => {
                        setOpen1(false);
                        setTime(time);
                    }}
                    onCancel={() => {
                        setOpen1(false);
                    }}
                    locale="th-TH"
                    display="inline"
                    is24Hour={true}
                />
            )}
                    </View>
                    

                    <View style={styles.textinput}><Text style={{ textAlign: 'center', color: '#FF5C00' ,fontFamily:'Mitr-Regular'}}>สถานที่</Text></View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText2}
                        value={text2}
                        placeholder="เลือกสถานที่"
                    />

                    <View style={styles.textinput1}><Text style={{ textAlign: 'center', color: '#FF5C00',fontFamily:'Mitr-Regular' }}>จำนวนคน</Text></View>
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
                    <View style={styles.textinput2}><Text style={{ textAlign: 'center', color: '#FF5C00' ,fontFamily:'Mitr-Regular'}}>รายละเอียดเพิ่มเติม</Text></View>
                    <TextInput
                        style={styles.input1}
                        onChangeText={onChangeText3}
                        value={text3}
                        placeholder="   -"
                    />
                    
                    <View style={styles.textinput3}><Text style={{ textAlign: 'center', color: '#FF5C00',fontFamily:'Mitr-Regular' }}>รูปภาพ</Text></View>
                  
                    <View style={{alignItems:'center',flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#FF5C00', width: 342, height: 131, bottom: 5, borderRadius: 12, }}>
                        
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                            
                            <View style={{ flexDirection: 'row',width:102,height:106,alignItems:'center',justifyContent: 'center'}}>
                           
                                {selectedImage1.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: image }}
                                        style={{ width: 90, height: 95, margin: 5 }}
                                        borderRadius={10}
                                    />
                                ))}

                                {selectedImage1.length < 1 && (
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <View >
                                            {/* <Button title="Choose from Device" onPress={openImagePicker} /> */}
                                            <TouchableOpacity onPress={() => setOpen(true)}>
                                                <View>
                                                    <Icon name="image-outline" size={26} onPress={openImagePicker} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginLeft: 12 }}>
                                            {/* <Button title="Open Camera" onPress={handleCameraLaunch} /> */}
                                            <TouchableOpacity onPress={() => setOpen(true)}>
                                                <View>
                                                    <Icon name="camera" size={26} onPress={handleCameraLaunch} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginHorizontal:5}}>
                            <View style={{ flexDirection: 'row',width:102,height:106 ,alignItems:'center',justifyContent: 'center'}}>
                                {selectedImage2.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: image }}
                                        style={{ width: 90, height: 95, margin: 5  }}
                                        borderRadius={10}
                                    />
                                ))}

                                {selectedImage2.length < 1 && (
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <View >
                                            {/* <Button title="Choose from Device" onPress={openImagePicker} /> */}
                                            <TouchableOpacity onPress={() => setOpen(true)}>
                                                <View>
                                                    <Icon name="image-outline" size={26} onPress={openImagePicker} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginLeft: 12 }}>
                                            {/* <Button title="Open Camera" onPress={handleCameraLaunch} /> */}
                                            <TouchableOpacity onPress={() => setOpen(true)}>
                                                <View>
                                                    <Icon name="camera" size={26} onPress={handleCameraLaunch} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row',width:102,height:106,alignItems:'center',justifyContent: 'center'}}>
                                {selectedImage3.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: image }}
                                        style={{ width: 90, height: 95, margin: 5  }}
                                        borderRadius={10}
                                    />
                                ))}

                                {selectedImage3.length < 1 && (
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <View >
                                            {/* <Button title="Choose from Device" onPress={openImagePicker} /> */}
                                            <TouchableOpacity onPress={() => setOpen(true)}>
                                                <View>
                                                    <Icon name="image-outline" size={26} onPress={openImagePicker} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginLeft: 12 }}>
                                            {/* <Button title="Open Camera" onPress={handleCameraLaunch} /> */}
                                            <TouchableOpacity onPress={() => setOpen(true)}>
                                                <View>
                                                    <Icon name="camera" size={26} onPress={handleCameraLaunch} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                            </View>
                        </View>
                        
                        
                        
                    </View>
  


                    <View style={styles.container}>
                        {/* <Button title="Show Modal" onPress={handlePopup} /> */}
                        <Button
                            title="สร้างปาร์ตี้"
                            titleStyle={{
                            fontFamily:'Mitr-Regular'
                        }}
                            buttonStyle={{
                                backgroundColor: '#FF8259',
                                borderColor: 'transparent',
                                borderRadius: 12,
                               
                            }}
                            
                            containerStyle={{
                                width: 300,
                                marginHorizontal: 50,
                                marginVertical: 5,
                            }}
                           
                            onPress={() => {
                                create();
                                handlePopup();
                                countItems();
                            }}
                            
                            
                        />
                        <Modal
                            visible={showModal}
                            animationType="fade"
                            transparent={true}
                            onRequestClose={() => setShowModal(false)}
                        >
                            <View style={styles.modalBackground}>
                                <LinearGradient
                                    colors={['#FFFFFF', '#E6420C']}
                                    style={{ padding: 2, borderRadius: 10, borderWidth: 2, borderColor: 'transparent' }}
                                >

                                    <View style={styles.modalContent}>
                                        <View style={{ width: 81, height: 85, alignSelf: 'center', marginTop: 15 }}>
                                            <Image

                                                source={require('../iconnn.png')}
                                                style={{ width: 81, height: 85 }}
                                            />
                                        </View>
                                        <Text style={{ alignSelf: 'center', fontSize: 24, fontWeight: 'bold', color: '#E6420C' }}>สร้างปาร์ตี้สำเร็จ</Text>

                                    </View>
                                </LinearGradient>
                            </View>
                        </Modal>

                    </View>

                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({


    text: {
fontFamily:'Mitr-Regular',
       fontSize: 40,
        marginTop: 90,
        alignSelf: 'center',
        // fontWeight: 'bold',
        color: '#E6420C',
        textShadowColor: 'rgba(0, 0, 0, 0.45)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 10,
    },
    input: {
        width: 342,
        height: 44,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color: 'black',
        borderColor: '#FF5C00',
        display: 'flex',
        fontFamily:'Mitr-Regular'
    },inputtime: {
        width: 342,
        height: 44,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color: 'black',
        borderColor: '#FF5C00',
        display: 'flex',
        fontFamily:'Mitr-Regular',
        marginTop:1
    },
    containerinput: {
        alignItems: 'center',


    },
    textinput: {
        height: 20,
        width: 60,
        backgroundColor: 'white',
        top: 10,
        zIndex: 1,
        right: 120
    },
    textdate: {
        height: 20,
        width: 40,
        backgroundColor: 'white',
        top: 9,
        zIndex: 1,
        right: 133
    },
    texttime: {
        height: 18,
        width: 40,
        backgroundColor: 'white',
        top: 10,
        zIndex: 1,
        right: 133
    },
    dropdown: {
        width: '83%',
        margin: 16,
        height: 48,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        borderColor: '#FF5C00',
        borderWidth: 1,
        bottom: 15,
        fontFamily:'Mitr-Regular'
    },
    placeholderStyle: {
        fontSize: 15,
        color: '#A8ABAD',
        fontFamily:'Mitr-Regular'
    },
    textinput1: {
        height: 20,
        width: 65,
        backgroundColor: 'white',
        top: 10,
        zIndex: 1,
        right: 120,
        top: 10
    },
    textinput2: {
        height: 20,
        width: 120,
        backgroundColor: 'white',
        zIndex: 1,
        right: 90,
        bottom: 19
    }, input1: {
        width: 342,
        height: 44,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color: 'black',
        borderColor: '#FF5C00',
        display: 'flex',
        bottom: 28,
        fontFamily:'Mitr-Regular'
    }, textinput3: {
        height: 20,
        width: 50,
        backgroundColor: 'white',
        zIndex: 1,
        right: 90,
        bottom: 19,
        position: 'absolute',
        right: 305,
        bottom: 175
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: 342,
        height: 192,


    },


})
export default CreateParty