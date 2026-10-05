package com.jobtrack.backend;

import org.springframework.http.HttpStatusCode;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import java.util.Optional;

import java.util.List;

@RestController
public class ApplicationController{

    private final ApplicationRepository repository;

    public ApplicationController(ApplicationRepository repository){
        this.repository  = repository;
    }

    @GetMapping("/applications")
    public List<Application> getApplications(){
          return repository.findAll();
    }

    @GetMapping("/applications/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable Long id){

        Optional<Application> resultById = repository.findById(id);
        if(resultById.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(resultById.get());

    }

    @PutMapping("/applications/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable Long id, @RequestBody Application application){
        Optional<Application> doesExist = repository.findById(id);
        if(doesExist.isEmpty()){
            return  ResponseEntity.notFound().build();
        }else{
            Application update = doesExist.get();
            update.setCompany(application.getCompany());
            update.setPosition(application.getPosition());
            update.setStatus(application.getStatus());
            update.setApplicationDate(application.getApplicationDate());
            update.setLocation(application.getLocation());
            update.setJobUrl(application.getJobUrl());
            update.setJobDescription(application.getJobDescription());
            update.setNotes(application.getNotes());
            update.setFollowUpDate(application.getFollowUpDate());
            update.setInterviewDate(application.getInterviewDate());

            repository.save(update);
            return ResponseEntity.ok(update);
        }
    }

    @DeleteMapping("applications/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id){
        Optional<Application> deleteById = repository.findById(id);

        if(deleteById.isEmpty()){
            return ResponseEntity.notFound().build();
        }else{
            Application removeInfo = deleteById.get();
            repository.delete(removeInfo);
            return ResponseEntity.noContent().build();

        }
    }


    @PostMapping("/applications")
    public  ResponseEntity<Application> createApplication(@RequestBody Application application, Errors errors){
        if (application.getCompany() == null
                || application.getCompany().isBlank()
                || application.getPosition() == null
                || application.getPosition().isBlank()
                || application.getStatus() == null
                || application.getStatus().isBlank()) {

            return ResponseEntity.badRequest().build();
        }

          Application savedApplication = repository.save(application);
          return ResponseEntity.status(201).body(savedApplication);


    }
}