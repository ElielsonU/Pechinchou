import Head from "next/head"
import { useState, useEffect } from "react"
import { DynamicAside, DynamicFooter, Header } from "@/components/sets"
import { connectUser, getSale } from "@/apiConnection"
import { GetStaticPaths, GetStaticProps } from "next"
import { getSales } from "@/apiConnection"
import SalePage from "@/components/templates/sale"

export const getStaticPaths: GetStaticPaths = async (context) => {
  const items = await getSales(1)
  
  const paths = items.map((item: any) => {
    return {params: {id: String(item.id)}}}
  )

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const id = Number(context.params?.id)
  const sale = await getSale(id)

  return {
    props: {sale},
  }
}

interface Sale {
  id: number,
  name: string,
  description: string,
  value: number,
  sale: number,
  likes: number,
  posted: string,
  store: {
    img: string,
    name: string
  },
  img: string,
  comments: []
}

export default function Sale (props: {toggleTheme: Function, sale: Sale}) {
  const [windowWidth, setWindowWidth] = useState(-1)
  const [user, setUser] = useState({
    id: 0,
    username: "",
  })        

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.onresize = () => setWindowWidth(window.innerWidth);

    (async function () { setUser(await connectUser()) })()
  }, [])

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header toggleTheme={props.toggleTheme} user={user} windowWidth={windowWidth} type="sale"/>

      <SalePage sale={props.sale} toggleTheme={props.toggleTheme} windowWidth={windowWidth}/>

      <DynamicFooter />
    </>
  )
}
