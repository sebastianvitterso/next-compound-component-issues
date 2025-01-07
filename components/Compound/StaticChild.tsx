import type { ReactNode } from "react";

export function StaticChild({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
