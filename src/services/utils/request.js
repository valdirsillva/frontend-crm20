import { api } from "../api"
// Retorna unidades
const getUnities = () => {
    try {
        // const response = await api.get('/')
        const response = [
            { "id": 1, "unidade": "CALL CENTER - SEDE 6º" },
            { "id": 2, "unidade": "BLUMENAU"  },
            { "id": 3, "unidade": "BELO HORIZONTE" },
            { "id": 4, "unidade": "PARÁ" }
        ]
        return response;
    } catch (err) {
        console.log(err)
    }
}
// Retorna lista de produtos
const getProducts = () => {
    try {
        // const response = await api.get('/')
        const response = [
            { "id": 1, "produto": "FGTS" },
            { "id": 2, "produto": "CRÉDITO PESSOAL"  },
            { "id": 3, "produto": "CONSIGNADO" },
            { "id": 4, "produto": "CGI" }
        ]
        return response;
    } catch (err) {
        console.log(err)
    }
}

const getClients = () => {
    try {
        // const response = await api.get('/')
        const response = [
            { "id": 1, "cliente": "PÚBLICO" },
            { "id": 2, "cliente": "PRIVADO" },
            { "id": 3, "cliente": "INSS" },
            { "id": 4, "cliente": "SIAPE" }
        ]

        return response;
    } catch (err) {
        console.log(err)
    }
}
// offertas
const getOffer = () => {
    try {
        // const response = await api.get('/')
        const response = [
            { "id": 1, "oferta": "NOVO" },
            { "id": 2, "oferta": "REFINANCIAMENTO" },
            { "id": 3, "oferta": "PORTABILIDADE" },
            { "id": 4, "oferta": "RETENÇÃO" },
            { "id": 5, "oferta": "RECUPERAÇÃO" }
        ]
        return response;
    } catch (err) {
        console.log(err)
    }
}
// Convenios
const getHealthInsurance =  () => {
    try {
        // const response = await api.get('/')
        // return response;

        const response = [
            { "id": 1, "convenio": "CONVÊNIO 1" },
            { "id": 2, "convenio": "CONVÊNIO 2" },
            { "id": 3, "convenio": "CONVÊNIO 3" },
        ]
        return response;
    } catch (err) {
        console.log(err)
    }
}
// estados
const getStates = async () => {
    try {
        const response = await api.get('/')
        return response;
    } catch (err) {
        console.log(err)
    }
}
// bancos
const getBanks = () => {
    try {
        const response = [
            { "id": 1, "banco": "INBUSA" },
            { "id": 2, "banco": "SANTANDER"  },
            { "id": 3, "banco": "BANCO DO BRASIL" },
            { "id": 4, "banco": "C6" },
            { "id": 5, "banco": "BANCO PAN" },
            { "id": 6, "banco": "BRADESCO" },
            { "id": 7, "banco": "SAFRA" }
        ]
        // const response = await api.get('/')
        return response;
    } catch (err) {
        console.log(err)
    }
}
// Retorna os status
const getStatus =  () => {
    try {
        const data = [
            { "id": 1, "status": "Preparação" },
            { "id": 2, "status": "Liberação"  },
            { "id": 3, "status": "Finalizado" },
            { "id": 4, "status": "Não disponivel" }
        ]
        // const response = await api.get('/')
        return data;
    } catch (err) {
        console.log(err)
    }
}

export { 
    getUnities, 
    getProducts, 
    getClients, 
    getOffer, 
    getHealthInsurance, 
    getStates, 
    getBanks, 
    getStatus 
}