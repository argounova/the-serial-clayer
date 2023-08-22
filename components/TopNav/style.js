import styled from "@emotion/styled"


export const TopNavStyles = styled.div`
width: 100vw;

.toolbar-align {
  display: flex;
  justify-content: space-between;
}

.scroll-top-fab {
  background-color: var(--red3);

  &:hover {
      background-color: var(--red4);
  }
}
`