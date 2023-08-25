import styled from "@emotion/styled"


export const ContactStyles = styled.div`
display: flex; 
flex-direction: column; 
align-items: center;
width: 100vw;
height: fit-content;
padding: 15px;

a {
  color: var(--red2);
  font-weight: bold;
}

.contact-form {
  display: flex; 
  flex-direction: column; 
  align-items: center;
  width: 85%;
  opacity: 0.98; 
  height: 400px;
  border-radius: 5px;
  stroke: var(--red2);
}
`