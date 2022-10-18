import React, { useState, useEffect } from 'react';
import { getSocialApi } from '../../services/socialApi';
import PostList from '../PostList/PostList';
import { Container } from './Widget.style';
import { ERROR_MESSAGE } from './Widget.const';

const Widget = ({ feedUrl, postToDisplay, updateInterval }) => {
  const [feed, setFeed] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getAndSetFeed = async () => {
      try {
        const feed = await getSocialApi(feedUrl);
        setFeed(feed);
        setFetched(true);
      } catch (error) {
        console.error('Error', error);
        setErrorMessage(ERROR_MESSAGE);
      }
    };
    if (!fetched) {
      getAndSetFeed();
    }
  }, [feedUrl, fetched]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fetched === true) {
        setFetched(false);
      }
    }, updateInterval); /* every 3 minutes */
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <PostList feedContent={feed} limit={postToDisplay} errorMessage={errorMessage} />
    </Container>
  );
};

export default Widget;
