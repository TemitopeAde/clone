import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4, HiOutlineMinus } from "react-icons/hi";

import "./footer.css";

const Footer = () => {
  const date = new Date();
  const [number, setNumber] = useState(3);
  return (
    <div className="px-3 py-5">
      <div className="footer-grid">
        <div>
          <ul>
            <li>Platform</li>
            <li>
              <Link to="/">Fivetran for your org</Link>
            </li>
            <li>
              <Link to="/">Fivetran for your app</Link>
            </li>
            <li>
              <Link to="/">High-volume replication (HVR)</Link>
            </li>
            <li>
              <Link to="/">Transformations</Link>
            </li>
            <li>
              <Link to="/">Security</Link>
            </li>
            <li>
              <Link to="/">Connectors</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Solutions</li>
            <li>
              <Link to="/">Marketing analytics</Link>
            </li>
            <li>
              <Link to="/">Finance</Link>
            </li>
            <li>
              <Link to="/">Data replication</Link>
            </li>
            <li>
              <Link to="/">Sales + customer success</Link>
            </li>
            <li>
              <Link to="/">Case studies</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Resources</li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/">Webinars</Link>
            </li>
            <li>
              <Link to="/">Resource center</Link>
            </li>
            <li>
              <Link to="/">Status</Link>
            </li>
            <li>
              <Link to="/">Support portal</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Company</li>
            <li>
              <Link to="/">About Fivetran</Link>
            </li>
            <li>
              <Link to="/">Culture</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
            <li>
              <Link to="/">Legal</Link>
            </li>
            <li>
              <Link to="/">Privacy policy</Link>
            </li>
            <li>
              <Link to="/">Terms of service</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>From the blog</li>

            <div className={number === 1 ? "active tabs" : "tabs"}>
              <img
                src="https://assets-global.website-files.com/6130fa1501794e37c21867cf/62968eebe60d123426675a7a_220513_NewDataModelForAppReporting_BlogCard_v1_MM-p-500.png"
                alt=""
              />
              <h6 className="fs-5 mt-3">
                Perform Rapid Analysis Of Your App Platform Data
              </h6>
              <Link to="/">Read More</Link>
            </div>

            <div className={number === 2 ? "active tabs" : "tabs"}>
              <img
                src="https://assets-global.website-files.com/6130fa1501794e37c21867cf/61919553dc1f69436eb240bd_6133a18ff052f1f01ad0b36f_blog-_schema-01-p-500.png"
                alt=""
              />

              <h6 className="fs-5 mt-3">
                What Is A Database Schema? Types And Uses In Data Integration
              </h6>
              <Link to="/">Read More</Link>
            </div>

            <div className={number === 3 ? "active tabs" : "tabs"}>
              <img
                src="https://assets-global.website-files.com/6130fa1501794e37c21867cf/628bf2d4ff51fe70cb417afd_MDS%20Cook%20Book_BlogHeaders_2-p-500.png"
                alt=""
              />
              <h6 className="fs-5 mt-3">
                Scalable Data Infrastructure In Under An Hour
              </h6>
              <Link to="/">Read More</Link>
            </div>

            <div className="tabs-icon mb-4">
              <div
                className={number === 1 ? "controls blog" : "controls"}
                onClick={() => setNumber(1)}
              >
                1
              </div>
              <div
                className={number === 2 ? "controls blog" : "controls"}
                onClick={() => setNumber(2)}
              >
                2
              </div>
              <div
                className={number === 3 ? "controls blog" : "controls"}
                onClick={() => setNumber(3)}
              >
                3
              </div>
            </div>

            <li className="icon-wrap" style={{ fontWeight: "bolder" }}>
              Follow us
              <ul className="icons mt-3">
                <Link to="/">
                  <img
                    src="https://assets-global.website-files.com/6130fa1501794ed4d11867ba/6154c013f3705728c286bc1c_social%20(1).svg"
                    alt="icons"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="https://assets-global.website-files.com/6130fa1501794ed4d11867ba/6154c01801eb1d2ff0cc5d69_social%20(2).svg"
                    alt="icons"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="https://assets-global.website-files.com/6130fa1501794ed4d11867ba/6154c01d781bb64883b1876c_social%20(3).svg"
                    alt="icons"
                  />
                </Link>
              </ul>
            </li>
            <li className="date">
              <div>©{date.getFullYear()} Fivetran Inc.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
