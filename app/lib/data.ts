import { MapPinIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/solid";

export const info = [
  { label: "location", value: "Trinity College, University of Toronto", icon: MapPinIcon },
  { label: "time", value: "Weekly, 4 hours", icon: ClockIcon },
  { label: "capacity", value: "30 (wait-list available)", icon: UsersIcon },
];

export const topics = [
  { title: "Foundations", items: ["Two Pointers", "Fast & Slow Pointers"] },
  { title: "Array patterns", items: ["Sliding Window", "Merge Intervals", "Cyclic Sort", "Prefix Sum"] },
  { title: "Data Structures", items: ["Hash Maps", "Stacks", "Monotonic Stack", "Linked Lists"] },
  { title: "Trees", items: ["DFS", "BFS", "Level Order", "Two Heaps"] },
  { title: "Graphs", items: ["Fundamentals", "Matrix Traversal", "Topological Sort", "Union Find"] },
  { title: "Advanced techniques", items: ["Modified Binary Search", "Backtracking", "Subsets", "Greedy"] },
  { title: "Dynamic Programming patterns" },
];

interface PersonInfo {
  first_name: string;
  last_name: string;
  job_title?: string;
  companies?: {
    name: string;
    logo?: {light: string; dark?: string};
    is_previous?: boolean;
  }[];
}

export const organizers: PersonInfo[] = [
  {
    first_name: "Arman",
    last_name: "Jafarnezhad",
    job_title: "Software Engineer",
    companies: [
      {
        name: "Kijiji",
        logo: { light: "/company-logos/kijiji-light.png", dark: "/company-logos/kijiji-dark.png" },
        is_previous: true
      },
      {
        name: "EvenUp",
        logo: { light: "/company-logos/evenup.png" }
      }
    ]
  },
  {
    first_name: "Yasaman",
    last_name: "Parhizkar",
    job_title: "Data Scientist",
    companies: [
      {
        name: "RBC Royal Bank",
        logo: { light: "/company-logos/rbc.png" }
      }
    ]
  },
];

export const speakers: PersonInfo[] = [
  {
    first_name: "Bardia",
    last_name: "Doosti",
    job_title: "Senior Machine Learning Engineer",
    companies: [
      {
        name: "Google",
        logo: { light: "/company-logos/google.png" }
      }
    ]
  },
  {
    first_name: "Amin",
    last_name: "Bashiri",
    companies: [
      {
        name: "Lyft",
        logo: { light: "/company-logos/lyft.png" }
      }
    ]
  },
  {
    first_name: "Amin",
    last_name: "Fadaeinejad",
    companies: [
      {
        name: "Huawei",
        logo: { light: "/company-logos/huawei.png" }
      }
    ]
  },
  {
    first_name: "Arash",
    last_name: "Afkanpour",
    companies: [
      {
        name: "Google",
        logo: { light: "/company-logos/google.png" },
        is_previous: true
      }
    ]
  },
  {
    first_name: "Sana",
    last_name: "Ayromlou",
    companies: [
      {
        name: "Google",
        logo: { light: "/company-logos/google.png" }
      }
    ]
  },
  {
    first_name: "Mehdi",
    last_name: "Zamani",
    companies: [
      {
        name: "Google",
        logo: { light: "/company-logos/google.png" }
      }
    ]
  },
  {
    first_name: "Faezeh",
    last_name: "Khabbaz",
    job_title: "VP",
    companies: [
      {
        name: "RBC Global Security",
        logo: { light: "/company-logos/rbc.png" }
      }
    ]
  },
  {
    first_name: "Yasamin",
    last_name: "Niknam",
    companies: [
      {
        name: "Shopify",
        logo: { light: "/company-logos/shopify.png" }
      }
    ]
  },
  {
    first_name: "Narges",
    last_name: "Fallahi",
    job_title: "Staff Engineer",
    companies: [
      {
        name: "League",
        logo: { light: "/company-logos/league.png" }
      }
    ]
  },
  {
    first_name: "Ahmad",
    last_name: "Pourihosseini",
    job_title: "Software Engineer",
    companies: [
      {
        name: "Instacart",
        logo: { light: "/company-logos/instacart.png" }
      }
    ]
  },
  {
    first_name: "Mehrdad",
    last_name: "Malekmohammadi",
    job_title: "Quantum Compiler Developer",
    companies: [
      {
        name: "Xanadu",
        logo: { light: "/company-logos/xanadu-light.png", dark: "/company-logos/xanadu-dark.png" }
      }
    ]
  },
  {
    first_name: "Saeedeh",
    last_name: "Moghimi",
    job_title: "MLOps Software Engineer",
    companies: [
      {
        name: "Genentech",
        logo: { light: "/company-logos/genentech.png" }
      }
    ]
  },
  {
    first_name: "Reyhaneh",
    last_name: "Ghoreishi",
    job_title: "AI Engineer",
    companies: [
      {
        name: "Google",
        logo: { light: "/company-logos/google.png" }
      }
    ]
  },
];
