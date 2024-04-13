import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const Maps = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [markerPosition, setMarkerPosition] = useState({});
  const [polylineCoords, setPolylineCoords] = useState([]);

  const startPoint = { latitude: 40.0800359, longitude: 29.5096528 };
  const endPoint = { latitude: 40.0835653, longitude: 29.5111032 };
  const secondCoords = { latitude: 40.082262, longitude: 29.510291 };

  useEffect(() => {
    setCoordinates([startPoint, endPoint]);
    setPolylineCoords([startPoint, endPoint]); 
    setMarkerPosition(startPoint); 

    const secondCoordsTimer = setTimeout(() => {
      setMarkerPosition(secondCoords); 
      setPolylineCoords([startPoint, secondCoords, endPoint]); 
    }, 2000);

    const thirdCoordsTimer = setTimeout(() => {
      setMarkerPosition(endPoint); 
      setPolylineCoords([startPoint, secondCoords, endPoint]); 
    }, 5000);

    return () => {
      // Temizlik
      clearTimeout(secondCoordsTimer);
      clearTimeout(thirdCoordsTimer);
    };
  }, []);

  const delivery = 'https://static.vecteezy.com/system/resources/previews/014/069/831/original/motorbike-for-food-delivery-service-online-ordering-concept-png.png'
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.0800359,
          longitude: 29.5096528,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={markerPosition} title="Motor">
          <Image
            source={{
              uri: delivery,
            }}
            style={{ width: 32, height: 32 }}
          />
        </Marker>
        <Polyline
          coordinates={polylineCoords}
          strokeWidth={4}
          strokeColor="blue"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Maps;
