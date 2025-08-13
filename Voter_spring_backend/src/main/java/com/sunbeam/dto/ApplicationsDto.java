package com.sunbeam.dto;

import java.time.LocalDateTime;

import com.sunbeam.entities.Applications.ApplicationStatus;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationsDto {
    private Integer applicationId;
    private Integer voterId;
    private Integer reviewedBy;
    private LocalDateTime submittedOn;
    
    @NotNull(message = "Status is required")
    private ApplicationStatus status;
    
    private LocalDateTime reviewedOn;
}

