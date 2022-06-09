import React, { useRef } from "react";

import { AiContentTitle, AiContentText } from "../../styles/aiStyles/AiStyle";

import {
  AiResultSubjectSection,
  AiResultSubjectName,
  AiResultSubjectTexture,
  AiResultContentsSection,
  AiResultSummaryContainer,
  AiResultMidSummaryContainer,
  AiResultSummaryTitleWrapper,
  AiResultSummaryDesWrapper,
  AiResultDesContainer,
  AiResultDesLastContainer,
} from "../../styles/aiStyles/AiResultStyle";

function AiResult() {
  return (
    <>
      {/* 품목 정보 섹션*/}
      <AiResultSubjectSection>
        {/* 품목명 */}
        <AiResultSubjectName>페트병</AiResultSubjectName>
        {/* 품목 재질 */}
        <AiResultSubjectTexture>플라스틱</AiResultSubjectTexture>
      </AiResultSubjectSection>
      {/* 분석 요약 섹션 */}
      <AiResultContentsSection>
        {/* 분석 요약 1 */}
        <AiResultSummaryContainer>
          {/* 분석 요약 1 제목 */}
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          {/* 분석 요약 1 내용 */}
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultSummaryContainer>
        {/* 분석 요약 2 */}
        <AiResultMidSummaryContainer>
          {/* 분석 요약 1 제목 */}
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          {/* 분석 요약 1 내용 */}
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultMidSummaryContainer>
        {/* 분석 요약 3 */}
        <AiResultSummaryContainer>
          {/* 분석 요약 1 제목 */}
          <AiResultSummaryTitleWrapper>분석1</AiResultSummaryTitleWrapper>
          {/* 분석 요약 1 내용 */}
          <AiResultSummaryDesWrapper>분석 내용1</AiResultSummaryDesWrapper>
        </AiResultSummaryContainer>
      </AiResultContentsSection>
      {/* 분석 상세 섹션 */}
      <div>
        {/* 분석 1 상세 컨테이너 */}
        <div>
          {/* 분석 1 상세 제목 */}
          <div>
            <AiContentTitle>분석 1 상세</AiContentTitle>
          </div>
          {/* 분석 1 상세 내용 컨테이너*/}
          <AiResultDesContainer>
            {/* 분석 1 상세 내용 래퍼 */}
            <AiContentText>분석 1 상세 내용</AiContentText>
          </AiResultDesContainer>
        </div>
        <div>
          {/* 분석 1 상세 제목 */}
          <div>
            <AiContentTitle>분석 1 상세</AiContentTitle>
          </div>
          {/* 분석 1 상세 내용 컨테이너*/}
          <AiResultDesContainer>
            {/* 분석 1 상세 내용 래퍼 */}
            <AiContentText>분석 1 상세 내용</AiContentText>
          </AiResultDesContainer>
        </div>
        <div>
          {/* 분석 1 상세 제목 */}
          <div>
            <AiContentTitle>분석 1 상세</AiContentTitle>
          </div>
          {/* 분석 1 상세 내용 컨테이너*/}
          <AiResultDesLastContainer>
            {/* 분석 1 상세 내용 래퍼 */}
            <AiContentText>분석 1 상세 내용</AiContentText>
          </AiResultDesLastContainer>
        </div>
      </div>
      {/* 버리는 법 섹션 */}
      <div>
        {/* 버리는 법 제목 */}
        <div>
          <AiContentTitle>버리는 법</AiContentTitle>
        </div>
        {/* 버리는 법 내용 컨테이너 */}
        <AiResultDesContainer>
          {/* 버리는 법 내용 래퍼 */}
          <AiContentText>버리는 법 상세 내용</AiContentText>
        </AiResultDesContainer>
      </div>
    </>
  );
}

export default AiResult;
