import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html
        lang='ja'
        dir='ltr'
      >
        <Head>
          {/* サイト全体に反映させたいデフォルトの設定を記述する ex) Google Fonts の読み込み */}
          <link
            rel='preconnect'
            href='https://fonts.googleapis.com'
          />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap'
            rel='stylesheet'
          />
          <meta
            key='theme-color-light'
            name='theme-color'
            media='(prefers-color-scheme: light)'
            content='#84B1DF'
          />
          <meta
            key='theme-color-dark'
            name='theme-color'
            media='(prefers-color-scheme: dark)'
            content='#84B1DF'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
