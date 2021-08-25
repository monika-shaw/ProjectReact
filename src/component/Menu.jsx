import react, { useState } from 'react';

const Menu = () => {

     const name='Hello';
    const[nm,mynm]=useState(name);


    const Myfun = () => {
        mynm(
            <react.Fragment>
                <div class="card" style={{width:'18rem'}}>
  <img src="https://picsum.photos/id/1005/367/267" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text" style={{fontSize:'10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </react.Fragment>
        );
    }

    return(
        <react.Fragment>
            <h1>{nm}</h1>
            <button onClick={Myfun}>CLick</button>
        </react.Fragment>
    );
}

export default Menu;