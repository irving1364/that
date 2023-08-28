import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // Agregamos el idioma que deseemos, aquí por ejemplo español.
      <Html lang="es"> 
        <Head />
        <link res="shortcut icon" href="/isoType.ico"/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;