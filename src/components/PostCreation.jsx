import React from "react";
import styles from "./cssModules/PostCreation.module.css";
import { DateAttachmentIcon } from "./svgComponents/DateAttachmentIcon";
import { GifAttachmentIcon } from "./svgComponents/GifAttachmentIcon";
import { ImageAttachmentIcon } from "./svgComponents/ImageAttachmentIcon";
import { SheetAttachmentIcon } from "./svgComponents/SheetAttachmentIcon";
import { SmileAttachmentIcon } from "./svgComponents/SmileAttachmentIcon";

export const PostCreation = ({profileImage}) => {
    return (
        <div className={styles.postCreation}>
            <div className={styles.content}>
                <div className={styles.profileImage}>
                    <img src={profileImage} />
                </div>
                <div>
                    <div className={styles.textNewPost}>Что происходит?</div>
                    <div className={styles.newPostMenu}>
                        <div className={styles.attachmentIcons}>
                            <ImageAttachmentIcon />
                            <GifAttachmentIcon />
                            <SheetAttachmentIcon />
                            <SmileAttachmentIcon />
                            <DateAttachmentIcon />
                        </div>
                        <div className={styles.twitButton}>Твитнуть</div>
                    </div>
                </div>
            </div>
        </div>
    );
}