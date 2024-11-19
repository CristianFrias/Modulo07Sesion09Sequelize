const conexion = require("./conexion.js");
const Persona = require("./models/Personas.entity.js")

conexion.sync({ alter: true }).then(async() => {
    console.log("Conexión a Base de Datos EXITOSA");
    

    // BUSCAR PERSONAS, DEVUELVE ARREGLO, SI NO CONSIGUE ARREGLO VACÍO
    // const persona = await Persona.findAll();
    // console.log(persona);

    // BUSCAR PERSONAS, DEVUELVE OBJETO, SI NO CONSIGUE ES NULL
    // const persona = await Persona.findByPk(12);
    // console.log(persona);

    // BUSCAR PERSONAS CON FILTROS
    // const persona = await Persona.findAll({
    //     where: {
    //         rut: '16.659.851-6'
    //     }
    // })
    const persona = await Persona.findOne({
        order: [
            ["rut", "DESC"]
        ]
    })
    console.log(persona);
    

    // LISTAR PERSONAS
    // const personas = await Persona.findAll();
    // console.log({personas});
    
    // REGISTRAR PERSONAS
    // await Persona.create({
    //     rut: '16.659.851-6',
    //     nombre: 'Cristián',
    //     apellido: 'Frías' 
    // });
    // await Persona.create({
    //     rut: '14.464.575-8',
    //     nombre: 'Ivanna',
    //     apellido: 'Frías' 
    // });

    // ACTUALIZAR PERSONAS
    // const persona = await Persona.findByPk(1);
    // persona.nombre = 'Cristián Andrés'
    // persona.apellido = 'Frías García'
    // persona.save();

    // ELIMINAR PERSONAS
    // const persona = await Persona.findByPk(1);
    // await persona.destroy();
    
})