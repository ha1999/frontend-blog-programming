import styled from 'styled-components'

interface Props {
    isShow: boolean
}

const Ul = styled.ul<Props>`
    list-style-type: none;
    position: absolute;
    top: 100%;
    background-color: #FFFFFF;
    width: 200px;
    max-height: 500px;
    overflow: auto;
    border-radius: 7px 20px 20px 20px;
    display: ${props => props.isShow ? 'block' : 'none'};
    color: black;
    margin: 0;
    padding: 0;
    & li {
        padding: 10px 5px;
        cursor: pointer;
        &:hover {
            color: blue;
        }
    }
`

export {
    Ul
}