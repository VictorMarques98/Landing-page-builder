import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1120rem;
    margin: 0 auto;
    padding: ${theme.font.spacings.medium};
  `}
`;
