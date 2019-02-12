import { smoothScroll, ScrollToTopFade } from './scroll';

export default function init(onContentLoadedFuncs = [], onLoadFuncs = []) {
    // Add smooth scroll to all pages
    onContentLoadedFuncs.push(ScrollToTopFade);
    onLoadFuncs.push(smoothScroll);

    const todoCount = onContentLoadedFuncs.length + onLoadFuncs.length;
    let doneCount = 0;

    // The whole document (HTML) has been loaded.
    // Excluding images, js, and css
    document.addEventListener('DOMContentLoaded', () => {
        // init the progress bar.
        setProgress(0);

        onContentLoadedFuncs.forEach(f => {
            f();
            setProgress(++doneCount / todoCount * 100);
        });
    });

    window.onload = () => {
        // Just set the progress to 100%
        // if there is nothing to do.
        if (!onLoadFuncs.length) {
            setProgress(100, () => showContent());
        }

        onLoadFuncs.forEach(f => {
            f();
            setProgress(++doneCount / todoCount * 100, () => showContent());
        });
    };
};

function showContent() {
    document.querySelector(".content").style.visibility = "visible";
}

function setProgress(percent, onDone) {
    let bar = document.querySelector('.progress-bar');
    if (!bar) {
        return;
    }
    bar.style.minWidth = `${percent}%`;

    if (percent === 100) {
        bar.classList.add("done");
        onDone();
    }
};