package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Volunteer;
import com.sunbeam.entities.Volunteer.VolunteerRole;

@Repository
public interface VolunteerDao extends JpaRepository<Volunteer, Integer> {
    
    List<Volunteer> findByRole(VolunteerRole role);
    
    Optional<Volunteer> findByEmail(String email);
    
    Optional<Volunteer> findByPhone(String phone);
    
    List<Volunteer> findByUserUserId(Integer userId);
    
    @Query("SELECT v FROM Volunteer v WHERE v.user.userId = :userId")
    List<Volunteer> findByUserUserIdCustom(@Param("userId") Integer userId);
    
    boolean existsByEmail(String email);
    
    boolean existsByPhone(String phone);
    
    @Query("SELECT v FROM Volunteer v ORDER BY v.submittedOn DESC")
    List<Volunteer> findAllOrderBySubmittedOnDesc();
}

