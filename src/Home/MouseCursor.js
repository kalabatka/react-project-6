import React, { useEffect, useState } from 'react';



const MouseCursor = (props) => {

    
    const [x, setX] = useState(1);
    const [y, setY] = useState(1);

   


    useEffect(() => {
        document.body.addEventListener("mousemove", (event) => {
            setX(window.event.clientX);
            setY(window.event.clientY);

        });
    }, [])

    return (
        <div>
        <button className='mouse-cursor-container'>
          
            <div>Координата мыши (X) - {x}</div>
            <div>Координата мыши (Y) - {y}</div>
        </button>
        </div>

    )
};

export default MouseCursor;