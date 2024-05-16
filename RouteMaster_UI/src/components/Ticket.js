/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import '../assets/css/TicketStyle.css';
import busBG from "../assets/images/bus.jpg";
import Footer from './Footer';
import Header from './Header';
// import { send } from 'emailjs-com';



class Ticket extends Component {
    
    constructor(props){
        super(props)
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
        else{
        if(localStorage.getItem('ticket') !==null){
            console.log('if')
            console.log(localStorage.getItem('ticket'))
            this.ticket=JSON.parse(localStorage.getItem('ticket'))
            this.airplane = JSON.parse(localStorage.getItem('plane'))
            // localStorage.removeItem('ticket')
        }
        else{
            console.log('else')
            this.ticket=JSON.parse(localStorage.getItem('view-ticket'))
            localStorage.removeItem('view-ticket')
        }
        console.log("Ticket: "+ this.ticket)
        this.passengers = this.ticket.booking.passengers
        console.log("TN: "+ this.ticket.ticketNumber)
        console.log("Source: " + this.ticket.booking.bus.source)
        console.log("Dst: " + this.ticket.booking.bus.destination)
        console.log("AR Time: "+ this.ticket.booking.bus.arrivalTime)
        console.log("DR Time: "+ this.ticket.booking.bus.departureTime)
        console.log("Booking Date: "+ this.ticket.booking_date)
        console.log("Total Pay: "+ this.ticket.total_pay)
        console.log("Passengers: "+ JSON.stringify(this.passengers))
    }
        
    }

    componentDidMount(){
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
       
    }




    render() {
        if(!this.ticket){
            return null
        }

        this.psg_name = this.passengers.map(psg => {
                        return(
                            <span>{psg.pname} <br/></span> 
                            
                            )    
                        })

        this.psg_age = this.passengers.map(psg => {
                        return(
                            <span>{psg.age}<br/></span> 
                            )    
                        })

        this.psg_gender = this.passengers.map(psg => {
            return(
                <span>{psg.gender}<br/></span> 
                )    
            })
        
        
    return (

       <div class='pt-3'>
        <Header />
        <div class="py-5" style={{backgroundImage: `url(${busBG})`,backgroundSize:'cover' ,overflow: 'hidden', height: '700px'}}>
        
            <div style={{textAlign:'right', marginRight:'90pt', marginTop:'130pt'}}>
            <ReactToPrint 
                // trigger={() => <a class="btn text-light bg-dark" role="button" href="#">Print The Ticket</a>}
                trigger={() => <a class="btn btn btn-primary" role="button" href="#">Print The Ticket</a>}
                content={() => this.componentRef}
            />
            </div>

            <div class="box pt-2" ref={el => (this.componentRef = el)}>
            <div class="ticket">
                <span class="buseasy">RouteMaster</span>
                <span class="boarding">Boarding : {this.ticket.booking.bus.source}</span>
                <div class="content">
                <span class="jfk">{this.ticket.booking.bus.source}</span>
    
                <span class="sfo">{this.ticket.booking.bus.destination}</span>
                
                <div class="sub-content">
                    <span class="watermark">RouteMaster</span>
                    <span class="name">Passenger Name<br />
                    {this.psg_name}
                    </span>

                    <span class="age">Passenger Age<br />
                    {this.psg_age}
                    </span>

                    <span class="gender">Passenger Gender<br />
                    {this.psg_gender}
                    </span>

                    <span class="bus">BusNo.&deg;<br />
                    <span>{this.ticket.booking.bus.busNumber}</span> <br />
                    </span>

                    <span class="gate">TicketNo.&deg; <br /><span>{this.ticket.ticketNumber}</span></span>
                    
                    <span class="amount">Amount Paid<br />
                        <span>₹{this.ticket.total_pay}</span> <br />
                    </span>

                    <span class="boardingtime">Departure Time<br /><span>{this.ticket.booking.bus.arrivalTime}</span></span>
                    <span class="traveldate">Travel Date<br /><span>{this.ticket.booking.bus.travelDate}</span></span>
                    <span class="departuretime">Arrival Time<br /><span>{this.ticket.booking.bus.departureTime}</span></span>
                
                </div>
                </div>
                <div class="barcode"></div>
            </div>
            
                <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            </div>
            
            </div>
            <Footer />
            </div>
        )
    }
}
export default Ticket;