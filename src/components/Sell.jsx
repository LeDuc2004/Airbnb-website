import Header from "./Header";
import { useState, useEffect } from "react";
import toast from "./Toast";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchAddDi, fetchDi } from "../chuyendi/diSlide";
import { fetchOption, fetchSell, fetchTodos } from "../redux/khungcanhSlide";

function Sell() {
  const [startDate, setStartDate] = useState("start");
  const [endDate, setEndDate] = useState("end");
  const [totalDays, setTotalDays] = useState(0);
  const [vlchonngay, setVlchonngay] = useState(true);

  const { id, option } = useParams();
  const dispatch = useDispatch();

  function ShowSuccessToast() {
    toast({
      title: "Success",
      message: "Đặt phòng thành công!",
      type: "success",
      duration: 4000,
    });
  }
  function ShowErrorToast() {
    toast({
      title: "Airbnb",
      message: "Vui lòng đăng nhập",
      type: "error",
      duration: 4000,
    });
  }

  useEffect(() => {
    dispatch(fetchSell([id, option]));
    dispatch(fetchDi(localStorage.getItem("ldsjfldlsf...")));
  }, []);

  let listChuyendi = useSelector((state) => state.listphong);
  let spdachon = useSelector((state) => state.khungcanhList);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    if (endDate != "end") {
      setEndDate(event.target.value);
    }
  };
  function datphong() {
    if (startDate == "start" || endDate == "end") {
      setVlchonngay(false);
      return;
    }
    if (localStorage.getItem("ldsjfldlsf...") == "nothing") {
      ShowErrorToast();
      return;
    } else {
      let ttsp = {
        id: listChuyendi.listphong.id,
        listphong: [
          ...listChuyendi.listphong.listphong,
          {
            id: listChuyendi.listphong.listphong.length,
            img: spdachon.sell.img,
            tencanho: spdachon.sell.tencanho,
            startDate,
            endDate,
            totalDays,
            price: spdachon.sell.price,
            chunha: spdachon.sell.tenchunha,
            diachi: spdachon.sell.diachi,
          },
        ],
      };
      setVlchonngay(true);

      dispatch(fetchAddDi(ttsp));
      ShowSuccessToast();
    }
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  useEffect(() => {
    if (startDate != "start") {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays == 0) {
        setTotalDays(1);
      } else {
        setTotalDays(diffDays);
      }
    }
  }, [endDate]);

  return (
    <>
      <Header></Header>
      <div className="page-dat">
        {spdachon.status == "dachon" ? (
          <>
            <h1>{spdachon.sell.tencanho}</h1>
            <a className="address-sp" href="">
              {spdachon.sell.diachi}
            </a>
            <ul className="dsklfạd">
              <li>
                <img src={spdachon.sell.img[0]} alt="" />
              </li>
              <li>
                <img src={spdachon.sell.img[1]} alt="" />
              </li>
              <li>
                <img
                  style={{ borderTopRightRadius: 10 }}
                  src={spdachon.sell.img[2]}
                  alt=""
                />
              </li>
              <li>
                <img src={spdachon.sell.img[3]} alt="" />
              </li>
              <li>
                <img
                  style={{ borderBottomRightRadius: 10 }}
                  src={spdachon.sell.img[4]}
                  alt=""
                />
              </li>
            </ul>
            <div className="page-sell">
              <div className="sell-info-sp">
                <div className="sell-top">
                  <div className="sell-top-right">
                    <h2>
                      Toàn bộ căn hộ cho thuê. Chủ nhà {spdachon.sell.tenchunha}
                    </h2>
                    <div>5 khách - 2 phòng ngủ - 3 giường</div>
                    <div>
                      1 phòng tắm đầy đủ và 1 phòng vệ sinh cơ bản riêng
                    </div>
                  </div>
                  <div className="sell-img">
                    <img src={spdachon.sell.img[4]} alt="" />
                  </div>
                </div>
                <div className="sell-center">
                  <img
                    src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                    alt=""
                  />
                  <div>
                    Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ
                    nhà hủy, thông tin nhà/phòng cho thuê không chính xác và
                    những vấn đề khác như sự cố trong quá trình nhận phòng.
                  </div>
                  <a href="">Tìm hiểu thêm</a>
                </div>
                <div style={{ marginBottom: 40 }} className="sell-bottom">
                  <div style={{ display: "flex", margin: "20px 0" }}>
                    <div>Một số thông tin đã được dịch tự động.</div>
                    <a href="">Hiện thị ngôn ngữ gốc</a>
                  </div>
                  Phòng A là phòng hai phòng ngủ ở tầng 10 của Block A. Khoảng
                  60 m2, hai phòng ngủ, phù hợp với 3 người. Cả ban công và
                  phòng ngủ đều có tầm nhìn ra biển của Pattaya. CĂN CỨ Trung
                  tâm Pattya nằm trên Đường Pattaya thứ hai, gần Đường Trung tâm
                  Pattaya, và chỉ cách The Central Festival, trung tâm mua sắm
                  lớn nhất Pattaya 480 mét, hoặc đi bộ 5 phút.
                </div>
                <div id="tienich">
                  <div style={{ fontSize: 20, fontWeight: 550 }}>
                    Nơi này có những gì cho bạn
                  </div>
                  <div className="tienich-con">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z" />
                    </svg>
                    <div className="tienich-con-text">Bếp</div>
                  </div>
                  <div className="tienich-con">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z" />
                    </svg>
                    <div className="tienich-con-text">
                      Không gian riêng để làm việc
                    </div>
                  </div>
                  <div className="tienich-con">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z" />
                    </svg>
                    <div className="tienich-con-text">Bể bơi</div>
                  </div>
                  <div className="tienich-con">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m26.2875958 2c1.4943151.00218728 2.7591731 1.1037772 2.9663548 2.58389031.4975641 3.56108628.7460494 7.36641109.7460494 11.41610969s-.2484853 7.8550234-.7460839 11.4163568c-.1988613 1.4206714-1.3725089 2.4927235-2.7894512 2.5781497l-.1783321.0054935h-20.57372863c-1.49431506-.0021873-2.7591731-1.1037772-2.96635481-2.5838903-.49756403-3.5610863-.74604936-7.3664111-.74604936-11.4161097s.24848533-7.85502341.74608392-11.41635683c.19886126-1.42067133 1.37250888-2.49272345 2.78945123-2.57814972l.17833204-.00549345zm-.001463 1.99999893h-20.57080259c-.49804876.00072866-.919536.36781024-.98852197.86064804-.48434104 3.46644876-.72680824 7.17961153-.72680824 11.13935193 0 3.9597426.2424672 7.6729054.72677368 11.139107.06371126.4551553.42774918.8029468.87395616.8543314l.11313735.0065616h20.57080261c.4980488-.0007265.919536-.3678081.988522-.8606459.484341-3.4664487.7268082-7.1796115.7268082-11.1393541 0-3.9597404-.2424672-7.67290317-.7267737-11.13910479-.0690205-.49308494-.4905077-.86016652-.9870935-.86089518zm-10.2861328 3.00000107c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm-5.8414878 7.4999981c-.34108957-.0001654-.67972606.0242467-1.01356612.0725599-.09481995.4612974-.14494608.9385159-.14494608 1.4274401 0 3.8659951 3.1340068 7 7 7 2.7319686 0 5.0983993-1.5650514 6.2516347-3.8475004-.2599201.0223771-.5214932.0336332-.7841237.0335052-2.2620527-.0011072-4.4437323-.8444711-6.1250979-2.4078908l-.2367463-.2282308c-1.3302626-1.3311149-3.1018689-2.0498832-4.9471546-2.0498832zm5.8414878-5.4999981c-2.5924559 0-4.8557544 1.4092904-6.06558041 3.5035562l.22458041-.0035562c2.2624645 0 4.4444831.8435532 6.1243595 2.4073778l.2365208.22829c1.3314314 1.3305789 3.1034818 2.049432 4.9486075 2.0503351.4925113.0002394.9799732-.0508503 1.4553384-.1512223.0503426-.3388527.0761738-.6838001.0761738-1.0347806 0-3.8659932-3.1340068-7-7-7zm-9-3c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1z" />
                    </svg>
                    <div className="tienich-con-text">Máy giặt</div>
                  </div>
                  <div className="tienich-con">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z" />
                    </svg>
                    <div className="tienich-con-text">Wi-fi</div>
                  </div>
                  <div className="tienich-con">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z" />
                    </svg>
                    <div className="tienich-con-text">
                      Chỗ đỗ xe miễn phí tại nơi ở
                    </div>
                  </div>
                  <div className="tienich-con">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z" />
                    </svg>
                    <div className="tienich-con-text">TV</div>
                  </div>
                  <div className="tienich-con">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: 24,
                        width: 24,
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z" />
                    </svg>
                    <div className="tienich-con-text">Điều hòa nhiệt độ</div>
                  </div>
                </div>
              </div>
              <div className="sticky-sell">
                <div className="sell-price">
                  <div
                    style={{ marginRight: 5, fontWeight: 550, fontSize: 25 }}
                  >
                    {" "}
                    ${spdachon.sell.price}
                  </div>
                  <div style={{ marginBottom: 3 }}>đêm</div>
                </div>
                <div id="phong">
                  <div className="nhanphong">
                    <div
                      style={{ fontSize: 15, fontWeight: 550, marginBottom: 5 }}
                    >
                      Nhận phòng
                    </div>

                    <input
                      onChange={handleStartDateChange}
                      type="date"
                      min={`${new Date().getFullYear()}-${
                        new Date().getMonth() < 10 ? 0 : ""
                      }${new Date().getMonth() + 1}-0${new Date().getDate()}`}
                    />
                  </div>
                  <div className="traphong">
                    <div
                      style={{ fontSize: 15, fontWeight: 550, marginBottom: 5 }}
                    >
                      Trả phòng
                    </div>
                    <input
                      onChange={handleEndDateChange}
                      type="date"
                      min={startDate}
                      value={endDate}
                    />
                  </div>
                </div>
                <span
                  style={
                    vlchonngay == true
                      ? { visibility: "hidden" }
                      : { visibility: "visible" }
                  }
                  id="vlchonngay"
                >
                  Vui lòng chọn ngày
                </span>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => datphong()}
                  className="sticky-btn"
                >
                  Đặt phòng
                </button>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <a style={{ color: "black" }} href="">
                    ${spdachon.sell.price} x {totalDays}
                  </a>
                  <div>${spdachon.sell.price * totalDays}</div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10,
                    borderBottom: "1px solid lightgray",
                    paddingBottom: 20,
                  }}
                >
                  <a style={{ color: "black" }} href="">
                    Phí dịch vụ Airbnb
                  </a>
                  <div>${spdachon.sell.price * totalDays * 0.05}</div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <div style={{ color: "black", fontWeight: 550 }}>
                    Tổng chi phí
                  </div>
                  <div style={{ fontWeight: 550 }}>
                    $
                    {spdachon.sell.price * totalDays * 0.05 +
                      spdachon.sell.price * totalDays}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="skeleton"></h1>
            <div className="address-sp skeleton"></div>
            <ul className="dsklfạd">
              <li className="skeleton"></li>
              <li className="skeleton"></li>
              <li className="skeleton"></li>
              <li className="skeleton"></li>
              <li className="skeleton"></li>
            </ul>
            <div className="page-sell">
              <div className="sell-info-sp">
                <div className="sell-top">
                  <div className="sell-top-right skeleton"></div>

                  <div className="sell-img">
                    <div className="skeleton img" alt="" />
                  </div>
                </div>
                <div className="sell-center skeleton"></div>

                <div
                  style={{ marginBottom: 40, width: "100%", height: "50px" }}
                  className="sell-bottom skeleton"
                ></div>
                <div className="tienich skeleton"></div>
              </div>
              <div className="sticky-sell skeleton"></div>
            </div>{" "}
          </>
        )}
      </div>

      <div className="footer-sell">
        <ul>
          <li>Hỗ trợ</li>
          <li>Trung tâm trợ giúp</li>
          <li>AirCover</li>
          <li>Hỗ trợ người khuyết tật</li>
          <li>Các tùy chọn hủy</li>
          <li>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</li>
          <li>Báo cáo lo ngại của hàng xóm</li>
        </ul>
        <ul>
          <li>Cộng đồng</li>
          <li>Airbnb.org: nhà ở cứu trợ</li>
          <li>Chống phân biệt đối xử</li>
        </ul>
        <ul>
          <li>Đón tiếp khách</li>
          <li>Cho thuê nhà trên Airbnb</li>
          <li>AirCover cho Chủ nhà</li>
          <li>Xem tài nguyên đón tiếp khách</li>
          <li>Truy cập diễn đàn cộng đồng</li>
          <li>Đón tiếp khách có trách nhiệm</li>
        </ul>
        <ul>
          <li>Airbnb</li>
          <li>Trang tin tức</li>
          <li>Tìm hiểu các tính năng mới</li>
          <li>Thư ngỏ từ các nhà sáng lập</li>
          <li>Cơ hội nghề nghiệp</li>
          <li>Nhà đầu tư</li>
        </ul>
      </div>
    </>
  );
}

export default Sell;
