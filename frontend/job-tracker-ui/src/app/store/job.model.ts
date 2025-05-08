export interface Job {
    id: number;
    title: string;
    company: string;
    applicationDate: string;
    status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
    feedback?: string;
    jobLink?: string;
    notes?: string;
    salaryRequested?: number;
    workMode?: 'Remote' | 'Hybrid' | 'Onsite';
  }
  