package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.EducationContent;
import com.sunbeam.entities.EducationContent.ContentType;

@Repository
public interface EducationContentDao extends JpaRepository<EducationContent, Integer> {
    
    List<EducationContent> findByType(ContentType type);
    
    List<EducationContent> findByTitleContainingIgnoreCase(String title);
    
    List<EducationContent> findByDescriptionContainingIgnoreCase(String description);
}

