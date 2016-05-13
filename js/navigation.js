$(document).ready(function () {
   

        //Definir qual elemento (input) será utilizado como uma caixa de pesquisa e definir quais os elementos do autocomplete em um array
        $("#searchBox").autocomplete({
            source: ["CT - Bloco A", "CT - Bloco B", "CT - Bloco C", "CT - Bloco D", "CT - Bloco E", "CT - Bloco F/G", "CT - Sala 101", "CCHLA - Prédio CCHLA", "CCHLA"]
        });
        //Função para quando o botão for clicado, ir até a área do mapa correta e abrir o popup do objeto selecionado
        $("#searchMap").click(function() {
            if (document.getElementById("searchBox").value == "CT - Bloco A" || "CT - Sala 101") {
                map.setView([-7.141576641348507, -34.85069274902344], 19);
                L.marker([-7.141576641348507, -34.85069274902344], {
                    icon: transmarker
                }).addTo(map).bindPopup(CTBlocoA_pop).openPopup();
            }
            else if (document.getElementById("searchBox").value == "CCHLA - Prédio CCHLA" || "CCHLA") {
                map.setView([-7.142156826267193, -34.850011467933655], 19);
                L.marker([-7.142156826267193, -34.850011467933655], {
                    icon: transmarker
                }).addTo(map).bindPopup(PredioCCHLA_pop).openPopup();
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