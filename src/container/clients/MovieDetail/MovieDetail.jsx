import React, { Component } from 'react';
import { actFetchMovieDetailApi } from './module/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieDetail.scss'
// import   from 'MovieDetail.scss';

class MovieDetail extends Component {
    componentDidMount() {
        const { movieId } = this.props.match.params;
        this.props.fetchMovieDetail(movieId); //1 call ben action
    }

    render() {
        const { movieDetail, fetchMovieDetail } = this.props;
        return (
            <div className=" movie__detail__content">
                <div className="movie__detail__img">
                    <img src={movieDetail.hinhAnh} alt="" />
                    <div className="movie__detail__pay">
                        <h1>{movieDetail.tenPhim}</h1>
                        <p>English/VietNamese</p>
                        <span>{movieDetail.maNhom}</span>
                    </div>

                </div>
                <div className="movie__detail__bg">
                    <div className="container movie__detail__center">
                        <div className="row movie__detail__infor"  >
                            <div className="col-4 col-lg-4 movie__detail_img">
                            </div>
                            <div className="col-2 col-2 col-md-2 col-lg-2 movie__detail__title">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAD1UlEQVRIiZ2WS2wbVRSGv+vHJDRx0pDEaR5NENAgtUBkqQIqUEFEhRVCCBZZIpAAIVZESLBkhyqBkIAFEoJF1zyKhAAhoIuSiA1uEUyhtZ1A4xAaN7bzIMrYnoPuPBLPeFISzuZ67sz9zj//ueeOFXsIMUkCJ4FfgUeBGXWUK3tZGxli0o47vismIiYL3rgsJv03Whu7AfQcUBWTKeBub7rbG28GcmLyqpjcH7U+0gox+QR4wrtchkh1W0AbsKqObieMViwmh7UK4EF/ahcoHlRHSkze8G0LKBaTCeBNatxBkhEHt6eyArYrz/4q/mHjTHzayFqVHcUVdRqYdKDsA+oT1hVqwn5GHZarVsZ41pm2Msadtqkm94FqjQ5BDQqxU41O4nxgZYyHdL5J+7N4XFb2IzMU3lJ1TKBT+8jxBFCUoqI+nST2cIPYSRs1JvviyoLCPhfD/jYOljN1VVkZIwP8FHiyS1C3CWpIUD3AAQEtwQA2XE9lDVhU2AWlaxTOdY8Gd6uRWyuxx5+m8dFp+Gf9/9mRNIhNvYj88DVSuNTvpLLu6y4lZyu9rJapv/QYcvlnVHoY+etPaNR3h/WmYbWCGr2d+HtfoNJD1CZH1o3viqmE88DWZo7SUi99h1DjE8jcbyQ+vwT1GnJtEdYq1J97xEmSeOcspA6iBkeho4vaqVHUkbscKBtrUF7Oa2TCy52X4ty9qu8Q9A24D9RrkEiihsaAMVSqG1mrojIPBFWvlkFDdREX5/UwR1NL56ToTOLAdVRX/ttXXY+ahepJu+AFh1loBhcozrm/+gbdhyrXWziqsytwLeVl98fAsDu6igNgbUVQcbkUpLYfABXaVl5y1TvgKS7sbgX9vuIQOGm0WuHb5a9xFee3wUbWWmJxfrM5O9VWK3QxA1b4iv23dMXNNytG/l7I+TuBnn6oRBTvpo6QFSUw2qHTPeelOL9oZK2tABjbzjsN4ahOt1qRavlIIOUSyrOB0pLuh7x/r/kLkmfb56HW4kWF9tizwSv+XCRYigVP8QAS5XHYiur1bcUeuBAFznkb3K1ytRyE6F2RSASmnOL5xS7u7OEw+KJcmGlg2yjdJCHFSu/jcDgeu+1sX5jRw48tYCNrXZOLs+83XpmCtjanMC0RbhCdPNVN4/XnkdlvzhhZ67J/KxFa+7L9/dk05798Sp8BzvE57v9X0S29szN0Q0l1hcbbr8HmxsfAC4E3bJUFVsZ4EpgGTqjhW2BsHOZ/dxccO478cQXJ/aK36HngLSNrfdryclHgpgT6dDkBHAEOetO6qvqVZ5yOjQrgX5QGk4mlocvcAAAAAElFTkSuQmCC" alt="" />
                                <span className="percent text-white pl-2 font-weight-bold text-center">88%</span>
                                <p>Tomatometer</p>
                            </div>
                            <div className="col-2 movie__detail__title">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAD1UlEQVRIiZ2WS2wbVRSGv+vHJDRx0pDEaR5NENAgtUBkqQIqUEFEhRVCCBZZIpAAIVZESLBkhyqBkIAFEoJF1zyKhAAhoIuSiA1uEUyhtZ1A4xAaN7bzIMrYnoPuPBLPeFISzuZ67sz9zj//ueeOFXsIMUkCJ4FfgUeBGXWUK3tZGxli0o47vismIiYL3rgsJv03Whu7AfQcUBWTKeBub7rbG28GcmLyqpjcH7U+0gox+QR4wrtchkh1W0AbsKqObieMViwmh7UK4EF/ahcoHlRHSkze8G0LKBaTCeBNatxBkhEHt6eyArYrz/4q/mHjTHzayFqVHcUVdRqYdKDsA+oT1hVqwn5GHZarVsZ41pm2Msadtqkm94FqjQ5BDQqxU41O4nxgZYyHdL5J+7N4XFb2IzMU3lJ1TKBT+8jxBFCUoqI+nST2cIPYSRs1JvviyoLCPhfD/jYOljN1VVkZIwP8FHiyS1C3CWpIUD3AAQEtwQA2XE9lDVhU2AWlaxTOdY8Gd6uRWyuxx5+m8dFp+Gf9/9mRNIhNvYj88DVSuNTvpLLu6y4lZyu9rJapv/QYcvlnVHoY+etPaNR3h/WmYbWCGr2d+HtfoNJD1CZH1o3viqmE88DWZo7SUi99h1DjE8jcbyQ+vwT1GnJtEdYq1J97xEmSeOcspA6iBkeho4vaqVHUkbscKBtrUF7Oa2TCy52X4ty9qu8Q9A24D9RrkEiihsaAMVSqG1mrojIPBFWvlkFDdREX5/UwR1NL56ToTOLAdVRX/ttXXY+ahepJu+AFh1loBhcozrm/+gbdhyrXWziqsytwLeVl98fAsDu6igNgbUVQcbkUpLYfABXaVl5y1TvgKS7sbgX9vuIQOGm0WuHb5a9xFee3wUbWWmJxfrM5O9VWK3QxA1b4iv23dMXNNytG/l7I+TuBnn6oRBTvpo6QFSUw2qHTPeelOL9oZK2tABjbzjsN4ahOt1qRavlIIOUSyrOB0pLuh7x/r/kLkmfb56HW4kWF9tizwSv+XCRYigVP8QAS5XHYiur1bcUeuBAFznkb3K1ytRyE6F2RSASmnOL5xS7u7OEw+KJcmGlg2yjdJCHFSu/jcDgeu+1sX5jRw48tYCNrXZOLs+83XpmCtjanMC0RbhCdPNVN4/XnkdlvzhhZ67J/KxFa+7L9/dk05798Sp8BzvE57v9X0S29szN0Q0l1hcbbr8HmxsfAC4E3bJUFVsZ4EpgGTqjhW2BsHOZ/dxccO478cQXJ/aK36HngLSNrfdryclHgpgT6dDkBHAEOetO6qvqVZ5yOjQrgX5QGk4mlocvcAAAAAElFTkSuQmCC" alt="" />
                                <span className="percent text-white pl-2 font-weight-bold text-center">88%</span>
                                <p>Tomatometer</p>
                            </div>
                            <div className="col-2 movie__detail__title">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAD1UlEQVRIiZ2WS2wbVRSGv+vHJDRx0pDEaR5NENAgtUBkqQIqUEFEhRVCCBZZIpAAIVZESLBkhyqBkIAFEoJF1zyKhAAhoIuSiA1uEUyhtZ1A4xAaN7bzIMrYnoPuPBLPeFISzuZ67sz9zj//ueeOFXsIMUkCJ4FfgUeBGXWUK3tZGxli0o47vismIiYL3rgsJv03Whu7AfQcUBWTKeBub7rbG28GcmLyqpjcH7U+0gox+QR4wrtchkh1W0AbsKqObieMViwmh7UK4EF/ahcoHlRHSkze8G0LKBaTCeBNatxBkhEHt6eyArYrz/4q/mHjTHzayFqVHcUVdRqYdKDsA+oT1hVqwn5GHZarVsZ41pm2Msadtqkm94FqjQ5BDQqxU41O4nxgZYyHdL5J+7N4XFb2IzMU3lJ1TKBT+8jxBFCUoqI+nST2cIPYSRs1JvviyoLCPhfD/jYOljN1VVkZIwP8FHiyS1C3CWpIUD3AAQEtwQA2XE9lDVhU2AWlaxTOdY8Gd6uRWyuxx5+m8dFp+Gf9/9mRNIhNvYj88DVSuNTvpLLu6y4lZyu9rJapv/QYcvlnVHoY+etPaNR3h/WmYbWCGr2d+HtfoNJD1CZH1o3viqmE88DWZo7SUi99h1DjE8jcbyQ+vwT1GnJtEdYq1J97xEmSeOcspA6iBkeho4vaqVHUkbscKBtrUF7Oa2TCy52X4ty9qu8Q9A24D9RrkEiihsaAMVSqG1mrojIPBFWvlkFDdREX5/UwR1NL56ToTOLAdVRX/ttXXY+ahepJu+AFh1loBhcozrm/+gbdhyrXWziqsytwLeVl98fAsDu6igNgbUVQcbkUpLYfABXaVl5y1TvgKS7sbgX9vuIQOGm0WuHb5a9xFee3wUbWWmJxfrM5O9VWK3QxA1b4iv23dMXNNytG/l7I+TuBnn6oRBTvpo6QFSUw2qHTPeelOL9oZK2tABjbzjsN4ahOt1qRavlIIOUSyrOB0pLuh7x/r/kLkmfb56HW4kWF9tizwSv+XCRYigVP8QAS5XHYiur1bcUeuBAFznkb3K1ytRyE6F2RSASmnOL5xS7u7OEw+KJcmGlg2yjdJCHFSu/jcDgeu+1sX5jRw48tYCNrXZOLs+83XpmCtjanMC0RbhCdPNVN4/XnkdlvzhhZ67J/KxFa+7L9/dk05798Sp8BzvE57v9X0S29szN0Q0l1hcbbr8HmxsfAC4E3bJUFVsZ4EpgGTqjhW2BsHOZ/dxccO478cQXJ/aK36HngLSNrfdryclHgpgT6dDkBHAEOetO6qvqVZ5yOjQrgX5QGk4mlocvcAAAAAElFTkSuQmCC" alt="" />
                                <span className="percent text-white pl-2 font-weight-bold text-center">88%</span>
                                <p>Tomatometer</p>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-default">hhhhhhh</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" movie__detail__hinhAnh">
                    <img
                        className="" src={movieDetail.hinhAnh} alt={movieDetail.biDanh} />
                </div>
                {/* center */}
                <div className="container">
                    <div className="row ">
                        <div className="col-6 movie__detail__mota">
                            <h3>Content</h3>
                            <span className="">{movieDetail.moTa}</span>
                        </div>
                        <div className="col-6">
                        <span className="">{movieDetail.moTa}</span>
                        </div>
                    </div>
                </div>

                <hr />
                <h2>Showtime Info</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div
                                className="nav flex-column nav-pills text-left"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
                                    return (
                                        <a
                                            className="nav-link"
                                            id="v-pills-home-tab"
                                            data-toggle="pill"
                                            href={`#${heThongRap.maHeThongRap}`}
                                            role="tab"
                                            aria-controls="v-pills-home"
                                            aria-selected="true"
                                            key={'heThongRap-' + idx}
                                        >
                                            <img
                                                src={heThongRap.logo}
                                                width="40px"
                                                className="mr-2"
                                            />
                                            {heThongRap.tenHeThongRap}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
                                    return (
                                        <div
                                            className="tab-pane fade show"
                                            id={heThongRap.maHeThongRap}
                                            role="tabpanel"
                                            aria-labelledby="v-pills-home-tab"
                                            key={'heThongRap-' + idx}
                                        >
                                            {heThongRap.cumRapChieu.map((cumRap, key) => {
                                                return (
                                                    <div
                                                        className="text-left"
                                                        key={'cumrap-' + key}
                                                    >
                                                        {cumRap.tenCumRap}
                                                        <div className="row">
                                                            {cumRap.lichChieuPhim.map(
                                                                (lichChieu, key) => {
                                                                    return (
                                                                        <div
                                                                            className="col-3"
                                                                            key={'lichChieu-' + key}
                                                                        >
                                                                            <Link
                                                                                to={`/seat-plan/${lichChieu.maLichChieu}`}
                                                                            >
                                                                                {new Date(
                                                                                    lichChieu.ngayChieuGioChieu
                                                                                ).toLocaleTimeString()}
                                                                            </Link>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    movieDetail: state.movieDetailReducer.movieDetail,
});

const mapDispatchToProps = (dispatch) => ({
    fetchMovieDetail: (movieId) => dispatch(actFetchMovieDetailApi(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
