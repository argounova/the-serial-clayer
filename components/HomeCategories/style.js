import styled from "@emotion/styled"


export const HomeCategoryStyles = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100vw;
padding: 8px;

.category-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 25px;
  height: 125px;
  width: 125px;
}

.category-icon {
  font-size: 50px;
  background-color: var(--vintage3);
  border-radius: 10px;
}
`