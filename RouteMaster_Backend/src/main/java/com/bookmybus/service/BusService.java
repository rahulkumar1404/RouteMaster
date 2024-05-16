package com.bookmybus.service;

import java.time.LocalDate;
import java.util.Collection;

import com.bookmybus.entity.Bus;
import com.bookmybus.exception.BusException;

public interface BusService {
	
	 int addBus(Bus bus) throws BusException;
	
	 Collection<Bus> fetchAll();
	
	 Bus fetchBus(String source, String destination, LocalDate scheduleDate) 
			throws BusException;
	 
	 Collection<Bus> fetchBussOnCondition(String source, String destination, LocalDate scheduleDate) 
				throws BusException;
	
	 int updateBus(Bus bus) throws BusException; //seatnotavailableexception
	 
	 void removeBus(int busNumber);
	 
	 Bus fetchById(int fid);
}