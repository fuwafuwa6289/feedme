import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Chatinner = () => {
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

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <LinearGradient
                colors={['#FF7336', '#FFFFFF']}
                style={{ flex: 0.30 }}>
            </LinearGradient>

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
                source={require("../assets/ellipse-184.png")} />
            <Text style={styles.text4}>ตี๋น้อยปาร์ตี้</Text>
            <Text style={styles.text5}>กำลังใช้งาน</Text>
            <Text style={styles.textFlexBox}>สุกี้ตี๋น้อย เกษตร-นวมินทร์</Text>
            <Image
                style={styles.starIcon}
                resizeMode="cover"
                source={require("../assets/star-11.png")} />
            <Text style={styles.textstar}>5.0 (500) | อาหารไทย</Text>

            <Text style={styles.km}>500 km (40 นาที)</Text>
            <Text style={styles.textmember}>จำนวนสมาชิก 3 (คน)</Text>
            <Text style={styles.texthost}>น้องแทไม่ชอบคนทางซ้าย (Host)</Text>
            <Image
                style={styles.hostIcon}
                resizeMode="cover"
                source={require("../assets/bxscrown.png")} />

            <Text style={styles.hosttime}>วันที่นัดหมาย : 11/03/2024 เวลา : 15:00 น.</Text>
            <Text style={styles.textconfirm}>ยืนยันการนัดพบ</Text>

            <TouchableOpacity onPress={handleConfirmation} style={styles.buttonConfirm}>
                <Text style={styles.buttonText}>ยืนยัน</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={styles.buttonCancel}>
                <Text style={styles.buttonText}>ยกเลิก</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Chatinner;

const styles = StyleSheet.create({
    iconBack: {
        position: 'absolute',
        top: -193,
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
});
