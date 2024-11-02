import React from 'react';

const ViewportInfo = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = window.devicePixelRatio;

    return (
        <div>
            <h2>Информация о Viewport</h2>
            <p>Ширина: {width}px</p>
            <p>Высота: {height}px</p>
            <p>Плотность пикселей: {pixelRatio}</p>
        </div>
    );
};

export default ViewportInfo;