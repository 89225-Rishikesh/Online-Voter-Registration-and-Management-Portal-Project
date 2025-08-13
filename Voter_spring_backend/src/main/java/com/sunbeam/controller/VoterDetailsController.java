package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.VoterDetailsDto;
import com.sunbeam.entities.VoterDetails.Status;
import com.sunbeam.service.VoterDetailsService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/voter-details")
@CrossOrigin(origins = "http://localhost:5173/")
@AllArgsConstructor
public class VoterDetailsController {
    
    private final VoterDetailsService voterDetailsService;
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<?> createVoterDetails(@RequestBody VoterDetailsDto voterDetailsDto) {
        try {
            VoterDetailsDto createdVoterDetails = voterDetailsService.createVoterDetails(voterDetailsDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdVoterDetails);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @GetMapping("/{voterId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<?> getVoterDetailsById(@PathVariable Integer voterId) {
        try {
            VoterDetailsDto voterDetailsDto = voterDetailsService.getVoterDetailsById(voterId);
            return ResponseEntity.ok(voterDetailsDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<?> getVoterDetailsByUserId(@PathVariable Integer userId) {
        try {
            VoterDetailsDto voterDetailsDto = voterDetailsService.getVoterDetailsByUserId(userId);
            return ResponseEntity.ok(voterDetailsDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<VoterDetailsDto>> getAllVoterDetails() {
        List<VoterDetailsDto> voterDetailsList = voterDetailsService.getAllVoterDetails();
        return ResponseEntity.ok(voterDetailsList);
    }
    
    @GetMapping("/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<VoterDetailsDto>> getVoterDetailsByStatus(@RequestParam Status status) {
        List<VoterDetailsDto> voterDetailsList = voterDetailsService.getVoterDetailsByStatus(status);
        return ResponseEntity.ok(voterDetailsList);
    }
    
    @PutMapping("/{voterId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<?> updateVoterDetails(@PathVariable Integer voterId, 
                                                @Valid @RequestBody VoterDetailsDto voterDetailsDto) {
        try {
            VoterDetailsDto updatedVoterDetails = voterDetailsService.updateVoterDetails(voterId, voterDetailsDto);
            return ResponseEntity.ok(updatedVoterDetails);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @DeleteMapping("/{voterId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteVoterDetails(@PathVariable Integer voterId) {
        try {
            voterDetailsService.deleteVoterDetails(voterId);
            return ResponseEntity.ok(new ApiResponse("Voter details deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @GetMapping("/exists/aadhaar/{aadhaarNo}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Boolean> checkAadhaarExists(@PathVariable String aadhaarNo) {
        boolean exists = voterDetailsService.existsByAadhaarNo(aadhaarNo);
        return ResponseEntity.ok(exists);
    }
    
    @GetMapping("/exists/epic/{epicNumber}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Boolean> checkEpicExists(@PathVariable String epicNumber) {
        boolean exists = voterDetailsService.existsByEpicNumber(epicNumber);
        return ResponseEntity.ok(exists);
    }
}

