import React from "react";
import "./cssModules/Post.css";
import { CommentIcon } from "./svgComponents/CommentIcon";
import { ConfirmationIcon } from "./svgComponents/ConfirmationIcon";
import { ExtraMenuIcon } from "./svgComponents/ExtraMenuIcon";
import { LikeIcon } from "./svgComponents/LikeIcon";
import { RetvitIcon } from "./svgComponents/RetvitIcon";
import { ShareIcon } from "./svgComponents/ShareIcon";

export const Post = ({logoImage, postImage}) => {
    return (
        <div className="post">
            <div className="post-community-icon">
                <img src={logoImage} alt=""/>
            </div>
            <div className="post-content">
                <div className="post-header">
                    <div className="about-author">
                        <div className="c">TJ </div>
                        <ConfirmationIcon />
                        <div className="post-author-id">@tjournal  · 23 мин</div>
                    </div>
                    <div >
                        <ExtraMenuIcon />
                    </div>
                </div>
                <article>
                    <p className="first-article-p">От «Драконьего жемчуга» до «Ковбоя Бибопа» — история о том, как Голливуд
                        делает ремейки аниме, но никак не может угодить критикам и зрителям.</p>
                    <p className="other-article-p">Японская анимация так сложна для адаптации или для этого просто не нашлись нужные люди</p>
                    <div className="article-image">
                        <img src={postImage} alt=""/>
                        <div className="text-under-article-image">
                            <div>tjournal.ru</div>
                            <div><span>«Доспех без призрака»: почему у американцев упорно не получаю...</span></div>
                            <div className="last-p-under-article">Проблемы с пониманием оригинала, недостаток таланта и неправильный подход.</div>
                        </div>
                    </div>
                </article>
                <div className="post-menu">
                    <div className="comment-section">
                        <CommentIcon />
                        <div className="comment-counter">1</div>
                    </div>
                    <div className="retvit-section">
                        <RetvitIcon />
                        <div className="retvit-counter">2</div>
                    </div>
                    <div className="like-section">
                        <LikeIcon />
                        <div className="like-counter">3</div>
                    </div>
                    <div className="share-section">
                        <ShareIcon />
                        <div className="share-counter">4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}