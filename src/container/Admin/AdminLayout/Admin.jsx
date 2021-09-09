import React from 'react'
import './Admin.scss'
import { Link } from "react-router-dom";
import MovieManager from "../MovieManager/MovieManager"


export default function Home() {
    return (
        <div>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="las la-clinic-medical" /> <span>Cinema Booking</span></h2>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href className="active"><span className="las la-home" />
                                <span>Xin chào</span></a>
                        </li>
                        <li>

                            <Link className="nav-link" to="/Admin/MovieManager">
                                Movie Manager
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/MovieManager">
                              hhhhhhhhh
                            </Link>

                        </li>

                    </ul>
                </div>
            </div>




            <div className="main-content">
                <header>
                    <h2>
                        <label htmlFor="nav-toggle">
                            <span className="las la-bars" />
                        </label> Tablero
                    </h2>
                    <div className="search-wrapper">
                        <span className="las la-search" />
                        <input type="search" placeholder="Buscar aquí" />
                    </div>
                    <div className="user-wrapper">
                        <img src="img/Avatar.png" width="40px" height="40px" alt />
                        <div>
                            <h4>Administrador</h4>
                            <small>Super Admin</small>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="cards1">
                        <div className="card-single1">
                            <MovieManager/>
                        </div>
                    </div></main>

            </div>
        </div>


    )
}
