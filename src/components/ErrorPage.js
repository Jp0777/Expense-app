import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            This is 404 page --  <Link to="/">Home Page</Link>
        </div>
    )
}

export default ErrorPage;