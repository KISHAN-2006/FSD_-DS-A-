// function sum(a, b) {
//     return a + b;
// }

// function sumWithMsg(clbk, msg) {
//     const result = clbk(20, 30);

//     const fresult = "HI " + msg + ", your score is: " + result;

//     console.log(fresult);
// }

// sumWithMsg(sum, "MR. Deepak");
 


function identity(user, pass) {
    if (user === "kishan" && pass === 1234) {
        return true;
    }
    return false;
}

function check(clbk, msg) {
    const result = clbk("kishan", 1234);

    if (result === true) {
        const fresult = "HI " + msg + ", your identity is: " + result;
        console.log(fresult);
    } else {
        console.log("Identity verification failed");
    }
}

check(identity, "MR. Deepak");