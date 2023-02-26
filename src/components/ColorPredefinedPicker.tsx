import React, { Fragment, useState } from 'react'
import "./style.css"

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
            <div className="color-predefined-picker">
                <div onClick={handleClick}
                    className="button"
                    style={{ backgroundColor: selectedColor, width: sizeButton, height: sizeButton }}
                ></div>
                <div
                    className={open ? "show" : "hidden"}
                    tabIndex={-1}
                    id='myPopup'
                >
                    <div
                        className={"table"}
                        style={{
                            gridTemplateColumns: gridColumns,
                            gridAutoRows: sizeColors
                        }}
                    >
                        {Colors.map((c, index) => (
                            <div
                                key={index}
                                className={"item"}
                                style={{ backgroundColor: c }}
                                onClick={(e) => SelectColor(c)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <br></br>
        </>
    )
}

export default ColorPredefinedPicker