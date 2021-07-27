import React from 'react'

import EditorBase from '../../components/editor/Editor'
import ImageCover from './imageCover'
import Title from './title'
import OverView from './overView'
import Head from './head'
import SelectTags from './tag'
import Preview from './preview'
import './createBlog.scss'
import { createBlog } from '../../api/comon/blog'
import { useDispatch } from 'react-redux'


const NewBlog = () => {
    const dispatch = useDispatch()
    const [content, setContent] = React.useState<string>('')
    const [mode, setMode] = React.useState<'edit' | 'preview'>('edit')

    const changeMode = React.useCallback((mode: 'edit' | 'preview') => {
        setMode(mode)
    }, [])

    const [img, setImg] = React.useState<File | null | undefined>()
    const fileChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setImg(e.target.files[0])
    }, [])

    const [title, setTitle] = React.useState<string>('')
    const updateTitle = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }, [])

    const [overview, setOverView] = React.useState<string>('')
    const updateOverView = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setOverView(e.target.value)
    }, [])

    const [tags, setTags] = React.useState<string[]>([])
    const addOrRemoveTags = React.useCallback(
        (tag: string, action: 'add' | 'remove') => {
            if (action === 'add') setTags([...tags, tag])
            else setTags(tags.filter(tg => tg !== tag))
        }, [tags])
    const postCreateBlog = () => {
        createBlog(
            {img, content, tags, overview, title },
            (loading: boolean) => dispatch({type: 'CHANGE_LOADING', payload: loading})
        )
    }
    return <div>
        <Head
            mode={mode}
            changeMode={changeMode} />
        <div className="new-blog">
            <ImageCover
                clearImg={() => setImg(null)}
                img={img}
                setImg={fileChange} />
            <Title
                title={title}
                setTitle={updateTitle} />
            <OverView
                overView={overview}
                setOverView={updateOverView} />
            <SelectTags
                tags={tags}
                setTags={addOrRemoveTags} />
            <EditorBase
                content={content}
                setContent={setContent} />
            <div className="publish-blog">
                <button onClick={postCreateBlog}>Publish</button>
            </div>
        </div>
        {mode === 'preview' && <Preview
            changeMode={changeMode}
            img={img}
            title={title}
            overView={overview}
            tags={tags}
            content={content}
        />
        }
    </div>
}

export default React.memo(NewBlog)