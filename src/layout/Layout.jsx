import React from "react";
import { SideBar } from "../components/SideBar";
import { ActualAndSearchForm } from "../components/ActualAndSearchForm";

export const Layout = (props) => {
    const className = props.className;
    return (
        <div className={className}>
            <SideBar />
            {props.children}
            <ActualAndSearchForm />
        </div>
    );
}