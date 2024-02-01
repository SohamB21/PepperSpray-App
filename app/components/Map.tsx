import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const locations = [
  ['Park Street', 22.5526, 88.3521],
  ['Salt Lake', 22.5726, 88.3639],
  ['New Town', 22.5895, 88.4769],
  ['Howrah', 22.5958, 88.2636],
  ['Garia', 22.4674, 88.3883],
  ['Behala', 22.4982, 88.3115],
  ['Tollygunge', 22.4982, 88.3115],
  ['Ballygunge', 21.5556, 88.3619],
  ['Ballygunge', 22.5176, 86.3619],
  ['Ballygunge', 22.5169, 88.3619],
  ['Ballygunge', 22.5176, 87.3619],
  ['Ballygunge', 22.5176, 88.3419],
  ['Ballygunge', 22.4176, 88.3619],
  ['Ballygunge', 22.5176, 88.3219],
  ['Ballygunge', 23.5176, 88.1519],
];

const Map = ({ fixedHeight }) => {
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [locationObtained, setLocationObtained] = useState(false);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 22.5726,
    longitude: 88.3639,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  useEffect(() => {
    const newMarkers = locations.map((location, index) => ({
      id: index + 1,
      coordinate: {
        latitude: location[1],
        longitude: location[2],
      },
      title: location[0],
      description: `This is marker ${index + 1}`,
    }));

    setMarkers(newMarkers);

    requestLocationPermission();

    getCurrentLocation();
  
  }, []);

  useEffect(() => {
    // Update initialRegion when locationObtained changes
    if (locationObtained) {
      setInitialRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }
  }, [locationObtained, userLocation]);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'We need your location for...',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        setLocationObtained(latitude !== null && longitude !== null);
      },
      (error) => {
        console.log('Error obtaining location:', error);
        setLocationObtained(false);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  // console.log("My location: ", userLocation);
  console.log("Location updated: ", locationObtained);
  console.log("Initial Region: ", initialRegion);

  return (
    <View style={[styles.mapContainer, { height: fixedHeight }]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Your Location"
            description="You are here"
            pinColor="skyblue"
          />
        )}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  ); 
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    // height will be set by the respective screens
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;