import { TrendingTextStyles } from "./style"
import {
  Container,
  Typography
} from "@mui/material"
import Link from "next/link"


export const TrendingText = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <TrendingTextStyles>
        <Typography
          variant="h4"
          component="div"
        >
          Trending Now
        </Typography>
        <Link href="/shop/popular">
          <Typography
            variant="h6"
            component="div"
            sx={{ fontColor: 'var(--red4)' }}
          >
            See more
          </Typography>
        </Link>
      </TrendingTextStyles>
    </Container>
  )
}