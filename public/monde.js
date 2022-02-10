 let monde11 = document.querySelector('.monde11');
 let monde222 = document.querySelector('.monde222');
 
fetch(`https://disease.sh/v3/covid-19/all
`)
.then(res => res.json())
.then(word => {

    monde11.innerHTML = `
    
     <div class="row">
                    <div class="col-12 ">
                      <div class="jumbotron rouge shadow-sm p-3 mb-5 bg-body rounded  ">
                                <p class="text-center">${nombreespace( word.cases)} <br>Cas confirmés au total</p>
                                
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="jumbotron orange shadow-sm p-3 mb-5 bg-body rounded ">
                        <p class="text-center">${nombreespace(word.active)} <br> Cas actifs</p>
                        
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="jumbotron vert shadow-sm p-3 mb-5 bg-body rounded  ">
                        <p class="text-center">${nombreespace(word.recovered)} <br> Cas guéris</p>
                        
                      </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                      <div class="jumbotron noir shadow-sm p-3 mb-5 bg-body rounded ">
                        <p class="text-center">${nombreespace(word.deaths)} <br>Décès </p>
                       
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="jumbotron bleu shadow-sm p-3 mb-5 bg-body rounded ">
                        <p class="text-center">${nombreespace(word.tests)} <br> Nombre total de tests</p>
                       
                      </div>
                    </div>

                    <div class="col-12 ">
                      <div class="jumbotron bleu shadow-sm p-3 mb-5 bg-body rounded ">
                        <p class="text-center">${nombreespace(word.affectedCountries)} <br> Pays affectés<p>
                         
                      </div>
                    </div>
                </div>

    `
})


let countries;
function  cherche() {
  fetch(`https://disease.sh/v3/covid-19/countries`)
  .then(res => res.json())
  .then(country  =>{
      countries = country
      affiche(country)
  } )

} 
cherche()

 function affiche(country){
  monde222.innerHTML = ''
   for (let i = 0; i < country.length; i++) {
                       country[i]; 
        monde222.innerHTML +=  ` 
                        
                        <td class="text-center" data-label="pays">${ country[i].country}</td>
                        <td class="text-center" data-label="cas confirmes">${  nombreespace(country[i].cases)}</td>
                        <td class="text-center" data-label="guerri">${ nombreespace( country[i].recovered)}</td>
                        <td class="text-center" data-label="morts">${ nombreespace(country[i].deaths) }</td>
                        <td class="text-center" data-label="cas actifs">${ nombreespace(country[i].active) }</td>
                        <td class="text-center" data-label="tests ">${ nombreespace( country[i].tests)}</td>
        
        
        `        
    }
}


function nombreespace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
}