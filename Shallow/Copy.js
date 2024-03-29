var _ = require("lodash")

const obj = {
    name: "Tushar"
}

const obj2 = _.cloneDeep(obj)
console.log(obj)
console.log(obj2)