import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
type Props = {
  date: string;
};

const Home: NextPage<Props> = () => {
  return <div>2 <Link href="/">dön</Link></div>;
};
export default Home;
