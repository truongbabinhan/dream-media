interface ShowReelProps {
  isChill: boolean;
}
export const ShowReel = ({ isChill }: ShowReelProps) => {
  const onPlayVideoHover = (video: any) => {
    // Show loading animation.
    var playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(() => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };

  const onPauseVideoHover = (video: any) => {
    // Show loading animation.
    var pausePromise = video.pause();

    if (pausePromise !== undefined) {
      pausePromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(() => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };
  return (
    <div className="w-full flex min-h-screen relative justify-center items-center object-cover">
      <video
        typeof="video/mp4"
        className="w-full h-full max-w-full max-h-full"
        preload="auto"
        muted={isChill}
        loop
        autoPlay
        onMouseOver={(event) => onPlayVideoHover(event.target)}
        onMouseOut={(event) => onPauseVideoHover(event.target)}
        src="./showreel.mp4"
      />
    </div>
  );
};
