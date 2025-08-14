package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.VolunteerDto;
import com.sunbeam.entities.Volunteer.VolunteerRole;

public interface VolunteerService {
    
    VolunteerDto createVolunteer(VolunteerDto volunteerDto);
    
    VolunteerDto getVolunteerById(Integer volunteerId);
    
    List<VolunteerDto> getAllVolunteers();
    
    List<VolunteerDto> getVolunteersByRole(VolunteerRole role);
    
    List<VolunteerDto> getVolunteersByUserId(Integer userId);
    
    VolunteerDto updateVolunteer(Integer volunteerId, VolunteerDto volunteerDto);
    
    void deleteVolunteer(Integer volunteerId);
    
    boolean existsByEmail(String email);
    
    boolean existsByPhone(String phone);
}

