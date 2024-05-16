import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import buslogo from "../assets/logo/buslogo.png";
import adminBG from '../assets/images/travel1.jpg';
import Header from './Header';
import Footer from './Footer';

/**
 * 
 * this component renders home page for admin
 */
function Admin(props) {
    const history = useHistory();

    if(!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).isadmin === 0  )
    {
        return  alert('Access Denied'),history.push('/'),null
    }

    else{
    return (
        <div style={{paddingTop : 70}}>
            <Header />
        <div className="p-3" style={styling.wrapper}>
            
            <div className="card m-auto" style={{width: "23rem"}}>
                <img className="card-img-top m-auto mt-3 w-50" src={buslogo} alt="admin" />
                <div className="card-body">
                    <h5 className="card-title">Welcome </h5>
                    <p className="card-text">As Admin you can add schedules for bus, modify and delete the schedules </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{padding:'10px',backgroundColor:'#90EE90'}}>
                        <Link className="card-link" to="/addBus">Add Buses</Link>
                    </li>
                    <li className="list-group-item" style={{padding:'10px',backgroundColor:'#90EE90'}}>
                        <Link className="card-link" to="/allBuses">All Buses</Link>
                    </li>
                    <li className="list-group-item"></li>
                </ul>
            </div>
            
        </div>
            <Footer/>
        </div>
    );
    }
};

let styling = {
    wrapper : {
        height : "80vh",
        background: `url(${adminBG})`
    }
}

export default Admin;