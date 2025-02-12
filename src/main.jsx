import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Form, Route, RouterProvider } from "react-router";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Loginnn from "./Topcomponents/Loginnn.jsx";
import Register from "./Topcomponents/Register.jsx";
import Helpsupport from "./Topcomponents/Helpsupport.jsx";
import Dailydeals from "./Topcomponents/Dailydeals.jsx";
import Contact from "./Topcomponents/Contact.jsx";
import Alerts from "./Topcomponents/Alerts.jsx";
import Agentlogin from "./Topcomponents/Agentlogin.jsx";
import Welcome from "./Topcomponents/Welcome.jsx";
import AddTrains from "./Topcomponents/AddTrains.jsx";
import BookNow from "./Topcomponents/BookNow.jsx";
import BookingForm from "./Topcomponents/BookingForm.jsx";
import Ticket from "./Topcomponents/Ticket.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <Home />
//       </>
//     ),
//   },
//   {
//     path: "login",
//     element: (
//       <>
//         <Navbar /> <Loginnn />
//       </>
//     ),
//   },
//   {
//     path: "/register",
//     element: (
//       <>
//         <Navbar />
//         <Register />
//       </>
//     ),
//   },
//   {
//     path: "/help",
//     element: (
//       <>
//         <Navbar />
//         <Helpsupport />
//       </>
//     ),
//   },
//   {
//     path: "/dailydeals",
//     element: (
//       <>
//         <Navbar />
//         <Dailydeals />
//       </>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <>
//         <Navbar />
//         <Contact />
//       </>
//     ),
//   },
//   {
//     path: "/alerts",
//     element: (
//       <>
//         <Navbar />
//         <Alerts />
//       </>
//     ),
//   },
//   {
//     path: "/agent",
//     element: (
//       <>
//         <Navbar />
//         <Agentlogin />
//       </>
//     ),
//   },
// ]);

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
    <Route path="" element={<Home/>}/>
    <Route path="login" element={<Loginnn/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="help" element={<Helpsupport/>}/>
    <Route path="dailydeals" element={<Dailydeals/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="alerts" element={<Alerts/>}/>
    <Route path="agent" element={<Agentlogin/>}/>
    <Route path="welcome" element={<Welcome/>}/>
    <Route path="addtrains" element={<AddTrains/>}/>
    <Route path="booknow/:id" element={<BookNow/>}/>
    <Route path="bookingform/:id" element={<BookingForm/>}/>
    <Route path="ticket/:id" element={<Ticket/>}/>


    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App/>
    {/* <Navbar/> */}
    {/* <Loginnn /> */}
   
  </RouterProvider>
);
