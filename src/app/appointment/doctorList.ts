import { Doctor } from './doctor';

export interface DoctorList {
  doctors: Doctor[];
}

export interface DoctorResolved {
  doctors: Doctor[];
  error?: any;
}
