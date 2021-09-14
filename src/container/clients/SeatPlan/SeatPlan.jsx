import { Button } from "antd/lib/radio";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchMovieSeatApi } from "./module/actions";
import { PoweroffOutlined } from "@ant-design/icons";
import "./SeatPlan.scss";

export class SeatPlan extends Component {
  state = {
    loadings: [],
  };

  componentDidMount() {
    const { showTimeId } = this.props.match.params;
    this.props.fetchMovieSeat(showTimeId);
    // call for seat plan with movie detail id
  }

  renderNormalSeat = () =>
    this.props.movieSeat.danhSachGhe?.map((seat, idx) => (
      <div className="" key={idx}>
        {seat.loaiGhe === "Thuong" ? (
          <div className="">
            <Button
              className="seat"
              type="primary"
              icon={<PoweroffOutlined />}
              onClick={() => this.enterLoading()}>
              <span className="seatThuong">
                {seat.loaiGhe === "Thuong" ? "T" : "V"}
                {seat.tenGhe}
              </span>
            </Button>
          </div>
        ) : (
          <div className=""></div>
          // <Button
          //   className="seat"
          //   type="primary"
          //   icon={<PoweroffOutlined />}
          //   onClick={() => this.enterLoading()}>
          //   <span className="seatVIP">
          //     {seat.loaiGhe === "Thuong" ? "T" : "V"}
          //     {seat.tenGhe}
          //   </span>
          // </Button>
        )}
        {/* <Button
          className="seat"
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={() => this.enterLoading()}>
          <span className="fontSize: 20px">
            {seat.loaiGhe === "Thuong" ? "T" : "V"}
            {seat.tenGhe}
          </span>
        </Button> */}
      </div>
    ));

  renderVIPSeat = () => {
    // console.log("dong 63", this.props.movieSeat.danhSachGhe);
    let seatVip = [];
    // let countRow = 1;
    // let countLine = [
    //   "A",
    //   "B",
    //   "C",
    //   "D",
    //   "E",
    //   "F",
    //   "G",
    //   "H",
    //   "I",
    //   "J",
    //   "K",
    //   "L",
    //   "O",
    // ];
    // let countForLine = 0;
    // let countSeat = 1;
    for (let i = 0; i < this.props.movieSeat.danhSachGhe.length; i++) {
      if (this.props.movieSeat.danhSachGhe[i].loaiGhe === "Vip") {
        seatVip.push(this.props.movieSeat.danhSachGhe[i]);
        console.log("seat vip", this.props.movieSeat.danhSachGhe[i]);
      }
    }
    return seatVip?.map((seat, idx) => (
      <div className="" key={idx}>
        {seat.loaiGhe === "Vip" ? (
          <div className="">
            <Button
              className="seat"
              type="primary"
              icon={<PoweroffOutlined />}
              onClick={() => this.enterLoading()}>
              <span className="seatVIP">
                {/* {seat.loaiGhe === "Vip" ? "V" : "T"} */}
                {/* {countLine[countForLine] === "O"
                  ? countLine[(countForLine = 0)]
                  : countLine[countForLine++]}
                {countRow <= 12 ? countRow++ : (countRow = 1)} */}
              </span>
            </Button>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    ));
  };

  // this.props.movieSeat.danhSachGhe?.slice(0, 60).map((seat, idx) => (
  //   <div className="">
  //     {seat.loaiGhe === "Thuong" ? (
  //       <div className="">
  //         <Button
  //           className="seat"
  //           type="primary"
  //           icon={<PoweroffOutlined />}
  //           onClick={() => this.enterLoading()}>
  //           <span className="seatVIP">
  //             {seat.loaiGhe === "Thuong" ? "V" : "T"}
  //             {seat.tenGhe}
  //           </span>
  //         </Button>
  //       </div>
  //     ) : (
  //       <div className=""></div>
  //     )}
  //   </div>
  // ));

  enterLoading = (index) => {};

  render() {
    const { movieSeat } = this.props;
    // movieSeat is object
    // it's contain thongTinPhim {} and danhSachGhe[]
    console.log(movieSeat);
    return (
      <>
        <div className="container bg__screen ">
         
          <div className={`screen`}></div>
          <div className="row">
            {/* {this.renderNormalSeat()} */}
            <hr />
          </div>
          <div className="row pt-5">
            {this.renderVIPSeat()}
            <hr />
          </div>
          <div className="row">
            <div className="col-12">Your Seat: {}</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movieSeat: state.movieSeatPlanReducer.movieSeat,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieSeat: (showTimeId) => dispatch(actFetchMovieSeatApi(showTimeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatPlan);
