import React , {useState , useEffect }from 'react'
import Header from '../components/Header';
import Footsell from '../components/Footsell';
import { useDispatch, useSelector } from "react-redux";

import "./_ttuser.scss"
import { fetchUsers } from '../components/reduxuser';

function Ttuser() {

    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(fetchUsers())
    } , [])
    let listUser = useSelector((state) => state.quanliuser)
    console.log(listUser);
    return (  <>
      <Header hide="none"/>
  {listUser.status == "idle" ?      
      <div className="Ttuser">
        <div className="Ttuser__left">
            <div className="wrappar-img">
               
   
    <img src={listUser.listuser[Number(localStorage.getItem("ldsjfldlsf..."))].img} alt="" />
    
    
   
                 
                
            </div>
            <a href="" className="updateimg">Cập nhật ảnh</a>

            <div className="xacnhan">
                <div className="daxacnhan">{listUser.listuser[Number(localStorage.getItem("ldsjfldlsf..."))].name} đã xác nhận</div>
                <div className='check'>
                    <i className="fa-solid fa-check"></i>
                    <div>Số điện thoại</div>
                </div>
            </div>

        </div>
        <div className="Ttuser__right">
            <div className="right-top">Xin chào, tôi là {listUser.listuser[Number(localStorage.getItem("ldsjfldlsf..."))].name}</div>
            <div className="thamgia">Bắt đầu tham gia từ năm 2023</div>
            <a href="">Chỉnh sửa hồ sơ</a>
            <label htmlFor="">Giới thiệu</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <label htmlFor="">Vị trí</label>
            <input type="text" />
            <label htmlFor="">Công việc</label>
            <input type="text" />
            <div className='btn'>
                <a href="">Hủy</a>
                <button>Lưu</button>
            </div>
        </div>
        
        
      </div>
       : ""}
      <Footsell/>
    </>);
}

export default Ttuser;