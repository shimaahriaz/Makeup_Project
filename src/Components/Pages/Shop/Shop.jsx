import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from "react";
import Slider from "@mui/material/Slider";
import Pagination from "react-js-pagination";
import { FaShoppingBasket } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import images from '../../../images/images.jpeg';
import "./Shop.css";

const Shop = () => {
  const [showMoreBrand, setShowMoreBrand] = useState(false);
  const [showMoreProductType, setShowMoreProductType] = useState(false);
  const [showMoreCategroy, setShowMoreCategory] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProductTpe, setSelectedProductType] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [currentItems, setCurrentItems] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [range, setRange] = React.useState([3, 60]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  const [brands, setBrands] = useState([
    { id: 1, brand: "covergirl" },
    { id: 2, brand: "cargo cosmetics" },
    { id: 3, brand: "maybelline" },
    { id: 4, brand: "almay" },
    { id: 5, brand: "e.l.f." },
    { id: 6, brand: "physicians formula" },
    { id: 7, brand: "dr. hauschka" },
    { id: 8, brand: "annabelle" },
    { id: 9, brand: "marcelle" },
    { id: 10, brand: "mineral fusion" },
    { id: 11, brand: "stila" },
    { id: 12, brand: "smashbox" },
    { id: 13, brand: "pure anada" },
    { id: 14, brand: "misa" },
    { id: 15, brand: "dior" },
    { id: 16, brand: "china glaze" },
    { id: 17, brand: "nyx" },
  ]);

  const [productTypes, setProductTypes] = useState([
    { lable: "bronzer", id: 1 },
    { lable: "blush", id: 2 },
    { lable: "lipstick", id: 3 },
    { lable: "eyebrow", id: 4 },
    { lable: "eyeliner", id: 5 },
    { lable: "eyeshadow", id: 6 },
    { lable: "foundation", id: 7 },
    { lable: "lip-liner", id: 8 },
    { lable: "mascara", id: 9 },
    { lable: "nail-polish", id: 10 },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: "pencil" },
    { id: 2, name: "cream" },
    { id: 3, name: "liquid" },
    { id: 4, name: "gel" },
    { id: 5, name: "palette" },
    { id: 6, name: "highlighter" },
    { id: 7, name: "powder" },
    { id: 8, name: "mineral" },
    { id: 9, name: "concealer" },
    { id: 10, name: "lip stain" },
    { id: 11, name: "lip gloss" },
    { id: 12, name: "lipstick" },
  ]);

  const handelCheckBoxBrand = (event) => {
    const brand = event.target.value;
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(brand)) {
        return prevSelected.filter((b) => b !== brand);
      } else {
        return [...prevSelected, brand];
      }
    });
  };

  const handelCheckBoxProduct = (event) => {
    const productType = event.target.value;
    setSelectedProductType((prevSelected) => {
      if (prevSelected.includes(productType)) {
        return prevSelected.filter((pt) => pt !== productType);
      } else {
        return [...prevSelected, productType];
      }
    });
  };

  const handelCheckBoxCategory = (event) => {
    const category = event.target.value;
    setSelectedCategory((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((c) => c !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  function clearSelectedBrands() {
    setSelectedBrands([]);
    setSelectedProductType([]);
    setSelectedCategory([]);
    const checkboxes = document.querySelectorAll(".form-check-input");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    console.log(selectedBrands);
  }
  const [brandsToShow, setBrandsToShow] = useState(brands.slice(0, 5));
  const [ProductTypeToShow, setProductTypeToShow] = useState(
    productTypes.slice(0, 5)
  );
  const [categoryToShow, setCategoryToShow] = useState(categories.slice(0, 5));

  const toggleShowMoreBrand = () => {
    setShowMoreBrand(!showMoreBrand);
  };
  const toggleShowMoreProductType = () => {
    setShowMoreProductType(!showMoreProductType);
  };

  const toggleShowMoreCategory = () => {
    setShowMoreCategory(!showMoreCategroy);
  };

  useEffect(() => {
    setBrandsToShow(showMoreBrand ? brands : brands.slice(0, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMoreBrand]);

  useEffect(() => {
    setProductTypeToShow(
      showMoreProductType ? productTypes : productTypes.slice(0, 5)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMoreProductType]);

  useEffect(() => {
    setCategoryToShow(showMoreCategroy ? categories : categories.slice(0, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMoreCategroy]);

  const [data, setData] = useState([]);
  const itemsPerPage = 8;

  async function showData() {
    try {
      let result = await axios.get("newProducts.json");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    showData();
  }, []);


  useEffect(() => {
    const filteredData = data.filter((item) => {
      let isBrandSelected =
        selectedBrands.length === 0 || selectedBrands.includes(item.brand);
      let isProductTypeSelected =
        selectedProductTpe.length === 0 ||
        selectedProductTpe.includes(item.product_type);
      let isCategorySelected =
        selectedCategory.length === 0 ||
        selectedCategory.includes(item.category);
      let isPriceInRange = item.price >= range[0] && item.price <= range[1];
      return (
        isBrandSelected &&
        isCategorySelected &&
        isProductTypeSelected &&
        isPriceInRange
      );
    });

     
  
    // set the total items count and total page count for pagination
    setTotalItemsCount(filteredData.length);
    setTotalPageCount(Math.ceil(filteredData.length / pageRangeDisplayed));

    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(filteredData.slice(startIndex, endIndex));
    console.log(filteredData);
  }, [
    selectedBrands,
    selectedCategory,
    selectedProductTpe,
    range,
    activePage,
    pageRangeDisplayed,
    data,
  ]);

  useEffect(() => {
    setActivePage(1)
  }, [selectedBrands,
    selectedCategory,
    selectedProductTpe,
    range,])

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const navigate= useNavigate();
   function goToDetails(id){
    navigate(`/details?id=${id}`)
   }

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  return (
    <>
      <div className="-shop">
        <h1>Shop Now</h1>
        <div className="circle--shop">
          <span className="brown shop-h1"></span>
          <span className="red shop-h1"></span>
          <span className="green shop-h1"></span>
        </div>
      </div>
      <div className="p-5 mt-lg-5 mt-0">
        <div className="row">
          <div className="col-lg-3">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Brands
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <div className="filter-items xx overflow-y-auto">
                      {data &&
                        Array.from(new Set(data.map((item) => item.brand)))
                          .slice(0, showMoreBrand ? data.length : 2)
                          .map((brand) => (
                            <div key={brand}>
                              {brand && (
                                <>
                                  <input
                                    type="checkbox"
                                    id={brand}
                                    value={brand}
                                    onChange={handelCheckBoxBrand}
                                    checked={selectedBrands.includes(brand)}
                                  />
                                  <label htmlFor={brand} className="ms-1 my-1">
                                    {brand}
                                  </label>
                                </>
                              )}
                            </div>
                          ))}
                      {data &&
                        Array.from(new Set(data.map((item) => item.brand)))
                          .length > 2 && (
                          <div
                            className="show-more"
                            onClick={toggleShowMoreBrand}
                          >
                            {showMoreBrand ? "Show Less" : "Show More.."}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Product Types
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <div className="filter-items xx overflow-y-auto">
                      {data &&
                        Array.from(
                          new Set(data.map((item) => item.product_type))
                        )
                          .slice(0, showMoreProductType ? data.length : 2)
                          .map((productType) => (
                            <div key={productType}>
                              <input
                                type="checkbox"
                                id={productType}
                                value={productType}
                                onChange={handelCheckBoxProduct}
                                checked={selectedProductTpe.includes(
                                  productType
                                )}
                              />
                              <label
                                htmlFor={productType}
                                className="ms-1 my-1"
                              >
                                {productType}
                              </label>
                            </div>
                          ))}
                      {data &&
                        Array.from(
                          new Set(data.map((item) => item.product_type))
                        ).length > 2 && (
                          <div
                            className="show-more"
                            onClick={toggleShowMoreProductType}
                          >
                            {showMoreProductType ? "Show Less" : "Show More.."}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Category
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <div className="filter-items xx overflow-y-auto">
                      {data &&
                        Array.from(new Set(data.map((item) => item.category)))
                          .slice(0, showMoreCategroy ? data.length : 2)
                          .map((categroy) => (
                            <div key={categroy}>
                              {categroy && (
                                <>
                                  <input
                                    type="checkbox"
                                    id={categroy}
                                    defaultValue={categroy}
                                    onChange={handelCheckBoxCategory}
                                    checked={selectedCategory.includes(
                                      categroy
                                    )}
                                  />
                                  <label
                                    htmlFor={categroy}
                                    className="ms-1 my-1"
                                  >
                                    {categroy}
                                  </label>
                                </>
                              )}
                            </div>
                          ))}
                      {data &&
                        Array.from(new Set(data.map((item) => item.category)))
                          .length > 2 && (
                          <div
                            className="show-more"
                            onClick={toggleShowMoreCategory}
                          >
                            {showMoreCategroy ? "Show Less" : "Show More.."}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-price mb-5">
              <h3> Select Price </h3>
              <Slider
                value={range}
                min={3}
                max={60}
                onChange={handleChanges}
                className="min-maxPrice"
              />
              Min Price:{range[0]}$ - Max Price:{range[1]}$
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-3 g-4  align-items-center justify-content-center">
              {currentItems.map((item, index) => (
                <div className="col-md-3" key={item.id}>
                  <div className="card cardHome h-100">
                    <div className="box-home-img">
                      <span className="heart_home">
                        <AiTwotoneHeart className=" fs-4" />
                      </span>
                      <img
                        onClick={() => goToDetails(item.id)}
                        src={item.image_link}
                        className="card-img-top img-blog img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="brandImgHome">
                        {item.category}
                      </h6>

                      <p className="descImg-Home">
                        {item.description
                          ? item.description
                          : "Different because of its smooth, comfortable feel."}
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <div className="priceShop">
                          <h4 className="priceHome">{item.price + "$"}</h4>
                          <p className="circlePrice"></p>
                        </div>
                        <span className="icon-shopHome" onClick={()=> goToDetails(item.id)}>
                          <FaShoppingBasket className=" fs-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {currentItems.length > 0 ? (
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={pageRangeDisplayed}
                onChange={handlePageChange}
              />
            ) : (
              <p className="not-found">OOPS..<b>Not Found</b></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
