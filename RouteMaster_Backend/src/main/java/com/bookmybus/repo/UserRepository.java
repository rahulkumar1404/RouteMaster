package com.bookmybus.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmybus.entity.Ticket;
import com.bookmybus.entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {
	//Finds the User from database with matching username and password
	User findByUsernameAndPassword(String username,String password);
	
}
