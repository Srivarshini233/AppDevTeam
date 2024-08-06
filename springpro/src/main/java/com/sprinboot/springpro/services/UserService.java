package com.sprinboot.springpro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprinboot.springpro.models.User;
import com.sprinboot.springpro.repos.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo urepo;
    public List<User> getUsers(){
        return urepo.findAll();
    }
    public User addUser(User user){
        return urepo.save(user);
    }
    public String editUser(User user,String uid){
        User userx = urepo.findById(uid).orElse(null);
        if(userx!=null){
            userx.setName(user.getName());
            urepo.saveAndFlush(userx);
            return userx + "Updated";
        }
        return "User not Found!";
    }
    public String deleteUser(String uid){
        urepo.deleteById(uid);
       return "Deleted";
    }
   

}
