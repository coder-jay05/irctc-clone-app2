// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const options = {
//   method: "POST",
//   url: "https://trains.p.rapidapi.com/v1/railways/trains/india",
//   headers: {
//     "x-rapidapi-key": "07d470ee73msh575d4b60d0a21bcp1f4649jsnd1dce2e6e77b",
//     "x-rapidapi-host": "trains.p.rapidapi.com",
//     "Content-Type": "application/json",
//   },
//   data: { search: "Rajdhani" },
// };

// const Api = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchApi = async () => {
//     try {
//       const response = await axios.request(options);
//       setData(response.data); // Update state with the response data
//       console.log(response.data)
//     } catch (error) {
//       setError(error.message); // Update state with the error message
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   return (
//     <div>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//     </div>
//   );
// };

// export default Api;
