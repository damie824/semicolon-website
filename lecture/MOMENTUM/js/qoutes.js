const quotes = [
    {
        quote: "나는 미래에 대해 생각하는 법이 없다. 어차피 곧 닥치니까.",
        author: "Albert Einstein"
    },
    {
        quote: "계획은 중요하지 않습니다. 계획을 세우는것이 가장 중요합니다.",
        author: "Dwight David Eisenhower"
    },
    {
        quote: "재물을 직접 만들지 않은 사람이 소비할 권리가 없는것처럼 행복을 직접 만들지 않은 사람도 행복을 누릴 권리가 없다.",
        author: "George Bernard Shaw"
    },
    {
        quote: "헌법은 미국인들이 행복을 추구할 권리를 보장할 뿐입니다. 그러므로 당신은 스스로 행복을 잡아야 합니다.",
        author: "Benjamin Franklin"
    },
    {
        quote: "모든 행복과 불행은 오로지 우리가 애정을 느끼는 사물의 질로부터 비롯된다.",
        author: "Baruch Spinoza"
    },
    {
        quote: "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
        author: "Confucius"
    },
    {
        quote: "적을 향해 행진할 때는 나쁜 음악과 나쁜 논리도 얼마나 좋게 들리는가!",
        author: "Nietzsche, Friedrich Wilhelm"
    },
    {
        quote: "얻은 것은 이미 끝난 것이다. 기쁨의 본질은 그 과정에 있으므로.",
        author: "William Shakespeare"
    },
    {
        quote: "세상을 바꾸려면, 은혜를 갚을 수 없는 사람들에게도 잘 해야 합니다.",
        author: "Pope Francis"
    },
    {
        quote: "때로는 기쁨이 미소의 근원이기도 하지만, 때로는 미소가 기쁨의 근원이 되기도 한다.",
        author: "Thich Nhat Hanh"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
