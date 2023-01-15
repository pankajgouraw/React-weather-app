import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


// export default function Form() {

//   const [data, setData] = useState({
//     name:'',
//     email:''
//   });

//   let value,name;

//  function handleInput(e){
//   name = e.target.name;
//   value = e.target.value;
//   setData({...data, [name]:value});

//  }


 

//   return (
//     <form >
//   <div className="mb-3">
//     <input type="text" onChange={handleInput} value={data.name} className="form-control mb-3" name='name' />
//     <input type="text" onChange={handleInput} value={data.email} className="form-control" name='email' />
//   </div>
//   <button type="submit"  className="btn btn-light">Search</button>
// </form>
//   )
// }


export default function Form(props) {

 

  // const handleSubmit = async (e)=>{
  //    e.preventDefault();
  //   let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bihar&appid=42d294d52500e75f26cb14ce9af2a1b1`)
  //   let resp = await getdata.json();
  //   console.log(resp)
  // }

  return (
    <form onSubmit={props.action}>
  <div className="mb-3">
    <input type="text" onChange={props.handleInput}  className="form-control mb-3" name='name' />
  </div>
  <button type="submit"  className="btn btn-light">Search</button>
</form>
  )
}
