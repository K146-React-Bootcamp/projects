import Layout from "../component/Layout";
import PhotoList from "../component/PhotoList";
import { usePhotos } from "../context";
export default function App() {
	const { loading, items } = usePhotos();
	return (
		<Layout loading={loading}>
			<PhotoList items={items} />
		</Layout>
	);
}
