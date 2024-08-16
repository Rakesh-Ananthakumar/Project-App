package com.example.stylexapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.stylexapp.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer>{
    

}