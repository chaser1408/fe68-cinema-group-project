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
      <div className="">
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

  renderVIPSeat = () =>
    this.props.movieSeat.danhSachGhe?.map((seat, idx) => (
      <div className="">
        {seat.loaiGhe === "Vip" ? (
          <div className="">
            <Button
              className="seat"
              type="primary"
              icon={<PoweroffOutlined />}
              onClick={() => this.enterLoading()}>
              <span className="seatVIP">
                {seat.loaiGhe === "Thuong" ? "T" : "V"}
                {seat.tenGhe}
              </span>
            </Button>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    ));

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
            {this.renderNormalSeat()}
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
