 let cote = document.querySelector('.cas1')
 let monde11 = document.querySelector('.monde11');
 let monde222 = document.querySelector('.monde222');
 let search = document.querySelectorAll('input');
 console.log(search);

fetch(`https://disease.sh/v3/covid-19/countries/cote%20d%27ivoire?strict=true`)
.then(res => res.json())
.then(data => {
    console.log(data);
    cote.innerHTML = `
     <div class="row">
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron rouge ">
                                <p class="text-center">${nombreespace(data.cases)} <br> Cas confirmés au total</p>
                               
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron orange  ">
                        <p class="text-center">${nombreespace(data.active)} <br>Cas actifs</p>
                      
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron vert  ">
                        <p class="text-center">${nombreespace(data.recovered)} <br>Cas guéris </p>
                      </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-6 col-md-6">
                      <div class="jumbotron noir ">
                        <p class="text-center">${nombreespace(data.deaths)} <br>Décès </p>
                        
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 col-md-6">
                      <div class="jumbotron bleu ">
                        <p class="text-center">${nombreespace(data.tests)} <br>Nombre total de tests</p>
                        
                      </div>
                    </div>

                   
                    </div>
                </div>

    `
});


function nombreespace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
}