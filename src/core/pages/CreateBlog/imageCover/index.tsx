import React from 'react'
import './imageCover.scss'
type Props = {
    img: File | null | undefined
    setImg: (e: React.ChangeEvent<HTMLInputElement>) => void
    clearImg: () => void
}

const ImageCover = ({img, setImg, clearImg}: Props) => {
    const [src, setSrc] = React.useState<string>('')

    React.useEffect(()=> {
        const reader = new FileReader();
        reader.addEventListener('load', ()=> {
            setSrc(reader.result as string)
        }, false)
        if(img) reader.readAsDataURL(img)
        else setSrc('')
    }, [img])

    return <div className="input-cover-img">
        {src && <img className='img' src={src} alt='img-cover' />}
    <label htmlFor='input-img-cover'>
        { img ? 'Change' : 'Upload a cover image'}
    <input 
        id='input-img-cover'
        type='file' 
        accept='image/*' 
        onChange={setImg}
        multiple={false}
    />
    
    </label>
    {img && <span className="remove" onClick={clearImg}>Remove</span>}
</div>
}

export default React.memo(ImageCover)