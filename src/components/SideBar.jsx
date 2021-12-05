import React from "react";
import "./cssModules/SideBar.css";
import { BookmarksIcon } from "./svgComponents/BookmarksIcon";
import { IconMain } from "./svgComponents/IconMain";
import { IconOverview } from "./svgComponents/IconOverview";
import { ListsIcon } from "./svgComponents/ListsIcon";
import { MessageIcon } from "./svgComponents/MessageIcon";
import { NotificationIcon } from "./svgComponents/NotificationIcon";
import { ProfileIcon } from "./svgComponents/ProfileaIcon";
import { SideBarExtraMenuIcon } from "./svgComponents/SideBarExtraMenuIcon";

export const SideBar = () => {
    return (
        <aside className="side-bar">
            <nav>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><IconMain /></div>
                        <div className="side-bar-link-content__text">Главная</div>
                    </div>
                </a>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><IconOverview /></div>
                        <div className="side-bar-link-content__text">Обзор</div>
                    </div>
                </a>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><NotificationIcon /></div>
                        <div className="side-bar-link-content__text">Уведомления</div>
                    </div>
                </a>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><MessageIcon /></div>
                        <div className="side-bar-link-content__text">Сообщения</div>
                    </div>
                </a>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><BookmarksIcon /></div>
                        <div className="side-bar-link-content__text">Закладки</div>
                    </div>
                </a>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><ListsIcon /></div>
                        <div className="side-bar-link-content__text">Списки</div>
                    </div>
                </a>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><ProfileIcon /></div>
                        <div className="side-bar-link-content__text">Профиль</div>
                    </div>
                </a>
                <a href="#">
                    <div className="side-bar-link-content">
                        <div><SideBarExtraMenuIcon /></div>
                        <div className="side-bar-link-content__text">Еще</div>
                    </div>
                </a>
            </nav>
            <div className="twit">Твитнуть</div>
        </aside>
    );
}