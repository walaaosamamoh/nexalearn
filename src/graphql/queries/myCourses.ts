import { gql } from "@apollo/client";

export const GET_MY_COURSES =  gql`
  query GetMyCourses($userId: ID!){
    myCourses(userId: $userId){
      progress
      course {
        id
        title
        instructor
        image
        duration
        level
        category
      }
    }
  }
`