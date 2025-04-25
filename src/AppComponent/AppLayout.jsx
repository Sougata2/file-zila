import React from 'react';
import {Outlet} from "react-router";
import ErrorComponent from "@/AppComponent/ErrorComponent.jsx";

function AppLayout() {
    return (
        <div className={"flex flex-col"}>
            <ErrorComponent/>
            {/*<div>Header</div>*/}
            <Outlet/>
            {/*<div>Footer</div>*/}
        </div>
    );
}

export default AppLayout;