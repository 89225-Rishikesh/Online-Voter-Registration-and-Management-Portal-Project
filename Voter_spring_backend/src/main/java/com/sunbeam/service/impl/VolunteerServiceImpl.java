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
    @Override
    public VolunteerDto getVolunteerById(Integer volunteerId) {
        Optional<Volunteer> volunteerOptional = volunteerDao.findById(volunteerId);
        if (volunteerOptional.isPresent()) {
            return convertToDto(volunteerOptional.get());
        }
        throw new RuntimeException("Volunteer not found with id: " + volunteerId);
    }
    
    @Override
    public List<VolunteerDto> getAllVolunteers() {
        List<Volunteer> volunteers = volunteerDao.findAllOrderBySubmittedOnDesc();
        List<VolunteerDto> volunteerDtos = new ArrayList<>();
        
        for (Volunteer volunteer : volunteers) {
            volunteerDtos.add(convertToDto(volunteer));
        }
        
        return volunteerDtos;
    }
    
    @Override
    public List<VolunteerDto> getVolunteersByRole(VolunteerRole role) {
        List<Volunteer> volunteers = volunteerDao.findByRole(role);
        List<VolunteerDto> volunteerDtos = new ArrayList<>();
        
        for (Volunteer volunteer : volunteers) {
            volunteerDtos.add(convertToDto(volunteer));
        }
        
        return volunteerDtos;
    }
    
    @Override
    public List<VolunteerDto> getVolunteersByUserId(Integer userId) {
        List<Volunteer> volunteers = volunteerDao.findByUserUserId(userId);
        List<VolunteerDto> volunteerDtos = new ArrayList<>();
        
        for (Volunteer volunteer : volunteers) {
            volunteerDtos.add(convertToDto(volunteer));
        }
        
        return volunteerDtos;
    }
    
    @Override
    public VolunteerDto updateVolunteer(Integer volunteerId, VolunteerDto volunteerDto) {
        Optional<Volunteer> volunteerOptional = volunteerDao.findById(volunteerId);
        if (volunteerOptional.isPresent()) {
            Volunteer volunteer = volunteerOptional.get();
            
            volunteer.setName(volunteerDto.getName());
            volunteer.setEmail(volunteerDto.getEmail());
            volunteer.setPhone(volunteerDto.getPhone());
            volunteer.setRole(volunteerDto.getRole());
            volunteer.setInterest(volunteerDto.getInterest());
            
            Volunteer updatedVolunteer = volunteerDao.save(volunteer);
            return convertToDto(updatedVolunteer);
        }
        throw new RuntimeException("Volunteer not found with id: " + volunteerId);
    }
    
    @Override
    public void deleteVolunteer(Integer volunteerId) {
        if (volunteerDao.existsById(volunteerId)) {
            volunteerDao.deleteById(volunteerId);
        } else {
            throw new RuntimeException("Volunteer not found with id: " + volunteerId);
        }
    }
    
    @Override
    public boolean existsByEmail(String email) {
        return volunteerDao.existsByEmail(email);
    }
    
    @Override
    public boolean existsByPhone(String phone) {
        return volunteerDao.existsByPhone(phone);
    }
    
    private VolunteerDto convertToDto(Volunteer volunteer) {
        VolunteerDto dto = new VolunteerDto();
        dto.setVolunteerId(volunteer.getVolunteerId());
        dto.setUserId(volunteer.getUser() != null ? volunteer.getUser().getUserId() : null);
        dto.setName(volunteer.getName());
        dto.setEmail(volunteer.getEmail());
        dto.setPhone(volunteer.getPhone());
        dto.setRole(volunteer.getRole());
        dto.setInterest(volunteer.getInterest());
        dto.setSubmittedOn(volunteer.getSubmittedOn());
        return dto;
    }
}

