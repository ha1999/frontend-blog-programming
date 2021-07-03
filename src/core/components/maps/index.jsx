import { useRef,useEffect } from "react"

const OwnMaps = () =>{
  const style = {
    width: '100%',
    height: '400px'
  }
  useEffect(()=>{
   if(window.google)new window.google.maps.Map(document.getElementById("googleMap"),{
    center: new window.google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
   });
  }, [])
  return (
    <div id="googleMap" style={style}>

    </div>
  )
}

export default OwnMaps