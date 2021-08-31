import React from 'react'
import { useHistory} from 'react-router-dom'

const InputSearch = () => {
    const history = useHistory()
    const [search, setSearch] = React.useState<string>('')
    const enterSearch = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(search && e.key === 'Enter'){
            history.push(`/search?search=${search.trim()}&page=1&sort=asc`)
        }
    },[search, history])
    return <div className="input-search">
        <input
            maxLength={50}
            onKeyDown={enterSearch}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search ..."
            type="text"
            name="input-search" />
    </div>
}

export default React.memo(InputSearch)