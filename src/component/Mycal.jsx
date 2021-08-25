import react from 'react';
import { Sum,Sub,Mul,Div } from './Cal';

const Mycal = () => {
    return(
        <react.Fragment>
            <h1>{Sum(5,4)}</h1>
            <h1>{Sub(5,4)}</h1>
            <h1>{Mul(5,4)}</h1>
            <h1>{Div(5,4)}</h1>
        </react.Fragment>

    );
}
export default Mycal;