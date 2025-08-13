package com.sunbeam.entities;

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
@Table(name = "address")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Integer addressId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "voter_id", referencedColumnName = "voter_id")
    private VoterDetails voter;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private AddressType type;
    
    @Column(name = "house_no", length = 50)
    private String houseNo;
    
    @Column(name = "street", length = 100)
    private String street;
    
    @Column(name = "locality", length = 100)
    private String locality;
    
    @Column(name = "district", length = 50)
    private String district;
    
    @Column(name = "state", length = 50)
    private String state;
    
    @Column(name = "pin_code", length = 6)
    private String pinCode;
    
    @Column(name = "document_path", length = 255)
    private String documentPath;
    
    public enum AddressType {
        PERMANENT, TEMPORARY
    }
}

