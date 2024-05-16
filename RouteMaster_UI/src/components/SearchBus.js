import React, { Component } from 'react';
import BusList from './BusList';
import BusServiceRest from '../services/BusServiceRest';
import search from '../assets/logo/magnifying-glass.png';

/**
 * 
 * This component searches bus based on source, destibnation and date
 * BusServiceRest: Service for fetching buses
 */
class SearchBus extends Component {
    constructor(props) {
        super(props);
        this.service = new BusServiceRest();
        this.flag = false
        this.state = {
            source : "",
            destination: "",
            travelDate: undefined,
            searched : false
        }
    }

    componentDidMount(){
        this.setState({
            searched: false
        })
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    /**
     * This method interact with service to fetch buses details
     */
    getBusesList = () => {
        this.setState({
            searched: false
        });
        const s = this.state.source;
        const d = this.state.destination;
        const t = this.state.travelDate;

        this.service.getBusesForUser(s,d,t).then(data => {
            if(data.length>0){
                this.setState({
                    buses : data,
                    searched : true
                });
               
            }
            else{
                alert('No Buses Found!!')
        }
            // console.log(this.state.buses);
        })
    }

    render() {
        return (
            <div className="container-fluid p-4 m-3">
                <h2 style={styling.heading}>Search for buses</h2>
                <div className="form-inline">
                    <div className="input-group mb-2 mr-sm-2">
                        {/* <!-- Drop down for source --> */}
                        <select className="custom-select my-1 mr-sm-2" id="source" name="source" onClick={this.handleInput} required>
                            <option value="Chennai" onClick={this.handleInput}>Chennai</option>
                            <option value="Delhi" onClick={this.handleInput}>Delhi</option>
                            <option value="Mumbai" onClick={this.handleInput}>Mumbai</option>
                            <option value="Kolkata" onClick={this.handleInput}>Kolkata</option>
                            <option value="Goa" onClick={this.handleInput}>Goa</option>
                            <option value="Pune" onClick={this.handleInput}>Pune</option>
                            <option value="Jaipur" onClick={this.handleInput}>Jaipur</option>
                            <option value="Bangalore" onClick={this.handleInput}>Bangalore</option>
                            <option value="Cochin" onClick={this.handleInput}>Cochin</option>
                            <option value="Ahmadabad" onClick={this.handleInput}>Ahmadabad</option>
                        </select>
                    </div>    
                        {/* <!-- Drop down for destination --> */}
                    <div className="input-group mb-2 mr-sm-2">
                        <select className="custom-select my-1 mr-sm-2" name="destination" onClick={this.handleInput} required>
                            <option value="Chennai" onClick={this.handleInput}>Chennai</option>
                            <option value="Delhi" onClick={this.handleInput}>Delhi</option>
                            <option value="Mumbai" onClick={this.handleInput}>Mumbai</option>
                            <option value="Kolkata" onClick={this.handleInput}>Kolkata</option>
                            <option value="Goa" onClick={this.handleInput}>Goa</option>
                            <option value="Pune" onClick={this.handleInput}>Pune</option>
                            <option value="Jaipur" onClick={this.handleInput}>Jaipur</option>
                            <option value="Bangalore" onClick={this.handleInput}>Bangalore</option>
                            <option value="Cochin" onClick={this.handleInput}>Cochin</option>
                            <option value="Ahmadabad" onClick={this.handleInput}>Ahmadabad</option>
                        </select>
                    </div>    
                        
                    <div className="input-group mb-2 mr-sm-2">    
                        <input className="my-1 p-2 border border-darken-2 rounded" type="date" value={this.state.travelDate}
                        name="travelDate" onChange={this.handleInput} required />
                    </div>
                    <button onClick={this.getBusesList} className="btn mb-2 mr-sm-2" style={styling.icon}>
                        <img src={search} height="25" />
                    </button>
                </div>
 
                {this.state.searched && <BusList buses={this.state.buses}  />}
               
            </div>
        );
    }
}

let styling = {
    heading : {
        color : "#333333",
        fontFamily : "Verdana",
        marginBottom : 20
    },
    icon : {
       
    }
}

export default SearchBus;