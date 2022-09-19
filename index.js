function cracker(num) {
    String.prototype.replaceAt = function (index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
    let posssibleVals = new Set();
    let str = `${num}`;
    posssibleVals.add(str)
    console.log("Posssible combinations :")
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            let arr = str.split("");
            if (str[i] === "1" || str[i] === "4") {
                arr[i] = "2";
                posssibleVals.add(arr.join(""))
                arr[i] = "3";
                posssibleVals.add(arr.join(""))
            }
            else if (str[i] === "2" || str[i] === "3"){
                arr[i] = "1";
                posssibleVals.add(arr.join(""))
                arr[i] = "4";
                posssibleVals.add(arr.join(""))
            }
        }
    }
    posssibleVals.forEach((val) => console.log(val))
}

cracker(123)