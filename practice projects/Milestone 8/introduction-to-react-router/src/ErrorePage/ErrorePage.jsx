import { useRouteError } from "react-router-dom";


const ErrorePage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>4004 Errore !!!</h2> <p>
        <i>{error.statusText || error.message}</i>
      </p>

        </div>
    );
};

export default ErrorePage;