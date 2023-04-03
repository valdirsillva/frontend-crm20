import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Link } from "react-router-dom";

import "./modal-replicate.css"

export default function ReplicateModal(props) {
    const [visible, setVisible] = useState(false);

    console.log(props)

    return (
        <div className="card flex justify-content-center">
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Link label="Show" onClick={() => setVisible(true)} >
                Replicar
            </Link>

            <Dialog header="Deseja replicar essa estratégia?" visible={visible} style={{ width: '40vw' }} onHide={() => setVisible(false)}>
               <div className="box">
                    <div className="col-md-12 col-xs-12 select-item ">
                        <label htmlFor="estragegia" className="form-label">Nome da estratégia</label>
                        <input type="text" name="" id="estragegia" className="form-control" />
                    </div>
                    {/* <div className="col-md-6 col-xs-12 select-item ">
                        <label htmlFor="unidade"  className="form-label">Unidade</label>
                        <input type="text" name="" id="unidade" className="form-control" />
                    </div> */}
               </div>

               <div className="box">
                    <div className="col-md-6 col-xs-12 select-item ">
                        <label htmlFor="estragegia" className="form-label">Solicitante</label>
                        <input type="text" name="" id="estragegia" value="Jhon Doe" className="form-control" disabled/>
                    </div>
                    <div className="col-md-6 col-xs-12 select-item ">
                        <label htmlFor="unidade"  className="form-label">Unidade</label>
                        <input type="text" name="" id="unidade" value="São Paulo" className="form-control" disabled/>
                    </div>
               </div>
               <br/>
               <input type="submit" value="Salvar" className="gmvb-button-azul" />
            </Dialog>
        </div>
    )
}