package com.sprinboot.springpro.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sprinboot.springpro.models.User;

public interface UserRepo extends JpaRepository<User,String> {

}
