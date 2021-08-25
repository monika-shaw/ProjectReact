import react from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Mycard = () => {
    return(
        <react.Fragment>
             {Sdata.map((val,index)=> {
      return(
        <Card
           key={val.id}
           bg={val.bgz}
           imgs={val.imgsz}
           name={val.namez}
           cat={val.bgz}
           links={val.linksz}
      />
        
      );
    })}
        </react.Fragment>
    );
}
export default Mycard;