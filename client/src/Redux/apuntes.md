                    R E D U C E R

- UN NUEVO ESTADO ES CREADO, EN BASE A LA COMBINACIÓN DEL VIEJO ESTADO Y UNA ACCION, Y TODO ESE FLUJO SE HACE A TRAVES DE UNA FUNCIÓN LLAMADA REDUCER
- EL STORE ES EL QUE TIENE LA INFO DE MI APP Y JAMAS SE MODIFICA DE FORMA DIRECTA
- INTERACCIONES DE USUARIO Y/O CODIGO DISPARAN ACCIONES QUE DESCRIBEN QUE SUCEDIO
- EL VALOR ACTUAL DE LA INFO SE DENOMINA STATE Y ES UN OBJETO

0. EL ESTADO ACTUAL DE LA APLICACIÓN:
{
    visibilityFilter: 'MOSTRAR TODOS',
    todos:[{
        text:'salvas el mundo',
        completed: true
    },
    {
        text:'salvas el perro',
        completed: false
    }]
}
EL STATE
* ES DE SOLO LECTURA, NUNCA SE MODIFICARÁ DE FORMA DIRECTA. EL ESTADO ES INMUTABLE, SOLO CREAMOS NUEVOS ESTADOS

1. ACCIONES:
* LA ACCION ES LA QUE VA A DESCRIBIR QUE ES LO QUE VA A SUCEDER, PERO LA ACCIÓN NO DISPARA EL EVENTO
* UNA ACCION TIENE 2 PROPIEDADES, EL TYPE Y EL PAYLOAD. EL TYPE: QUE ES LO QUE QUIERE HACER, O CUAL ES LA ACCION QUE DEBE REALIZAR. 
EL PAYLOAD: ES OPCIONAL, ES DONDE MANDO LA INFO  
* LAS ACCIONES DEBEN SER LO MAS SIMPLE, NO TIENEN QUE TENER MUCHA LOGICA
* ES UN OBJETO PLANO QUE INDICA QUE HAY QUE HACER 
{
    type: COMPLETAR_TAREA,
    index: 1,

}

2. FUNCIONES REDUCER:
* ES UNA FUNCION QUE RECIBE DOS ARGUMENTOS, LA ACCION Y EL STATE ACTUAL, SE LOS VOY A PASAR A UNA FUNCIÓN REDUCER, Y VA A PRODUCIR UN NUEVO ESTADO

3. STORE:
* CONTIENE EL ESTADO ACTUAL DE LA APLICACION
* PERMITE LA LECTURA DEL ESTADO VIA getState() 
* PERMITE CREAR UN NUEVO ESTADO CUANDO LLAMAMOS LA FUNCION: dispatch(ACTION) y le mandamos una acion
* PERMITE NOTIFICAR CAMBIOS DE STATE CON EL: subscribe()

        R E A C T 
* EL RESULTADO DE LO Q HACE REACT ES MOSTRAR HTML EN EL DOM, DIBUJAR EL DOM
* ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>              
    <App />                       LE PASAMOS UNA APP QUE ES UN CONJUNTO DE ELEMENTOS, QUE SON FUNCIONES Y REACT SE ENCARGA DE EJECUTARLOS
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')  REACT SE VA A ENCARGAR DE HACER EL RENDER EN EL DOM
);

¿COMO HACEMOS QUE REACT MUESTRE MAS QUE SOLO HTML?
SE LLAMA A USE EFFECT PARA QUE QUE PUEDA HACERLO
EFECTO PRIMARIO ----> RENDER
EFECTO SEFUNCDARIO (USE EFFECTS) ----> USE EFFECT SE EJECUTA EN LA APP Y PUEDE ESTAR INTEGRADO EN CADA UNO DE LOS COMPONENTES, CREAN UN PUENTE ENTRE REACT 
                                       Y EL NAVEGADOR
USE EFFECTS SIEMPRE RECIBE COMO ARGUMENTO UNA FUNCION. SE EJECUTA CADA VEZ QUE EL COMPONENTE SE RENDERIZA, OSEA CUANDO EL ESTADO CAMBIA.
USE EFFECTS SE EJECUTA DESPUES DE QUE REACT RENDERIZA EL DOM

REACT - REDUX

USE EFFECT Y USE STATE: HOOKS
- USE STATE: NOS PERMITE ALMACENAR EL ESTADO
- ¿QUE SON LOS EFECTOS? USE EFFECT
POR CADA ACCIÓN HAY UNA REACCIÓN, ESA REACCIÓN SERIA UN EFECTO. NO TODAS LAS ACCIONES VAN A DISPARAR EFECTOS, SOLO LAS QUE YO QUIERO.
EJ: NOSOTROS TENEMOS UN ACCION Y SABEMOS QUE ESA ACCION MODIFICA EL REDUCER. ESA ACCION PUEDE SER ESCUCHADA POR UN EFECTO, ESE EFECTO VA A REACCIONAR
Y PUEDE DISPARAR UNA NUEVA ACCION O PUEDO CONECTARME A UN SERVICIO DE REACT

        |--------> COMPONENTE ----------|
        |                               |          LOS EFECTOS VIENEN A ESCUCHAR ACCIONES, CUANDO SE DISPARE UNA ACCION PUEDO
        |                               |          CREAR UN EFECTO QUE ESCUCHE ESA DETERMINADA ACCION. ESE EFECTO PUEDE COMUNICARSE CON
        |         STORE                 V          UN SERVICIO, EL SERVICIO SE PUEDE COMUNICAR CON UN SERVIDOR (ej. HTML). CUANDO EL SERVIDOR RESPONDE
      STATE                            ACCION      NOTIFICA AL SERVICIO, EL SERVICIO AL EFECTO Y EL EFECTO DISPARA UNA NUEVA ACCION PARA QUE LLEGUE AL REDUCER
        M                               |          Y EL REDUCER CREA UN NUEVO ESTADO Y ASI.
        |                               |          LAS ACCIONES NO DEBEN HACER PETICIONES ASINCRONAS, SOLO TRABAJAR CON LA INFO QUE TIENEN, ESO SE                 
        |----------- REDUCER <----------|          OCUPA EL EFECTO

- EL PAYLOAD ES EL VALUE DE MI HTML

