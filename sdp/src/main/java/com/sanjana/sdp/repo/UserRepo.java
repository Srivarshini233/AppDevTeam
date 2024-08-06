package com.sanjana.sdp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sanjana.sdp.model.Users;

public interface UserRepo extends JpaRepository<Users,Long>{
   Users findUserByEmail(String email);
}
