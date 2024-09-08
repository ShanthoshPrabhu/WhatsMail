// "use client"
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";

// function SuccessRedirectPage() {
//   const [query, setQuery] = useSearchParams();
//   const [authCode, setAuthCode] = useState(null);
//   const [source, setSource] = useState(null);
//  const [phoneNumber, setPhoneNumber] = useState("");
//   useEffect(() => {
//     const authCode = query?.get("code");
//     const source = axios.CancelToken.source();
//     setAuthCode(authCode);
//     setSource(source);
//   }, []);

//   const verifyNumber = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/verify-phone",
//         {
//           phoneNumber,
//           authCode,
//         },
//         {
//           cancelToken: source.token,
//         }
//       );
//       console.log(response, "response");
//     } catch (error) {
//       console.log(error, "error");
//     }
//   }

//   console.log(authCode, source, query,"authCode, source, query");

//   return (
//     <div className=" min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className=" bg-white shadow-lg rounded-lg max-w-xl w-full p-10">
//         <div className="text-lg text-left mb-6">Enter Your Phone Number</div>
//         <input
//           type="phone"
//           placeholder="Phone Number"
//           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 mb-6"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//         <button
//           onClick={verifyNumber}
//           className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SuccessRedirectPage;
"use client"
import React from 'react'

function Success() {
  return (
    <div>Success</div>
  )
}

export default Success