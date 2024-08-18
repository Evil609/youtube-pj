import { videos } from "./data/videos.js";
let videoHTML='';
videos.forEach((video) =>{
  videoHTML += `
      <div class="video">
        <div class="video-thumbnail-row">
          <img
            class="thumbnail"
            src="${video.image.thumbnails}"
            alt="thumbnail"
          />
          <div class="video-timer">${video.videoTime}</div>
        </div>
        <div class="video-info-grid">
          <div class="video-logo">
            <img class="logo" src="${video.image.channelLogo}" />
          </div>
          <div class="video-info">
            <p class="video-title">
              ${video.videoTitle}
            </p>
            <p class="video-creator">${video.channelName}</p>
            <p class="video-stats">${video.views} &#183; ${video.publishTime}</p>
          </div>
        </div>
      </div>
  `
  document.querySelector('.js-video-grid').innerHTML = videoHTML;
})