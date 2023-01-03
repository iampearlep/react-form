import { useState} from "react";

const PasswordErrorMessage = () => {
  return (
    <span className="text-xs text-red-500 -mt-3 mb-2 hidden">
      Password should be least 8 characters, include at least 1 number and 1
      uppercase letter!
    </span>
  );
};
const EmailErrorMessage = () => {
  return (
    <span className="text-xs text-red-500 -mt-3 mb-2 hidden">
      Email address should be valid!
    </span>
  );
};

const Signup = () => {
  const [name, setName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState(""); 
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  
  const [focused, setFocused] = useState(false);
  
  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleFocus = (e) => {
    setFocused(true);
  };
  
  const clearForm = () => { 
    setName(""); 
    setEmail(""); 
    setPassword(""); 
  }; 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!"); 
    clearForm();
  };

  return (
    <div className="container w-5/6 bg-white py-6 px-6 rounded-lg md:w-2/6">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Sign up</h1>
        </div>
        <form className="w-full mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm">
              Name*
            </label>
            <input
              className="border mt-1 mb-3 px-2 py-2 rounded-md"
              type="text"
              name="name"
              pattern="^[a-zA-Z ]{2,30}$"
              value={name}
              onBlur={handleFocus}
              focused={focused.toString()}
              onChange={(e) => {
                setName(e.target.value)
              }}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email*</label>
            <input
              className="border mt-1 mb-3 px-2 py-2 rounded-md"
              type="email"
              name="email"
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              placeholder="Enter your email"
              value={email}
              onBlur={handleFocus}
              focused={focused.toString()}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />
            <EmailErrorMessage />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password*</label>
            <input
              className="border mt-1 mb-3 px-2 py-2 rounded-md"
              type="password"
              name="password"
              pattern="^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$"
              placeholder="Create a password"
              value={password}
              onBlur={handleFocus}
              focused={focused.toString()}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
            />
            <PasswordErrorMessage />
          </div>
          <div className="flex flex-col">
            <button
              className="create py-2 rounded-lg my-3 text-md font-semibold text-white"
              type="submit"
            >
              Create account
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <span className="text-pink-500 underline">Log in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
