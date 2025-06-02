import React from "react";

function Header() {
  return (
    <div>
      <header className="container Nav-items flex justify-between items-center h-[100px] ">
        <div className="logo">
          <img
            src="/images/Logo.png"
            alt="Logo"
            style={{ width: "100%", maxWidth: "164px" }}
          />
        </div>

        <div className="space-x-6 text-[15px] font-semibold">
          <a href="">Services</a>
          <a href="">Industries</a>
          <a href="">Clients</a>
          <a href="">About us</a>
          <a href="">Blog</a>
        </div>

        <div className="space-x-2">
          <button>
            <img
              src="/images/Language.png"
              alt="Language"
              style={{ width: "100%", maxWidth: "72px" }}
            />
          </button>
          <button>
            <img
              src="/images/Contact.png"
              alt="Contact"
              style={{ width: "100%", maxWidth: "143px" }}
            />
          </button>
          <button>
            <img
              src="/images/Search.png"
              alt="Contact"
              style={{ width: "100%", maxWidth: "72px" }}
            />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
