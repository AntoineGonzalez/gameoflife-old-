import styled from "styled-components"

const Cell = styled.div`
    width:3em;
    height:3em;
    margin:auto;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: ${(props) => props.isAlive ? 'white' : 'grey'}
`

export default Cell
