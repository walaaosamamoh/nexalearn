import type { Course } from "../types/courses";

export interface GetCoursesData {
  courses: Course[]
}

export interface GetCourseData {
  course: Course | null
}

export interface EnrollCourseData {
  enroll: {
    userId: string
    courseId: string
    progress: number
  }
}