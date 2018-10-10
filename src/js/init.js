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
        document.querySelector(".content").style.visibility = "hidden";

        onContentLoadedFuncs.forEach(f => {
            f();
            setProgress(++doneCount / todoCount * 100);
        });
    });

    window.onload = () => {
        onLoadFuncs.forEach(f => {
            f();
            setProgress(++doneCount / todoCount * 100);
        });

        // Just set the progress to 100%
        // if there is nothing else to do.
        if (!onLoadFuncs.length) {
            setProgress(100);
        }
        document.querySelector(".content").style.visibility = "visible";
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
};