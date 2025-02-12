import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Loginnn = () => {
  let url = "http://localhost:3000/data";
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });

    if (error[name]) {
      setError({ ...error, [name]: "" });
    }
  };

  // const [data, setdata] = useState([]);

  // const handleSubmit=async(e)=>{
  //   e.preventDefault()
  //   const res = await axios.get(url);

  //   const result = res.data.find((user)=>
  //     user.username === formData.username &&
  //   user.password === formData.password
  //   )

  //   if (result) {
  //     alert("Login successful");
  //   } else {
  //     alert("Invalid username or password");
  //   }
  // }

  const handleblur = (e) => {
    const { name } = e.target;
    if (formData[name] === "") {
      setError({ ...error, [name]: `${name} cannot be empty` });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(url).then((res) => {
      const result = res.data.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
      );
      if (result) {
        navigate("/welcome");
        setError({ username: "", password: "" });
      } else {
        setError({ ...error, username: "Invalid credentials", password: "" });
      }
    });

    setformData({ username: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-[#e9eff5]   px-20 py-10 w-full h-screen flex justify-center items-center"
    >
      <div className="flex items-center justify-center w-full">
        <div className="bg-white left-div  pl-16 pr-16 pt-12 rounded-3xl flex flex-col items-center justify-center">
          <div className="p-3 underline underline-offset-8">LOGIN</div>

          <div className="p-2">
            <input
              name="username"
              placeholder="User Name"
              className={`border placeholder:text-[14px] border-solid placeholder-[#082b71] w-full px-4 h-10 rounded-md`}
              type="text"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleblur}
            />
          </div>

          {error.username && (
            <div className="text-red-600">{error.username}</div>
          )}

          <div className="p-2">
            <input
              name="password"
              placeholder="Password"
              className={`border placeholder:text-[14px] border-solid placeholder-[#082b71] w-full px-4 h-10 rounded-md`}
              type="text"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleblur}
            />
          </div>
          {error.password && (
            <div className="text-red-600">{error.password}</div>
          )}

          <div className="flex justify-center p-10">
            <button className="text-white bg-orange-500 px-8 py-2 rounded-lg">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Loginnn;
