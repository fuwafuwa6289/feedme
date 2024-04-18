import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput, ScrollView, KeyboardAvoidingView,useEffect} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { GiftedChat } from 'react-native-gifted-chat';
const Chatinner = ({ route }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleConfirmation = () => {
        // Handle confirmation logic here
    };

    const handleCancel = () => {
        // Handle cancel logic here
    };

    const [chatHistory, setChatHistory] = useState([]); // เก็บประวัติการแชท
    const [partiesData, setPartiesData] = useState([]);
    const [inputText, setInputText] = useState('');
    const {
        img1,img2,img3,img4,img5,img6,img7,img8,img9,
        restaurantName,
        restaurantType,
        restaurantStar,
        restaurantDistance,
        partyName,
        partyDetail,
        partyMember,
        partyDate,
        partyTime,
        party_id,
        partyMem,
        host
      } = route.params;
   
      const handleSend = (messages) => {
        setChatHistory(GiftedChat.append(chatHistory, messages));
    };

    const renderMessageItem = ({ item }) => (
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView style={{ backgroundColor: '#FFFFFF', flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <LinearGradient
            colors={['#FF7336', '#FFFFFF']}
            style={{ flex: 0.8 }}
        />
        <TouchableOpacity onPress={handleGoBack}>
            <Image
                style={styles.iconBack}
                resizeMode="cover"
                source={require("../assets/makiarrow.png")}
            />
        </TouchableOpacity>

        <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={{uri:img1}} />
        <Text style={styles.text4}>{partyName}</Text>
        <Text style={styles.text5}>กำลังใช้งาน</Text>
        <Text style={styles.textFlexBox}>{restaurantName}</Text>
        <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star-11.png")} />
        <Text style={styles.textstar}>{ restaurantStar} | {restaurantType}</Text>

        <Text style={styles.km}>{restaurantDistance}</Text>
        <Text style={styles.textmember}>จำนวนสมาชิก {partyMem} (คน)</Text>
        <Text style={styles.texthost}>{host} (Host)</Text>
        <Image
            style={styles.hostIcon}
            resizeMode="cover"
            source={require("../assets/bxscrown.png")} />

        <Text style={styles.hosttime}>วันที่นัดหมาย : {partyDate} เวลา : {partyTime} น.</Text>
        <Text style={styles.textconfirm}>ยืนยันการนัดพบ</Text>

        <TouchableOpacity onPress={handleConfirmation} style={styles.buttonConfirm}>
            <Text style={styles.buttonText}>ยืนยัน</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={styles.buttonCancel}>
            <Text style={styles.buttonText}>ยกเลิก</Text>
        </TouchableOpacity>

        <View style={styles.container}>
            <GiftedChat
                messages={chatHistory}
                onSend={messages => {
                    setChatHistory(GiftedChat.append(chatHistory, messages));
                }}
                user={{
                    _id: 1,
                }}
            />
        </View>
    </KeyboardAvoidingView>
)}

export default Chatinner;

const styles = StyleSheet.create({
    iconBack: {
        position: 'absolute',
        top: -290,
        left: 20,
        width: 30,
        height: 30,
    },
    ellipseIcon: {
        position: 'absolute',
        top: 40,
        left: 70,
        width: 50,
        height: 50,
        borderRadius:100
    },
    text4: {
        position: 'absolute',
        marginTop: 40,
        marginLeft: 130,
        fontSize: 20,
        fontFamily: 'Kanit-Bold',
        color: 'white'
    },
    text5: {
        position: 'absolute',
        marginTop: 65,
        marginLeft: 130,
        fontSize: 14,
        fontFamily: 'Kanit-Light',
        color: 'green'
    },
    textFlexBox: {
        position: 'absolute',
        marginTop: 100,
        marginLeft: 70,
        fontSize: 14,
        fontFamily: 'Kanit-Regular',
        color: 'black'
    },
    starIcon: {
        position: 'absolute',
        marginTop: 123,
        marginLeft: 70,
        width: 12,
        height: 12,
    },
    textstar: {
        position: 'absolute',
        marginTop: 120,
        marginLeft: 85,
        fontSize: 12,
        fontFamily: 'Kanit-Light',
    },
    km: {
        position: 'absolute',
        marginTop: 135,
        marginLeft: 70,
        fontSize: 12,
        fontFamily: 'Kanit-Light',
    },
    textmember: {
        position: 'absolute',
        marginTop: 150,
        marginLeft: 70,
        fontSize: 12,
        fontFamily: 'Kanit-Light',
    },
    texthost: {
        position: 'absolute',
        marginTop: 180,
        marginLeft: 85,
        fontSize: 14,
        fontFamily: 'Kanit-Regular',
        color: '#FF6C3A',
    },
    hostIcon: {
        position: 'absolute',
        marginTop: 185,
        marginLeft: 70,
        width: 12,
        height: 12,
    },
    hosttime: {
        position: 'absolute',
        marginTop: 200,
        marginLeft: 70,
        fontSize: 14,
        fontFamily: 'Kanit-Regular',
        color: '#FF3A52',
    },
    textconfirm: {
        position: 'absolute',
        marginTop: 230,
        marginLeft: 70,
        fontSize: 16,
        fontFamily: 'Kanit-Light',
        color: 'black'
    },
    buttonConfirm: {
        position: 'absolute',
        width: 100,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#FF6C3A',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: 260,
    },
    buttonCancel: {
        position: 'absolute',
        width: 100,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#FF3A52',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 180,
        marginTop: 260,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Kanit-Light',
    },

    container: {
        marginTop: 50,
        margin: 10,
        flex: 1,
    },
    messagesList: {
        flex: 1,
    },
    messageContainer: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#FF984C',
        marginBottom: 10,
        borderRadius: 50,
        alignSelf: 'flex-end',
    },
    messageText: {
        color: '#FF872E',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#FF872E',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
        width: 200,
        height: 40,
        color: '#FF872E',
    },
    iconButton: {
        padding: 10,
        marginRight: 5
    },
    sendButton: {
        backgroundColor: '#FF872E',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
});


