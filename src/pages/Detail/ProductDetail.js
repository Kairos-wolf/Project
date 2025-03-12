import React from "react";

const ProductDetail = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/path-to-image.jpg"
            alt="Laptop Lenovo Legion 5"
            className="w-full rounded-lg"
          />
          <div className="flex gap-2 mt-2">
            <img src="/thumbnail1.jpg" alt="Thumbnail 1" className="w-16 h-16 rounded-lg" />
            <img src="/thumbnail2.jpg" alt="Thumbnail 2" className="w-16 h-16 rounded-lg" />
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold">
            Laptop gaming Lenovo Legion 5 16IRX9 - 83DG004XVN
          </h1>
          <p className="text-gray-600">(i7-13650HX/RAM 16GB/GeForce RTX 4060/512GB SSD/Windows 11)</p>
          <p className="text-red-500 text-2xl font-semibold mt-2">39.490.000đ</p>
          <p className="text-gray-400 line-through">42.990.000đ</p>

          <div className="mt-4">
            <h3 className="font-semibold">Cấu hình:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>CPU: Intel Core i7-13650HX (14C/20T, up to 4.9GHz, 24MB)</li>
              <li>VGA: RTX 4060 8GB GDDR6</li>
              <li>RAM: 16GB DDR5-4800 (tối đa 64GB)</li>
              <li>Ổ cứng: 512GB M.2 NVMe</li>
              <li>Màn hình: 16" WQXGA (2560x1600) IPS, 350nits, 165Hz, 100% sRGB</li>
            </ul>
          </div>
          
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Liên hệ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
