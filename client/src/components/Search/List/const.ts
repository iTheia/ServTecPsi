import { IPaginated } from "../../../constants";

export const initialValue: IPaginated<any> = {
  current_page: 1,
  data: [],
  from: 0,
  next_page: null,
  prev_page: null,
  to: 0,
  total: 0,
};

export const dummyItem = {
  image: {
    path: "",
    title: "lorem ipsum",
    description: "lorem ipsum",
    slug: "lorem ipsum",
  },
};
