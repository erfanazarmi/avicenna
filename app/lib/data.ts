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
  name: string;
  job_title?: string;
  company?: string;
}

export const organizers: PersonInfo[] = [
  {
    name: "Arman Jafarnezhad",
    job_title: "Software Engineer",
    company: "EvenUp, Ex-Kijiji",
  },
  {
    name: "Yasaman Parhizkar",
    job_title: "Data Scientist",
    company: "RBC Royal Bank",
  },
];

export const speakers: PersonInfo[] = [
  {
    name: "Bardia Doosti",
    job_title: "Senior Machine Learning Engineer",
    company: "Google",
  },
  {
    name: "Amin Bashiri",
    company: "Lyft",
  },
  {
    name: "Amin Fadaeinejad",
    company: "Huawei",
  },
  {
    name: "Arash Afkanpour",
    company: "Ex Google",
  },
  {
    name: "Sana Ayromlou",
    company: "Google",
  },
  {
    name: "Mehdi Zamani",
    company: "Google",
  },
  {
    name: "Faezeh Khabbaz",
    job_title: "VP",
    company: "RBC Global Security",
  },
  {
    name: "Yasamin Niknam",
    company: "Shopify",
  },
  {
    name: "Narges Fallahi",
    job_title: "Staff Engineer",
    company: "League",
  },
  {
    name: "Ahmad Pourihosseini",
    job_title: "Software Engineer",
    company: "Instacart",
  },
  {
    name: "Mehrdad Malekmohammadi",
    job_title: "Quantum Compiler Developer",
    company: "Xanadu",
  },
  {
    name: "Saeedeh Moghimi",
    job_title: "MLOps Software Engineer",
    company: "Genentech",
  },
  {
    name: "Reyhaneh Ghoreishi",
    job_title: "AI Engineer",
    company: "Google",
  },
];
