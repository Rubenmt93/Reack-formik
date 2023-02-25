import { Formik, Form, Field, ErrorMessage } from "formik"
import CheckBox from "./components/CheckBox"
import TextInput from './components/TextInput'
import Select from './components/Select'
import Radio from "./components/Radio"
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
  if(!values.radio){
    errors.radio = 'Requerido'
  } 
  return errors
}

function App() {
  
  return (
    <Formik
      initialValues={{name:'', lastname:'',email:'',chancho:'', radio:''}}
      validate={validate}
      onSubmit ={values=> console.log(values)}>
      
        <Form>
          <TextInput name='name' label="Nombre:"/>          
          
          <TextInput name='lastname' label="Apellido:"/>          
          
          <TextInput name='email' label="Email:"/>         
         
          <Select label='Tipo de chancho:' name='chancho'>
            <option value=''> Seleccione chancho</option>
            <option value='chanchito feliz'> Feliz</option>
            <option value='chanchito triste'> Triste</option>
          </Select>                 
          <CheckBox name='accept'>
            Aceptar terminos y condiciones
          </CheckBox>
          <Radio name='radio' value='chanchito1' label='chancho1'/>
          <Radio name='radio' value='chanchito2' label='chancho2'/>
          <Radio name='radio' value='chanchito3' label='chancho3'/>
          <ErrorMessage name= 'radio' />
          <button type='submit'>Enviar</button>
         </Form> 
     
    </Formik>
  );
}

export default App;
