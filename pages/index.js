import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './component/layout'
import Image from './component/image'
import useSWR from 'swr'

const fetcher = (url) => fetch(url)
  .then((res) => res.json());

export default function Home() {
  //const[data, setData] = useState({message:'', data:[]})
  //const url = './data.json'

  //fetch(url)
  //  .then(res => res.json())
  //  .then(res => setData(res))

  const { data, error } = useSWR('./data.json', fetcher)

  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
      <Layout header="Next.js" title="Top Pages" />
        <div className="alert alert-primary text-center">
          <h3 className="mb-4">{data != undefined ? data.message : 'error...'}</h3>
            <table className="table table-dark">
              <thead className="">
                <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
              </thead>
              <tbody>
                {data != undefined ? data.data.map((value, key) => (
                  <tr key={key}>
                    <th>{value.name}</th>
                    <th>{value.mail}</th>
                    <th>{value.age}</th>
                  </tr>
                )):
                <tr>
                    <th>nodata...</th>
                  </tr>}
              </tbody>
            </table>
        </div>
      </div>
  )
}
