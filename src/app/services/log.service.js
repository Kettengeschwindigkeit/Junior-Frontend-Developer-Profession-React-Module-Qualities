import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://c87acf4e8b9949519de5d055ff116407@o1430096.ingest.sentry.io/4504005483888640",
        integrations: [new BrowserTracing()],
    
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

const logger = {
    init,
    log
};

export default logger;
