console.log("It is live");

function checkType(param) {
    let type = typeof param;
    console.log(type);
    return type;
}

checkType({}); // Object
checkType(true); // boolean
checkType(1); // number
checkType("hello"); // string
checkType(); // undefined
