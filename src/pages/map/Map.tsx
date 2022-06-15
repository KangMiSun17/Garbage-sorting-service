import React, { useEffect } from "react";

import MapSearch from "./MapSearch";
import MapContent from "./MapContent";
import MapList from "./MapList";

import { useRecoilState } from "recoil";
import { BinTypes, BinState } from "../../stores/atoms";

import { Container } from "../../styles/basicStyle";
import { MapTitle, MapBinSection } from "../../styles/mapStyles/mapStyle";

function Map() {
  const [bin, setBin] = useRecoilState<BinTypes[]>(BinState);

  // 목 데이터
  const markerData: Array<{
    title: string;
    point: string;
    lat: number;
    lng: number;
  }> = [
    {
      title: "사직로 경복궁역 4번출구",
      point: "지하철역 입구",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "자하문로 자하문로 44",
      point: "도로(가로)변",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "율곡로 삼청로1 맞은편 인도",
      point: "상가지역",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "여의나루로 50 여의도역5번출구(흡연부스)",
      point: "정류장(버스, 택시 등)",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
    {
      title: "사직로 경복궁역 4번출구",
      point: "지하철역 입구",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "자하문로 자하문로 44",
      point: "도로(가로)변",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "율곡로 삼청로1 맞은편 인도",
      point: "상가지역",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "여의나루로 50 여의도역5번출구(흡연부스)",
      point: "정류장(버스, 택시 등)",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
    {
      title: "사직로 경복궁역 4번출구",
      point: "지하철역 입구",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "자하문로 자하문로 44",
      point: "도로(가로)변",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "율곡로 삼청로1 맞은편 인도",
      point: "상가지역",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "여의나루로 50 여의도역5번출구(흡연부스)",
      point: "정류장(버스, 택시 등)",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
    {
      title: "사직로 경복궁역 4번출구",
      point: "지하철역 입구",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "자하문로 자하문로 44",
      point: "도로(가로)변",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "율곡로 삼청로1 맞은편 인도",
      point: "상가지역",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "여의나루로 50 여의도역5번출구(흡연부스)",
      point: "정류장(버스, 택시 등)",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
    {
      title: "사직로 경복궁역 4번출구",
      point: "지하철역 입구",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "자하문로 자하문로 44",
      point: "도로(가로)변",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "율곡로 삼청로1 맞은편 인도",
      point: "상가지역",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "여의나루로 50 여의도역5번출구(흡연부스)",
      point: "정류장(버스, 택시 등)",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
  ];

  useEffect(() => {
    setBin(markerData);
  }, []);

  return (
    <Container>
      <MapTitle>서울시 공공 쓰레기통</MapTitle>
      <MapSearch />
      <MapBinSection>
        <MapContent />
        <MapList />
      </MapBinSection>
    </Container>
  );
}

export default Map;