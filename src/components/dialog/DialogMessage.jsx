import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function DialogMessage() {
  const [visible, setVisible] = useState(true)

  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState("#0a0082")

  return (
    <>
      <div className="flex justify-content-center">
        <Dialog visible={visible} maximizable style={{ width: '30vw' }} onHide={() => setVisible(false)}>
              <ClipLoader
                color="#0a0082"
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            <span className="flex justify-content-center">Carregando...</span>
        </Dialog>
     </div>
   </>
  )
}   