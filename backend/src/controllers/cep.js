const CepService = require('../services/cep');
const service = new CepService();

class CepController {
    async GetAddress(req, res) {
        try {
            const result = await service.GetAddress(
                req.params.cep
            );
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    ListAddresses(req, res) {
        try {
            const result = service.ListAddresses();
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = CepController;
