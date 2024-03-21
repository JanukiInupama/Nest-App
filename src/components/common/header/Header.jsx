import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [myList, setMyList] = useState([]);

  const addToMyList = (item) => {
    if (!myList.includes(item)) {
      setMyList((prevList) => [...prevList, item]);
    }
  };

  const removeFromMyList = (index) => {
    setMyList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>{myList.length}</span> My List
            </h4>
            <ul className='my-list'>
              {myList.map((item, index) => (
                <li key={index}>
                  {item.name}{" "}
                  <button onClick={() => removeFromMyList(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>

          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
