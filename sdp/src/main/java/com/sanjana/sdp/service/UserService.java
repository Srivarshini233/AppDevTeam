package com.sanjana.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanjana.sdp.model.Users;
import com.sanjana.sdp.repo.UserRepo;
@Service
public class UserService {
    @Autowired
    private UserRepo urepo;
    public Users addUsers(Users user){
        return urepo.save(user);
    }
    public List<Users> getUsers(){
        return urepo.findAll();
    }
    public Users findUserByEmail(String email){
        return urepo.findUserByEmail(email); 
    }
    public String deleteUser(Long uid){
        urepo.deleteById(uid);
        return "user deleted successfully" + uid;
    }

}
