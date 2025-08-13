package com.sunbeam.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.ComplaintsDao;
import com.sunbeam.dao.VoterDetailsDao;
import com.sunbeam.dto.ComplaintsDto;
import com.sunbeam.entities.Complaints;
import com.sunbeam.entities.Complaints.ComplaintStatus;
import com.sunbeam.entities.VoterDetails;
import com.sunbeam.service.ComplaintsService;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class ComplaintsServiceImpl implements ComplaintsService {
    
    private final ComplaintsDao complaintsDao;
    private final VoterDetailsDao voterDetailsDao;

    @Override
    public ComplaintsDto createComplaint(ComplaintsDto complaintsDto) {
        Complaints complaint = new Complaints();
        if (complaintsDto.getVoterId() != null) {
            Optional<VoterDetails> voterOpt = voterDetailsDao.findById(complaintsDto.getVoterId());
            if (voterOpt.isPresent()) {
                complaint.setVoter(voterOpt.get());
            } else {
                throw new RuntimeException("Voter not found with id: " + complaintsDto.getVoterId());
            }
        }
        complaint.setName(complaintsDto.getName());
        complaint.setText(complaintsDto.getText());
        complaint.setStatus(complaintsDto.getStatus());
        complaint.setCreatedAt(LocalDateTime.now());
        Complaints saved = complaintsDao.save(complaint);
        return convertToDto(saved);
    }

    @Override
    public ComplaintsDto getComplaintById(Integer complaintId) {
        Optional<Complaints> opt = complaintsDao.findById(complaintId);
        if (opt.isPresent()) {
            return convertToDto(opt.get());
        }
        throw new RuntimeException("Complaint not found with id: " + complaintId);
    }

    @Override
    public List<ComplaintsDto> getAllComplaints() {
        List<Complaints> complaints = complaintsDao.findAllOrderByCreatedAtDesc();
        List<ComplaintsDto> dtos = new ArrayList<>();
        for (Complaints c : complaints) {
            dtos.add(convertToDto(c));
        }
        return dtos;
    }

    @Override
    public List<ComplaintsDto> getComplaintsByVoterId(Integer voterId) {
        List<Complaints> complaints = complaintsDao.findByVoterVoterId(voterId);
        List<ComplaintsDto> dtos = new ArrayList<>();
        for (Complaints c : complaints) {
            dtos.add(convertToDto(c));
        }
        return dtos;
    }

    @Override
    public List<ComplaintsDto> getComplaintsByStatus(ComplaintStatus status) {
        List<Complaints> complaints = complaintsDao.findByStatus(status);
        List<ComplaintsDto> dtos = new ArrayList<>();
        for (Complaints c : complaints) {
            dtos.add(convertToDto(c));
        }
        return dtos;
    }

    @Override
    public List<ComplaintsDto> getComplaintsByVoterIdAndStatus(Integer voterId, ComplaintStatus status) {
        List<Complaints> complaints = complaintsDao.findByVoterIdAndStatus(voterId, status);
        List<ComplaintsDto> dtos = new ArrayList<>();
        for (Complaints c : complaints) {
            dtos.add(convertToDto(c));
        }
        return dtos;
    }

    @Override
    public ComplaintsDto updateComplaint(Integer complaintId, ComplaintsDto complaintsDto) {
        Optional<Complaints> opt = complaintsDao.findById(complaintId);
        if (opt.isPresent()) {
            Complaints complaint = opt.get();
            complaint.setName(complaintsDto.getName());
            complaint.setText(complaintsDto.getText());
            complaint.setStatus(complaintsDto.getStatus());
            Complaints updated = complaintsDao.save(complaint);
            return convertToDto(updated);
        }
        throw new RuntimeException("Complaint not found with id: " + complaintId);
    }

    @Override
    public void deleteComplaint(Integer complaintId) {
        if (complaintsDao.existsById(complaintId)) {
            complaintsDao.deleteById(complaintId);
        } else {
            throw new RuntimeException("Complaint not found with id: " + complaintId);
        }
    }

    @Override
    public Long countByStatus(ComplaintStatus status) {
        return complaintsDao.countByStatus(status);
    }

    private ComplaintsDto convertToDto(Complaints complaint) {
        ComplaintsDto dto = new ComplaintsDto();
        dto.setComplaintId(complaint.getComplaintId());
        dto.setVoterId(complaint.getVoter() != null ? complaint.getVoter().getVoterId() : null);
        dto.setName(complaint.getName());
        dto.setText(complaint.getText());
        dto.setStatus(complaint.getStatus());
        dto.setCreatedAt(complaint.getCreatedAt());
        return dto;
    }
}
