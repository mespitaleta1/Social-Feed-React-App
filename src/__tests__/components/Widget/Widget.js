const { render, screen } = require('@testing-library/react');
//const axios = require('axios');
import * as socialApi from '../../../services/socialApi.js';
import Widget from '../../../components/Widget';

//import MockAdapter from 'axios-mock-adapter';
//const Widget = require('../../../components/Widget/Widget');
//const MockAdapter = require('axios-mock-adapter');
//

//var mock = new MockAdapter(axios);

const getBasicProps = () => {
  const feedUrl = 'https://myurl.com';
  const postToDisplay = 2;
  const updateInterval = 10000;

  return {
    feedUrl,
    postToDisplay,
    updateInterval
  };
};

beforeEach(() => {
  jest.spyOn(socialApi, 'getSocialApi').mockImplementation(() =>
    Promise.resolve([
      {
        id_str: 'key1',
        user: { name: 'name' },
        created_at: 'Fri Dec 29 17:55:12 +0000 2017',
        text: 'copy of the post'
      },
      {
        id_str: 'key2',
        user: { name: 'name' },
        created_at: 'Fri Dec 29 18:55:12 +0000 2017',
        text: 'copy of the post'
      }
    ])
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('When a user uses widget feed', () => {
  it('the widget should render a list of posts and are formatted as expected', async () => {
    const widgetProps = getBasicProps();
    render(<Widget {...widgetProps} />);

    const postContent = await screen.findAllByText('copy of the post');
    const postDates = screen.getAllByText('Posted', { exact: false });
    expect(postContent.length).toBe(2);
    expect(postDates[0].textContent).toBe('Posted 12/29/2017, 1:55 PM');
  });

  it('the widget should display error message when fetch fails', async () => {
    jest.spyOn(socialApi, 'getSocialApi').mockImplementation(() => Promise.reject());

    const widgetProps = getBasicProps();
    render(<Widget {...widgetProps} />);

    const errorMessage = await screen.findByText(
      'sorry was Unable to fetch the list of Post, try later'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
