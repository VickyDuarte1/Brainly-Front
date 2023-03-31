import React from "react";
import LandingPage from "./LandingPage/LandingPage";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");

    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <LandingPage />
      </div>
    </>
  );
}
