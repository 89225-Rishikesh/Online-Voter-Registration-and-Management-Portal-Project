/**
 * api.js - Centralized API endpoints
 * Contains type definitions and API functions
 */

const API_BASE_URL = "http://localhost:8080";

// User Management APIs
/**
 * Register a new user
 * @param {{username: string, password: string, email: string, mobile: string, role: string}} userData
 * @returns {Promise<Response>}
 */
export const signupUser = async (userData) => {
  return fetch(`${API_BASE_URL}/users/signup`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData),
  });
};

/**
 * Authenticate a user
 * @param {{username?: string, email?: string, password: string}} credentials
 * @returns {Promise<Response>}
 */
export const signinUser = async (credentials) => {
  const loginPayload = {
    password: credentials.password,
    email: credentials.email
  };

  // If no email is provided but username contains @, use it as email
  if (!loginPayload.email && credentials.username && credentials.username.includes('@')) {
    loginPayload.email = credentials.username;
  } else if (!loginPayload.email && credentials.username) {
    loginPayload.username = credentials.username;
  }

  return fetch(`${API_BASE_URL}/users/signin`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    credentials: 'include',
    body: JSON.stringify(loginPayload),
  });
};

export const getUserById = async (userId) => {
  return fetch(`${API_BASE_URL}/users/${userId}`);
};

/**
 * Register a new admin user
 * @param {{username: string, password: string, email: string, mobile: string}} adminData
 * @returns {Promise<Response>}
 */
export const registerAdmin = async (adminData) => {
  return fetch(`${API_BASE_URL}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...adminData,
      role: "ADMIN"
    }),
  });
};

/**
 * Authenticate an admin user
 * @param {{email: string, password: string}} credentials
 * @returns {Promise<Response>}
 */
export const signinAdmin = async (credentials) => {
  return fetch(`${API_BASE_URL}/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
};

export const getUserByEmail = async (email) => {
  return fetch(`${API_BASE_URL}/users/email/${encodeURIComponent(email)}`);
};

export const getAllUsers = async () => {
  return fetch(`${API_BASE_URL}/users`);
};

export const updateUser = async (userId, data) => {
  return fetch(`${API_BASE_URL}/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteUser = async (userId) => {
  return fetch(`${API_BASE_URL}/users/${userId}`, { method: "DELETE" });
};

export const checkEmailExists = async (email) => {
  return fetch(`${API_BASE_URL}/users/exists/email/${encodeURIComponent(email)}`);
};

export const checkUsernameExists = async (username) => {
  return fetch(`${API_BASE_URL}/users/exists/username/${encodeURIComponent(username)}`);
};

// VOLUNTEERS
export const createVolunteer = async (volunteerData) => {
  return fetch(`${API_BASE_URL}/volunteers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(volunteerData),
  });
};

export const getVolunteerById = async (volunteerId) => {
  return fetch(`${API_BASE_URL}/volunteers/${volunteerId}`);
};

export const getAllVolunteers = async () => {
  return fetch(`${API_BASE_URL}/volunteers`);
};

export const getVolunteersByRole = async (role) => {
  return fetch(`${API_BASE_URL}/volunteers/role?role=${encodeURIComponent(role)}`);
};

export const getVolunteersByUserId = async (userId) => {
  return fetch(`${API_BASE_URL}/volunteers/user/${userId}`);
};

export const updateVolunteer = async (volunteerId, data) => {
  return fetch(`${API_BASE_URL}/volunteers/${volunteerId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteVolunteer = async (volunteerId) => {
  return fetch(`${API_BASE_URL}/volunteers/${volunteerId}`, { method: "DELETE" });
};

export const checkVolunteerEmailExists = async (email) => {
  return fetch(`${API_BASE_URL}/volunteers/exists/email/${encodeURIComponent(email)}`);
};

export const checkVolunteerPhoneExists = async (phone) => {
  return fetch(`${API_BASE_URL}/volunteers/exists/phone/${encodeURIComponent(phone)}`);
};

// Voter Management APIs
/**
 * Create voter details
 * @param {{
 *   userId: number,
 *   firstName: string,
 *   lastName: string,
 *   gender: string,
 *   dob: string,
 *   placeOfBirth: string,
 *   aadhaarNo: string,
 *   epicNumber: string,
 *   status: string
 * }} voterData
 * @returns {Promise<Response>}
 */
export const createVoterDetails = async (voterData) => {
  return fetch(`${API_BASE_URL}/voter-details`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(voterData),
  });
};

export const getVoterDetailsById = async (voterId) => {
  return fetch(`${API_BASE_URL}/voter-details/${voterId}`);
};

export const getVoterDetailsByUserId = async (userId) => {
  return fetch(`${API_BASE_URL}/voter-details/user/${userId}`);
};

export const getAllVoterDetails = async () => {
  return fetch(`${API_BASE_URL}/voter-details`);
};

export const getVoterDetailsByStatus = async (status) => {
  return fetch(`${API_BASE_URL}/voter-details/status?status=${encodeURIComponent(status)}`);
};

export const updateVoterDetails = async (voterId, data) => {
  return fetch(`${API_BASE_URL}/voter-details/${voterId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteVoterDetails = async (voterId) => {
  return fetch(`${API_BASE_URL}/voter-details/${voterId}`, { method: "DELETE" });
};

export const checkAadhaarExists = async (aadhaarNo) => {
  return fetch(`${API_BASE_URL}/voter-details/exists/aadhaar/${encodeURIComponent(aadhaarNo)}`);
};

export const checkEpicExists = async (epicNumber) => {
  return fetch(`${API_BASE_URL}/voter-details/exists/epic/${encodeURIComponent(epicNumber)}`);
};

/**
 * Create/Update voter address
 * @param {{
 *   voterId: number,
 *   type: string,
 *   houseNo: string,
 *   street: string,
 *   locality: string,
 *   district: string,
 *   state: string,
 *   pinCode: string,
 *   documentPath?: string
 * }} addressData
 * @returns {Promise<Response>}
 */
export const createOrUpdateAddress = async (addressData) => {
  return fetch(`${API_BASE_URL}/voter-details/address`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addressData),
  });
};

// Complaint Management APIs
/**
 * Create complaint
 * @param {{
 *   voterId: number,
 *   name: string,
 *   text: string,
 *   status: string
 * }} complaintData
 * @returns {Promise<Response>}
 */
export const createComplaint = async (complaintData) => {
  return fetch(`${API_BASE_URL}/complaints`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(complaintData),
  });
};

export const getComplaintById = async (complaintId) => {
  return fetch(`${API_BASE_URL}/complaints/${complaintId}`);
};

export const getComplaintsByVoterId = async (voterId) => {
  return fetch(`${API_BASE_URL}/complaints/voter/${voterId}`);
};

export const updateComplaintStatus = async (complaintId, status) => {
  return fetch(`${API_BASE_URL}/complaints/${complaintId}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
};

// Notification Management APIs
/**
 * Create notification
 * @param {{
 *   userId: number,
 *   type: string,
 *   message: string
 * }} notificationData
 * @returns {Promise<Response>}
 */
export const createNotification = async (notificationData) => {
  return fetch(`${API_BASE_URL}/notifications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notificationData),
  });
};

export const getNotificationsByUserId = async (userId) => {
  return fetch(`${API_BASE_URL}/notifications/user/${userId}`);
};

export const markNotificationRead = async (notificationId) => {
  return fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
    method: "PUT",
  });
};

// Application Management APIs
export const submitApplication = async (applicationData) => {
  return fetch(`${API_BASE_URL}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(applicationData),
  });
};

export const getApplicationStatus = async (applicationId) => {
  return fetch(`${API_BASE_URL}/applications/${applicationId}/status`);
};

// Education Content APIs
export const getEducationContent = async () => {
  return fetch(`${API_BASE_URL}/education-content`);
};

export const getEducationContentByType = async (type) => {
  return fetch(`${API_BASE_URL}/education-content/type/${encodeURIComponent(type)}`);
};

export const createVoterDetailsWithFiles = async ({ voterDto, photoFile, addressProofFile, token }) => {
  const formData = new FormData();
  // JSON part
  formData.append(
    'voter',
    new Blob([JSON.stringify(voterDto)], { type: 'application/json' })
  );
  if (photoFile) formData.append('photo', photoFile);
  if (addressProofFile) formData.append('addressProof', addressProofFile);

  return fetch(`${API_BASE_URL}/voter-details`, {
    method: 'POST',
    headers: {
      // Do NOT set Content-Type manually; browser will add boundary
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    },
    body: formData
  });
};
