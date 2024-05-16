package com.bookmybus.service;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bookmybus.entity.Bus;
import com.bookmybus.exception.BusException;
import com.bookmybus.repo.BusRepository;


@Repository
public class BusServiceImpl implements BusService {
	@Autowired
	BusRepository frepo;
	
	@Transactional
	public int addBus(Bus bus) throws BusException {
		// TODO Auto-generated method stub
		//Bus temp=fetchBus(bus.getSource(), bus.getDestination(), bus.getTravelDate());
		List<Bus> buss=(List)fetchAll();
		Bus bus_temp=null;
		for(Bus f:buss) {
			if( f.getSource().equals(bus.getSource()) && f.getDestination().equals(bus.getDestination()) 
					&& f.getTravelDate().equals(bus.getTravelDate()) && f.getArrivalTime().equals(bus.getArrivalTime())
					&& f.getDepartureTime().equals(bus.getDepartureTime()) ) {
				bus_temp=f;
			}
		}
		//System.out.println(temp);
		if(bus_temp==null) {
			frepo.save(bus);
			return bus.getBusNumber();
		}else {
			throw new BusException("Bus already exists with bus number "+bus_temp.getBusNumber());
		}
	}

	@Override
	public Collection<Bus> fetchAll() {
		List<Bus> buss=frepo.findAll();
		return buss;
	}

	@Override
	public Bus fetchBus(String source, String destination, LocalDate scheduleDate) throws BusException {
		// TODO Auto-generated method stub
		System.out.println(source + " "+ destination + " " +scheduleDate);
		List<Bus> buss=(List)fetchAll();
		Bus bus=null;
		for(Bus f:buss) {
			if((f.getSource().equals(source)&&f.getDestination().equals(destination)) &&f.getTravelDate().equals(scheduleDate) ) {
				bus=f;
			}
		}
		
		if(bus!=null) {
			return bus;
		}else {
			throw new BusException("Bus not found with provided details");
		}
		
	}
	
	@Override
	public Collection<Bus> fetchBussOnCondition(String source, String destination, LocalDate scheduleDate)
			throws BusException {
		List<Bus> buss;
		buss = frepo.findByCondition(source, destination, scheduleDate);
		if(buss!=null) {
			return buss;
		}else {
			throw new BusException("Bus's not found with provided details");
		}
		
	}


	@Transactional  
	public int updateBus(Bus bus) throws BusException {
		
		List<Bus> buss=(List)fetchAll();
		Bus bus1=null;
		for(Bus f:buss) {
			if(f.getBusNumber()==bus.getBusNumber()) {
				bus1=f;
			}
		}
		
		if(bus1!=null) {
			bus1.setBusNumber(bus.getBusNumber());
			bus1.setArrivalTime(bus.getArrivalTime());
			bus1.setAvailableSeats(bus.getAvailableSeats());
			bus1.setDepartureTime(bus.getDepartureTime());
			bus1.setDestination(bus.getDestination());
			bus1.setSource(bus.getSource());
			bus1.setPrice(bus.getPrice());
			bus1.setTravelDate(bus.getTravelDate());
			frepo.save(bus1);
			return bus.getBusNumber();
		}else {
			throw new BusException("Bus not found with id "+bus.getBusNumber());
		}

		
	}

	@Transactional
	@Override
	public void removeBus(int busNumber) {
		// TODO Auto-generated method stub
		frepo.deleteById(busNumber);
		System.out.println("Deleted bus");
	}

	@Override
	public Bus fetchById(int fid) {
		Bus bus = frepo.findById(fid).get();
		return bus;
	}

}