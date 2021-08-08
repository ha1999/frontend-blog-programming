import React from 'react'
import Layout from '../Layout'
import TopMenu from '../../components/menuTop'
import ListBlog from '../../components/pages/search/ListBlog'
import RCPagination from '../../components/common/pagination'
import './search.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCountBlog } from '../../store/blog/blog.slice'
import useQuery from '../../../useHook/useQuery'
import { useHistory } from 'react-router-dom'
const PageSearch = () => {
    const history = useHistory()
    const query = useQuery()
    const dispatch = useDispatch()
    const updatePage = React.useCallback((pageNumber: number) => {
        const search = query.get('search')
        const sort = query.get('sort')
        if (search && sort)
            history.push(`/search?search=${search}&page=${pageNumber}&sort=${sort}`)
    }, [history, query])
    const count = useSelector(getCountBlog)

    React.useEffect(() => {
        const page = query.get('page')
        const search = query.get('search')
        const sort = query.get('sort')
        if (page && search && sort)
            dispatch({
                type: 'USER_SEARCH_BLOG',
                payload: {
                    page,
                    search,
                    sort
                }
            })

    }, [query, dispatch])
    return <Layout>
        <h1>Search result - {query.get('search')}</h1>
        <div className="page-search">
            <div className="list-blog">
                <TopMenu />
                <ListBlog />
                {count > 10 &&
                    <RCPagination
                        total={count}
                        size={10}
                        updatePage={updatePage}
                        page={parseInt(query.get('page') ?? '1')} />
                }
            </div>
        </div>
        <div className="left-bar"></div>
    </Layout>

}

export default React.memo(PageSearch)