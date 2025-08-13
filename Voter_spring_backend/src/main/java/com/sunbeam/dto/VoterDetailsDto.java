package com.sunbeam.dto;

import java.time.LocalDate;

import com.sunbeam.entities.VoterDetails.Gender;
import com.sunbeam.entities.VoterDetails.Status;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoterDetailsDto {
    private Integer voterId;
    private Integer userId;
    
//    @NotBlank(message = "First name is required")
//    @Size(max = 100, message = "First name must not exceed 100 characters")
    private String firstName;
    
//    @NotBlank(message = "Last name is required")
//    @Size(max = 100, message = "Last name must not exceed 100 characters")
    private String lastName;
    
  //  @NotNull(message = "Gender is required")
    private Gender gender;
    
  //  @NotNull(message = "Date of birth is required")
    private LocalDate dob;
    
 //   @Size(max = 100, message = "Place of birth must not exceed 100 characters")
    private String placeOfBirth;
    
    private String photoPath;
    
    private String addressProofPath;
    
   // @Size(max = 12, message = "Aadhaar number must not exceed 12 characters")
    private String aadhaarNo;
    
   // @Size(max = 20, message = "EPIC number must not exceed 20 characters")
    private String epicNumber;
    
   // @NotNull(message = "Status is required")
    private Status status;
}

