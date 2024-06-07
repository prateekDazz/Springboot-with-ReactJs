package com.microservice.Demo.mapper;


import com.microservice.Demo.dto.UserDto;
import com.microservice.Demo.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;


public interface AutoUserMapper {

    AutoUserMapper MAPPER = Mappers.getMapper(AutoUserMapper.class);

    UserDto mapToUserDto(User user);

     User mapToUser(UserDto userDto);
}
