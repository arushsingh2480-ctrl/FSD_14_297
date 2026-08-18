const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

const main = () => {
    console.log("Main Start");

    setTimeout(f1, 5000);

    f2();

    console.log("Main End");
};

main();