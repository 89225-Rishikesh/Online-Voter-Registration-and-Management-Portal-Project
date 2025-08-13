package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Notifications;
import com.sunbeam.entities.Notifications.NotificationType;

@Repository
public interface NotificationsDao extends JpaRepository<Notifications, Integer> {
    
    List<Notifications> findByUserUserId(Integer userId);
    
    List<Notifications> findByType(NotificationType type);
    
    List<Notifications> findByIsRead(Boolean isRead);
    
    @Query("SELECT n FROM Notifications n WHERE n.user.userId = :userId AND n.isRead = :isRead")
    List<Notifications> findByUserIdAndIsRead(@Param("userId") Integer userId, @Param("isRead") Boolean isRead);
    
    @Query("SELECT n FROM Notifications n WHERE n.user.userId = :userId ORDER BY n.sentOn DESC")
    List<Notifications> findByUserIdOrderBySentOnDesc(@Param("userId") Integer userId);
    
    @Query("SELECT COUNT(n) FROM Notifications n WHERE n.user.userId = :userId AND n.isRead = false")
    Long countUnreadByUserId(@Param("userId") Integer userId);
}

