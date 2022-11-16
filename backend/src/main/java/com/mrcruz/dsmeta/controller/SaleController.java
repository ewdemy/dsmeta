package com.mrcruz.dsmeta.controller;

import com.mrcruz.dsmeta.entity.Sale;
import com.mrcruz.dsmeta.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping
    public Page<Sale> getAllSales(Pageable pageable){
        return saleService.findSales(pageable);
    }
}
