import React from "react";
import "./AsideHeader.scss";
import { HTML_TAGS } from "../../utils/htmlTags";
import DropDownBox from "../DropDownBox/DropDownBox";

const AsideHeader = () => {
    return (
        <div className="elements-block-section">
            <h1>HTML Tags</h1>
            {HTML_TAGS.map((category, index) => {
                return (
                    <DropDownBox
                        key={index}
                        category={category}
                    />
                );
            })}
        </div>
    );
};

export default AsideHeader;
