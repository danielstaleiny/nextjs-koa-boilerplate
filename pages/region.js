import React, { Fragment } from 'react'
import GlobalHead from '../components/global-head'
import GlobalStyles from '../components/global-styles'
import Content from '../components/region/region-content'

class Page extends React.Component {
    render() {
        return (
            <Fragment>
                <GlobalHead />
                <style jsx global>
                    {GlobalStyles}
                </style>
                    <Content {...this.props} />
            </Fragment>
        )
    }
}

Page.getInitialProps = async ({ req, query }) => {
    const isServer = !!req
    const region = query ? query.region : ''
    const type = query ? query.type : ''
    const color = query ? query.color : ''
    return {
        isServer,
        region,
        type,
        color
    }
}

export default Page
