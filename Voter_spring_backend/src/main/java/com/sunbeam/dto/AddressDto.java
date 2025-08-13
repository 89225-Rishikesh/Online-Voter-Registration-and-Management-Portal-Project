package com.sunbeam.dto;

import com.sunbeam.entities.Address.AddressType;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {
    private Integer addressId;
    private Integer voterId;
    
    @NotNull(message = "Address type is required")
    private AddressType type;
    
    @Size(max = 50, message = "House number must not exceed 50 characters")
    private String houseNo;
    
    @Size(max = 100, message = "Street must not exceed 100 characters")
    private String street;
    
    @Size(max = 100, message = "Locality must not exceed 100 characters")
    private String locality;
    
    @Size(max = 50, message = "District must not exceed 50 characters")
    private String district;
    
    @Size(max = 50, message = "State must not exceed 50 characters")
    private String state;
    
    @Size(max = 6, message = "Pin code must not exceed 6 characters")
    private String pinCode;
    
    private String documentPath;
}

