import { Formik, Form, Field, ErrorMessage } from "formik";
const validate = (values) => {
  const errors ={}

  if(!values.name){
    errors.name = 'Requerido'
  } else if( values.name.length < 5){
    errors.name = 'El nombre es muy corto'
  }
  if(!values.lastname){
    errors.lastname = 'Requerido'
  } else if( values.lastname.length < 5){
    errors.lastname = 'El Apellido es muy corto'
  }
  if(!values.email){
    errors.email = 'Requerido'
  } else if( values.email.length < 5){
    errors.email = 'El email es muy corto'
  }
  return errors
}

function App() {
  
  return (
    <Formik
      initialValues={{name:'', lastname:'',email:''}}
      validate={validate}
      onSubmit ={values=> console.log(values)}>
      
        <Form>
          <label>Nombre:</label>
          <Field name='name' type='text'/>     
          <ErrorMessage name='name'/>
          <br/>
          <label>Apellido:</label>
          <Field name='lastname' type='text'/>     
          <ErrorMessage name='lastname'/>
          <br/>
          <label>Correo:</label>
          <Field name='email' type='email'/>     
          <ErrorMessage name='email'/>
          <br/>
          <label>Chancho:</label>
          <Field name='select' as='select'>   
            <option value='chanchito feliz'> Feliz</option>
            <option value='chanchito triste'> Triste</option>
          </Field>  
          
          <br/>
          <button type='submit'>Enviar</button>
         </Form> 
     
    </Formik>
  );
}

export default App;
