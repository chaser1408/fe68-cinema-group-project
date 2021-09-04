import axios from 'axios';

export const loginService = (user) => {
    const URL = `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;
    const promise = axios({
        method: 'POST',
        url: URL,
        headers: {
            TokenCybersoft:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk',
        },
        data: user,
    });
    promise
        .then((rs) => {
            console.log('thong tin dang nhap', rs);
        })
        .catch((err) => {
            console.log('that bai:', err);
        });
    return promise;
};
