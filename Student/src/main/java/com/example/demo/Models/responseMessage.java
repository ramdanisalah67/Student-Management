package com.example.demo.Models;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class responseMessage {
	private String message ;
	private int responseCode ;
	private Map<String, String> Data ;
}
