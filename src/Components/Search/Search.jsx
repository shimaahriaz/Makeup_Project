import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import './Search.css';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 8;


    async function showData() {
        try {
            let result = await axios.get("newProducts.json");
            if (searchQuery) {
              result = result.data.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              );
            } else {
              result = result.data;
            }
            if (result) {
              setData(result);
            }
          } catch (error) {
            console.log(error);
          }
        }
    
      useEffect(() => {
        showData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [searchQuery]);


    function handleSearch(event) {
        console.log(searchQuery);
        setSearchQuery(event.target.value);
      };

    const navigate= useNavigate();
  function goToDetails(id){
    navigate(`/details?id=${id}`)
  };

  const totalItemsCount = data.length;
  const pageRangeDisplayed = 5;
  const totalPageCount = Math.ceil(totalItemsCount / itemsPerPage);

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  }

    return(
        <>
         <div  className='searchPage'>
            <div className='container'>
        <input
                className="form-control me-5 serach"
                type="search"
                placeholder="Search by product name"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              /> 
              <div className= 'row justift-content-center align-items-center'>
             {currentItems && currentItems.length > 0 ? (
        currentItems.map((item) => (
        <div className="col-md-3 mb-3 mt-5"  key={item.id}>
          <div className="card cardHome h-100">
            <div className="box-home-img">
              <img onClick={()=> goToDetails(item.id)}
                src={item.image_link}
                className="card-img-top img-blog img-fluid"
                alt={item.name}
              />
            </div>
            <div className="card-body">
              <h6 className="brandImgHome">
                {item.name}
              </h6>

              <p className="descImg-Home">
                {item.description
                  ? item.description
                  : "Different because of its smooth, comfortable feel."}
              </p>
              <div className=" d-flex justify-content-between align-items-center">
                <div className="priceShop">
                  <h4 className="priceHome">
                    {item.price + "$"}
                  </h4>
                  <p className="circlePrice"></p>
                </div>
               
              </div>
            </div>
          </div>
        </div>

      ))
   
    ) : (
      <p>No products found.</p>
    )}
     </div>
     <Pagination
  activePage={activePage}
  totalItemsCount={totalItemsCount}
  pageRangeDisplayed={pageRangeDisplayed}
  totalPageCount={totalPageCount}
  onChange={handlePageChange}
/>
  </div>
  </div>
  
</>
    );
};


export default Search;