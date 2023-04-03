import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getTokenLocalStorage } from '../../services/utils/storage'
import Header from '../header/Header'
import * as Icon from 'react-bootstrap-icons';
import "./content.css"
import 
{ 
    getBanks, 
    getClients, 
    getHealthInsurance, 
    getOffer, 
    getProducts, 
    getUnities 
} from '../../services/utils/request';

import DialogMessage from '../dialog/DialogMessage';
import { MultiSelect } from 'primereact/multiselect';

export default function Content() {
    // Retorna o token de autenticação do usuário
    const token = getTokenLocalStorage()

    const [min, setRangeMin] = useState(18)
    const [max, setRangeMax] = useState(90)
    const [maxValue, setMaxValue] = useState(90)

    // unidade
    const [unidades, setUnidades] = useState({})
    const [quandoVaiUsar, setQuandoVaiUsar] = useState('')
    const [tempoUso, setTempoUso] = useState('')
    const [agentes, setAgentes] = useState(0)
    const [itemVenda, setItemVenda] = useState('')
    const [cliente, setCliente] = useState('')

    const [ofertas, setOfertas] = useState(null)
    const [convenios, setConvenios] = useState(null)
    const [estado, setEstado] = useState('')
    const [faixaEtaria, setFaixaEtaria] = useState({ min: 0, max: 0 })
    const [bancos, setBancos] = useState(null)
    const [nomeEstrategia, setNomeEstrategia] = useState('')
    const [selectedCities, setSelectedCities] = useState(null);
    
    // Requisições p/ backend
    const banks = getBanks()
    const products = getProducts()
    const unities = getUnities()
    const clients = getClients()
    const offers = getOffer()
    const healthInsurance = getHealthInsurance()

    const [data, setData] = useState({})
    const rangeMin = (e) => {
        setRangeMin(e.target.value)
        setFaixaEtaria({ min: e.target.value })
    }

    const rangeMax = (e) => {
        setRangeMax(e.target.value)
        setMaxValue(e.target.value)
        setFaixaEtaria({ ...faixaEtaria, max: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(faixaEtaria)
        try {
            const response = {
                unidade: unidades,
                quandoVaiUsar,
                tempoUso,
                agentes,
                itemVenda,
                cliente,
                ofertas,
                convenios,
                estado,
                faixaEtaria,
                bancos,
                nomeEstrategia
            }
            setData(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="col py-3 content-mf-9">
            <Header />          
            <div className="d-flex justify-content-between">
                <h1 className="m-5 content-title">estratégia de vendas</h1>
                <div className='p-left-right-5 d-item-align'>
                    <button className="gmvb-strategy " aria-label="Visualizar">
                        <Link to='/estrategias'>
                            <span className='d-none d-lg-block'>Ver estratégias</span>
                            <span>
                                <Icon.Eye size={30} className="d-lg-none d-md-block" />
                            </span>
                        </Link>
                    </button>
                </div>
            </div>

            <div className="col-lg-13 px-4 layout-desktop layout-mobile">
                <form className="" onSubmit={handleSubmit}>
                    <div className="row m-bottom-5">
                        <div className="col-md-3 col-xs-12 select-item">
                            <label htmlFor="unidade" className="form-label">Qual unidade</label>
                            <div className="card flex justify-content-center">
                                <MultiSelect 
                                    value={selectedCities} 
                                    onChange={(e) => setSelectedCities(e.value)} 
                                    options={unities} 
                                    optionLabel="unidade" 
                                    display="chip"
                                    placeholder="Selecione a unidade" 
                                    maxSelectedLabels={3} 
                                    className="w-full md:w-10rem" 
                                />
                            </div>

                            { selectedCities?.length > 0 ? (
                                selectedCities.map(({id, unidade}) => {
                                    return (
                                        <p className="mt-2 input-item-selected" key={id}>{unidade}</p>
                                    )
                                })
                            ) : ''}
                        </div>

                        <div className="col-md-3 col-xs-12 select-item ">
                            <label htmlFor="quando_vai_usar" className="form-label">Quando vai usar</label>
                            <input type="date" className="form-control" id='quando_vai_usar'
                                onChange={(e) => {
                                    let inputData = e.target.value;
                                    let data = new Date(inputData)
                                    setQuandoVaiUsar(data.toLocaleDateString('pt-BR', { timeZone: 'UTC' }))
                                }} />
                            <p className='mt-2 mb-0 input-item-selected'>{quandoVaiUsar.toLocaleString("pt-br")}</p>
                        </div>

                        <div className="col-md-3 col-xs-12 select-item">
                            <label htmlFor="tempo" className="form-label">Por quanto tempo</label>
                            <select className="form-control" id='tempo' onChange={(e) => setTempoUso(e.target.value)}>
                                <option className="form-option-b" value="1 semana">1 SEMANA</option>
                                <option className="form-option-b" value="2 semana">2 SEMANAS</option>
                                <option className="form-option-b" value="3 semana">3 SEMANAS</option>
                            </select>
                            <p className='mt-2 mb-1 input-item-selected'>{tempoUso}</p>
                        </div>

                        <div className="col-md-3 select-item">
                            <label htmlFor="agentes" className="form-label">Com quantos agentes</label>
                            <select className="form-control" id='agentes' onChange={(e) => setAgentes(e.target.value)}>
                                <option className="form-option-b" value="1">1</option>
                                <option className="form-option-b" value="2">2</option>
                                <option className="form-option-b" value="3">3</option>
                                <option className="form-option-b" value="4">4</option>
                                <option className="form-option-b" value="5">5</option>
                                <option className="form-option-b" value="6">6</option>
                                <option className="form-option-b" value="7">7</option>
                                <option className="form-option-b" value="8">8</option>
                                <option className="form-option-b" value="9">9</option>
                                <option className="form-option-b" value="10">10</option>
                                <option className="form-option-b" value="11">11</option>
                                <option className="form-option-b" value="12">12</option>
                                <option className="form-option-b" value="13">13</option>
                                <option className="form-option-b" value="12">12</option>
                                <option className="form-option-b" value="13">13</option>
                                <option className="form-option-b" value="14">14</option>
                                <option className="form-option-b" value="15">15</option>
                            </select>
                            <p className='mt-2 mb-0 input-item-selected'>{agentes ? `${agentes} agentes` : ''}</p>
                            <small className='text-muted ml-5'>
                                {agentes > 15 ? 'Quantidade máxima de agentes é 15' : ''}
                            </small>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-2 col-xs-12 select-item">
                            <label htmlFor="produto" className="form-label">O que quer vender</label>
                            <select className="form-control" id='produto' onChange={(e) => setItemVenda(e.target.value)}>
                                {products.map(({ id, produto }) => {
                                    return (
                                        <option
                                            className="form-option-b"
                                            key={id}
                                            value={produto}>{produto}
                                        </option>
                                    )
                                })}
                            </select>

                            {/* <div className="card flex justify-content-center">
                                <MultiSelect 
                                    value={itemVenda} 
                                    onChange={handleChangeProducts} 
                                    options={products} 
                                    optionLabel="produto" 
                                    display="chip"
                                    placeholder="Selecione um produto" 
                                    maxSelectedLabels={3} 
                                    className="w-full md:w-10rem" 
                                />
                            </div> */}

                            <p className='mt-2 input-item-selected'>{itemVenda}</p>
                        </div>

                        <div className="col-md-3 col-xs-12 select-item">
                            <label htmlFor="oferta" className="form-label">Qual será a oferta</label>
                            <div className="card flex justify-content-center">
                                <MultiSelect 
                                    value={ofertas} 
                                    onChange={(e) => setOfertas(e.value)} 
                                    options={offers} 
                                    optionLabel="oferta" 
                                    display="chip"
                                    placeholder="Selecione qual oferta" 
                                    maxSelectedLabels={3} 
                                    className="w-full md:w-10rem" 
                                />
                           </div>

                            {ofertas?.length > 0 ? (
                                ofertas.map(({id, oferta}) => {
                                    return (
                                        <p className="mt-2 input-item-selected" key={id}>{oferta}</p>
                                    )
                                })
                            ) : ''}

                        </div>

                        
                        <div className='col-md-2 select-item'>
                          <label htmlFor="para_quem" className="form-label">Para quem</label>
                            <select className="form-control" id='para_quem' onChange={(e) => setCliente(e.target.value)}>
                                {clients.map(({ id, cliente }) => {
                                    return (
                                        <option
                                            className="form-option-b"
                                            value={cliente} key={id}>
                                            {cliente}
                                        </option>
                                    )
                                })}
                            </select>
                            <p className='mt-1 mb-0 input-item-selected'>{cliente}</p>
                        </div>

                        <div className="col-md-3 col-xs-12 select-item">
                            <label htmlFor="convenio" className="form-label">Qual convênio</label>
                            <div className="card flex justify-content-center">
                                <MultiSelect 
                                    value={convenios} 
                                    onChange={(e) => setConvenios(e.value)} 
                                    options={healthInsurance}
                                    // optionLabel nome da chave do obj 
                                    optionLabel="convenio" 
                                    display="chip"
                                    placeholder="Selecione um convênio" 
                                    maxSelectedLabels={3} 
                                    className="w-full md:w-10rem" 
                                />
                           </div>
                        </div>

                        <div className="col-md-2 select-item">
                            <label htmlFor="estado" className="form-label">Qual estado</label>
                            <select className="form-control" id='estado' onChange={(e) => setEstado(e.target.value)}>
                                <option className="form-option-b" value="SP">SP</option>
                                <option className="form-option-b" value="RJ">RJ</option>
                                <option className="form-option-b" value="BA">BA</option>
                            </select>
                            <p className='mt-1 mb-0 input-item-selected'>{estado}</p>
                        </div>

                    </div>

                    <div className="row m-top-5" >
                        <div className="col-md-3 select-item">
                            <label htmlFor="banco" className="form-label">Qual banco</label>
                            <div className="card flex justify-content-center">
                                <MultiSelect 
                                    value={bancos} 
                                    onChange={(e) => setBancos(e.value)} 
                                    options={banks}
                                    optionLabel="banco" 
                                    display="chip"
                                    placeholder="Selecione qual banco" 
                                    maxSelectedLabels={3} 
                                    className="w-full md:w-10rem" 
                                />
                           </div>

                            {bancos?.length > 0 ? (
                                bancos.map(({id, banco}) => {
                                    return (
                                        <p className="mt-2 input-item-selected" key={id}>{banco}</p>
                                    )
                                })
                            ) : ''}
                        </div>

                        <div className="col-md-6 select-item">
                                <label htmlFor="idade" className="form-label">Qual idade</label>
                            <div className='rangers'>
                                <div className='input-range'>
                                    <span>Min</span>
                                    <input
                                        type="range" name="" id="min"
                                        min="18"
                                        max="45"
                                        value={min}
                                        onChange={rangeMin}
                                    />
                                    <input type="text" value={min} />
                                </div>
                                <div className='input-range'>
                                    <span>Max</span>
                                    <input
                                        type="range" name="" id="max"
                                        min="46"
                                        max="90"
                                        value={max}
                                        onChange={rangeMax}
                                    />
                                    <input type="text" value={max} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 select-item">
                            <label htmlFor="inputState" className="form-label">Qual o nome da estratégia</label>
                            <input type="text" name="" className='form-control' id='inputState' onChange={(e) => setNomeEstrategia(e.target.value)} />
                            <p className='mt-1 input-item-selected'>{nomeEstrategia}</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="d-flex justify-content-end">
                            <button
                                type="submit"
                                className="btn btn-lg btn-gmvb-secondary"
                            >Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >

    )
}