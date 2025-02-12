import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Ticket = () => {
  const { id } = useParams();
  const [details, setdetails] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4144/details/${id}`);
    // console.log(res.data)
    setdetails(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="mt-40 mb-96 px-32 py-3 ">
      <div className="bg-slate-400">
        <div className="flex items-center justify-center text-4xl pb-10">
          Ticket
        </div>

        <hr className="py-2 " />

        <div className="px-10 py-5 flex flex-col gap-5">
          {details && (
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-y-2 leading-5 tracking-wide">
                <span>PNR</span>
                <span className="text-blue-800">12345678</span>
              </div>
              <div className="flex flex-col items-center gap-y-2 leading-5 tracking-wide">
                <span>Trian Name/No.</span>
                <span className="text-blue-800">
                  {details.trainname} / {details.trainnumber}
                </span>
              </div>
              <div className="flex flex-col items-center gap-y-2 leading-5 tracking-wide">
                <span>Class</span>
                <span className="text-blue-800">
                  {details?.button?.toUpperCase()} CLASS
                </span>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center gap-y-2 leading-5 tracking-wide">
              <span className="font-bold">Quota</span>
              <span className="text-black">General</span>
            </div>
            <div className="flex flex-col items-center gap-y-2 leading-5 tracking-wide">
              <span className="font-bold">Distance</span>
              <span className="text-black/60">2154 km</span>
            </div>
            <div className="flex flex-col items-center gap-y-2 leading-5 tracking-wide">
              <span className="font-bold">Booking</span>
              <span className="text-black/60">Today(16/12/2024)</span>
            </div>
          </div>
        </div>

        <hr />

        {/* =========================passenger details ====================== */}

        <div className="px-10 py-5 flex flex-col gap-5">
          <div className="underline underline-offset-4 font-bold">
            Passenger Details
          </div>

          <table className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>E-mail</th>
                <th>Birth</th>
              </tr>
            </thead>

            <tbody>
              {details && (
                <tr>
                  <td>1</td>
                  <td>{details.Name}</td>
                  <td>{details.age}</td>
                  <td>{details.gender}</td>
                  <td>{details.contact}</td>
                  <td>{details.email}</td>
                  <td>{details.birth}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <hr />

        {/* =============================== Payment Details ======================== */}

        <div className="px-10 py-5 flex flex-col gap-5">
          <div className="underline underline-offset-4 font-bold">
            Payment Details
          </div>

          <table className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>E-mail</th>
                <th>Birth</th>
              </tr>
            </thead>

            <tbody>
              {details && (
                <tr>
                  <td>1</td>
                  <td>{details.Name}</td>
                  <td>{details.age}</td>
                  <td>{details.gender}</td>
                  <td>{details.contact}</td>
                  <td>{details.email}</td>
                  <td>{details.birth}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
