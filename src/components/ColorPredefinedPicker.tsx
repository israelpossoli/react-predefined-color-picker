import React, { useState } from 'react'
import styled from 'styled-components';
// import "../index.css"


interface PoupupProps {
    visible: boolean;
}

const DefaultColors = [
    'blue',
    'red',
    'orange',
    'green',
    'gray',
    'purple',
    'pink',
    '#2668CA',
    'rgb(30, 40, 50)',
]

const Container = styled.div`
    position: relative;
    display: inline-block;
    `

const Button = styled.div`
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const Poupup = styled.div<PoupupProps>`
    visibility: ${props => props.visible ? "visible" : "hidden"};
    background-color: #fff;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 0.2s;
    position: absolute;
    padding: 4px;
    margin-top: 1px;
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
    border: #ababab;
    border-style: solid;
    border-width: 1px;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1000;
    tabIndex:-1
`

const PoupupTable = styled.div`
    display: grid;
    grid-row-gap: 0px;
    column-gap: 0px;
`

const PoupupItem = styled.div`
    border-radius: 50%;
    border-width: 2px;
    border: #fff;
    border-style: solid;
    cursor: pointer;
    &:hover {
        border-width: 0px;
      }    
`

interface ColorPredefinedPickerProps {
    colors?: Array<string>
    columns?: number
    size?: "small" | "medium" | "large"
}

function ColorPredefinedPicker({ colors = DefaultColors, size = "medium", columns = 3 }: ColorPredefinedPickerProps) {
    const [open, setOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(DefaultColors[0])
    const Colors = colors ? colors : DefaultColors

    const handleClick = () => {
        setOpen((prev) => !open)
    }

    const SelectColor = (color: string) => {
        setSelectedColor(color)
        setOpen(false)
    }

    const handleClose = () => {
        setOpen(false)
        return (selectedColor)
    }

    let sizeButton: string
    let sizeColors: string
    switch (size) {
        case "small":
            sizeButton = "18px"
            sizeColors = "24px"
            break;
        case "large":
            sizeButton = "30px"
            sizeColors = "36px"
            break;

        case "medium":
        default:
            sizeButton = "24px"
            sizeColors = "30px"
            break;
    }
    const gridColumns = String((sizeColors + " ").repeat(columns))

    return (
        <>
            <Container>
                <Button onClick={handleClick}
                    className="button"
                    style={{ backgroundColor: selectedColor, width: sizeButton, height: sizeButton }}
                />
                <Poupup visible={open}>
                    <PoupupTable
                        style={{
                            gridTemplateColumns: gridColumns,
                            gridAutoRows: sizeColors
                        }}
                    >
                        {Colors.map((c, index) => (
                            <PoupupItem
                                key={index}
                                style={{ backgroundColor: c }}
                                onClick={(e) => SelectColor(c)}
                            />
                        ))}                        
                    </PoupupTable>
                </Poupup>
            </Container>
        </>
    )
}

export default ColorPredefinedPicker