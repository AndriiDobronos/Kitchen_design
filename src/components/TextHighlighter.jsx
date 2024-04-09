import React, { useRef, useState } from 'react';
import './TextHighlighter.style.scss';

const TextHighlighter = () => {
    const [isSelecting, setIsSelecting] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);
    const [highlightedText, setHighlightedText] = useState('');

    const containerRef = useRef(null);

    const handleMouseDown = (event) => {
        event.preventDefault();
        setIsSelecting(true);
        setStartX(event.clientX);
        setStartY(event.clientY);
    };

    const handleMouseUp = (event) => {
        event.preventDefault();
        setIsSelecting(false);
        applyHighlight();
    };

    const handleMouseMove = (event) => {
        event.preventDefault();
        if (isSelecting) {
             setEndX(event.clientX);
             setEndY(event.clientY);
        }
    };

    const applyHighlight = () => {
        const elements = document.elementsFromPoint(startX, startY);
        const highlighted = elements.filter(element => {
            const rect = element.getBoundingClientRect();
            return (
                rect.left >= Math.min(startX, endX) &&
                rect.right <= Math.max(startX, endX) &&
                rect.top >= Math.min(startY, endY) &&
                rect.bottom <= Math.max(startY, endY)
            );
        });

        highlighted.forEach(element => {
            element.classList.add('highlighted');
            element.style.color = 'red'
            element.style.backgroundColor = 'grey'
        });

        const highlightedText = highlighted.map(element => element.innerText).join('');
        setHighlightedText(highlightedText);
    };

    return (
        <div style={{color:'black'}}
            className="text-container"
            //ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {highlightedText && (
                <div className="highlighted-text">{highlightedText}</div>
            )}
            <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac malesuada felis. Quisque vel fermentum sem. Donec consequat augue et nulla porta, vitae iaculis elit elementum. Integer quis eros nunc. Morbi eget leo purus. Aenean nec libero in velit eleifend viverra sed vitae justo. Duis maximus erat sit amet risus rutrum convallis. Aenean viverra, velit vitae vestibulum posuere, elit nisl fermentum odio, vel varius magna mauris vel urna. In quis tristique velit, at tincidunt justo. Ut tincidunt ultricies justo. Ut congue eu risus et ultrices.
            </div>
        </div>
    );
};

export default TextHighlighter;
