package com.voterPortal;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Address")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long addressId ;
	
	private String houseNo;
    private String street;
    private String locality;
    private String district;
    private String state;
    private String pinCode;
    private String documentPath;
    
    @Enumerated(EnumType.STRING)
    private AddressType type;
    
    @ManyToOne
    @JoinColumn(name = "voter_id")
    private VoterDetails voter;
}
