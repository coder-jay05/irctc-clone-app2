import React, { useState } from "react";
import { Link,useNavigate } from "react-router";
import { VscError } from "react-icons/vsc";
import axios from "axios";

const Register = () => {
  let url = "http://localhost:3000/data";
  const Navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    fullname: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
  });

  const [formError, setFormEror] = useState({
    username: "",
    fullname: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
  });
  const [outlineClick, setOutlineClick] = useState({
    username: false,
    fullname: false,
    password: false,
    confirmPassword: false,
    email: false,
    mobile: false,
  });

// =================== agar input field khali hai toh error dikhega warna nahi dikhega================

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (formError[name]) {
      setFormEror({ ...formError, [name]: "" });
    }
  };

  const validatefield = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = `${name} is required`;
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email address";
    } else if (name === "password" && value.length <= 6) {
      error = "password should be greater than 6 letters";
    } else if (name === "confirmPassword" && value !== formValues.password) {
      error = "password and confirm-password should be same";
    } else if (name === "fullname" && value.length >= 20) {
      error = "full name should not be greater than 20 letters";
    } else if (name === "mobile" && value.length !== 10) {
      error = "Mobile number should be exactly 10 digits";
    }

    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const error = validatefield(name, value);

    setFormEror({ ...formError, [name]: error });
    setOutlineClick({ ...outlineClick, [name]: false });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setOutlineClick({ ...outlineClick, [name]: true });
  };

  // ==================== storing data of db.json =======================

  const [dbjsondata, setdbjsondata] = useState([]);

  // ================== successful login message =====================

  const [msg, setmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formValues).forEach((key) => {
      const error = validatefield(key, formValues[key]);
      if (error) newErrors[key] = error;
    });

    setFormEror(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .post(url, {
          ...formValues,
        })
        .then((res) => {
          console.log(res);

          setmsg("You have been successfully registered.Now proceed to Login");
          setTimeout(() => {
            setmsg("");
            Navigate("/login");
          }, 3000);

          setFormValues({
            username: "",
            fullname: "",
            password: "",
            confirmPassword: "",
            email: "",
            mobile: "",
          });
          setdbjsondata([...dbjsondata, res.data]);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-[#e9eff5] mt-28 mx-4 px-20 py-10"
    >
      <div className="main-div flex">
        {/* ==============================left div ================================ */}

        <div className="bg-white left-div w-[60%] pl-16 pr-16 pt-12 rounded-l-3xl rounded-b-3xl ">
          <div className="flex justify-between p-2">
            <span>
              <strong className="text-black font-bold text-lg">
                Create Your IRCTC account
              </strong>
            </span>
            <span className=" ">
              <Link className="text-red-500 underline underline-offset-2">
                SIGN IN
              </Link>
            </span>
          </div>

          <div className="p-2">
            <div className="border p-1">
              <ol className="">
                <li className="flex">
                  1.
                  <span>
                    {" "}
                    Please use valid E-Mail ID, Mobile number and correct
                    personal details in registration form. This may be required
                    for verification purpose.
                  </span>
                </li>
                <li>
                  2.
                  <span>
                    Garbage / Junk values in profile may lead to deactivation of
                    IRCTC account.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* ============================= user name ======================== */}

          {formValues && <div className="p-2 text-green-600">{msg}</div>}

          <div className="p-2">
            <input
              name="username"
              placeholder="User Name"
              className={`border placeholder:text-[14px] border-solid placeholder-[#082b71] w-full px-4 h-10 rounded-md ${
                outlineClick.username ? "outline-[#082b71] " : ""
              }`}
              type="text"
              value={formValues.username}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {formError.username && (
              <div className="text-red-500 font-bold  text-md mt-2 flex items-center gap-4">
                <div>
                  <VscError />
                </div>
                <div>{formError.username}</div>
              </div>
            )}
          </div>

          {/* ================== full name ========================== */}

          <div className="p-2">
            <input
              name="fullname"
              placeholder="Full Name"
              className={`border placeholder:text-[14px] placeholder-[#082b71] border-solid  w-full px-4 h-10 rounded-md ${
                outlineClick.fullname ? "outline-[#082b71]" : ""
              }`}
              type="text"
              value={formValues.fullname}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {formError.fullname && (
              <div className="text-red-500 font-bold  text-md mt-2 flex items-center gap-4">
                <div>
                  <VscError />
                </div>
                <div>{formError.fullname}</div>
              </div>
            )}
          </div>

          {/* ===================================  password  ========================== */}

          <div className="p-2">
            <input
              name="password"
              placeholder="Password"
              className={`border placeholder:text-[14px] placeholder-[#082b71] border-solid  w-full px-4 h-10 rounded-md ${
                outlineClick.password ? "outline-[#082b71]" : ""
              }`}
              type="text"
              value={formValues.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {formError.password && (
              <div className="text-red-500 font-bold  text-md mt-2 flex items-center gap-4">
                <div>
                  <VscError />
                </div>
                <div>{formError.password}</div>
              </div>
            )}
          </div>

          {/* =========================================  confirmPassword ====================== */}

          <div className="p-2">
            <input
              name="confirmPassword"
              placeholder="ConfirmPassword"
              className={`border placeholder:text-[14px] placeholder-[#082b71] border-solid  w-full px-4 h-10 rounded-md ${
                outlineClick.confirmPassword ? "outline-[#082b71]" : ""
              }`}
              type="text"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {formError.confirmPassword && (
              <div className="text-red-500 font-bold  text-md mt-2 flex items-center gap-4">
                <div>
                  <VscError />
                </div>
                <div>{formError.confirmPassword}</div>
              </div>
            )}
          </div>

          {/* ================================  email =========================== */}

          <div className="p-2">
            <input
              name="email"
              placeholder="E-mail"
              className={`border placeholder:text-[14px] placeholder-[#082b71] border-solid  w-full px-4 h-10 rounded-md ${
                outlineClick.email ? "outline-[#082b71]" : ""
              }`}
              type="text"
              value={formValues.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {formError.email && (
              <div className="text-red-500 font-bold  text-md mt-2 flex items-center gap-4">
                <div>
                  <VscError />
                </div>
                <div>{formError.email}</div>
              </div>
            )}
          </div>

          {/* ==================================== mobile number select options =========================== */}

          <div
            className="p-2 text-[12px] font-medium"
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            <select
              name="mobile"
              className={`border placeholder:text-[14px] placeholder-[#082b71] border-solid  w-full px-4 h-10 rounded-md ${
                outlineClick.mobile ? "outline-[#082b71]" : ""
              }`}
            >
              <option>+91-INDIA</option>
              <option>+92-NEPAL</option>
              <option>+93-AUSTRALIA</option>
              <option>+94-U.S.A</option>
              <option>+95-CHINA</option>
              <option>+96-RUSSIA</option>
            </select>
          </div>

          {/* ===============================mobile ====================== */}

          <div className="p-2">
            <input
              name="mobile"
              placeholder="Mobile"
              className={`border placeholder:text-[14px] placeholder-[#082b71] border-solid  w-full px-4 h-10 rounded-md ${
                outlineClick.mobile ? "outline-[#082b71]" : ""
              }`}
              type="number"
              value={formValues.mobile}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {formError.mobile && (
              <div className="text-red-500 font-bold  text-md mt-2 flex items-center gap-4">
                <div>
                  <VscError />
                </div>
                <div>{formError.mobile}</div>
              </div>
            )}
          </div>

          <div onClick={handleSubmit} className="flex justify-center p-10">
            <button className="text-white bg-orange-500 px-8 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </div>

        {/* ==================================== right div ================================== */}

        <div className="right-div bg-white h-fit px-40 rounded-r-3xl ">
          <div>
            <img
              src="http://contents.irctc.co.in/en/GPT_NWEB_REGISTRATION_RIGHT2.jpeg"
              alt=""
              className=" max-w-[107%]"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
