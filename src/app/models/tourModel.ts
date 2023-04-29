export type Tour = {
  id:string
  carbon_neut: boolean;
  food: boolean;
  private: boolean;
  walk: boolean;
  duration: number;
  photos: [];
  expected_photos: [];
  include: string;
  location: string;
  organizer: {};
  person_cost: number;
  person_num: number;
  plan: {
    meeting_point: string;
    city_highlights: string;
    hidden_gems: string;
    magical_storytelling: string;
    special_treat: string;
  };
  reasons: [];
  start_date: string;
  status: string;
  title: string;
};

export type Cart = Partial<Tour>;
