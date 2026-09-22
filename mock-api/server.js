const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")

const courses = [
  {
    id: "1",
    title: "Modern React Development",
    description:
      "Build modern web applications with React, reusable components, hooks, and best practices.",
    category: "Development",
    instructor: "Alex Morgan",
    level: "Intermediate",
    duration: "8 hours",
    image: "/courses/react.jpg",
  },
  {
    id: "2",
    title: "TypeScript for Beginners",
    description:
      "Learn TypeScript fundamentals and use types to build safer and more maintainable applications.",
    category: "Development",
    instructor: "Daniel Lee",
    level: "Beginner",
    duration: "5 hours",
    image: "/courses/typescript.jpg",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user interface and user experience design and create better digital products.",
    category: "Design",
    instructor: "Sarah Wilson",
    level: "Beginner",
    duration: "6 hours",
    image: "/courses/uiux.jpg",
  },
  {
    id: "4",
    title: "Advanced JavaScript",
    description:
      "Deepen your JavaScript knowledge with asynchronous programming, advanced functions, and modern patterns.",
    category: "Development",
    instructor: "Michael Brown",
    level: "Advanced",
    duration: "10 hours",
    image: "/courses/javascript.jpg",
  },
  {
    id: "5",
    title: "Figma UI Design",
    description:
      "Create professional interfaces and interactive prototypes using Figma from scratch.",
    category: "Design",
    instructor: "Emma Davis",
    level: "Intermediate",
    duration: "7 hours",
    image: "/courses/figma.jpg",
  },
  {
    id: "6",
    title: "Web Development Fundamentals",
    description:
      "Learn HTML, CSS, and JavaScript fundamentals and build responsive websites from scratch.",
    category: "Development",
    instructor: "James Wilson",
    level: "Beginner",
    duration: "9 hours",
    image: "/courses/web-development.jpg",
  },
  {
    id: "7",
    title: "Git & GitHub Essentials",
    description:
      "Learn version control, branching, pull requests, and collaborative development with GitHub.",
    category: "Development",
    instructor: "Oliver Smith",
    level: "Beginner",
    duration: "4 hours",
    image: "/courses/github.jpg",
  },
  {
    id: "8",
    title: "Digital Marketing Basics",
    description:
      "Understand digital marketing fundamentals, content strategy, social media, and online campaigns.",
    category: "Marketing",
    instructor: "Sophia Taylor",
    level: "Beginner",
    duration: "6 hours",
    image: "/courses/marketing.jpg",
  },
  {
    id: "9",
    title: "Product Management",
    description:
      "Learn how to plan, prioritize, and manage digital products from idea to launch.",
    category: "Business",
    instructor: "Noah Anderson",
    level: "Intermediate",
    duration: "8 hours",
    image: "/courses/product-management.jpg",
  },
];

const typeDefs = `#graphql
  type Course {
    id: ID!
    title: String!
    description: String!
    category: String!
    instructor: String!
    level: String!
    duration: String!
    image: String!
  }

  type Query {
    courses: [Course!]!
  }
`

const resolvers = {
  Query: {
    courses: () => courses,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`GraphQL server running at ${url}`)
})