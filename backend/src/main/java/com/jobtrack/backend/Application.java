package com.jobtrack.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.time.LocalDate;

@Entity
public class Application{
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;
      private String company;
      private String position;
      private String status;
      private String location;
      private String jobUrl;
      private String jobDescription;
      private String notes;
      private LocalDate applicationDate;
      private LocalDate followUpDate;
      private LocalDate interviewDate;



    public Application(
                         String company,
                         String position,
                         String status,
                         String location,
                         String jobUrl,
                         String jobDescription,
                         String notes
      )  {
          this.company = company;
          this.position = position;
          this.status = status;
          this.location = location;
          this.jobUrl = jobUrl;
          this.jobDescription = jobDescription;
          this.notes = notes;

      }

      public Application(){

      }

      public Long getId() { return id; }
      public String getCompany(){
          return company;
      }

      public String getPosition(){
          return position;
      }

      public String getStatus(){
          return status;
      }

      public String getLocation() {
          return location;
      }
      public String getJobUrl(){
          return jobUrl;
      }

      public String getJobDescription(){
          return jobDescription;
      }

      public String getNotes(){
          return notes;
      }

      public LocalDate getApplicationDate(){
        return applicationDate;
      }

    public LocalDate getFollowUpDate() {
        return followUpDate;
    }

    public LocalDate getInterviewDate() {
        return interviewDate;
    }


    public void setCompany(String company){
          this.company = company;
      }

      public void setPosition(String position){
          this.position = position;
      }

      public void setStatus(String status){
          this.status = status;
      }

      public void setLocation(String location) {
          this.location = location;
      }

      public void setJobUrl(String jobUrl){
          this.jobUrl = jobUrl;
      }

      public void setJobDescription(String jobDescription){
          this.jobDescription = jobDescription;
      }

      public void setNotes(String notes){
          this.notes = notes;
      }


    public void setApplicationDate(LocalDate applicationDate) {
        this.applicationDate = applicationDate;
    }

    public void setFollowUpDate(LocalDate followUpDate) {
        this.followUpDate = followUpDate;
    }

    public void setInterviewDate(LocalDate interviewDate) {
        this.interviewDate = interviewDate;
    }
}