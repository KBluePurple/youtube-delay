const context = new AudioContext();
const video = document.querySelector("#movie_player > div.html5-video-container > video");
const source = context.createMediaElementSource(video);

const splitter = context.createChannelSplitter(2);
const merger = context.createChannelMerger(2);

const leftDelay = context.createDelay();
const rightDelay = context.createDelay();

leftDelay.delayTime.value = 0;
rightDelay.delayTime.value = 0.01;

source.connect(splitter);

splitter.connect(leftDelay, 0);
splitter.connect(rightDelay, 1);

leftDelay.connect(merger, 0, 0);
rightDelay.connect(merger, 0, 1);

merger.connect(context.destination);
