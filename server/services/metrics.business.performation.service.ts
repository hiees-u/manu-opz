import { BusinessPerformationModel } from "~~/types/metrics/oee.model";

const businessPerformanceMock: BusinessPerformationModel[] = [
  { revenue: 1200, cost: 800, profit: 400, date: 'Jan' },
  { revenue: 1500, cost: 900, profit: 600, date: 'Jun' },
  { revenue: 1800, cost: 1000, profit: 800, date: 'Mar' },
  { revenue: 1600, cost: 1100, profit: 500, date: 'Apr' },
  { revenue: 2000, cost: 1300, profit: 700, date: 'May' },
  { revenue: 2200, cost: 1500, profit: 700, date: 'Jun' },
  { revenue: 2500, cost: 1600, profit: 900, date: 'Jan' },
  { revenue: 2400, cost: 1700, profit: 700, date: 'Feb' },
  { revenue: 2600, cost: 1800, profit: 800, date: 'Mar' },
  { revenue: 2800, cost: 2000, profit: 800, date: 'Apr' },
  { revenue: 3000, cost: 2100, profit: 900, date: 'May' },
  { revenue: 3200, cost: 2200, profit: 1000, date: 'Jun' },
  { revenue: 3100, cost: 2300, profit: 800, date: 'Jan' },
  { revenue: 3300, cost: 2400, profit: 900, date: 'Feb' },
  { revenue: 3500, cost: 2500, profit: 1000, date: 'Mar' },
  { revenue: 3700, cost: 2600, profit: 1100, date: 'Apr' },
  { revenue: 3600, cost: 2700, profit: 900, date: 'May' },
  { revenue: 3800, cost: 2800, profit: 1000, date: 'Jun' },
  { revenue: 4000, cost: 2900, profit: 1100, date: 'Jan' },
  { revenue: 4200, cost: 3000, profit: 1200, date: 'Jun' }
];

const getBusinessPerformation = () => {
  return businessPerformanceMock;
};

export { getBusinessPerformation };