import React from 'react';
import PostCard from '../PostCard/PostCard';
import { getLang } from '../../utils/getLang';
import { sortedDates } from '../../utils/sortedDates';
import { FORMAT_OPTIONS, LIMIT_OF_POST } from '../Widget/Widget.const';
import { PostsWrapper } from './PostList.style';
import { Text } from '../PostCard/PostCard.style';

const PostList = ({ feedContent = [], limit, errorMessage }) => {
  if (limit <= 0) {
    limit = LIMIT_OF_POST;
  }
  const locale = getLang();
  const displayCards = feedContent
    .map((post) => {
      const postedDate = post?.created_at;
      const date = new Date(postedDate);
      const formattedDate = Intl.DateTimeFormat(locale, FORMAT_OPTIONS).format(date);
      return (
        <PostCard
          key={post?.id_str}
          authorName={post?.user?.name}
          postCopy={post?.text}
          publishDate={formattedDate}
        />
      );
    })
    .sort(sortedDates)
    .slice(0, limit);

  if (errorMessage) {
    return (
      <PostsWrapper>{errorMessage && <Text variant="theme2">{errorMessage}</Text>}</PostsWrapper>
    );
  }

  return (
    <PostsWrapper>
      {feedContent.length > 0 ? displayCards : <Text variant="theme2">...Loading</Text>}
    </PostsWrapper>
  );
};

export default PostList;
