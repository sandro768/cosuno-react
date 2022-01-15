import styled from 'styled-components';

export const SearchCompany = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  margin-right: 16px;
  margin-left: 0;
  width: 100%;

  @media (min-width: 600px) {
    margin-left: 24px;
    width: auto;
  }
`;

export const SearchIconWrapper = styled.div`
  padding: 0 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBaseWrapper = styled.div`
  color: inherit;

  .MuiInputBase-input {
    color: white;
    padding: 8px 8px 8px calc(1em + 32px);
    transition: width 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    width: 100%;

    @media (min-width: 900px) {
      width: 20ch;
    }
  }

,
`;
