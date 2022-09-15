import React from 'react';
import VideoItem from './video_item';
import styles from '../../css/video_list.module.css'

// video_listはappから取得したApiデータをvideo_itemに渡す役割
const VideoList = ({ videos, onVideoClick, display }) => (
    <ul className={styles.videos}>
        {
            videos.map((video) => (
                    <VideoItem
                        key={video.id}
                        video_data={video}
                        onVideoClick={onVideoClick}
                        display={display}
                    />
                )
            )
        }
    </ul>
)

export default VideoList;