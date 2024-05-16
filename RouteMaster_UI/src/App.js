import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Booking from './components/Booking';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import ErrorWorld from './components/ErrorWorld';
import Admin from './components/Admin';
import AddBus from './components/AddBus';
import BusListAdmin from './components/BusListAdmin';
import Passengers from './components/Passengers';
import Ticket from './components/Ticket' 
import Tickets from './components/Tickets';
import UpdateBus from './components/UpdateBus';
import Summary from './components/Summary';




function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/booking" component={Booking} />
        <Route path="/passengers" component={Passengers} />
        <Route path="/ticket" component={Ticket} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/payment" component={Payment} />
        <Route path="/summary" component={Summary} />
        <Route path="/admin" component={Admin} />
        <Route path="/addBus" component={AddBus} />
        <Route path="/allBuses" component={BusListAdmin} />
        <Route path="/updateBus" component={UpdateBus} />
        <Route component={ErrorWorld} />
        
      </Switch>
    </main>
  );
}

export default App;
