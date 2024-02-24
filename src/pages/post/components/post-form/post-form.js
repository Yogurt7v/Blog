import styled from "styled-components";
import {  Icon,Input } from "../../../../components";
import { SpecialPanel } from "../specaial-panel/special-panel";
import { sanizeContent } from "./utils";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { savePostAsync } from "../../../../actions";
import { useNavigate } from "react-router-dom";
import { useServerRequest } from "../../../../hooks";

const PostFormContainer = ({
  className,
  post: {id, title, imageUrl, content, publishedAt },
}) => {

  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  console.log(id);

  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanizeContent(contentRef.current.innerHTML);


    dispatch(
      savePostAsync(requestServer,{
      id,
      imageUrl: newImageUrl,
      title: newTitle,
      content: newContent,
    })
    ).then(() => navigate(`/post/${id}`));
  }

  return (
    <div className={className}>
    <Input defaultValue={imageUrl} ref={imageRef} placeholder="Путь к картинке"  className="input"/> 
    <Input defaultValue={title} ref ={titleRef} placeholder="Заголовок"  className="input"/> 
    <SpecialPanel publishedAt={publishedAt} id={id} editButton ={
                <div  onClick={() => onSave()}>
                  <Icon id="fa-regular fa-floppy-disk" size="16px"  margin="0 10px 0 0px"/>
                </div>
    }/>
      <div className="post-text"  ref={contentRef} contentEditable={true} suppressContentEditableWarning={true}>{content}</div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  & .input {
    width: 100%;
  }

  & img {
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.57);
  }
  & h2 {
    margin: 0 auto 20px;
  }

  & .panel-left {
    display: flex;
    align-items: center;
  }

  & .post-text{
    text-align: justify;
    white-space: pre-wrap;

  }
`;
