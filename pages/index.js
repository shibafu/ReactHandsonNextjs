import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [title, setTitle] = useState("Next.js page")
  const [message, setMessage] = useState("React Next.js sample page")

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
      </Head>

      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">{title}</h4>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}.</p>
        </div>
      </div>
    </div>
  )
}
