import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actFetchMovieManager } from './modules/action'
import { Table } from 'antd';
import './MovieManager.scss';
import { NavLink } from "react-router-dom";
import {EditOutlined,DeleteOutlined} from "@ant-design/icons";


export default function QuanLyPhim(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { movieManager } = useSelector(state => state.movieManagerReducer)
  console.log(movieManager);
  useEffect(() => {
    dispatch(actFetchMovieManager())
  }, [])

  const columns = [
    {
      title: 'maPhim',
      dataIndex: 'maPhim',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend']
    },
    {
      title: 'tenPhim',
      dataIndex: 'tenPhim',
      sorter: {
        compare: (a, b) => a.tenPhim - b.tenPhim,
        multiple: 1,
      },
    },
    {
      title: 'biDanh',
      dataIndex: 'biDanh',
      sorter: {
        compare: (a, b) => a.moTa - b.moTa,
        multiple: 2,
      },
    },
    {
      title: 'moTa',
      dataIndex: 'moTa',
      sorter: {
        compare: (a, b) => a.moTa - b.biDanh,
        multiple: 2,
      },
    },
    {
      title: 'hinhAnh',
      dataIndex: 'hinhAnh',
      render: (text, film) => {
        return <Fragment>
          <img src={film.hinhAnh} width={50} height={50} alt="" />
        </Fragment>
      },
    },
    {
      title: 'hành động',
      dataIndex: 'hành động',
      render: (text, film) => {
        return <Fragment>
          <NavLink className="bg-dark text-white" to="/Admin/MovieManager/edit" ><EditOutlined/>
          </NavLink>
          <NavLink className=" bg-dark ml-2" to="/Admin/MovieManager/delete">
            <DeleteOutlined/>
          </NavLink>
        </Fragment>

      },
    }
  ];

  const data = movieManager;

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  return (
    <div>
      <button>Thêm Phim</button>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>

  )
}
