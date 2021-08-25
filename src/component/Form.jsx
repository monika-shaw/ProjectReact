// // import react, { useState } from 'react';

// // const Form = () => {
// //     const[name,myname]=useState();

// //     const[cname,uname]=useState();

// //     const Change = (event) => {
// //         console.log(event.target.value);
// //         myname(event.target.value)
// //     }

// //     const Myfun = (event) => {
// //         event.preventDefault();
// //         uname(name);

// //     }
// //     return(
// //         <react.Fragment>
// //         <form onSubmit={Myfun}>
// //             <h1>Hello {cname}</h1>
// //             <input type='text' placeholder="Enter your name" onChange={Change} value={name}/>
// //             <input type='text' placeholder="Enter your name" onChange={Change} value={name}/>
// //             <button type='submit'>Click me</button>
// //             </form>
// //         </react.Fragment>
// //     );
// // }
// // export default Form;


 import react, { useState } from 'react';

 const Form = () => {

     const[Fullname,setfullname]=useState({
         fname: "",
         lname: "",
     });

     const InputEvent = (event) => {
         console.log(event.target.value);

        //  const value=event.target.value;
        //  const name= event.target.name;

        const {value, name}=event.target;

         setfullname((preValue) => {
             if(name==="fName")
             {
                 return {
                     fname:value,
                     lname:preValue.lname,
                 };
             }
             else if(name==="lName")
             {
                 return {
                     fname:preValue.fname,
                     lname:value,
                 };
             }


         });

     };
     

     

     const Change = (event) => {
         event.preventDefault();
        

     }

     return(
         <react.Fragment>
          <form onSubmit={Change}>
          <h1>Hello {Fullname.fname} {Fullname.lname}</h1>

          <input type='text' placeholder="Enter your name" name='fName' onChange={InputEvent} value={Fullname.fname}/> 
          <input type='text' placeholder="Enter your lastname" name='lName' onChange={InputEvent} value={Fullname.lname}/> 
          <button type='submit'>Clcik m</button>

          </form>
         </react.Fragment>
     );
 }
 export default Form;

