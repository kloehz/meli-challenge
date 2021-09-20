import { Suspense } from "react";
import Router from "../../navigation/Router/Router";

export const App = () => {
    return (
        <Suspense fallback={<div>132123</div>}>
            <Router />
        </Suspense>
    )
}
