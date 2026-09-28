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

export interface GetMyCoursesData {
  myCourses: {
    progress: number
    course: {
      id: string
      title: string
      instructor: string
      image: string
      duration: string
      level: string
      category: string
    }
  }[]
}