const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@example.com",
    password: "123",

    taskCount: {
      newTask: 1,
      active: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Create Login Page",
        description: "Build login UI with React",
        date: "2026-03-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve responsive navbar issue",
        date: "2026-03-14",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect frontend with backend",
        date: "2026-03-16",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    name: "Amit Verma",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      newTask: 1,
      active: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Create Dashboard UI",
        description: "Design admin dashboard",
        date: "2026-03-12",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress images for performance",
        date: "2026-03-15",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Form Validation",
        description: "Add validation in signup form",
        date: "2026-03-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    name: "Sarthak Singh",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      newTask: 1,
      active: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Create Profile Page",
        description: "Build user profile UI",
        date: "2026-03-13",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Dark Mode",
        description: "Implement dark theme",
        date: "2026-03-16",
        category: "Feature",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Footer Issue",
        description: "Footer overlapping problem",
        date: "2026-03-19",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    name: "Neha Gupta",
    email: "employee4@example.com",
    password: "123",

    taskCount: {
      newTask: 1,
      active: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Create Landing Page",
        description: "Design landing page UI",
        date: "2026-03-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Improve website SEO",
        date: "2026-03-17",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Performance Testing",
        description: "Test website performance",
        date: "2026-03-20",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
]

const admin = {
  id: 0,
  name: "Admin",
  email: "admin@example.com",
  password: "admin123"
};

export const setlocalstorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};