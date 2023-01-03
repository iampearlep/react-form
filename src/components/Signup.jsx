import {useState} from 'react';

const PasswordErrorMessage = () => { 
  return ( 
    <p>Password should have at least 8 characters</p> 
  ); 
 };

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 

  const validateEmail = (email) => {
    return String(email).toLocaleLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  } 

  const getIsFormValid = () => {
   return (
    name && validateEmail(email) && password.value.length >=8
   );
  }

  const clearForm =() => {
    setName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
  }

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Account created!"); 
  clearForm(); 
}; 

  return (
    <div className='container w-5/6 bg-white py-6 px-6 rounded-lg md:w-2/6'>
      <div>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>Sign up</h1>
      </div>
      <form className='w-full mx-auto' onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className='text-sm'>Name*</label>
        <input className='border mt-1 mb-3 px-2 py-2 rounded-md' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email*</label>
        <input  className='border mt-1 mb-3 px-2 py-2 rounded-md' type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password*</label>
        <input  className='border mt-1 mb-3 px-2 py-2 rounded-md' type="password" placeholder="Create a password" value={password.value} onChange={(e) => setPassword(e.target.value)} />
        {password.isTouched && password.value.length < 8 ? ( <PasswordErrorMessage /> ) : null}
      </div>
      <div className="flex flex-col">
        <button className='create py-2 rounded-lg my-3 text-md font-semibold text-white' type='submit'>Create account</button>
      </div>
      <div className="text-center">
        <p className='text-sm'>Already have an account? <span className='text-pink-500 underline'>Log in</span></p>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Signup
