import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './component/layout'
import Image from './component/image'

export default function Home() {
 // const url = './public/data.json'
  const[data, setData] = useState({message:'', data:[]})

  
  const url = './data.json'

  fetch(url)
    .then(res => res.json())
    .then(res => setData(res))

  const [title, setTitle] = useState("Index")
  const [message, setMessage] = useState("React Next.js sample page")

  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
      <Layout header="Next.js" title="Top Pages" />
        <div className="alert alert-primary text-center">
          <h3 className="mb-4">{data.message}</h3>
            <table className="title bg-white">
              <thead className="table-dark">
                <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
              </thead>
              <tbody>
                {data.data.map((value, key) => {
                  <tr ket={key}>
                    <th>{value.name}</th>
                    <th>{value.mail}</th>
                    <th>{value.age}</th>
                  </tr>
                })}
              </tbody>
            </table>
        </div>
      </div>
  )
}
