import React, { Component, useEffect} from 'react'
import { useFormik } from 'formik';
import { connect, useDispatch, useSelector} from 'react-redux';
import {actfetchMovieUserLogin} from '../loginUser/modules/action'


export default function LoginUser(props) {
    const dispatch =useDispatch();
    useSelector(state=> state.UserLoginReducer);
    useEffect(() => {
        dispatch(actfetchMovieUserLogin());
      
    }, []);
    const formik = useFormik({
        initialValues: {
            taikhoan: '',
            matkhau: '',
           
        },
        onSubmit: values => {
            // const action = actfetchMovieUserLogin();
            // dispatch(action);
    
            console.log(values)
        }
    })
 
    return (
        <form onSubmit={formik.handleSubmit}>
            <li>
                <input name="taikhoan"
                onChange={formik.handleChange} 
                type="text" className="text"
                 defaultValue="taikhoan"
                  />
            </li>
            <li>
                <input name="matkhau" 
                onChange={formik.handleChange}
                 type="password"
                //  autoComplete="current-password"
                 defaultValue="matkhau" />
            </li>
            {/* <li>
                <input name="email" 
                onChange={formik.handleChange}
                 type="email"
                //  autoComplete="current-password"
                 placeholder="email" />
            </li>
            <li>
                <input name="soDt" 
                onChange={formik.handleChange}
                 type="text"
                //  autoComplete="current-password"
                 placeholder="soDt" />
            </li> */}
            {/* <li>
                <input name="maNhom" 
                onChange={formik.handlechange}
                 type="maNhom"
                //  autoComplete="current-password"
                 placeholder="maNhom" />
            </li> */}
            {/* <li>
                <input name="hoTen" 
                onChange={formik.handleChange}
                 type="text"
                //  autoComplete="current-password"
                 placeholder="hoTen" />
            </li> */}
            <div className="submit">
                <button type="submit">DN</button>
            </div>
        </form>



    )
}

// const mapDispatchToProps = dispatch => ({
//     fetchLoginUser: () => dispatch(actFetchLoginUser()),
// })

// export default connect(null, mapDispatchToProps)(LoginUser);