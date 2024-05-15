type Porcion = "pequeño" | "mediano" | "grande" | ""

type Masa = "delgada" | "guresa" | "integral" | ""

type Ingrediente = {
  tipo:
    | "queso"
    | "pepperoni"
    | "jamón"
    | "champiñones"
    | "pimientos"
    | "cebolla"
    | "aceitunas"
    | "piña"
  cantidad: number
}

type Precios = {
  porcionPrecio: Record<string, number>
  masaPrecio: Record<string, number>
  ingredientesPrecio: Record<string, number>
  coberturaPrecio: number
}

class Pizza {
  private porcion: Porcion
  private masa: Masa
  private ingredientes: Ingrediente[]
  private cobertura?: boolean
  private costoTotal: number

  constructor(pizzaBuilder: PizzaBuilder) {
    const { porcion, masa, ingredientes, cobertura, costoTotal } =
      pizzaBuilder.getBuiltPizza()
    this.porcion = porcion
    this.masa = masa
    this.ingredientes = ingredientes
    this.cobertura = cobertura
    this.costoTotal = costoTotal
  }

  getPizza() {
    return {
      porcion: this.porcion,
      masa: this.masa,
      ingredientes: this.ingredientes,
      cobertura: this.cobertura,
    }
  }

  getCostoPizza() {
    return `$${this.costoTotal}`
  }
}

class PizzaBuilder {
  private porcion: Porcion = ""
  private masa: Masa = ""
  private ingredientes: Ingrediente[] = []
  private cobertura?: boolean = false
  private pizzeriaPrecios: Precios
  constructor(pizzeriaPrecios: Precios) {
    this.pizzeriaPrecios = pizzeriaPrecios
  }

  public setPorcion(porcion: Porcion) {
    this.porcion = porcion
    return this
  }

  public setMasa(masa: Masa) {
    this.masa = masa
    return this
  }

  public addIngrediente(newIngrediente: Ingrediente["tipo"], cantidad: number) {
    const newIngredientes = this.ingredientes.filter(
      (ingrediente) => ingrediente.tipo !== newIngrediente
    )
    newIngredientes.push({ tipo: newIngrediente, cantidad })
    this.ingredientes = newIngredientes
    return this
  }

  public setCobertura(cobertura: boolean) {
    this.cobertura = cobertura
    return this
  }

  public getCostoActual() {
    let total = 0
    const precios = this.pizzeriaPrecios
    total += this.porcion === "" ? 0 : precios.porcionPrecio[this.porcion]
    total += this.masa === "" ? 0 : precios.masaPrecio[this.masa]
    total += this.cobertura ? precios.coberturaPrecio : 0
    this.ingredientes.forEach(({ tipo, cantidad }) => {
      total += precios.ingredientesPrecio[tipo] * cantidad
    })
    return total
  }

  public getBuiltPizza() {
    return {
      porcion: this.porcion,
      masa: this.masa,
      ingredientes: this.ingredientes,
      cobertura: this.cobertura,
      costoTotal: this.getCostoActual(),
    }
  }

  public build() {
    return new Pizza(this)
  }
}

class Restaurante {
  private porcionPrecio = {
    pequeño: 10,
    mediano: 20,
    grande: 30,
  }
  private masaPrecio = {
    delgada: 10,
    guresa: 20,
    integral: 30,
  }
  private ingredientesPrecio = {
    queso: 5,
    pepperoni: 6,
    jamón: 7,
    champiñones: 8,
    pimientos: 9,
    cebolla: 10,
    aceitunas: 11,
    piña: 12,
  }
  private coberturaPrecio = 10

  private pizzaBuilder: PizzaBuilder

  constructor() {
    this.pizzaBuilder = new PizzaBuilder(this.getPrecios())
  }

  getPrecios() {
    return {
      porcionPrecio: this.porcionPrecio,
      masaPrecio: this.masaPrecio,
      ingredientesPrecio: this.ingredientesPrecio,
      coberturaPrecio: this.coberturaPrecio,
    }
  }

  preparePizza() {
    return this.pizzaBuilder
  }
}

const restaurant = new Restaurante()

let myPizza: Pizza

myPizza = new Restaurante()
  .preparePizza()
  .setPorcion("pequeño")
  .setMasa("integral")
  .addIngrediente("champiñones", 4)
  .addIngrediente("aceitunas", 2)
  .addIngrediente("queso", 5)
  .addIngrediente("piña", 3)
  .setCobertura(true)
  .build()

console.log(myPizza.getPizza())
console.log(myPizza.getCostoPizza())
