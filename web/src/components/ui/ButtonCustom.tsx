// import styled from '@emotion/styled';
import styled from '@emotion/styled';
import { ButtonProps, css } from '@mui/material';
import { Button as ButtonBase } from '@mui/material';
import React from 'react';
import theme from '../../utils/theme';

const colors = {
  inherit: '',
  secondary: css`
    color: #070c0c;
  `,
  success: '',
  info: '',
  warning: '',
  error: css`
    color: ${theme.palette.error.main};
    background-color: rgba(255, 77, 77, 0.14);
  `,
  primary: css`
    color: ${theme.palette.primary.light};
  `,
};

const StyledButtonBase = styled(ButtonBase)`
  font-weight: 200;
  box-shadow: none;
  border-radius: ${theme.spacing(1)};
  background-color: #070c0c;
  padding: 0.4rem 2rem;
  transition: background-color 0.3s, color 0.3s, opacity 0.3s;

  ${({ color }) => colors[color ?? 'primary']};

  :hover {
    background-color: #070c0c;
    ${({ color }) => colors[color ?? 'primary']};
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.25;
    ${({ color }) => colors[color ?? 'primary']};
  }
`;

export const ButtonCustom: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButtonBase {...props} color={props.color || 'primary'}>
      {children}
    </StyledButtonBase>
  );
};

export default ButtonCustom;
