package com.ttc.spring.services;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient; 
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.stereotype.Service; 

@Service
public class CheckAuth {

	
	
	
	
	public HttpRequest checkAuth(String token) throws URISyntaxException, InterruptedException, IOException {
		 
		HttpRequest request = HttpRequest.newBuilder()
		  .header("Content-Type", "application/json")
		  .header("Authorization", token)
		  .uri(new URI("http://localhost:8082/api/auth/verify")).build();

		return request;
	}
}
