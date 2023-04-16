import { Suspense } from "react";
import { Spinner } from "shared/ui/spinner/Spinner";

export const withRouter = (component: () => React.ReactNode) => () =>
  <Suspense fallback={<Spinner />}>{component()}</Suspense>;
