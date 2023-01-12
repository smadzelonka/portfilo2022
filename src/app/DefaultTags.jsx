export default function DefaultTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="content-language" content="en" />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta property="og:type" key="og:type" content="website" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta
        property="og:url"
        key="og:url"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}`}
      />
    </>
  )
}
