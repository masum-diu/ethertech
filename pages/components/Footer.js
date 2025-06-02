import React from "react";

function Footer() {
  return (
    <div>
      <footer className=" mx-auto  w-[90%] py-10">
        <div className="logo">
          <img
            src="/images/Logo.png"
            alt="Logo"
            style={{ width: "100%", maxWidth: "131px" }}
          />
        </div>
        {/* This is the main div container with all the contents*/}
        <div className="footer-items flex justify-between">
          <div className="Text-contents mt-20">
            {/* Column 1 for*/}
            <div className="space-y-3">
              <p className="font-bold" style={{ fontSize: "16px" }}>
                Technology Partner For Modern Product Teams
              </p>

              <p className="font-normal" style={{ fontSize: "14px" }}>
                Ether Technology Limited has established a reputation for
                <br></br>
                dependability and credibility both domestically and abroad
                <br></br>
                by providing a range of software solutions under one roof.
              </p>
            </div>

            <div className="space-y-2 mt-6">
              <p className="font-bold" style={{ fontSize: "16px" }}>
                Address:
              </p>

              <p className="font-normal" style={{ fontSize: "14px" }}>
                House 10/A, Road 4, Gulshan 1, Dhaka, Bangladesh
              </p>
            </div>

            <div className="space-y-2 mt-5">
              <p className="font-bold" style={{ fontSize: "16px" }}>
                Phone:
              </p>

              <p className="font-normal" style={{ fontSize: "14px" }}>
                +880 1326-880983
              </p>
            </div>

            <div className="space-y-2 mt-5">
              <p className="font-bold" style={{ fontSize: "16px" }}>
                Email:
              </p>

              <p className="font-normal" style={{ fontSize: "14px" }}>
                info@ethertech.ltd
              </p>
            </div>
          </div>

          {/*Column2 for service */}

          <div>
            <p className="font-semibold mt-5" style={{ fontSize: "30px" }}>
              Services
            </p>
            {/* Service Item 1 */}
            <p
              className="font-bold mt-5"
              style={{ fontSize: "14px", color: "#1E1D28" }}
            >
              Engineering
            </p>

            <div
              className="font-normal services-1"
              style={{ fontSize: "14px" }}
            >
              <p className="mt-1">PoC development</p>
              <p className="mt-1">Application development</p>
              <p className="mt-1">Product-oriented delivery</p>
              <p className="mt-1">Enterprise applications</p>
              <p className="mt-1">Application re‑engineering</p>
              <p className="mt-1">Cloud migration</p>
            </div>

            {/* Service Item 2 */}

            <p
              className="font-bold mt-5"
              style={{ fontSize: "14px", color: "#1E1D28" }}
            >
              Advisory
            </p>

            <div
              className="font-normal services-2"
              style={{ fontSize: "14px" }}
            >
              <p className="mt-1">Product and service design</p>
              <p className="mt-1">Cyber security</p>
              <p className="mt-1">Technical feasibility study</p>
              <p className="mt-1">Sustainability consulting</p>
              <p className="mt-1">Agile transformation</p>
            </div>
          </div>

          {/*column 3*/}

          <div>
            <p
              className="font-bold mt-[95px]"
              style={{ fontSize: "14px", color: "#1E1D28" }}
            >
              Data & AI
            </p>

            <div className="font-normal " style={{ fontSize: "14px" }}>
              <p className="mt-1">Data science</p>
              <p className="mt-1">Data strategy</p>
              <p className="mt-1">Artificial intelligence</p>
              <p className="mt-1">Generative AI</p>
              <p className="mt-1">Machine learning</p>
              <p className="mt-1">Conversational AI</p>
              <p className="mt-1">Intelligent automation</p>
              <p className="mt-1">MLOps</p>
              <p className="mt-1">Business intelligence</p>
              <p className="mt-1">Data platforms</p>
            </div>
          </div>
          {/*column 4*/}

          <div>
            <p className="font-semibold mt-5" style={{ fontSize: "30px" }}>
              Expertise
            </p>

            <div className="font-normal mt-5" style={{ fontSize: "14px" }}>
              <p className="mt-1">DevOps</p>
              <p className="mt-1">VR/AR/MR</p>
              <p className="mt-1">Internet of Things</p>
              <p className="mt-1">Market research</p>
              <p className="mt-1">Customer experience</p>
              <p className="mt-1">Digital enterprise</p>
              <p className="mt-1">Nearshore development</p>
              <p className="mt-1">UX consulting</p>
              <p className="mt-1">Software development</p>
            </div>
          </div>
          {/*column 5*/}
          <div>
            <p className="font-semibold mt-5" style={{ fontSize: "30px" }}>
              Industries
            </p>

            <div className="font-normal mt-5" style={{ fontSize: "14px" }}>
              <p className="mt-1">Fintech</p>
              <p className="mt-1">Healthcare</p>
              <p className="mt-1">Energy</p>
              <p className="mt-1">Government</p>
              <p className="mt-1">Retail</p>
              <p className="mt-1">Logistics</p>
              <p className="mt-1">Automotive</p>
              <p className="mt-1">Agriculture</p>
              <p className="mt-1">Media & Entertainment</p>
            </div>
          </div>
          {/*column 6*/}
          <div>
            <p className="font-semibold mt-5" style={{ fontSize: "30px" }}>
              Company
            </p>

            <div className="font-normal mt-5" style={{ fontSize: "14px" }}>
              <p className="mt-1">About us</p>
              <p className="mt-1">Services</p>
              <p className="mt-1">How we work</p>
              <p className="mt-1">Awards and partners</p>
              <p className="mt-1">Our clients</p>
              <p className="mt-1">Case studies</p>
              <p className="mt-1">Blog</p>
              <p className="mt-1">Careers</p>
              <p className="mt-1">Contact us</p>
            </div>
          </div>
        </div>

        {/* terms and condition section */}
        <div className="terms-condition flex flex-wrap justify-between items-center gap-4 mt-28">
          {/* Social Links */}
          <div className="flex space-x-3 w-10 rounded-full">
            <img src="/images/facebook.png" alt="facebook" />
            <img src="/images/twitter.png" alt="twitter" />
            <img src="/images/linkedin.png" alt="linkedin" />
          </div>

          {/* Policy Links */}
          <div className="flex space-x-4" style={{ fontSize: "14px" }}>
            <p>Terms of Use</p>
            <p>Privacy policy</p>
            <p>Site Map</p>
          </div>

          {/* Logos */}
          <div className="flex space-x-4 items-center">
            <img
              src="/images/firstlogo.png"
              alt="firstlogo"
              className="w-[60px]"
            />
            <img
              src="/images/secondlogo.png"
              alt="secondlogo"
              className="w-[60px]"
            />
            <img
              src="/images/thirdlogo.png"
              alt="thirdlogo"
              className="w-[171px]"
            />
          </div>

          {/* Copyright */}
          <div className="copy" style={{ fontSize: "14px" }}>
            <p>© 2025 Ether Technologies Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
