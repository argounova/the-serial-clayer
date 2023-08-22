import { HomeCategoryStyles } from "./style"
import { categories } from "./categories"
import {
  Box,
  Typography
} from "@mui/material"
import Link from "next/link"


export const HomeCategories = () => {
  return (
    <HomeCategoryStyles>
      {categories.map((category) => (
        <Link href={category.linkTo} key={category.id}>
          <Box
            className="category-box"
            sx={{ background: `${category.backgroundColor}` }}
          >
            <category.icon className="category-icon" />
            <Typography
              variant="h6"
              sx={{ color: 'var(--vintage3)' }}
            >
              {category.name}
            </Typography>
          </Box>
        </Link>
      ))}
    </HomeCategoryStyles>
  )
}