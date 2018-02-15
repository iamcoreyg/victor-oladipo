import React from 'react'
import Layout from './Layout'
import PageHeader from './PageHeader'

const Music = (props) => (
    <Layout>
        <div className="content-wrap">
            <div className="container">
                <PageHeader title="Music" />
                <iframe width="100%" height={700} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/357312359&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>
        </div>
    </Layout>
)

export default Music;