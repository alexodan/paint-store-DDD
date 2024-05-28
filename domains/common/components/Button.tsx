import { PropsWithChildren } from "react";

type ButtonProps = React.ComponentProps<"button">;

export function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {props.children}
    </button>
  );
}
