const ExerciseService = require('../services/exercise.js');
const service = new ExerciseService();

class ExerciseController {
    // 1) Sequência de Fibonacci.
    Fibonnaci(req, res) {
        try {
            const result = service.Fibonnaci(
                req.body.length
            );
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // 2) Implementação de Algoritmo de Busca Binária.
    BinarySearch(req, res) {
        try {
            const result = service.BinarySearch();
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // 3) Cálculo de Números Perfeitos.
    PerfectNumbers(req, res) {
        try {
            const result = service.PerfectNumbers();
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // 4) Substring Palindrômica Mais Longa.
    PalindromicSubstring(req, res) {
        try {
            const result = service.PalindromicSubstring();
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // 5) Simulação de Saque em Caixa Eletrônico.
    GiveMeMoney(req, res) {
        try {
            const result = service.GiveMeMoney();
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = ExerciseController;
