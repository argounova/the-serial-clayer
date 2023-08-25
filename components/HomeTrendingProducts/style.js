import styled from "@emotion/styled"


export const TrendingTextStyles = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
margin-top: 30px;
padding: 15px;
`

export const TrendingContainerStyles = styled.div`
margin-left: 16px;
margin-bottom: 50px;

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1520px;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 14px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--vintage2);
    border-radius: 0px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--vintage2);
  }

  &::-webkit-scrollbar-track {
    background: var(--red1);
  }
}

> div {
  &
  .container__scroll {
    gap: calc(var(--gap) / 2);
    padding-bottom: var(--gap);
    padding-left: var(--borderSpacing);
    padding-right: var(--borderSpacing);
    margin-left: calc(var(--borderSpacing) * -1);
    width: 100%;

    @media (min-width: 1200px) {
      padding-bottom: 0;
      width: 100%;
      margin-left: auto;
      padding-left: 0;
      padding-right: 0;
      gap: var(--gap);
    }
  }
}
`

export const TrendingProductStyles = styled.div`
min-height: 300px;
flex: 0 0 300px;
margin-bottom: 20px;
margin-right: 20px;
scroll-snap-align: center;
scroll-margin-left: 25px;
position: relative;
border-radius: 30px;
overflow: hidden;
transition: border-color 0.6s ease, box-shadow 0.6s ease;

  @media (min-width: 768px) {
    margin-right: 40px;
  }

  @media (min-width: 1200px) {
    margin-right: 80px;
  }

  .features__item--img {
    position: absolute;
    top: 0;
    left: -120px;
    bottom: 0;
    z-index: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .features__item--content {
    width: 100%;
    height: fit-content;
    position: absolute;
    z-index: 2;
    padding: 20px 20px;
    top: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    @media (min-width: 1200px) {
      cursor: pointer;
      border: 2px solid var(--primary);
      box-shadow: var(--boxShadow);
  
      .features__item--img {
        transform: scale(1.1);
        opacity: 0.5;
      }
    }
  }

  .previous-price {
    margin-right: 10px;
    text-decoration: line-through;
    font-size: 16px;
    color: var(--vintage1);
  }
`