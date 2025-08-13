package com.sunbeam.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.UserEntityDao;
import com.sunbeam.dto.JwtResponse;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.dto.UserRegistrationDto;
import com.sunbeam.entities.UserEntity;
import com.sunbeam.security.JwtUtils;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements com.sunbeam.service.UserService {
    
    private final UserEntityDao userEntityDao;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    
    @Override
    public UserDto registerUser(UserRegistrationDto userRegistrationDto) {
        if (userEntityDao.existsByEmail(userRegistrationDto.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        
        if (userEntityDao.existsByUsername(userRegistrationDto.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        
        UserEntity user = new UserEntity();
        user.setUsername(userRegistrationDto.getUsername());
        user.setPassword(passwordEncoder.encode(userRegistrationDto.getPassword()));
        user.setEmail(userRegistrationDto.getEmail());
        user.setMobile(userRegistrationDto.getMobile());
        user.setRole(userRegistrationDto.getRole());
        user.setCreatedAt(LocalDateTime.now());
        
        UserEntity savedUser = userEntityDao.save(user);
        return convertToDto(savedUser);
    }
    
    @Override
    public JwtResponse authenticateUser(UserLoginDto userLoginDto) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                userLoginDto.getEmail(), 
                userLoginDto.getPassword()
            )
        );
        
        String jwt = jwtUtils.generateJwtToken(authentication);
        UserEntity user = (UserEntity) authentication.getPrincipal();
        UserDto userDto = convertToDto(user);
        
        return new JwtResponse(jwt, "Login successful", userDto);
    }
    
    @Override
    public UserDto getUserById(Integer userId) {
        Optional<UserEntity> userOptional = userEntityDao.findById(userId);
        if (userOptional.isPresent()) {
            return convertToDto(userOptional.get());
        }
        throw new RuntimeException("User not found with id: " + userId);
    }
    
    @Override
    public UserDto getUserByEmail(String email) {
        Optional<UserEntity> userOptional = userEntityDao.findByEmail(email);
        if (userOptional.isPresent()) {
            return convertToDto(userOptional.get());
        }
        throw new RuntimeException("User not found with email: " + email);
    }
    
    @Override
    public List<UserDto> getAllUsers() {
        List<UserEntity> users = userEntityDao.findAll();
        List<UserDto> userDtos = new ArrayList<>();
        
        for (UserEntity user : users) {
            userDtos.add(convertToDto(user));
        }
        
        return userDtos;
    }
    
    @Override
    public UserDto updateUser(Integer userId, UserDto userDto) {
        Optional<UserEntity> userOptional = userEntityDao.findById(userId);
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            user.setUsername(userDto.getUsername());
            user.setEmail(userDto.getEmail());
            user.setMobile(userDto.getMobile());
            user.setRole(userDto.getRole());
            
            UserEntity updatedUser = userEntityDao.save(user);
            return convertToDto(updatedUser);
        }
        throw new RuntimeException("User not found with id: " + userId);
    }
    
    @Override
    public void deleteUser(Integer userId) {
        if (userEntityDao.existsById(userId)) {
            userEntityDao.deleteById(userId);
        } else {
            throw new RuntimeException("User not found with id: " + userId);
        }
    }
    
    @Override
    public boolean existsByEmail(String email) {
        return userEntityDao.existsByEmail(email);
    }
    
    @Override
    public boolean existsByUsername(String username) {
        return userEntityDao.existsByUsername(username);
    }
    
    @Override
    public UserEntity findUserEntityByEmail(String email) {
        Optional<UserEntity> userOptional = userEntityDao.findByEmail(email);
        if (userOptional.isPresent()) {
            return userOptional.get();
        }
        throw new RuntimeException("User not found with email: " + email);
    }
    
    private UserDto convertToDto(UserEntity user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setMobile(user.getMobile());
        userDto.setRole(user.getRole());
        userDto.setCreatedAt(user.getCreatedAt());
        return userDto;
    }
}

