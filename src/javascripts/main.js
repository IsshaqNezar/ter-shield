$(function (){

    var $donnees = $('#donnees');

    var myChart = document.getElementById('myChart').getContext('2d');

    var tableau = [];
    var alea;
    var i = 0;

    $.ajax({
        type: 'GET',
        url :'/data',
        success: RecupData,
        error: error,
    });


        function afficherData(donnees) {
            $.each(donnees, function(i, donnee) {
               $donnees.append('<li>valeur: '+ donnee.valeur+', date:'+ donnee.date +'</li>');
            });
        };

        function newData(nouvelleDonnee) {
           $donnees.append('<li>valeur: '+ nouvelleDonnee.valeur+', date:'+ nouvelleDonnee.date +'</li>');
           reload();       
        };
        
        function error(xhr,status,error) {
            alert('error loading orders');
            console.log(xhr, status, error);
        };

        function aleatoire(min, max) {
            
            alea = Math.floor(Math.random() * (max - min)) + min;

            return alea;                      
        };

        function saveData(alea) {

            var objetDonnee = {
                valeur: alea,
                date: '0',
            };

            $.ajax({
                type: 'POST',
                url: '/data',
                data: objetDonnee,
                //success: newData,
                error: error,
            });

        };

        function enregistrementAlea() {
            
            aleatoire(0,20);
            saveData(alea);
            console.log('Test');

        
        };

        
        /* enregistrementAlea(); */
        

        function reload(){
            var container = document.getElementById("#donnees");
            var content = container.innerHTML;
            container.innerHTML= content; 
            
           //this line is to watch the result in console , you can remove it later	
            console.log("Refreshed"); 
        };

    // Fonctions non finies
    
        function dateTest() {
            /* var date = new Date();
            var Jour, Moi, Annee, Heure, Min, Seconde;
            Jour = 
            date = date.getTime();
            return date; */
            var d = new Date();

            console.log(d);
            
            
        }
        


        function boucle() {

            var i = 0;
            var valeur = [];
            while (i < 5) {
                valeur.push(aleatoire(0,20));
                i++;    
            };

            return valeur;
        };

        /////////////////////////////// CHART //////////////////////////////

        function RecupData(donnees) {
            
            var array = [];
            var i = 0;
            var count = 0;
            var labelSize= [];

            tableau = donnees.map(function(val){
                array = val.valeur;                
                return array;
                
            });

            i = tableau.length;

            for (count = 0; count <= i; count++){

                labelSize[count] = count
            
            }
            console.log(tableau);
            
            
            var dataChart = new Chart(myChart, {
                type : 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
                data : {
                    labels : 0,
                    datasets:[{
                        label:['Data'],
                        data: [],   
                        backgroundColor: [
                            'rgba(235, 241, 0, 0.2)',
                            
                        ]        
                    }],

                },
                options : {}
            });
            
            dataChart.data.datasets[0].data = tableau;
            dataChart.data.labels = labelSize;
            dataChart.update();
            
                   
        }
        

        


});