import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.PNG" />
        <meta name="description" content="Moale Bogdan cv"></meta>

        <meta
          name="keywords"
          content="Moale Bogdan,cv,application engineer,Aptiv,developer,web developer"
        ></meta>
      </Head>
      <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
