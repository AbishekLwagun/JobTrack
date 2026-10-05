package com.jobtrack.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class ApplicationControllerTests {

    @Autowired
    private MockMvc mockMvc;


    @Test
    void shouldGetApplications() throws Exception {

        mockMvc.perform(get("/applications"))
                .andExpect(status().isOk());
    }


    @Test
    void shouldReturn404WhenApplicationDoesNotExist() throws Exception {

        mockMvc.perform(get("/applications/999999"))
                .andExpect(status().isNotFound());
    }


    @Test
    void shouldRejectInvalidApplication() throws Exception {

        mockMvc.perform(post("/applications")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "company": "",
                                    "position": "Software Engineer",
                                    "status": "Applied"
                                }
                                """))
                .andExpect(status().isBadRequest());
    }


    @Test
    void shouldCreateApplication() throws Exception {

        mockMvc.perform(post("/applications")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "company": "Test Company",
                                    "position": "Software Engineer",
                                    "status": "Applied"
                                }
                                """))
                .andExpect(status().isCreated());
    }
}