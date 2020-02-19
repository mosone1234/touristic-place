import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-brand color-font-1">
                        <img src="http://angular-material.fusetheme.com/assets/images/logos/fuse.svg" alt="" width="40px" height="40px" />
                        <a>sidebar</a>
                        <div id="close-sidebar">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-header d-flex justify-content-center color-font-1">
                            <div className="user-info">
                                <span className="user-name">Charlie Adams</span>
                                <span className="user-role">adams.charlie@mail.com</span>
                            </div>
                        </div>
                        <div className="avatar-container">
                            <img src="http://angular-material.fusetheme.com/assets/images/avatars/Velazquez.jpg" alt="" className="avatar" />
                        </div>
                        <div className="sidebar-menu d-flex other-color-1">
                            <ul>
                                <li className="header-menu">
                                    <span>General</span>
                                </li>
                                <li>
                                    <div className="header-line"></div>
                                </li>
                                <li className="sidebar-dropdown cursor-pointer">
                                    <a id="dashboard">
                                        <i id="dashboard" className="fa fa-tachometer-alt"></i>
                                        <span id="dashboard">Dashboard</span>
                                        <span id="dashboard" className="badge badge-pill badge-warning">New</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul className="list-li">
                                            <li>
                                            </li>
                                            <li>
                                            </li>
                                            <li>
                                                <a>Categories</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-shopping-cart"></i>
                                        <span>E-commerce</span>
                                        <span className="badge badge-pill badge-danger">3</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Products</a>
                                            </li>
                                            <li>
                                                <a href="#">Orders</a>
                                            </li>
                                            <li>
                                                <a href="#">Credit cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="far fa-gem"></i>
                                        <span>Components</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">General</a>
                                            </li>
                                            <li>
                                                <a href="#">Panels</a>
                                            </li>
                                            <li>
                                                <a href="#">Tables</a>
                                            </li>
                                            <li>
                                                <a href="#">Icons</a>
                                            </li>
                                            <li>
                                                <a href="#">Forms</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-chart-line"></i>
                                        <span>Charts</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Pie chart</a>
                                            </li>
                                            <li>
                                                <a href="#">Line chart</a>
                                            </li>
                                            <li>
                                                <a href="#">Bar chart</a>
                                            </li>
                                            <li>
                                                <a href="#">Histogram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown cursor-pointer">
                                    <a id="maps">
                                        <i id="maps" className="fa fa-globe"></i>
                                        <span id="maps">Maps</span>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Google maps</a>
                                            </li>
                                            <li>
                                                <a href="#">Open street map</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-menu">
                                    <span>Extra</span>
                                </li>
                                <li>
                                    <div className="header-line"></div>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-book"></i>
                                        <span>Documentation</span>
                                        <span className="badge badge-pill badge-primary">Beta</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-calendar"></i>
                                        <span>Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-folder"></i>
                                        <span>Examples</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    };
}

export default Sidebar;