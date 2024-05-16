package com.bookmybus.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class BusException extends Exception{

	public BusException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BusException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}
