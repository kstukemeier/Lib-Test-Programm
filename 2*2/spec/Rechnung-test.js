describe('Rechnugs test beginnt',function(){
 beforeEach(function(){
   loadFixtures('zwei_mal_zwei.html') //In der Zeile habe ich das Problem das die Seite “zwei_mal_zwei.html“ nicht geladen wird. Ich habe im Internet gesucht und habe nur “jasmine.getJSON Fixtures().fixtures Path“ gefunden. Ich habe nicht verstanden wie das Funktioniert.
  });

 it('Button wird gedrückt',function(){ //
    $("#rechnen").click()
  });

  it('Prüfung ob 4 in der var steht', function(){
    if($('#ausgabe').should.exist){
        if($("#ausgabe")===4){
          expect()
        }
    }
  });
});
