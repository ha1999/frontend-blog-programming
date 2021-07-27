import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSystemTags } from '../../../store/common/CommonSlice'

import Description from '../descript'

import './tags.scss'

type Props = {
    tags: string[]
    setTags: (tag: string, action: 'add' | 'remove') => void
}

const SelectTags = ({ tags, setTags }: Props) => {
    const dispatch = useDispatch()
    const tagsSystem = useSelector(getSystemTags)
    const [showSelect, setShowSelect] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState<string>('')
    const tagsSelect = tagsSystem.filter(tag => !tags.includes(tag) && tag.includes(search))
    const emitShowSelect = React.useCallback(()=> {
        setShowSelect(true)
    },[setShowSelect])
    const emitHideSelect = React.useCallback(()=> {
        setTimeout(()=> setShowSelect(false),500)
    },[setShowSelect])
    React.useEffect(() => {
        dispatch({ type: 'GET_LIST_TAGS' })
        return () => {
            dispatch({ type: 'CLEAR_TAGS' })
        }
    }, [dispatch])
    const htmlTags = tags?.map(
        (tag, index) => <span
            title="Click to delete its"
            className="tags"
            onClick={() => setTags(tag, 'remove')}
            key={index}>
            #{tag}
        </span>
    )
    const htmlSelectTags = React.useMemo(()=> {
        return showSelect ? <ul className="select-tags">
        {tagsSelect.map((tag, index) => <li
            onClick={() => setTags(tag, 'add')}
            key={index}>{tag}</li>)}
    </ul> : ''
    }, [tagsSelect, showSelect, setTags])

    return <div className="select-tags">
        {htmlTags}
        <div className="search-select">
            { tags.length < 4 &&  <input
                onChange={(e)=> setSearch(e.target.value)}
                value={search}
                onFocus={emitShowSelect}
                onBlur={emitHideSelect}
                placeholder="Select tags ..."
                type="text"
                name="input-search"
                className="input-search" />}
            {htmlSelectTags}
        </div>
        <Description
            title="Writing a Great Post Title"
            content="Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
            Use keywords where appropriate to help ensure people can find your post by search."
        />
    </div>
}

export default React.memo(SelectTags)