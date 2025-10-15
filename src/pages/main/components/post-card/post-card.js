import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";
import { Icon } from "../../../../components/icon/icon";
import styled from "styled-components";

const PostCardContainer = ({
  className,
  id,
  title,
  imageUrl,
  publishedAt,
  commentsCount,
}) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        <img src={imageUrl} alt={title} className="post-card-image"/>
        <div className="post-card-footer">
          <h4>{title}</h4>
          <div className="post-card-info">
            <div className="published-at">
              <Icon
                id="fa-regular fa-calendar"
                margin="0 10px 0 0px"
                size="18px"
                className="noPointer"
              />
              {publishedAt}
            </div>
            <div className="comments-count">
              <Icon
                id="fa-regular fa-comment"
                margin="0 10px 0 0px"
                size="18px"
                className="noPointer"
              />
              {commentsCount}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
    width: 280px;
    height: 330px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    border: 1px solid grey;
    position: relative;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0px 5px 10px 5px rgba(34, 60, 80, 0.12);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0px 8px 16px 6px rgba(34, 60, 80, 0.18);
    }

    & img{
        display: block;
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    & .noPointer{
        cursor: default;
    }

    & .post-card-footer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: 1px solid #eee;
        background: #fff;
        min-height: 130px;
    }

    & h4 {
        margin: 0px;
        padding: 10px 12px 8px 12px;
        text-align: left;
        font-size: 16px;
        line-height: 1.3;
        max-height: 52px;
        overflow: hidden;
    }

    & .post-card-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 12px 12px 12px;
    }


    & .published-at{
        display: flex;
        align-items: center;
        gap: 6px;
    }

    & .comments-count{
        display: flex;
        align-items: center;
        gap: 6px;
    }

    @media (max-width: 900px) {
        width: calc(50% - 40px);
        height: 320px;
    }

    @media (max-width: 600px) {
        width: calc(100% - 40px);
        height: auto;
    }

`;


PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
};