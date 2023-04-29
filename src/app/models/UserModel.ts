export type UserData = {
 _id: string;
  username: string;
  cover_photo: [];
  createdAt: string;
  email: string;
  favorite_tours: [];
  phone: string;
  photo: [];
  role: string;
  updatedAt: string;
  visited_tours: [];
  cart:{}
};

export type User = Partial<UserData>;
