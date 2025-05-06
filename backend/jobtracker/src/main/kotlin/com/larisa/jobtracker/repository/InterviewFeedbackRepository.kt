package com.larisa.jobtracker.repository

import com.larisa.jobtracker.model.InterviewFeedback
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface InterviewFeedbackRepository : JpaRepository<InterviewFeedback, Long> {

    fun findByJobApplicationId(jobId: Long): List<InterviewFeedback>
}
