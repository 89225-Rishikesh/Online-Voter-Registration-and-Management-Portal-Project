package com.sunbeam.dto;

import java.time.LocalDateTime;

import com.sunbeam.entities.Volunteer.VolunteerRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VolunteerDto {
    private Integer volunteerId;
    private Integer userId;
    
    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name must not exceed 100 characters")
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    @Size(max = 100, message = "Email must not exceed 100 characters")
    private String email;
    
    @NotBlank(message = "Phone is required")
    @Size(max = 15, message = "Phone must not exceed 15 characters")
    private String phone;
    
    @NotNull(message = "Role is required")
    private VolunteerRole role;
    
    @NotBlank(message = "Interest is required")
    private String interest;
    
    private LocalDateTime submittedOn;
}

