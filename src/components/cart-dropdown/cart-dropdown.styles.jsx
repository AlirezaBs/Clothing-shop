import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  
  button {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemss = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;