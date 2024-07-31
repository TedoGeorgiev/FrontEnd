function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const inputTextArea = 
       document.querySelector('#inputs textarea');
   
   const bestRestaurantEl = 
       document.querySelector('#outputs #bestRestaurant p');

   const bestWorkersEl =
       document.querySelector('#outputs #workers p');
   function onClick () {
      
      const restaurants = JSON.parse(inputTextArea.value) // Parse String from input into Object
          .reduce((acc, data) => {
             const [restaurantName, workersData] = data.split(' - '); // split data by ' - '
             
             const workers = workersData // take workers like Array of Objects from workersData
                 .split(', ') 
                 .map((workerData) => { 
                    const [name, salary] = workerData.split(' ');
                    return {                 // Create object with name and salary
                       name,
                       salary: Number(salary),
                    }
                 })
             
             if (!acc.hasOwnProperty(restaurantName)) {  // if Object acc has no property with restaurantName, create it
                acc[restaurantName] = {
                   workers: [], // empty array
                }
             }
             
             acc[restaurantName].workers.push(...workers);
             
             return acc;
          }, {});
      
      
      function getAvgSalary (restaurantData) {
         return restaurantData.workers
             .reduce((acc, current) => acc + current.salary, 0) / restaurantData.workers.length;
      }
      
      const [bestRestaurantKey] = Object.keys(restaurants)
          .sort((a, b) =>
          getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a]));

      const bestWorkers = restaurants[bestRestaurantKey].workers
          .slice()
          .sort((a, b) => b.salary - a.salary);
      
      bestRestaurantEl.textContent = `Name: ${bestRestaurantKey} 
      Average Salary: ${getAvgSalary(restaurants[bestRestaurantKey]).toFixed(2)} 
      Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;
      
      bestWorkersEl.textContent = bestWorkers
          .map((x) => `Name: ${x.name} With Salary: ${x.salary}`)
          .join(' ');
     
   }
}