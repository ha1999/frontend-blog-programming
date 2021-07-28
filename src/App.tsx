import React, { useCallback, useEffect } from 'react'
import './App.scss'
import AppRoute from './core/router'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { failureLocation, successLocation } from './utils/location'
import { useDispatch, useSelector } from 'react-redux'
import { sagaActions } from './core/store/common/sagaActions'
import Loading from './core/components/common/loading'
import { getLoading } from './core/store/common/CommonSlice'
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

  useEffect(()=> {
    dispatch({type: 'CHECK_LOG_IN'})
  },[dispatch])

  const loading = useSelector(getLoading)

  return (
    <div className="App">
        <AppRoute />
        <ToastContainer />
       { loading && <Loading />}
    </div>
  )
}

export default App
