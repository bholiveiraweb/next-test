import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'

import Layout from '../components/Layout'

function Home() {
  const [gravatar, setGravatar] = useState([])

  useEffect(() => {
    fetch(`http://pt.gravatar.com/bholiveiraweb.json`)
      .then((resp) => {
        resp.json().then((data) => {
          setGravatar(data.entry)
        })
      })
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          {gravatar.map(data => (
            <img className="gravatar" key={data.id} src={data.thumbnailUrl} width="160"/>
          ))}
          <h1 className="title">
            <span>Olá,</span> seja bem vindo(a)!
      </h1>
          <div className="card">
            <Link href="/about">
              <a>
                <h3>Sobre mim &rarr;</h3>
                <p>Minha história com a programação</p>
              </a>
            </Link>
          </div>
        </main>
      </Layout>

      <style jsx>{`
      .gravatar {
        border-radius: 50%;
        border: 8px solid #eaeae0;
        margin-bottom: 40px
      }
      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 3rem;
        color: #0070f3
      }

      .title span {
        display: block;
        font-size: 6rem;
        color: #000000;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
`}</style>
    </div>
  )
}

export default Home
