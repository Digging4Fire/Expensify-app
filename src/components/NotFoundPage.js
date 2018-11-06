import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <p>this is from 404 page</p>
        <Link to="/">GO HOME</Link>
    </div>
);

export default NotFoundPage;