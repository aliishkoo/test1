// 1 задание

const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false


// 2 задание

const printEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
};

printEverySecond();


// 3 задание

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
};

count();


// 4 задание

const box = document.getElementById("box");

box.addEventListener("click", () => {
    box.classList.toggle("active");
});








