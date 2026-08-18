function main() {
    console.log("Main Start");

    f1();

    console.log("Main End");
}

function f1() {
    console.log("f1 Start");

    f2();

    console.log("f1 Running");

    console.log("f1 End");
}

function f2() {
    console.log("f2 Start");

    f3();

    console.log("f2 Running");

    console.log("f2 End");
}

function f3() {
    console.log("f3 Start");

    console.log("f3 Running");

    console.log("f3 End");
}

// Program starts here
main();