import React from "react";
import { Layout } from "../layout/Layout";
import { HatProfile } from "../components/HatProfile";
import { Post } from "../components/Post";

export const ProfilePage = () => {
    return (
        <div>
            <Layout>
                <HatProfile hatImage="images/hatImage.jpg" communityLogo="images/communityLogo.jpg" />
                <Post logoImage="images/logoImage.jpg" postImage="images/postImage.jpg" />
            </Layout>
        </div>
    );
}