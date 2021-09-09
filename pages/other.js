import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Other() {
  const [title, setTitle] = useState("Other")
  const [message, setMessage] = useState("React Next.js sample page")

  return (
    <div>
      <Head title={title}>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
      </Head>

      <h1 className="bg-primary my-3 text-white display-4">React</h1>
        <div className="container">
          <h3 className="my-3 text-primary text-cener">{title}</h3>
          <div className="container">
            <p>
              コレはもう一つのページの表示です
            </p>
            <Link href="/">
              <a>Back to Indx page $gt;#gt;</a>
            </Link>
          </div>
        </div>
      </div>
  )
}
