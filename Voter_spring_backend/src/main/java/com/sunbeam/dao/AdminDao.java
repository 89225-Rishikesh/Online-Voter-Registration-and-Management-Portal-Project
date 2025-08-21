package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, Integer> {
    
    Optional<Admin> findByUserUserId(Integer userId);
    
    @Query("SELECT a FROM Admin a WHERE a.user.userId = :userId")
    Optional<Admin> findByUserUserIdCustom(@Param("userId") Integer userId);
    
    Optional<Admin> findByName(String name);
}

