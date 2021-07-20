import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCoords } from '../../store/common/CommonSlice'

const containerStyle = {
  width: '100%',
  height: '100vh'
}
function MyMaps() {
  const [coordsUser, setCoordsUser] = useState({})
  const coords = useSelector(getCoords)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBCjzxGi-5avUtTuDOGFUssUOTXHA3x-zM"
  })
  const [map, setMap] = useState(null)

  const onLoad = React.useCallback( map =>{
    const bounds = new (window as any).google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(map => {
    setMap(null)
  }, [])

  useEffect(()=>{
    setCoordsUser(coords)
    console.log(map)
  }, [coords, map])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordsUser}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker 
          position={coordsUser}
          label='Ha dep trai'
          // draggable={true}
          // icon='https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/gai.jpg?alt=media&token=fd4ac42d-6d0f-4e4b-b76c-e1bffe5b1ec1'
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMaps)