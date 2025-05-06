package com.larisa.jobtracker.model

import jakarta.persistence.*

@Entity
data class InterviewFeedback(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    val interviewDate: String,

    val whatILiked: String?,
    val whatIGotWrong: String?,
    val questionsAsked: String?,

    val receivedAnswer: Boolean = false,

    val answerDate: String? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_application_id")
    val jobApplication: JobApplication
)
