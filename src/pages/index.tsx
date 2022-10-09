import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>みんパソ</title>
				<meta name="description" content="みんパソ" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<p>hello world</p>
		</div>
	);
};

export default Home;
