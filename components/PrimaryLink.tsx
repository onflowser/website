import styled from '@emotion/styled'

export const PrimaryLink = styled.a`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radius.sm};
  background: ${(props) => props.theme.color.gold};
  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.fontSize.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  width: fit-content;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in-out all;
  &:hover {
    transform: scale(1.05);
  }
`
