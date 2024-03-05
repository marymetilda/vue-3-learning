const a = [5, 6, 7];
const b = [3, 6, 10];

function compareTriplets(a, b) {
    let aliceMarks;
    let bobMarks;
    let totalMarks = [];

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceMarks += 1
        } else if (b[i] > a[i]) {
            bobMarks += 1
        }
    }

    totalMarks[0] = aliceMarks;
    totalMarks[1] = bobMarks;

    return totalMarks;
}

compareTriplets(a, b)