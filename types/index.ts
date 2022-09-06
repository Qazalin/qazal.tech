export * from "./apiTypes";

// * MDX * //
/**
 * Since next-mdx-remote does not support ts,
 * we need to cast all props as any
 * however, this can be changed later and
 * the changes will impact all components in
 * the components/mdx dir */
export type MDXCustomComponent = (props: any) => React.ReactElement;
