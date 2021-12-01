console.log('For creation a random city type %crandomCity()', 'color: red;');

function randomCity() {

  function Construction(type, outputDay, outputNight, inputDay, inputNight, flats, price, capacity) {
    this.type = type;
    this.outputDay = outputDay;
    this.outputNight = outputNight;
    this.inputDay = inputDay;
    this.inputNight = inputNight;
    this.flats = flats;
    this.price = price;
    this.capacity = capacity;
  }

  let randomazer = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

  let createList = (type, outputDay, outputNight, inputDay, inputNight, flats, price, capacity, quantity) => Array.from({ length: randomazer(1, quantity) }, 
    () => new Construction(type, randomazer(1, outputDay), randomazer(1, outputNight), inputDay, inputNight, randomazer(1, flats), randomazer(2, price), randomazer(95, capacity)));
  
  let electricityСounting = (el, day, night, flats) => el.reduce((sum, cur) => sum + (cur[day] * 16 + cur[night] * 8) * cur[flats], 0).toFixed(2);

  let coalPlant = createList('Coal plant', 100, 100, 0, 0, 1, 0, 0, 3),
      solarPlant = createList('Solar plant', 5, 0, 0, 0, 1, 0, 0, 20),
      cityHouses = createList('House', 0, 0, 0.004, 0.001, 400, 0, 0, 300),
      powerLines = createList('Power lines', -1, -1, 0, 0, 1, 3, 105, 4);

  let coalPlantProduction = +electricityСounting(coalPlant, 'outputDay', 'outputNight', 'flats'),
      solarPlantProduction = +electricityСounting(solarPlant, 'outputDay', 'outputNight', 'flats'),
      cityHousesComsumption = +electricityСounting(cityHouses, 'inputDay', 'inputNight', 'flats'),
      powerLinesCapacity = +electricityСounting(powerLines, 'capacity', 'capacity', 'flats');

  let temp = (coalPlantProduction + solarPlantProduction - cityHousesComsumption).toFixed(2);

  console.log(`Coal plants electricity production per day - ${coalPlantProduction} mW`);
  console.log(`Solar plants electricity production per day - ${solarPlantProduction} mW`);
  console.log(`City's electricity usage per day - ${cityHousesComsumption} mW`);
  console.log(`Power lines capacity - ${powerLinesCapacity} mW`); 
  console.log(temp);
}