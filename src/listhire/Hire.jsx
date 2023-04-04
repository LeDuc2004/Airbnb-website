import Header from "../components/Header";
import Footsell from "../components/Footsell";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Empty } from "antd";
import toast from "../components/Toast";
import {  fetchDeleteHire, fetchHire } from "./hireSlide";
import { boqua } from "../redux/khungcanhSlide";



function Hire() {
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchHire())
} , [])


let listHire = useSelector(state => state.listHire)

function ShowErrorToast() {
  toast({
    title: "Đã dừng cho thuê",
    message: "Dừng thành công",
    type: "error",
    duration: 4000,
  });
}

function huychothue(id , dd , item) {

if (dd == "Khung cảnh tuyệt vời") {
  let ttsp = {
    id: listHire.listHire.id,
    listHire: [],
  }

  for (let i = 0; i < listHire.listHire.listHire.length; i++) {
    if (listHire.listHire.listHire[i].id != id) {
      ttsp.listHire.push(listHire.listHire.listHire[i]);
    }
  }
  dispatch(boqua({idsp:item.idsp , option:"khungcanh"}))
  dispatch(fetchDeleteHire(ttsp))
}
if (dd == "Bãi biển") {
  let ttsp = {
    id: listHire.listHire.id,
    listHire: [],
  }

  for (let i = 0; i < listHire.listHire.listHire.length; i++) {
    if (listHire.listHire.listHire[i].id != id) {
      ttsp.listHire.push(listHire.listHire.listHire[i]);
    }
  }
  dispatch(boqua({idsp:item.idsp , option:"baibien"}))
  dispatch(fetchDeleteHire(ttsp))
  ShowErrorToast()
}
if (dd == "Lâu đài") {
  let ttsp = {
    id: listHire.listHire.id,
    listHire: [],
  }

  for (let i = 0; i < listHire.listHire.listHire.length; i++) {
    if (listHire.listHire.listHire[i].id != id) {
      ttsp.listHire.push(listHire.listHire.listHire[i]);
    }
  }
  dispatch(boqua({idsp:item.idsp , option:"laudai"}))
  dispatch(fetchDeleteHire(ttsp))
}
}

    return ( 
        <>
        <Header hide="none"></Header>
        {console.log(listHire.listHire)}
        {listHire.listHire.listHire.length == 0 ? (
          
          <div className="empty">
            <Empty />
          </div>
        ) : (
          ""
        )}
  
        <div className="Chuyendi">
          {listHire.status == "hire"
            ? listHire.listHire.listHire.map((item, index) => {
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
                          {console.log(item)}
                        </a>
  
                        <div className="cd-chunha">Chủ nhà {item.tenchunha}</div>
                      </div>
  
                      <div className="cd-date">
                        <div className="cd-date-left">
                          <div className="cd-date-text">Bạn đã cho thuê từ ngày</div>
                          <div className="date-text">
                            {item.dateStart}{" "}
                            <div style={{ margin: "0 5px", fontWeight: "500" }}>
                              đến
                            </div>{" "}
                            {item.dateEnd}
                          </div>
                        </div>
                        <div className="cd-date-right">
                          <div style={{ margin: "0 5px", fontWeight: "500" }}>
                            Giá một qua đêm:
                          </div>{" "}
                          $
                          {item.price}
                        </div>
                      </div>
                    </div>
  
                    <div className="chuyendi-btn">
                      <div onClick={()=>huychothue(item.id , item.dacdiem , item)}>
                        Dừng cho thuê
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

export default Hire;