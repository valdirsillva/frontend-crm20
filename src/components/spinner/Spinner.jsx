import React, { useEffect, useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Rings } from  'react-loader-spinner'
export default function Spinner() {
  const [visible, setVisible] = useState(true)
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState("#0a0082")
   return (
        <>
          <div className="flex justify-content-center align-content-center">
            <Dialog 
                visible={visible} 
                style={{ width: '30vw' }} 
                onHide={() => setVisible(false)}
            >
                  <Rings
                    height="150"
                    width="150"
                    color="#6bb618"
                    radius="6"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="rings-loading"
                  />
                <span className="flex justify-content-center">Carregando...</span>
            </Dialog>
        </div>
      </>
   )
}