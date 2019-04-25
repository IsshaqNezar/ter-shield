$(function (){

    var $donnees = $('#donnees');
    var alea;

    $.ajax({
        type: 'GET',
        url :'/data',
        success: afficherData,
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

        enregistrementAlea();
        


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
});