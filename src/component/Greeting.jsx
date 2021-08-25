import react from 'react';

const Greeting = () => {
    const c= new Date().getHours();
    let greet='';
    const cstyle={};

    if(c>=6 && c<=11)
    {
        greet='Good Morning';
        cstyle.color='red';
    }
    else if(c>=12 && c<=15)
    {
        greet='Good Afternoon';
        cstyle.color='red';
    }
    else if(c>=16 && c<=19)
    {
        greet='Good Evening';
        cstyle.color='red';
    }
    else
    {
        greet='Good Night';
        cstyle.backgroundColor='red';
    }
    return(
        <react.Fragment>
            <h2>Hello Everyone, <span style={cstyle}>{greet}</span></h2>
        </react.Fragment>
    );
}
export default Greeting;