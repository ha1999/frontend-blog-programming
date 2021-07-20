import React, { useCallback } from 'react'
import './App.scss'
import AppRoute from './core/router'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { failureLocation, successLocation } from './utils/location'
import { useDispatch } from 'react-redux'
import { sagaActions } from './core/store/common/sagaActions'
function App(){
  const dispatch  = useDispatch()
  const success = useCallback((location: GeolocationPosition) => {
    successLocation(location)
    const {latitude, longitude} = location.coords
    dispatch({
      type: sagaActions.UPDATE_COORDS,
      payload: {
        lat: latitude,
        lng: longitude
      }
    })
  }, [dispatch])
  
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, failureLocation)
    }
  },[success])

  return (
    <div className="App">
        <AppRoute />
        <ToastContainer />
    </div>
  )
}

export default React.memo(App)
