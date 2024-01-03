package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Student;
import com.example.demo.Repository.IStudent;

@Service
public class StudentService {

	@Autowired
	private IStudent studentRepo ;
	
	
	public void AddStudent(Student s) {
		
		studentRepo.save(s) ;
	}
	public List<Student> lister() {
		return studentRepo.findAll() ;
	}
	
	public void deleteStudent(Long id ) {
		
		studentRepo.deleteById(id);
		
	}
	public Student giveMeStudentById(Long id) {
		return studentRepo.findById(id).get() ;
	}
	public List<Student> giveMeStudentByName(String name) {
		return studentRepo.findByName(name);
	}
}
