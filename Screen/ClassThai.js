import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ClassThai = () => {
  const [inputText, setInputText] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://pantira111.github.io/FeedmeApi/restaurant.json')
      .then(response => response.json())
      .then(data => {
        const thaiRestaurants = data[0].filter(restaurant => restaurant.type === 'อาหารไทย');
        setRestaurantData(thaiRestaurants);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const handleCreateParty = () => {
    console.log('Create Party');
    navigation.navigate('CreateParty');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card} key={index}>
      <Text style={[styles.textTypo]}>{item.name}</Text>
      <Image style={styles.starIcon} resizeMode="cover" source={require("../assets/star-1.png")} />
      <Text style={styles.text1}>{item.star} คะแนน | {item.type}</Text>
      <Text style={styles.text2}>{item.distance}</Text>
      
      <FlatList
        horizontal
        data={[item.image2, item.image3, item.image4 , item.image5, item.image6 ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        pagingEnabled
      />
      
      <TouchableOpacity style={styles.createpartyBT} onPress={handleCreateParty}>
        <Text style={styles.txtcreatepartyBT}>สร้างปาร์ตี้</Text>
      </TouchableOpacity>
    </View>
  );

  const renderEmpty = () => (
    <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} /> // Placeholder ในรูปแบบของ ActivityIndicator
  );

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'dummy' }]}
      renderItem={({ item }) => (
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

          <FlatList
            data={restaurantData}
            keyExtractor={(item, id) => id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
          />
        </View>
      )}
    />
  );
}

export default ClassThai;

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
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 60,
    width: '80%',
    height: 50,
    left: 45
  },

  input: {
    flex: 1,
    fontFamily: 'Kanit-Light',
    fontSize: 15,
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
    fontFamily: 'Kanit-Light',
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
    fontFamily: 'Kanit-Light'
  },

  textTypo: {
    position: 'absolute',
    top: 9,
    left: 15,
    color: 'black',
    textAlign: "left",
    fontFamily: 'Kanit-Light',
    fontSize: 16,
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
    fontFamily: 'Kanit-Light',
    fontSize: 12,
    color: 'Black'
  },

  text2: {
    position: 'absolute',
    top: 48,
    left: 15,
    color: 'black',
    textAlign: "left",
    fontFamily: 'Kanit-Light',
    fontSize: 12,
    color: 'Black'
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 5,
    margin: 5,
    marginTop: 15,
  },

  loadingIndicator: {
    marginTop: 20,
  },
});
