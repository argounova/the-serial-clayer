import Head from 'next/head'
import { TopNav } from '../../components/TopNav'
import { TopLogo } from '../../components/TopLogo'
import { HorizontalStripes } from '../../components/StripeDivs/HorizontalStripes'
import { ComingSoon } from '../../components/ComingSoon'


export default function ShopAll () {
  return (
    <>
    <Head>
      <title>Gallery | The Serial Clayer</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/tsc-tab-icon.png" />
    </Head>
    <TopNav />
    <TopLogo />
    <HorizontalStripes />
    <ComingSoon />
  </>
  )
}