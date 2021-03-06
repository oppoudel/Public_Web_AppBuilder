﻿define(
   ({
    selectAnalysisTools:"Valige vidinas kuvatavad analüüsi tööriistad.",
    selected: "valitud",
    name: "Nimi",
    graphicalDisplay:"Graafiline kuva",
    usage: "Kasutus",
    toolNotAvailable: "See tööriist pole saadaval, kuna kaart ei sisalda nõutavaid objektikihte.",
    aggregatePoints:"Agregeeri punktid",
    aggregatePointsUsage:"Agregeeri punktid polügoonideks, kus punktid asuvad.",
    aggregatePointsInputTip: "Saate määrata punktobjektide kihi, mis agregeeritakse pindobjektide kihil polügoonideks.",
    calculateDensity:"Arvuta tihedus",
    calculateDensityUsage:"Punkt- või joonobjektidest tiheduskaardi loomiseks saate hajutada mõne nähtuse teadaolevad hulgad (esitatud punktide või joonte atribuutidena) üle kogu kaardi.",
    calculateDensityInputTip:"Saate määrata punkt- või joonobjektid, mille põhjal tihedus arvutatakse.",
    connectOriginsToDestinations: "Ühenda algpunktid sihtpunktidega",
    connectOriginsToDestinationsUsage: "Saate mõõta reisiaja või vahemaa punktipaaride vahel.",
    connectOriginsToDestinationsInputTip: "Saate määrata genereeritavate marsruutide algpunkti või -punktid.",
    createBuffers:"Loo puhvrid",
    createBuffersUsage:"Saate sisendobjektide põhjal luua puhveralad.",
    createBuffersInputTip:"Saate määrata puhverdatava punkt-, joon- või pindobjektide kihi.",
    createDriveTimeAreas:"Loo sõiduaja pinnad",
    createDriveTimeAreasUsage:"Saate etteantud sõiduaja väärtuste põhjal luua sisendpunktide ümber sõiduaja (või sõiduvahemaa) pinnad.",
    createDriveTimeAreasInputTip:"Saate määrata punktid, kuhu sõiduaja pinnad joonistatakse.",
    createViewshed:"Loo vaateväli",
    createViewshedUsage:"Loob alad, mis on teie määratud asukohtadest nähtavad.",
    createViewshedInputTip:"Saate määrata vaatlejate asukohad nähtavate alade tuvastamiseks.",
    createWatersheds:"Loo valgalad",
    createWatershedsUsage:"Loob Teie määratud asukohtadel põhinevad valgalad.",
    createWatershedsInputTip:"Saate määrata valgalade arvutamiseks kasutatavad punktobjektid.",
    deriveNewLocations:"Tuleta uued asukohad",
    deriveNewLocationsUsage:"Saate tuletada uued objektid sisendkihtide põhjal, mis vastavad Teie määratud päringule.",
    deriveNewLocationsInputTip:"Saate määrata sisendina kasutatava analüüsikihi.",
    dissolveBoundaries:"Sulanda piirid",
    dissolveBoundariesUsage:"Saate sulandada polügoonid, mis omavahel kattuvad või millel on ühine piir.",
    dissolveBoundariesInputTip:"Saate määrata sulandatavaid pindobjekte sisaldava kihi.",
    enrichLayer:"Rikasta kihti",
    enrichLayerUsage:"Saate sisendobjekte rikastada teabega lähedalasuvate alade ettevõtete, kohtade ja inimeste kohta.",
    enrichLayerInputTip:"Saate määrata uute andmetega rikastatavad objektid.",
    extractData:"Andmete väljavõte",
    extractDataDesc:"Saate andmed ekstraktida ühest või mitmest teatud kindlas ulatuses asuvast kihist.",
    extractDataInputTip:"Saate määrata ekstraktitava sisendobjektide kihi.",
    findExistingLocations:"Leia olemasolevad asukohad",
    findExistingLocationsUsage:"Saate sisendkihis valida objektid, mis vastavad Teie määratud atribuudi- ja/või ruumilisele päringule.",
    findExistingLocationsInputTip:"Saate määrata sisendina kasutatavad analüüsikihid.",
    findHotSpots:"Leia tulipunktid",
    findHotSpotsUsage:"Saate otsida sisendobjektide või suurte/väikeste väärtuste statistiliselt olulisi klastreid.",
    findHotSpotsInputTip:"Saate määrata punkt- või pindobjektide kihi, mille alusel tulipunktid arvutatakse.",
    findNearest:"Leia lähim",
    findNearestUsage:"Iga sisendkihil asuva objekti jaoks leitakse talle lähim objekt mõnel teisel kihil.",
    findNearestInputTip:"Saate määrata punkt-, joon- või pindobjektid, mille alusel lähimad asukohad leitakse.",
    findSimilarLocations:"Leia sarnased asukohad",
    findSimilarLocationsUsage:"Saate mõõta kandidaatasukohtade sarnasust ühe või mitme viiteasukohaga.",
    findSimilarLocationsInputTip:"Saate määrata objektikihi, mis sisaldab ühte või mitut viiteasukohta, millega otsingukihi objekte sarnasuse osas võrreldakse.",
    interpolatePoints:"Interpoleeri punktid",
    interpolatePointsUsage:"Saate prognoosida uute asukohtade väärtusi punktikogumike mõõtmiste põhjal.",
    interpolatePointsInputTip:"Saate määrata interpoleeritavad punktobjektid.",
    mergeLayers:"Ühenda kihid",
    mergeLayersUsage:"Saate mitme kihi objektid üheks uueks kihiks ühendada",
    mergeLayersInputTip:"Saate määrata ühendamiskihiga ühendatava objektikihi.",
    overlayLayers:"Kattuvad kihid",
    overlayLayersUsage:"Saate mitu kihti ühendada üheks kihiks nii, et algsete kihtide teave jääb alles.",
    overlayLayersInputTip:"Saate määrata ülekattekihiga kattuva objektikihi.",
    planRoutes:"Kavanda marsruudid",
    planRoutesUsage:"Saate määratleda, kuidas ülesanded välitöötajate vahel efektiivselt jagada.",
    planRoutesInputTip:"Saate määrata punktid, mida sõidukid, juhid või marsruudid peaksid läbima.",
    summarizeNearby:"Summeeri ligidusest",
    summarizeNearbyUsage:"Iga sisendkihil asuva objekti jaoks saate summeerida andmed, mis asuvad mõnel teisel kihil objektidest teatud raadiuses.",
    summarizeNearbyInputTip:"Saate määrata punkt-, joon- või polügoonobjektikihi, millest alates mõõdetakse vahemaad summeerimiskihi objektideni.",
    summarizeWithin:"Summeeri piirides",
    summarizeWithinUsage:"Iga sisendpolügoonkihil asuva polügooni jaoks saate summeerida andmed, mis asuvad mõnel teisel kihil objektidest selles raadiuses.",
    summarizeWithinInputTip:"Saate määrata polügoonobjektikihi, mille suunas summeerimine toimub.",
    traceDownstream:"Allavoolu jälitus",
    traceDownstreamUsage:"Aitab määratleda voolusuuna Teie määratud asukohtades allavoolu suunas.",
    traceDownstreamInputTip:"Saate määrata punktobjektid, mida kasutatakse allavoolujälituse alguspunktina."
  })
);
