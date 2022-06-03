import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const date = new Date();
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
            <li>
              <p>
                Scalable data infrastructure in under an hour Scalable Data
                Infrastructure In Under An Hour
              </p>
              <Link className="read" to="/">
                Read more
              </Link>
            </li>
            <li>
              <p>
                Scalable data infrastructure in under an hour Scalable Data
                Infrastructure In Under An Hour
              </p>
              <Link className="read" to="/">
                Read more
              </Link>
            </li>
            <li>
              <p>
                Scalable data infrastructure in under an hour Scalable Data
                Infrastructure In Under An Hour
              </p>
              <Link className="read" to="/">
                Read more
              </Link>
            </li>
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
