package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.VoterDetailsDto;
import com.sunbeam.entities.VoterDetails.Status;

public interface VoterDetailsService {
    
    VoterDetailsDto createVoterDetails(VoterDetailsDto voterDetailsDto);
    
    VoterDetailsDto getVoterDetailsById(Integer voterId);
    
    VoterDetailsDto getVoterDetailsByUserId(Integer userId);
    
    List<VoterDetailsDto> getAllVoterDetails();
    
    List<VoterDetailsDto> getVoterDetailsByStatus(Status status);
    
    VoterDetailsDto updateVoterDetails(Integer voterId, VoterDetailsDto voterDetailsDto);
    
    void deleteVoterDetails(Integer voterId);
    
    boolean existsByAadhaarNo(String aadhaarNo);
    
    boolean existsByEpicNumber(String epicNumber);
}

