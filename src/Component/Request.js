import React from "react";
import { Link } from "react-router-dom";

import "./request.css";

const Request = () => {
  return (
    <div className="mt-5 mb-5 request-section py-5 px-3">
      <div className="request-grid">
        <div className="request">
          <img
            src="https://assets-global.website-files.com/6130fa1501794ed4d11867ba/616084c026a68aa0c4373f05_request.svg"
            alt=""
          />
          <h3>Request a Connector</h3>
          <p>
            Please request new data sources through our Feature Request Portal
          </p>
          <Link to="/">Feature Request Portal</Link>
        </div>
        <div className="request">
          <img
            src="https://assets-global.website-files.com/6130fa1501794ed4d11867ba/616084c3195d5b234fc2c7f0_blog.svg"
            alt=""
          />
          <h3>View Articles from our Blog</h3>
          <p>Check out our latest blog entry</p>
          <Link to="/">See Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Request;
