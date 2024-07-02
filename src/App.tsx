import React from "react";
import AsideHeader from "./components/AsideHeader/AsideHeader";
import Main from "./components/Main/Main";
import CustomizeProperties from "./components/CustomizeProperties/CustomizeProperties";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
    const onDragEnd = (result: any) => {
        console.log(result);
    };

    return (
        <div id="App">
            <DragDropContext onDragEnd={onDragEnd}>
                <AsideHeader />
                <Main />
                <CustomizeProperties />
            </DragDropContext>
        </div>
    );
}

export default App;
