import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchMovieSeatApi } from "./module/actions";

export class SeatPlan extends Component {
  componentDidMount() {
    const { showTimeId } = this.props.match.params;
    this.props.fetchMovieSeat(showTimeId);
    // call for seat plan with movie detail id
  }

  render() {
    const { movieSeat } = this.props;
    // movieSeat is object
    // it's contain thongTinPhim {} and danhSachGhe[]
    console.log(movieSeat);
    return (
      <div>
        {movieSeat.danhSachGhe?.map((seat, idx) => {
          return (
            <p>
              Seat {seat.tenGhe} {movieSeat.thongTinPhim.maLichChieu}
            </p>
          );
        })}
      </div>
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
