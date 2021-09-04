import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actfetchMovieUserLogin } from "./modules/actions";

export default function LoginUser(props) {
  //   const [thongTinDangNhap, setThongTinDangNhap] = useState();

  //   const user = useMemo((thongTinDangNhap) => ({
  //     taiKhoan: "",
  //     matKhau: "",
  //     email: "",
  //     soDt: "",
  //     maNhom: "",
  //     hoTen: "",
  //   }));

  const dispatch = useDispatch();

  const { loading, userLogin } = useSelector((state) => state.UserLoginReducer);
  console.log(userLogin, "sau khi lay duoc");
  // useEffect(() => {
  //   dispatch(actfetchMovieUserLogin(formik.values));
  // }, []);

  const formik = useFormik({
    initialValues: {
      taikhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      // const action = actfetchMovieUserLogin();
      dispatch(actfetchMovieUserLogin(formik.values));
      console.log(values, "nguoi dung nhap");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <li>
        <input
          name="taiKhoan"
          onChange={formik.handleChange}
          type="text"
          className="text"
          placeholder="taiKhoan"
        />
      </li>
      <li>
        <input
          name="matKhau"
          onChange={formik.handleChange}
          type="password"
          //  autoComplete="current-password"
          placeholder="matKhau"
        />
      </li>
      <li>
        <input
          name="email"
          onChange={formik.handleChange}
          type="email"
          //  autoComplete="current-password"
          placeholder="email"
        />
      </li>
      <li>
        <input
          name="soDt"
          onChange={formik.handleChange}
          type="text"
          //  autoComplete="current-password"
          placeholder="soDt"
        />
      </li>
      {/* <li>
                <input name="maNhom" 
                onChange={formik.handlechange}
                 type="maNhom"
                //  autoComplete="current-password"
                 placeholder="maNhom" />
            </li> */}
      <li>
        <input
          name="hoTen"
          onChange={formik.handleChange}
          type="text"
          //  autoComplete="current-password"
          placeholder="hoTen"
        />
      </li>
      <div className="submit">
        <button type="submit">DN</button>
      </div>
    </form>
  );
}
