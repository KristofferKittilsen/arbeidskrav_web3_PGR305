import React from "react";
import PropTypes from "prop-types";

const PageTitle = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

PageTitle.defaultProps = {
    title: "Title not found"
}

export default PageTitle;