import { gql } from "@apollo/client";

export const GET_COURSE = gql`
  query GetCourse($id: ID!) {
    course(id: $id) {
      id
      title
      description
      category
      instructor
      level
      duration
      image
      whatYoullLearn
      lessons
    }
  }
`;
