package com.bookmybus.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmybus.entity.Booking;

/**
 * 
 * 
 *
 */
public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
