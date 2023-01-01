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
    <div>
      <div>
        <h1>Create an account</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => { setPassword({ ...password, value: e.target.value }); }}/>
      </div>
      <div>
        <button>Create Account</button>
      </div>
      <div>
        <p>Already have an account? <span>Log in</span></p>
      </div>
      </form>
    </div>
  )
}

export default Signup
