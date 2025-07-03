import { cn } from "@/lib/utils";
import { lazy, type AnchorHTMLAttributes, type HTMLAttributes } from "react";
// import { CodeBlock } from "./CodeBlock";
import { Text } from "./retroui/Text";

export const a = ({
  children,
  href,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} className="text-blue-600 hover:underline break-all">
    {children}
  </a>
);

export const code = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <code
    className={cn(
      "relative rounded-sm bg-[#282A36] p-1 text-primary text-sm",
      className
    )}
    {...props}
  >
    {children}
  </code>
);

// export const pre = CodeBlock

export const image = (props: HTMLAttributes<HTMLImageElement>) => (
  <img className="mx-auto w-full max-w-[600px] my-8" {...props} />
);

export const h1 = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <Text as="h1" {...props} id={props.id} />
);
export const h2 = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <Text as="h2" className="mb-4 mt-8" {...props} />
);
export const h3 = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <Text as="h3" className="mb-4" {...props} />
);

export const h4 = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <Text as="h4" className="mb-2" {...props} />
);
export const h5 = (props: HTMLAttributes<HTMLHeadElement>) => (
  <Text as="h5" {...props} />
);
export const h6 = (props: HTMLAttributes<HTMLHeadElement>) => (
  <Text as="h6" {...props} />
);
export const p = (props: HTMLAttributes<HTMLHeadElement>) => (
  <Text {...props} className="text-lg text-zinc-600 my-3" />
);

export const li = (props: HTMLAttributes<HTMLHeadElement>) => (
  <Text
    as="li"
    {...props}
    className="text-lg text-zinc-600 ml-4 lg:ml-8 mb-2"
  />
);

export const ul = (props: HTMLAttributes<HTMLHeadElement>) => (
  <ul className="list-disc flex flex-col gap-2 ml-4 mt-2 [&>li>strong]:text-foreground [&>li>strong]:font-medium">
    {props.children}
  </ul>
);

export const img = (props: HTMLAttributes<HTMLImageElement>) => (
  <img className="mx-auto w-full max-w-[600px] my-8" {...props} />
);

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  code,
  // pre,
  image,
  p,
  li,
  ul
};
