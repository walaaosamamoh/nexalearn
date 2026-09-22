import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      title
      description
      category
      instructor
      level
      duration
      image
    }
  }
`;
