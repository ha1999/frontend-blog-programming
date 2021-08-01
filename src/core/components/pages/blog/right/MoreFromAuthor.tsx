import React from 'react'

type Props = {
    name: string | undefined
}
const MoreFromAuthor = ({name}: Props) => {
    return <div className="more-blogs-author">
    <span className="title">More from 
    <a href={`/${name?.replace(/' '/i, '')}`}>{name}</a>
    </span>
    <div className="more-blog">
        <a href='/123' className="blog">
            <p className="title">A Complete Guide To Decorators In Typescript</p>
            <div className="tags">
                <span>#html</span>
                <span>#react</span>
                <span>#nodejs</span>
                <span>#Reactjs</span>
            </div>
        </a>
        <a href='/123' className="blog">
            <p className="title">A Complete Guide To Decorators In Typescript</p>
            <div className="tags">
                <span>#html</span>
                <span>#react</span>
                <span>#nodejs</span>
                <span>#Reactjs</span>
            </div>
        </a>
        <a href='/123' className="blog">
            <p className="title">A Complete Guide To Decorators In Typescript</p>
            <div className="tags">
                <span>#html</span>
                <span>#react</span>
                <span>#nodejs</span>
                <span>#Reactjs</span>
            </div>
        </a>
    </div>
</div>
}

export default React.memo(MoreFromAuthor)