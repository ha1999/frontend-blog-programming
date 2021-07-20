import React from 'react'
import { Ul } from './tagStyle'
type Tags = {
    id: number
    name: string
    disabled?: boolean
  }
type Props = {
    isShow: boolean
    listData: {
        id: number
        name: string
    }[]
    onAddition: (tag: Tags) => void
}
const DropDown = ({ listData, isShow, onAddition }: Props) => {
    const htmlData = listData.map(data => <li
        key={data.id}
        onClick={()=> onAddition(data)}
    >{data.name}</li>)
    return (
        <Ul isShow={isShow}>
            {htmlData}
        </Ul>
    )
}

export default React.memo(DropDown)