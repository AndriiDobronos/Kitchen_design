//На сторінці повинні бути розміщені 2 об‘єкти: input для введення тексту та
// button для застосування результату
// Користувач вводить в input будь-який рядок.
// Натискає на button і під формою відображається введений рядок
// Реалізувати 2 можливості переміщення літер у будь-яке місце:
// по одній букві
// кілька виділених букв
// затискаємо кнопку миші, та тягнемо створюючи прямокутник. Усі символи,
// що потрапили у цей прямокутник мають стати виділеними. Виділені символи мають змінити колір.
// можливість виділити декілька букв за кліком при зажатою клавішею ctrl зі зміною кольору активніх.
// Зняти виділення при повторному кліку.
// В залежності від пункта 4 реалізувати переміщення 4A або 4B за таким алгоритмом:
// Користувач зажимає будь-яку(і) літеру(и) у рядку і вона(и) переміщується за курсором у будь-яке місце на екрані.
// Після переміщення літера встановлює останню позицію курсора
// Якщо виконується дія 4А і відпустити символ, що переміщається на місце іншого символу,
// то другий символ стає на попереднє місце переміщуваного. Вони не накладаються один на одного
// Користувач може переміщати не тільки одну літеру, а й розкидати все слово по всьому документу

import React, {useEffect, useState} from 'react';

const TextManipulationComponent = () => {
    const [inputText, setInputText] = useState('');
    const [selectedText, setSelectedText] = useState('');
    const [completedDiv, setCompletedDiv] = useState(false);
    const [selectedPointElements, setSelectedPointElements] = useState('');
    const [startElementPosition, setStartElementPosition] = useState([0,0]);
    const [endElementPosition, setEndElementPosition] = useState([0,0]);
    const [test,setTest] = useState('');
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleClick = () => {
        const content = selectedText.trim().split('');
        const page = document.querySelector('#page');
        content.forEach((el) => {
            let box = document.createElement('div');
            box.classList.add('highlightable');
            box.textContent = `${el}`;
            box.style.width = '16px';
            box.style.height = '36px';
            box.style.backgroundColor = 'yellow';
            page.style.display = "flex";
            page.style.flexDirection = "row";
            page.style.flexWrap = "wrap";
            page?.appendChild(box);
        });
        setCompletedDiv(!completedDiv);
    }

    const handleMouseDown = () => {
        setSelectedText(inputText);
    };

    const handleMouseUp = (event) => {
        setEndX(event.clientX);
        setEndY(event.clientY);
        const stationaryLetters = document.querySelectorAll('.highlightable');
        stationaryLetters.forEach(letter =>{
            const stationaryRect = letter.getBoundingClientRect();
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            if (
                mouseX >= stationaryRect.left &&
                mouseX <= stationaryRect.right &&
                mouseY >= stationaryRect.top &&
                mouseY <= stationaryRect.bottom
            ) {
                letter.style.left = startElementPosition[0] + 'px';
                letter.style.top = startElementPosition[1] + 'px';
                //setTest(`${startElementPosition[0]}px` + `${startX}` + 'px' )
            }
        });

        const markerDiv = document.createElement('div');
        //const page = document.querySelector('#page');
        markerDiv.style.width = Math.abs(startX - event.clientX)+'px';
        markerDiv.style.height =  Math.abs(startY - event.clientY)+'px';
        markerDiv.style.backgroundColor = 'rgba(105,105,005,0.3)';
        markerDiv.style.position = 'absolute';
        markerDiv.style.left = Math.min(event.clientX, startX)+'px';
        markerDiv.style.top = Math.min(event.clientY,startY)+'px';
        markerDiv.style.border = '1px solid black';
        //page?.appendChild(markerDiv);

        // const elements = document.querySelectorAll('.highlighted');
        // elements.forEach(element => {
        //     element.style.position = 'relative';
        //     //element.classList.remove('highlighted');
        //     //element.style.color = 'black';
        //     //element.style.backgroundColor = 'yellow';
        // });
        setStartX(0);
        setStartY(0);

    };

    const checkDivsIntersection =(div1, div2) => {
        const rect1 = div1.getBoundingClientRect();
        const rect2 = div2.getBoundingClientRect();

        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    }

    const highlightText = (event) => {
        event.preventDefault();
        const startX = event.clientX;
        const startY = event.clientY;
        setStartX(startX);
        setStartY(startY);
        setEndX(0);
        setEndY(0);

        const highlightBox = document.createElement('div');
        highlightBox.classList.add('highlightBox');
        highlightBox.style.position = 'absolute';
        highlightBox.style.border = '1px solid #000';
        highlightBox.style.backgroundColor = 'rgba(125, 50, 255, 0.3)';
        highlightBox.style.pointerEvents = 'none';
        document.body.appendChild(highlightBox);

        function updateSelection(event) {
            const width = event.clientX - startX;
            const height = event.clientY - startY;

            highlightBox.style.width = Math.abs(width) + 'px';
            highlightBox.style.height = Math.abs(height) + 'px';
            highlightBox.style.left = Math.min(startX, event.clientX) + 'px';
            highlightBox.style.top = Math.min(startY, event.clientY) + 'px';

            const parentElement = document.querySelector('#page');
            const elements = parentElement.childNodes;

            elements.forEach(element => {
                if(element.classList.contains('highlightable') &&
                    checkDivsIntersection(highlightBox, element)) {
                    const rect = element.getBoundingClientRect();
                    const centerX = Math.floor(rect.left + rect.width / 2);
                    const centerY = Math.floor(rect.top + rect.height / 2);
                    setStartElementPosition([centerX, centerY]);
                    element.classList.add('highlighted');
                    element.style.color = 'red';
                    element.style.background = 'grey';
                    //element.style.textContent = {startElementPosition};
                }
            });
            document.removeEventListener('mousedown',highlightText)
            document.addEventListener('mousemove',letterDrag)
            document.addEventListener('mouseup',letterStop)
        }

        function endSelection() {
            document.removeEventListener('mousemove', updateSelection);
            document.removeEventListener('mouseup', endSelection);
            highlightBox.remove();
        }

        document.addEventListener('mousemove', updateSelection);
        document.addEventListener('mouseup', endSelection);
    }

    const letterDrag = (e) => {
        const elements = document.querySelectorAll('.highlighted');
        elements.forEach(element => {
            element.style.backgroundColor = 'blue';
            element.style.left = e.clientX + 'px';
            element.style.top = e.clientY + 'px';
        })
    }

    const letterStop = () =>{
        document.removeEventListener('mousemove',letterDrag)
        const elements = document.querySelectorAll('.highlighted');
        elements.forEach(element => {
            element.style.position = 'relative';
            element.classList.remove('highlighted');
            element.style.color = 'black';
            element.style.backgroundColor = 'yellow';
        });
    }

    //const elements = document.querySelectorAll('.highlightable');

    // useEffect(() => {
    //     clearTimeout();
    // },[]);


    // elements.forEach(element => {
    //     element.addEventListener('mousedown', highlightTextOnDrag);
    // });

    const lengthString = selectedText.length*16 ;

    const handlePointerMove = (e) => {
        setSelectedPointElements(`${Math.floor(Math.abs(e.clientX)) + 'px'} ${Math.floor(Math.abs(e.clientY)) + 'px'}`)
        const elements = document.querySelectorAll('.highlighted');
        elements.forEach(element => {
            if (element) {
                const rect = element.getBoundingClientRect();
                const centerX = Math.floor(rect.left + rect.width / 2);
                const centerY = Math.floor(rect.top + rect.height / 2);
                setEndElementPosition([centerX, centerY])
                element.style.position = 'relative';
                //element.style.left = `${e.clientX - lengthString + 'px'}`;
                //element.style.top = `${e.clientY + 'px'}`;
            } else {
               setEndElementPosition([0,0])
            }
        });
    }

    return (
        <div id="main" className="main"
            style={{color:'blue',position:'static',width:"100vw",height:"100vh"}} >
            {!completedDiv && <input type="text" value={inputText} onChange={handleInputChange}/>}
            {!completedDiv && <button onClick={handleClick} onMouseDown={handleMouseDown}>
                Button
            </button>}
            {selectedText && (
                <div className="page" id="page"
                    style={{width:"600px",height:"620px",color: 'black',
                        border:"1px solid green",position:"relative",top:'0',left:'0',
                        cursor: selectedText ? 'move' : 'auto'}}
                    onMouseDown={highlightText}
                    onMouseUp={handleMouseUp}
                    onPointerMove={handlePointerMove}
                >
                    {/*{selectedText}*/}
                </div>
            )}
            <div id="indicator"
                style={{width:"600px",height:"115px",color: 'black',fontSize:'18px',
                    border:"1px solid green",position:"absolute",bottom:"0",left:"0"}}
            >
                start position: {startElementPosition[0]}:{startElementPosition[1]} :: startX:{startX}:startY:{startY}<br/>
                current position: {selectedPointElements}<br/>
                end position: {endElementPosition[0]}:{endElementPosition[1]}<br/>
                test: {test} :: endX:{endX} : endY:{endY}
            </div>
        </div>
    );
};

export default TextManipulationComponent;
