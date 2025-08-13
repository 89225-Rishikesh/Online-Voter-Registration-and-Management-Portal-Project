package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.VoterDetails;
import com.sunbeam.entities.VoterDetails.Status;

@Repository
public interface VoterDetailsDao extends JpaRepository<VoterDetails, Integer> {
    
    Optional<VoterDetails> findByUser_UserId(Integer userId);
    
    Optional<VoterDetails> findByAadhaarNo(String aadhaarNo);
    
    Optional<VoterDetails> findByEpicNumber(String epicNumber);
    
    List<VoterDetails> findByStatus(Status status);
    
    @Query("SELECT v FROM VoterDetails v WHERE v.user.userId = :userId")
    Optional<VoterDetails> findByUserUserId(@Param("userId") Integer userId);
    
    boolean existsByAadhaarNo(String aadhaarNo);
    
    boolean existsByEpicNumber(String epicNumber);
}

