import React, { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { getStatus } from "../../services/utils/request"

import "./table.css"
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { mockData } from './mock-data';
import Header from '../header/Header';
import { getTokenLocalStorage } from '../../services/utils/storage';
import DialogMessage from '../dialog/DialogMessage';

export default function Table() {
    const [tableData, setTableData] = useState('')

    const [filterData, setFilterData] = useState('')
    const [filterSolicitante, setFilterSolicitante] = useState('')
    const [filterEstrategia, setFilterEstrategia] = useState('')
    const [filterStatus, setFilterStatus] = useState('')

    const [data, setData] = useState('')
    const [estrategia, setEstrategia] = useState('')
    const [solicitante, setSolicitante] = useState('')
    const [status, setStatus] = useState('')

    const [loading, setLoading] = useState(false)

    const token = getTokenLocalStorage()
    // console.log(token)

    // Requisita valores baseados nos filtros selecionados
    const filterDataItems = () => {
        const filters = {
            data: filterData, 
            estrategia: filterEstrategia, 
            solicitante: filterSolicitante, 
            status: filterStatus
        }
        // const data = await api.get(`/filter=${filters}`)

        let response = mockData.filter(({ data, nome_estrategia, solicitante, status }) => 
            data === filters.data 
            || nome_estrategia === filters.estrategia 
            || solicitante === filters.solicitante 
            || status === filters.status
        )

        if ( response.length > 0 ) {
            setLoading(true)
            setTimeout(() => {
                setTableData(response)
                setLoading(false)
            }, 2000)
        } 
        // console.log(rows)
        console.log({ filters })
    }

    // Replicar uma estratégia
    const duplicateRules = () => { }

    const items = getStatus()
    const handleContentStatus = (e) => {
        alert(e.target.value)
    }

    useEffect(() => {
        // Mock data
        const values = mockData

        setTableData(values)
    }, [])

    const contentStatus = () => {
        return (
            <React.Fragment>
                <select name="status_estrategia" className="rs-input" onChange={handleContentStatus}>
                    <option>Status da estratégia</option>
                    {items.map(value => {
                        return (
                            <option value={value.status} key={value.id}>{value.status}</option>
                        )
                    })}
                </select>
            </React.Fragment>
        );
    };

    const contentAction = () => {
        return (
            <React.Fragment>
               <a href='#' className='btn-gmvb-primary ' onClick={replicate}>
                    Replicar
               </a>
            </React.Fragment>
        );
    }

    const replicate = () => {
        
    }

    return (
        <div className="col py-3 mf-9">
            <Header />
            
            {loading ? <DialogMessage /> : ''}
           
            <div className="d-flex justify-content-between">
                <h1 className="m-5 content-title">Estratégias anteriores</h1>
                <div className='ml-5 p-xs p-md-6'>
                    <button className="gmvb-strategy ">
                        <Link to='/nova-estrategia'>
                            <span className='d-none d-lg-block'> Nova estratégia</span>
                            <span>
                                <Icon.Plus size={48} className="d-lg-none d-md-block " />
                            </span>
                        </Link>
                    </button>
                </div>
            </div>

            <div className="col px-5 px-xs-0">
                <div className="row mb-2">
                    <div className="col-md-2 mb-2">
                        <label htmlFor="data_inicio">Data início</label>
                        <input
                            type="date"
                            className="form-control"
                            id="data"
                            onChange={(e) => {
                                let input = e.target.value
                                let currData = new Date(input)
                                setFilterData(currData.toLocaleDateString('pt-BR', { timeZone: 'UTC' }))
                            }}
                        />
                    </div>

                    <div className="col-md-2 mb-2">
                      <label htmlFor="data_inicio">Data fim</label>
                        <input
                            type="date"
                            className="form-control"
                            id="data"
                            onChange={(e) => {
                                let input = e.target.value
                                let currData = new Date(input)
                                setFilterData(currData.toLocaleDateString('pt-BR', { timeZone: 'UTC' }))
                            }}
                        />
                    </div>

                    <div className="col-md-2 mb-2">
                        <label htmlFor="estrategia"></label>
                        <select name='' className="form-control" onChange={(e) => setFilterEstrategia(e.target.value)}>
                            <option value="estategia 1">Estrategia 1</option>
                        </select>
                    </div>

                    <div className="col-md-2 mb-2">
                        <label htmlFor="data_inicio"></label>
                        <select className="form-control" onChange={(e) => setFilterStatus(e.target.value)}>
                            <option>Filtrar por status</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    {/* <div className="col-md-2 mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="solicitante"
                            placeholder="Filtrar por solicitante"
                            onChange={(e) => setFilterSolicitante(e.target.value)}
                        />
                    </div> */}
                    
                    <div className="col-md-2 mb-3">
                        <button
                            type="submit"
                            onClick={filterDataItems}
                            className="gmvb-button-azul d-none d-lg-block d-md-block"
                        >
                            Pesquisar
                        </button>

                        <button type='button' className='gmvb-strategy d-lg-none d-md-none'>
                            <Icon.Search size={28} className="d-lg-none d-md-none" />
                        </button>
                    </div>
                </div>
            </div>

            <div className='m-5 data-table'>
                <DataTable
                    value={tableData} paginator rows={10} sortOrder={-1}
                    paginatorTemplate="RowsPerPageDropdown PrevPageLink CurrentPageReport NextPageLink "
                    rowsPerPageOptions={[10, 25, 50, 100]} tableStyle={{ width: '100%' }}
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >

                    <Column field="data" sortable header="DATA"></Column>
                    <Column field="hora" sortable header="HORA"></Column>
                    <Column field="nome_estrategia" sortable header="ESTRATÉGIA"></Column>
                    <Column field="unidade" sortable header="UNIDADE"></Column>
                    <Column field="solicitante" sortable header="SOLICITANTE"></Column>

                    <Column field="status" sortable header="STATUS" 
                        exportable={false}  
                    ></Column>
                   
                    {/* <Column field="previsao" sortable header="PREVISÃO" ></Column> */}
                    <Column field="" sortable body={contentAction}></Column>
                </DataTable>
            </div>
        </div>
    )
}