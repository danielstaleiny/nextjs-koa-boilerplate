import Link from 'next/link'
import React, { Component, Fragment } from 'react'
class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: props.region ? props.region : '',
            type: props.type ? props.type : '',
            color: props.color ? props.color : ''
        }
    }

    static getDerivedStateFromProps(
        { region = '', type = '', color = '' } = {},
        prevState
    ) {
        return { region, type, color }
    }

    render() {
        const { region, type, color } = this.state
        return (
            <main className="main-wrapper container relative">
                <h1>{`${region} : ${type} : ${color}`}</h1>
                <Link href="/region?region=east">
                    <a>set region</a>
                </Link>
                <Link href="/region?region=south&type=sunny">
                    <a>set region / type</a>
                </Link>
                <Link href="/region?region=west&type=rain&color=blue">
                    <a>set region / type / color</a>
                </Link>
                <Link href="/">
                    <a>go back to landing page</a>
                </Link>
                <style jsx>{`
                    .main-wrapper {
                        padding-top: 10vh;
                        border-color: #000;
                    }
                    h1 {
                        font-size: 2.6rem;
                        font-weight: bold;
                        line-height: 1.54;
                        margin-bottom: 40px;
                    }
                    a {
                        color: black;
                        text-decoration-line: underline;
                    }
                `}</style>
            </main>
        )
    }
}
export default Content
