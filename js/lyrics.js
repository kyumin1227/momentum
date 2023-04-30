const lyrics = [
    {
    lyric: "살아야지 나는 살아 너에게 니가 살고 싶은 세상이 되어줘야지",
    lyricist: "위수 - 교토 中",
    source: `<iframe width="1280" height="720"; src="https://www.youtube.com/embed/CC6koTdHRSI?autoplay=1&mute=1" title="Kyoto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
    lyric: "지나간 여름을 안타까워마 지나간 여름을 생각하지마 기억은 여기 이 가슴속에 남을 거야 기억은 사라지지 않고 함께 일 거야",
    lyricist: "위수 - 지나간 여름을 안타까워마 中",
    source: `<iframe width="1280" height="720" src="https://www.youtube.com/embed/0RN7jqCTHJs?autoplay=1&mute=1" title="[MV] 위수 (WISUE) - 지나간 여름을 안타까워마 (Dear my last summer)/ Official Music Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
    lyric: "이 시간의 난 너와의 시간을 물 들이고 첫 사랑이라는 이름으로 지어지나봐",
    lyricist: "백아 - 첫사랑 中",
    source: `<iframe width="1280" height="751" src="https://www.youtube.com/embed/vVrFyMDMrlM?autoplay=1&mute=1" title="백아 - 첫사랑" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
    lyric: "내 맘은 무뎌지지 않으니 익숙해지지만 말아주시오",
    lyricist: "백아 - 테두리 中",
    source: `<iframe width="1280" height="746" src="https://www.youtube.com/embed/R8axRrFIsFI?autoplay=1&mute=1" title="백아 (Baek.a) - 테두리" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
    lyric: "아이보다 어린 어른의떳떳하지 못한 숨바꼭질 닮아야 한다면 난 뒤쳐질게요",
    lyricist: "백아 - 시간을 되돌리면 中",
    source: `<iframe width="1280" height="720" src="https://www.youtube.com/embed/CLmYx6z9boQ?autoplay=1&mute=1" title="[M/V] Baek A(백아) - Time Slip(시간을 되돌리면)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
    lyric: "추억은 한 편의 산문집 되어 길 잃은 맘을 위로하는 노래가 되고 그건 긴 어둠을 서성이던 청춘이 남기고 간 의미일 거야",
    lyricist: "신지훈 - 추억은 한편의 산문집 되어 中",
    source: `<iframe width="1280" height="720" src="https://www.youtube.com/embed/uS5U3_-f_9k?autoplay=1&mute=1" title="신지훈 Shin Ji Hoon - 추억은 한 편의 산문집 되어 memories soon to be a chapter of an anthology Official M/V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
    lyric: "엄만 언제 공허함을 느끼십니까 이건 나태함입니까 애초에 헛된 꿈입니까",
    lyricist: "신지훈 - 가득 빈 마음에 中",
    source: `<iframe width="1280" height="720"; src="https://www.youtube.com/embed/04_aOA6HLi8?autoplay=1&mute=1" title="가득 빈 마음에 (Fully Empty)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
    lyric: "어지러운 슬픔이 가만히 잠들 때까지 영원처럼 안아줘",
    lyricist: "프롬 - 영원처럼 안아줘 中",
    source: `<iframe width="1280" height="720" src="https://www.youtube.com/embed/1C-y21sRN80?autoplay=1&mute=1" title="프롬 Fromm - 영원처럼 안아줘 (With 카더가든) OFFICIAL M/V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
]

const lyric = document.querySelector("#lyric > span:first-child");
const lyricist = document.querySelector("#lyric > span:last-child");
const link = document.querySelector("#youtubeLink");

const todaysLyric = lyrics[Math.floor(Math.random() * (lyrics.length))];

lyric.innerText = todaysLyric.lyric;
lyricist.innerText = todaysLyric.lyricist;
link.innerHTML = todaysLyric.source;