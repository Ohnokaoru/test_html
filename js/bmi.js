const nameEl = document.querySelector("#name");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const bmiEl = document.querySelector("#bmi");
const commentEl = document.querySelector("#comment");



console.log(nameEl, weightEl, heightEl, bmiEl, commentEl);


function calcBmi() {
    // 計算BMI
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空")
        return;
    }

    let bmi = getBmi(height, weight)
    bmiEl.innerText = `BMI:${bmi}`;



    // 取得評語
    let comment;
    if (bmi < 18.5) {
        comment = `過輕`;
    } else if (bmi < 24) {
        comment = `正常`;
    } else if (bmi < 27) {
        comment = `過重`;
    } else if (bmi < 30) {
        comment = `輕度肥胖`;
    } else if (bmi < 35) {
        comment = `中度肥胖`;
    } else {
        comment = `重度肥胖`;
    }
    console.log(bmi, comment);
    commentEl.innerText = `${comment}`;
}


function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;

    if (isNaN(bmi)) {
        return "數值錯誤";
    }
    return bmi.toFixed(2);
}

calcBmi();



function getCls() {
    // input的取值與設定
    nameEl.value = "";
    heightEl.value = "";
    weightEl.value = "";

    // 內文部分
    bmiEl.innerText = "";
    commentEl.innerText = "";
}
