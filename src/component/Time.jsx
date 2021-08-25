import react from 'react';
const Time = () => {

    const c = new Date();
    const t= c.toLocaleTimeString();
    const d =c.toLocaleDateString();
    return(
        <react.Fragment>
            <h1>Current date is {d}</h1>
            <h2>Current time is {t}</h2>
        </react.Fragment>
    );
}
export default Time;