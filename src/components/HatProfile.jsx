import React from "react";
import style from "./cssModules/HatProfile.module.css";
import { ExtraMenuInHat } from "./svgComponents/ExtraMenuInHat";
import { ConfirmationIcon } from "./svgComponents/ConfirmationIcon";
import { PointInMap } from "./svgComponents/PointInMap,";
import { LinkIcon } from "./svgComponents/LinkIcon";

export const HatProfile = ({hatImage, communityLogo}) => {
    return (
        <div className={style.hatProfile}>
            <header className={style.hatImage}>
                <img src={hatImage} alt="" />
            </header>
            <div className={style.hatContent}>
                <div className={style.logoAndMenu}>
                    <div className={style.communytiLogo}>
                        <img src={communityLogo} alt="" />
                    </div>
                    <div className={style.menu}>
                        <div className={style.extraMenu}>
                            <ExtraMenuInHat />
                        </div>
                        <div className={style.readButton}>Читать</div>
                    </div>
                </div>
                <div className={style.profileNameAndLink}>
                    <div className={style.profileName}>Ведомости<ConfirmationIcon /></div>
                    <div className={style.profileNameLink}>@Vedomosti</div>
                </div>
                <div className={style.aboutProfile}>Официальный аккаунт делового издания «Ведомости»</div>
                <div className={style.usefulLinks}>
                    <div><PointInMap />Россия</div>
                    <div><LinkIcon /> <a>vedomosti.ru</a></div>
                    <div>Регистрация: февраль 2009 г.</div>
                </div>
                <div className={style.subscriptionsAndSubscribersCounters}>
                    <div className={style.subscriptionsCounter}><span>31</span> читаемых</div>
                    <div className={style.subscriberCounter}><span>731,4 тыс.</span> читателей</div>
                </div>
                <div className={style.aboutCommonSubcribers}>Нет в читаемых у пользователей, которых читаете вы</div>
            </div>
        </div>
    );
}