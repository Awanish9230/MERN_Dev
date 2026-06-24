// Q1
let M = 35;

switch (true) {
    case M <= 10:
        console.log("E");
        break;
    case M <= 20:
        console.log("D");
        break;
    case M <= 30:
        console.log("C");
        break;
    case M <= 40:
        console.log("B");
        break;
    case M <= 50:
        console.log("A");
        break;
}

// Q2
let ch = "E";

switch (ch) {
    case "P":
    case "p":
        console.log("PrepBytes");
        break;

    case "Z":
    case "z":
        console.log("Zenith");
        break;

    case "E":
    case "e":
        console.log("Expert Coder");
        break;

    case "D":
    case "d":
        console.log("Data Structure");
        break;
}

// Q3
let A1 = 2, B1 = 5, C1 = 4;

if (A1 === B1 && B1 === C1) {
    console.log(-1);
} else if (A1 >= B1 && A1 >= C1) {
    console.log(A1);
} else if (B1 >= A1 && B1 >= C1) {
    console.log(B1);
} else {
    console.log(C1);
}

// Q4
let X = 2, Y = 9, Z = 23;

if ((X > Y && X < Z) || (X < Y && X > Z)) {
    console.log(X);
} else if ((Y > X && Y < Z) || (Y < X && Y > Z)) {
    console.log(Y);
} else {
    console.log(Z);
}

// Q5
let A2 = 60, B2 = 100, C2 = 20;

if (A2 > 90 || B2 > 90 || C2 > 90) {
    console.log("obtuse");
} else {
    console.log("acute");
}