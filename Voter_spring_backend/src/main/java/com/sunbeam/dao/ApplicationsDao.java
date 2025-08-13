package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Applications;
import com.sunbeam.entities.Applications.ApplicationStatus;

@Repository
public interface ApplicationsDao extends JpaRepository<Applications, Integer> {
    
    List<Applications> findByVoterVoterId(Integer voterId);
    
    List<Applications> findByStatus(ApplicationStatus status);
    
    List<Applications> findByReviewedBy(Integer reviewedBy);
    
    @Query("SELECT a FROM Applications a WHERE a.voter.voterId = :voterId AND a.status = :status")
    List<Applications> findByVoterIdAndStatus(@Param("voterId") Integer voterId, @Param("status") ApplicationStatus status);
    
    @Query("SELECT COUNT(a) FROM Applications a WHERE a.status = :status")
    Long countByStatus(@Param("status") ApplicationStatus status);
}

