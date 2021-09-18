import movieApi from "apis/movieApi";
export const taoLichChieu = (layThongTinLichChieu) => {
    return async (dispatch) => {
        try {
            let res = await movieApi.taoLichChieu(layThongTinLichChieu);
            console.log(res)

        } catch(error) {
            console.log(error.response?.data)

        }

    }
}