import React from "react"
import { Link } from "gatsby"
import { FaAd, FaRegLightbulb, FaTasks } from "react-icons/fa"
import { FaRegFileAlt } from "react-icons/fa"
import "../styles/category_menu.css"

const CategoryMenu = () => {
  return (
    <div className="category-menu-ctn">
      <Link to="/category/advertising" className="category-menu">
        <FaAd className="category-icon" />
        <span>Advertising</span>
      </Link>
      <Link to="/category/case-studies" className="category-menu">
        <FaRegFileAlt className="category-icon" />
        <span>Case Studies</span>
      </Link>
      <Link to="/category/innovation" className="category-menu">
        <FaRegLightbulb className="category-icon" />
        <span>Innovation</span>
      </Link>
      <Link to="/category/management" className="category-menu">
        <FaTasks className="category-icon" />
        <span>Management</span>
      </Link>
    </div>
  )
}

export default CategoryMenu
