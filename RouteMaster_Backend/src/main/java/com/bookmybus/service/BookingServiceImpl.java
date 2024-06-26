package com.bookmybus.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookmybus.entity.Booking;
import com.bookmybus.entity.Passenger;
import com.bookmybus.entity.Ticket;
import com.bookmybus.entity.User;
import com.bookmybus.repo.BookingRepository;
import com.bookmybus.repo.PassengerRepository;
import com.bookmybus.repo.TicketRepository;
import com.bookmybus.repo.UserRepository;



@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	private UserRepository urepo;
	
	@Autowired
	private BookingRepository brepo;
	
	@Autowired
	private PassengerRepository prepo;
	
	@Autowired
	private TicketRepository trepo;
	
	
	
	@Override
	public int addBooking(Booking booking) {
		brepo.save(booking);
		return booking.getBookingId();
	}

	/**
	 * this method saves the passenger entity in the database
	 * passengers are referenced by booking entity
	 */
	@Override
	public int addPassenger(Passenger passenger, int bookingId) {
		Booking booking = brepo.findById(bookingId).get();
		booking.getPassengers().add(passenger);
		passenger.setBooking(booking);
		prepo.save(passenger);
		return passenger.getPid();
	}

	/**
	 * this method saves the ticket entity in the database
	 * ticket entity references user and booking entity
	 */
	@Override
	public Ticket generateTicket(Ticket ticket, int userId, int bookingId) {
		Booking booking = brepo.findById(bookingId).get();
		User user = urepo.findById(userId).get();
		ticket.setBooking(booking);
		ticket.setUser(user);
	
		trepo.save(ticket);
		return ticket;
	}
	
	//this method changes the pay status of booking 
	@Override
	public void updateBooking(Booking bookPay) {
		brepo.save(bookPay);
	}

	//this method retrieves all the tickets based on user id
	@Override
	public List<Ticket> getTicket(int uid) {
		User user=urepo.findById(uid).get();
		List<Ticket> tlist=trepo.findByUser(user);
		return tlist;
	}

	//this method retrieves booking details based on booking id 
	@Override
	public Booking getBookingById(int bid) {
		
		return brepo.findById(bid).get();
	}

}