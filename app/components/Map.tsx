import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const locations = [
  ['Park Street', 'Danger: 42%', 22.5526, 88.3521],
  ['College Square', 'Danger: 75%', 22.5726, 88.3639],
  ['New Town', 'Danger: 18%', 22.5895, 88.4769],
  ['Howrah', 'Danger: 91%', 22.5958, 88.2636],
  ['Baruipur', 'Danger: 63%', 22.346059, 88.440067],
  ['Behala', 'Danger: 28%', 22.4982, 88.3115],
  ['Bolpur', 'Danger: 15%', 23.673776, 87.724615],
  ['Tarkeshwar', 'Danger: 37%', 22.877002, 88.012151],
  ['Diamond Harbour', 'Danger: 82%', 22.197643, 88.189398],
  ['Asansol', 'Danger: 59%', 23.6739, 86.9524],
  ['Barrackpore', 'Danger: 10%', 22.7691, 88.3639],
  ['Durgapur', 'Danger: 88%', 23.5204, 87.3119],
  ['Purulia', 'Danger: 51%', 23.349910, 86.364085],
  ['Kharagpur', 'Danger: 73%', 22.321411, 87.294178],
  ['Raiganj', 'Danger: 5%', 25.619150, 88.128277],
  ['Siliguri', 'Danger: 65%', 26.7271, 88.3953], 
  ['Haldia', 'Danger: 33%', 22.0257, 88.0583],   
  ['Digha', 'Danger: 20%', 21.6265, 87.5079],    
  ['Darjeeling', 'Danger: 10%', 27.0347, 88.2494], 
  ['Bankura', 'Danger: 50%', 23.2325, 87.0756],  
  ['Cooch Behar', 'Danger: 70%', 26.3249, 89.4497],    
  ['Jalpaiguri', 'Danger: 25%', 26.5435, 88.7198],
  ['Midnapore', 'Danger: 60%', 22.4259, 87.3215],
  ['Murshidabad', 'Danger: 45%', 24.1750, 88.2743],
  ['Malda', 'Danger: 80%', 25.0961, 88.1177],     
];

/* markers in a single straight line
const locations = [
  ['Park Street', 'Danger: 42%', 22.5526, 88.3521],
  ['College Square', 'Danger: 75%', 22.5726, 88.3535], 
  ['New Town', 'Danger: 18%', 22.5895, 88.3545],       
  ['Howrah', 'Danger: 91%', 22.5958, 88.3555],        
  ['Baruipur', 'Danger: 63%', 22.5968, 88.3565],      
  ['Behala', 'Danger: 28%', 22.5978, 88.3575],        
  ['Bolpur', 'Danger: 15%', 22.5988, 88.3585],        
  ['Tarkeshwar', 'Danger: 37%', 22.5998, 88.3595],    
  ['Diamond Harbour', 'Danger: 82%', 22.6008, 88.3605],
  ['Asansol', 'Danger: 59%', 22.6018, 88.3615],      
  ['Barrackpore', 'Danger: 10%', 22.6028, 88.3625],   
  ['Durgapur', 'Danger: 88%', 22.6038, 88.3635],      
  ['Purulia', 'Danger: 51%', 22.6048, 88.3645],       
  ['Kharagpur', 'Danger: 73%', 22.6058, 88.3655],     
  ['Raiganj', 'Danger: 5%', 22.6068, 88.3665],        
];*/

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
        latitude: location[2],
        longitude: location[3],
      },
      title: location[0],
      description: location[1],
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

        {markers.map((marker) => {
          const dangerPercentage = parseFloat(marker.description.split(':')[1]);
          const redIntensity = Math.round(255 * (dangerPercentage / 100));
          const fillColor = `rgba(${redIntensity * 5}, 0, 0, ${dangerPercentage * 0.005})`;

          return (
            <React.Fragment key={marker.id}>
              <Marker
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
              />
              <Circle
                center={marker.coordinate}
                radius={100}
                fillColor={fillColor}
                strokeColor="rgba(255, 0, 0, 0.5)"
              />
            </React.Fragment>
          );
        })}

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