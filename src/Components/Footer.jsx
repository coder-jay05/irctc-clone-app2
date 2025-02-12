import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const Footer = () => {
  const [collapse, setcollapse] = useState(false);
  const [collapse1, setcollapse1] = useState(false);
  const [collapse2, setcollapse2] = useState(false);
  const [collapse3, setcollapse3] = useState(false);
  const [collapse4, setcollapse4] = useState(false);
  const [collapse5, setcollapse5] = useState(false);
  const [collapse6, setcollapse6] = useState(false);
  const [collapse7, setcollapse7] = useState(false);
  const [collapse8, setcollapse8] = useState(false);
  const [collapse9, setcollapse9] = useState(false);
  const [collapse10, setcollapse10] = useState(false);
  const [collapse11, setcollapse11] = useState(false);
  const [collapse12, setcollapse12] = useState(false);
  const [collapse13, setcollapse13] = useState(false);
  const [collapse14, setcollapse14] = useState(false);
  const [collapse15, setcollapse15] = useState(false);
  const [collapse16, setcollapse16] = useState(false);
  const [collapse17, setcollapse17] = useState(false);
  const [collapse18, setcollapse18] = useState(false);
  const [collapse19, setcollapse19] = useState(false);

  // =============== sub collapse ===============

  const [subCollapse, setsubCollapse] = useState(false);
  const [subCollapse2, setsubCollapse2] = useState(false);
  const [subCollapse3, setsubCollapse3] = useState(false);
  const [subCollapse4, setsubCollapse4] = useState(false);
  const [subCollapse5, setsubCollapse5] = useState(false);
  const [subCollapse6, setsubCollapse6] = useState(false);
  const [subCollapse7, setsubCollapse7] = useState(false);
  const [subCollapse8, setsubCollapse8] = useState(false);
  const [subCollapse9, setsubCollapse9] = useState(false);

  const handleClick = (e) => {
    setcollapse((e) => !e);
  };

  const handleBlur = () => {
    setcollapse(false);
  };

  return (
    <div className="footer w-full">
      {/* ================= top footer ==================== */}

      <div className="bg-gradient-to-l from-[#9b4b90] to-[#2c215d] py-3 gap-12 flex items-center justify-center mb-[2px]">
        <p className="text-white text-[16px]">
          Get Connected with us on social networks
        </p>
        <div className="flex gap-2">
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#4867AA] rounded-full shadow-2xl"
          >
            <FaFacebookF className="text-white p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-green-100 rounded-full shadow-2xl"
          >
            <FaWhatsapp className="text-green-500 p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-red-100 rounded-full shadow-2xl"
          >
            <FaYoutube className="text-red-600 p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#2e5e86] rounded-full shadow-2xl"
          >
            <FaInstagram className="text-white p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#0270AD] rounded-full shadow-2xl"
          >
            <FaLinkedinIn className="text-white p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#29A2E0] rounded-full shadow-2xl"
          >
            <FaTelegram className="text-white p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#C51F26] rounded-full shadow-2xl"
          >
            <FaPinterest className="text-white p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#3C576C] rounded-full shadow-2xl"
          >
            <FaTumblr className="text-white p-3 w-12 h-12 " />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#F7BB19] rounded-full shadow-2xl"
          >
            <img
              src="https://www.irctc.co.in/nget/assets/images/Koo.png"
              className="text-white  w-12 h-12 "
            />
          </a>
          <a
            href="https://www.facebook.com/IRCTCofficial/"
            target="_blank"
            className="bg-[#4C9BE5] rounded-full shadow-2xl"
          >
            <FaTwitter className="text-white p-3 w-12 h-12 " />
          </a>
        </div>
      </div>

      {/* ================================= middle footer=================================== */}

      <div className="middle-footer bg-[#2c215d] text-white mx-auto">
        <div className="grid grid-cols-5 content-center gap-5 mx-[150px] py-8">
          {/* =====================first coloum ========================= */}

          <div className="flex flex-col gap-2 cursor-pointer">
            <div className="1">
              <div
                onClick={handleClick}
                onBlur={handleBlur}
                className="flex py-3 items-center  gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>IRCTC Trains</span>
                <span>
                  {" "}
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Salient Features</a>
                <a href="">Ticket Cancellation Rules</a>
                <a href="">Foreign Tourist T&C</a>
                <a href="">Group Booking T&C</a>
                <a href="">Travel Insurance Claim Process</a>
              </div>
            </div>

            {/* =============================== 1st coloum 2 row*/}

            <div className="2">
              <div
                onClick={() => setcollapse1((e) => !e)}
                onBlur={() => setcollapse1(false)}
                className="flex py-3 items-center gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>General Information</span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse1 ? "active" : ""
                } mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">More info</a>
                <a href="">FAQs</a>
                <a href="">Terms & Conditions</a>
                <a href="">Travel Insurance T&C</a>
                <a href="">Scheme for issue of waitlisted E-tickets</a>
                <a href="">Protect against fraudulent emails</a>
                <a href="">General Guideline for SUVIDHA trains</a>
                <a href="">Current booking Guidelines</a>
                <a href="">Forgo Senior Citizen Concession-FAQ</a>
                <a href="">Trains at a Glance</a>
                <a href="">Guidelines for Boarding Station change</a>
                <a href="">Guideline for PASS Booking</a>
              </div>
            </div>

            {/* ==========================3======================= */}

            <div className="3">
              <div
                onClick={() => setcollapse2((e) => !e)}
                onBlur={() => setcollapse2(false)}
                className="flex py-3 items-center gap-2   hover:outline outline-1 outline-red-500"
              >
                <span>Important Information</span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse2 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Bank Transaction Charges</a>
                <a href="">Women Sr. Citizen Concession</a>
                <a href="">VIKALP Scheme</a>
                <a href="">Travel Insurance (Incl. of GST)</a>
                <a href="">Browser Settings</a>
              </div>
            </div>

            {/* ================================4 */}

            <div className="4">
              <div
                onClick={() => setcollapse3((e) => !e)}
                onBlur={() => setcollapse3(false)}
                className="flex py-3 items-center gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>Agents</span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse3 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">IRCTC Authorized Service Providers</a>
                <a href="">Digital Certificate Generation Process</a>
                <a href="">Blacklist Agent</a>
                <a href="">Find NgeT Agents</a>
                <a href="">Rules and Regulations for the Agents</a>
                <a href="">Norms for RTSA</a>
                <a href="">Norms for IATA</a>
                <a href="">Norms for GSA</a>
                <a href="">Norms for Internet Cafe Scheme</a>
                <a href="">Norms for B2B Scheme</a>
                <a href="">Norms for B2C & Mobile Scheme</a>
                <a href="">Registration Form</a>
                <a href="">Requisition Slip</a>
              </div>
            </div>

            {/* ======================5========================== */}
            <div className="5">
              <div
                onClick={() => setcollapse4((e) => !e)}
                onBlur={() => setcollapse4(false)}
                className="flex py-3 items-center gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>Enquiries</span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse4 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Reservation Enquiries</a>
                <a href="">PNR Enquiry</a>
                <a href="">Train Enquiry</a>
                <a href="">Train/Fare Accommodation</a>
                <a href="">Train Between Important Stations</a>
                <a href="">Railway Enquiry-139</a>
              </div>
            </div>
          </div>

          {/* ============================= 2 coloum ===================== */}

          <div className="flex flex-col gap-2 cursor-pointer">
            <div className="5">
              <div
                onClick={() => setcollapse5((e) => !e)}
                className="flex py-3 items-center  gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>How To</span>
                <span>
                  {" "}
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse5 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Register</a>
                <a href="">Book E-ticket (PDF) (VIDEO)</a>
                <a href="">Book tatkal ticket</a>
                <a href="">Book Concession</a>
                <a href="">Tickets for Person With</a>
                <a href="">Disability</a>
                <a href="">Cancel E-ticket</a>
                <a href="">International/NRI User</a>
                <a href="">Registration Guide</a>
                <a href="">Change Boarding Point</a>
                <a href="">Link Your Aadhaar</a>
                <a href="">File TDR</a>
              </div>
            </div>

            {/* =============================== 2nd coloum 2 row*/}

            <div className="6">
              <div
                onClick={() => setcollapse6((e) => !e)}
                onBlur={() => setcollapse6(false)}
                className="flex py-3 items-center  gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>IRCTC Official App</span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse6 ? "active" : ""
                } mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">IRCTC Rail Connect</a>
                <a href="">(Android)</a>
                <a href="">IRCTC Rail Connect</a>
                <a href="">(iOS)</a>
                <a href="">IRCTC Order Food</a>
                <a href="">(Android)</a>
                <a href="">IRCTC Order Food</a>
                <a href="">(IOS)</a>
                <a href="">IRCTC Tourism App</a>
                <a href="">IRCTC Air App</a>
                <a href="">(Android)</a>
                <a href="">IRCTC Air App (IOS)</a>
                <a href="">IRCTC iMudra</a>
                <a href="">(Android)</a>
              </div>
            </div>

            {/* ==========================3======================= */}

            <div className="7">
              <div
                onClick={() => setcollapse7((e) => !e)}
                onBlur={() => setcollapse7(false)}
                className="flex py-3 items-center gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>Advertise with us</span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse7 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">IRCTC Marketing Statistics</a>
                <a href="">Banner-Advertisement</a>
                <a href="">Advertisement Terms & Conditions</a>
                <a href="">Banner Locations on IRCTC</a>
                <a href="">Push Notification</a>
                <a href="">Chat Bot Advertisement</a>
                <a href="">Chat Bot : As a IRCTC Service</a>
                <a href="">Cuboid Advertisement</a>
                <a href="">e-Ticket(ERS) Advertisement</a>
                <a href="">Logout Advertisement</a>
                <a href="">139-Jingles</a>
                <a href="">SMS(Promotional)</a>
                <a href="">Booking Mail Advertisement</a>
                <a href="">Cancellation Mail Advertisement</a>
                <a href="">Mailer(Promotional)</a>
                <a href="">Captcha Advertisement</a>
                <a href="">Advertisement Disclaimer</a>
              </div>
            </div>

            {/* ================================4 */}

            <div className="8">
              <div
                onClick={() => setcollapse8((e) => !e)}
                onBlur={() => setcollapse8(false)}
                className="flex py-3 items-center gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>Refund Rules</span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse8 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Ticket Cancellation & Refund Rules</a>
                <a href="">
                  Gazette: Cancellation of Ticket and Refund Rules 2015
                </a>
                <a href="">Refund Rule of Suvidha Train</a>
              </div>
            </div>

            {/* ======================5========================== */}
            <div className="9">
              <div
                onClick={() => setcollapse9((e) => !e)}
                onBlur={() => setcollapse9(false)}
                className="flex items-center gap-2 py-3 hover:outline outline-1 outline-red-500"
              >
                <span className="text-[14px]">
                  Person With Disability Facilities
                </span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse9 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Facilities for Person With Disability Users</a>
                <a href="">Facilities for Visually Impaired Users</a>
                <a href="">User Guide: Person With Disability Booking</a>
              </div>
            </div>
          </div>

          {/* ============================= 3 coloum ===================== */}
          <div className="flex flex-col gap-2 cursor-pointer">
            <div className="10">
              <div
                onClick={() => setcollapse10((e) => !e)}
                className="flex py-3 items-center  gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>IRCTC eWallet</span>
                <span>
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse10 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">About</a>
              </div>
            </div>

            {/* =============================== 2nd coloum 2 row*/}

            <div className="11">
              <div
                onClick={() => setcollapse11((e) => !e)}
                onBlur={() => setcollapse11(false)}
                className="flex py-3 items-center   gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>Avail Loyalty Benefits</span>

                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse11 ? "active" : ""
                } mx-auto border border-t-black/50 shadow  flex flex-col`}
              >
                <div className="flex flex-col gap-x-3 gap-y-5 py-5 px-2">
                  <div onClick={() => setsubCollapse((e) => !e)}>
                    <div className="flex gap-2 items-center">
                      <span className="text-[14px]">
                        IRCTC SBI Loyalty Program{" "}
                      </span>
                      <TiArrowSortedDown className="w-5 " />
                      <span></span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse ? "active" : ""
                      } mx-auto   flex flex-col `}
                    >
                      <a href="">IRCTC SBI Credit Card</a>
                      <a href="">About IRCTC Loyalty Scheme</a>
                      <a href="">Loyalty Account Linking</a>
                      <a href="">Accrual of Points</a>
                      <a href="">Redemption of points</a>
                      <a href="">Purchase of Points</a>
                    </div>
                  </div>

                  <div onClick={() => setsubCollapse2((e) => !e)}>
                    <div className="flex gap-2 items-center">
                      <span className="text-[14px]">
                        IRCTC BOB Loyalty Program
                      </span>
                      <span>
                        {" "}
                        <TiArrowSortedDown className="w-5 " />
                      </span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse2 ? "active" : ""
                      } mx-auto   flex flex-col`}
                    >
                      <a href="">About IRCTC Loyalty Scheme</a>
                      <a href="">Loyalty Account Linking</a>
                      <a href="">Accrual of Points</a>
                    </div>
                  </div>

                  <div onClick={() => setsubCollapse3((e) => !e)}>
                    <div className="flex  items-center">
                      <span className="text-[14px]">
                        IRCTC HDFC Loyalty Program
                      </span>
                      <span>
                        {" "}
                        <TiArrowSortedDown className="w-5 " />
                      </span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse3 ? "active" : ""
                      } mx-auto   flex flex-col`}
                    >
                      <a href="">About IRCTC Loyalty Scheme</a>
                      <a href="">Loyalty Account Linking</a>
                      <a href="">Accrual of Points</a>
                    </div>
                  </div>

                  <div onClick={() => setsubCollapse4((e) => !e)}>
                    <div className="flex items-center">
                      <span className="text-[14px]">
                        IRCTC HDFC Loyalty Program
                      </span>
                      <span>
                        {" "}
                        <TiArrowSortedDown className="w-5 " />
                      </span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse4 ? "active" : ""
                      } mx-auto   flex flex-col`}
                    >
                      <a href="">About IRCTC Loyalty Scheme</a>
                      <a href="">Loyalty Account Linking</a>
                      <a href="">Accrual of Points</a>
                      <a href="">Redemption of points</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ==========================3======================= */}
            <div className="12">
              <div
                onClick={() => setcollapse12((e) => !e)}
                className="flex py-3 items-center hover:outline outline-1 outline-red-500"
              >
                <span className="text-[14px]">IRCTC-iPAY Payment Gateway</span>
                <span>
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse12 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">IRCTC-iPAY (PDF) (VIDEO)</a>
                <a href="">AutoPay</a>
              </div>
            </div>

            {/* ================================4 */}

            <div className="13">
              <div
                onClick={() => setcollapse13((e) => !e)}
                className="flex py-3 gap-2 items-center hover:outline outline-1 outline-red-500"
              >
                <span>IRCTC Zone</span>
                <span>
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse13 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Jago yatri jago</a>
                <a href="">Jansankhya Sthirata Kosh</a>
                <a href="">Maharaja"s Express</a>
              </div>
            </div>

            {/* ======================5========================== */}
            <div className="14">
              <div
                onClick={() => setcollapse14((e) => !e)}
                onBlur={() => setcollapse14(false)}
                className="flex py-3 items-center gap-2 justify-between  hover:outline outline-1 outline-red-500"
              >
                <span className="text-[14px]">
                  DMRC Ticket Booking at IRCTC
                </span>
                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse14 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">User Guide</a>
                <a href="">Terms & Conditions</a>
              </div>
            </div>
          </div>

          {/* ============================= 4 coloum ===================== */}

          <div className="flex flex-col gap-2 cursor-pointer">
            <div className="15">
              <div
                onClick={() => setcollapse15((e) => !e)}
                className="flex py-3 items-center  gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>For Newly Migrated Agents</span>
                <span>
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse15 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Login Manual - from old site to new site</a>
                <a href="">Operating Manual for new e-ticketing website</a>
                <a href="">Operating Manual for Agent Interface Application</a>
              </div>
            </div>

            {/* =============================== 4nd coloum 2 row*/}

            <div className="16">
              <div
                onClick={() => setcollapse16((e) => !e)}
                className="flex py-3 items-center  gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>Mobile Zone</span>
                <span>
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse16 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">IRCTC Android App - IRCTC Rail Connect</a>
                <a href="">ClearTrip</a>
                <a href="">Airtel</a>
                <a href="">Amazon India - Shop & Pay</a>
                <a href="">Confirmtkt</a>
                <a href="">EaseMyTrip Flight, Hotel, Train</a>
                <a href="">Google Pay</a>
                <a href="">Goibibo</a>
                <a href="">MakeMyTrip</a>
                <a href="">Ixigo Trains</a>
                <a href="">Ixigo Flights</a>
                <a href="">PayTM</a>
                <a href="">JustDial</a>
                <a href="">redRail</a>
                <a href="">redBus</a>
                <a href="">Railofy</a>
                <a href="">Railyatri</a>
                <a href="">Trainman</a>
                <a href="">SBI YONO</a>
                <a href="">Yatra</a>
                <a href="">udChalo</a>
                <a href="">Kotak</a>
                <a href="">ICICI</a>
                <a href="">HDFC PayZapp</a>
                <a href="">Tripozo</a>
              </div>
            </div>

            {/* =============================== 4nd coloum 2 row*/}

            <div className="17">
              <div
                onClick={() => setcollapse17((e) => !e)}
                onBlur={() => setcollapse17(false)}
                className="flex py-3 items-center   gap-2  hover:outline outline-1 outline-red-500"
              >
                <span>Policies</span>

                <span>
                  <TiArrowSortedDown className=" w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse17 ? "active" : ""
                } mx-auto border border-t-black/50 shadow  flex flex-col`}
              >
                <div className="flex flex-col gap-x-3 gap-y-5 py-5 px-2">
                  <div onClick={() => setsubCollapse5((e) => !e)}>
                    <div className="flex items-center">
                      <span className="text-[11px]">
                        Agents & Principal Service Providers Policies for
                        Reserved e-Ticketing
                      </span>
                      <TiArrowSortedDown className="w-10 " />
                      <span></span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse5 ? "active" : ""
                      } mx-auto   flex flex-col `}
                    >
                      <a href="">Train Information Enquiry Services (TIES)</a>
                      <a href="">B2C - Start Up/ MSME</a>
                      <a href="">e-Governance Policy (B2B/ICS)</a>
                      <a href="">B2B and ICS (Internet Café) PSP’s</a>
                      <a href="">B2C PSP ((other than Start-up/MSME))</a>
                      <a href="">
                        GSA B2B (Web Services) PSP Outside India for Train
                        e-ticketing
                      </a>
                      <a href="">Direct Agents (IATA/RSA/GSA etc.)</a>
                    </div>
                  </div>

                  <div onClick={() => setsubCollapse6((e) => !e)}>
                    <div className="flex gap-2 items-center">
                      <span className="text-[14px]">
                        Payment Integration Policies for Reserved e-Ticketing
                      </span>
                      <span>
                        <TiArrowSortedDown className="w-5 " />
                      </span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse6 ? "active" : ""
                      } mx-auto   flex flex-col`}
                    >
                      <a href="">EMI Integration on Website/ Mobile App</a>
                      <a href="">
                        Payment Gateway/ Card Acquiring Integration on Website/
                        Mobile App
                      </a>
                      <a href="">
                        Multiple Payment Provider on Website/ Mobile App (MPP)
                      </a>
                      <a href="">
                        “Book Now Pay Later” Integration on Website/ Mobile App
                      </a>
                      <a href="">Net Banking Integration on Website</a>
                      <a href="">
                        Prepaid Payment Instrument Integration on Website
                      </a>
                      <a href="">
                        Prepaid Payment Instrument Integration on Mobile App
                      </a>
                      <a href="">UPI Integration on Website/ Mobile App</a>
                    </div>
                  </div>

                  <div onClick={() => setsubCollapse7((e) => !e)}>
                    <div className="flex  items-center">
                      <span className="text-[14px]">
                        Payment Integration Policies for Unreserved Ticketing
                      </span>
                      <span>
                        <TiArrowSortedDown className="w-5 " />
                      </span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse7 ? "active" : ""
                      } mx-auto   flex flex-col`}
                    >
                      <a href="">Payment Integration on UTS App</a>
                    </div>
                  </div>

                  <div onClick={() => setsubCollapse8((e) => !e)}>
                    <div className="flex items-center">
                      <span className="text-[14px]">
                        Payment Integration Policy for Tourism
                      </span>
                      <span>
                        {" "}
                        <TiArrowSortedDown className="w-5 " />
                      </span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse8 ? "active" : ""
                      } mx-auto   flex flex-col`}
                    >
                      <a href="">
                        Policy for Payment Provider Integration on IRCTC
                        Services (Air-ticketing, Retiring Rooms, Tourism
                        Websites and Mobile App)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <a href="" className="handicraft">
                      Handicraft Websites Promotion Policy
                    </a>
                  </div>

                  <div onClick={() => setsubCollapse9((e) => !e)}>
                    <div className="flex items-center">
                      <span className="text-[14px]">Marketing Policies</span>
                      <span>
                        <TiArrowSortedDown className="w-5 " />
                      </span>
                    </div>
                    <div
                      className={`footer-submenu  ${
                        subCollapse9 ? "active" : ""
                      } mx-auto   flex flex-col`}
                    >
                      <a href="">
                        Policy for Empanelment of Advertising Agency
                      </a>
                      <a href="">
                        Policy for Empanelment of Advertising Agency on DAVP/BOC
                        Rates
                      </a>
                      <a href="">
                        Policy for Empanelment of Agency Integration of GIFT
                        VOUCHER/GIFT CARD Based White Label Solution
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ==========================3======================= */}

            <div className="18">
              <div
                onClick={() => setcollapse18((e) => !e)}
                className="flex py-3 items-center hover:outline outline-1 outline-red-500"
              >
                <span className="text-[14px]">Ask Disha ChatBot</span>
                <span>
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse18 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Services of Ask Disha ChatBot</a>
                <a href="">Features of Ask Disha ChatBot</a>
              </div>
            </div>

            {/* ================================4 */}

            <div className="19">
              <div
                onClick={() => setcollapse19((e) => !e)}
                className="flex py-3 gap-2 items-center hover:outline outline-1 outline-red-500"
              >
                <span>About us</span>
                <span>
                  <TiArrowSortedDown className="w-5 " />
                </span>
              </div>

              <div
                className={`footer-menu ${
                  collapse19 ? "active" : ""
                }  mx-auto border  border-t-black/50 shadow  flex flex-col`}
              >
                <a href="">Awards & Achievements</a>
              </div>
            </div>
          </div>
          {/* ============================= 5 coloum ===================== */}

          <div className="flex flex-col gap-2 cursor-pointer">
            <div className=" flex py-3 items-center  gap-2 hover:outline outline-1 outline-red-500">
              <a href="" className="text-white">
                Help & Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="flex flex-col items-center justify-center text-[13px]"> 
          <p>Copyright Â© 2024 - www.irctc.co.in. All Rights Reserved</p>
          <p className="font-bold text-black/100">Designed and Hosted by <span className="text-[#007ad9]">CoderJay</span>  </p>
          <p className="font-bold text-black/100">Compatible Browsers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
