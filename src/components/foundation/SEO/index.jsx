import Head from 'next/head';

const SEO = ({ headTitle }) => {
  const hasheadTitle = Boolean(headTitle);

  const baseTitle = 'Simpstalk';
  // const title = hasheadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;
  const title = baseTitle;

  // eslint-disable-next-line prettier/prettier
  const description = 'Chat desenvolvido na Imersão React 4 da Alura';
  const urlBase = 'https://simpstalk-pmdpaula.vercel.app/';
  const image = '/seo.jpg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
