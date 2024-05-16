package com.bookmybus.repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bookmybus.entity.Bus;

/**
 * 
 *
 *
 */
public interface BusRepository extends JpaRepository<Bus, Integer>{
	//Fetch the bus from database w.r.t source, destination, travel date
	@Query("FROM Bus WHERE source=:source AND destination=:destination AND travelDate=:travelDate")
	List<Bus> findByCondition(String source, String destination, LocalDate travelDate);

}