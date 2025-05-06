package com.larisa.jobtracker.model
import jakarta.persistence.*

@Entity
@Table(name = "job_application")
data class JobApplication(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    val title: String,
    val company: String,
    val applicationDate: String,
    val status: String,

    @Enumerated(EnumType.STRING)
    val workMode: WorkMode? = null,
    val salaryRequested: Double? = null,
    val feedback: String? = null,
    val jobLink: String? = null,
    val notes: String? = null
)