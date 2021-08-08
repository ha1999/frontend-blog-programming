import React from 'react'
import Layout from '../Layout'
import Banner from '../../components/pages/detailBlog/banner'
import RCPagination from '../../components/common/pagination'
import './tagDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ListBlogOfTag from '../../components/pages/tagDetail/ListBlogOfTag'
import TopMenu from '../../components/menuTop'
import { getCountBlog } from '../../store/blog/blog.slice'


const TagDetail = () => {
    const { tag } = useParams<{ tag: string }>()
    const dispatch = useDispatch()
    const [page, setPage] = React.useState<number>(1)
    const [take, setTake] = React.useState<number>(10)
    console.log(setTake)
    const count = useSelector(getCountBlog)
    React.useEffect(() => {
        dispatch({
            type: 'GET_BLOG_OF_TAG',
            payload: {
                page,
                take,
                tag
            }
        })
        return ()=> {
            dispatch({
                type: 'CLEAR_LIST_BLOG'
            })
        }
    }, [page, dispatch, tag, take])
    return <Layout>
        <div className="detail-tag">
            <Banner />
            <div className="content-tag">
                <div className="content-blog-of-tag">
                    <TopMenu />
                    <ListBlogOfTag />
                    <RCPagination
                        total={count}
                        size={take}
                        page={page}
                        updatePage={setPage} />
                </div>
            </div>
        </div>
    </Layout>
}

export default React.memo(TagDetail)