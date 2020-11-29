const ObjectsToCsv = require('objects-to-csv');

async function convertirCsv(list) {
    const csv = new ObjectsToCsv(list)
    await csv.toDisk('C:/Users/Ernesto/Desktop/list2.csv')
}
const list = [{
        "sexo": 'M',
        "edad": 21,
        "carrera": "Derecho",
        "weakSkill": "Listening",
        "approved": "Si"
    },
    {
        "sexo": 'M',
        "edad": 21,
        "carrera": "Derecho",
        "weakSkill": "Writing",
        "approved": "No"
    },
    {
        "sexo": 'M',
        "edad": 21,
        "carrera": "Derecho",
        "weakSkill": "Reading",
        "approved": "Si"
    },
]

convertirCsv(list)