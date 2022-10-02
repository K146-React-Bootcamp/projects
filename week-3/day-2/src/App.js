import React, { useEffect } from "react";
import ToastLoading from "./components/toast-loading";
import HomePage from "./pages/home";

export default function App() {
  
  return (
    <React.Fragment>
      <HomePage />
      <ToastLoading />
    </React.Fragment>
  )
}