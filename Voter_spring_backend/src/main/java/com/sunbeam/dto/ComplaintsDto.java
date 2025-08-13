package com.sunbeam.dto;

import java.time.LocalDateTime;

import com.sunbeam.entities.Complaints.ComplaintStatus;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ComplaintsDto {
    private Integer complaintId;
    private Integer voterId;
    
    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name must not exceed 100 characters")
    private String name;
    
    private String text;
    
    @NotNull(message = "Status is required")
    private ComplaintStatus status;
    
    private LocalDateTime createdAt;
}

