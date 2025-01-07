// import { Table } from "@equinor/eds-core-react";
import { Compound } from "../components/Compound";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
	return (
		<div>
			<Compound>
				<Compound.StaticChild>Static child</Compound.StaticChild>
				<Compound.InteractiveChild>Interactive child</Compound.InteractiveChild>
			</Compound>
			{/* <Table>
				<Table.Body>Testing 1-2-3</Table.Body>
			</Table> */}
			{/* ^^^ Uncomment this to break the app. */}
		</div>
	);
}
