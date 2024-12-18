import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    if(isRouteErrorResponse(err)){
        return (
            <div>
                <h1>OOPS...</h1>
                <h4>{err.status} : {err.data}</h4>
            </div>
        );
    }
    return(
        //todo: instanceof
        <div>
            <h1>Unexpected Error</h1>
            <p>{err instanceof Error ? err.message : "An unknown error occurred"}</p>
        </div>
    );
}

export default ErrorPage;
