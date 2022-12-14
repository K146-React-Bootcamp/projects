import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Todos({ todos = [] }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to React Bootcamp</h1>

				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					{todos.map((item, i) => (
						<Link href={item.link} key={i}>
							<a className={styles.card}>
								<h2>{item.title}</h2>
							</a>
						</Link>
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}

export async function getStaticProps(context) {
	const data = await fetch(`https://jsonplaceholder.typicode.com/todos`).then(
		(res) => res.json()
	);
	return {
		props: {
			todos: data.slice(0, 10).map((todo) => {
				todo.link = `/todos/${todo.id}`;
				return todo;
			}),
		},
	};
}
