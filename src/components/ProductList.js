import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./ProductList.css";

const products = [
  { id: 1, brand: "LENOVO", name: "Laptop gaming Lenovo LOQ 15IAX9", specs: "i5-12450HX/ RAM 12GB/ GeForce RTX 3050/ 512GB SSD", price: "20.990.000 đ", oldPrice: "24.490.000 đ", discount: "3.500.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/326861/msi-gf63-thin-12ve-i5-460vn-thumb-638754869517722845-600x600.jpg" },
  { id: 2, brand: "ACER", name: "Laptop ACER Gaming Aspire 7", specs: "i5-12450H/ RAM 8GB/ GeForce RTX 2050/ 512GB SSD", price: "15.990.000 đ", oldPrice: "21.490.000 đ", discount: "5.500.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327051/lenovo-loq-15arp9-r7-83jc0040vn-thumb-638754871081388996-600x600.jpg" },
  { id: 3, brand: "HP", name: "Laptop HP 15s-fq5228TU", specs: "i3-1215U/ 8GB/ 512GB/ Windows 11", price: "9.990.000 đ", oldPrice: "11.990.000 đ", discount: "2.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327051/lenovo-loq-15arp9-r7-83jc0040vn-thumb-638754871081388996-600x600.jpg" },
  { id: 4, brand: "DELL", name: "Laptop Dell Latitude 3440", specs: "i5-1235U/ 16GB/ 512GB/ Windows 11", price: "16.990.000 đ", oldPrice: "18.990.000 đ", discount: "2.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/326861/msi-gf63-thin-12ve-i5-460vn-thumb-638754869517722845-600x600.jpg" },
  { id: 5, brand: "EPSON", name: "Máy in Epson L3210", specs: "", price: "3.390.000 đ", oldPrice: "3.990.000 đ", discount: "600.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327051/lenovo-loq-15arp9-r7-83jc0040vn-thumb-638754871081388996-600x600.jpg" },
  { id: 6, brand: "APPLE", name: "MacBook Air M2 2023", specs: "M2/ 8GB/ 512GB SSD", price: "29.990.000 đ", oldPrice: "32.990.000 đ", discount: "3.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/322634/macbook-air-13-inch-m3-2024-16gb-512gb-170225-105257-580-600x600.jpg" },
  { id: 7, brand: "MSI", name: "Laptop MSI GF63 Thin 11SC", specs: "i5-11400H/ GTX 1650/ 8GB/ 512GB SSD", price: "18.490.000 đ", oldPrice: "20.990.000 đ", discount: "2.500.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/322634/macbook-air-13-inch-m3-2024-16gb-512gb-170225-105257-580-600x600.jpg" },
  { id: 8, brand: "ASUS", name: "Laptop ASUS TUF Gaming F15", specs: "i7-12700H/ RTX 3060/ 16GB/ 1TB SSD", price: "25.990.000 đ", oldPrice: "28.990.000 đ", discount: "3.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/322634/macbook-air-13-inch-m3-2024-16gb-512gb-170225-105257-580-600x600.jpg" },
  { id: 9, brand: "EPSON", name: "Máy in Epson L3210", specs: "", price: "3.390.000 đ", oldPrice: "3.990.000 đ", discount: "600.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/326861/msi-gf63-thin-12ve-i5-460vn-thumb-638754869517722845-600x600.jpg" },
  { id: 10, brand: "HP", name: "Laptop HP Envy 13", specs: "i7-1250U/ 16GB/ 512GB SSD", price: "22.990.000 đ", oldPrice: "24.990.000 đ", discount: "2.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/322634/macbook-air-13-inch-m3-2024-16gb-512gb-170225-105257-580-600x600.jpg" },
  { id: 11, brand: "LENOVO", name: "Laptop gaming Lenovo LOQ 15IAX9", specs: "i5-12450HX/ RAM 12GB/ GeForce RTX 3050/ 512GB SSD", price: "20.990.000 đ", oldPrice: "24.490.000 đ", discount: "3.500.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/326861/msi-gf63-thin-12ve-i5-460vn-thumb-638754869517722845-600x600.jpg" },
  { id: 12, brand: "ACER", name: "Laptop ACER Gaming Aspire 7", specs: "i5-12450H/ RAM 8GB/ GeForce RTX 2050/ 512GB SSD", price: "15.990.000 đ", oldPrice: "21.490.000 đ", discount: "5.500.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328814/hp-240-g9-i5-ag2j7at-170225-112744-210-600x600.jpg" },
  { id: 13, brand: "HP", name: "Laptop HP 15s-fq5228TU", specs: "i3-1215U/ 8GB/ 512GB/ Windows 11", price: "9.990.000 đ", oldPrice: "11.990.000 đ", discount: "2.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327051/lenovo-loq-15arp9-r7-83jc0040vn-thumb-638754871081388996-600x600.jpg" },
  { id: 14, brand: "DELL", name: "Laptop Dell Latitude 3440", specs: "i5-1235U/ 16GB/ 512GB/ Windows 11", price: "16.990.000 đ", oldPrice: "18.990.000 đ", discount: "2.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328814/hp-240-g9-i5-ag2j7at-170225-112744-210-600x600.jpg" },
  { id: 15, brand: "EPSON", name: "Máy in Epson L3210", specs: "", price: "3.390.000 đ", oldPrice: "3.990.000 đ", discount: "600.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/328814/hp-240-g9-i5-ag2j7at-170225-112744-210-600x600.jpg" },
  { id: 16, brand: "APPLE", name: "MacBook Air M2 2023", specs: "M2/ 8GB/ 512GB SSD", price: "29.990.000 đ", oldPrice: "32.990.000 đ", discount: "3.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333424/acer-aspire-16-ai-a16-71m-59l5-ultra-5-nxj4ysv001-thumb-638707339254153390-600x600.jpg" },
  { id: 17, brand: "MSI", name: "Laptop MSI GF63 Thin 11SC", specs: "i5-11400H/ GTX 1650/ 8GB/ 512GB SSD", price: "18.490.000 đ", oldPrice: "20.990.000 đ", discount: "2.500.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333424/acer-aspire-16-ai-a16-71m-59l5-ultra-5-nxj4ysv001-thumb-638707339254153390-600x600.jpg" },
  { id: 18, brand: "ASUS", name: "Laptop ASUS TUF Gaming F15", specs: "i7-12700H/ RTX 3060/ 16GB/ 1TB SSD", price: "25.990.000 đ", oldPrice: "28.990.000 đ", discount: "3.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333427/acer-nitro-v-15-anv15-41-r1jy-r5-nhqpfsv001-thumb-638760100059925740-600x600.jpg" },
  { id: 19, brand: "EPSON", name: "Máy in Epson L3210", specs: "", price: "3.390.000 đ", oldPrice: "3.990.000 đ", discount: "600.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333427/acer-nitro-v-15-anv15-41-r1jy-r5-nhqpfsv001-thumb-638760100059925740-600x600.jpg" },
  { id: 20, brand: "HP", name: "Laptop HP Envy 13", specs: "i7-1250U/ 16GB/ 512GB SSD", price: "22.990.000 đ", oldPrice: "24.990.000 đ", discount: "2.000.000 đ", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333427/acer-nitro-v-15-anv15-41-r1jy-r5-nhqpfsv001-thumb-638760100059925740-600x600.jpg" }

];

const itemsPerPage = 10;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="product-section">
      <h2>SẢN PHẨM NỔI BẬT</h2>
      <div className="product-container">
        {currentItems.map((product) => (
          <div key={product.id} className="product-card">
            <a href="#" target="_parent" rel="noopener noreferrer">
              <img src={product.image} alt={product.name} />
            </a>
            <span className="product-discount">TIẾT KIỆM {product.discount}</span>
            <div className="product-info">
              <h3 className="product-brand">{product.brand}</h3>
              <p className="product-name">{product.name}</p>
              <p className="product-specs">{product.specs}</p>
              <p className="product-price">{product.price}</p>
              <p className="product-old-price">{product.oldPrice}</p>
            </div>
            <button className="add-to-cart">Thêm vào giỏ</button>
          </div>
        ))}
      </div>

      {/* Phân trang đặt ngoài sản phẩm */}
      <div className="pagination-container">
        <ReactPaginate
          previousLabel="«"
          nextLabel="»"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
        />
      </div>
    </div>
  );
};

export default ProductList;
