package com.sanjana.sdp.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sanjana.sdp.model.Users;
import com.sanjana.sdp.service.UserService;

@RestController()
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserService uservice;

    @GetMapping("/getusers")
    public List<Users> GetUsers() {
        return uservice.getUsers();
    }
    @GetMapping("/login")
    public boolean login(@RequestParam String email, @RequestParam String password) {
        Users existinguser = uservice.findUserByEmail(email);
        return existinguser!=null && existinguser.getPassword().equals(password);
    }

    @PostMapping("/register")
    public Users AddUsers(@RequestBody Users user) {
        return uservice.addUsers(user);
    }

    @DeleteMapping("/delete/{uid}")
    public String DeleteUser(@PathVariable Long uid) {
        return uservice.deleteUser(uid);
    }

}