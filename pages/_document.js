import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

            <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous" />

        </Head>
        <body>
          <Main />
          <NextScript />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument