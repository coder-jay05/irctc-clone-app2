import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { data, Link, useNavigate } from "react-router";
import BookNow from "./BookNow";

const Welcome = () => {
  const [trainData, settrainData] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  // const [selectedID, setselectedID] = useState(null)
  const nav = useNavigate();

  const fetchdata = async () => {
    const result = await axios.get("http://localhost:4040/train");
    settrainData(result.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const filterData = trainData.filter(
    (data) =>
      data.trainname.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.trainnumber.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div
        id="home-img"
        className="flex justify-center flex-col items-center mt-28  text-black h-full w-full"
      >
        <div className="flex justify-center">
          <p>Search Trains</p>
        </div>
        <div className="flex px-3 py-2 items-center  border border-red-700   w-[60%]  rounded-3xl bg-white ">
          <span>
            <CiSearch className="font-bold w-6 h-8 text-black" />
          </span>

          <input
            type="text"
            name="trainname"
            className="border-none outline-none flex-1 pl-4"
            placeholder="Search train by name or by train number"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
        </div>

        <div className="relative flex justify-center items-center py-10 w-[60%]">
          <div className="h-[300px] overflow-y-scroll w-[100%]">
            <table className="text-center bg-white/80 w-[100%]">
             <thead>
             <tr className="">
                <th className="p-3">SR.NO</th>
                <th className="p-3">ID</th>
                <th className="p-3">Train Name</th>
                <th className="p-3">Train Number</th>
                <th className="p-3">Check</th>
              </tr>
             </thead>

             <tbody>
             {filterData.map((data, index) => (
                <tr className="" key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.id}</td>
                  <td>{data.trainname}</td>
                  <td>{data.trainnumber}</td>
                  {/* <td>
                    <Link to={`/booknow/${data.id}`} className="bg-blue-600 px-3 py-2 rounded-lg text-white">
                      Check Now
                    </Link>
                  </td> */}
                  <td>
                    <button
                      onClick={() => nav(`/booknow/${data.id}`)}
                      className="bg-blue-600 px-3 py-2 rounded-lg text-white"
                    >
                      Check Now
                    </button>
                  </td>
                </tr>
              ))}
             </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-[2px] bg-slate-500 my-2"></div>
      </div>
    </>
  );
};

export default Welcome;
