import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const BookNow = ({}) => {
  let url = "http://localhost:3111/resourceName";
  const [gettingdata, setgettingdata] = useState([]);
  const [book, setbook] = useState(true);
  const [sleeper, setsleeper] = useState(true);
  const [addTrainData, setaddTrainData] = useState({
    button: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchdata = async () => {
    const result = await axios.get(`http://localhost:4040/train/${id}`);
    setgettingdata(result.data);
    // setgettingdata(Array.isArray(result.data) ? result.data : [result.data])
    // this line checks whether my api returs an array or single value or just an object .if it is an array it will work normally (result.data) if it returs an single object it  will error.because maine map method use kiya hai .jo sirf array ko display karta hai
    // console.log(result.data);
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  const handleBook = () => {
    setbook(false);
    setsleeper(true);
    setaddTrainData({...addTrainData,
      button: "AC",
    })
  };

  const handleSleeper = () => {
    setsleeper(false);
    setbook(true);
    setaddTrainData({...addTrainData,
      button: "Sleeper",
    })
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setaddTrainData({ ...addTrainData, [name]: value });
  // };

  const handleSubmit = () => {
    axios
      .post(url, { ...gettingdata, ...addTrainData })
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <div
        id="home-img"
        className="flex justify-center flex-col items-center mt-28  text-black h-full w-full"
      >
        <div className="relative flex justify-center items-center py-10 w-[70%]">
          <div className="h-[300px]  w-[100%]">
            <table className="text-center bg-white/80 w-[100%]">
              <thead>
                <tr className="">
                  <th className="p-3">ID</th>
                  <th className="p-3">Train Name</th>
                  <th className="p-3">Train Number</th>
                  <th className="">Category</th>
                  <th className="p-3">Book</th>
                </tr>
              </thead>

              <tbody>
                {/* {gettingdata.map((data, index) => (
                <tr className="" key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.id}</td>
                  <td>{data.trainname}</td>
                  <td>{data.trainnumber}</td>
            
                  <td>
                    <button className="bg-blue-600 px-3 py-2 rounded-lg text-white">
                      Check Now
                    </button>
                  </td>
                </tr>
              ))} */}

                {gettingdata ? (
                  <tr>
                    <td>{gettingdata.id}</td>
                    <td>{gettingdata.trainname}</td>
                    <td>{gettingdata.trainnumber}</td>
                    <td>
                      <div className="outline-none px- py-3 bg-transparent flex  items-center justify-center gap-5">
                        <button
                          name="button"
                          value="AC"
                          style={{ backgroundColor: book ? "red" : "green" }}
                          onClick={handleBook}
                          className="px-3 py-2 rounded-lg text-black"
                        >
                          AC
                        </button>
                        <button
                          name="button"
                          value="Sleeper"
                          style={{ backgroundColor: sleeper ? "red" : "green" }}
                          onClick={handleSleeper}
                          className=" px-3 py-2 rounded-lg text-black"
                        >
                          Sleeper
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        disabled={book && sleeper}
                        onClick={() => {
                          navigate(`/bookingform/${gettingdata.id}`);
                          handleSubmit();
                        }}
                        className={` px-3 py-2 rounded-lg text-white ${
                          book && sleeper ? "bg-blue-200" : "bg-blue-600"
                        }`}
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="3">Loading...</td>
                  </tr>
                )}
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

export default BookNow;
