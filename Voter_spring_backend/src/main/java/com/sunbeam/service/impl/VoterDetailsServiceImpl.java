package com.sunbeam.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    
    @Override
    public VoterDetailsDto createVoterDetails(VoterDetailsDto voterDetailsDto) {
        if (voterDetailsDao.existsByAadhaarNo(voterDetailsDto.getAadhaarNo())) {
            throw new RuntimeException("Aadhaar number already exists");
        }
        
        if (voterDetailsDao.existsByEpicNumber(voterDetailsDto.getEpicNumber())) {
            throw new RuntimeException("EPIC number already exists");
        }
        
        VoterDetails voterDetails = new VoterDetails();
        
        if (voterDetailsDto.getUserId() != null) {
            Optional<UserEntity> userOptional = userEntityDao.findById(voterDetailsDto.getUserId());
            if (userOptional.isPresent()) {
                voterDetails.setUser(userOptional.get());
            } else {
                throw new RuntimeException("User not found with id: " + voterDetailsDto.getUserId());
            }
        }
        
        voterDetails.setFirstName(voterDetailsDto.getFirstName());
        voterDetails.setLastName(voterDetailsDto.getLastName());
        voterDetails.setGender(voterDetailsDto.getGender());
        voterDetails.setDob(voterDetailsDto.getDob());
        voterDetails.setPlaceOfBirth(voterDetailsDto.getPlaceOfBirth());
        voterDetails.setPhotoPath(voterDetailsDto.getPhotoPath());
        voterDetails.setAddressProofPath(voterDetailsDto.getAddressProofPath());
        voterDetails.setAadhaarNo(voterDetailsDto.getAadhaarNo());
        voterDetails.setEpicNumber(voterDetailsDto.getEpicNumber());
        voterDetails.setStatus(voterDetailsDto.getStatus());
        
        VoterDetails savedVoterDetails = voterDetailsDao.save(voterDetails);
        return convertToDto(savedVoterDetails);
    }
    
    @Override
    public VoterDetailsDto getVoterDetailsById(Integer voterId) {
        Optional<VoterDetails> voterDetailsOptional = voterDetailsDao.findById(voterId);
        if (voterDetailsOptional.isPresent()) {
            return convertToDto(voterDetailsOptional.get());
        }
        throw new RuntimeException("Voter details not found with id: " + voterId);
    }
    
    @Override
    public VoterDetailsDto getVoterDetailsByUserId(Integer userId) {
        Optional<VoterDetails> voterDetailsOptional = voterDetailsDao.findByUserUserId(userId);
        if (voterDetailsOptional.isPresent()) {
            return convertToDto(voterDetailsOptional.get());
        }
        throw new RuntimeException("Voter details not found for user id: " + userId);
    }
    
    @Override
    public List<VoterDetailsDto> getAllVoterDetails() {
        List<VoterDetails> voterDetailsList = voterDetailsDao.findAll();
        List<VoterDetailsDto> voterDetailsDtos = new ArrayList<>();
        
        for (VoterDetails voterDetails : voterDetailsList) {
            voterDetailsDtos.add(convertToDto(voterDetails));
        }
        
        return voterDetailsDtos;
    }
    
    @Override
    public List<VoterDetailsDto> getVoterDetailsByStatus(Status status) {
        List<VoterDetails> voterDetailsList = voterDetailsDao.findByStatus(status);
        List<VoterDetailsDto> voterDetailsDtos = new ArrayList<>();
        
        for (VoterDetails voterDetails : voterDetailsList) {
            voterDetailsDtos.add(convertToDto(voterDetails));
        }
        
        return voterDetailsDtos;
    }
    
    @Override
    public VoterDetailsDto updateVoterDetails(Integer voterId, VoterDetailsDto voterDetailsDto) {
        Optional<VoterDetails> voterDetailsOptional = voterDetailsDao.findById(voterId);
        if (voterDetailsOptional.isPresent()) {
            VoterDetails voterDetails = voterDetailsOptional.get();
            
            voterDetails.setFirstName(voterDetailsDto.getFirstName());
            voterDetails.setLastName(voterDetailsDto.getLastName());
            voterDetails.setGender(voterDetailsDto.getGender());
            voterDetails.setDob(voterDetailsDto.getDob());
            voterDetails.setPlaceOfBirth(voterDetailsDto.getPlaceOfBirth());
            voterDetails.setPhotoPath(voterDetailsDto.getPhotoPath());
            voterDetails.setAddressProofPath(voterDetailsDto.getAddressProofPath());
            voterDetails.setAadhaarNo(voterDetailsDto.getAadhaarNo());
            voterDetails.setEpicNumber(voterDetailsDto.getEpicNumber());
            voterDetails.setStatus(voterDetailsDto.getStatus());
            
            VoterDetails updatedVoterDetails = voterDetailsDao.save(voterDetails);
            return convertToDto(updatedVoterDetails);
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
    
    private VoterDetailsDto convertToDto(VoterDetails voterDetails) {
        VoterDetailsDto dto = new VoterDetailsDto();
        dto.setVoterId(voterDetails.getVoterId());
        dto.setUserId(voterDetails.getUser() != null ? voterDetails.getUser().getUserId() : null);
        dto.setFirstName(voterDetails.getFirstName());
        dto.setLastName(voterDetails.getLastName());
        dto.setGender(voterDetails.getGender());
        dto.setDob(voterDetails.getDob());
        dto.setPlaceOfBirth(voterDetails.getPlaceOfBirth());
        dto.setPhotoPath(voterDetails.getPhotoPath());
        dto.setAddressProofPath(voterDetails.getAddressProofPath());
        dto.setAadhaarNo(voterDetails.getAadhaarNo());
        dto.setEpicNumber(voterDetails.getEpicNumber());
        dto.setStatus(voterDetails.getStatus());
        return dto;
    }
}

