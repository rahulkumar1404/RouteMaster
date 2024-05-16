package com.bookmybus.service;

import java.util.Collection;

import com.bookmybus.bean.Login;
import com.bookmybus.entity.User;
import com.bookmybus.exception.UserException;

public interface UserService {
	
	 int createUser(User user) throws UserException;
	
	 User fetchUserById(int user_id) throws UserException;
	 
	 User validate(Login login);
	
	 public Collection<User> fetchAllUsers();
	
}
