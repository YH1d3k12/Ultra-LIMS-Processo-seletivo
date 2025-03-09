const path = require("path");
const fs = require("fs/promises");
const Requester = require("../utils/requester");

const FILE_PATH = path.join(__dirname, "../data/address.json");
const BASE_URL = "https://viacep.com.br/ws/";

class AddressService {
    async ListAddresses(orderBy = null, order = 'asc') {
        try {
            const data = await fs.readFile(FILE_PATH, "utf8");
            let addresses = JSON.parse(data);

            if (
                orderBy !== '' &&
                orderBy !== undefined &&
                orderBy !== null
            ) {
                order === 'asc' ?
                    addresses.sort((a, b) => a[orderBy].localeCompare(b[orderBy])) :
                    addresses.sort((a, b) => b[orderBy].localeCompare(a[orderBy]));
            }

            return addresses;
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            }
            throw new Error(`Erro ao ler arquivo: ${error.message}`);
        }
    }

    async SaveAddresses(addresses) {
        await fs.writeFile(FILE_PATH, JSON.stringify(addresses, null, 2));
    };

    async GetAddress(cep) {
        try {
            console.log(cep)
            const data = await Requester('get', BASE_URL, cep + "/json", null, res => res.data);
            if (!data.cep || data.cep === "") {
                throw new Error("CEP não encontrado");
            }

            const address = {
                cep: data.cep,
                logradouro: data.logradouro,
                complemento: data.complemento,
                unidade: data.unidade,
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf,
                estado: data.estado,
                regiao: data.regiao,
                ibge: data.ibge,
                gia: data.gia,
                ddd: data.ddd
            };

            let addresses = await this.ListAddresses();

            if (!addresses.find((e) => e.cep === address.cep)) {
                addresses.push(address);
                await this.SaveAddresses(addresses);
            }

            return address;
        } catch (error) {
            throw new Error(error.message);
        }
    };
}

module.exports = AddressService;
