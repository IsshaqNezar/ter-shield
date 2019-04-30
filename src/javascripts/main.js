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
                success: newData,
                error: error,
            });

        };

        function enregistrementAlea() {
            
            aleatoire(0,20);
            saveData(alea);
            console.log('Test');

        
        };

<<<<<<< HEAD
            
         enregistrementAlea(); 
                    
      
=======
        
         enregistrementAlea(); 
        
>>>>>>> 790f41105d23dc8086034bbe8f1f1acfb3f68776

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
            
            var array = [], array2 = [];
            var i = 0, b=0;
            var count = 0, count2;
            var labelSize= [];

            afficherData(donnees);

            tableau = donnees.map(function(val){
                array = val.valeur;   
                             
                return array;
                
            });

            i = tableau.length;
            console.log(i);

            for(count2 = i-30; count2<= i; count2++){

                console.log(b);
                array2[b] = tableau[count2];
                
                b++;
            }

            for (count = 0; count <= 30; count++){

                labelSize[count] = count
            
            }
            
            
            
            var dataChart = new Chart(myChart, {
                type : 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
                data : {
                    labels : 0,
                    datasets:[{
                        label:['Data'],
                        data: [],   
                        backgroundColor: [
                            'rgb(0, 254, 185, 0.3)',
                        ],
                        borderColor : [
                            'rgba(54, 162, 235, 0.6)',
                        ],    
                    }],

                },
                options : {}
            });
            
            dataChart.data.datasets[0].data = array2;
            dataChart.data.labels = labelSize;
            dataChart.update();
            
                   
        }

           

});
