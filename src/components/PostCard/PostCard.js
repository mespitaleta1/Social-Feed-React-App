import React from 'react';
import { Card, CardBody, Text } from './PostCard.style';

const PostCard = ({ authorName, publishDate, postCopy }) => {
  return (
    <Card>
      <CardBody>
        <Text>{postCopy}</Text>
        <Text variant="theme1">{`- ${authorName}`}</Text>
      </CardBody>
      <div>
        <Text variant="theme2">{`Posted ${publishDate}`}</Text>
      </div>
    </Card>
  );
};

export default PostCard;
