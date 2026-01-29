import { useEffect, useState } from 'react';
import { useAuth } from '../Request/useAuth';
import { fetchUser } from './AuthRequests';

export const RequireLogin = ({ children }: { children: React.ReactNode }) => {
  const { user, loadUser } = useAuth();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDE0IiwiZW1haWwiOiJwYXRkZWxwaEBnbWFpbC5jb20iLCJVc2VyVHlwZSI6IkNhbmRpZGF0ZSIsImp0aSI6ImU1ZDE1NTU2LTBjZjctNGE5NC1hNTYwLWY1ODkwNTQ1NjZjNSIsImV4cCI6MTc3MDA2MjUzMiwiaXNzIjoiTGF0dGljZUhSIiwiYXVkIjoiTGF0dGljZUhSVXNlcnMifQ.t9kmZvDAT4vdpboiWK6gvdjW8jg8ceRxpQdc-Q17rM4";
    if (!token) {
      setCheckingAuth(false);
      window.location.replace("http://localhost:5173/one/login");
      return;
    }

    if (user) {
      setCheckingAuth(false);
      return;
    }

    fetchUser(token)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("Unauthorized");
      })
      .then((data) => {
        localStorage.setItem("accessToken", token);
        loadUser(data.user);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("accessToken");
        window.location.replace("https://cleartrustafrica.com/xt/login");
      })
      .finally(() => {
        setCheckingAuth(false);
      });
  }, []);

  if (checkingAuth) {
    return null;
  }

  return <>{children}</>;
};
