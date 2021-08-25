import react, { useState } from 'react';


const Event = () => {
const clk='click me';
const col='#008877';

const[bg,newbg]=useState(col);

const[btn,newbtn]=useState(clk);

    const Myfun = () => {
        const mycol='#008811';
        newbg(mycol);

        const mybtn='hello';
        newbtn(mybtn);
        
    }

    return(
        <react.Fragment>
            <div style={{backgroundColor: bg}} >
                <button onClick={Myfun}>{btn}</button>
            </div>
        </react.Fragment>
    );
}
export default Event;