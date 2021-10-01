import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CheckOut/CheckOut.scss";
import {
  actFetchMovieSeatApi,
  actDatVe,
} from "container/clients/CheckOut/module/actions";
import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "container/clients/CheckOut/module/types";
import _ from "lodash";
import { ThongTinDatVe } from "_core/models/ThongTinDatVe";
import { Button } from "antd";

export default function CheckOut(props) {
  console.log(".....", props);

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
    <div className=" container bg__screen   ">
      <div className="row">
        <div className="col-8 checkout">
          <div className={`screen`}></div>
          {renderSeats()}
        </div>
        <div className="col-4 checkout__right">
          Tên Phim:
          <span>{thongTinPhim?.tenPhim}</span>
          <div className="text-red-400 text-lg col-span-3 md:col-span-4 my-auto ml-6 ">
            <span className="text-red-400 text-lg">Ghế:</span>

            {_.sortBy(danhSachGheDangDat, ["stt"])?.map((gheDD, index) => {
              return <span key={index}>{gheDD.stt},</span>;
            })}
          </div>
          <div className="text-right ">
            <span className="text-green-800 text-lg">
              Giá Vé:
              {danhSachGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
            </span>
          </div>
          <hr />
          <i className="ml-20">Email</i>
          <div>{userLogin.email}</div>
          <hr />
          <i>Tên Khách Hàng:</i>
          <div>{userLogin.taiKhoan}</div>
          <Button
            onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              console.log("thongtindatve", thongTinDatVe);
              dispatch(actDatVe(thongTinDatVe));
            }}
            block>
            Default
          </Button>
        </div>
      </div>
    </div>
  );
}
