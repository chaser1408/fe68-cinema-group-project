import {
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_ALL_MOVIE_FAILED,
  PHIM_DANG_CHIEU,
  PHIM_SAP_CHIEU
  // START_LOADING,
  // STOP_LOADING,
} from "container/clients/MovieList/module/types";

const initialState = {
  listMovie: [],
  errors: {},
  isLoading: false,
  dangChieu: true,
  sapChieu: false,
  arrFilmDefault: [],
  // listDangChieu: [],
  // listSapChieu: [],
};

const movieReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_ALL_MOVIE_SUCCESS: {
       state.listMovie = action.payload;
       state.arrFilmDefault =state.listMovie;
      // state.listMovie= action.listMovie.filter(movie=> movie.sapChieu===state.dangChieu
      //   && movie.dangChieu===state.sapChieu)
      return { ...state };
    }
    case PHIM_SAP_CHIEU:{
  //     state.sapChieu = !state.sapChieu;
  // console.log('sap chieu', action)
  //     state.listMovie = action.arrFilmDefault.filter(movie => movie.sapChieu===state.sapChieu)
  //     return { ...state };

        // state.dangChieu = !state.dangChieu;
        console.log('dang chieu',action)

        // cái chỗ render dang chiếu và sắp chiếu nằm ở đâu bà
        // này nó chi dispatch cai actionthoi
        // nhưng mà dispatch xong phải chỗ cho nó render ra chứ
        // à là bà đang làm kiểu dang chieu true hoặc sắp chiếu true thì đâu nhảy qua đó hả dung r
  
        // const newListMovie = action.payload.arrFilmDefault.filter((movie)=> {return movie.dangChieu===state.dangChieu})
  
        // this.state.listMovie = newListMovie;
        const newListMovie = state.listMovie;
        // note: hạn chế xử trên mảng nhận đc từ api 
        const movieShowing = [];
  
        for(let i = 0; i < newListMovie.length; i++) {
          // ủa sao lạ v, đúng ko ta
          if(newListMovie[i].sapChieu === true){
            movieShowing.push(newListMovie[i])
          }
          // là mỗi lần nhấn nút đang chiếu hoặc sắp chiếu là sẽ call api 1 lần nữa à
          // hay bà muốn lưu nó tại storage, trong cai phim co sap chieu tra ve ngay no la dc
          // tại nếu hạn chế việc phải gọi lại call, muốn có liền như bà nói
          // phải tạo ra 2 cái mảng khác nhau, 1 cái sẵn đang chiếu và 1 cái sắp chiếu
        }
  
        state.movieList = movieShowing;
        
        console.log(state.movieList, 'listSapChieu');
  
        return { ...state  };

    }
    case PHIM_DANG_CHIEU:{
      // state.dangChieu = !state.dangChieu;
      console.log('dang chieu',action)

      // cái chỗ render dang chiếu và sắp chiếu nằm ở đâu bà
      // này nó chi dispatch cai actionthoi
      // nhưng mà dispatch xong phải chỗ cho nó render ra chứ
      // à là bà đang làm kiểu dang chieu true hoặc sắp chiếu true thì đâu nhảy qua đó hả dung r

      // const newListMovie = action.payload.arrFilmDefault.filter((movie)=> {return movie.dangChieu===state.dangChieu})

      // this.state.listMovie = newListMovie;
      const newListMovie = state.listMovie;
      // note: hạn chế xử trên mảng nhận đc từ api 
      const movieShowing = [];

      // mình chỉ quan tâm là thg ở đang chiếu nó phải là true thôi, hoặc ngược lại

      // giờ phải làm sao để khi nhận, chuyển nút, còn cái list thì nó tự render lại
      // ong test cai editchua
      // tối hôm trước có xem video thấy có chỉ movie bên admin
      // còn user tui phải tự xử, mà nó bị gì vậy, 

      for(let i = 0; i < newListMovie.length; i++) {
        // ủa sao lạ v, đúng ko ta
        if(newListMovie[i].dangChieu === true){
          movieShowing.push(newListMovie[i])
        }
        // là mỗi lần nhấn nút đang chiếu hoặc sắp chiếu là sẽ call api 1 lần nữa à
        // hay bà muốn lưu nó tại storage, trong cai phim co sap chieu tra ve ngay no la dc
        // tại nếu hạn chế việc phải gọi lại call, muốn có liền như bà nói
        // phải tạo ra 2 cái mảng khác nhau, 1 cái sẵn đang chiếu và 1 cái sắp chiếu
      }

      state.movieList = movieShowing;
      
      console.log(state.movieList, 'listDangChieu');

      return { ...state  };

    }

    case FETCH_ALL_MOVIE_FAILED: {
      state.errors = action.payload;
      return { ...state };
    }
    
    
    // case START_LOADING: {
    //   state.isLoading = true;
    //   return { ...state };
    // }
    // case STOP_LOADING: {
    //   state.isLoading = false;
    //   return { ...state };
    // }
    default:
      return state;
  }
};

export default movieReducer;
