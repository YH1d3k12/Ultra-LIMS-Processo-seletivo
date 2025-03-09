const AddressService = require('../services/address');
const service = new AddressService();

class AddressController {
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

    async ListAddresses(req, res) {
        try {
            const result = await service.ListAddresses();
            return res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = AddressController;
