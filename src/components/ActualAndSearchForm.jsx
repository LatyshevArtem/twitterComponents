import React from "react";
import style from "./cssModules/ActualAndSearchForm.module.css";
import { ExtraMenuIcon } from "./svgComponents/ExtraMenuIcon";
import { SearchIcon } from "./svgComponents/SearchIcon";
import { SettingsIcon } from "./svgComponents/SettingsIcon";

export const ActualAndSearchForm = () => {
    return (
        <div className={style.actualAndSearchForm}>
            <div className={style.searchForm}>
                <div>
                    <SearchIcon />
                </div>
                <div>
                    <input type="text" placeholder="Поиск в Твиттере" />
                </div>
            </div>
            <div className={style.actualNews}>
                <div className={style.actualNewsHeader}>
                    <div className={style.actualNewsHeaderText}>
                        <div>Актуальные темы для вас</div>
                    </div>
                    <div><SettingsIcon /></div>
                </div>
                <div>
                    <div className={style.sectionInActualNews}>
                        <div className={style.sectionHeader}>
                            <div>Актуальные темы: Россия</div>
                            <div>
                                <ExtraMenuIcon />
                            </div>
                        </div>
                        <div className={style.sectionContent}>Оксимирона</div>
                        <div className={style.twitCounter}>Твитов: 2191</div>
                    </div>
                </div>
                <div>
                    <div className={style.sectionInActualNews}>
                    <div className={style.sectionHeader}>
                            <div>Актуальные темы: Россия</div>
                            <div>
                                <ExtraMenuIcon />
                            </div>
                        </div>
                        <div className={style.sectionContent}>#кризалис</div>
                    </div>
                </div>
                <div>
                    <div className={style.sectionInActualNews}>
                        <div className={style.sectionHeader}>
                            <div>Актуальные темы: Россия</div>
                            <div>
                                <ExtraMenuIcon />
                            </div>
                        </div>
                        <div className={style.sectionContent}>#пацанки6</div>
                    </div>
                </div>
                <div>
                    <div className={style.sectionInActualNews}>
                    <div className={style.sectionHeader}>
                            <div>Актуальные темы: Россия</div>
                            <div>
                                <ExtraMenuIcon />
                            </div>
                        </div>
                        <div className={style.sectionContent}>#ЗенитРостов</div>
                    </div>
                </div>
                <div>
                    <div className={style.sectionInActualNews}>
                    <div className={style.sectionHeader}>
                            <div>Актуальные темы: Россия</div>
                            <div>
                                <ExtraMenuIcon />
                            </div>
                        </div>
                        <div className={style.sectionContent}>Глушитель</div>
                    </div>
                </div>
                <div>
                    <div className={style.sectionInActualNews}>
                        <div><a href="">Показать еще</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}