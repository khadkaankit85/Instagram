import { useState } from "react";
import PropTypes from "prop-types"

const ReadMore = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };

    return (
        <div className={`${isTruncated ? "h-8" : "w-fit"} inline`}>
            {isTruncated ? (
                <p>{text.slice(0, maxLength)}... <button onClick={toggleTruncate}>More</button></p>
            ) : (
                <p>{text} <button onClick={toggleTruncate}>Less</button></p>
            )}
        </div>
    );
};

ReadMore.propTypes = {
    text: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired
}

export default ReadMore;
