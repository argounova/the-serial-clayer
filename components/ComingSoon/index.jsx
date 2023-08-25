import { ComingSoonStyles } from "./style"
import {
  Typography
} from "@mui/material"


export const ComingSoon = () => {
  return (
    <ComingSoonStyles>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontFamily: 'fascinate' }}
      >
        Coming Soon
      </Typography>
      <Typography
        variant="h4"
        align="center"
      >
        Please bear with us while our site is being built.
      </Typography>
      <Typography
        variant="h4"
        align="center"
      >
        In the meantime, check out our <span><a href="https://theserialclayer.etsy.com" target="_blank">Etsy</a></span> shop!
      </Typography>
    </ComingSoonStyles>
  )
}