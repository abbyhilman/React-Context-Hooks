import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ position: "absolute", top: 30, marginLeft: 5 }}>
      <Toggle
        icons={{
          checked: <BsSun />,
          unchecked: <BsMoon />,
        }}
        onChange={toggleTheme}
        className="custom-classname"
      />
    </div>
  );
};

export default ThemeToggle;
