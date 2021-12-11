import React from "react";
import style from "./HomePage.module.css";
import { Layout } from "../layout/Layout";
import { PostCreation } from "../components/PostCreation";

export const HomePage = () => {
    return (
        <div>
            <Layout className={style.homePage}>
                <PostCreation profileImage="images/profileImage.png" />
            </Layout>
        </div>
    );
}