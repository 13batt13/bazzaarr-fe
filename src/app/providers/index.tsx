import compose from "compose-function";
import { withRouter } from "app/providers/withRouter";

export const withProviders = compose(withRouter);