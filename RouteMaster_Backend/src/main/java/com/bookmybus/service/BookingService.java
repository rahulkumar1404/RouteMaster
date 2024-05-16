package com.bookmybus.service;

import java.util.List;

import com.bookmybus.entity.Booking;
import com.bookmybus.entity.Passenger;
import com.bookmybus.entity.Ticket;

public interface BookingService {
	
	int addBooking(Booking booking);
	
	int addPassenger(Passenger passenger, int bookingId);
	
	Ticket generateTicket(Ticket ticket, int userId, int bookingId);
	
	List<Ticket> getTicket(int uid);
	
	Booking getBookingById(int bid);
	
	void updateBooking(Booking bookPay);
	
}
