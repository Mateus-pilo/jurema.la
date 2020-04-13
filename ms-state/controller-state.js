const fs = require('fs');

module.exports = () => {  
  let states = require('./states.json');
  
  /**
   * gets all state or a state by UF
   * 
   * @param {Objetc} state UF to state 
   */
  const get = async( data ) => {
    return new Promise( async (resolve, reject) => {
      let population = [];

      if(fs.existsSync('./population.json'))
          population = require('./population.json');

      try {
        let result = {}; 
        if(data && data.state){
          result = states.find(item => item.uf === data.state);
          let find = population.find(item => item.uf === data.state);
          if(find)
            result.population = find.population;

        }else {
          result.states = states.map(state => {
            let find = population.find(item => item.uf === state.uf);
            if(find)
              state.population = find.population;
            return state;
          });
        }
    
        resolve(result)
      } catch (error) {
        console.log(`State - error to get all states or state for UF [${error.message}]`)
        reject(error);
      }
    });
  }

  return {
    get
  }
}