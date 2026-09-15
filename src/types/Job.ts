export type Job = {
  id: string;
  company: string;
  position: string;
  status: 'Applied' | 'Interview' | 'Rejected' | 'Offer';
  applicationDate: string;
  location: string;
  jobUrl: string;
  jobDescription: string;
  notes: string;
  followUpDate?: string;
  interviewDate?: string;
};