import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://33a7d2d2bf6816d69c73f89e614b04dd@o4509888154828800.ingest.de.sentry.io/4509888177373264",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
