import React from 'react';
import Layout from '../../components/Layout';
import Widget from '../../components/Widget';
import APIconstants from '../../constants/api';
import { LIMIT_OF_POST, TIME_RANGE } from '../../components/Widget/Widget.const';

const MultiplePosts = () => {
  const BASE_URL = APIconstants.API_BASE_URL;
  const limit = LIMIT_OF_POST;
  const updateInterval = TIME_RANGE;

  return (
    <Layout>
      <Widget feedUrl={BASE_URL} postToDisplay={limit} updateInterval={updateInterval} />
    </Layout>
  );
};

export default MultiplePosts;
