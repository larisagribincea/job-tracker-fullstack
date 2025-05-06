package com.larisa.jobtracker.repository

import com.larisa.jobtracker.model.JobApplication
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface JobApplicationRepository : JpaRepository<JobApplication, Long>
