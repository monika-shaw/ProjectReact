import react, { useState } from 'react';

const MyClockhook = () => {
    const d= new Date().toLocaleTimeString();

    const[t,newt]= useState(d);
     


    const Myfun = () => {
        const newd= new Date().toLocaleTimeString();
        newt(newd);
    }
    return(
        <react.Fragment>
            <h1>{t}</h1>
            <button onClick={Myfun}>Click me</button>
        </react.Fragment>
    );
}
export default MyClockhook;