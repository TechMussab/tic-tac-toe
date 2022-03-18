import React, {useState} from "react";


function Box({mark, index, clickHandler}) {
    const [value, setValue] = useState(null);
    // console.log('box render with index: '+index+' mark: '+mark);
    function clickHandle() {
        if (value === null&& mark !== null) {
            clickHandler(index);
            setValue(mark);
        }
    }

    return (
        <button className="square" onClick={clickHandle}>
            {value}
        </button>
    );
}

export default React.memo(Box)
