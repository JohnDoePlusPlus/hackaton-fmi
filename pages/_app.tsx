import '../static/sanitize.scss';

import App, { Container } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import * as React from 'react';
import { Provider } from 'react-redux';

import { getStore } from '../src/redux/store';

const Redirect = dynamic(() => import('../src/components/Redirect/Redirect'), {
  ssr: false
})

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const server = !!ctx.req
    const store = getStore(undefined, server)
    const state = store.getState()
    const out = { state, server } as any

    let redirect = false
    if (server) {
      redirect = ctx.res.statusCode === 404
    }

    return Component.getInitialProps ? {
      ...out,
      pageProps: {
        ...(await Component.getInitialProps(ctx))
      },
      notFoundStatusCode: redirect,
    } : out
  }

  render() {
    const { props } = this as any
    const { Component, pageProps, notFoundStatusCode } = props

    if (notFoundStatusCode) {
      return <Redirect />
    }

    return (
      <Container>
        <Head>
          <title>C&K</title>
        </Head>
        <Provider store={getStore(undefined, props.server)}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
