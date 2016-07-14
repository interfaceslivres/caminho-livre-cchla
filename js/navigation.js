$(document).ready(function () {
   

        //Definir qual elemento (input) será utilizado como uma caixa de pesquisa e definir quais os elementos do autocomplete em um array
        $("#searchBox").autocomplete({
            source: [
//Local
            "Ambiente dos Professores II", "Bloco V", "Praça da Alegria", "Bloco IV", "Bloco de Psicologia", "Bloco C", "Auditórios", "Bloco A", "DEMID", "Biblioteca Setorial", "Clínica de Psicologia", "CAs",
            "CA de Letras", "CA de Serviço Social", "CA de História", "CA de Ciências Sociais", "CA de Psicologia", "CAs - Xerox", 
//Salas
            "Ambiente 58 - Ambiente 71",
            "DEMID - Sala 1", "DEMID - Sala 2", 
            "Auditório 411", "Auditório 412", 
            "Sala 1 - Sala 56", 
            "Sala 402 - Sala 408", 
            "Sala 417 - Sala 425",
            "Sala 502 - Sala 514", 
            "Salas de Atendimento 0 - 19",
            "Salas de Psicologia 1 - 4", 
            "Salas de Psicologia 102 - 107", 
            "Sala de Psicologia 201", "Sala de Psicologia 202", "Sala de Psicologia 203", "Sala de Psicologia 205", "Sala de Psicologia 207", 
            "Sala de Atendimento ao Usuário"
                ]
        });
        //Função para quando o botão for clicado, ir até a área do mapa correta e abrir o popup do objeto selecionado
        $( "#searchBox" ).on( "autocompleteselect", function() {
            setTimeout(function(){  abertura(); }, 1);
           
        });

        $( "#searchBox" ).keypress(function( event ) {
          if ( event.which == 13 ) {
            abertura();
          }
        });


        $("#searchMap").click( function(){
            abertura();
        });

        function abertura() {
            var local = (document.getElementById("searchBox").value).toLowerCase();
            if (local == "ambiente dos professores ii" || local == "ambiente 58 - ambiente 71" || local == "ambiente 58" || local == "ambiente 59" || local == "ambiente 60" || local == "ambiente 61" || local == "ambiente 62" || local == "ambiente 63" || local == "ambiente 64" || local == "ambiente 65" || local == "ambiente 66" || local == "ambiente 67" || local == "ambiente 68" || local == "ambiente 69" || local == "ambiente 70" || local == "ambiente 71") {
                map.setView([-7.139162744817215, -34.85106289386749], 19);
                L.marker([-7.139162744817215, -34.85106289386749], {
                    icon: transmarker
                }).addTo(map).bindPopup(Ambiente2_pop).openPopup();
            }
            else if (local == "bloco v" || local == "sala 502 - sala 514" || local == "sala 502" || local == "sala 503" || local == "sala 504" || local == "sala 505" || local == "sala 506" || local == "sala 507" || local == "sala 508" || local == "sala 509" || local == "sala 510" || local == "sala 511" || local == "sala 512" || local == "sala 513" || local == "sala 514") {
                map.setView([-7.139037658321243, -34.85082685947418], 19);
                L.marker([-7.139037658321243, -34.85082685947418], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoV_pop).openPopup();
            }
            else if (local == "praça da alegria" || local == "sala 1 - sala 56" || local == "sala 1" || local == "sala 2" || local == "sala 3" || local == "sala 4" || local == "sala 5" || local == "sala 6" || local == "sala 7" || local == "sala 8" || local == "sala 9" || local == "sala 10" || local == "sala 11" || local == "sala 12" || local == "sala 13" || local == "sala 14" || local == "sala 15" || local == "sala 16" || local == "sala 17" || local == "sala 18" || local == "sala 19" || local == "sala 20" || local == "sala 21" || local == "sala 22" || local == "sala 23" || local == "sala 24" || local == "sala 25" || local == "sala 26" || local == "sala 27" || local == "sala 28" || local == "sala 29" || local == "sala 30" || local == "sala 31" || local == "sala 32" || local == "sala 33" || local == "sala 34" || local == "sala 35" || local == "sala 36" || local == "sala 37" || local == "sala 38" || local == "sala 39" || local == "sala 40" || local == "sala 41" || local == "sala 42" || local == "sala 43" || local == "sala 44" || local == "sala 45" || local == "sala 46" || local == "sala 47" || local == "sala 48" || local == "sala 49" || local == "sala 50" || local == "sala 51" || local == "sala 52" || local == "sala 53" || local == "sala 54" || local == "sala 55" || local == "sala 56") {
                map.setView([-7.139338398136814, -34.850730299949646], 19);
                L.marker([-7.139338398136814, -34.850730299949646], {
                    icon: transmarker
                }).addTo(map).bindPopup(Praca_pop).openPopup();
            }
            else if (local == "bloco iv" || local == "sala 402 - sala 408" || local == "sala 402"  || local == "sala 403"  || local == "sala 404"  || local == "sala 405"  || local == "sala 406"  || local == "sala 407"  || local == "sala 408" ) {
                map.setView([-7.139732287153718, -34.85062301158905], 19);
                L.marker([-7.139732287153718, -34.85062301158905], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoIV_pop).openPopup();
            }
            else if (local == "bloco de psicologia" || local == "salas de psicologia 1 - 4" || local == "salas de psicologia 102 - 107" || local == "sala de psicologia 1"  || local == "sala de psicologia 2"  || local == "sala de psicologia 3"  || local == "sala de psicologia 4" || local == "sala de psicologia 101"  || local == "sala de psicologia 102"  || local == "sala de psicologia 103"  || local == "sala de psicologia 104"  || local == "sala de psicologia 105"  || local == "sala de psicologia 106"  || local == "sala de psicologia 107" || local == "sala de psicologia 201"  || local == "sala de psicologia 202" || local == "sala de psicologia 203" || local == "sala de psicologia 205" || local == "sala de psicologia 207") {
                map.setView([-7.139253232899373, -34.850904643535614], 19);
                L.marker([-7.139253232899373, -34.850904643535614], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoPsico_pop).openPopup();
            }
            else if (local == "bloco c" || local == "y" ) {
                map.setView([-7.139325091069513, -34.850998520851135], 19);
                L.marker([-7.139325091069513, -34.850998520851135], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoC_pop).openPopup();
            }
            else if (local == "auditórios" || local == "auditório 411" || local == "auditório 412" ) {
                map.setView([-7.1397589012642495, -34.85075980424881], 19);
                L.marker([-7.1397589012642495, -34.85075980424881], {
                    icon: transmarker
                }).addTo(map).bindPopup(Auditorios_pop).openPopup();
            }
            else if (local == "bloco a" || local == "sala 417 - sala 425" || local == "sala 417" || local == "sala 418" || local == "sala 419" || local == "sala 420" || local == "sala 421" || local == "sala 422" || local == "sala 423" || local == "sala 424" || local == "sala 425" ) {
                map.setView([-7.139923908714983, -34.85083222389221], 19);
                L.marker([-7.139923908714983, -34.85083222389221], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoA_pop).openPopup();
            }
            else if (local == "demid" || local == "demid - sala 1" || local == "demid - sala 2") {
                map.setView([-7.136307038206137, -34.84924435615539], 19);
                L.marker([-7.136307038206137, -34.84924435615539], {
                    icon: transmarker
                }).addTo(map).bindPopup(DEMID_pop).openPopup();
            }
            else if (local == "biblioteca setorial" || local == "sala de atendimento ao usuário" ) {
                map.setView([-7.139788176784048, -34.85136866569519], 19);
                L.marker([-7.139788176784048, -34.85136866569519], {
                    icon: transmarker
                }).addTo(map).bindPopup(BibliotecaSetorial_pop).openPopup();
            }
            else if (local == "clínica de psicologia" || local == "salas de atendimento 0 - 19" || local == "sala de atendimento 0"  || local == "sala de atendimento 1" || local == "sala de atendimento 2" || local == "sala de atendimento 3" || local == "sala de atendimento 4" || local == "sala de atendimento 5" || local == "sala de atendimento 6" || local == "sala de atendimento 7" || local == "sala de atendimento 8" || local == "sala de atendimento 9" || local == "sala de atendimento 10" || local == "sala de atendimento 11" || local == "sala de atendimento 12" || local == "sala de atendimento 13" || local == "sala de atendimento 14" || local == "sala de atendimento 15" || local == "sala de atendimento 16" || local == "sala de atendimento 17" || local == "sala de atendimento 18" || local == "sala de atendimento 19" ) {
                map.setView([-7.139673736105113, -34.85096096992493], 19);
                L.marker([-7.139673736105113, -34.85096096992493], {
                    icon: transmarker
                }).addTo(map).bindPopup(ClinicaPsicologia_pop).openPopup();
            }
            else if (local == "cas" || local == "ca de letras" || local == "ca de serviço social" || local == "ca de história" || local == "ca de ciências sociais" || local == "ca de psicologia" || local == "cas - xerox" ) {
                map.setView([-7.139074918132136, -34.85094487667084], 19);
                L.marker([-7.139074918132136, -34.85094487667084], {
                    icon: transmarker
                }).addTo(map).bindPopup(CAs_pop).openPopup();
            }
            
            else {
                map.setView([-7.139923908714983, -34.85083222389221], 19);
                L.marker([-7.139923908714983, -34.85083222389221], {
                    icon: transmarker
                }).addTo(map).bindPopup(notFound_pop).openPopup();
            }
        };

  
})






/* $(".department1").click(function () {
        map.setView([52.6212, -1.1238], 20)
        L.marker([52.6212, -1.1238], {
            icon: transmarker
        }).addTo(map).bindPopup(attenboroughtower_pop ,(autopad) ).openPopup();
    });

    $(".city1").click(function () {
        map.setView([52.6395, -1.1339], 15);
        L.layerGroup([busstation]).addTo(map)
    }); 


        list: {
        onSelectedItemEvent: function() {
            var value = $("#search").getSelectedItemData().realName;
            window["value"]();
        }
    }*/