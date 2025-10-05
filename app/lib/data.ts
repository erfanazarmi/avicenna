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
