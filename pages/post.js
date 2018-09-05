// import {withRouter} from 'next/router'
// import Layout from '../components/MyLayout.js'
//
// const Page = withRouter((props) => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </Layout>
// ));
//
// export default Page
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show }
};

export default Post
