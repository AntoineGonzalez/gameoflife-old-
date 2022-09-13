import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Cell from "./Cell"

const Grid = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'grid/initialize', payload: {
                width: props.width, height: props.height
            }
        })
    }, [])

    const grid = useSelector((state) => state.grid)

    return (
        <>
            <Wrapper id="grid" width={grid?.content[0]?.length} height={grid.content.length}>
                {
                    grid.content.map((line, lineIndex) =>
                        <Line key={`line-${lineIndex}`}>
                            {
                                line.map((value, colIndex) =>
                                    <Cell
                                        id={`cell-${props.x}-${props.y}`}
                                        x={colIndex}
                                        y={lineIndex}
                                        key={`cell-${lineIndex}-${colIndex}`}
                                        isAlive={value}
                                    />
                                )
                            }
                        </Line>
                    )
                }
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width:${({ width }) => width * 3}em;
    height:${({ height }) => height * 3}em;
    margin: auto;
    margin-bottom: 3em;
    border: solid 1px black
`

const Line = styled.div`
    display: flex
`

export default Grid;
