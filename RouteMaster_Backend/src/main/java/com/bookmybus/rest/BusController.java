package com.bookmybus.rest;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookmybus.entity.Bus;
import com.bookmybus.entity.User;
import com.bookmybus.exception.BusException;
import com.bookmybus.service.BusService;


@CrossOrigin()
@EnableTransactionManagement
@RestController
@RequestMapping("/bus")
public class BusController {

	@Autowired
	BusService fservice;
	

	//Post request for adding bus
	@PostMapping(value = "/add",consumes = "application/json")
	public String addBus(@RequestBody Bus bus, HttpSession session) {
		try {		
				int id=fservice.addBus(bus);
				return "Bus added with bus number "+id;
			
		} catch (BusException e) {
			e.printStackTrace();
			return ""+e.getMessage();
		}
		
	}
	
	//Get request to fetch all the buss
	@GetMapping(value="/fetchall",produces="application/json")
	public Collection<Bus> serachBuss(){
		return fservice.fetchAll();	
	}
	
	//Get request for searching bus based on source, destination and date
	@GetMapping(value="/fetch",produces="application/json")  
	public ResponseEntity<?> searchBus(@RequestParam String source,@RequestParam String destination
			,@RequestParam String date) {
		try {
			
			LocalDate dt=LocalDate.parse(date);
			Collection<Bus> buss = fservice.fetchBussOnCondition(source, destination, dt);
			return new ResponseEntity< Collection<Bus> >(buss,HttpStatus.OK);
			
		} catch (BusException e) {
			
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	

	//Delete request to remove bus
	@DeleteMapping(value="/remove/{fid}")
	public String removeBus(@PathVariable int fid, HttpSession session) {

			fservice.removeBus(fid);	
			return "bus removed with id" + fid;

		
	}
	
	//Put request to update bus
	@PutMapping(value="/update",produces="application/json")
	public String updateBus(@RequestBody Bus bus, HttpSession session) {
		try {

				int id=fservice.updateBus(bus);
				return "Bus updated with id "+id;
			
		} catch (BusException e) {
			
			e.printStackTrace();
			return ""+e.getMessage();
		}
	}
}