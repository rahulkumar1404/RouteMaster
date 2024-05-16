package com.bookmybus.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmybus.entity.Passenger;

/**
 * 
 * 
 */
public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
