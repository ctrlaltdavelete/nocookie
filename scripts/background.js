chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = new URL(details.url);
      if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
        const newUrl = `https://www.youtube-nocookie.com${url.pathname}${url.search}${url.hash}`;
        return { redirectUrl: newUrl };
      }
    },
    {
      urls: [
        "*://www.youtube.com/*",
        "*://youtube.com/*"
      ],
      types: ["main_frame"]
    },
    ["blocking"]
  );