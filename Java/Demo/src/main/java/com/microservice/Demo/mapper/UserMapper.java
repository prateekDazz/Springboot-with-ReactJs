package com.microservice.Demo.mapper;


import com.microservice.Demo.dto.UserDto;
import com.microservice.Demo.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    // Convert User JPA Entity into UserDto
    public  UserDto mapToUserDto(User user){
        UserDto userDto = new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail()
        );
        return userDto;
    }

    // Convert UserDto into User JPA Entity
    public  User mapToUser(UserDto userDto){
        User user = new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail()
        );
        return user;
    }
}
