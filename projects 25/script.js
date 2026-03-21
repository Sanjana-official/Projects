//date-21/3/2026, dont know js part, got from chatgpt. reread/redo this part future me!!!

const originalTitle = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "Come back please 😭, miss you!";
    } else {
        document.title = originalTitle;
    }
});
