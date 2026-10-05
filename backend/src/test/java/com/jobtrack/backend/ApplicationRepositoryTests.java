package com.jobtrack.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;
import org.springframework.transaction.annotation.Transactional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ApplicationRepositoryTests {

    @Autowired
    private ApplicationRepository repository;

    @Test
    @Transactional
    void shouldSaveApplication() {
        //arrange
        Application testSave = new Application();
        testSave.setCompany("2Test Company");
        testSave.setPosition("2Software Engineer");
        testSave.setStatus("2Applied");

        //act
        repository.save(testSave);

        //assert
        assertNotNull(testSave.getId());
    }

    @Test
    @Transactional
    void shouldFindApplicationById(){
        //arrange
        Application testFind = new Application();
        testFind.setCompany("FindTech");
        testFind.setPosition("Financial Director");
        testFind.setStatus("Applied");

        //act
        repository.save(testFind);
        Optional<Application> result = repository.findById(testFind.getId());

        //assert
        assertTrue(result.isPresent());
        assertEquals("FindTech", result.get().getCompany());
    }

    @Test
    @Transactional
    void shouldUpdateApplication() {
        // Arrange
        Application application = new Application();
        application.setCompany("Old Company");
        application.setPosition("Software Engineer");
        application.setStatus("Applied");

        repository.save(application);

        // Act
        application.setCompany("New Company");
        repository.save(application);

        Application updated =
                repository.findById(application.getId()).get();

        // Assert
        assertEquals("New Company", updated.getCompany());
    }

    @Test
    @Transactional
    void shouldDeleteApplication() {
        // Arrange
        Application application = new Application();
        application.setCompany("DeleteTech");
        application.setPosition("Software Engineer");
        application.setStatus("Applied");

        repository.save(application);

        Long id = application.getId();

        // Act
        repository.delete(application);

        Optional<Application> result = repository.findById(id);

        // Assert
        assertTrue(result.isEmpty());
    }
}
