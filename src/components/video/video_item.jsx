import React, { memo } from 'react';
import styles from '../../css/video_item.module.css'

// video_list からvideoデータを取得して表示する
const VideoItem = memo(
    ({ video_data, video_data: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
        <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video_data)}
        >
        <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
    );
  }
);

export default VideoItem;