import react from 'react';

const Image = (props) => {
    return(
        <react.Fragment>
             <img src={props.imgs} alt="girl image"/>
        </react.Fragment>
    );
}
export default Image;