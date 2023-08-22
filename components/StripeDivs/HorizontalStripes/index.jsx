import { HorizontalStripeStyles } from "./style"


const stripeColors = [
  "var(--vintage1)",
  "var(--vintage2)",
  "var(--red2)",
  "var(--red4)",
  "var(--red1)",
]

export const HorizontalStripes = () => {
  return (
    <HorizontalStripeStyles>
      {stripeColors.map((stripeColor, index) => (
        <div
          key={index}
          className="stripe"
          style={{ backgroundColor: `${stripeColor}` }}
        ></div>
      ))}
    </HorizontalStripeStyles>
  )
}