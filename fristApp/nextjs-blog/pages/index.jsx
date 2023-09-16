import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! My name is Huy. I'm a passionate website developer from Viet Nam. I love creating products that create value for users. Here are a few things about me.</p>
        <p>
        My greatest strength skill is Javascript and I have experience working with JSFramworks, JSLibraries, and modules in both Front-End and Back-End. I enjoy learning new knowledge to make myself better, to be able to come up with better solutions for the project and solve many problems at work.
        {' '}
          <a href="https://huynguyen22994.github.io/resume/">My website</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}