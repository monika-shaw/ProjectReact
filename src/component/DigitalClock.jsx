import react, { useState } from 'react';

const DigitalClock = () => {
    const c= new Date().toLocaleTimeString();

    const[t,newt]= useState(c);

    const Myfun = () => {
        const d= new Date().toLocaleTimeString();
        newt(d);
        
    }

    setInterval(Myfun,1000);
    return(
        <react.Fragment>
            <h1>{t}</h1>
            <button onClick={Myfun}>Click me</button>
        </react.Fragment>
    );
}
export default DigitalClock;