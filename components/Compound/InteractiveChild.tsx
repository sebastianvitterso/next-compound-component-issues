"use client";
import { type ReactNode, useState } from "react";

export function InteractiveChild({ children }: { children: ReactNode }) {
	const [count, setCount] = useState(0);
	const increment = () => setCount((old) => old + 1);
	return (
		<button type="button" onClick={increment}>
			{children} ({count})
		</button>
	);
}
