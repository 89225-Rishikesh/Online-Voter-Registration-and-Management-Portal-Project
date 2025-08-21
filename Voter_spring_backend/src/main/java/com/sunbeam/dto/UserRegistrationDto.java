package com.sunbeam.dto;

import com.sunbeam.entities.UserEntity.Role;

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
public class UserRegistrationDto {
    
//    @NotBlank(message = "Username is required")
//    @Size(max = 100, message = "Username must not exceed 100 characters")
    private String username;
    
//    @NotBlank(message = "Password is required")
//    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;
//    
//    @NotBlank(message = "Email is required")
//    @Email(message = "Email should be valid")
//    @Size(max = 100, message = "Email must not exceed 100 characters")
    private String email;
    
  //  @Size(max = 15, message = "Mobile must not exceed 15 characters")
    private String mobile;
    
  //  @NotNull(message = "Role is required")
    private Role role;
}

