import react, { useState } from 'react';

const Myhook = () => {

    const state= useState();
    const[count,setcount]=useState(1);

    
    const Myfun = () => {
        
        setcount(count+1);
    }
    return(
        <react.Fragment>
            <h1>{count}</h1>
            <button onClick={Myfun}>Click</button>
        </react.Fragment>
    );
}
export default Myhook;