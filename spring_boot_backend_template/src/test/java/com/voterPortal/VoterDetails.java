package com.voterPortal;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "Voter_Details")
public class VoterDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voterId;
    
    @NotBlank
	private String firstname ;
    @NotBlank
	private String lastName ;
	
    @NotBlank
	private LocalDate dob ;
    @NotBlank
    private String placeOfBirth;
    @NotBlank
    private String photoPath;
    
    private String aadhaarNo;
    private String epicNumber; 
    
    @NotNull
    @Enumerated(EnumType.STRING)
	private Gender gender ;
    
    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @OneToMany(mappedBy = "voter", cascade = CascadeType.ALL)
    private List<Address> addresses;

    @OneToMany(mappedBy = "voter", cascade = CascadeType.ALL)
    private List<Application> applications;

    @OneToMany(mappedBy = "voter", cascade = CascadeType.ALL)
    private List<Complaint> complaints;

    @OneToMany(mappedBy = "voter", cascade = CascadeType.ALL)
    private List<VoterHistory> voterHistory;
}
