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
    BinarySearch() {
        return "BinarySearch";
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
