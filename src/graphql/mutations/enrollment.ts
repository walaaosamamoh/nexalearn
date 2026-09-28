import { gql } from "@apollo/client";

export const ENROLL_COURSE = gql`
  mutation EnrollCourse($userId: ID!, $courseId: ID!) {
    enroll(userId: $userId, courseId: $courseId) {
      courseId
      userId
      completedLessons
    }
  }
`;
