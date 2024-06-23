import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, isError, flights } = useSelector(
    (store) => store.flightReducer
  );

  return (
    <header>
      <div>
        <img src="/plane-logo.png" className=" w"></img>
        <h3>Flight Radar</h3>
      </div>

      <p>
        {isLoading
          ? "Flights are being calculated"
          : isError
          ? "An error occured"
          : flights?.length + " Fligths Found"}
      </p>
    </header>
  );
};

export default Header;
