import React, {useState} from 'react';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value:"",
    isTouched: false,
  });

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Account Created");
}; 


  return (
    <div className='container w-5/6 bg-white py-6 px-6 rounded-lg md:w-2/6'>
      <div>
      <div className=''>
        <h1 className=''>Sign up</h1>
      </div>
      <form className='w-full mx-auto' onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name">Name*</label>
        <input className='border mt-1 mb-3 px-2 py-2 rounded-md' type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email*</label>
        <input  className='border mt-1 mb-3 px-2 py-2 rounded-md' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password*</label>
        <input  className='border mt-1 mb-3 px-2 py-2 rounded-md' type="password" placeholder="Create a password"/>
      </div>
      <div className="flex flex-col">
        <button>Create account</button>
      </div>
      <div className="text-center">
        <p>Already have an account? <span>Log in</span></p>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Signup
