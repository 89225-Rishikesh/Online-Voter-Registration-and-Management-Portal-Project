package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ComplaintsDto;
import com.sunbeam.entities.Complaints.ComplaintStatus;

public interface ComplaintsService {
    ComplaintsDto createComplaint(ComplaintsDto complaintsDto);
    ComplaintsDto getComplaintById(Integer complaintId);
    List<ComplaintsDto> getAllComplaints();
    List<ComplaintsDto> getComplaintsByVoterId(Integer voterId);
    List<ComplaintsDto> getComplaintsByStatus(ComplaintStatus status);
    List<ComplaintsDto> getComplaintsByVoterIdAndStatus(Integer voterId, ComplaintStatus status);
    ComplaintsDto updateComplaint(Integer complaintId, ComplaintsDto complaintsDto);
    void deleteComplaint(Integer complaintId);
    Long countByStatus(ComplaintStatus status);
}
