import axios from 'axios';
import React, { useState } from 'react'

const AddTrains = () => {
    const [trains, setTrains] = useState({
        trainname: "",
        trainnumber: "",
      });

      const handleTrainChange = (e) => {
        const { name, value } = e.target;
        setTrains({ ...trains, [name]: value });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:4040/train", { ...trains });
        setTrains(res);
        console.log(res.data);
        setTrains({ trainname: "",
            trainnumber: "",})
      };

  return (
    <form onSubmit={handleSubmit}>
    <div className="mt-40 text-black flex flex-col gap-4 items-center justify-center">
      <div>
        <p className="text-black text-3xl font-bold">Add Trains data</p>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <input
          type="text"
          name="trainname"
          className="border border-black  py-2 px-5 h-11 w-[400px] rounded-3xl"
          placeholder="Train Name"
          value={trains.trainname}
          onChange={handleTrainChange}
        />

        <input
          type="text"
          name="trainnumber"
          className="border border-black  py-2 px-5 h-11 w-[400px] rounded-3xl"
          placeholder="Train Number"
          value={trains.trainnumber}
          onChange={handleTrainChange}
        />
      </div>

      <div className="bg-orange-500 rounded-3xl">
        <button className="px-8 py-2 text-white  tracking-wide ">
          ADD
        </button>
      </div>
    </div>
  </form>
  )
}

export default AddTrains
