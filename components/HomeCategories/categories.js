import {
  AcUnit,
  AlignVerticalCenter,
  AlignVerticalTop
} from "@mui/icons-material"

export const categories = [
  {
    id: 1,
    icon: AlignVerticalCenter,
    name: "studs",
    backgroundColor: "var(--red4)",
    linkTo: "/shop/studs",
  },
  {
    id: 2,
    icon: AlignVerticalTop,
    name: "drops",
    backgroundColor: "var(--red1)",
    linkTo: "/shop/drops",
  },
  {
    id: 3,
    icon: AcUnit,
    name: "seasonal",
    backgroundColor: "var(--vintage4)",
    linkTo: "/shop/seasonal",
  },
]