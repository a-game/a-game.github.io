export default function init(onContentLoadedFuncs = [], onLoadFuncs = []) {
    const todoCount = onContentLoadedFuncs.length + onLoadFuncs.length;
    let doneCount = 0;

    // The whole document (HTML) has been loaded.
    // Excluding images, js, and css
    document.addEventListener('DOMContentLoaded', () => {
        // init the progress bar.
        setProgress(0);
        document.querySelector(".content").style.visibility = "hidden";
        // document.querySelector(".content").style.opacity = 0;

        onContentLoadedFuncs.forEach(f => {
            f();
            setProgress(doneCount++ / todoCount * 100);
        });
    });

    window.onload = () => {
        onLoadFuncs.forEach(f => {
            f();
            setProgress(doneCount++ / todoCount * 100);
        });

        // Just set the progress to 100%
        // if there is nothing else to do.
        if (!onLoadFuncs.length) {
            setProgress(100);
        }
        document.querySelector(".content").style.visibility = "visible";
        // document.querySelector(".content").style.opacity = 1;
    };
};

function setProgress(percent) {
    let bar = document.querySelector('.progress-bar');
    if (!bar) {
        return;
    }
    bar.style.minWidth = `${percent}%`;

    if (percent === 100) {
        bar.classList.add("done");
    }
}