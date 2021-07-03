import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBCjzxGi-5avUtTuDOGFUssUOTXHA3x-zM"
  })
  const position = {
    lat: 37.772,
    lng: -122.214
  }
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    console.log(map)
  }, [])

  useEffect(()=>{
    console.log(map)
  }, [map])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={position}/>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMaps)