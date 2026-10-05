export type Job = {
  id: number;
  company: string;
  position: string;
  status: 'Applied' | 'Interview' | 'Rejected' | 'Offer';
  applicationDate: string;
  location: string;
  jobUrl: string;
  jobDescription: string;
  notes: string;
  followUpDate?: string | null;
  interviewDate?: string | null;
};