import { atom } from "recoil";

export const showCategoryAtom = atom({
  key: "showCategory",
  default: false,
});

export const showLocationAtom = atom({
  key: "showLocation",
  default: false,
});
