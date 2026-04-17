type OeeModel = {
  date: string;
  oee: {
    availability: number;
    performance: number;
    quality: number;
  };
};

type BusinessPerformationModel = {
  revenue: number;
  cost: number;
  profit: number;
  date: string
};

export type { OeeModel, BusinessPerformationModel };
