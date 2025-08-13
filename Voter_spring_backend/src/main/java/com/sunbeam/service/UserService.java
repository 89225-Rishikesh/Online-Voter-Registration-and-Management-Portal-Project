package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.JwtResponse;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.dto.UserRegistrationDto;
import com.sunbeam.entities.UserEntity;

public interface UserService {
    
    UserDto registerUser(UserRegistrationDto userRegistrationDto);
    
    JwtResponse authenticateUser(UserLoginDto userLoginDto);
    
    UserDto getUserById(Integer userId);
    
    UserDto getUserByEmail(String email);
    
    List<UserDto> getAllUsers();
    
    UserDto updateUser(Integer userId, UserDto userDto);
    
    void deleteUser(Integer userId);
    
    boolean existsByEmail(String email);
    
    boolean existsByUsername(String username);
    
    UserEntity findUserEntityByEmail(String email);
}

