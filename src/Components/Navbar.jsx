import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { HiMiniBars4 } from "react-icons/hi2";

const Navbar = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const current = new Date();
      // setDate(current.toLocaleDateString())
      // setTime(current.toLocaleTimeString())

      const day = current.getDate();
      const month = current.toLocaleString("en-GB", { month: "short" });
      const year = current.getFullYear();

      const formatDate = `${day}-${month}-${year}`;
      setDate(formatDate);
      setTime(current.toLocaleTimeString());
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const handleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };

  const handleMouseLeave = () => {
    setCollapse(true); // Close the sidebar when the cursor leaves
  };
  

  return (
    <>
    
      <div className="nav relative z-50 ">

        <div className="nav-left-img">
          <img
            src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png"
            alt="logo"
          /> 
        </div>

        <div className="nav-middle-content">

          <div className="middle-top-content">
            <Link
              className="bg-[#213d77] text-white py-1.5 px-2 font-bold text-center"
              to="/login"
            >
              LOGIN
            </Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/agent">AGENT LOGIN</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/help">HELP & SUPPORT</Link>
            <Link to="/dailydeals" className="text-red-500 font-bold">
             DAILY DEALS
            </Link>
            <Link
              to="/alerts"
              className="bg-[rgba(222,222,222,1)] py-1.5 px-3 font-bold text-center text-[#000]"
            >
              ALERTS
            </Link>

            <div className="font-bold">{`${date} [${time}]`}</div>

            <Link to="/A-" className="text-[#000] font-bold">
              A<sup>-</sup>
            </Link>
            <Link to="/A" className="text-[#000] font-bold">
              A
            </Link>
            <Link to="/A+" className="text-[#000] font-bold">
              A<sup>+</sup>
            </Link>
            <Link to="/language" className="text-[#000] font-bold">
              हिंदी
            </Link>
          </div>

          <div className="middle-lower-content">

            <NavLink to="/" className="opacity-50">
              <FaHome className="w-[26px] h-[16px]" />
            </NavLink>

            <div className="exclusive bg-[#213d77] py-1.5 px-3 font-bold text-center ">
              <p className="text-white">IRCTC EXCLUSIVE</p>

              <div className="relative ">
                <div className="irctc-hover absolute top-1.5 -left-3 w-[220px] bg-[#719cc6] text-sm hidden ">
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
            </div>

            <div className="train-div relative text-orange-500 font-bold underline underline-offset-4 decoration-[1.5px]">
              <p>TRAINS</p>
              <div className="relative ">
                <div className="trains absolute top-1.5 -left-3 w-[230px] bg-[#719cc6] text-sm hidden ">
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
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">IRCTC TRAINS</p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
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
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center ">
                      <p className="text-black text-[14px]">Cancel Ticket</p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/etickets"}>E-tickets</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/counterTicket"}>Counter Ticket</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link to="/pNREnquiry" className="text-black text-[14px]">
                      PNR Enquiry
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/trainSchedule"
                      className="text-black text-[14px]"
                    >
                      Train Schedule
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/trackYourTrain"
                      className="text-black text-[14px]"
                    >
                      Track Your Train
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/FTRCoachTrainBooking"
                      className="text-black text-[14px]"
                    >
                      FTR Coach/Train Booking
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/DogsCatsBooking"
                      className="text-black text-[14px]"
                    >
                      Dogs/Cats Booking
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="train-div relative">
              <p>LOYALTY</p>
              <div className="relative ">
                <div className="trains absolute top-1.5 -left-3 w-[230px] bg-[#719cc6] text-sm hidden">
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/AboutIRCTCLoyaltyprogram"
                      className="text-black text-[14px]"
                    >
                      About IRCTC Loyalty program
                    </Link>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">
                        IRCTC SBI Credit Card
                      </p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/AboutIRCTCSBICreditCard"}>
                          About IRCTC SBI Credit Card
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/IRCTCSBIPlatinumCardRUPAYe-apply"}>
                          IRCTC SBI Platinum Card RUPAY e-apply
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">
                        IRCTC BOB Credit Card
                      </p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/AboutIRCTCBOBCreditCard"}>
                          About IRCTC BOB Credit Card
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/IRCTCBOBRUPAYCreditCardeApply"}>
                          IRCTC BOB RUPAY Credit Card e-Apply
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">
                        IRCTC HDFC Credit Card
                      </p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/AboutIRCTCHDFCCreditCard"}>
                          About IRCTC HDFC Credit Card
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/IRCTCHDFCRUPAYCreditCardeApply"}>
                          IRCTC HDFC RUPAY Credit Card e-Apply
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">
                        IRCTC RBL Credit Card
                      </p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/AboutIRCTCRBLCreditCard"}>
                          About IRCTC RBL Credit Card
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/ApplyforIRCTCRBLBankCreditCard"}>
                          Apply for IRCTC RBL Bank Credit Card
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="train-div relative">
              <p className="blink-underline underline underline-offset-4 decoration-[2.5px]">
                IRCTC e-Wallet
              </p>
              <div className="relative ">
                <div className="trains  absolute top-1.5 left-3 w-[220px] bg-[#719cc6] text-sm hidden ">
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/AboutIRCTCeWallet"
                      className="text-black text-[14px]"
                    >
                      About IRCTC eWallet
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/IRCTCeWalletUserGuide"
                      className="text-black text-[14px]"
                    >
                      IRCTC eWallet User Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/buses">BUSES</Link>
            <Link to="/flight">FLIGHT</Link>
            <Link to="/hotels">HOTELS</Link>

            <div className="train-div relative ">
              <p>HOLIDAYS</p>
              <div className="relative ">
                <div className="trains  absolute top-1.5 -left-3 w-[230px] bg-[#719cc6] text-sm hidden">
                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4] "
                  >
                    <div className="flex justify-between items-center ">
                      <p className="text-black text-[14px]">Tourist Trains</p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden "
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/BharatGaurav"}>Bharat Gaurav</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/MaharajaExpress"}>Maharaja's Express</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/GoldenChariot"}>Golden Chariot</Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center ">
                      <p className="text-black text-[14px]">Tour Packages</p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden "
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/DomesticPackages"}>Domestic Packages</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/InternationalPackages"}>
                          International Packages
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">Stays</p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/RetiringRoom"}>Retiring Room</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/Lounge"}>Lounge</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="train-div relative">
              <p className="">MEALS</p>
              <div className="relative ">
                <div className="trains  absolute top-1.5 left-1 w-[220px] bg-[#719cc6] text-sm hidden ">
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/OrderFoodECatering"
                      className="text-black text-[14px]"
                    >
                      Order Food - E-Catering
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/CookedFoodMenu"
                      className="text-black text-[14px]"
                    >
                      Cooked Food Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="train-div relative ">
              <p>PROMOTIONS</p>
              <div className="relative">
                <div
                  id="promotions"
                  className="trains  absolute top-1.5 -left-3 w-[230px] bg-[#719cc6] text-sm hidden "
                >
                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">
                        Advertise with us
                      </p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[225px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/BannerAdvertisement"}>
                          Banner-Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/PushNotification"}>Push Notification</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/ChatBotAdvertisement"}>
                          Chat Bot Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/CuboidAdvertisement"}>
                          Cuboid Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/eTicketAdvertisement"}>
                          e-Ticket Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/LogoutAdvertisement"}>
                          Logout Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/SMS"}>SMS(Promotional)</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/>BookingMailAdvertisement"}>
                          Booking Mail Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/CancellationMailAdvertisement"}>
                          Cancellation Mail Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/Mailer"}>Mailer(Promotional)</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/CaptchaAdvertisement"}>
                          Captcha Advertisement
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/AdvertisementDisclaimer"}>
                          Advertisement Disclaimer
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center ">
                      <p className="text-black text-[14px]">
                        IRCTC Rail Connect App
                      </p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[225px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/AndroidMobileApp"}>Android Mobile App</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/iOSMobileApp"}>iOS Mobile App</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/IRCTCTourismApp"
                      className="text-black text-[14px]"
                    >
                      IRCTC Tourism App
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link to="/IRCTCAirApp" className="text-black text-[14px]">
                      IRCTC Air App
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/NationalRailMuseum"
                      className="text-black text-[14px]"
                    >
                      National Rail Museum
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link to="/UTSTICKETAPP" className="text-black text-[14px]">
                      UTS TICKET APP
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/NationalRailMuseum"
                      className="text-black text-[14px]"
                    >
                      National Rail Museum
                    </Link>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">
                        IRCTC SBI Credit Card
                      </p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[225px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/AboutIRCTCSBICreditCard"}>
                          About IRCTC SBI Credit Card
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/IRCTCSBIPlatinumCardRUPAYe-apply"}>
                          IRCTC SBI Platinum Card RUPAY e-apply
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link to="/pNREnquiry" className="text-black text-[14px]">
                      Trains At A Glance
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/trainSchedule"
                      className="text-black text-[14px]"
                    >
                      National Voter"s Service Portal
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/trackYourTrain"
                      className="text-black text-[14px]"
                    >
                      Rail Drishti
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/IndianRailwaysMagazines"
                      className="text-black text-[14px]"
                    >
                      Indian Railways Magazines
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/RailwaysFreightBusinessPortal"
                      className="text-black text-[14px]"
                    >
                      Railways Freight Business Portal
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="train-div relative">
              <p>MORE</p>
              <div className="relative ">
                <div
                  id="more-option"
                  className="trains  absolute top-1.5 -left-3 w-[250px] bg-[#719cc6] text-sm hidden "
                >
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/ChatBotasaService"
                      className="text-black text-[14px]"
                    >
                      ChatBot as a Service (CaaS)
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/LinkYourAadhaar"
                      className="text-black text-[14px]"
                    >
                      Link Your Aadhaar
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/CounterTicketCancellation"
                      className="text-black text-[14px]"
                    >
                      Counter Ticket Cancellation
                    </Link>
                  </div>
                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/CounterTicketBoardingPointChange"
                      className="text-black text-[14px]"
                    >
                      Counter Ticket Boarding Point Change
                    </Link>
                  </div>

                  <div className="flex gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]">
                    <Link
                      to="/FORGOTACCOUNTDETAILS?"
                      className="text-black text-[14px]"
                    >
                      FORGOT ACCOUNT DETAILS?
                    </Link>
                  </div>

                  <div
                    id="irctc-trains-more-menu"
                    className="relative gap-3 p-3 text-sm justify-start items-center hover:bg-[#fee4d4]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">AT STATIONS</p>
                      <FaCaretRight className="text-black" />
                    </div>
                    <ul
                      id="irctc-trains-more-menu-ul"
                      className=" absolute  top-0 left-[190px] w-[220px] bg-[#719cc6] text-[14px] hidden"
                    >
                      <li className="flex gap-3 p-3 text-sm justify-start items-center  ">
                        <Link to={"/WIFiRailwayStations"}>
                          WI-Fi Railway Stations
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/BatteryOperatedCars"}>
                          Battery Operated Cars
                        </Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/Ewheelchair"}>E-wheelchair</Link>
                      </li>
                      <li className="flex gap-3 p-3 text-sm justify-start items-center ">
                        <Link to={"/RetiringRoom"}>Retiring Room</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-right-img flex items-center gap-8">
          <img
            src="https://www.irctc.co.in/nget/assets/images/logo.png"
            alt="logo"
          />
          <div
            id="three-dots"
            className="text-4xl text-slate-400 border border-slate-300 px-2 py-1 relative"
          >
            <HiMiniBars4 onClick={handleCollapse} />

            <div
              className={`sidebar ${collapse ? "active" : ""} z-50  relative`}
              onMouseLeave={handleMouseLeave}
            >
              <Sidebar date={date} time={time} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
