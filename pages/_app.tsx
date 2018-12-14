import '../static/sanitize.scss';

import App, { Container } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { Provider } from 'react-redux';

import { getStore } from '../src/redux/store';

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const server = !!ctx.req
    const store = getStore(undefined, server)
    const state = store.getState()
    const out = { state, server } as any

    return Component.getInitialProps ? {
      ...out,
      pageProps: {
        ...(await Component.getInitialProps(ctx))
      },
    } : out
  }

  render() {
    const { props } = this as any
    const { Component, pageProps } = props

    return (
      <Container>
        <Head>
          <title>Hugs for Bugs</title>
        </Head>
        <Provider store={getStore(undefined, props.server)}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
