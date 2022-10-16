import React, {
	useEffect,
	useRef,
	useState,
	forwardRef,
	useCallback,
  memo,
} from "react";

// custom useEffect hook tanımlaması
function useComponentDidMount(effect) {
	useEffect(effect, []);
}

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (event) => {
		setValue(event.target.value);
	};
	return {
		value,
		onChange,
	};
};
function App() {
	// useState initial olarak değer alır.
	// undefined | string | number | boolean | object | array
	// useState geriye array döner
	// 0. index değişken 1. index ise değişkeni update eden function
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState("Göster");
	// const [firstName, setFirstName] = useState("");
	// const [age, setAge] = useState(18);
	const firstName = useFormInput("");
	const age = useFormInput(18);

	const ref = useRef();
	const buttonRef = useRef();
	useEffect(() => {});

	useComponentDidMount(() => {
		console.log("App componenti render edildi");
	});

	// useEffect(() => {
	// 	ref.current.style.padding = show ? "20px" : "0px";
	// }, [show]);

  const showOrHide = useCallback(() => {
    setShow((prev) => !prev)
  }, []);
	return (
		<div
			ref={ref}
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<p>Funtional Component</p>
			<Button ref={buttonRef} onClick={showOrHide} />
			{show && <p>I love react.js</p>}
			<br />
			<br />
			{/* <form
				onSubmit={(e) => {
					e.preventDefault();
					console.log({firstName: firstName.value, age: age.value})
				}}
			>
				<input
          {...firstName}
					name="first_name"
				/>
				<br />
				<br />
				<input
					{...age}
					name="age"
				/>
				<br />
				<br />
				<button type="submit">Kaydet</button>
			</form> */}
		</div>
	);
}

// memo
// useCallback
const Button = memo(forwardRef((props, ref) => {
	const [title, setTitle] = useState("Göster");

	// useEffect(() => {
	// 	setTitle(props.show ? "Gizle" : "Göster");
	// }, [props.show]);

	// useComponentDidMount(() => {
	// 	console.log("Button componenti render edildi");
	// });

	// useEffect(() => {
	// 	console.log(ref);
	// }, [ref]);

	console.log("Button render edildi", props);

	return (
		<button ref={ref} onClick={props.onClick}>
			{title}
		</button>
	);
}));

export default App;
