package com.sunbeam.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "voter_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoterDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "voter_id")
    private Integer voterId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserEntity user;
    
    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;
    
    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "gender", nullable = false)
    private Gender gender;
    
    @Column(name = "dob", nullable = false)
    private LocalDate dob;
    
    @Column(name = "place_of_birth", length = 100)
    private String placeOfBirth;
    
    @Column(name = "photo_path", length = 255)
    private String photoPath;
    
    @Column(name = "address_proof_path", length = 255)
    private String addressProofPath;
    
    @Column(name = "aadhaar_no", length = 12)
    private String aadhaarNo;
    
    @Column(name = "epic_number", length = 20)
    private String epicNumber;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private Status status;
    
    public enum Gender {
        MALE, FEMALE, OTHER
    }
    
    public enum Status {
        ACTIVE, INACTIVE, PENDING
    }
}

