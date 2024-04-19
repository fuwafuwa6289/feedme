import { StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const [items, setItems] = useState([])
  const mapRef = useRef(null)

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetch('https://www.melivecode.com/api/attractions')
      .then(res => res.json())
      .then((result) => {
        // console.log(result)
        setItems(result)
      })
  }, [])

  const go = (latitude, longitude) => {
    mapRef.current.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    })
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Pressable onPress={() => go(item.latitude, item.longitude)}>
          <Text>{item.name}</Text>
          <Image source={{ uri: item.image }}
            style={{ width: 300, height: 150 }} />
        </Pressable>
      </View>
    );
  };

  if (items.length === 0) {
    return (<View><Text>Loading...</Text></View>)
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image
          style={styles.iconBack}
          resizeMode="cover"
          source={require("../assets/makiarrow.png")}
        />
      </TouchableOpacity>

      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: items[0].latitude,
          longitude: items[0].longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        {items.map((item, index) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude
            }}
            title={item.name}
          />
        ))}
      </MapView>

      <View style={styles.listView}>
        <FlatList
          horizontal={true}
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  iconBack: {
    position: 'absolute',
    top: -290,
    right: 20,
    width: 30,
    height: 30,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  listView: {
    position: 'absolute',
    bottom: 0
  },
  listItem: {
    padding: 5,
  }
});