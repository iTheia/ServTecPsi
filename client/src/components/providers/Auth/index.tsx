import axios, { AxiosResponse } from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import JwtDecode from "jwt-decode";
import { ENDPOINT, IUser } from "../../../constants";
import { AppContext } from "../App";
import { IAuthContext } from "./types";
export const AuthContext = createContext<IAuthContext>({
  closeSession: () => {},
  currentUser: false,
  getToken: () => "",
  googleLogin: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const { setIsLoading } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState<IUser | false>(false);
  const [token, setToken] = useState("");

  const setSession = useCallback(
    function (response: AxiosResponse<any>) {
      try {
        const { data } = response;
        if (data.error) {
          throw new Error(data.error.message);
        }
        const decoded = JwtDecode(data.accessToken) as IUser;
        setCurrentUser((prev) => ({ ...prev, ...decoded }));
        setToken(data.accessToken);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    },
    [setIsLoading]
  );
  useEffect(() => {
    setIsLoading(true);
    let cancel: any;
    const cancelToken = new axios.CancelToken((c: any) => (cancel = c));
    axios
      .get(`${ENDPOINT}/api/v1/auth/current`, {
        cancelToken,
        withCredentials: true,
      })
      .then((response) => {
        const { data } = response;
        const decoded = JwtDecode(data.accessToken) as IUser;
        setCurrentUser((prev) => ({ ...prev, ...decoded }));
        setToken(data.accessToken);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    return () => cancel();
  }, [setIsLoading]);

  function closeSession() {
    axios
      .get(`${ENDPOINT}/api/v1/auth/close`)
      .then((response) => setSession(response));
  }

  function googleLogin(data: any) {
    axios
      .post(
        `${ENDPOINT}/api/v1/auth/google/login`,
        { tokenId: data.tokenId },
        { withCredentials: true }
      )
      .then((response) => setSession(response));
  }

  function getToken() {
    try {
      const { exp } = JwtDecode(token) as any;
      if (exp < Date.now().valueOf() / 1000) {
        axios
          .get(`${ENDPOINT}/api/v1/auth/refresh`)
          .then((response) => setSession(response))
          .catch(() => {
            setToken("");
            setCurrentUser(false);
          });
      }
      return `Bearer ${token}`;
    } catch (error) {
      return "";
    }
  }

  return (
    <AuthContext.Provider
      value={{ getToken, currentUser, closeSession, googleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
