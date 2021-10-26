import React from "react";

const CVaboutme = ({ about }) => {
    return(
        <div className="subsection-container">
            <p className="cv-main-content">
                {about.textValue}
            </p>
        </div>
    )
}

export default CVaboutme;