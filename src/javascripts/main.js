$(function (){

    var $donnees = $('#donnees');
    var valeur;

    $.ajax({
        type: 'GET',
        url :'/data',
        success: function(donnees) {
            $.each(donnees, function(i, donnee) {
                $donnees.append('<li>valeur: '+ donnee.valeur+', heure:'+ donnee.heure +'</li>');
            });
        },
        error: function() {
            alert('error loading orders');
        }
    });

        function aleatoire(min, max) {

            return (Math.floor(Math.random() * (max - min)) + min);                      
        };

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