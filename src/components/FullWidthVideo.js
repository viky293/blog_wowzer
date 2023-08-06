import React from "react";
import PropTypes from "prop-types";

export default function FullWidthVideo(props) {
    const {
        title,
        video
    } = props;

    return (
        <div className="ratio ratio-16x9">
            <iframe src={video} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
}

FullWidthVideo.propTypes = {
    video: PropTypes.string,
    title: PropTypes.string,
};
