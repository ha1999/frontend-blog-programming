import React from 'react'
import parse from 'html-react-parser'
import './preview.scss'
type Props = {
    changeMode: (mode: 'edit' | 'preview') => void
    img: File | null | undefined
    title: string
    overView: string
    tags: string[]
    content: string
}
const Preview = ({img, title, overView, tags, content, changeMode}: Props) => {
    const [src, setSrc] = React.useState<string>('')
    React.useEffect(()=> {
        const reader = new FileReader();
        reader.addEventListener('load', ()=> {
            setSrc(reader.result as string)
        }, false)
        if(img) reader.readAsDataURL(img)
        else setSrc('')
    }, [img])

    const parseContent = React.useMemo(()=> parse(content), [content])
    const htmlTags = <div className="tags">{
        tags.map((tag, index) => <span 
        className="tag"
        key={index}>#{tag}</span>)
    }</div>
    return <div 
        onClick={()=> changeMode('edit')}
        className="preview-blog">
        <div
            onClick={e => e.stopPropagation()} 
            className="container-blog">
            {src && <img
                className="img-cover"
                src={src}
                alt='img-cover' />}
            <h1 className="title">{title}</h1>
            {htmlTags}
            <section className="short-content">{overView}</section>
            <div className="body-content">{parseContent}</div>
            <p className="footer-preview">Create by blog-programming-ha-uet</p>
        </div>
    </div>
}

export default React.memo(Preview)