package com.sunbeam.dto;

import java.time.LocalDateTime;

import com.sunbeam.entities.Notifications.NotificationType;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationsDto {
    private Integer notificationId;
    private Integer userId;
    
    @NotNull(message = "Type is required")
    private NotificationType type;
    
    private String message;
    private LocalDateTime sentOn;
    private Boolean isRead;
}

