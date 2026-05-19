import React, { useState, useEffect } from "react"; 
 
function App() { 
 
  // State for form inputs 
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
 
  // State for errors 
  const [errors, setErrors] = useState({}); 
 
  // State for registered users 
  const [users, setUsers] = useState([]); 
 
  // State for API data 
  const [apiData, setApiData] = useState([]); 
 
  // Success message 
  const [success, setSuccess] = useState(""); 
 
  // Fetch API data using useEffect 
  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => response.json()) 
      .then((data) => { 
        setApiData(data); 
      }) 

 
      .catch((error) => { 
        console.log("Error fetching data:", error); 
      }); 
  }, []); 
 
  // Validate form function 
  const validateForm = () => { 
    let newErrors = {}; 
 
    if (name.trim() === "") { 
      newErrors.name = "Name is required"; 
    } 
 
    if (email.trim() === "") { 
      newErrors.email = "Email is required"; 
    } 
 
    if (password.trim() === "") { 
      newErrors.password = "Password is required"; 
    } 
 
    setErrors(newErrors); 
 
    return Object.keys(newErrors).length === 0; 
  }; 
 
  // Handle form submit 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
 
    if (validateForm()) { 

 
 
      // Add user to list 
      const newUser = { 
        name: name, 
        email: email, 
      }; 
 
      setUsers([...users, newUser]); 
 
      setSuccess("Registration Successful!"); 
 
      // Clear inputs 
      setName(""); 
      setEmail(""); 
      setPassword(""); 
 
      setErrors({}); 
    } 
  }; 
 
  return ( 
    <div 
      style={{ 
        width: "400px", 
        margin: "30px auto", 
        padding: "30px", 
        borderRadius: "10px", 
        boxShadow: "0px 0px 10px gray", 
        backgroundColor: "#f2f2f2", 
        textAlign: "center", 
      }} 

 
        > 
      <h1>Registra on Form</h1> 
 
      <form onSubmit={handleSubmit}> 
 
        {/* Name */} 
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ 
            width: "90%", 
            padding: "10px", 
            margin: "10px 0", 
          }} 
        /> 
        <br /> 
        <span style={{ color: "red" }}>{errors.name}</span> 
 
        {/* Email */} 
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ 
            width: "90%", 
            padding: "10px", 
            margin: "10px 0", 
          }} 
 
        /> 
        <br /> 
        <span style={{ color: "red" }}>{errors.email}</span> 
 
        {/* Password */} 
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ 
            width: "90%", 
            padding: "10px", 
            margin: "10px 0", 
          }} 
        /> 
        <br /> 
        <span style={{ color: "red" }}>{errors.password}</span> 
 
        {/* Button */} 
        <button 
          type="submit" 
          style={{ 
            backgroundColor: "green", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            marginTop: "15px", 
            cursor: "pointer", 
          }} 
        > 

 
          Register 
        </button> 
      </form> 
 
      {/* Success Message */} 
      {success && ( 
        <h3 style={{ color: "green", marginTop: "20px" }}> 
          {success} 
        </h3> 
      )} 
 
      {/* Registered Users */} 
      {users.length > 0 && ( 
        <div 
          style={{ 
            marginTop: "20px", 
            backgroundColor: "#e8f0e8", 
            padding: "15px", 
            borderRadius: "5px", 
          }} 
        > 
          <h2>Registered Users</h2> 
          <ul style={{ textAlign: "left" }}> 
            {users.map((user, index) => ( 
              <li key={index}> 
                {user.name} - {user.email} 
              </li> 
            ))} 
          </ul> 
        </div>)} 
 

 
      {/* API Data */} 
      <div style={{ marginTop: "20px" }}> 
        <h2>API Users</h2> 
        <ul style={{ textAlign: "left" }}> 
          {apiData.slice(0, 5).map((user) => ( 
            <li key={user.id}> 
              {user.name} 
            </li> 
          ))} 
        </ul> 
      </div> 
    </div> 
);} 
export default App;