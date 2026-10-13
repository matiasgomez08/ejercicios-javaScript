let Nota = 1;

if (Nota >= 90 && Nota <= 100) {
    console.log("A");
} else if (Nota >= 80 && Nota <= 89) {
    console.log("B");
} else if (Nota >= 70 && Nota <= 79) {
    console.log("C");
} else if (Nota >= 60 && Nota <= 69) {
    console.log("D");
} else if (Nota < 60 && Nota >= 0) {
    console.log("F");
} else {
    console.log("Nota inválida");
}
