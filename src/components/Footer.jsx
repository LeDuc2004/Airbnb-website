import React from 'react'
function Footer() {
    return ( 
        <footer >
  <div className="ul-li">
    <ul>
      <li className="sun-ul">© 2023 Airbnb, Inc</li>
      <li className="sun-ul">Quyền riêng tư</li>
      <li className="sun-ul">Điều khoản</li>
      <li className="sun-ul">Sơ đồ trang web</li>
    </ul>
  </div>
  <div className="side-right">
    <ul>
      <li className="sun-side">
        <i className="fa-solid fa-globe" />
        Tiếng Việt (VN)
      </li>
      <li className="sun-side">$ USA</li>
      <li className="sun-side">Hỗ trợ và tài nguyên</li>
    </ul>
  </div>
</footer>

     );
}

export default Footer;