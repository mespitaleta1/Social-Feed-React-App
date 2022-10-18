import React from 'react';
import Widget from '../../components/Widget';
import Layout from '../../components/Layout';
import APIconstants from '../../constants/api';
import { TIME_RANGE } from '../../components/Widget/Widget.const';

const OnePost = () => {
  const BASE_URL = APIconstants.API_BASE_URL;
  const limit = 1;
  const updateInterval = TIME_RANGE;

  return (
    <Layout>
      <Widget feedUrl={BASE_URL} postToDisplay={limit} updateInterval={updateInterval} />
    </Layout>
  );
};

export default OnePost;
