import React from "react"
import { Link } from "gatsby"
import { FaAd, FaCar, FaCarAlt, FaRegLightbulb, FaSearch, FaTasks } from "react-icons/fa"
import { MdGarage } from "react-icons/md"
import "../styles/category_menu.css"

const CategoryMenu = () => {
  return (
    <div className="category-menu-ctn">
      <Link to="/category/car-reviews" className="category-menu">
        <FaAd className="category-icon" />
        <span>Car Reviews</span>
      </Link>
      <Link to="/category/maintenance-and-tips" className="category-menu">
        <MdGarage className="category-icon" />
        <span>Maintenance & Tips</span>
      </Link>
      <Link to="/category/buying-guide" className="category-menu">
        <FaSearch className="category-icon" />
        <span>Buying Guide</span>
      </Link>
      <Link to="/category/car-comparison" className="category-menu">
        <div className="d-flex justify-content-center">
        <FaCar className="category-icon cars" />
        <FaCarAlt className="category-icon cars-alt" />
        </div>
        
        <span>Car Comparison</span>
      </Link>
    </div>
  )
}

export default CategoryMenu
