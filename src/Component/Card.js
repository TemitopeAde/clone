import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../Data/data";
import { AnimatePresence, motion } from "framer-motion";

import "./card.css";


const Card = () => {
  const [data] = useState(siteData);
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState("");
  const [type, setType] = useState("");

  const [filterItems, setFilterItems] = useState(siteData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDrop = (e) => {
    setDrop(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };


 useEffect(() => {
   const filtered = data.filter((item)=>drop ? item.tag.toLowerCase() === drop.toLowerCase() : item)
   .filter((item)=> search ? item.name.toLowerCase().includes(search.toLowerCase()) : item)
   .filter((item)=>type ? item.type.toLowerCase() === type.toLowerCase() : item)
    setFilterItems(filtered);
  }, [drop, search, type]);

 

  useEffect(() => {
    setFilterItems(data);
  }, []);

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
          <div 
           
            
          
          >
            <div  className="card-grid">
              {filterItems.length !== 0 ? (
                filterItems.map((item, index) => {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
