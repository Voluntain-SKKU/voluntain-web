import React from 'react'
import Youtube from 'react-youtube'

/**
 * @Usage
 *     \<VideoPlayer videoId='_9RvpFdUQr0' \/\>
 */
export const VideoPlayer = (props) => {
    return (
        <YoutubePlayer videoId={props.videoId}/>
    );
}

class YoutubePlayer extends React.Component {
    videoOnReady(event) {
      event.target.pauseVideo();
      // access to player in all event handlers via event.target
      // console.log(event.target);
    }
  
    render() {
      const opts = {
        height: '480',
        width: '720',
        playerVars: {
          // To check other variables, check:
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
      }
  
      const { videoId } = this.props
  
      return <Youtube videoId={videoId} opts={opts} onReady={this.videoOnReady} />;
    }
  }
