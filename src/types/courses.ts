export type CourseLevel = "Beginner" | "Intermediate" | "Advanced"

export type CourseCategory =
  | "Development"
  | "Design"
  | "Marketing"
  | "Business"

export interface Course {
  id: string
  title: string
  description: string
  category: CourseCategory
  instructor: string
  level: CourseLevel
  duration: string
  image: string
}