import type { ReactNode } from "react";

export function Parent({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
