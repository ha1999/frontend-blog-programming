import styled from 'styled-components'
const Div = styled.div`
    display: flex;
    padding: 10px;
    margin-top: 30px;
    align-items: center;
    border: 1px solid green;
    flex-wrap: wrap;
    flex-direction: row;
`

const InputSelect = styled.div`
    position: relative;
    height: 100%;
    width: auto;
`

 const Input  = styled.input`
    padding: 10px 15px;
    font-size: 15px;
    background-color: transparent;
    border: none;
    &:focus {
        outline: none;
    }
    &:focus ~ ul{
        display: block;
    }

`

export {
    InputSelect,
    Div,
    Input
}
