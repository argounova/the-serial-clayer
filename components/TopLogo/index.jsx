import { TopLogoStyles } from "./style"
import Image from "next/image"
import Link from "next/link"


export const TopLogo = () => {
  return (
    <TopLogoStyles>
      <Link href={`/`}>
        <Image 
          src={`https://the-serial-clayer.s3.amazonaws.com/serial-clayer-logo-v1-fontONLY.png`}
          width={325}
          height={159}
          alt="the serial clayer official logo"
          unoptimized={true}
        />
      </Link>
    </TopLogoStyles>
  )
}