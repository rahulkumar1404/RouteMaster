package com.bookmybus.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmybus.entity.Ticket;
import com.bookmybus.entity.User;

import java.util.List;

/**
 * 
 *
 */
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
	//Finds the list of tickets by user 
	List<Ticket> findByUser(User user);
}
