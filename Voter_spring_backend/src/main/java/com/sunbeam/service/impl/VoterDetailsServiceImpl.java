package com.sunbeam.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.UserEntityDao;
import com.sunbeam.dao.VoterDetailsDao;
import com.sunbeam.dto.VoterDetailsDto;
import com.sunbeam.entities.UserEntity;
import com.sunbeam.entities.VoterDetails;
import com.sunbeam.entities.VoterDetails.Status;
import com.sunbeam.service.VoterDetailsService;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class VoterDetailsServiceImpl implements VoterDetailsService {
    
    private final VoterDetailsDao voterDetailsDao;
    private final UserEntityDao userEntityDao;
    private final ModelMapper modelMapper;
    
    @Override
    public VoterDetailsDto createVoterDetails(VoterDetailsDto voterDetailsDto) {
        if (voterDetailsDao.existsByAadhaarNo(voterDetailsDto.getAadhaarNo())) {
            throw new RuntimeException("Aadhaar number already exists");
        }
        
        if (voterDetailsDto.getEpicNumber() != null && voterDetailsDao.existsByEpicNumber(voterDetailsDto.getEpicNumber())) {
            throw new RuntimeException("EPIC number already exists");
        }
        
        // Create entity object from DTO using ModelMapper
        VoterDetails voterDetails = modelMapper.map(voterDetailsDto, VoterDetails.class);
        
        // Set user separately since it's a nested object
        if (voterDetailsDto.getUserId() != null) {
            Optional<UserEntity> userOptional = userEntityDao.findById(voterDetailsDto.getUserId());
            if (userOptional.isPresent()) {
                voterDetails.setUser(userOptional.get());
            } else {
                throw new RuntimeException("User not found with id: " + voterDetailsDto.getUserId());
            }
        }
        
        VoterDetails savedVoterDetails = voterDetailsDao.save(voterDetails);
        return modelMapper.map(savedVoterDetails, VoterDetailsDto.class);
    }
    
    @Override
    public VoterDetailsDto getVoterDetailsById(Integer voterId) {
        Optional<VoterDetails> voterDetailsOptional = voterDetailsDao.findById(voterId);
        if (voterDetailsOptional.isPresent()) {
            return modelMapper.map(voterDetailsOptional.get(), VoterDetailsDto.class);
        }
        throw new RuntimeException("Voter details not found with id: " + voterId);
    }
    
    @Override
    public VoterDetailsDto getVoterDetailsByUserId(Integer userId) {
        Optional<VoterDetails> voterDetailsOptional = voterDetailsDao.findByUserUserId(userId);
        if (voterDetailsOptional.isPresent()) {
            return modelMapper.map(voterDetailsOptional.get(), VoterDetailsDto.class);
        }
        throw new RuntimeException("Voter details not found for user id: " + userId);
    }
    
    @Override
    public List<VoterDetailsDto> getAllVoterDetails() {
        List<VoterDetails> voterDetailsList = voterDetailsDao.findAll();
        return voterDetailsList.stream()
                .map(entity -> modelMapper.map(entity, VoterDetailsDto.class))
                .collect(Collectors.toList());
    }
    
    @Override
    public List<VoterDetailsDto> getVoterDetailsByStatus(Status status) {
        List<VoterDetails> voterDetailsList = voterDetailsDao.findByStatus(status);
        return voterDetailsList.stream()
                .map(entity -> modelMapper.map(entity, VoterDetailsDto.class))
                .collect(Collectors.toList());
    }
    
    @Override
    public VoterDetailsDto updateVoterDetails(Integer voterId, VoterDetailsDto voterDetailsDto) {
        Optional<VoterDetails> voterDetailsOptional = voterDetailsDao.findById(voterId);
        if (voterDetailsOptional.isPresent()) {
            VoterDetails voterDetails = voterDetailsOptional.get();
            
            // Map properties from DTO to entity
            modelMapper.map(voterDetailsDto, voterDetails);
            
            // Keep the original ID and user
            voterDetails.setVoterId(voterId);
            
            // If userId is changed, update the user reference
            if (voterDetailsDto.getUserId() != null && 
                (voterDetails.getUser() == null || !voterDetails.getUser().getUserId().equals(voterDetailsDto.getUserId()))) {
                Optional<UserEntity> userOptional = userEntityDao.findById(voterDetailsDto.getUserId());
                if (userOptional.isPresent()) {
                    voterDetails.setUser(userOptional.get());
                } else {
                    throw new RuntimeException("User not found with id: " + voterDetailsDto.getUserId());
                }
            }
            
            VoterDetails updatedVoterDetails = voterDetailsDao.save(voterDetails);
            return modelMapper.map(updatedVoterDetails, VoterDetailsDto.class);
        }
        throw new RuntimeException("Voter details not found with id: " + voterId);
    }
    
    @Override
    public void deleteVoterDetails(Integer voterId) {
        if (voterDetailsDao.existsById(voterId)) {
            voterDetailsDao.deleteById(voterId);
        } else {
            throw new RuntimeException("Voter details not found with id: " + voterId);
        }
    }
    
    @Override
    public boolean existsByAadhaarNo(String aadhaarNo) {
        return voterDetailsDao.existsByAadhaarNo(aadhaarNo);
    }
    
    @Override
    public boolean existsByEpicNumber(String epicNumber) {
        return voterDetailsDao.existsByEpicNumber(epicNumber);
    }
}

