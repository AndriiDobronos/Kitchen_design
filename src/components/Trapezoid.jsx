import React from 'react';
import bricks from "../../src/static/image/bricks.png";
import rzaviy_kamen from "../../src/static/image/rzaviy_kamen.png";
const Trapezoid = () => {
    return (<>
        <div className={"usingBorder"}
            style={{
                width: 200,
                height: 0,
                borderBottom: `100px solid #969`,
                borderLeft: '50px solid transparent',
                borderRight: '50px solid transparent',
            }}
        >
        </div>
        <div className={"usingClipPath"}
             style={{
                 width: 200,
                 height: 100,
                 background: `#f16`,
                 backgroundImage: `url(${bricks}),url(${rzaviy_kamen})`,
                 backgroundSize: 'unset, cover',
                 clipPath: 'polygon(15% 0%, 85% 0%, 70% 100%, 0% 100%)',
             }}
        >
        </div>
    </>);
};

export default Trapezoid;