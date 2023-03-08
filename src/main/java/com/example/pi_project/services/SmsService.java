package com.example.pi_project.services;

import com.example.pi_project.entities.SmsRequest;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
@Slf4j
public class SmsService {

	@Value("${TWILIO_ACCOUNT_$ID}")
	String ACCOUNT_$ID;
	@Value("${TWILIO_AUTH_TOKEN}")
	String AUTH_TOKEN;
	@Value("${TWILIO_OUTGOING_SMS_NUMBER}")
	String OUTGOING_SMS_NUMBER;


@PostConstruct
private void setup(){
	Twilio.init(ACCOUNT_$ID,AUTH_TOKEN);

}
	public String sendSms(String smsNumber, String  smsMessage) {
		Message message = Message.creator(new PhoneNumber(smsNumber),
				new PhoneNumber(OUTGOING_SMS_NUMBER),
		smsMessage).create();
		return message.getStatus().toString();
	}
	

}
