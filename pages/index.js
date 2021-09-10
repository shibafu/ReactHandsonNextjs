import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './component/layout'

export default function Home() {
  const [title, setTitle] = useState("Index")
  const [message, setMessage] = useState("React Next.js sample page")

  return (
    <div>
      <Layout header="Next.js" title="Top Pages" />
      <Head title={title}>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
      </Head>
      <h1 className="bg-primary my-3 text-white display-4">React</h1>
        <div className="container">
          <h3 className="my-3 text-primary text-cener">{title}</h3>
          <div className="container">
            <p>
              コレはページ移動のサンプルです。
            </p>
            <Link href="/other">
              <a>Go to Other page $gt;#gt;</a>
            </Link>
          </div>
        </div>
      </div>
  )
}
