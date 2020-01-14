// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const RoadAssistance = require("../models/RoadAssistance-model");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let roadAssistances = [
  {
    role: "policyholder",
    username: 'Pedro Muñoz Ramírez',
    password: bcrypt.hashSync("Pedro", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '22687352H',
    phoneNumber: 666938765,
    policyNumber: 100001,
    expiryDate: 17-06-2020,
    type: 'turismo',
    plateNumber: '1357BCT',
    brand: 'Tesla',
    model: 'X',
  },
  {
    role: "policyholder",
    username: 'Rafael Perales Manzano',
    password: bcrypt.hashSync("Rafael", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 619229003,
    policyNumber: 100002,
    expiryDate: 06-09-2019,
    type: 'turismo',
    plateNumber: '9908GJH',
    brand: 'Volkswagen',
    model: 'Polo',
  },
  {
    role: "policyholder",
    username: 'Isabel Gutierrez Luna',
    password: bcrypt.hashSync("Isabel", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 639134228,
    policyNumber: 100003,
    expiryDate: 09 - 11 - 2019,
    type: 'turismo',
    plateNumber: '2397JKR',
    brand: 'Seat',
    model: 'León',
  },
  {
    role: "policyholder",
    username: 'Manuel Fernández Ramírez',
    password: bcrypt.hashSync("Manuel", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 659234519,
    policyNumber: 100004,
    expiryDate: 29 - 12 - 2019,
    type: 'turismo',
    plateNumber: '9784GHF',
    brand: 'Volkswagen',
    model: 'Siroco',
  },
  {
    role: "policyholder",
    username: 'Julio López Rodríguez',
    password: bcrypt.hashSync("Julio", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 666327584,
    policyNumber: 100005,
    expiryDate: 02 - 09 - 2019,
    type: 'turismo',
    plateNumber: '3847FRT',
    brand: 'Nissan',
    model: 'Qashqai',
  },
  {
    role: "policyholder",
    username: 'María Domínguez Peroleo',
    password: bcrypt.hashSync("María", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 637123456,
    policyNumber: 100006,
    expiryDate: 06 - 11 - 2019,
    type: 'turismo',
    plateNumber: '2438KTN',
    brand: 'Renault',
    model: 'Clio',
  },
  {
    role: "policyholder",
    username: 'Ignacio Sánchez Portera',
    password: bcrypt.hashSync("Ignacio", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 678987654,
    policyNumber: 100007,
    expiryDate: 07 - 12 - 2019,
    type: 'turismo',
    plateNumber: '4435LNF',
    brand: 'BMW',
    model: 'Serie 3',
  },
  {
    role: "policyholder",
    username: 'Rubén Corcho García',
    password: bcrypt.hashSync("Rubén", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 666524364,
    policyNumber: 100008,
    expiryDate: 04 - 10 - 2020,
    type: 'turismo',
    plateNumber: '8876JKS',
    brand: 'Mercedes',
    model: 'Slk 200',
  },
  {
    role: "policyholder",
    username: 'David Cuesta Jiménez',
    password: bcrypt.hashSync("David", bcrypt.genSaltSync(bcryptSalt)),
    DNI: '02173579J',
    phoneNumber: 699728374,
    policyNumber: 100009,
    expiryDate: 12 - 04 - 2022,
    type: 'turismo',
    plateNumber: '2364NST',
    brand: 'Citroen',
    model: 'C5',
  },
  {
    role: "recoveryService",
    username: 'Grúas Chamorro',
    password: bcrypt.hashSync("Chamorro", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 600484484,
    location: {
      latitude: 39.8760601,
      longitude: -3.9476432,
      address: 'Calle de Río Jarama, 123',
      city: 'Toledo',
      postalCode: 45007,
    },
  },
  {
    role: "recoveryService",
    username: 'Grúas Bellamiel',
    password: bcrypt.hashSync("Bellamiel", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 663285676,
    location: {
      latitude: 40.3776151,
      longitude: -3.6956116,
      address: 'Calle de Antonio López, 49',
      city: 'Madrid',
      postalCode: 28041,
    },
  },
  {
    role: "recoveryService",
    username: 'Grúas Fraile',
    password: bcrypt.hashSync("Fraile", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 629181817,
    location: {
      latitude: 40.645708,
      longitude: -3.136886,
      address: 'JVW7+76 Guadalajara',
      city: 'Guadalajara',
      postalCode: 19150,
    },
  },
  {
    role: "recoveryService",
    username: 'Grúas Viñolas',
    password: bcrypt.hashSync("Viñolas", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 933099898,
    location: {
      latitude: 41.402598,
      longitude: 2.197712,
      address: 'Carrer de Pere IV, 174',
      city: 'Barcelona',
      postalCode: 08005,
    },
  },
  {
    role: "recoveryService",
    username: 'Asistencia Valmar',
    password: bcrypt.hashSync("Valmar", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 902875505,
    location: {
      latitude: 39.4253324,
      longitude: -0.4098791,
      address: 'Carrer dels Fusters, 8',
      city: 'Paiporta',
      postalCode: 46200,
    },
  },
  {
    role: "recoveryService",
    username: 'ADA Ayad Del Automovilista',
    password: bcrypt.hashSync("ada", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 914131044,
    location: {
      latitude: 40.4343477,
      longitude: -3.6289537,
      address: 'Calle de Julian Camarillo, 10, 28037 Madrid',
      city: 'Madrid',
      postalCode: 28037,
    },
  },
  {
    role: "recoveryService",
    username: 'Asistencia del Toro',
    password: bcrypt.hashSync("toro", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 902350450,
    location: {
      latitude: 40.3656018,
      longitude: -3.74659,
      address: 'Calle del Cidro, 18-20, 28044 Madrid',
      city: 'Madrid',
      postalCode: 28044,
    },
  },
  {
    role: "recoveryService",
    username: 'Grúas La Unión',
    password: bcrypt.hashSync("union", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 915706644,
    location: {
      latitude: 40.4568175,
      longitude: -3.7030792,
      address: 'Calle de Lope de Haro, 11, 28039 Madrid',
      city: 'Madrid',
      postalCode: 28039,
    },
  },
  {
    role: "recoveryService",
    username: 'Grúas AMJ Savu',
    password: bcrypt.hashSync("savu", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 642698491,
    location: {
      latitude: 40.4319958,
      longitude: -3.6553252,
      address: 'Calle de Alcalá, 250, 28027 Madrid',
      city: 'Madrid',
      postalCode: 28027,
    },
  },
  {
    role: "recoveryService",
    username: 'Grúas Tomico',
    password: bcrypt.hashSync("tomico", bcrypt.genSaltSync(bcryptSalt)),
    phoneNumber: 913655679,
    location: {
      latitude: 40.4033006,
      longitude: -3.7137866,
      address: 'Calle de Antonio López, 49',
      city: 'Madrid',
      postalCode: 28041,
    },
  }  
]

RoadAssistance.deleteMany()
.then(() => {
  return RoadAssistance.create(roadAssistances)
})
.then(roadAssistancesCreated => {
  console.log(`${roadAssistancesCreated.length} policyholder created with the following id:`);
  console.log(roadAssistancesCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})