function cracker(arr) {
    let temp = 0;
    for (let j = 1; j <= arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            console.log(arr + " " + j);
            temp = arr[i]; arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            console.log(arr + " " + j)
        }
    }
}

cracker([1, 2, 3, 4, 5]);