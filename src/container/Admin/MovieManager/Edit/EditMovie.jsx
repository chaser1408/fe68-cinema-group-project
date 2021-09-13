import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actFetchMovieEdit, CapNhatPhimUpload } from './modules/action'
import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { GROUP_ID } from 'settings/apiConfig';

function EditMovie(props) {
    const dispatch = useDispatch();
    const { movieInfor } = useSelector(state => state.editMovieInforReducer);
    console.log("movieInfor",movieInfor);
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(actFetchMovieEdit(id))
    }, [])

    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            tenPhim: movieInfor?.tenPhim,
            trailer: movieInfor?.trailer,
            moTa: movieInfor?.moTa,
            ngayKhoiChieu: movieInfor.ngayKhoiChieu,
            dangChieu: movieInfor?.dangChieu,
            sapChieu: movieInfor?.sapChieu,
            hot: movieInfor.hot,
            maNhom:'GP1',
            danhGia: movieInfor?.danhGia,
            hinhAnh: null,
        },

        onSubmit: (values) => {
            console.log(values);
            values.maNhom = GROUP_ID;
            //   dispatch(actFetchMovieAdd(values));
            console.log(values);
            //tao đối tương
            let formData = new FormData();
            for (let key in values) {
          
             formData.append(key, values[key]);

              if (key == 'hinhAnh') {
                formData.append((key, values[key]));
              } else if (values.hinhAnh !== null) {
                formData.append('File', values.hinhAnh, formik.hinhAnh.name);
              }
            }
            dispatch(CapNhatPhimUpload(formData));
        }
    })

    const handleChangeDatePicker = (value) => {
        // console.log('datepickerchange');
        formik.setFieldValue('ngayKhoiChieu', moment((value).format('YYYY/MM/DD')));
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }
    const handleChangeFile = (e) => {
        //lay file ra tu e
        let file = e.target.files[0];
        if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                console.log(e.target.result);
                setImgSrc(e.target.result);
            }
            console.log('file', file);
        }
        formik.setFieldValue('hinhAnh', file)
    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên Phim">
                    <Input   name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim}/>
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input   name="trailer" onChange={formik.handleChange} value={formik.values.trailer}/>
                </Form.Item>
                <Form.Item label="Mô tả" >
                    <Input  name="moTa" onChange={formik.handleChange} value={formik.values.moTa}/>
                </Form.Item>
                <Form.Item label="Ngày Khởi chiếu">
                    <DatePicker  onChange={handleChangeDatePicker} format="YYYY/MM/DD" value={moment(formik.values.ngayKhoiChieu,'YYYY/MM/DD')} />
                </Form.Item>
                <Form.Item label="Đang khởi Chiếu" valuePropName="checked">
                    <Switch name="dangChieu" onChange={(value) => { formik.setFieldValue('dangChieu', value) }} checked={formik.values.dangChieu}/>
                </Form.Item>
                <Form.Item label="Sắp Chiếu" valuePropName="checked">
                    <Switch name="sapChieu" onChange={(value) => { formik.setFieldValue('sapChieu', value) }}checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch name="Hot" onChange={(value) => { formik.setFieldValue('hot', value) }} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Số Sao">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia}/>
                </Form.Item>
                <Form.Item label="Hình Ảnh">
                    <Input type="file" onChange={handleChangeFile} />
                    <img src={imgSrc===''? movieInfor.hinhAnh: imgSrc} alt="" width={150} height={150}  />
                </Form.Item>
                <Form.Item label="Tac vụ">
                    <button type="submit" className="btn btn-default" value="">updtae</button>
                </Form.Item>
            </Form>
        </>
    );
};
export default EditMovie;