const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const line = $(".line");
line.style.width = tabs[0].clientWidth + 'px';

tabs.forEach(function(tab, index) {
    tab.onclick = function() {
        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.clientWidth + 'px';

        $(".tab-pane.active").classList.remove("active");
        panes[index].classList.add("active");

        $(".tab-item.active").classList.remove("active");
        tab.classList.add("active");
    }
})