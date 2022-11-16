package com.mrcruz.dsmeta.service;

import com.mrcruz.dsmeta.entity.Sale;
import com.mrcruz.dsmeta.repository.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class SmsService {

    @Value("${twilio.sid}")
    private String twilioSid;

    @Value("${twilio.key}")
    private String twilioKey;

    @Value("${twilio.phone.from}")
    private String twilioPhoneFrom;

    @Value("${twilio.phone.to}")
    private String twilioPhoneTo;

    @Autowired
    private SaleRepository saleRepository;

    public void sendSms(Long saleId) {
       ;
        Sale sale = saleRepository.findById(saleId)
                .orElseThrow(()-> new EntityNotFoundException("Venda não encontrada com id " + saleId));
        String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
        String msg = String.format("O vendedor %s foi destaque em %s com um total de R$ %.2f.",sale.getSellerName(),date,sale.getAmount());

        Twilio.init(twilioSid, twilioKey);

        PhoneNumber to = new PhoneNumber(twilioPhoneTo);
        PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

        Message message = Message.creator(to, from, msg).create();

        System.out.println(message.getSid());
    }
}
