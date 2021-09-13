import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actFetchMovieAdd } from './modules/action'
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

function AddMovie(props) {
  const dispatch = useDispatch();
  //  const { addMovie } = useSelector(state => state.addMovieManagerReducer)
  //  console.log(addMovie);
  //  useEffect((values) => {
  //   dispatch(actFetchMovieAdd(values))
  // }, [])

  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('')
  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: ''
    },

    onSubmit: (values) => {
      // let sampleArr = [values];
      // console.log(sampleArr);
      // có thể phải gửi lên với dạng mảng

      // console.log('value 40 ----', values);
      values.maNhom= GROUP_ID;
    
      // console.log('mang' ,values);
      //tao đối tương
      let formData = new FormData();
      formData.append('tenPhim', formik.values.tenPhim);
      console.log(formData);
      for (let key in values) {
        // formData.append(key, values[key]);
        // console.log('key', key);
        // // khong append dc?? k append no moi lay dc
        // // console.log('FormData',formData.get('tenPhim'));
        // console.log('FormData',formData.get('hinhAnh'));
        // // hoặc từ đây -=-----
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
          console.log(formData);
        } else{
          formData.append('File', values.hinhAnh, formik.hinhAnh.name);
        }
      }
      // hình như code dừng chạy ở đây --------
      // formData.append('tenPhim', formik.values.tenPhim)
      console.log('formData', formData.get('tenPhim'));
      // console.log(addMovie);
      console.log(formData);

      // console.log('FormData --',formData.get('File'));
      dispatch(actFetchMovieAdd(formData));
      // console.log('value 68 - dispatch', values);
    }
  })

  const handleChangeDatePicker = (value) => {
    console.log('datepickerchange');
    let ngayKhoiChieu = moment((value).format('DD/MM/YYYY'))
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu._d);
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
        <Form.Item label="Tên Phim" >
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input  name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả" >
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày Khởi chiếu">
          <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Đang khởi Chiếu" valuePropName="checked">
          <Switch name="dangChieu" onChange={(value) => { formik.setFieldValue('dangChieu', value) }} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked">
          <Switch name="sapChieu" onChange={(value) => { formik.setFieldValue('sapChieu', value) }} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch name="Hot" onChange={(value) => { formik.setFieldValue('hot', value) }} />
        </Form.Item>
        <Form.Item label="Số Sao">
          <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
        </Form.Item>
        <Form.Item label="Hình Ảnh">
          <Input type="file" onChange={handleChangeFile} />
          <img src={imgSrc} alt="" width={150} height={150} />
        </Form.Item>
        <Form.Item label="Tac vụ">
          <button type="submit" className="btn btn-default" value=""> Thêm</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddMovie;