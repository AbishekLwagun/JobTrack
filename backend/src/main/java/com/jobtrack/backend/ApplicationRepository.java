package com.jobtrack.backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long>{

    Long id(Long id);
}