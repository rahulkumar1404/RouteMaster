import React, { Component } from 'react';
import busBG from "../assets/images/bus.jpg";
import BookingService from '../services/BookingService';
import Footer from './Footer';
import Header from './Header';

class Tickets extends Component {
    state ={multiple_ticket:[]}
    constructor(props){
        super(props)
        this.service = new BookingService();
        this.tickets = []
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
        else{
            this.service.getTickets().then(response => {
                console.log("Tickets page : " +response)
                this.tickets = (response.data)
                console.log("Tickets: "+ this.tickets)
            });
        }
        
    }

    componentDidMount(){
        
    }

    showTicket(x) {
        console.log(x)
        localStorage.removeItem('ticket')
        localStorage.setItem('view-ticket',JSON.stringify(x))
        this.props.history.push('/ticket')
    }
    
    render(){
        if(!this.tickets){return null}

        const busList = this.tickets.map((x)=>
                <tr key={x.ticketNumber}>
                    <td>{x.ticketNumber}</td>
                    <td>{x.booking.bus.source}</td>
                    <td>{x.booking.bus.destination}</td>
                    <td>{x.booking.bus.travelDate}</td>
                    <td>{x.booking.bookingDate}</td>
                    <td><button className="btn btn-outline-dark" onClick={() => this.showTicket(x)}>View Ticket</button></td>
                </tr>
        )

        return (
            <div class='pt-5'>
            <Header />  
            
        <div class='pt-5' style={{backgroundImage: `url(${busBG})`,backgroundSize:'cover',overflow: 'hidden', height: '700px'}}>
        
            <div class="row mb-4">
                <div class="col-lg-12 mx-auto text-center">
                <h1 class="display-6" style={{color:'black', fontWeight:'700'}}>My Bookings</h1>
                </div>
            </div> 

			<div class="row">
				<div class="col-md-8 mx-auto">
					<div class="card ">
					    <div class="card-header">
                            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active pt-3">
                                        <table class="table table-striped">
                                        <tr class="thead-dark">
                                            <th>Ticket Number</th>
                                            <th>Source</th>
                                            <th>Destination</th>
                                            <th>Travel Date</th>
                                            <th>Booking Date</th>
                                            <th>Details</th>
                                        </tr>
                                            {busList}
                                        </table>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
	    </div>
        <Footer />
        </div>
        );
    }
}

export default Tickets;