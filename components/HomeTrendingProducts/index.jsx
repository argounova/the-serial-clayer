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
      <Box className="container container__tight container__scroll">
        {trendingProducts.map((product, index) => (
          <TrendingProductStyles key={index}>
            <Link href={`${product.linkTo}`}>
              <Image
                className="features__item--img"
                src={`${product.imageURL}`}
                alt={product.altText}
                width={350}
                height={600}
              />
            </Link>
            <div className="features__item--content">
              <h4>{product.productName}</h4>
            </div>
          </TrendingProductStyles>
        ))}
      </Box>
    </TrendingContainerStyles>
  )
}