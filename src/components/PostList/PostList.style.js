import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const PostsWrapper = styled.div`
  background-color: #741af6;
  padding: 20px 34px;

  @media ${breakpoints.device.lg} {
    div:last-child {
      margin-bottom: 0px;
    }
  }
`;
