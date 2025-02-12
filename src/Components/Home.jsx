import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgArrowsExchangeV } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaThLarge } from "react-icons/fa";
import { Link } from "react-router";
import { FaChartLine } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { RiHotelBedLine } from "react-icons/ri";
import { FaBusAlt } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { FaMountainSun } from "react-icons/fa6";
import { FaTrainTram } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  const [from, setfrom] = useState();
  const [to, setto] = useState();
  const [border, setborder] = useState(false);
  const [input2, setinput2] = useState(false);
  const [date, setdate] = useState();
  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);

  const handleLeave = () => {
    setborder(false);
    setinput2(false);
    setdropdown(false);
    setdropdown1(false);
  };

  const swap = () => {
    setfrom(to);
    setto(from);
  };

 
  return (
    <>
      <div className="relative w-full home mt-[115px]">
        <div id="home-img" className="relative"></div>

        {/* =================== ticket booking============================ */}
         <div className="absolute top-0 pt-6 px-28 w-[60%] ">
          <div className="bg-white ">
            <div className="flex gap-2 ">
              <div className="flex items-center gap-24 bg-[#213d77] px-3  w-[350px] ">
                <img
                  src="https://www.irctc.co.in/nget/assets/images/icons/pnr.png"
                  alt=""
                  className="w-6"
                />
                <span className="text-[14px] font-bold text-white">
                  PNR STATUS
                </span>
              </div>

              <div className="flex items-center gap-20 bg-[#213d77] px-3 py-1 w-[350px] ">
                <img
                  src="https://www.irctc.co.in/nget/assets/images/icons/chart.png"
                  alt=""
                  className="w-6"
                />
                <span className="text-sm text-white">CHARTS/VACANCY</span>
              </div>
            </div>

            {/* ===================book ticket================================== */}

            <div className="text-center mb-2 px-3">
              <p className="font-bold leading-[82px] text-3xl text-[#2f4676]">
                BOOK TICKET
              </p>
            </div>

            {/* ========================from and to ========================== */}

            <div className="w-full flex gap-8 pl-10">
              {/* ================================left div ============================== */}

              <div
                id="left-div"
                className="w-[55%] justify-center flex flex-col items-center gap-3 "
              >
                <div
                  onMouseLeave={handleLeave}
                  onClick={() => setborder((e) => !e)}
                  className={`flex rounded-sm items-center w-full outline-none outline-slate-400 px-3 py-1 gap-2  ${
                    border ? "outline-2 outline-black/100" : ""
                  }`}
                >
                  <FaLocationArrow />
                  <input
                    placeholder="from"
                    type="text"
                    name="from"
                    value={from}
                    onChange={(e) => setfrom(e.target.value)}
                    className="border-none outline-none flex-1"
                  />
                </div>

                <div onClick={swap} className="bg-blue-100 rounded-full">
                  <CgArrowsExchangeV className="w-6 h-6" />
                </div>

                <div
                  onMouseLeave={handleLeave}
                  onClick={() => setinput2((e) => !e)}
                  className={`flex rounded-sm  items-center w-full outline-none outline-slate-400 px-3 py-1 gap-2  ${
                    input2 ? "outline-2 outline-black/100" : ""
                  }`}
                >
                  <FaMapMarkerAlt />

                  <input
                    placeholder="to"
                    type="text"
                    name="to"
                    value={to}
                    onChange={(e) => setto(e.target.value)}
                    className="border-none outline-none flex-1"
                  />
                </div>
              </div>
              {/* ==================== right div ======================== */}

              <div id="right-div" className="w-[35%] flex flex-col gap-10">
                <div
                  className={`flex rounded-sm  items-center w-full outline-none outline-slate-400 px-3 py-1 gap-2  ${
                    border ? "outline-3 outline-black/95" : ""
                  }`}
                >
                  <FaCalendarAlt />
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    className="outline-none border-none flex-1"
                  />
                </div>

                <div
                  onMouseLeave={handleLeave}
                  className={`flex rounded-sm  items-center  outline-none outline-slate-400 outline-offset-0  py-1 gap-2  ${
                    dropdown
                      ? "shadow-[0_0_0_0.2em_#8dcdff] outline-[#8dcdff]"
                      : ""
                  }`}
                >
                  <div className="pl-2">
                    <FaBriefcase />
                  </div>
                  <select
                    onClick={() => setdropdown((e) => !e)}
                    className="flex items-center justify-between border-none w-[82%] outline-none py-1"
                  >
                    {/* <input
                    placeholder="All Classes"
                    type=""
                    name="text"
                    value={dropdown}
                    onChange={(e) => setdropdown(e.target.value)}
                    className="outline-none border-none flex-1"
                  /> */}
                    <RiArrowDropDownLine className="h-6 w-8 pr-2" />

                    <option value="All Classes">All Classes</option>
                    <option value="Anubhuti Class (EA)">
                      Anubhuti Class (EA)
                    </option>
                    <option value="AC First Class (1A)">
                      AC First Class (1A)
                    </option>
                    <option value="Vistadome AC (EV)">Vistadome AC (EV)</option>
                    <option value="Exec. Chair Car (EC)">
                      Exec. Chair Car (EC)
                    </option>
                    <option value="First Class (FC)">First Class (FC)</option>
                    <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                    <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
                    <option value="AC 3 Economy (3E)">AC 3 Economy (3E)</option>
                    <option value="Vistadome Chair Car (VC)">
                      Vistadome Chair Car (VC)
                    </option>
                    <option value="AC Chair car (CC)">AC Chair car (CC)</option>
                    <option value="Sleeper (SL)">Sleeper (SL)</option>
                    <option value="Vistadome Non AC (VS)">
                      Vistadome Non AC (VS)
                    </option>
                    <option value="Second Sitting (2S)">
                      Second Sitting (2S)
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* ======================================= General ======================= */}

            <div className="pl-10">
              <div
                onMouseLeave={handleLeave}
                className={`mt-8 w-[55%] rounded-sm flex items-center outline-none outline-slate-400 outline-offset-0 px-3 py-1 gap-2  ${
                  dropdown1
                    ? "shadow-[0_0_0_0.2em_#8dcdff] outline-[#8dcdff]"
                    : ""
                }`}
              >
                <div>
                  <FaThLarge />
                </div>
                <select
                  onClick={() => setdropdown1((e) => !e)}
                  className="flex items-center border-none outline-none py-1 flex-1"
                >
                  {/* <input
                    placeholder="All Classes"
                    type=""
                    name="text"
                    value={dropdown}
                    onChange={(e) => setdropdown(e.target.value)}
                    className="outline-none border-none flex-1"
                  /> */}
                  <RiArrowDropDownLine className="h-6 w-10 pr-4" />

                  <option value="GENERAL">GENERAL</option>
                  <option value="LADIES">LADIES</option>
                  <option value="LOWER BERTH/SR.CITIZEN">
                    LOWER BERTH/SR.CITIZEN
                  </option>
                  <option value="PERSON WITH DISABILITY">
                    PERSON WITH DISABILITY
                  </option>
                  <option value="DUTY PASS">DUTY PASS</option>
                  <option value="TATKAL">TATKAL</option>
                  <option value="PREMIUM TATKAL">PREMIUM TATKAL</option>
                </select>
              </div>
            </div>

            {/* =========================================== checkbox =============================== */}

            <div className="mt-9 pl-10 pr-10">
              <div className="flex flex-wrap  gap-x-3">
                <span className="flex items-center gap-x-2 ">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id=""
                    className="h-10 w-5"
                  />
                  <label htmlFor="checkbox" className="text-[#082b71]">
                    Person With Disability Concession
                  </label>
                </span>
                <span className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id=""
                    className="h-10 w-5"
                  />
                  <label htmlFor="checkbox" className="text-[#082b71]">
                    Flexible With Date
                  </label>
                </span>
                <span className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id=""
                    className="h-10 w-5"
                  />
                  <label htmlFor="checkbox" className="text-[#082b71]">
                    Train with Available Berth{" "}
                  </label>
                </span>
                <span className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id=""
                    className="h-10 w-5"
                  />
                  <label htmlFor="checkbox" className="text-[#082b71]">
                    Railway Pass Concession
                  </label>
                </span>
              </div>
            </div>

            {/* ====================================== buttons ===================================== */}

            <div className="px-10 py-4  flex items-center justify-between">
              <div>
                <button className="bg-[#fb792b] px-10 py-2 text-white font-bold rounded-lg">
                  Search
                </button>
              </div>

              <div>
                <button className="bg-[#fb792b] px-6 py-2 text-white font-bold rounded-lg">
                  Easy Booking on AskDISHA
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-white mt-2 w-full text-sm pt-1 pb-1">
            <p>
              Customers can use enhanced interface for their IRCTC related
              queries!!
            </p>
            <Link to="/https://equery.irctc.co.in">
              https://equery.irctc.co.in
            </Link>
            <p className="text-red-800 ">
              Customer Care Numbers : 14646/08044647999 /08035734999 (Language:
              Hindi and English)
            </p>
          </div>
        </div> 

        <div className="absolute top-1 left-[60%] ">
          <label htmlFor="" className="text-[#213d77] text-[50px]">
            {" "}
            INDIAN RAILWAYS
          </label>
          <div className="flex items-center justify-center gap-3 text-[20px]">
            <span className="pl-3 pr-5 border-r border-current text-[#213d77]">
              Safety
            </span>
            <span className="pl-3 pr-5 border-r border-current text-[#213d77]">
              Security
            </span>
            <span className="pl-3 pr-5  text-[#213d77]">Punctuality</span>
          </div>
        </div>
      </div>


      <div>
        <div className="w-full h-[2px] bg-slate-500 my-8"></div>
      </div>

      <div className="flex justify-center mx-auto pb-20">
        <div className="flex justify-center items-center flex-col">
          <div className="mt-[55px] mb-[30px]">
            <h2 className="text-[34px] font-semibold">
              Have you not found the right one?
              <br />
              Find a service suitable for you here.
            </h2>
          </div>

          <ul className="grid grid-cols-5  items-center gap-20 w-full">
            <li className="px-5 py-5 border  border-black  rounded-full hover:bg-blue-900 hover:text-white">
              <a
                href="https://www.air.irctc.co.in/"
                target="_blank"
                className="hover:text-white"
              >
                <IoAirplaneOutline className="h-14 w-14 font-medium " />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white">
              <a href="https://www.hotels.irctc.co.in/hotels" target="_blank">
                <RiHotelBedLine className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white">
              <a
                href="https://raildrishti.indianrailways.gov.in/raildrishti/raildrishtiv3/"
                target="_blank"
              >
                <FaChartLine className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white ">
              <a href="https://www.ecatering.irctc.co.in/" target="_blank">
                <FaBowlFood className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white ">
              <a href="https://www.bus.irctc.co.in/home" target="_blank">
                <FaBusAlt className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white ">
              <a
                href="https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category="
                target="_blank"
              >
                <FaBowlFood className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white ">
              <a
                href="https://www.irctctourism.com/bharatgaurav"
                target="_blank"
              >
                <IoMdTrain className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white ">
              <a href="https://www.irctctourism.com/gallery/" target="_blank">
                <FaMountainSun className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white ">
              <a href="https://www.ftr.irctc.co.in/ftr/" target="_blank">
                <FaTrainTram className="h-14 w-14 hover:text-white" />
              </a>
            </li>
            <li className="px-5 py-5 border border-black rounded-full hover:bg-blue-900 hover:text-white ">
              <a
                href="https://www.irctctourism.com/gallery/"
                target="_blank"
                className="hover:text-white"
              >
                <GrGallery className="h-14 w-14" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="w-full h-[2px] bg-slate-500 my-8"></div>
      </div>

      <div className="flex justify-center mx-auto pb-20">
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center items-center gap-x-8 w-fit rounded-xl my-[25px] p-4 border border-[gainsboro] mx-auto shadow-xl">
            <span></span>
            <div></div>
            <span></span>
          </div>

          <div className="my-[35px]">
            <h2 className="text-[34px] font-semibold">HOLIDAYS</h2>
          </div>


          <div >
          <Cards/>
          </div>
        </div>
      </div>
      
      {/* <Footer/> */}


    </>
  );
};

export default Home;
