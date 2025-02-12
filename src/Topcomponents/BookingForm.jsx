import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const BookingForm = () => {
  let url = "http://localhost:4144/details";
  const Navigate = useNavigate();
  const Navigate1=useNavigate()
  const { id } = useParams();
  const [trainData, settrainData] = useState([]);
  const [country, setcountry] = useState([]);
  const [formData, setformData] = useState({
    Name: "",
    age: "",
    contact: "",
    email: "",
    payment: "",
    birth: "",
    gender: "",
    country: "India",
    Total:"₹ 4,505.00"
  });
  const [formError, setformError] = useState({
    Name: "",
    age: "",
    contact: "",
    email: "",
    payment: "",
  });

  const fetchformdata = async () => {
    const res = await axios.get(`http://localhost:3111/resourceName/${id}`);
    settrainData(res.data);
    console.log(res.data);

    const countryres = await axios.get("https://restcountries.com/v3.1/all");
    const excludedCountries = [
      "French Southern and Antarctic Lands",
      "Saint Helena, Ascension and Tristan da Cunha",
      "United States Minor Outlying Islands",
      "Heard Island and McDonald Islands",
      "Saint Vincent and the Grenadines",
    ];
    const names = countryres.data
      .filter((data) => !excludedCountries.includes(data.name.common))
      .map((data) => data.name.common)
      .sort((a, b) => a.localeCompare(b));
    setcountry(names);
    // console.log(names);
  };

  useEffect(() => {
    fetchformdata();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });

    if (formError[name]) {
      setformError({ ...formError, [name]: "" });
    }
  };

  const validatepersonal = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name} is required`;
    } else if (name === "Name" && (value.length < 3 || value.length > 30)) {
      error = "Name should be more than 3 letters nad smaller then 30 letters";
    } else if (name === "age" && (value < 1 || value > 125)) {
      error = "Enter age between 1 to 125";
    } else if (name === "contact" && value.length !== 10) {
      error = "Mobile number should be of 10 digits";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email is invalid";
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validatepersonal(name, value);
    setformError({ ...formError, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErros = {};

    Object.keys(formData).forEach((key) => {
      const error = validatepersonal(key, formData[key]);
      if (error) newErros[key] = error;
    });

    setformError(newErros);

    if (Object.keys(newErros).length === 0) {
      axios.post(url, { ...formData,...trainData}).then((res) => {
        console.log(res.data);
        setformData({
          Name: "",
          age: "",
          contact: "",
          email: "",
          payment: "",
          birth: "",
          gender: "",
          country: "",
        });
        Navigate1(`/ticket/${id}`)
      });
    }
  };

  return (
    <form>
      <div className="my-40 ">
        <div className="flex justify-center my-5 text-[25px]">
          Passengers Details
        </div>

        <div className="w-full px-5 flex gap-3 items-start" >
          <div className="left w-[70%] flex flex-col gap-y-10">
            <div className="border border-slate-600 border-solid bg-[#f5f5f5]">
              <div className="px-3 py-2">
                {trainData ? (
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div> {trainData.trainname}</div>
                      <div> ({trainData.trainnumber})</div>
                    </div>
                    <div>Category : {trainData.button}</div>
                    <div>
                      <FaLocationDot />
                    </div>
                  </div>
                ) : (
                  <div>Loading....</div>
                )}
              </div>
            </div>

            <div className="border border-slate-600 border-solid bg-[#f5f5f5]">
              <div className="px-3 py-2 h-40">
                <div className="text-[1.3rem] font-bold py-3">
                  Passenger Details
                </div>
                <div className="flex items-center gap-2 ">
                  <input
                    className="bookinginput border-none px-2 py-2 outline-1 outline-[#082b71] placeholder:text-[#082b71]"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <input
                    className="bookinginput w-24 border-none px-2 py-2 outline-1 outline-[#082b71] placeholder:text-[#082b71]"
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="bookinginput w-40 text-[#082b71] border-none px-2 py-2 flex flex-col gap-2 outline-1 outline-[#082b71] placeholder:text-[#082b71]"
                  >
                    <option value="" disabled selected>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>

                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="bookinginput w-60 text-[#082b71] border-none px-2 py-2 flex flex-col gap-2 outline-1 outline-[#082b71] placeholder:text-[#082b71]"
                  >
                    <option value="" disabled selected>
                      Select Country
                    </option>
                    {country.map((data) => (
                      <option value={data} className="w-60">
                        {data}
                      </option>
                    ))}
                  </select>

                  <select
                    value={formData.birth}
                    name="birth"
                    onChange={handleChange}
                    className="bookinginput w-64 text-[#082b71] border-none px-2 py-2 flex flex-col gap-2 outline-1 outline-[#082b71] placeholder:text-[#082b71]"
                  >
                    <option value="Preference" className="px-3 py-2">
                      No Preference
                    </option>
                    <option value="Lower">Lower</option>
                    <option value="Upper">Upper</option>
                    <option value="Cabin">Cabin</option>
                    <option value="Coupe">Coupe</option>
                  </select>
                </div>

                <div className="flex items-center gap-10">
                  {formError.Name && (
                    <div className="text-red-600">{formError.Name}</div>
                  )}
                  {formError.age && (
                    <div className="text-red-600">{formError.age}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="border border-slate-600 border-solid">
              <div className="px-3 py-2 h-40">
                <div className="text-[1.3rem] font-bold py-3">
                  Contact Details
                </div>
                <div className="flex items-center gap-2 ">
                  <div className="flex items-center">
                    <span className="px-2 py-2 bg-[#eee] border-r-0 rounded-l-md border border-solid border-[#ccc]">
                      +91
                    </span>
                    <input
                      className=" px-2 py-2 border border-solid rounded-r-md border-[#ccc] outline-1 outline-[#082b71] placeholder:text-[#082b71] placeholder:text-[13px] placeholder:font-bold"
                      type="number"
                      placeholder="Passenger mobile number"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <input
                    className=" px-2 py-2 w-96  border border-solid rounded-md border-[#ccc] outline-1 outline-[#082b71] placeholder:text-[#082b71] placeholder:text-[13px] placeholder:font-bold"
                    type="email"
                    placeholder="Passenger E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="flex items-center gap-28">
                  {formError.contact && (
                    <div className="text-red-600">{formError.contact}</div>
                  )}
                  {formError.email && (
                    <div className="text-red-600">{formError.email}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="border border-slate-600 border-solid">
              <div className="px-3 py-2 pb-6">
                <div className="text-[1.3rem] font-bold pt-3 pb-6">
                  Payment Mode
                </div>
                <div className="flex flex-col gap-5 ">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="cards"
                      className="w-5 h-5"
                      name="payment"
                      onChange={handleChange}
                    />
                    <div>
                      <label htmlFor="radio" className="font-bold text-[14px]">
                        Pay through Credit & Debit Cards / Net Banking / Wallets
                        / Bharat QR / Pay on Delivery/ Rewards and Others
                      </label>
                      <br />
                      <span className="text-[12px]">
                        Convenience Fee: ₹30/- + GST
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="upi"
                      className="w-5 h-5"
                      name="payment"
                      onChange={handleChange}
                    />
                    <div>
                      <label htmlFor="radio" className="font-bold text-[14px]">
                        Pay through BHIM/UPI
                      </label>{" "}
                      <br />
                      <span className="text-[12px]">
                        Convenience Fee: ₹20/- + GST
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-28">
                  {formError.payment && (
                    <div className="text-red-600">{formError.payment}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="">
              <div className="px-4 flex gap-3">
                <button
                   type="button"
                  onClick={() => Navigate(-1)}
                  className="px-3 py-2.5 bg-[#f5f5f5] border border-solid border-[#b1b1b1]"
                >
                  Back
                </button>
                <button
                   type="button"
                   onClick={handleSubmit}
                  className="px-3 py-2.5 bg-[#fb792b] border border-solid border-[#b1b1b1] text-white rounded-md"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

<div className="right w-full" >
  <div className="border border-slate-600 border-solid ">
    <div className="bg-[#f5f5f5] px-3 py-2 text-[20px] font-medium">Fare Summary</div>
    <div className="px-3 py-4 flex items-center justify-between">
      <span className="text-[14px]">Ticket Fare</span>
      <span>₹ 4,505.00</span>
    </div>
    <div className="px-3 py-4 flex items-center justify-between bg-[#213d77] text-white">
      <span className="">Total Fare</span>
      <span>₹ 4,505.00</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </form>
  );
};

export default BookingForm;
