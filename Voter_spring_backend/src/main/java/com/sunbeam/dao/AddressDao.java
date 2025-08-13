package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Address;
import com.sunbeam.entities.Address.AddressType;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {
    
    List<Address> findByVoterVoterId(Integer voterId);
    
    List<Address> findByType(AddressType type);
    
    @Query("SELECT a FROM Address a WHERE a.voter.voterId = :voterId AND a.type = :type")
    List<Address> findByVoterIdAndType(@Param("voterId") Integer voterId, @Param("type") AddressType type);
    
    List<Address> findByState(String state);
    
    List<Address> findByDistrict(String district);
}

