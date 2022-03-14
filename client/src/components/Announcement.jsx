import styled from "styled-components"

const Container =styled.div`
margin-top:20px;

`

const Wrapper = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>
    <Wrapper>Super Deal! Free Shipping on Orders Over $50</Wrapper> 
    
    </Container>;
};

export default Announcement;