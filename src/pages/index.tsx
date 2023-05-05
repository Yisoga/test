import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
type Props = {
  date: string;
};

const Home: NextPage<Props> = ({ date }) => {
  return <div>This page is generated on {date} <Link href="/2">GİT</Link></div>;
};
export default Home;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // add Cache-Control HTTP Header to response
  ctx.res.setHeader(
      "Cache-Control",
      "public, s-maxage=31536000"
  );

  console.log('selam')

  return {
    props: {
      date: new Date().toISOString(),
    },
  };
};
