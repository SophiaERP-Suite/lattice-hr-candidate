// import { useEffect, useState } from "react";
// import { useAuth } from "../Request/useAuth";
// import { fetchUser } from "./AuthRequests";

// export const RequireLogin = ({ children }: { children: React.ReactNode }) => {
//   const { user, loadUser } = useAuth();
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   useEffect(() => {
//     const token =
//       localStorage.getItem("accessToken") ||
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDE3IiwiZW1haWwiOiJvcGV5ZW1pb2x1YWtpbkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDYW5kaWRhdGUiLCJqdGkiOiIyOGQyZDFhOC00YjZhLTQyODQtODk5ZC0xNDUzOTBlZDZmNDYiLCJleHAiOjE3NzAxMzUxNzQsImlzcyI6IkxhdHRpY2VIUiIsImF1ZCI6IkxhdHRpY2VIUlVzZXJzIn0.AnzQN6U54JvO5hqT70P7ma4s2PfM_U4d-U0m-95xEJA" ||
//       null;

//     if (!token) {
//       setCheckingAuth(false);
//       window.location.replace("http://localhost:5173/one/login");
//       return;
//     }

//     // if (user) {
//     //   setCheckingAuth(false);
//     //   return;
//     // }

//     fetchUser(token)
//       .then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         }
//         throw new Error("Unauthorized");
//       })
//       .then((data) => {
//         localStorage.setItem("accessToken", token);
//         loadUser(data.user);
//       })
//       .catch((err) => {
//         console.error(err);
//         localStorage.removeItem("accessToken");
//         window.location.replace("https://LatticeHr/");
//       })
//       .finally(() => {
//         setCheckingAuth(false);
//       });
//   }, []);

//   if (checkingAuth) {
//     return null;
//   }

//   return <>{children}</>;
// };

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useAuth } from "../Request/useAuth";
// import { fetchUser } from "./AuthRequests";

export const RequireLogin = ({ children }: { children: React.ReactNode }) => {
  // const { user, loadUser } = useAuth();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [params] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // Just save the token directly
    // localStorage.setItem("accessToken", token);
    setCheckingAuth(false);
  }, []);

  if (checkingAuth) {
    return null;
  }

  return <>{children}</>;
};
