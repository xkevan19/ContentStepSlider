/*
    Author: https://codewithkevan.com
*/

document.documentElement.className = "js";
var supportsCssVars = function() {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");

(function() {

    var filename = 'https://tympanus.net/codrops/adpacks/cda.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad2'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {

        case "ad2":
            var cdaLink = 'https://codewithkevan.com';
            var cdaText = "Here we create designs for the future, follow Codewithkevan on social media for more.";
            break;
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.style.display = 'none';
    cda.innerHTML = '<a href="' + cdaLink + '" class="cda-img" target="_blank" rel="nofollow noopener"></a><a href="' + cdaLink + '" class="cda-text" target="_blank" rel="noopener">' + cdaText + '</a><div class="cda-footer"><a class="cda-poweredby" href="https://linktr.ee/xkevan19" target="_blank" rel="noopener">Follow me</a><button class="cda-remove" id="cda-remove">Close</button></div>';
    document.getElementsByTagName('body')[0].appendChild(cda);

    setTimeout(function() {
        cda.style.display = 'block';
    }, 500);

    document.getElementById('cda-remove').addEventListener('click', function(e) {
        cda.style.display = 'none';
        e.preventDefault();
        alert("Please follow us for more, thank you")
    });

})();