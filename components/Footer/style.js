import styled from "@emotion/styled"


export const FooterStyles = styled.footer`
&.section {
  padding: 0px;
  background-color: var(--red1);

  .container {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      align-items: flex-start;
      justify-content: center;
      flex-direction: row;
    }

    @media (min-width: 1200px) {
      gap: calc(var(--gap) * 2);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      a {
        transition: color 0.3s ease;
      }
    }
  }
}

.gradient {
  height: 100%;
  width: 100%;
  z-index: 1;
  padding: 75px;
}
`

export const FooterMenuStyles = styled.div`
* {
  color: var(--vintage3);
}
  @media (min-width: 768px) {
    flex-grow: 1;
    width: 33.333%;
  }

  h4 {
    margin-top: 20px;
    display: inline-block;
    border-bottom: 2px solid #000;
    color: var(--vintage3);

    a {
      color: #fff;
      text-decoration: none;
    }
  }
  ul {
    margin-bottom: var(--gap);

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    margin-top: 5px;
    margin-bottom: 5px;

    a {
      color: var(--vintage3);
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 700;

      span {
        color: var(--vintage3);
      }
    }

    &:hover,
    &:focus {
      a {
        color: var(--vintage2);
      }
    }
  }

  &.social__menu {
    margin-bottom: var(--gap);
    text-align: start;
    color: var(--vintage3);

    ul {
      display: flex;
      color: var(--vintage3);

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;

      }

      li {
        font-size: 23px;
        margin-right: 8px;
        color: var(--vintage3);

        @media (min-width: 768px) {
          margin-left: 5px;
          margin-right: 5px;
        }

        a {
          color: var(--vintage3);
        }

        &:hover,
        &:focus {
          a {
            color: var(--vintage2);
          }
        }
      }
    }
  }
`

export const CopyrightStyles = styled.div`
  font-size: 14px;
  padding-top: var(--gap);

  a {
    color: var(--vintage2);
    font-weight: bold;
  }

  p {
    margin: 10px 0px;
    color: var(--vintage2);

    @media (max-width: 475px) {
      font-size: 13px
    }
  }
`