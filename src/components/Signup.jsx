import React, {useState} from 'react';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    <div className='container w-1/2'>
      <div>
      <div>
        <h1>Create an account</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="firstName">First name</label>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName">Last name</label>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input type="password"/>
      </div>
      <div className="flex flex-col">
        <button>Create Account</button>
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
