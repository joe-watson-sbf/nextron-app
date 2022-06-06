import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {

	const handleAlert = (event) => {

		console.log(event.target.data.value)
		alert('Entry data: ', event.target.data.value)
		event.preventDefault();
	}
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
			<Head>
				<title>Home - Nextron (with-javascript)</title>
			</Head>
			<div>
				<h1> HOME PAGE </h1>
				<img src="/images/logo.png" />
				<p>
					⚡ Electron + Next.js ⚡ -
					<Link href="/next">
						<a>Go to next page</a>
					</Link>

				</p>

			</div>
		</div>
	);
};

export default Home;
