import React, { useState } from 'react'
import Tag from '../common/tag/Tag'
import DropDown from '../common/dropDown'
import { Div, Input, InputSelect } from './tagStyle'

type Tags = {
  id: number
  name: string
  disabled?: boolean
}
const InputTagAutoComplete = () => {
  const [search, setSearch] = useState<boolean>(false)
  const [tags, setTags] = useState<Tags[]>([
    { id: 1, name: "Apples" },
    { id: 2, name: "Pears" }
  ])
  const suggestions = [
    { id: 3, name: "Bananas" },
    { id: 4, name: "Mangos" },
    { id: 5, name: "Lemons" },
    { id: 6, name: "Apricots" }
  ]
  const onDelete = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }
  const onAddition = (tag: Tags) => {
    setTags([...tags, tag])
  }
  const htmlTags = tags.map((tag, index) => <Tag
    key={index}
    id={tag.id}
    name={tag.name}
    clearTag={onDelete}
  />)
  return (
    <Div>
      {htmlTags}
      { tags.length <5 && <InputSelect>
        <Input
          type="text"
          placeholder="Add new tag"
          onFocus={()=> setSearch(true)}
          onBlur={()=> setTimeout(()=> setSearch(false), 500)}
        />
        <DropDown isShow={search} listData={suggestions} onAddition={onAddition}/>
      </InputSelect>}
    </Div>
  )
}

export default React.memo(InputTagAutoComplete)