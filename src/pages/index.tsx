import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Header } from '@/components/sets/'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: {toggleTheme: Function}) {
  return (
    <>
      <Head>
        <title> Pechinchou - As Melhores Promoções da Internet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header toggleTheme={props.toggleTheme}/>
      <div>
      </div>
    </>
  )
}
