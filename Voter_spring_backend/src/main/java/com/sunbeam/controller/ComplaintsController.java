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
import com.sunbeam.dto.ComplaintsDto;
import com.sunbeam.entities.Complaints.ComplaintStatus;
import com.sunbeam.service.ComplaintsService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/complaints")
@CrossOrigin(origins = "http://localhost:5173/")
@AllArgsConstructor
public class ComplaintsController {
    
    private final ComplaintsService complaintsService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<?> createComplaint(@Valid @RequestBody ComplaintsDto complaintsDto) {
        try {
            ComplaintsDto created = complaintsService.createComplaint(complaintsDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage(), false));
        }
    }

    @GetMapping("/{complaintId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<?> getComplaintById(@PathVariable Integer complaintId) {
        try {
            ComplaintsDto dto = complaintsService.getComplaintById(complaintId);
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage(), false));
        }
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<ComplaintsDto>> getAllComplaints() {
        List<ComplaintsDto> list = complaintsService.getAllComplaints();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/voter/{voterId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<List<ComplaintsDto>> getComplaintsByVoterId(@PathVariable Integer voterId) {
        List<ComplaintsDto> list = complaintsService.getComplaintsByVoterId(voterId);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<ComplaintsDto>> getComplaintsByStatus(@RequestParam ComplaintStatus status) {
        List<ComplaintsDto> list = complaintsService.getComplaintsByStatus(status);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/voter/{voterId}/status")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<List<ComplaintsDto>> getComplaintsByVoterIdAndStatus(@PathVariable Integer voterId, @RequestParam ComplaintStatus status) {
        List<ComplaintsDto> list = complaintsService.getComplaintsByVoterIdAndStatus(voterId, status);
        return ResponseEntity.ok(list);
    }

    @PutMapping("/{complaintId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VOTER')")
    public ResponseEntity<?> updateComplaint(@PathVariable Integer complaintId, @Valid @RequestBody ComplaintsDto complaintsDto) {
        try {
            ComplaintsDto updated = complaintsService.updateComplaint(complaintId, complaintsDto);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage(), false));
        }
    }

    @DeleteMapping("/{complaintId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteComplaint(@PathVariable Integer complaintId) {
        try {
            complaintsService.deleteComplaint(complaintId);
            return ResponseEntity.ok(new ApiResponse("Complaint deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage(), false));
        }
    }

    @GetMapping("/count/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Long> countComplaintsByStatus(@RequestParam ComplaintStatus status) {
        Long count = complaintsService.countByStatus(status);
        return ResponseEntity.ok(count);
    }
}