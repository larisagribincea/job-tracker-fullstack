package com.larisa.jobtracker.controller

import com.larisa.jobtracker.model.JobApplication
import com.larisa.jobtracker.repository.JobApplicationRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/jobs")
class JobApplicationController(
    private val repository: JobApplicationRepository
) {

    @PostMapping
    fun addJob(@RequestBody job: JobApplication): JobApplication {
        return repository.save(job)
    }

    @GetMapping
    fun getAllJobs(): List<JobApplication> {
        return repository.findAll()
    }

    @DeleteMapping("/{id}")
    fun deleteJob(@PathVariable id: Long) {
        repository.deleteById(id)
    }

    @PutMapping("/{id}")
    fun updateJob(
        @PathVariable id: Long,
        @RequestBody updatedJob: JobApplication
    ): JobApplication {
        val existingJob = repository.findById(id).orElseThrow { Exception("Job not found") }

        val jobToSave = updatedJob.copy(id = existingJob.id)

        return repository.save(jobToSave)
    }

}
