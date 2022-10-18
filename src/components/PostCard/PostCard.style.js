import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const Card = styled.div`
  margin-bottom: 40px;
`;

export const CardBody = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

export const Text = styled.p`
  color: ${(props) =>
    props.variant === 'theme1' ? '#741AF6' : props.variant === 'theme2' ? '#fff' : '#000'};
  font-weight: ${(props) =>
    props.variant === 'theme1' || props.variant === 'theme2' ? 500 : 'initial'};
  font-size: ${(props) => (props.variant === 'theme1' ? '17px' : '1em')};
  margin-bottom: ${(props) => (props.variant === 'theme2' ? '0' : '16px')};

  @media ${breakpoints.device.xl} {
    width: 80%;
  }
`;
