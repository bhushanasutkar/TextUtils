import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'light'}`}>
                                <input onClick={props.togglemode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{`${props.mode === 'light' ? 'DarkModeText' : 'LightModeText'}`}</label>
                                {/* <input type="radio"  onClick={props.hayyg}className="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked />
                                <label className="btn btn-outline-success" htmlFor="success-outlined">Green</label>
                                <input type="radio" onClick={props.hayyd} className="btn-check mx-2 " name="options-outlined" id="success-outlined" autocomplete="off" checked />
                                <label className="btn btn-outline-danger mx-2" htmlFor="success-outlined">Red</label> */}
                            </div>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'TextUtils'
}