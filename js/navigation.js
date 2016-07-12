$(document).ready(function () {
   

        //Definir qual elemento (input) será utilizado como uma caixa de pesquisa e definir quais os elementos do autocomplete em um array
        $("#searchBox").autocomplete({
            source: [
//Local
            "Ambiente dos Professores II", "Bloco V", "Praça da Alegria", "Bloco IV", "Bloco de Psicologia", "Bloco C", "Auditórios", "Bloco A", "DEMID", "Biblioteca Setorial", "Clínica de Psicologia", "CAs",
//Salas
            "Ambiente 58", "Ambiente 59", "Ambiente 60", "Ambiente 61", "Ambiente 62", "Ambiente 63", "Ambiente 64", "Ambiente 65", "Ambiente 66", "Ambiente 67", "Ambiente 68", "Ambiente 69", "Ambiente 70", "Ambiente 71", 
                    ]
        });
        //Função para quando o botão for clicado, ir até a área do mapa correta e abrir o popup do objeto selecionado


        $("#searchMap").click(function() {
            var local = (document.getElementById("searchBox").value);
            if (local == "Ambiente dos Professores II" || local == "Ambiente 58" || local == "Ambiente 59" || local == "Ambiente 60" || local == "Ambiente 61" || local == "Ambiente 62" || local == "Ambiente 63" || local == "Ambiente 64" || local == "Ambiente 65" || local == "Ambiente 66" || local == "Ambiente 67" || local == "Ambiente 68" || local == "Ambiente 69" || local == "Ambiente 70" || local == "Ambiente 71") {
                map.setView([-7.139162744817215, -34.85106289386749], 19);
                L.marker([-7.139162744817215, -34.85106289386749], {
                    icon: transmarker
                }).addTo(map).bindPopup(Ambiente2_pop).openPopup();
            }
            else if (local == "Bloco V" || local == "Sala 502" || local == "Sala 503" || local == "Sala 504" || local == "Sala 505" || local == "Sala 506" || local == "Sala 507" || local == "Sala 508" || local == "Sala 509" || local == "Sala 510" || local == "Sala 511" || local == "Sala 512" || local == "Sala 513" || local == "Sala 514") {
                map.setView([-7.139037658321243, -34.85082685947418], 19);
                L.marker([-7.139037658321243, -34.85082685947418], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoV_pop).openPopup();
            }
            else if (local == "Praça da Alegria" || local == "Sala 1" || local == "Sala 2" || local == "Sala 3" || local == "Sala 4" || local == "Sala 5" || local == "Sala 6" || local == "Sala 7" || local == "Sala 8" || local == "Sala 9" || local == "Sala 10" || local == "Sala 11" || local == "Sala 12" || local == "Sala 13" || local == "Sala 14" || local == "Sala 15" || local == "Sala 16" || local == "Sala 17" || local == "Sala 18" || local == "Sala 19" || local == "Sala 20" || local == "Sala 21" || local == "Sala 22" || local == "Sala 23" || local == "Sala 24" || local == "Sala 25" || local == "Sala 26" || local == "Sala 27" || local == "Sala 28" || local == "Sala 29" || local == "Sala 30" || local == "Sala 31" || local == "Sala 32" || local == "Sala 33" || local == "Sala 34" || local == "Sala 35" || local == "Sala 36" || local == "Sala 37" || local == "Sala 38" || local == "Sala 39" || local == "Sala 40" || local == "Sala 41" || local == "Sala 42" || local == "Sala 43" || local == "Sala 44" || local == "Sala 45" || local == "Sala 46" || local == "Sala 47" || local == "Sala 48" || local == "Sala 49" || local == "Sala 50" || local == "Sala 51" || local == "Sala 52" || local == "Sala 53" || local == "Sala 54" || local == "Sala 55" || local == "Sala 56") {
                map.setView([-7.139338398136814, -34.850730299949646], 19);
                L.marker([-7.139338398136814, -34.850730299949646], {
                    icon: transmarker
                }).addTo(map).bindPopup(Praca_pop).openPopup();
            }
            else if (local == "Bloco IV" || local == "Sala 402"  || local == "Sala 403"  || local == "Sala 404"  || local == "Sala 405"  || local == "Sala 406"  || local == "Sala 407"  || local == "Sala 408" ) {
                map.setView([-7.139732287153718, -34.85062301158905], 19);
                L.marker([-7.139732287153718, -34.85062301158905], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoIV_pop).openPopup();
            }
            else if (local == "Bloco de Psicologia" || local == "Sala de Psicologia 1"  || local == "Sala de Psicologia 2"  || local == "Sala de Psicologia 3"  || local == "Sala de Psicologia 4" || local == "Sala de Psicologia 101"  || local == "Sala de Psicologia 102"  || local == "Sala de Psicologia 103"  || local == "Sala de Psicologia 104"  || local == "Sala de Psicologia 105"  || local == "Sala de Psicologia 106"  || local == "Sala de Psicologia 107" || local == "Sala de Psicologia 201"  || local == "Sala de Psicologia 202" || local == "Sala de Psicologia 203" || local == "Sala de Psicologia 205" || local == "Sala de Psicologia 207") {
                map.setView([-7.139253232899373, -34.850904643535614], 19);
                L.marker([-7.139253232899373, -34.850904643535614], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoPsico_pop).openPopup();
            }
            else if (local == "Bloco C" || local == "Sala 6" ) {
                map.setView([-7.139325091069513, -34.850998520851135], 19);
                L.marker([-7.139325091069513, -34.850998520851135], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoC_pop).openPopup();
            }
            else if (local == "Auditórios" || local == "Auditório 411" || local == "Auditório 412" ) {
                map.setView([-7.1397589012642495, -34.85075980424881], 19);
                L.marker([-7.1397589012642495, -34.85075980424881], {
                    icon: transmarker
                }).addTo(map).bindPopup(Auditorios_pop).openPopup();
            }
            else if (local == "Bloco A" || local == "Sala 8" ) {
                map.setView([-7.139923908714983, -34.85083222389221], 19);
                L.marker([-7.139923908714983, -34.85083222389221], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoA_pop).openPopup();
            }
            else if (local == "DEMID" || local == "Sala 9" ) {
                map.setView([-7.136307038206137, -34.84924435615539], 19);
                L.marker([-7.136307038206137, -34.84924435615539], {
                    icon: transmarker
                }).addTo(map).bindPopup(DEMID_pop).openPopup();
            }
            else if (local == "Biblioteca Setorial" || local == "Sala 10" ) {
                map.setView([-7.139788176784048, -34.85136866569519], 19);
                L.marker([-7.139788176784048, -34.85136866569519], {
                    icon: transmarker
                }).addTo(map).bindPopup(BibliotecaSetorial_pop).openPopup();
            }
            else if (local == "Clínica de Psicologia" || local == "Sala 11" ) {
                map.setView([-7.139673736105113, -34.85096096992493], 19);
                L.marker([-7.139673736105113, -34.85096096992493], {
                    icon: transmarker
                }).addTo(map).bindPopup(ClinicaPsicologia_pop).openPopup();
            }
            else if (local == "CAs" || local == "Sala 12" ) {
                map.setView([-7.139074918132136, -34.85094487667084], 19);
                L.marker([-7.139074918132136, -34.85094487667084], {
                    icon: transmarker
                }).addTo(map).bindPopup(CAs_pop).openPopup();
            }
            
        });

  
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