import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./style"
import { metadata } from "./links"
import { menuItems } from "./links"
import {
  FaInstagram as Instagram,
  FaEtsy as Etsy,
} from "react-icons/fa"
import Link from "next/link"


export const Footer = () => {
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="gradient">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h4>Links</h4>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
          <FooterMenuStyles className="footer__menu products__menu">
            <h4>
              <Link href="/shop/all" style={{ color: 'var(--vintage3)' }}>
                Products
              </Link>
            </h4>
            <ul>
              <li><Link href="/shop/studs">Stud Earrings</Link></li>
              <li><Link href="/shop/drops">Drop Earrings</Link></li>
              <li><Link href="/shop/seasonal">Seasonal</Link></li>
            </ul>
          </FooterMenuStyles>
        {metadata.instagramUsername ||
        metadata.etsyUsername ? (
          <FooterMenuStyles className="social__menu">
            <h4>
              Follow The Serial Clayer
            </h4>
            <ul>
              {metadata.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${metadata.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {metadata.etsyUsername && (
                <li>
                  <a
                    href={`https://${metadata.etsyUsername}.etsy.com`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Etsy />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Designed & developed by <a href={`${metadata.developerUrl}`}>{metadata.developerName}</a>
          </p>
        </div>
      </CopyrightStyles>
      </div>
    </FooterStyles>
  )
}