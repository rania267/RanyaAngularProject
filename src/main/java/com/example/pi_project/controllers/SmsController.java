package com.example.pi_project.controllers;

import com.example.pi_project.entities.SmsRequest;
import com.example.pi_project.services.SmsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
@RequestMapping("/sms")
@Slf4j
public class SmsController {
@Autowired
	SmsService smsService;
	

	
	/*
	 * sending json data
	 * 
	@PostMapping("/send")
	public void SendSms(@Valid @RequestBody SmsRequest smsRequest) {
		smsService.sendSms(smsRequest);
	}
	*/
	
	/*sending form data
	*/
	
	@PostMapping("/send")
	public String SendSms(@RequestBody SmsRequest smsRequest) {
		log.info("process sms started smsRequest:"+ smsRequest.toString());
		return smsService.sendSms(smsRequest.getPhoneNumber(), smsRequest.getMessage());
	}

}
