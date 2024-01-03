package com.example.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.demo.Models.Student;
import com.example.demo.Models.responseMessage;
import com.example.demo.Service.StudentService;

import jakarta.validation.Valid;
@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("api/student")
public class StudentController {

	@Autowired
	private StudentService studentService ;
		
	@PostMapping("/add")
	public ResponseEntity<Object> addStudent(@RequestBody @Valid Student s, BindingResult bindingResult) {
		System.out.println(s.getNote());
		List<Student> list= studentService.giveMeStudentByName(s.getName());
		if(list.size()!=0) return new ResponseEntity<>("Student Already Exist in database",HttpStatus.CONFLICT);
		 if (bindingResult.hasErrors()  ) {
	            // Handle validation errors
			 	Map<String, String> errorsData = new HashMap<>();
			 if(bindingResult.getFieldError("name")!=null)	errorsData.put("name",bindingResult.getFieldError("name").getDefaultMessage());
			 if(bindingResult.getFieldError("note")!=null) 	errorsData.put("note",bindingResult.getFieldError("note").getDefaultMessage());

	            List<String> errors = bindingResult.getAllErrors().stream()
	                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
	                    .collect(Collectors.toList());
	            System.out.println(ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors));
	            return ResponseEntity.ok(new responseMessage(errors.toString(),404,errorsData));
	        }

	        // Your business logic to save the user
			studentService.AddStudent(s);

	        return ResponseEntity.ok(new responseMessage("Student saved Successfully",200,null));
	    }
	

	@GetMapping("/all")
	public List<Student> allStudent(Student s) {
		
		return studentService.lister();
	}
	
	@GetMapping("/delete/{Id}")
	public ResponseEntity<responseMessage> deleteStudent(@PathVariable Long Id) {
		System.out.println("bujfgfg");
		 studentService.deleteStudent(Id);
		 return ResponseEntity.ok(new responseMessage("student deleted",203,null));
	}
	@GetMapping("/getById/{Id}")
	public Student getById(@PathVariable Long Id) {
		
		
		 return studentService.giveMeStudentById(Id);
	}
	
	@PutMapping("/edit/{Id}")
	public ResponseEntity<responseMessage> getById(@RequestBody Student s, @PathVariable Long  Id) {
		System.out.println("edit");
		studentService.AddStudent(s);
		 return  ResponseEntity.ok(new responseMessage("Student updated", 200, null));
	}
	

}

