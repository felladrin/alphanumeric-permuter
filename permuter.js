var Permutation = {
    result: [],
    possibilities: 0,

    /**
     * Executes the permutation over a given string.
     * @param {string} str
     */
    execute: function (str) {
        var charactersCount = str.length;
        this.result = [];
        this.possibilities = this.factorial(charactersCount);

        if (charactersCount > 8) {
            alert("Can't permute a " + charactersCount + "-characters string! Your browser would blow up with all the " + this.possibilities + " possible permutations!");
            return;
        }

        var arrayOfChars = str.split('');
        this.permute(arrayOfChars);
        this.printResult();
    },

    /**
     * Permutes a given array of characters and add to the 'result' array.
     * @param {Array} arrayOfChars
     * @param {Array} [permutation]
     */
    permute: function (arrayOfChars, permutation) {
        if (typeof permutation === 'undefined') {
            permutation = [];
        }

        if (arrayOfChars.length == 0) {
            this.result.push(permutation.join(''))
        }
        else {
            for (var i = 0; i < arrayOfChars.length; i++) {
                var permutationCopy = permutation.slice(0);
                permutationCopy.push(arrayOfChars[i]);

                var arrayOfCharsCopy = arrayOfChars.slice(0);
                arrayOfCharsCopy.splice(i, 1);

                this.permute(arrayOfCharsCopy, permutationCopy);
            }
        }
    },

    /**
     * Calculates the factorial of a given number.
     * @param {number} num
     * @returns {number}
     */
    factorial: function (num) {
        var val = 1;
        for (var i = 2; i <= num; i++) {
            val *= i;
        }
        return val;
    },

    /**
     * Prints the result.
     */
    printResult: function () {
        document.getElementById('possibilities').innerHTML = this.possibilities.toString();
        var result = document.getElementById('result');
        result.innerHTML = '';

        this.result.forEach(function (permutation) {
            var li = document.createElement('li');
            li.innerHTML = permutation;
            result.appendChild(li);
        });
    }
};