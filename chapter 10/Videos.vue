<template>
  <div class="card card-body">
    <h2>Videos</h2>
  </div>
</template>

<script>
import router from '@/router';
import Header from '../components/Header.vue';
export default {
  name: 'VideoPlayer',
  component: { YoutubeVue3 },
  setup() {
    const stopVideo = () => {
      playerRef.value.player.stopVideo();
      router.push({ name: 'videos' });
    };
    const playNext = () => {
      const index = videos.findIndex((v) => v.id === videoInfo.video.id);
      const nextVideo = videos[index + 1];
      if (nextVideo) {
        videoInfo.video = nextVideo;
        router.push({ name: 'vidoes/id', params: { id: nextVideo.id } });
      } else {
        videoInfo.video = videos[0];
        router.push({ name: 'vidoes/id', params: { id: videos[0].id } });
      }
    };
    const playPrev = () => {
      const index = videos.findIndex((v) => v.id === videoInfo.video.id);
      const prevVideo = videos[index - 1];
      if (prevVideo) {
        videoInfo.video = prevVideo;
        router.push({ name: 'videos/id', params: { id: prevVideo.id } });
      }
    };
    return { videoInfo, playerRef, playNext, stopVideo, playPrev };
  },
};
</script>
