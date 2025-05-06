package com.larisa.jobtracker.controller


import com.larisa.jobtracker.model.InterviewFeedback
import com.larisa.jobtracker.model.JobApplication
import com.larisa.jobtracker.repository.InterviewFeedbackRepository
import com.larisa.jobtracker.repository.JobApplicationRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/jobs/{jobId}/feedback")

class InterviewFeedbackController(
    private val feedbackRepository: InterviewFeedbackRepository,
    private val jobRepository: JobApplicationRepository
) {

    @PostMapping
    fun addFeedback(
        @PathVariable jobId: Long,
        @RequestBody feedback: InterviewFeedback
    ): InterviewFeedback {
        val job = jobRepository.findById(jobId).orElseThrow { Exception("Job not found") }

        val feedbackWithJob = feedback.copy(jobApplication = job)

        return feedbackRepository.save(feedbackWithJob)
    }

    @GetMapping
    fun getFeedbackForJob(@PathVariable jobId: Long): List<InterviewFeedback> {
        return feedbackRepository.findByJobApplicationId(jobId)
    }
}
