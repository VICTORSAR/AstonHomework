function pattern (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            row +=j;
        }
        result.push(row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            row += j;
        }
        result.push(row);
    }

    console.log(result.join("\n"));
}

pattern(3);
pattern(5);
pattern(7);
pattern(10);