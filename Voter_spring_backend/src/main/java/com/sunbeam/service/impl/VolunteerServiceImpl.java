package com.sunbeam.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.UserEntityDao;
import com.sunbeam.dao.VolunteerDao;
import com.sunbeam.dto.VolunteerDto;
import com.sunbeam.entities.UserEntity;
import com.sunbeam.entities.Volunteer;
import com.sunbeam.entities.Volunteer.VolunteerRole;
import com.sunbeam.service.VolunteerService;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class VolunteerServiceImpl implements VolunteerService {
    
    private final VolunteerDao volunteerDao;
    private final UserEntityDao userEntityDao;
    
    @Override
    public VolunteerDto createVolunteer(VolunteerDto volunteerDto) {
        if (volunteerDao.existsByEmail(volunteerDto.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        
        if (volunteerDao.existsByPhone(volunteerDto.getPhone())) {
            throw new RuntimeException("Phone number already exists");
        }
        
        Volunteer volunteer = new Volunteer();
        
        if (volunteerDto.getUserId() != null) {
            Optional<UserEntity> userOptional = userEntityDao.findById(volunteerDto.getUserId());
            if (userOptional.isPresent()) {
                volunteer.setUser(userOptional.get());
            } else {
                throw new RuntimeException("User not found with id: " + volunteerDto.getUserId());
            }
        }
        
        volunteer.setName(volunteerDto.getName());
        volunteer.setEmail(volunteerDto.getEmail());
        volunteer.setPhone(volunteerDto.getPhone());
        volunteer.setRole(volunteerDto.getRole());
        volunteer.setInterest(volunteerDto.getInterest());
        volunteer.setSubmittedOn(LocalDateTime.now());
        
        Volunteer savedVolunteer = volunteerDao.save(volunteer);
        return convertToDto(savedVolunteer);
    }