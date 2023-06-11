const app = document.querySelector(".app"),
    switchBox = app.querySelector(".switch"),
    rollDiceBtn = app.querySelector(".roll-dice"),
    diceOne = app.querySelector(".d1"),
    diceTwo = app.querySelector(".d2"),
    put = (e, t) => e.forEach(((i, o) => t.appendChild(e[o]))),
    make = (e, t = []) => {
        let i = document.createElement(e);
        return t.forEach(((e, o) => i.classList.add(t[o]))), i
    },
    shuffleArray = e => e.sort((() => Math.random() - .5)),
    popDice = (e, t) => {
        e.forEach((e => {
            let i = make("div", ["face"]);
            i.innerText = e, put([i], t)
        }))
    },
    addAnimation = (e, t) => {
        e.forEach((i => {
            let o = 240 - 240 * e.length;
            i.style.transition = `${t}ms ease`, i.style.transform = `translateX(${o}px)`
        }))
    },
    removeAfterSpin = (e, t) => {
        setTimeout((() => {
            e.forEach(((t, i) => {
                t.style.transition = "unset", t.style.transform = "translateX(0)", i !== e.length - 1 && t.remove()
            }))
        }), t + 10)
    },
    init = () => {
        document.documentElement.style.setProperty("--h", window.innerHeight + "px"), switchBox.addEventListener("click", (() => {
            switchBox.classList.toggle("extreme"), mode = "soft" === mode ? "extreme" : "soft"
        })), rollDiceBtn.addEventListener("click", (() => {
            rollDiceBtn.classList.add("clicked");
            let e, t = [...shuffleArray(diceFaces[mode].one), ...shuffleArray(diceFaces[mode].one)],
                i = [...shuffleArray(diceFaces[mode].two), ...shuffleArray(diceFaces[mode].two)];
            popDice(t, diceOne), popDice(i, diceTwo);
            let o = diceOne.querySelectorAll(".face"),
                a = diceTwo.querySelectorAll(".face"),
                r = 300 * o.length;
            timeD2 = 300 * a.length, setTimeout((() => {
                addAnimation(o, r), addAnimation(a, timeD2)
            }), 1), removeAfterSpin(o, r), removeAfterSpin(a, timeD2), e = r > timeD2 ? r : timeD2, setTimeout((() => rollDiceBtn.classList.remove("clicked")), e + 20)
        }));
        const e = navigator.userAgent || navigator.vendor || window.opera,
            t = () => {
                appLink.target = "_self", appLink.rel = "nofollow noopener"
            };
        /windows phone/i.test(e) || /android/i.test(e) ? (t(), appLink.href = `https://play.google.com/store/apps/details?id=${appLink.getAttribute("data-playstore")}&referrer=utm_source%3Dpsycatgames_website%26utm_medium%3Dbanner%26utm_content%3Dsex_dice_webapp%26utm_campaign%3Dpsycatgames_internal_ads`) : /iPad|iPhone|iPod/.test(e) && !window.MSStream && (t(), appLink.href = `https://itunes.apple.com/app/id${appLink.getAttribute("data-appstore")}?pt=1178695&ct=sex_dice_webapp&mt=8`)
    };
let mode = "soft";
init();