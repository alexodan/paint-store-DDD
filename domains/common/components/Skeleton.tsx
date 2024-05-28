import "react-loading-skeleton/dist/skeleton.css";

import { PropsWithChildren } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Button } from "./Button";

type Props = {
  isLoading: boolean;
  error: Error | null;
  retry: Function;
};

export function SkeletonWrapper({
  isLoading,
  error,
  retry,
  children,
}: PropsWithChildren<Props>) {
  if (error) {
    return (
      <div>
        <h2>An error occurred: {error.message}</h2>
        <Button onClick={() => retry()}>Retry</Button>
      </div>
    );
  }
  return isLoading ? (
    <SkeletonTheme baseColor="#c0bbbb" highlightColor="#bebebe">
      <Skeleton count={1} height={200} containerClassName="w-screen px-16" />
    </SkeletonTheme>
  ) : (
    children
  );
}
