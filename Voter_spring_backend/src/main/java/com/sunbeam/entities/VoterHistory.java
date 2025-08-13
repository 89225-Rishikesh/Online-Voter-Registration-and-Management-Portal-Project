package com.sunbeam.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "voter_history")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoterHistory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "history_id")
    private Integer historyId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "voter_id", referencedColumnName = "voter_id")
    private VoterDetails voter;
    
    @Column(name = "election_name", length = 100)
    private String electionName;
    
    @Column(name = "booth_no", length = 20)
    private String boothNo;
    
    @Column(name = "polling_station", length = 100)
    private String pollingStation;
    
    @Column(name = "voted")
    private Boolean voted;
    
    @Column(name = "date")
    private LocalDate date;
}

