function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableRowElements =
       document.querySelectorAll('table.container tbody tr');

   const searchEl =
       document.getElementById('searchField');

   function getMatchElements (input) {
      return [...tableRowElements].filter((rowEl) =>
          rowEl.textContent
              .toLowerCase().includes(input));
   }

   function clearState () {
      [...tableRowElements].forEach((rowEl) => {
         rowEl.classList.remove('select');
      })
   }
   
   function onClick() {

      clearState();

      const searchText = searchEl.value.toLowerCase();
      
      const matchRows = getMatchElements(searchText);

      matchRows.forEach((row) => {
         row.classList.add('select');
      });
      
      searchEl.value = '';
      
   }
}