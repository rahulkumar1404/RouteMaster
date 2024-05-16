import React from 'react';
import busmove from '../assets/images/busmove.jpg';
import busservice from '../assets/images/busservice.jpg';
import busonlineticket from '../assets/images/bustonlinetickettwo.jpg';
import busseats from '../assets/images/seatsinbus.jpg';
import Corousal from './Corousal';
import Footer from './Footer';
import Header from './Header';
import SearchBus from './SearchBus';

/** 
 * 
 * This component will render Home page for the app 
 * Sub Components : Corousal, SearchBus, Header, Footer
*/

const features = [
    {
        image : busmove,
        feature : "Memorable Travel"
    },
    {
        image : busseats,
        feature : "Comfortable Seats"
    },
    {
        image : busservice,
        feature : "Service at its best"
    },
    {
        image : busonlineticket,
        feature : "Easy and Convinient Booking"
    }
];

function Home(props) {
    const featureCard = features.map(f => {
        return (
            <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                <div className="card">
                    <img className="card-img-top" src={f.image} alt="feature1" />
                    <div className="card-body" style={styling.card}>
                        <h5 className="card-title">{f.feature}</h5>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Header />

            <main className="mb-4 mt-5">
                {/* <!-- Corousal section --> */}
                <section>
                    <Corousal />
                </section>

                <section style={styling.section_bg}>
                    <SearchBus />
                </section>
                

                <section className="container-fluid  pt-3 pb-5 section-bg" style={styling.section_bg}>
                    <h2 style={styling.subheading}>Why Choose RouteMaster?</h2>
                    <div className="m-auto row">                       
                        {featureCard}
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    );
}

let styling = {
    subheading : {
        textAlign: "center",
        color: "#333333",
        fontFamily: "Verdana",
        padding: 20
    },
    section_bg : {
        background : "linear-gradient(180deg, transparent, #6666ff)"
    },
    card : {
        background : "#00001a",
        color : "white"
    }
}

export default Home;