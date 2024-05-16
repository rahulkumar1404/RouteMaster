import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Child component for SearchBus component
 * Renders list of buses on search
 */
class BusList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buses : null
        }
    }

    componentDidMount() {
        this.setState({
            buses : this.props.buses
        });
        console.log("bus list : " + this.props.buses)
    }

     /**
     * this method calculate travel duration
     */
      calculateDuration = (f) => {
        let t1 = new Date('1970-01-01T' + f.departureTime + 'Z')
        let t2 = new Date('1970-01-01T' + f.arrivalTime + 'Z')
        let hour = t1.getUTCHours() - t2.getUTCHours()
        let min = t1.getUTCMinutes() - t2.getUTCMinutes()

        if( hour < 0)
        {
            hour = 12+hour
        }
        if(min < 0){
            min = 60+min
        }

        return (hour +'hr '+min + 'min')

    }

    /** 
     * Store bus data in local storage and redirects to Booking
     */
    handleBus = (bus) => {
        localStorage.setItem('plane', JSON.stringify(bus));
        this.props.history.push('/booking');
    }

    render() {
        if(!this.state.buses)
            return null;
 
        const buslist = this.state.buses.map(f => {
            return (
                <div className="card mr-4 mt-4" style={{width: 350, background: "#ffffff"}}>
                    
                    <div className="card-header">
                        <h5>Bus {f.busNumber}</h5>
                    </div>
                    
                    <div className="card-body">
                    <div className="row mb-2">
                        <div className="col fw-bold">Source</div>
                        <div className="col">{f.source}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col fw-bold">Destination</div>
                        <div className="col">{f.destination}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col fw-bold">Travel Date</div>
                        <div className="col">{f.travelDate}</div>
                    </div>  
                    <div className="row mb-2">
                        <div className="col fw-bold">Starting Time</div>
                        <div className="col">{f.arrivalTime}</div>
                    </div>    
                    <div className="row mb-2">
                        <div className="col fw-bold">Droping Time</div>
                        <div className="col">{f.departureTime}</div>
                    </div>  
                    <div className="row mb-2">
                        <div className="col fw-bold">Duration</div>
                        <div className="col">{this.calculateDuration(f)}</div>
                    </div>  
                    <div className="row mb-2">
                        <div className="col fw-bold">Fare</div>
                        <div className="col">{f.price}</div>
                    </div>  
                    <div className="row mb-2">
                        <div className="col fw-bold">Available Seats</div>
                        <div className="col">{f.availableSeats}</div>
                    </div>  
                    <br/>
                        <button className="btn btn-dark mr-3" onClick={() => this.handleBus(f)} >Book</button>
                    </div>
                                            
                </div>
            )
        });

        
        return (
            <div>
                <h4>Scheduled Bus</h4>
                <div style={styling.wrapper}>
                    {buslist}
                </div>
            </div>
            
        );
        
        
    }
}

let styling = { 
    wrapper : {
        display : "flex", 
        flexWrap: "wrap"
    }
}

export default withRouter (BusList);