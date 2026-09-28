import { gql } from "@apollo/client";

export const COMPLETE_LESSON = gql`
  mutation CompleteLesson($userId: ID!, $courseId: ID!, $lesson: String!) {
    completeLesson(userId: $userId, courseId: $courseId, lesson: $lesson) {
      courseId
      userId
      completedLessons
    }
  }
`;
