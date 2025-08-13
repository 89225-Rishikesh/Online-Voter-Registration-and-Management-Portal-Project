package com.sunbeam.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.VoterHistory;

@Repository
public interface VoterHistoryDao extends JpaRepository<VoterHistory, Integer> {
    
    List<VoterHistory> findByVoterVoterId(Integer voterId);
    
    List<VoterHistory> findByElectionName(String electionName);
    
    List<VoterHistory> findByVoted(Boolean voted);
    
    List<VoterHistory> findByDate(LocalDate date);
    
    @Query("SELECT vh FROM VoterHistory vh WHERE vh.voter.voterId = :voterId AND vh.voted = :voted")
    List<VoterHistory> findByVoterIdAndVoted(@Param("voterId") Integer voterId, @Param("voted") Boolean voted);
    
    @Query("SELECT vh FROM VoterHistory vh WHERE vh.voter.voterId = :voterId ORDER BY vh.date DESC")
    List<VoterHistory> findByVoterIdOrderByDateDesc(@Param("voterId") Integer voterId);
    
    @Query("SELECT COUNT(vh) FROM VoterHistory vh WHERE vh.electionName = :electionName AND vh.voted = true")
    Long countVotedByElection(@Param("electionName") String electionName);
}

