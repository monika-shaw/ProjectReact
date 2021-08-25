import react from 'react';
import Image from './Image';

const Card = (props) => {

    const bg='#008899';
   

    return(
        <react.Fragment>
        <div className='card'>
            <div className='cards' style={{backgroundColor:bg,padding:30,}}>
               <Image imgs={props.imgs}/>
                <div className='card_title'>
                <span className=" card_name">{props.name}</span>
                    <h3 className="card_category">{props.cat}</h3>
                    
                    <a href={props.links} target="_blank">
                        <button>Watch Now</button>
                 </a>
                </div>
            </div>
        </div>

        </react.Fragment>
    );
}
export default Card;