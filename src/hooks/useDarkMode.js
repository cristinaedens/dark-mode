import React, { useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (value) => {
  const [someValue, setSomeValue] = useLocalStorage("dark", value);
  useEffect(() => {
    if (someValue) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    } //this closes else statement
  }, [someValue]); //this closes useEffect

  return [someValue, setSomeValue]
} //this closes export Darkmode
 
