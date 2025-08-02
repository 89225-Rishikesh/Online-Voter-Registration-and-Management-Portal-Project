package com.voterPortal;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer notificationId;

    private String message;
    private LocalDate sentOn;
    private Boolean isRead;
    
    @Enumerated(EnumType.STRING)
    private NotificationType type;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}

