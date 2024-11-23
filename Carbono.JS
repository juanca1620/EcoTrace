const usuario = {};

const factoresEmision = {
    electricidad: 0.233, // kg CO2 por kWh
    transportePublico: 0.105, // kg CO2 por km
    gasolina: 2.31, // kg CO2 por litro
    carne: 27, // kg CO2 por kg
    pollo: 6.9, // kg CO2 por kg
    vegetales: 2, // kg CO2 por kg
    residuos: 0.3, // kg CO2 por kg
    vuelos: 90, // kg CO2 por hora de vuelo
    ropa: 14, // kg CO CO2 por prenda promedio
    agua: 0.5, // kg CO2 por m³
  };

  const limitesYConsejos = {
    electricidad: {
        limite: 150,     // kWh/mes
        consejo: "Cambia a bombillas LED y apaga los aparatos que no uses - esto puede reducir hasta un 30% tu consumo"
    },
    transportePublico: {
        limite: 200,     // km/mes
        consejo: "Considera usar bicicleta para distancias cortas (menos de 5km) - podrías ahorrar 0.105kg de CO2 por km"
    },
    gasolina: {
        limite: 60,      // litros/mes
        consejo: "Mantén una velocidad constante y evita acelerones - puede reducir el consumo hasta un 20%"
    },
    carne: {
        limite: 8,       // kg/mes
        consejo: "Reduce a la mitad tu consumo de carne roja e introduce más legumbres - ahorrarás 13.5kg de CO2 por cada kg no consumido"
    },
    pollo: {
        limite: 10,      // kg/mes
        consejo: "Sustituye dos comidas de pollo por legumbres a la semana - reducirás 13.8kg de CO2 al mes"
    },
    vegetales: {
        limite: 20,      // kg/mes
        consejo: "Compra vegetales locales y de temporada - reduce hasta un 50% las emisiones por transporte"
    },
    residuos: {
        limite: 30,      // kg/mes
        consejo: "Separa tus residuos y composta los orgánicos - reduce hasta un 30% tu basura mensual"
    },
    vuelos: {
        limite: 2,       // horas/mes
        consejo: "Agrupa viajes y considera alternativas como el tren - cada hora de vuelo menos son 90kg de CO2 menos"
    },
    ropa: {
        limite: 2,       // prendas/mes
        consejo: "Compra ropa de segunda mano o de mejor calidad - cada prenda nueva son 14kg de CO2"
    },
    agua: {
        limite: 10,      // m³/mes
        consejo: "Instala reductores de caudal en grifos - puede ahorrar hasta 50% de agua"
    }
  };

// Modulo De mirar Info
const mirarDatos = () => {
    intro();
    menu
};

// Modulo para registrar los datos
const registrarDatos = () => {
    huellaCarbono();
    menu();
};

//Reporte de los mismos
const resumenDatos = () => {
    if (usuario.electricidad > limitesYConsejos.electricidad.limite) {
        alert(limitesYConsejos.electricidad.consejo)
    }

    if (usuario.transportePublico > limitesYConsejos.transportePublico.limite) {
        alert(limitesYConsejos.transportePublico.consejo)
    }

    if (usuario.gasolina > limitesYConsejos.gasolina.limite) {
        alert(limitesYConsejos.gasolina.consejo)
    }

    if (usuario.carne > limitesYConsejos.carne.limite) {
        alert(limitesYConsejos.carne.consejo)
    }

    if (usuario.pollo > limitesYConsejos.pollo.limite) {
        alert(limitesYConsejos.pollo.consejo)
    }

    if (usuario.vegetales > limitesYConsejos.vegetales.limite) {
        alert(limitesYConsejos.residuos.consejo)
    }

    if (usuario.residuos > limitesYConsejos.residuos.limite) {
        alert(limitesYConsejos.residuos.consejo)
    }

    if (usuario.vuelos > limitesYConsejos.vuelos.limite) {
        alert(limitesYConsejos.vuelos.consejo)
    }

    if (usuario.ropa > limitesYConsejos.ropa.limite) {
        alert(limitesYConsejos.ropa.consejo)
    }

    if (usuario.agua > limitesYConsejos.agua.limite) {
        alert(limitesYConsejos.agua.consejo)
    }

    alert("Recuerda que el cambio es de todos, si no viste ningun consejo, Felicidades \n eres un ciudadano ejemplar");
    menu();
};

  
  // Función para validar entrada numérica
  const obtenerValorNumerico = (mensaje) => {
    let valor;
    do {
      const entrada = prompt(mensaje);
      valor = parseFloat(entrada);
      if (isNaN(valor) || valor < 0) {
        alert('Por favor, ingresa un número válido (mayor o igual a 0).');
      }
    } while (isNaN(valor) || valor < 0);
    return valor;
  };
  
  // Función para calcular las emisiones y guardarlas en el objeto usuario
  const calcularEmisiones = (datos) => {
    usuario.emisiones = {
      electricidad: datos.electricidad * factoresEmision.electricidad,
      transportePublico: datos.transportePublico * factoresEmision.transportePublico,
      gasolina: datos.gasolina * factoresEmision.gasolina,
      carne: datos.carne * factoresEmision.carne,
      pollo: datos.pollo * factoresEmision.pollo,
      vegetales: datos.vegetales * factoresEmision.vegetales,
      residuos: datos.residuos * factoresEmision.residuos,
      vuelos: datos.vuelos * factoresEmision.vuelos,
      ropa: datos.ropa * factoresEmision.ropa,
      agua: datos.agua * factoresEmision.agua,
      total: Object.keys(factoresEmision).reduce((suma, clave) => {
        return suma + (datos[clave] || 0) * factoresEmision[clave];
      }, 0),
    };
  };
  
  // Calculadora principal
  const huellaCarbono = () => {
    alert('Vamos a calcular tu huella de carbono. Responde las siguientes preguntas.');
  
    const datos = {
      electricidad: obtenerValorNumerico('¿Cuánta electricidad consumes al mes en kWh? (Aprox. 1 kWh equivale a 3 horas de uso de una lámpara de 60W)'),
      transportePublico: obtenerValorNumerico('¿Cuántos kilómetros recorres en transporte público al mes? (Autobús, tren, metro)'),
      gasolina: obtenerValorNumerico('¿Cuántos litros de gasolina usas al mes para tu vehículo? (Si no usas vehículo, escribe 0)'),
      carne: obtenerValorNumerico('¿Cuántos kg de carne roja consumes al mes? (Res, cerdo, etc.)'),
      pollo: obtenerValorNumerico('¿Cuántos kg de pollo consumes al mes?'),
      vegetales: obtenerValorNumerico('¿Cuántos kg de frutas y vegetales consumes al mes?'),
      residuos: obtenerValorNumerico('¿Cuántos kg de basura generas al mes? (Considera bolsas grandes)'),
      vuelos: obtenerValorNumerico('¿Cuántas horas de vuelo realizas al año? (Si no vuelas, escribe 0)'),
      ropa: obtenerValorNumerico('¿Cuántas prendas de ropa compras al mes? (Promedio)'),
      agua: obtenerValorNumerico('¿Cuántos metros cúbicos de agua consumes al mes?'),
    };
  
    // Calcular las emisiones y guardarlas en el usuario
    calcularEmisiones(datos);
  };
  
  function intro() {
    alert("La quema de combustibles fósiles es responsable del 75% de las emisiones de gases de efecto invernadero. Esto contribuye al calentamiento global.");
    alert("La deforestación libera grandes cantidades de dióxido de carbono (CO₂) a la atmósfera y reduce la capacidad de los bosques para absorber CO₂.");
    alert("Las actividades agrícolas y ganaderas emiten metano (CH₄) y óxido nitroso (N₂O), potentes gases de efecto invernadero.");
    alert("La producción de electricidad y el uso de energía para la industria y el transporte son grandes fuentes de emisiones de gases de efecto invernadero.");
    alert("Las temperaturas globales han aumentado aproximadamente 1°C desde finales del siglo XIX, con la última década siendo la más cálida registrada.");
    alert("El cambio climático está acelerando la pérdida de biodiversidad, amenazando con extinguir a muchas especies animales y vegetales.");
    alert("El calentamiento global aumenta la frecuencia e intensidad de eventos climáticos extremos como huracanes, sequías e inundaciones.");
    alert("Los glaciares y las capas de hielo polar se están derritiendo a un ritmo alarmante, contribuyendo al aumento del nivel del mar.");
    menu();
}

const menu = () => {

  const respuesta = prompt(
        "Ingresa: \n" +
        "1: Para ver info general\n" +
        "2: Para ingresa \n" +
        "3:Para ver tu reporte y consejos" 
    );

    switch (respuesta) {
        case "1":
            mirarDatos();
            break;
        case "2":
            registrarDatos();
            break;
        case "3":
            if(usuario){
                resumenDatos();
            }else{
                alert("No has registrado ninguno de tus datos para hacerte un resumen");
            }
            break;
        default:
            alert("No es una obcion valida");
            menu();
            break;
    }

};

const main = () => {
  alert(
    "Bienvenido a EcoTrace: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente."
  );
  let men;
  tpmorp = menu;
  menu();
};

main();
