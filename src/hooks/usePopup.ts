
import { useContext } from "react";
import { PopUpContext } from "../contexts/PopUpProvider";


export const usePopup = () => useContext(PopUpContext);