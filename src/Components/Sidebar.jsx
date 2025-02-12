import React, { useState } from "react";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";

const Sidebar = ({ date, time }) => {
  const [subcollapse, setsubcollapse] = useState(false);
  const [trainscollapse, settrainscollapse] = useState(false);
  const [subtraincollapse, setsubtraincollapse] = useState(false);
  const [cancel, setcancel] = useState(false);
  const [loyalty, setloyalty] = useState(false);
  const [subloyalty1, setsubloyalty1] = useState(false);
  const [subloyalty2, setsubloyalty2] = useState(false);
  const [subloyalty3, setsubloyalty3] = useState(false);
  const [subloyalty4, setsubloyalty4] = useState(false);
  const [eWallet, seteWallet] = useState(false);
  const [holidays, setholidays] = useState(false);
  const [holidays1, setholidays1] = useState(false);
  const [holidays2, setholidays2] = useState(false);
  const [holidays3, setholidays3] = useState(false);
  const [meals, setmeals] = useState(false);
  const [promotions, setpromotions] = useState(false);
  const [promotions1, setpromotions1] = useState(false);
  const [promotions2, setpromotions2] = useState(false);
  const [promotions3, setpromotions3] = useState(false);
  const [more, setmore] = useState(false);
  const [more1, setmore1] = useState(false);
const [agent, setagent] = useState(false)

  // const toggleDropdown =(id)=>{
  //   setsubcollapse((prev)=>(prev===id?null:id))
  // }
  const handleMouse = () => {
    setsubcollapse(false);
    settrainscollapse(false);
    setsubtraincollapse(false);
    setcancel(false);
    setloyalty(false);
    setsubloyalty1(false);
    setsubloyalty2(false);
    setsubloyalty3(false);
    setsubloyalty4(false);
    seteWallet(false);
    setholidays(false);
    setholidays1(false);
    setholidays2(false);
    setholidays3(false);
    setmeals(false);
    setpromotions(false);
    setpromotions1(false);
    setpromotions2(false);
    setpromotions3(false);
    setmore(false);
    setmore1(false);
    setagent(false)
  };

  return (
     <div id="sidebar" className={`relative right-[220px]`}>
      <div
        onMouseLeave={handleMouse}
        className="absolute -top-[71px] w-[300px] bg-slate-200  h-screen"
      >
        {/* =========================== LOGIN DATE AND TIME ========================== */}

        <div className="relative px-4 py-6 flex flex-col w-full bg-blue-200">
          <Link
            className="bg-[#213d77] text-white w-[60%] font-bold text-center"
            to="/login"
          >
            LOGIN
          </Link>
          <Link
            to="/time"
            className="text-[#000] font-bold"
          >{`${date} ${"  "} [${time}]`}</Link>
        </div>

        {/* =========================IRCTC EXCLUSIVE=============================== */}
        <div className="overflow-y-scroll scrollbar-hide overflow-x-hidden  h-[70vh]">
          <div className="relative exclusive mt-2">
            <div
              onClick={() => setsubcollapse((e) => !e)}
              className="ml-6 mr-6 mb-2 text-center bg-[#213d77] font-bold px-10 py-3"
            >
              <p className="text-white text-sm ">IRCTC EXCLUSIVE</p>
            </div>

            <div
              className={`sub-menu ${
                subcollapse ? "active" : ""
              } transition-all top-[56px] w-[90%] mx-auto border  border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <img
                  src="https://www.irctc.co.in/nget/assets/images/logo.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <Link to="/irctcipay" className="text-black text-[14px]">
                  IRCTC-iPAY
                </Link>
              </div>
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <FaCartShopping className="w-[25px] h-[25px] text-yellow-400" />
                <Link to="/shopping" className="text-black text-[14px]">
                  SHOPPING
                </Link>
              </div>
            </div>
          </div>

          {/* ==================Trains and sub-menu====================== */}

          <div className="relative exclusive ml-4">
            <div
              onClick={() => settrainscollapse((e) => !e)}
              className=" flex  items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className=" text-orange-500 font-bold underline underline-offset-4 decoration-[1.5px] text-sm">
                TRAINS
              </p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                trainscollapse ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Book Ticket
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link
                  to="/foreignTouristBooking"
                  className="text-black text-[14px]"
                >
                  Foreign Tourist Booking
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link
                  to="/connectingJourneyBooking"
                  className="text-black text-[14px]"
                >
                  Connecting Journey Booking
                </Link>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setsubtraincollapse((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">IRCTC TRAINS</p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    subtraincollapse ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>Group Booking</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      Travel Insurance Claim Process
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setcancel((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">Cancel Ticket</p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    cancel ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>E-tickets</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Counter Ticket</Link>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  PNR Enquiry
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Train Schedule
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Track Your Train
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  FTR Coach/Train Booking
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Dogs/Cats Booking
                </Link>
              </div>
            </div>
          </div>

          {/* ============Loyalty ======================= */}

          {/* <div className="relative exclusive ml-4">
            <div
              onClick={() => setloyalty((e) => !e)}
              className="flex items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className="text-black   text-sm">LOYALTY</p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                loyalty ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  About IRCTC Loyalty program
                </Link>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setsubloyalty1((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">
                    IRCTC SBI Credit Card
                  </p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    subloyalty1 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>
                      About IRCTC SBI Credit Card
                    </Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      IRCTC SBI Platinum Card RUPAY e-apply
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setsubloyalty2((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">
                    IRCTC BOB Credit Card
                  </p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    subloyalty2 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>
                      About IRCTC BOB Credit Card
                    </Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      IRCTC BOB RUPAY Credit Card e-Apply
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setsubloyalty3((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">
                    IRCTC HDFC Credit Card
                  </p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    subloyalty3 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>
                      About IRCTC HDFC Credit Card
                    </Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      IRCTC HDFC RUPAY Credit Card e-Apply
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setsubloyalty4((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">
                    IRCTC RBL Credit Card
                  </p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    subloyalty4 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>
                      About IRCTC RBL Credit Card
                    </Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      Apply for IRCTC RBL Bank Credit Card
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* ===================irctc e-wallet====================== */}

          {/* <div className="relative exclusive ml-4">
            <div
              onClick={() => seteWallet((e) => !e)}
              className="flex items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className="blink-underline underline underline-offset-4 decoration-[2.5px]  text-black   text-sm">
                IRCTC e-Wallet
              </p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                eWallet ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  About IRCTC eWallet
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  IRCTC eWallet User Guide
                </Link>
              </div>
            </div>
          </div> */}

          {/* =====================buses ========================= */}

          {/* <div className="relative exclusive ml-4">
            <div className="flex items-center py-[12px] px-[15px] w-full">
              <Link className=" text-black   text-sm">BUSES</Link>
            </div>
            <div
              className={`transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            ></div>
          </div> */}

          {/* ========================== FLIGHT ================= */}

          {/* <div className="relative exclusive ml-4">
            <div className="flex items-center py-[12px] px-[15px] w-full">
              <Link className=" text-black   text-sm">FLIGHTS</Link>
            </div>
            <div
              className={`transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            ></div>
          </div> */}

          {/* ===================== HOTELS ================= */}

          {/* <div className="relative exclusive ml-4">
            <div className="flex items-center py-[12px] px-[15px] w-full">
              <Link className=" text-black   text-sm">HOTELS</Link>
            </div>
            <div
              className={`transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            ></div>
          </div> */}

          {/* ======================== HOLIDAYS =========================== */}

          {/* <div className="relative exclusive ml-4">
            <div
              onClick={() => setholidays((e) => !e)}
              className="flex items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className="text-black   text-sm">HOLIDAYS</p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                holidays ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Tourist Trains
                </Link>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setholidays1((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">Tourist Trains</p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    holidays1 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>Bharat Gaurav</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Maharaja's Express</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Golden Chariot</Link>
                  </li>
                </ul>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setholidays2((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">Tour Packages</p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    holidays2 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>Domestic Packages</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>International Packages</Link>
                  </li>
                </ul>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setholidays3((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">Stays</p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    holidays3 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>Retiring Room</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Lounge</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* ========================= Meals =================== */}
{/* 
          <div className="relative exclusive ml-4">
            <div
              onClick={() => setmeals((e) => !e)}
              className="flex items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className=" text-black text-sm">Order Food - E-Catering</p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                meals ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  About IRCTC eWallet
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Cooked Food Menu
                </Link>
              </div>
            </div>
          </div> */}

          {/* ==========================promotions======================= */}

          {/* <div className="relative exclusive ml-4">
            <div
              onClick={() => setpromotions((e) => !e)}
              className=" flex  items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className="text-black text-sm">PROMOTIONS</p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                promotions ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border border-t-black/50 shadow `}
            >
              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setpromotions1((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">Advertise with us</p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    promotions1 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>Banner-Advertisement</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Push Notification</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Chat Bot Advertisement</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Cuboid Advertisement</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>e-Ticket Advertisement</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Logout Advertisement</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>SMS(Promotional)</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      Booking Mail Advertisement
                    </Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      Cancellation Mail Advertisement
                    </Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Mailer(Promotional)</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Captcha Advertisement</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      Advertisement Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setpromotions2((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">
                    IRCTC Rail Connect App
                  </p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    promotions2 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>Android Mobile App</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>iOS Mobile App</Link>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  IRCTC Tourism App
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  IRCTC Air App
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  National Rail Museum
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  UTS TICKET APP
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  National Rail Museum
                </Link>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setpromotions3((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">
                    IRCTC SBI Credit Card
                  </p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    promotions3 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>
                      About IRCTC SBI Credit Card
                    </Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>
                      IRCTC SBI Platinum Card RUPAY e-apply
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Trains At A Glance
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  National Voter"s Service Portal
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Rail Drishti
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Indian Railways Magazines
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  Railways Freight Business Portal
                </Link>
              </div>
            </div>
          </div> */}

        

          {/* ===================== ALERTS ======================== */}

          {/* <div className="exclusive ml-4">
            <div className="flex items-center py-[12px] px-[15px] w-full">
              <Link to={"alerts"} className=" text-black   text-sm">ALERTS</Link>
            </div>
            <div
              className={`transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            ></div>
          </div> */}


            {/* =============more========================== */}

            {/* <div className="relative exclusive ml-4">
            <div
              onClick={() => setmore((e) => !e)}
              className=" flex  items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className=" text-black text-sm">MORE</p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                more ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  ChatBot as a Service (CaaS)
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link
                  to="/foreignTouristBooking"
                  className="text-black text-[14px]"
                >
                  Link Your Aadhaar
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link
                  to="/connectingJourneyBooking"
                  className="text-black text-[14px]"
                >
                  Counter Ticket Cancellation
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link
                  to="/connectingJourneyBooking"
                  className="text-black text-[14px]"
                >
                  Counter Ticket Boarding Point Change
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link
                  to="/connectingJourneyBooking"
                  className="text-black text-[14px]"
                >
                  FORGOT ACCOUNT DETAILS?
                </Link>
              </div>

              <div
                className={`relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]`}
              >
                <div
                  onClick={() => setmore1((e) => !e)}
                  className="flex justify-between items-center"
                >
                  <p className="text-black text-[14px]">IRCTC TRAINS</p>
                  <FaCaretRight className="text-black" />
                </div>
                <ul
                  // id="irctc-trains-more-menu-ul"
                  className={`sub-menu ${
                    more1 ? "active" : ""
                  }  bg-[#719cc6] text-[14px]`}
                >
                  <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                    <Link to={"/groupBooking"}>WI-Fi Railway Stations</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Battery Operated Cars</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>E-wheelchair</Link>
                  </li>
                  <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                    <Link to={"/TravelInsurance"}>Retiring Room</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

{/* =================           contact us ================================= */}


{/* <div className="exclusive ml-4">
            <div className="flex items-center py-[12px] px-[15px] w-full">
              <Link to={"contact"} className=" text-black  text-sm">CONTACT US</Link>
            </div>
            <div
              className={`transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            ></div>
          </div> */}

{/* =========================================== AGENT LOGIN ======================================== */}


{/* <div className="relative exclusive ml-4">
            <div
              onClick={() => setagent((e) => !e)}
              className="flex items-center gap-1  py-[5px] px-[15px] w-full"
            >
              <p className=" text-black   text-sm">
                AGENT LOGIN
              </p>
              <TiArrowSortedDown className="text-black w-5 " />
            </div>

            <div
              className={`sub-menu ${
                agent ? "active" : ""
              }  transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            >
              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  AGENT OTP LOGIN
                </Link>
              </div>

              <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                <Link to="/bookTicket" className="text-black text-[14px]">
                  AGENT DC LOGIN
                </Link>
              </div>
            </div>
          </div> */}


{/* ======================================= Daily deals -====================================== */}

{/* <div className="exclusive ml-4">
            <div className="flex items-center py-[12px] px-[15px] w-full">
              <Link className=" text-red-500   text-sm">DAILY DEALS</Link>
            </div>
            <div
              className={`transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            ></div>
          </div> */}

{/* ========================================= LANGUAGE ======================================== */}
{/* 
<div className="exclusive ml-4">
            <div className="flex items-center py-[12px] px-[15px] w-full">
              <Link className=" text-black   text-sm">हिंदी</Link>
            </div>
            <div
              className={`transition-all top-[46px] w-[95%] mx-auto border  border-t-black/50 shadow `}
            ></div>
          </div> */}


        </div>
      </div>
     </div> 
  );
};

export default Sidebar;
