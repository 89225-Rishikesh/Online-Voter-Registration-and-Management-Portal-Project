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
import com.sunbeam.dto.VolunteerDto;
import com.sunbeam.entities.Volunteer.VolunteerRole;
import com.sunbeam.service.VolunteerService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/volunteers")
@CrossOrigin(origins = "http://localhost:5173/")
@AllArgsConstructor
public class VolunteerController {
    
    private final VolunteerService volunteerService;
    
    @PostMapping
    public ResponseEntity<?> createVolunteer(@Valid @RequestBody VolunteerDto volunteerDto) {
        try {
            VolunteerDto createdVolunteer = volunteerService.createVolunteer(volunteerDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdVolunteer);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @GetMapping("/{volunteerId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getVolunteerById(@PathVariable Integer volunteerId) {
        try {
            VolunteerDto volunteerDto = volunteerService.getVolunteerById(volunteerId);
            return ResponseEntity.ok(volunteerDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<VolunteerDto>> getAllVolunteers() {
        List<VolunteerDto> volunteers = volunteerService.getAllVolunteers();
        return ResponseEntity.ok(volunteers);
    }
    
    @GetMapping("/role")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<VolunteerDto>> getVolunteersByRole(@RequestParam VolunteerRole role) {
        List<VolunteerDto> volunteers = volunteerService.getVolunteersByRole(role);
        return ResponseEntity.ok(volunteers);
    }
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<List<VolunteerDto>> getVolunteersByUserId(@PathVariable Integer userId) {
        List<VolunteerDto> volunteers = volunteerService.getVolunteersByUserId(userId);
        return ResponseEntity.ok(volunteers);
    }
    
    @PutMapping("/{volunteerId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateVolunteer(@PathVariable Integer volunteerId, 
                                             @Valid @RequestBody VolunteerDto volunteerDto) {
        try {
            VolunteerDto updatedVolunteer = volunteerService.updateVolunteer(volunteerId, volunteerDto);
            return ResponseEntity.ok(updatedVolunteer);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @DeleteMapping("/{volunteerId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteVolunteer(@PathVariable Integer volunteerId) {
        try {
            volunteerService.deleteVolunteer(volunteerId);
            return ResponseEntity.ok(new ApiResponse("Volunteer deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage(), false));
        }
    }
    
    @GetMapping("/exists/email/{email}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Boolean> checkEmailExists(@PathVariable String email) {
        boolean exists = volunteerService.existsByEmail(email);
        return ResponseEntity.ok(exists);
    }
    
    @GetMapping("/exists/phone/{phone}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Boolean> checkPhoneExists(@PathVariable String phone) {
        boolean exists = volunteerService.existsByPhone(phone);
        return ResponseEntity.ok(exists);
    }
}

