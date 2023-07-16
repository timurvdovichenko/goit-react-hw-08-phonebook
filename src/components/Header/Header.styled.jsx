import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 888;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const HeaderNavigation = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-right: 10px;
  width: 100%;
  max-width: 100px;
  background-color: #3f51b5;
  color: #fff;
  border-radius: 3px;
  overflow: hidden;
  text-decoration: none;
`;

export const HeaderListStyled = styled.ul`
  display: flex;
  ${'' /* flex-direction: column; */}
  align-items: space-between;
  justify-content: space-between;
`;

export const HeaderItemListStyled = styled.li`
  display: flex;
  ${
    '' /* flex-direction: column;
  align-items: space-between;
  justify-content: space-between; */
  }
`;
