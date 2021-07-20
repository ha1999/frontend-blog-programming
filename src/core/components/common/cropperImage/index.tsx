import React from "react"
import Cropper from "react-cropper"
import "cropperjs/dist/cropper.css"

const CropperImg= () => {
  // const cropperRef = useRef<HTMLImageElement>(null)
  // const onCrop = () => {
  //   const imageElement: any = cropperRef?.current
  //   const cropper: any = imageElement?.cropper
  // }

  return (
    <div>
      <div>
      <Cropper
      src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
      style={{ height: 400, width: "800px" }}
          zoomTo={0.1}
          initialAspectRatio={16 / 9}
          viewMode={3}
          minCropBoxHeight={300}
          minCropBoxWidth={400}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
          // zoomable={false}
          
    />
      </div>
    </div>
  )
}

export default React.memo(CropperImg)