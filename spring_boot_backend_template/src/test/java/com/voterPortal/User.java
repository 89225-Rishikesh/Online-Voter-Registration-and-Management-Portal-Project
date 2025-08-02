package com.voterPortal;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "Users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	@NotBlank
	private String username ;
	
	private String password ;
	private String email ;
	private String mobile ;
	private LocalDate createdAt ;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private Role role ;

	 @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	  private Admin admin;

	 @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	 private List<VoterDetails> voterDetails;

     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	 private List<Notification> notifications;

}
