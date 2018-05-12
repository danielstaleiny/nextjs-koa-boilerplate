import Helmet from 'next/head'

// global header applied to everypage
// you can override this with your head
// check official docs of react-helmet for more info

const GlobalHead = () => (
    <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Example" />
        <link rel="icon" href="static/favicon.png" />
        <link rel="shortcut icon" href="static/favicon.ico" />
        <title>NEXTJS-KOA-BOILERPLATE</title>
        <meta
            name="keywords"
            content="keys"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
)

export default GlobalHead
