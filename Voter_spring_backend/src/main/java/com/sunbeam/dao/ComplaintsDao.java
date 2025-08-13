package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Complaints;
import com.sunbeam.entities.Complaints.ComplaintStatus;

@Repository
public interface ComplaintsDao extends JpaRepository<Complaints, Integer> {
    
    List<Complaints> findByVoterVoterId(Integer voterId);
    
    List<Complaints> findByStatus(ComplaintStatus status);
    
    @Query("SELECT c FROM Complaints c WHERE c.voter.voterId = :voterId AND c.status = :status")
    List<Complaints> findByVoterIdAndStatus(@Param("voterId") Integer voterId, @Param("status") ComplaintStatus status);
    
    @Query("SELECT COUNT(c) FROM Complaints c WHERE c.status = :status")
    Long countByStatus(@Param("status") ComplaintStatus status);
    
    @Query("SELECT c FROM Complaints c ORDER BY c.createdAt DESC")
    List<Complaints> findAllOrderByCreatedAtDesc();
}

