import React, { useEffect, useState } from "react";

import MapSearch from "./MapSearch";
import MapContent from "./MapContent";
import MapList from "./MapList";

import { getData } from "../../api";

import { useRecoilState } from "recoil";

import {
  BinTypes,
  BinState,
  SearchBinState,
  RegionValueState,
  RoadsValueState,
  lastIntersectingImageState,
} from "../../stores/atoms";

import {
  MapContainer,
  MapTop,
  MapTitle,
  MapBinSection,
} from "../../styles/mapStyles/mapStyle";

function Map() {
  const [bin, setBin] = useRecoilState<BinTypes[]>(BinState);

  const [regionValue, setRegionValue] = useRecoilState(RegionValueState);

  const [roadsValue, setRoadsValue] = useRecoilState(RoadsValueState);

  const [page, setPage] = useState(1);

  const [lastIntersectingImage, setLastIntersectingImage] =
    useRecoilState<HTMLDivElement | null>(lastIntersectingImageState);

  const getBins = async () => {
    console.log("fetching 함수 호출됨");

    try {
      const res = await getData(
        // `bins`
        `bins?search=${"종로구"}&category=${roadsValue}`,
        // `bins?search=${"종로구"}&category=${roadsValue}?page=${page}&limit=2`,
      );
      // console.log(res.data);
      setBin(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getBins();
  }, [regionValue, roadsValue]);

  //observer 콜백함수
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //뷰포트에 마지막 이미지가 들어오고, page값에 asf1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
        setPage((prev) => prev + 1);
        // 현재 타겟을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    console.log("page ? ", page);
    getBins();
  }, [page]);

  useEffect(() => {
    //observer 인스턴스를 생성한 후 구독
    let observer: IntersectionObserver;

    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      //observer 생성 시 observe할 target 요소는 불러온 이미지의 마지막아이템(randomImageList 배열의 마지막 아이템)으로 지정
      observer.observe(lastIntersectingImage);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingImage]);

  return (
    <MapContainer>
      <MapTop>
        <MapTitle>서울시 공공 쓰레기통</MapTitle>
        <MapSearch />
      </MapTop>
      <MapBinSection>
        <MapContent />
        <MapList />
      </MapBinSection>
    </MapContainer>
  );
}

export default Map;
