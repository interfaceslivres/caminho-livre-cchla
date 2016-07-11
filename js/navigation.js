$(document).ready(function () {
   

        //Definir qual elemento (input) será utilizado como uma caixa de pesquisa e definir quais os elementos do autocomplete em um array
        $("#searchBox").autocomplete({
            source: ["Ambiente dos Professores II", "Bloco V", "Praça da Alegria", "Bloco IV", "Bloco de Psicologia", "Bloco C", "Auditórios", "Bloco A", "DEMID", "Biblioteca Setorial", "Clínica de Psicologia", "CAs"]
        });
        //Função para quando o botão for clicado, ir até a área do mapa correta e abrir o popup do objeto selecionado



        $("#searchMap").click(function() {
            var local = (document.getElementById("searchBox").value);
            if (local == "Ambiente dos Professores II" || local == "Sala 1") {
                map.setView([-7.139162744817215, -34.85106289386749], 19);
                L.marker([-7.139162744817215, -34.85106289386749], {
                    icon: transmarker
                }).addTo(map).bindPopup(Ambiente2_pop).openPopup();
            }
            else if (local == "Bloco V" || local == "Sala 2") {
                map.setView([-7.139037658321243, -34.85082685947418], 19);
                L.marker([-7.139037658321243, -34.85082685947418], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoV_pop).openPopup();
            }
            else if (local == "Praça da Alegria" || local == "Sala 3") {
                map.setView([-7.139338398136814, -34.850730299949646], 19);
                L.marker([-7.139338398136814, -34.850730299949646], {
                    icon: transmarker
                }).addTo(map).bindPopup(Praca_pop).openPopup();
            }
            else if (local == "Bloco IV" || local == "Sala 4" ) {
                map.setView([-7.139732287153718, -34.85062301158905], 19);
                L.marker([-7.139732287153718, -34.85062301158905], {
                    icon: transmarker
                }).addTo(map).bindPopup(BlocoIV_pop).openPopup();
            }
            else if (local == "Bloco de Psicologia" || local == "Sala 5" ) {
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
            else if (local == "Auditórios" || local == "Sala 7" ) {
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