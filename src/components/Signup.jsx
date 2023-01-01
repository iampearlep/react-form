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
    <div>
      <div>
        <h1>Create an account</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" />
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
