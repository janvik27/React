import React from "react";
import ReactDOM from "react-dom/client";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
        alt="Logo"
      ></img>
      <input type="text" placeholder="Search something"></input>
      <img
        className="user-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="UserIcon"
      ></img>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
