package com.sih.msde.divergents.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.sih.msde.divergents.dto.JobRoleDto;

import com.sih.msde.divergents.service.JobRoleService;

@RestController
public class JobRoleController {

	@Autowired
	private JobRoleService jobRoleService;
	
	@RequestMapping(value="/getJobRoleForSelectedLetter",method=RequestMethod.POST)
	public Collection<JobRoleDto> getJobRolesForSelectedLetter(@RequestParam("letter") String letter){
		return jobRoleService.getJobRoles(letter);
	}
	
}