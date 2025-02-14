// Import Modules
import React, { useState, useEffect } from "react";
import MesaDataService from "../../Services/mesa.service";
import MesaForm from "./MesaForm";

const EditMesa = (props) => {
  const [formValues, setFormValues] = useState({
    cant_mesa_reserva: ""
  });
    
  //onSubmit handler
  const onSubmit = (MesaObject) => {
    MesaDataService
      .update(props.match.params.id, MesaObject )
      .then((res) => {
        if (res.status === 200) {
          alert("Mesa successfully updated");
          props.history.push("/mesa-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize mesa form
  useEffect(() => {
    MesaDataService.get(props.match.params.id)
      .then((res) => {
        const { ambiente,reservaId } = res.data;
        setFormValues({ ambiente,reservaId});
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return mesa form
  return (
    <MesaForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Mesa
    </MesaForm>
  );
};
  
// Export EditMesa Component
export default EditMesa;