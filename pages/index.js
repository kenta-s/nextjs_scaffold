import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="Hello Next.js" />
      <PostLink id="Learn Next.js is awesome" />
      <PostLink id="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
