import { TrendingContainerStyles } from "./style"
import { TrendingProductStyles } from "./style"
import {
  Box,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import trendingProducts from "./trendingProducts"


export const HomeTrendingProducts = () => {
  return (
    <TrendingContainerStyles>
      <Box className="container">
        {trendingProducts.map((product, index) => (
          <TrendingProductStyles key={index}>
            <Link href={`${product.linkTo}`}>
              <Image
                className="features__item--img"
                src={`${product.imageURL}`}
                alt={product.altText}
                width={451}
                height={300}
              />
            </Link>
            <div className="features__item--content">
              <h3>{product.productName}</h3>
              <h3><span className="previous-price">{product.previousPrice}</span>{product.productPrice}</h3>
            </div>
          </TrendingProductStyles>
        ))}
      </Box>
    </TrendingContainerStyles>
  )
}