import Head from 'next/head'
import './page.module.css'
import { AboutUs, CarsouelSlider, Footer, OurService, ProductSlider, QuickQuote } from '@/components'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <CarsouelSlider />
        <section className='px10'>
          <ProductSlider title="Our Products" /> <br />
          
          <ProductSlider title="Offers Up to 50%" />

        </section>
        <section className='px-2'>
          <OurService />
        </section>
        <section className='px-2 my-5 aboutSection'>
          <AboutUs />
          <QuickQuote />
        </section>
        <Footer className="px-2 py-2 footerSection" />
    </main>
  ) 
}
