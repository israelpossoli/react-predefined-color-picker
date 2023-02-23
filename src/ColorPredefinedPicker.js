import { useState } from "react";
import "./ColorPredefinedPicker.css";

const DefaultColors = ["#c62828", "#e53935", "#ef5350", "#ad1457", "#d81b60", "#ec407a", "#ec407a"];

function ColorPredefinedPicker({ colors, ...props }) {
    const [open, setOpen] = useState(true);
    const [selectedColor, setSelectedColor] = useState(DefaultColors[0]);
    const Colors = colors ? colors : DefaultColors;

    const handleClick = (event) => {
        setOpen((prev) => !open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const id = open ? "simple-popover" : undefined;
    return (
        <>
            <div class="popup" onClick={handleClick}>
                <div class="selected" style={{ backgroundColor: selectedColor}}></div>
                <div class={open ? "show" : "hidden"} tabIndex={-1} id="myPopup">
                    <div class="table" style={{gridTemplateColumns: "32px 32px 32px", gridAutoRows: "32px"}}>
                        {Colors.map((c) => (
                            <>
                                <spam class="item" style={{ backgroundColor: c}} onClick={(e) => setSelectedColor(c)}/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <br></br>
        </>
    );
}

export default ColorPredefinedPicker;
