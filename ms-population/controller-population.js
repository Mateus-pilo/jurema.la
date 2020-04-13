let population = require('./population.json');

module.exports = () => {  
  /**
   * gets all population or a population by UF
   * 
   * @param {State} state UF to population 
   */
  const get = async( data ) => {
    return new Promise( async (resolve, reject) => {
      try {
        let result = {}; 

        if(data && data.state)
          result = population.find(item => item.uf === data.state);
        else 
          result.population = population;
    
        resolve(result)
      } catch (error) {
        console.log(`State - error to get all population or population for UF [${error.message}]`)
        reject(error);
      }
    });
  }

  return {
    get
  }
}