package com.ibrahim.media.services;


import com.ibrahim.media.models.Media;
import com.ibrahim.media.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpRequest;
import java.util.List;

@Service
public class CheckAuth {





    public HttpRequest checkAuth(String token) throws URISyntaxException, InterruptedException, IOException {

        HttpRequest request = HttpRequest.newBuilder()
                .header("Content-Type", "application/json")
                .header("Authorization", token)
                .uri(new URI("http://localhost:8080/api/auth/verify")).build();

        return request;
    }
}