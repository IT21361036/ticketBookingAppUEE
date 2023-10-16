// import React, { useState } from 'react';
// import axios from "axios"
// import "./style.css"
// import { Link, Navigate } from 'react-router-dom';
// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [show, setShowPassword] = useState(false);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!show);
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const config = {
//       headers: {
//         "Content-type": "application/json",
//       },
//     };
// try {
//   const data=await axios.post('https://tbs-ye6x.onrender.com/auth/register',{name,email,password},config);
// alert("Register is done")
// } catch (error) {
//   alert(error.message)
// }
//   };

//   return (
//    <>
//     <h1 className='Heading'>Register</h1>
//     <form onSubmit={handleSubmit} className='authForm'>
//       <label>
//         Name:
//         <input type="text" value={name} placeholder='Enter Name' onChange={handleNameChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} placeholder='Enter Email' onChange={handleEmailChange} />
//       </label>
//       <label>
//         Password:
//         <input
//           type={show ? 'text' : 'password'}
//           value={password} placeholder=' *********'
//           onChange={handlePasswordChange}
//         />
//       </label>
//       <button type="button" onClick={toggleShowPassword}>
//         {show ? 'Hide' : 'Show'}
//       </button>
//       <button type="submit">Register</button>
//       <Link to="/login"><button>If You are already Register</button></Link>
//     </form>
    
//    </>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

// Define Axios Singleton
class AxiosSingleton {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://tbs-ye6x.onrender.com', // Set your base URL here
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  async registerUser(name, email, password) {
    try {
      const response = await this.axiosInstance.post('/auth/register', {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShowPassword] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const axiosInstance = new AxiosSingleton();
      await axiosInstance.registerUser(name, email, password);
      alert('Registration is done');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1 className="Heading">Register</h1>
      <form onSubmit={handleSubmit} className="authForm">
        <label>
          Name:
          <input type="text" value={name} placeholder="Enter Name" onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} placeholder="Enter Email" onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type={show ? 'text' : 'password'}
            value={password}
            placeholder=" *********"
            onChange={handlePasswordChange}
          />
        </label>
        <button type="button" onClick={toggleShowPassword}>
          {show ? 'Hide' : 'Show'}
        </button>
        <button type="submit">Register</button>
        <Link to="/login">
          <button>If You are already Register</button>
        </Link>
      </form>
    </>
  );
};

export default Register;
