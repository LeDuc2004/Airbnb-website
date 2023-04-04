import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOption, fetchTodos } from "../redux/khungcanhSlide";
import { getKhungcanh } from "../redux/selector";

function Body({ elmApi, fnSell }) {

  const [pxnext, setPxnext] = useState([]);
  const [skeleton, setSkeleton] = useState([1, 1, 1, 1, 1, 1, 1, 1]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    dispatch(fetchOption(elmApi));
  }, [elmApi]);

  let listKhungcanh = useSelector(getKhungcanh);
  console.log(listKhungcanh);
 


  useEffect(() => {
    let arrControl = [];
    for (let i = 0; i < listKhungcanh.khungcanh.length; i++) {
      arrControl[i] = 0;
    }
    setPxnext([...arrControl]);
  }, [listKhungcanh.khungcanh]);

  function handleNext(e) {
    pxnext[e] = pxnext[e] - 100;
    setPxnext([...pxnext]);
  }
  function handleLui(e) {
    pxnext[e] = pxnext[e] + 100;
    setPxnext([...pxnext]);
  }

  return (
    <div className="container">
      {listKhungcanh.status != "loading"
        ? 
                listKhungcanh.khungcanh.slice().reverse().map((item, index) => {
            return (
              <div key={index} className="container-sun">
                <i className="fa-regular fa-heart" />
                <div className="absolut-btn">
                  <div className="cha-btn">
                    <div
                      style={
                        pxnext[index] === 0
                          ? { display: "none" }
                          : { display: "" }
                      }
                      onClick={() => handleLui(index)}
                      className="btn-sp"
                    >
                      <i className="fa-solid fa-angle-left" />
                    </div>
                    <div
                      onClick={() => handleNext(index)}
                      style={
                        pxnext[index] === -400
                          ? { display: "none" }
                          : { display: "" }
                      }
                      className="btn-sp next"
                    >
                      <i className="fa-solid fa-angle-right" />
                    </div>
                  </div>

                  <Link
                    to={`/sell/${item.id}/${elmApi}`}
                    className="wrapper-img"
                    style={{
                      transform: `translateX(${pxnext[index]}%)`,
                      cursor: "pointer",
                    }}
                  >
                    <img src={item.img[0]} alt="" />
                    <img src={item.img[1]} alt="" />
                    <img src={item.img[2]} alt="" />
                    <img src={item.img[3]} alt="" />
                    <img src={item.img[4]} alt="" />
                  </Link>
                </div>

                <div className="thongtinTamthoi">
                  <div className="address">
                    <div className="nameHouse">
                      {item.tencanho},{item.datnuoc}
                    </div>
                    <div className="star">
                      <div className="icon-star">
                        <i className="fa-solid fa-star" />
                      </div>
                      <div>4.86</div>
                    </div>
                  </div>
                  <div className="distance">Cách 3.447 km</div>
                  <div className="date-order">
                    {item.dateStart.split("-")[1] === item.dateEnd.split("-")[1]
                      ? `Ngày ${item.dateStart.split("-")[2]} - Ngày ${
                          item.dateEnd.split("-")[2]
                        } tháng ${item.dateEnd.split("-")[1]}`
                      : `Ngày ${item.dateStart.split("-")[2]} tháng ${
                          item.dateStart.split("-")[1]
                        } - Ngày ${item.dateEnd.split("-")[2]} tháng ${
                          item.dateEnd.split("-")[1]
                        }`}
                  </div>
                  <div className="price">
                    <div className="dola">${item.price} </div>
                    <div className="ngay">đêm</div>
                  </div>
                </div>
              </div>
            );
          })

        : 
        skeleton.map((item, index) => {
            return (
              <div
                style={
                  listKhungcanh.status == "loading"
                    ? { display: "" }
                    : { display: "none" }
                }
                key={index}
                className="container-sun"
              >
                <div className="wrapper-img skeleton"></div>
                <div className="thongtinTamthoi skele">
                  <div className="con-skele skeleton first"></div>
                  <div className="con-skele skeleton"></div>
                  <div className="con-skele skeleton three"></div>
                  <div className="con-skele skeleton"></div>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Body;
