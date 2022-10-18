import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  margin: 0 auto;

  @media ${breakpoints.device.sm} {
    max-width: 720px;
  }
  @media ${breakpoints.device.lg} {
    max-width: 1140px;
  }

  @media ${breakpoints.device.xl} {
    max-width: 1320px;
  }
`;
