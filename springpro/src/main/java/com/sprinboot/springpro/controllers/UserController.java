package com.sprinboot.springpro.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprinboot.springpro.models.User;
import com.sprinboot.springpro.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
     private UserService uservice;

    @GetMapping("/getusers")
    public List<User> getUsers() {
        return uservice.getUsers();
    }

    @PostMapping("/register")
    public User addUser(@RequestBody User user) {
        return uservice.addUser(user);
    }

    @DeleteMapping("/delete/{uid}")
    public String deleteUser(@PathVariable String uid) {
        return uservice.deleteUser(uid);
    }
    @PutMapping("/edit/{uid}")
        public String editUser(@RequestBody User user,@PathVariable String uid){
             return uservice.editUser(user,uid);
        }
    

}
