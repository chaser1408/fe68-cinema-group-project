/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CheckOut.scss";
import {
  actFetchMovieSeatApi,
  actDatVe,
  layThongTinNguoiDungAction,
} from "container/clients/CheckOut/module/actions";
import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "container/clients/CheckOut/module/types";
import _ from "lodash";
import { ThongTinDatVe } from "_core/models/ThongTinDatVe";
import { Button } from "antd";
import { Tabs } from "antd";

function CheckOut(props) {
  const dispatch = useDispatch();
  const { movieSeat, danhSachGheDangDat } = useSelector(
    (state) => state.movieSeatPlanReducer1
  );

  console.log("seat", movieSeat);
  console.log("danhSachGheDangDat", danhSachGheDangDat);

  useEffect(() => {
    dispatch(actFetchMovieSeatApi(props.match.params.id));
  }, []);
  const { userLogin } = useSelector((state) => state.userLoginReducer);

  console.log("objectuser", userLogin);
  const { thongTinPhim, danhSachGhe } = movieSeat;
  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";

      let classGheDangDat = "";
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "classGheDaDuocDat";
      }

      if (indexGheDD !== -1) {
        classGheDaDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          {
            <button
              onClick={() => {
                dispatch({
                  type: DAT_VE,
                  gheDuocChon: ghe,
                });
              }}
              disable={ghe.daDat}
              className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}${classGheDaDuocDat} text-center`}
              key={index}>
              {ghe.daDat ? (
                <CloseOutlined
                  style={{ marginBottom: 5, fontWeight: "bold" }}
                />
              ) : (
                ghe.stt
              )}
            </button>
          }
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className="container bg__screen">
      <div className="row">
        <div className="col-8 checkout">
          <div className={`screen`}></div>
          {renderSeats()}
        </div>
        <div className="col-4 checkout__right">
          T??n Phim: <span>{thongTinPhim?.tenPhim}</span>
          <div className="text-red-400 text-lg col-span-3 md:col-span-4 my-auto ml-6 ">
            <span className="text-red-400 text-lg">Gh???:</span>

            {_.sortBy(danhSachGheDangDat, ["stt"])?.map((gheDD, index) => {
              return <span key={index}>{gheDD.stt},</span>;
            })}
          </div>
          <div className="text-right ">
            <span className="text-green-800 text-lg">
              Gi?? V??:{" "}
              {danhSachGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
            </span>
          </div>
          <hr />
          <i className="ml-20">Email:</i>
          <div>{userLogin.email}</div>
          <hr />
          <i>T??n Kh??ch H??ng:</i>
          <div>{userLogin.taiKhoan}</div>
          <Button
            onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              console.log("thongtindatve", thongTinDatVe);
              dispatch(actDatVe(userLogin, thongTinDatVe));
            }}
            block>
            ?????t v??
          </Button>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function (props) {
  return (
    <div>
      <div className="p-5">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="01 CH???N GH??? V?? THANH TO??N " key="1">
            <CheckOut {...props} />
          </TabPane>
          <TabPane tab="02 K???T QU??? V?? ?????T V??" key="2">
            <KetQuaDatVe {...props} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

function KetQuaDatVe(props) {
  console.log("propslichsudatphim", props);
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.userLoginReducer);

  const { thongTinNguoiDung } = useSelector(
    (state) => state.movieSeatPlanReducer1
  );

  console.log("thongTinNguoiDung", thongTinNguoiDung);

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction(userLogin));
  }, []);

  return (
    <div className="container p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">
              L???ch s??? ?????t v?? kh??ch h??ng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              H??y xem th??ng tin ?????a v?? th???i gian ????? xem phim vui v??? b???n nh?? !
            </p>
          </div>
          <div className="flex flex-wrap -m-2"></div>
        </div>
      </section>
    </div>
  );
}
