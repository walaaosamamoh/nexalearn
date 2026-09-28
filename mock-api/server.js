const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const users = [];

const enrollments = [];

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
    whatYoullLearn: [
      "Build reusable React components",
      "Work with props, state, and hooks",
      "Manage application state effectively",
      "Build responsive React interfaces",
      "Follow modern React best practices",
      "Structure scalable React applications",
    ],
    lessons: [
      "React Fundamentals",
      "Components and Props",
      "State and Event Handling",
      "React Hooks",
      "Forms and User Input",
      "State Management",
      "React Router",
      "Building the Final Project",
    ],
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
    whatYoullLearn: [
      "Understand TypeScript fundamentals",
      "Work with basic and advanced types",
      "Create interfaces and type aliases",
      "Type functions and objects",
      "Work with generics",
      "Use TypeScript in React projects",
    ],
    lessons: [
      "Introduction to TypeScript",
      "Basic Types",
      "Arrays and Objects",
      "Interfaces and Type Aliases",
      "Functions and Generics",
      "Union and Intersection Types",
      "TypeScript with React",
    ],
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
    whatYoullLearn: [
      "Understand UI and UX fundamentals",
      "Create user-centered designs",
      "Build effective wireframes",
      "Use layout and visual hierarchy",
      "Design consistent interfaces",
      "Create better user experiences",
    ],
    lessons: [
      "Introduction to UI/UX",
      "Understanding User Needs",
      "User Flows",
      "Wireframing",
      "Visual Hierarchy",
      "Color and Typography",
      "Designing a Complete Interface",
    ],
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
    whatYoullLearn: [
      "Understand advanced JavaScript concepts",
      "Work with closures and higher-order functions",
      "Master asynchronous JavaScript",
      "Work with Promises and async/await",
      "Understand JavaScript modules",
      "Use modern JavaScript patterns",
    ],
    lessons: [
      "Advanced Functions",
      "Closures and Scope",
      "This and Execution Context",
      "Promises",
      "Async and Await",
      "JavaScript Modules",
      "Advanced Array Methods",
      "Design Patterns",
      "Final JavaScript Project",
    ],
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
    whatYoullLearn: [
      "Navigate and organize Figma projects",
      "Create professional UI layouts",
      "Use components and variants",
      "Build reusable design systems",
      "Create interactive prototypes",
      "Collaborate with design teams",
    ],
    lessons: [
      "Getting Started with Figma",
      "Frames and Layouts",
      "Typography and Colors",
      "Components",
      "Variants and Auto Layout",
      "Design Systems",
      "Prototyping",
      "Building a Complete UI",
    ],
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
    whatYoullLearn: [
      "Build semantic HTML structures",
      "Style websites with modern CSS",
      "Create responsive layouts",
      "Use Flexbox and CSS Grid",
      "Add interactivity with JavaScript",
      "Build a complete responsive website",
    ],
    lessons: [
      "HTML Fundamentals",
      "Semantic HTML",
      "CSS Fundamentals",
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
      "JavaScript Basics",
      "DOM Manipulation",
      "Final Website Project",
    ],
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
    whatYoullLearn: [
      "Understand Git and version control",
      "Create and manage repositories",
      "Work with branches",
      "Resolve merge conflicts",
      "Create pull requests",
      "Collaborate with GitHub",
    ],
    lessons: [
      "Introduction to Git",
      "Creating a Repository",
      "Commits and History",
      "Branches",
      "Merging and Conflicts",
      "GitHub Repositories",
      "Pull Requests",
      "Team Collaboration",
    ],
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
    whatYoullLearn: [
      "Understand digital marketing fundamentals",
      "Create a content strategy",
      "Understand social media marketing",
      "Learn basic SEO concepts",
      "Plan digital campaigns",
      "Measure marketing performance",
    ],
    lessons: [
      "Digital Marketing Fundamentals",
      "Understanding Your Audience",
      "Content Strategy",
      "Social Media Marketing",
      "SEO Basics",
      "Email Marketing",
      "Campaign Planning",
      "Measuring Results",
    ],
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
    whatYoullLearn: [
      "Understand the product management role",
      "Identify user needs and problems",
      "Define product goals",
      "Prioritize product features",
      "Create product roadmaps",
      "Work with development teams",
    ],
    lessons: [
      "Introduction to Product Management",
      "Understanding Users",
      "Product Discovery",
      "Defining Product Goals",
      "Feature Prioritization",
      "Product Roadmaps",
      "Working with Teams",
      "Launching a Product",
    ],
  },
];

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Enrollment {
    userId: ID!
    courseId: ID!
    progress: Int!
    course: Course!
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    category: String!
    instructor: String!
    level: String!
    duration: String!
    image: String!
    whatYoullLearn: [String!]!
    lessons: [String!]!
  }

  type Query {
    courses: [Course!]!,
    course(id: ID!): Course
    myCourses(userId: ID!): [Enrollment!]!
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User!,
    login(email: String!, password: String!): User!
    enroll(userId: ID!, courseId: ID!): Enrollment!
  }
`;

const resolvers = {
  Query: {
    courses: () => courses,
    course: (_, args) => {
      return courses.find((course) => course.id === args.id);
    },
    myCourses: (_, { userId }) => {
      return enrollments
        .filter((enrollment) => enrollment.userId === userId)
        .map((enrollment) => ({
          ...enrollment,
          course: courses.find((course) => course.id === enrollment.courseId),
        }));
    },
  },

  Mutation: {
    register: (_, { name, email, password }) => {
      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        throw new Error("Email is already registered");
      }

      const user = {
        id: String(users.length + 1),
        name,
        email,
        password,
      };

      users.push(user);

      return user;
    },

    login: (_, { email, password }) => {
      const existingUser = users.find((user) => user.email === email);
      if (!existingUser) {
        throw new Error("Email is not found");
      }
      if (existingUser.password !== password) {
        throw new Error("Wrong password");
      }
      return existingUser;
    },

    enroll: (_, { userId, courseId }) => {
      const existingEnrollment = enrollments.find(
        (enrollment) =>
          enrollment.userId === userId && enrollment.courseId === courseId,
      );
      if (existingEnrollment) return existingEnrollment;
      const enrollment = {
        userId,
        courseId,
        progress: 0,
      };
      enrollments.push(enrollment);
      return enrollment;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`GraphQL server running at ${url}`);
});
