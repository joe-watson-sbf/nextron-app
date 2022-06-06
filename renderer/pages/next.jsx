import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Next() {
	return (
		<div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
			<Head>
				<title>Next - Nextron (with-javascript)</title>
			</Head>
			<div>
				<h1> NEXT PAGE </h1>
				<img src="/images/logo.png" />
				<p>
					⚡ Electron + Next.js ⚡ -
					<Link href="/home">
						<a>Go to home page</a>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Next;
