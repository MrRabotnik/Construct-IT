import React, { forwardRef, useState } from "react";
import "./DropDownBox.scss";
import { IMAGES } from "../../utils/images";
import { Draggable, Droppable } from "react-beautiful-dnd";

const DropDownBox = ({ category }: any) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const handleToggleDropDown = () => {
        setDropDownOpen((prev) => !prev);
    };

    return (
        <>
            <div
                className="category-item"
                onClick={handleToggleDropDown}
            >
                <p>{category.label}</p>
                {dropDownOpen ? (
                    <img
                        src={IMAGES.arrowUpIcon}
                        alt="Arrow down icon"
                    />
                ) : (
                    <img
                        src={IMAGES.arrowDownIcon}
                        alt="Arrow down icon"
                    />
                )}
            </div>
            {dropDownOpen ? (
                <Droppable droppableId={category.label}>
                    {(provided) => (
                        <div
                            className="drop-down"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {category.items.length > 0 &&
                                category.items.map((element: any, index: number) => (
                                    <Draggable
                                        key={element.label} // Use a unique key for each Draggable item
                                        draggableId={element.label}
                                        index={index}
                                    >
                                        {(provided2) => (
                                            <TagContainer
                                                provided={provided2}
                                                element={element}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ) : (
                ""
            )}
        </>
    );
};

export default DropDownBox;

const TagContainer = forwardRef<HTMLDivElement, any>(({ element, provided }) => {
    return (
        <div
            className="element-container bebas-neue-regular"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
            <div className="element">
                <div className={`opening-tag ${element.singleTag ? "border-normal" : ""}`}>{`<${element.label}${
                    element.singleTag ? " />" : ">"
                }`}</div>
                {!element.singleTag && (
                    <>
                        {/* <div className="vertical-line"></div> */}
                        <div className="closing-tag">{`</${element.label}>`}</div>
                    </>
                )}
            </div>
            <div className="img-container">
                <img
                    src={IMAGES.infoIcon}
                    alt="Info icon"
                />
                <div className="description-container">
                    <p>{element.description}</p>
                </div>
            </div>
        </div>
    );
});
