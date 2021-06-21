import { useCallback, useEffect, useRef, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';
import './cropper.scss'
type Props = {
    src: string
}

function CropDemo({ src }: Props) {
    const [crop, setCrop] = useState<Crop>({ aspect: 16 / 9 });
    const [upImg, setUpImg] = useState<string | null>(null);
    const [completedCrop, setCompletedCrop] = useState<Crop>({});
    const imgRef = useRef<HTMLImageElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener('load', () => setUpImg(reader.result as string));
          reader.readAsDataURL(event.target.files[0]);
        }
      };
      const onLoad = useCallback((target: HTMLImageElement) => {
       
      }, []);
      useEffect(() => {
        if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
          return;
        }
        const image = imgRef.current;
        const canvas = previewCanvasRef.current;
        const crop = completedCrop;
        console.log('image data is', image)

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d')!;
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width || 500 * pixelRatio;
        canvas.height = crop.height || 500 * pixelRatio;
        ctx.drawImage(
          image,
          crop.x || 500 * scaleX,
          crop.y || 500 * scaleY,
          crop.width || 500 * scaleX,
          crop.height  || 500* scaleY,
          0,
          0,
          crop.width || 500,
          crop.height || 500
        );
        canvas.toBlob(blod => console.log('blod is ', blod))
      }, [completedCrop]);
    return (
    <div className="cropper-image">
        <input type="file" accept="image/*" onChange={onSelectFile} />
        {upImg && 
        <ReactCrop 
            src={upImg} 
            crop={crop} 
            onImageLoaded={onLoad}
            onChange={newCrop => setCrop(newCrop)} 
            onComplete={(c) => setCompletedCrop(c)}
        /> }
        <div>
        <canvas
          ref={previewCanvasRef}
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0)
          }}
        />
      </div>
    </div>
    )
  }

export default CropDemo