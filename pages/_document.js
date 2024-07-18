import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=' class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
    >'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
