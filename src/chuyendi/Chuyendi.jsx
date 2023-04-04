import "./chuyendi.scss";
import Header from "../components/Header";
import Footsell from "../components/Footsell";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchDeleteDi, fetchDi } from "./diSlide";
import { Empty } from "antd";
import toast from "../components/Toast";

function Chuyendi() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDi(localStorage.getItem("ldsjfldlsf...")));
  }, []);

  let listChuyendi = useSelector((state) => state.listphong);
  console.log(listChuyendi);
  function ShowErrorToast() {
    toast({
      title: "Đã hủy",
      message: "Hủy thành công",
      type: "error",
      duration: 4000,
    });
  }
  function huychuyendi(id) {
    console.log(id);
    let ttsp = {
      id: listChuyendi.listphong.id,
      listphong: [],
    };
    for (let i = 0; i < listChuyendi.listphong.listphong.length; i++) {
      if (listChuyendi.listphong.listphong[i].id != id) {
        ttsp.listphong.push(listChuyendi.listphong.listphong[i]);
      }
    }
    dispatch(fetchDeleteDi(ttsp));
    ShowErrorToast();
  }

  return (
    <>
      <Header hide="none"></Header>

      {listChuyendi.listphong.listphong.length == 0 ? (
        <div className="empty">
          <Empty />
        </div>
      ) : (
        ""
      )}

      <div className="Chuyendi">
        {listChuyendi.status == "idle"
          ? 
          listChuyendi.listphong.listphong.map((item, index) => {
              return (
                <div key={index} className="chuyendi-sun">
                  <div className="chuyendi-sun-img">
                    <div className="li-large">
                      <img src={item.img[0]} alt="" />
                    </div>
                    <div className="li-sm1">
                      <img src={item.img[1]} alt="" />
                    </div>
                    <div className="li-sm2">
                      <img src={item.img[2]} alt="" />
                    </div>
                  </div>

                  <div className="tt-cdsp">
                    <div className="top">
                      <div className="cd-tencanho">{item.tencanho}</div>

                      <a href="" className="cd-diadiem">
                        {item.diachi}
                      </a>

                      <div className="cd-chunha">Chủ nhà {item.chunha}</div>
                    </div>

                    <div className="cd-date">
                      <div className="cd-date-left">
                        <div className="cd-date-text">Bạn đã thuê từ ngày</div>
                        <div className="date-text">
                          {item.startDate}{" "}
                          <div style={{ margin: "0 5px", fontWeight: "500" }}>
                            đến
                          </div>{" "}
                          {item.endDate}
                        </div>
                      </div>
                      <div className="cd-date-right">
                        <div style={{ margin: "0 5px", fontWeight: "500" }}>
                          Tổng tri phí:
                        </div>{" "}
                        $
                        {item.price * item.totalDays +
                          item.price * item.totalDays * 0.05}
                      </div>
                    </div>
                  </div>

                  <div className="chuyendi-btn">
                    <div onClick={() => huychuyendi(item.id)}>
                      Hủy chuyến đi
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      <Footsell></Footsell>
    </>
  );
}

export default Chuyendi;
