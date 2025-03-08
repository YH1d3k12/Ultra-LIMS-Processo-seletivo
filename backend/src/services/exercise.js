class ExerciseService {
    // 1) Sequência de Fibonacci.
    Fibonnaci(length = 6) {
        let sequence = [];
        let firstNumber = 0;
        let secondNumber = 1;

        for (let i = 0; i < length; i++) {
            sequence.push(firstNumber);
            [firstNumber, secondNumber] = [secondNumber, firstNumber + secondNumber];
        }

        return sequence;
    }

    // 2) Implementação de Algoritmo de Busca Binária.
    BinarySearch(numbers = [5, 12, 18, 23, 45, 70, 89], target = 23) {
        let start = 0;
        let end = numbers.length - 1;

        const Find = (start, end, numbers, target) => {
            if (start > end) return -1;

            let mid = Math.floor((start + end) / 2);

            if (numbers[mid] === target) return mid;
            if (numbers[mid] > target) return Find(start, mid - 1, numbers, target);
            if (numbers[mid] < target) return Find(mid + 1, end, numbers, target);
        }

        return Find(start, end, numbers, target);
    }

    // 3) Cálculo de Números Perfeitos.
    PerfectNumbers() {
        return "PerfectNumbers";
    }

    // 4) Substring Palindrômica Mais Longa.
    PalindromicSubstring() {
        return "PalindromicSubstring";
    }

    // 5) Simulação de Saque em Caixa Eletrônico.
    GiveMeMoney() {
        return "GiveMeMoney";
    }
}

module.exports = ExerciseService;
