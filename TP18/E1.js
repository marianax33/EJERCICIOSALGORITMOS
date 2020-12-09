/*1) Crear un registro asignado a una variable que contenga la información de un
automóvil,especificando: N° de patente, marca, modelo, color, cantidad de puertas*/


function procesar(lista, tipoMascota) {
    let contador=0;
for (let i = 0; i < lista.length; i++) {
    if (lista[i]["tipo"].toUpperCase()==tipoMascota.toUpperCase()) {
        contador++;
    }
}
return contador;
}



let p1 =
[
  {
    profesional: 'Martín, Mielnichuk',
    mascota: 'Laika',
    tipo: 'Pez',
    feccha: '10/10/2020',
    diagnostico: 'Otitis',
    medicamento: 'Ivermectin'
  },
  {
    profesional: 'Melani, Bubanss',
    mascota: 'Scooby Doo',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Leptospirosis',
    medicamento: 'Nitroxynil'
  },
  {
    profesional: 'Ramiro, Giménez',
    mascota: 'Snoopy',
    tipo: 'Pez',
    feccha: '10/10/2020',
    diagnostico: 'Hepatitis',
    medicamento: 'Ketoprofen'
  },
  {
    profesional: 'Jhon, Baby',
    mascota: 'Goofy',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Diarrea',
    medicamento: 'Tylosin'
  },
  {
    profesional: 'Melani, Bubanss',
    mascota: 'Odie',
    tipo: 'Pez',
    feccha: '10/10/2020',
    diagnostico: 'Parvovirus',
    medicamento: 'Ketoprofen'
  },
  {
    profesional: 'Jessica, Hamilton',
    mascota: 'Milú',
    tipo: 'Lagarto',
    feccha: '10/10/2020',
    diagnostico: 'Cáncer',
    medicamento: 'Atropine Sulphate'
  },
  {
    profesional: 'Sandra, Poterala',
    mascota: 'Laika',
    tipo: 'Gato',
    feccha: '10/10/2020',
    diagnostico: 'Traqueobronquitis',
    medicamento: 'Ketoprofen'
  },
  {
    profesional: 'Ramiro, Giménez',
    mascota: 'Colmillo Branco',
    tipo: 'Lagarto',
    feccha: '10/10/2020',
    diagnostico: 'Leishmaniosis',
    medicamento: 'Complejo de Vitaminas B'
  },
  {
    profesional: 'Silmara, Antoniow',
    mascota: 'Goofy',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Leptospirosis',
    medicamento: 'Amoxicillin'
  },
  {
    profesional: 'Ramiro, Giménez',
    mascota: 'Milú',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Parvovirus',
    medicamento: 'Ivermectin'
  },
  {
    profesional: 'Ramiro, Giménez',
    mascota: 'Ran Tan Plan',
    tipo: 'Ave',
    feccha: '10/10/2020',
    diagnostico: 'Coronavirus',
    medicamento: 'Amoxicillin'
  },
  {
    profesional: 'Silmara, Antoniow',
    mascota: 'Niebla',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Mastitis',
    medicamento: 'Ketoprofen'
  },
  {
    profesional: 'Jessica, Hamilton',
    mascota: 'Snoopy',
    tipo: 'Ave',
    feccha: '10/10/2020',
    diagnostico: 'Otitis',
    medicamento: 'Oxytetracycline'
  },
  {
    profesional: 'Melani, Bubanss',
    mascota: 'Idefix',
    tipo: 'Lagarto',
    feccha: '10/10/2020',
    diagnostico: 'Hepatitis',
    medicamento: 'Atropine Sulphate'
  },
  {
    profesional: 'Veronica, Altamirano',
    mascota: 'Marley',
    tipo: 'Gato',
    feccha: '10/10/2020',
    diagnostico: 'Conjuntivitis',
    medicamento: 'Tylosin'
  },
  {
    profesional: 'Jessica, Hamilton',
    mascota: 'Niebla',
    tipo: 'Hámster',
    feccha: '10/10/2020',
    diagnostico: 'Borreliosis',
    medicamento: 'Nitroxynil'
  },
  {
    profesional: 'Jhon, Baby',
    mascota: 'Bruno',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Hepatitis',
    medicamento: 'Atropine Sulphate'
  },
  {
    profesional: 'Silmara, Antoniow',
    mascota: 'Bruno',
    tipo: 'Lagarto',
    feccha: '10/10/2020',
    diagnostico: 'Rabia',
    medicamento: 'Ivermectin'
  },
  {
    profesional: 'Veronica, Altamirano',
    mascota: 'Beethoven',
    tipo: 'Hámster',
    feccha: '10/10/2020',
    diagnostico: 'Coronavirus',
    medicamento: 'Sulphadiazine'
  },
  {
    profesional: 'Ramiro, Giménez',
    mascota: 'Ran Tan Plan',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Parvovirus',
    medicamento: 'Cefquinome'
  },
  {
    profesional: 'Veronica, Altamirano',
    mascota: 'Ran Tan Plan',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Diarrea',
    medicamento: 'Atropine Sulphate'
  },
  {
    profesional: 'Melani, Bubanss',
    mascota: 'Colmillo Branco',
    tipo: 'Pez',
    feccha: '10/10/2020',
    diagnostico: 'Parvovirus',
    medicamento: 'Atropine Sulphate'
  },
  {
    profesional: 'Melani, Bubanss',
    mascota: 'Idefix',
    tipo: 'Pez',
    feccha: '10/10/2020',
    diagnostico: 'Hepatitis',
    medicamento: 'Tylosin'
  },
  {
    profesional: 'Melani, Bubanss',
    mascota: 'Idefix',
    tipo: 'Lagarto',
    feccha: '10/10/2020',
    diagnostico: 'Otitis',
    medicamento: 'Tylosin'
  },
  {
    profesional: 'Silmara, Antoniow',
    mascota: 'Beethoven',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Hepatitis',
    medicamento: 'Amoxicillin'
  },
  {
    profesional: 'Julian, Cassanova',
    mascota: 'Snoopy',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Mastitis',
    medicamento: 'Complejo de Vitaminas B'
  },
  {
    profesional: 'Sebástian, Juanes',
    mascota: 'Snoopy',
    tipo: 'Gato',
    feccha: '10/10/2020',
    diagnostico: 'Brucelosis',
    medicamento: 'Tylosin'
  },
  {
    profesional: 'Melani, Bubanss',
    mascota: 'Niebla',
    tipo: 'Gato',
    feccha: '10/10/2020',
    diagnostico: 'Cáncer',
    medicamento: 'Tylosin'
  },
  {
    profesional: 'Martín, Mielnichuk',
    mascota: 'Dama y Golfo',
    tipo: 'Perro',
    feccha: '10/10/2020',
    diagnostico: 'Otitis',
    medicamento: 'Atropine Sulphate'
  },
  {
    profesional: 'Jhon, Baby',
    mascota: 'Ran Tan Plan',
    tipo: 'Hámster',
    feccha: '10/10/2020',
    diagnostico: 'Moquillo',
    medicamento: 'Tylosin'
  },
  {
    profesional: 'Ramiro, Giménez',
    mascota: 'Goofy',
    tipo: 'Gato',
    feccha: '10/10/2020',
    diagnostico: 'Gastritis',
    medicamento: 'Ivermectin'
  },
  {
    profesional: 'Jhon, Baby',
    mascota: 'Goofy',
    tipo: 'Pez',
    feccha: '10/10/2020',
    diagnostico: 'Moquillo',
    medicamento: 'Cefquinome'
  }
];
let p2 = "Pez";
console.log(procesar(p1, p2));