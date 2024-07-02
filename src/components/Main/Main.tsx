import React from "react";
import "./Main.scss";
import { Droppable } from "react-beautiful-dnd";

const Main = () => {
    return (
        <div className="main-block-section">
            <Droppable droppableId="main">
                {(provided: any) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </div>
    );
};

export default Main;
