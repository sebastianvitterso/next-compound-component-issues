// "use client";
// ^^^ Remove this to break the app.
import { InteractiveChild } from "./InteractiveChild";
import { Parent } from "./Parent";
import { StaticChild } from "./StaticChild";

type CompoundType = typeof Parent & {
	StaticChild: typeof StaticChild;
	InteractiveChild: typeof InteractiveChild;
};
// @ts-expect-error
const Compound: CompoundType = Parent;
Compound.StaticChild = StaticChild;
Compound.InteractiveChild = InteractiveChild;

export { Compound };
