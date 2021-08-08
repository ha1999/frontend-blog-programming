import React from 'react'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

type Props = {
    updatePage: (page: number) => void
    page: number
    size: number
    total: number
}

const RCPagination = ({updatePage, page, size, total}:Props) => {
    return <Pagination
            onChange={updatePage}
            current={page}
            total={total}
            pageSize={size}
      />
}

export default React.memo(RCPagination)