import React, { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import VideoList from './components/video/video_list'
import SearcheHeader from './components/search_header/search_header'
import VideoDetail from './components/video_detail/video_detail'

function App({ youtube }) {
  // YouTubeApiから取得したVideoデータを保存する
  const [videos, setVideos] = useState([]);
  // Selected Video
  const [selectedVideo, setSelectedVideo] = useState(null);
  // VideoListからcallBackされたvideoのデータ
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  // callbackでSearcheHeaderからのデータを渡す
  const searach = useCallback(
    query => {
      youtube.search(query)
      .then(videos => setVideos(videos));
    }, [youtube]
  )
  
  // 最初一回Youtubeのデータを持ってくる
  useEffect(() => {
    setSelectedVideo(null);
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, [youtube]);
  
  return (
    <div className={styles.app}>
      <SearcheHeader onSearch={searach}/>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
