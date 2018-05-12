import Link from 'next/link'
import React, { Fragment } from 'react'

const Content = () => (
    <Fragment>
        <main className="main-wrapper container relative">
            <div className="row flex1">
                <div className="flex1 row vertical-center">
                    <div>
                        <h1>Nextjs koa boilerplate</h1>
                        <Link href="/region">
                            <a className="inline-block btn row vertical-center">
                                Go to region
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
        <style jsx>{`
            h1 {
                margin-bottom: 20px;
            }
            p,
            .btn {
                margin-bottom: 40px;
                color: black;
                text-decoration-line: underline;
            }
            h1 {
                font-size: 6rem;
                font-weight: 300;
                line-height: 1.33;
            }
            p {
                font-size: 1.6rem;
                font-weight: 300;
                line-height: 1.25;
                max-width: 670px;
            }
        `}</style>
    </Fragment>
)

export default Content
