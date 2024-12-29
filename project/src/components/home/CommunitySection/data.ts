interface Stat {
  label: string;
  value: string;
  description: string;
  metric: string;
}

export const stats: Stat[] = [
  {
    label: "Warriors Strong",
    value: "50K+",
    description: "Growing stronger daily",
    metric: "New warriors joining every day"
  },
  {
    label: "Global Reach",
    value: "10M+",
    description: "Lives impacted",
    metric: "Across 150+ countries"
  },
  {
    label: "Success Rate",
    value: "95%",
    description: "Warriors achieving goals",
    metric: "Verified results"
  }
];