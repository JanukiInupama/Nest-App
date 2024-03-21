import {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import  { list }  from "../data/Data"
import Hero from '../home/hero/Hero';



const JSONDATA = list;
function Search() {
  const [searchTerm,setsearchTerm] =useState('');
  const location = useLocation();  // Use the useLocation hook 
  const [filterValues, setFilterValues] = useState({
    type: '',
    priceRange: '',
    bedrooms: '',
    dateAdded: '',
    postcodeArea: '',
  });


  useEffect(() => {
    if (location.state && location.state.filters) {
      const { type, priceRange, bedrooms, dateAdded, postcodeArea, } = location.state.filters;

      // Update the state with filter values
      setFilterValues({
        type,
        priceRange,
        bedrooms,
        dateAdded,
        postcodeArea,
      });


    }
  }, [location.state]);

  return (
    <div className="Search">
      <Hero setsearchTerm={setsearchTerm} />
      <div className='content grid3 mtop' >

        {JSONDATA.filter((val)=>{
          // val.type.toLowerCase().includes(filterValues.type.toLowerCase())
          // val.bedrooms == parseInt(filterValues.bedrooms) 
          // val.location.toLowerCase().includes(filterValues.location.toLowerCase())
          // val.added.year >= (parseInt(filterValues.dateAdded))

          if(val.type.toLowerCase().includes(filterValues.type.toLowerCase()) ||  val.bedrooms == parseInt(filterValues.bedrooms) && val.location.toLowerCase().includes(filterValues.postcodeArea.toLowerCase())){
            return val
          }
        }).map((val, key) => {
          return (
            // <div className="user" key={key}>
            
              <div className='box shadow' key={key}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='category flex'>
                    <span style={{ background: val.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: val.category === "For Sale" ? "#25b579" : "#ff9800" }}>{val.category}</span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{val.name}</h4>
                  <p>
                    <i className='fa fa-location-dot'></i> {val.location}
                  </p>
                </div>
                <div className='button flex'>
                  <div>
                    <button className='btn2'>{val.price}</button> 
                  </div>
                  <span>{val.type}</span>
                  <a href= {val.url}>
                  <button className="btn3" >View</button>
                  </a>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;