import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { actFetchMovieManager } from './modules/action'
import './MovieManager.scss';

const { Header, Content, Footer, Sider } = Layout;

export default function QuanLyPhim() {
  const dispatch = useDispatch();
  const movieManager = useSelector(state => state.movieManagerReducer)
  useEffect(() => {
    dispatch(actFetchMovieManager())

  }, [])

  return (



    <div>hhcskjdfdgdfgfkkjghkfkhkfghlgfklhlklgjkllkghkjkhl;kl;h</div>

  )
}
