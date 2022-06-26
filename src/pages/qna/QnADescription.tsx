import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import { getData, qnaPostData } from "../../api";
import { putData, delData } from "../../api";

import { QnAType } from "../../types/QnA";

import { useRecoilValue } from "recoil";
import { userState } from "../../stores/atoms";

import { Container } from "../../styles/basicStyle";
import { TitleText } from "../../styles/TextStyle";
import {
  BlackHr,
  GrayHr,
  TitleContainer,
  Title,
  RightContainer,
  Author,
  Date,
  ContentContainer,
  ButtonWrapper,
  GrayButton,
  RedButton,
  CommentContainer,
  CommentWrapper,
  CommentTitle,
  CommentContent,
  SquareButton,
  CommentInputContainer,
  CommentInput,
  CommentEditInput,
  CommentAuthorContainer,
  CommentAuthor,
  CommentAuthorLabel,
  CommentDate,
  CommentRight,
  CommentButtonWrapper,
  CommentPostButton,
  CommentRightButton,
  ButtonContainer,
} from "../../styles/qnaStyles/QnADescriptionStyle";
import { setValues } from "framer-motion/types/render/utils/setters";

function QnADescription() {
  const navigate = useNavigate();

  // 게시글 id
  const id = useParams().id;

  // 로그인한 사용자
  const user = useRecoilValue(userState);

  const [qna, setQna] = useState<QnAType>();

  const [commentValue, setCommentValue] = useState<string>();

  const [commentEditValue, setCommentEditValue] = useState<string>();
  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(false);

  const get = async () => {
    try {
      await getData(`posts/${id}`).then((res) => setQna(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const date = (prop: any) => {
    return prop?.split("T")[0].split("-").join(".");
  };

  const onClickDelete = async () => {
    try {
      await delData(`posts/${id}`);

      navigate(`/qna`);
    } catch (err) {
      console.log(err);
    }
  };

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const onClickCommentSubmit = async () => {
    try {
      await qnaPostData(`posts/${id}/comments`, {
        content: commentValue,
      }).then((res) => console.log(res));

      // 댓글 전송 후 input 초기화
      setCommentValue("");
      get();
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 수정
  const onClickCommentEdit = async (commentId: string) => {
    try {
      await putData(`posts/${id}/comments/${commentId}`, {
        content: commentEditValue,
      }).then((res) => console.log(res));

      // 댓글 전송 후 input 초기화
      setIsCommentEdit(false);
      get();
    } catch (err) {
      console.log(err);
    }
  };

  const onCommentEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentEditValue(e.target.value);
  };

  // 댓글 삭제
  const onClickCommentDelete = async (commentId: string) => {
    try {
      await delData(`posts/${id}/comments/${commentId}`);
      get();
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 수정 창

  useEffect(() => {
    get();
  }, []);

  return (
    <Container>
      <TitleText>Q&A</TitleText>
      <BlackHr />
      <TitleContainer>
        <Title>{qna?.title}</Title>
        <RightContainer>
          <Date>
            <span>{date(qna?.createdAt)}</span>
          </Date>
          <Author>{qna?.author?.username}</Author>
        </RightContainer>
      </TitleContainer>
      <GrayHr />
      {qna?.content && (
        <ContentContainer>
          <Viewer initialValue={qna?.content} />
        </ContentContainer>
      )}
      <BlackHr />
      <>
        {/* 현재 로그인한 사용자가 게시글의 작성자일 시 */}
        {user._id === qna?.author._id && (
          <ButtonWrapper>
            <GrayButton onClick={() => navigate(`edit/`)}>수정</GrayButton>
            <RedButton onClick={onClickDelete}>삭제</RedButton>
          </ButtonWrapper>
        )}
      </>
      <CommentContainer>
        <CommentTitle>답변</CommentTitle>
        <CommentInputContainer>
          <CommentInput
            id="comment-write"
            type="text"
            placeholder="댓글을 입력해주세요."
            value={commentValue}
            onChange={onCommentChange}
          ></CommentInput>
          <CommentButtonWrapper>
            <CommentPostButton onClick={onClickCommentSubmit}>
              등록
            </CommentPostButton>
          </CommentButtonWrapper>
        </CommentInputContainer>
        {qna?.comments.map((comment) => (
          <CommentWrapper>
            <div>
              <CommentAuthorContainer>
                <CommentAuthor>{comment?.author.username}</CommentAuthor>
                {/* 글의 작성자가 작성한 댓글일 시 */}
                {qna?.author?._id === comment?.author.userId && (
                  <CommentAuthorLabel>작성자</CommentAuthorLabel>
                )}
              </CommentAuthorContainer>
              <>
                {isCommentEdit ? (
                  <>
                    {console.log(isCommentEdit)}
                    <CommentEditInput
                      id="comment-edit"
                      type="text"
                      // placeholder="댓글을 입력해주세요."
                      value={commentEditValue}
                      onChange={onCommentEditChange}
                    ></CommentEditInput>
                  </>
                ) : (
                  <>
                    {console.log(isCommentEdit)}
                    <CommentContent>{comment?.content}</CommentContent>
                    <CommentDate>{date(comment?.createdAt)}</CommentDate>
                  </>
                )}
              </>
            </div>
            {/* 현재 로그인한 사용자가 댓글의 작성자일 시 */}
            {user._id === comment?.author.userId && (
              <CommentRight>
                {isCommentEdit ? (
                  <>
                    <GrayButton
                      onClick={() => {
                        setIsCommentEdit(false);
                      }}
                    >
                      취소
                    </GrayButton>
                    <CommentRightButton
                      onClick={() => {
                        onClickCommentEdit(comment?._id);
                      }}
                    >
                      확인
                    </CommentRightButton>
                  </>
                ) : (
                  <>
                    <GrayButton
                      onClick={() => {
                        setIsCommentEdit(true);
                        setCommentEditValue(comment?.content);
                      }}
                    >
                      수정
                    </GrayButton>
                    <CommentRightButton
                      onClick={() => {
                        onClickCommentDelete(comment?._id);
                      }}
                    >
                      삭제
                    </CommentRightButton>
                  </>
                )}
              </CommentRight>
            )}
          </CommentWrapper>
        ))}
      </CommentContainer>
      <BlackHr />
      <ButtonContainer>
        <SquareButton onClick={() => navigate(`/qna/`)}>목록</SquareButton>
      </ButtonContainer>
    </Container>
  );
}

export default QnADescription;
