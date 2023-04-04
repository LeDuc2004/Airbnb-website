import React from "react";
import { useState } from "react";
function Slide({fnhandleApi}) {
  
 const [runslide, setRunslide] = useState(0);
  const [imgscal, setImgscal] = useState(0);

  function handleslide(e) {
    setImgscal(e);
    fnhandleApi(e)
  }
  function handleRunslide() {
    setRunslide(0);
  }
  function handleLuislide() {
    setRunslide(500);
  }
  return (
    <div className="slide-show">
      <div
        onClick={() => {
          handleRunslide();
        }}
        style={runslide === 500 ? { opacity: 1 } : { opacity: 0 }}
        className="blur1"
      >
        <div className="btn-first">
          <i className="fa-solid fa-angle-left" />
        </div>
      </div>

      <div
        onClick={() => {
          handleLuislide();
        }}
        style={runslide === 500 ? { opacity: 0 } : { opacity: 1 }}
        className="blur2"
      >
        <div className="btn-last">
          <i className="fa-solid fa-angle-right" />
        </div>
      </div>

      <div className="bo-loc">
        <div className="wrap-boloc">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              height: 14,
              width: 14,
              fill: "currentColor",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <div>bộ lọc</div>
        </div>
      </div>
      <div id="run-slide" style={{ transform: `translateX(-${runslide}px)` }}>
        <div key={0} onClick={() => handleslide(0)} className="sun-slide dau">
          <img
            style={
              imgscal === 0
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(11)}
            style={
              imgscal === 0
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Khung cảnh tuyệt vời
          </span>
        </div>
        <div key={1} className="sun-slide">
          <img
            style={
              imgscal === 1
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            onClick={() => handleslide(1)}
            src="./img/imgSlide//10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(1)}
            style={
              imgscal === 1
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Bãi biển
          </span>
        </div>
        <div key={2} className="sun-slide">
          <img
            style={
              imgscal === 2
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            onClick={() => handleslide(2)}
            src="./img/imgSlide//1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(2)}
            style={
              imgscal === 2
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Lâu đài
          </span>
        </div>
        <div key={3} onClick={() => handleslide(3)} className="sun-slide">
          <img
            style={
              imgscal === 3
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide//1d477273-96d6-4819-9bda-9085f809dad3.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(3)}
            style={
              imgscal === 3
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Nhà khung chữ A
          </span>
        </div>
        <div key={4} className="sun-slide">
          <img
            style={
              imgscal === 4
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            onClick={() => handleslide(4)}
            src="./img/imgSlide//248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(4)}
            style={
              imgscal === 4
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Nhà trên núi
          </span>
        </div>
        <div key={5} className="sun-slide">
          <img
            style={
              imgscal === 5
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            onClick={() => handleslide(5)}
            src="./img/imgSlide//f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(5)}
            style={
              imgscal === 5
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Vui chơi
          </span>
        </div>
        <div key={6} onClick={() => handleslide(6)} className="sun-slide">
          <img
            style={
              imgscal === 6
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide//ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(6)}
            style={
              imgscal === 6
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Nhiệt đới
          </span>
        </div>
        <div key={7} onClick={() => handleslide(7)} className="sun-slide">
          <img
            style={
              imgscal === 7
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide//ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(7)}
            style={
              imgscal === 7
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Các thành phố nổi tiếng
          </span>
        </div>
        <div key={8} onClick={() => handleslide(8)} className="sun-slide">
          <img
            style={
              imgscal === 8
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide//8e507f16-4943-4be9-b707-59bd38d56309.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(8)}
            style={
              imgscal === 8
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Đảo
          </span>
        </div>
        <div key={9} onClick={() => handleslide(9)} className="sun-slide">
          <img
            style={
              imgscal === 9
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide//e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(9)}
            style={
              imgscal === 9
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Nhà phong cách Cycladic
          </span>
        </div>
        <div key={10} onClick={() => handleslide(10)} className="sun-slide">
          <img
            style={
              imgscal === 10
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide//e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(10)}
            style={
              imgscal === 10
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Hỗ trợ người dùng xe lăn
          </span>
        </div>
        <div key={11} onClick={() => handleslide(11)} className="sun-slide cuoi">
          <img
            style={
              imgscal === 11
                ? { scale: "1.2", marginBottom: "10px", cursor: "pointer" }
                : {}
            }
            src="./img/imgSlide//78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
            alt=""
          />
          <span
          onClick={() => handleslide(11)}
            style={
              imgscal === 11
                ? { color: "black", borderBottom: "2px solid black" }
                : {}
            }
          >
            Biệt thự
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slide;
