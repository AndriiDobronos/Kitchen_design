import React, {useState} from 'react';

const TextEditor = () => {
    const [inputText, setInputText] = useState('');
    const [selectedText, setSelectedText] = useState('');
    const [completedDiv, setCompletedDiv] = useState(false);
    const [mousePointX, setMousePointX] = useState('');
    const [mousePointY, setMousePointY] = useState('');
    const [startElementPosition, setStartElementPosition] = useState([0, 0]);
    const [endElementPosition, setEndElementPosition] = useState([0, 0]);
    const [test, setTest] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleClick = () => {
        const content = selectedText.trim().split('');
        const page = document.querySelector('.page');
        page.addEventListener('mousedown',highlightText)
        content.forEach((el) => {
            const box = document.createElement('div');
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

    const isClickOnBlank = (startX,startY) => {
        const selectedElements = document.querySelectorAll('.highlighted');
        const elementsInPoint = document.elementsFromPoint(startX, startY);
        const resultArr = [];
        elementsInPoint.forEach (element => {
            if(element.classList.contains('highlightable')) {
                resultArr.push(element)
            }
        })
        return (resultArr.length === 0 && selectedElements.length !== 0)
    }

    const highlightText = (event) => {
        event.preventDefault();
        const startX = event.clientX;
        const startY = event.clientY;
        setStartX(startX);
        setStartY(startY);
        const highlightBox = document.createElement('div');
        highlightBox.classList.add('highlightBox');
        highlightBox.style.position = 'absolute';
        highlightBox.style.border = '1px solid #000';
        highlightBox.style.backgroundColor = 'rgba(125, 50, 255, 0.3)';
        highlightBox.style.pointerEvents = 'none';
        const selectedElements = document.querySelectorAll('.highlighted');
        document.body.appendChild(highlightBox);


        if(isClickOnBlank(startX,startY)) {
            selectedElements.forEach(element => {
                element.classList.remove('highlighted')
                element.style.color = 'black'
                element.style.backgroundColor = 'yellow'
            })
        }

        const updateSelection = (event) => {
            const width = event.clientX - startX;
            const height = event.clientY - startY;
            highlightBox.style.width = Math.abs(width) + 'px';
            highlightBox.style.height = Math.abs(height) + 'px';
            highlightBox.style.left = Math.min(startX, event.clientX) + 'px';
            highlightBox.style.top = Math.min(startY, event.clientY) + 'px';
            //
            // const length = selectedElements.length*16 + 'px'
            // selectedElements.forEach(el=>{
            //     el.style.left = (event.clientX + 'px') - length
            //     el.style.top = event.clientY + 'px' - '16px';
            // })
        }

        const endSelection = () => {
            document.removeEventListener('mousemove', updateSelection);
            document.removeEventListener('mouseup', endSelection);
            highlightBox.remove();
        }

        document.addEventListener('mousemove', updateSelection);
        document.addEventListener('mouseup', endSelection);
        setEndX(0);
        setEndY(0);
    };

    const handleOnPressAfterSelection = (event) => {
        const selectedElements = document.querySelectorAll('.highlighted');
        selectedElements.forEach(element => {
            element.style.position = 'relative';
            element.style.left = event.clientX + 'px'//mousePointX;
            element.style.top = event.clientY + 'px'//mousePointY;
        })
    }

    const cancelHighlightText = () => {
        //const page = document.querySelector('.page');
        //page.addEventListener('mousemove', handleOnPressAfterSelection);
        // const page = document.querySelector('.page');
        // page.removeEventListener('mousedown',highlightText)
        // document.removeEventListener('mousedown',highlightText)
        // const highlightBox = document.querySelector('.highlightBox')
        // if(highlightBox) {
        //     highlightBox.remove()
        // }
        // setTest((highlightBox?? true).toString())
    };

    const toggle = () => {
        setTest(!test)
        return !test
    }

    const handleMouseUp = (event) => {
        setEndX(event.clientX);
        setEndY(event.clientY);

         const highlightBox = document.querySelector('.highlightBox');
        const elements = document.querySelectorAll('.highlightable');
         elements.forEach(element => {
             if(checkDivsIntersection(element, highlightBox)) {
                 element.style.position = 'relative';
                 element.classList.add('highlighted');
                 element.style.color = 'red';
                 element.style.backgroundColor = 'grey';
                 //element.addEventListener('mousedown', cancelHighlightText);
                 element.addEventListener('mousedown', toggle)
             }
         })
        const selectedElements = document.querySelectorAll('.highlighted')
        if(selectedElements.length > 0 && test) {
            const page = document.querySelector('.page')
            page.addEventListener('mousemove',handlePointerMove)
        }
         setStartX(0);
         setStartY(0);
    };

    const checkDivsIntersection = (div1, div2) => {
        const rect1 = div1.getBoundingClientRect();
        const rect2 = div2.getBoundingClientRect();

        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    };

    const handlePointerMove = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const allElements = document.querySelectorAll('.highlightable');
        const length = allElements.length*16
        setMousePointX( (Math.floor(mouseX) - length ) + 'px');
        setMousePointY(Math.floor(mouseY) - 16 + 'px');
        const selectedElements = document.querySelectorAll('.highlighted');
        selectedElements.forEach(element => {
            if(element && test) {
                element.style.left = mouseX - length + 'px';
                element.style.top = mouseY - 16 + 'px';
            }
        })
    }

    return (
        <div className="main"
             style={{color:'blue',position:'static',width:"100vw",height:"100vh"}} >
            {!completedDiv && <input type="text" value={inputText} onChange={handleInputChange}/>}
            {!completedDiv && <button onClick={handleClick} onMouseDown={handleMouseDown}>
                Button
            </button>}
            {selectedText && (
                <div className="page"
                     style={{width:"600px",height:"620px",color: 'black',
                         border:"1px solid green",position:"relative",top:'0',left:'0',
                         cursor: selectedText ? 'move' : 'auto'}}
                     //onMouseDown={highlightText}
                     onMouseUp={handleMouseUp}
                     //onPointerMove={handlePointerMove}
                >
                    {/*{selectedText}*/}
                </div>
            )}
            <div id="indicator"
                 style={{width:"600px",height:"115px",color: 'black',fontSize:'18px',
                     border:"1px solid green",position:"absolute",bottom:"0",left:"0"}}
            >
                start position: {startElementPosition[0]}:{startElementPosition[1]} :: startX:{startX}:startY:{startY}<br/>
                current position: {mousePointX} : {mousePointY}<br/>
                end position: {endElementPosition[0]}:{endElementPosition[1]}<br/>
                test: {(test).toString()} :: endX:{endX} : endY:{endY}
            </div>
        </div>
    );
};

export default TextEditor;