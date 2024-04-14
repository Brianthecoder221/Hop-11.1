/*
Use this file to write your JavaScript code.
Delete this comment when you start writing your code.
 */
function startCode() {
    try {document.querySelector(".welcome-msg").style.display = "none";}
    finally {
        try {
            let variable = 5;
            console.log(variable);
            variable += 5;
            console.log(variable);
            const add_this = 2;

            function incrementNumber(inital, incrementor) {
                return inital + incrementor;
            }

            console.log(incrementNumber(variable, add_this));
        } catch (e) {
            console.error(e)
        }
    }
}

let index = 1;

function stepCode() {
    try {document.querySelector(".welcome-msg").style.display = "none";}
    finally {
        if (index === 1) {console.log(5); index++;}
        else if (index === 2) {console.log(10); index++;}
        else if (index === 3) {console.log(2+10); index++;}
        else {console.info("Code execution completed. Clear the console to rerun.")}
    }
}