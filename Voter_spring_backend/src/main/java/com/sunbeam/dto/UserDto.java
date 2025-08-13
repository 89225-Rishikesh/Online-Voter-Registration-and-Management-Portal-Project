package com.sunbeam.dto;

import java.time.LocalDateTime;

import com.sunbeam.entities.UserEntity.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Integer userId;
    private String username;
    private String email;
    private String mobile;
    private Role role;
    private LocalDateTime createdAt;
}

