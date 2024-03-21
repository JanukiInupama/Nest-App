import React from "react";
import { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = ({ setsearchTerm }) => {

  const [filters, setFilters] = useState({
    type: "",
    priceRange: "",
    bedrooms: "",
    dateAdded: "",
    postcodeArea: "",
  });

  const handleChange = (event, fieldName) => {
    setFilters({ ...filters, [fieldName]: event.target.value });
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />

          <form className="flex">
            <div className="box">
              <span>Property Type</span>
              <input
                type="text"
                placeholder="Property Type"
                name="type"
                value={filters.type}
                onChange={(event) => handleChange(event, "type")}
              />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input 
              type="text" 
              placeholder="Price Range" 
              name="priceRange"
              value={filters.priceRange}
                onChange={(event) => handleChange(event, "priceRange")}
              />
            </div>
            <div className="box">
              <span>Bedrooms</span>
              <input 
              type="text" 
              placeholder="Bedrooms"
              name="bedrooms"
              value={filters.bedrooms}
              onChange={(event) => handleChange(event, "bedrooms")}
               />
            </div>
            <div className="box">
              <span>Date added</span>
              <input 
              type="text" 
              placeholder="Date added"
              name="dateAdded"
              value={filters.dateAdded}
              onChange={(event) => handleChange(event, "dateAdded")}
               />
            </div>
            <div className="box">
              <span>Postcode Area</span>
              <input 
              type="text" 
              placeholder="Postcode Area"
              name="postcodeArea"
              value={filters.postcodeArea}
              onChange={(event) => handleChange(event, "postcodeArea")}
               />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <Link to={{ pathname: "/search", state: { filters } }}>
              <button
                className="btn1"
                onClick={() => {
                  setsearchTerm(filters);
                }}
              >
                <i className="fa fa-search"></i>
              </button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
