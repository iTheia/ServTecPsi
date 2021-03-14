import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { IUser } from "../../../constants";

export interface IAuthContext {
  currentUser: IUser | false;
  getToken: () => string;
  googleLogin: (
    values: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  closeSession: () => void;
}
