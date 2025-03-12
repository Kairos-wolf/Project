import React, { useState } from "react";
import "./Header.css"; // Đảm bảo file CSS được liên kết đúng
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://graphicsfamily.com/wp-content/uploads/edd/2020/10/Free-Eagle-Embroidered-Logo-Mascot.jpg"
          alt="Logo"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Danh mục + Dropdown */}
      <nav
        className="menu-container"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className="menu-button">
          <span className="menu-icon">&#9776;</span> Danh mục
        </button>

        {/* Dropdown Menu */}
        <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
          <ul>
            <li><span>📱</span> Điện thoại</li>
            <li><span>💻</span> Laptop</li>
            <li><span>📺</span> Điện máy</li>
            <li><span>🎧</span> Phụ kiện</li>
            <hr />
            <li><span>🍏</span> Chuyên trang Apple</li>
            <li><span>📱</span> Chuyên trang Samsung</li>
            <li><span>📱</span> Chuyên trang Xiaomi</li>
            <hr />
            <li><span>🛏️</span> Máy giặt, Máy sấy, Tủ sấy</li>
            <li><span>💻</span> Máy tính bảng, Đồng hồ</li>
            <li><span>🤖</span> Robot hút bụi, Máy lọc khí</li>
            <li><span>🚰</span> Máy lọc nước, Máy hút ẩm</li>
            <hr />
            <li>📦 Máy cũ</li>
            <li>📢 Thông tin hay</li>
            <li>💳 Sim thẻ - Thanh toán tiện ích</li>
          </ul>
        </div>
      </nav>

      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
          className="search-input"
        />
        <button className="search-button">&#128269;</button>
      </div>

      {/* Tài khoản & Giỏ hàng */}
      <div className="account-cart">
        <button className="account-button" onClick={() => navigate("/auth")}>&#128100;</button>
        <button className="cart-button">Giỏ hàng</button>
      </div>
    </header>
  );
};

export default Header;
