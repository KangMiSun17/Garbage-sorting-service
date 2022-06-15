import { atom } from "recoil";
import { CategoryType, NewsType } from "../types/Main";
import { CategoryItemType } from "../types/Trash";

export interface BinTypes {
  title: string;
  point: string;
  lat: number;
  lng: number;
}

export interface BinSelectedTypes {
  lat: number;
  lng: number;
}

// Ai 분석 페이지의 상황
export const AiSituationState = atom({
  key: "AiSituationState",
  default: "beforeImgUpload",
});

// 서울시 쓰레기통 데이터셋
export const BinState = atom<BinTypes[]>({
  key: "BinState",
  default: [
    {
      title: "",
      point: "",
      lat: 0,
      lng: 0,
    },
  ],
});

// 선택한 쓰레기통 리스트 좌표
export const BinSelectedState = atom<(number | undefined)[]>({
  key: "BinSelectedState",
  default: [0, undefined],
});

// 선택한 쓰레기통 마커
export const selectedMarkerState = atom({
  key: "selectedMarkerState",
  default: { La: 0, Ma: 0 },
});

// category list
export const categoryState = atom<CategoryType[]>({
  key: "categoryState",
  default: [],
});

// news list
export const newsState = atom<NewsType[]>({
  key: "newsState",
  default: [],
});

// category item list
export const categoryItemState = atom<CategoryItemType[][]>({
  key: "categoryItemState",
  default: [],
});

// trash category
export const categoryKindState = atom<string>({
  key: "categoryKindState",
  default: "",
});

// to infinite scroll last trash id
export const categoryPageState = atom<string>({
  key: "categoryPageState",
  default: "",
});

export const categorySelectedState = atom<boolean[]>({
  key: "categorySelectedState",
  default: [],
});