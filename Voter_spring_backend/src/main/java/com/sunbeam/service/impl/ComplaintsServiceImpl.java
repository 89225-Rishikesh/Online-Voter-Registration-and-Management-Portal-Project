package com.sunbeam.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
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
    private final ModelMapper modelMapper;

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
        return modelMapper.map(saved, ComplaintsDto.class);
    }

    @Override
    public ComplaintsDto getComplaintById(Integer complaintId) {
        Optional<Complaints> opt = complaintsDao.findById(complaintId);
        if (opt.isPresent()) {
            return modelMapper.map(opt.get(), ComplaintsDto.class);
        }
        throw new RuntimeException("Complaint not found with id: " + complaintId);
    }

    @Override
    public List<ComplaintsDto> getAllComplaints() {
        List<Complaints> complaints = complaintsDao.findAllOrderByCreatedAtDesc();
        return complaints.stream()
                .map(complaint -> modelMapper.map(complaint, ComplaintsDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ComplaintsDto> getComplaintsByVoterId(Integer voterId) {
        List<Complaints> complaints = complaintsDao.findByVoterVoterId(voterId);
        return complaints.stream()
                .map(complaint -> modelMapper.map(complaint, ComplaintsDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ComplaintsDto> getComplaintsByStatus(ComplaintStatus status) {
        List<Complaints> complaints = complaintsDao.findByStatus(status);
        return complaints.stream()
                .map(complaint -> modelMapper.map(complaint, ComplaintsDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ComplaintsDto> getComplaintsByVoterIdAndStatus(Integer voterId, ComplaintStatus status) {
        List<Complaints> complaints = complaintsDao.findByVoterIdAndStatus(voterId, status);
        return complaints.stream()
                .map(complaint -> modelMapper.map(complaint, ComplaintsDto.class))
                .collect(Collectors.toList());
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
            return modelMapper.map(updated, ComplaintsDto.class);
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


}
