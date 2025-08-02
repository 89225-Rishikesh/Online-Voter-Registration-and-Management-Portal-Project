package com.voterPortal;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Voter_History")
public class VoterHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historyId;
    
    private String electionName;
    private String boothNo;
    private String pollingStation;
    private Boolean voted;
    private LocalDate date;
    
    @ManyToOne
    @JoinColumn(name = "voter_id")
    private VoterDetails voter;
}
