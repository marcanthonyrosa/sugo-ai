import { MDXRemote } from "next-mdx-remote/rsc";

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="post-prose">
      <MDXRemote source={source} />
    </div>
  );
}
