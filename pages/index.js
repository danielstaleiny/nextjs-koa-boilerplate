import React, { Fragment } from 'react'
import GlobalHead from '../components/global-head'
import GlobalStyles from '../components/global-styles'
import Content from '../components/landing/landing-content'

export default () => (
    <Fragment>
        <GlobalHead />
        <style jsx global>
            {GlobalStyles}
        </style>
        <Content />
    </Fragment>
)
