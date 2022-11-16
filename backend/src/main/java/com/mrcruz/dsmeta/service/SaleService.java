package com.mrcruz.dsmeta.service;

import com.mrcruz.dsmeta.entity.Sale;
import com.mrcruz.dsmeta.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public Page<Sale> findSales(Pageable pageable){
        return saleRepository.findAll(pageable);
    }
}
