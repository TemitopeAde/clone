import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../Data/data";
import { AnimatePresence, motion } from "framer-motion";

import "./card.css";

const Card = () => {
  const [data] = useState(siteData);
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState("");
  const [type, setType] = useState("");

  console.log(drop);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDrop = (e) => {
    setDrop(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const filtered = () => {
    if (search) {
      return data.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (drop) {
      return data.filter((items) =>
        items.tag.toLowerCase().includes(drop.toLocaleLowerCase())
      );
    }

    if (type) {
      return data.filter((items) =>
        items.type.toLowerCase().includes(type.toLocaleLowerCase())
      );
    }

    return data;
  };

  return (
    <div>
      <div>
        <div className="form p-3 mb-5">
          <form>
            <div className="form-grid">
              <select
                name="search"
                value={drop}
                className="form-control"
                onChange={handleDrop}
              >
                <option value="">ALL</option>
                <option value="new">RECENTLY ADDED</option>
                <option>SOON</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Search 160+ Data Source Connectors"
                onChange={handleSearch}
                name="search"
                value={search}
              />
              <select
                value={type}
                onChange={handleType}
                name="type"
                className="form-control form-select-lg"
              >
                <option value="">ALL</option>
                <option>APPLICATION</option>
                <option>FILE</option>
                <option>DATABASE</option>
                <option>EVENT</option>
              </select>
            </div>
          </form>
        </div>
        <div className="title d-flex align-items-center justify-content-center mt-4 mb-5 text-center">
          <div>
            <h6 className="fs-5">DATA SOURCE CONNECTOR DIRECTORY</h6>
            <h3 className="fs-1">Connectors for every data source.</h3>
          </div>
        </div>
       
        <div className="mt-3">
          <motion.div layout className="card-grid">
            <AnimatePresence>
              {filtered().length !== 0 ? (
                filtered().map((item, index) => {
                  const { name, image, type, tag } = item;
                  return (
                    <div className="card p-4" key={index}>
                      <Link to="/">
                        <img
                          className="p-3"
                          src={
                            image ||
                            "https://www.citypng.com/public/uploads/preview/download-white-circle-png-31629716484axd08oupl9.png"
                          }
                          alt="tag"
                        />
                      </Link>

                      <div className="link-column">
                        <Link style={{ textTransform: "uppercase" }} to="/">
                          {type}
                        </Link>
                        <Link to="/">{name}</Link>
                      </div>

                      {tag.length !== 0 ? (
                        <div className="tags">
                          {tag === "new" ? (
                            <Link to="/" style={{ background: "#0d6efd" }}>
                              {tag}
                            </Link>
                          ) : (
                            <Link to="/" style={{ background: "#000" }}>
                              {tag}
                            </Link>
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center">Not found</div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
