package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.Student;

@Repository
public interface IStudent extends JpaRepository<Student,Long> {

	List<Student> findByName(String name);
}
