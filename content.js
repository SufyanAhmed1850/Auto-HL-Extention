const theme = (cb) => {
    const topLine = document.querySelector(".RVEQke");
    topLine.style.backgroundColor = "#A4FFAF";

    const rootBg = document.querySelector(".Uc2NEf");
    if (rootBg) {
        rootBg.style.backgroundColor = "#18171f";
    }

    const containerBg = document.querySelectorAll(".geS5n");
    const topContainer = document.querySelector(".m7w29c");
    const topContainerBorderTop = document.querySelector(".zAVwcb");
    const topContainerTitle = document.querySelector(".F9yp7e");
    if (containerBg) {
        topContainer.style.backgroundColor = "#24232C";
        topContainerTitle.style.color = "#E6E5EA";
        topContainer.style.border = "none";
        topContainerBorderTop.style.borderTop = "1px solid #ffffff1f";
        for (let i = 0; i < containerBg.length; i++) {
            containerBg[i].style.backgroundColor = "#24232C";
            containerBg[i].style.border = "none";
        }
    }

    const greenText = document.querySelectorAll(".HoXoMd.RjsPE");
    for (let i = 0; i < greenText.length; i++) {
        greenText[i].style.color = "#A4FFAF";
    }

    const textCountry = document.querySelectorAll(".OvPDhc");
    for (let i = 0; i < textCountry.length; i++) {
        textCountry[i].style.color = "#E6E5EA";
    }

    const radioCountryTick = document.querySelectorAll(
        ".aomaEc.N2RpBe:not(.RDPZE) .Id5V1, .aomaEc .nQOrEb"
    );
    for (let i = 0; i < radioCountryTick.length; i++) {
        radioCountryTick[i].style.borderColor = "#A4FFAF";
    }

    const textRestaurant = document.querySelectorAll(".n5vBHf");
    for (let i = 0; i < textRestaurant.length; i++) {
        textRestaurant[i].style.color = "#E6E5EA";
    }

    const checkBox = document.querySelectorAll(".uHMk6b");
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].style.border = "none";
    }

    const textDate = document.querySelector(".hatWr .zHQkBf");
    textDate.style.color = "#E6E5EA";

    const textDateTiny = document.querySelector(".ds3H7c");
    textDateTiny.style.color = "#FCFCFC";

    const dropDown = document.querySelectorAll(".MocG8c");
    for (let i = 0; i < dropDown.length; i++) {
        dropDown[i].style.color = "#888888";
    }
    const dropDownBorder = document.querySelector(".vQES8d .cGN2le");
    dropDownBorder.style.border = "1px solid #ffffff1f";

    const dropDownBack = document.querySelector(".ncFHed");
    dropDownBack.style.backgroundColor = "#18171f";

    const radioCountry = document.querySelectorAll(".AB7Lab");
    for (let i = 0; i < radioCountry.length; i++) {
        radioCountry[i].style.borderColor = "#E6E5EA";
    }
    const bottomLine = document.querySelectorAll(".i9lrp");
    for (let i = 0; i < bottomLine.length; i++) {
        bottomLine[i].style.backgroundColor = "#ffffff1f";
    }
    const inputBottomLine = document.querySelector(".SPcBRc");
    inputBottomLine.style.backgroundColor = "#ffffff1f";

    const submitBtn = document.querySelector(".Y5sE8d");
    submitBtn.style.color = "#222222";
    submitBtn.style.backgroundColor = "#A4FFAF";

    const neverSubmit = document.querySelector(".T2dutf");
    neverSubmit.style.color = "#E6E5EA";

    const reportPara = document.querySelector(".sId0Ce");
    reportPara.style.color = "#E6E5EA";
    const reportParaAnchor = document.querySelector(".sId0Ce a");
    reportParaAnchor.style.color = "#E6E5EA";
    const formsIcon = document.querySelector(".sUXvCd");
    formsIcon.style.color = "#E6E5EA";

    const googleIcon = document.querySelector(".I3zNcc img");
    googleIcon.style.filter = "invert(85%)";

    const inputColor = document.querySelectorAll(
        ".RdH0ib .zHQkBf, .RdH0ib .tL9Q4c"
    );
    for (let i = 0; i < inputColor.length; i++) {
        inputColor[i].style.color = "#E6E5EA";
    }

    const remarksBottomLine = document.querySelector(".z0oSpf");
    remarksBottomLine.style.backgroundColor = "#ffffff1f";

    const clearFormLast = document.querySelector(".TFBnVe");
    clearFormLast.style.color = "#bdffc5";

    // const checkboxTicked = document.querySelectorAll(
    //     ".wGQFbe.N2RpBe:not(.RDPZE), .wGQFbe.B6Vhqe:not(.RDPZE)"
    // );
    // checkboxTicked.forEach((element) => {
    //     element.style.borderColor = "#A4FFAF";
    // });
    setTimeout(() => {
        cb();
    }, 200);
};

// SETTING INDEX OF ARRAY
var getCountFromLocal = localStorage.getItem("index");
if (getCountFromLocal) {
    var counter = JSON.parse(getCountFromLocal);
} else {
    var counter = 0;
}

// SETTING CASE NUMBERS
var getcaseNumArrFromLocal = localStorage.getItem("caseNumbers");
var caseNumArr;
if (getcaseNumArrFromLocal) {
    caseNumArr = JSON.parse(getcaseNumArrFromLocal);
} else {
    var caseNum = prompt("Enter Case Numbers...");
    caseNumArr = caseNum ? caseNum.split("\n").map(Number) : [];
}

// // SETTING AGENT NAME
// const getagentFromLocal = localStorage.getItem("agent");
// let agent;
// if (getagentFromLocal) {
//     agent = JSON.parse(getagentFromLocal);
// } else {
//     agent = prompt("Enter agent name");
//     if (agent) {
//         agent = agent.toLowerCase();
//     }
// }

// SETTING COUNTRY
var getCountryFromLocal = localStorage.getItem("country");
var country;

if (getCountryFromLocal) {
    country = JSON.parse(getCountryFromLocal);
} else {
    country = prompt("Enter Country e.g TH");
    if (country) {
        country = country.toLowerCase();
    }
}

// SETTING TYPE
var getTypeFromLocal = localStorage.getItem("type");
var type;
if (getTypeFromLocal) {
    type = JSON.parse(getTypeFromLocal);
} else {
    type = prompt("Restaurant or Shop");
    if (type) {
        type = type.toLowerCase();
    }
}

// SETTING DLP ONBOARDING VALUE
var getdlpOnboardingFromLocal = localStorage.getItem("dlpOnboarding");
var dlpOnboarding;
if (getdlpOnboardingFromLocal) {
    dlpOnboarding = JSON.parse(getdlpOnboardingFromLocal);
} else {
    var dlpOnboarding = prompt("DLP Onboarding ('Yes' or 'No')");
    if (dlpOnboarding) {
        dlpOnboarding = dlpOnboarding.toLowerCase();
    }
}

// SETTING MISSING HL VALUE
var getmissingHLFromLocal = localStorage.getItem("missingHL");
var missingHL;
if (getmissingHLFromLocal) {
    missingHL = JSON.parse(getmissingHLFromLocal);
} else {
    var missingHL = prompt("Missing HL ('Yes' or 'No')");
    if (missingHL) {
        missingHL = missingHL.toLowerCase();
    }
}

// SETTING REMARKS
var getremarksFromLocal = localStorage.getItem("remarks");
var remarks;
if (getremarksFromLocal) {
    remarks = JSON.parse(getremarksFromLocal);
} else {
    remarks = prompt("Enter remarks else hit 'OK'");
    if (remarks) {
        remarks = remarks.toLowerCase();
    }
}

const saveOnLocal = (key, item) => {
    var stringify = JSON.stringify(item);
    localStorage.setItem(key, stringify);
};

const removeLocalItems = () => {
    localStorage.removeItem("index");
    // localStorage.removeItem("agent");
    localStorage.removeItem("country");
    localStorage.removeItem("caseNumbers");
    localStorage.removeItem("type");
    localStorage.removeItem("dlpOnboarding");
    localStorage.removeItem("missingHL");
    localStorage.removeItem("remarks");
};

const formFill = () => {
    // DATE
    const dateElement = document.querySelector(".whsOnd.zHQkBf");
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    // Dispatching an input event
    const inputEvent = new Event("input", { bubbles: true });
    const propertyDescriptor = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
    );

    // Modifying the value property
    propertyDescriptor.set.call(dateElement, formattedDate);
    dateElement.dispatchEvent(inputEvent);

    // COUNTRY
    switch (country) {
        case "th":
            document.querySelector("#i14").click();
            break;
        case "my":
            document.querySelector("#i17").click();
            break;
        case "kh":
            document.querySelector("#i20").click();
            break;
        case "la":
            document.querySelector("#i23").click();
            break;
        case "mm":
            document.querySelector("#i26").click();
            break;
        default:
            removeLocalItems();
            break;
    }

    // TYPE
    switch (type) {
        case "restaurant":
            document.querySelector("#i37").click();
            break;
        case "shop":
            document.querySelector("#i40").click();
            break;
        default:
            removeLocalItems();
            break;
    }

    // Case Number
    const inputElement = document.querySelector(
        ".rFrNMe.k3kHxc.RdH0ib.yqQS1.zKHdkd input.whsOnd.zHQkBf"
    );
    if (caseNumArr) {
        inputElement.value = caseNumArr[counter];
        inputElement.dispatchEvent(new Event("input", { bubbles: true }));
        inputElement.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
        removeLocalItems();
    }

    // DLP ONBOARDING
    switch (dlpOnboarding) {
        case "yes":
            document.querySelector("#i52").click();
            break;
        case "no":
            document.querySelector("#i55").click();
            break;
        default:
            removeLocalItems();
            break;
    }

    // MISSING HL
    switch (missingHL) {
        case "yes":
            document.querySelector("#i63").click();
            break;
        case "no":
            document.querySelector("#i66").click();
            break;
        default:
            removeLocalItems();
            break;
    }

    // REMARKS
    const textareaElement = document.querySelector(".KHxj8b.tL9Q4c");
    textareaElement.value = remarks;
    textareaElement.dispatchEvent(new Event("input", { bubbles: true }));
    textareaElement.dispatchEvent(new Event("change", { bubbles: true }));

    // SUBMIT
    var submitButton = document.querySelector(
        "div.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd > span.l4V7wb.Fxmcue > span.NPEfkd.RveJvd.snByac"
    );
    submitButton.click();

    // INCREMENT IN COUNTER
    counter += 1;
    dateElement.focus();

    // SAVE VALUES TO LOCAL
    saveOnLocal("index", counter);
    // saveOnLocal("agent", agent);
    saveOnLocal("country", country);
    saveOnLocal("caseNumbers", caseNumArr);
    saveOnLocal("type", type);
    saveOnLocal("dlpOnboarding", dlpOnboarding);
    saveOnLocal("missingHL", missingHL);
    saveOnLocal("remarks", remarks);
};

if (document.querySelector(".c2gzEf")) {
    document.querySelector(".c2gzEf a").click();
} else if (counter < caseNumArr.length) {
    theme(formFill);
} else {
    removeLocalItems();
}
