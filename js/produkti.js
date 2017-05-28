/**
 * Created by Andrija on 4/4/2017.
 */
var contentContainer = $('.produkti-box-content-container');
var bottomTabs = $('.produkti-box-bottom-tabs');
var leftArrow = $("#arrow-left");
var rightArrow = $("#arrow-right");

var produktiBoxContainer = $('.produkti-box-container');
var upperTab = $('.upper-tab');
var bottomTab = $('.bottom-tab');
var brandBox = $('.brand-box');

var produktiInsertContent = $('.produkti-insert-content');

var activeBrownColor = "rgb(95,67,57)";
var activeTextColor = "rgb(245, 135, 31)";
var tabColor = "rgba(113,82,72, 0.8)";

var currentIndex = 0;
var currentNum = 0;

var currentActiveBottomTab = undefined;
var currentActiveUpperTab = undefined;


//JohnMasters

var kozaCiscenje = ["produkti/JohnMasters/kozaCiscenje/BearberrySkinCistilnapenazaobraz.html","produkti/JohnMasters/kozaCiscenje/Jojoba&GinsengCistiloinpilingzaobraz.html","produkti/JohnMasters/kozaCiscenje/LindenBlossomCistilnakremazaobraz.html","produkti/JohnMasters/kozaCiscenje/RoseFoamingPenecicistilnigelzaobraz.html"];
var kozaMaske = ["produkti/JohnMasters/kozaMaske/CalendulaHydrating&ToningHidratantnamaska.html","produkti/JohnMasters/kozaMaske/MorrocanClayCistilnamaska.html"];
var kozaNega = ["produkti/JohnMasters/kozaNega/BearberrySkinObrazniserumzauravnavanjekoze.html","produkti/JohnMasters/kozaNega/FirmingEyeGelUtrjevalnigelzaokrogoci.html","produkti/JohnMasters/kozaNega/SPF30NaturalMineralSunscreenMineralnazascitapredsoncem.html"];
var kozaToniranje = ["produkti/JohnMasters/kozaToniranje/BearberrySkinTonikzauravnavanjeintoniranjekoze.html","produkti/JohnMasters/kozaToniranje/LavenderHidratantnaemulzija.html","produkti/JohnMasters/kozaToniranje/Rose&AloeHidratantnaemulzija.html"];
var kozaVlazenje = ["produkti/JohnMasters/kozaVlazenje/GreenTea&RoseHidratantniserumzaobraz.html","produkti/JohnMasters/kozaVlazenje/MandarinMaximumMoistureVlazilec.html","produkti/JohnMasters/kozaVlazenje/PomegranateHranljivioljniserumzaobraz.html","produkti/JohnMasters/kozaVlazenje/Rose&ApricotAntioksidantnadnevnakrema.html","produkti/JohnMasters/kozaVlazenje/VitaminCAnti-AgingSerumzaobrazprotistaranju.html"];
var lasjeNega = ["produkti/JohnMasters/lasjeNega/BareUnscentedDetanglerNeodisavljenBalzam.html","produkti/JohnMasters/lasjeNega/Citrus&NeroliRegenerator.html","produkti/JohnMasters/lasjeNega/DryhairNourishment&DefrizzerOljniserum.html","produkti/JohnMasters/lasjeNega/Honey&HibiscusObnovitvenamaska.html","produkti/JohnMasters/lasjeNega/Lavender&AvocadoIntenzivniRegenerator.html","produkti/JohnMasters/lasjeNega/Rosemary&PeppermintRegenerator.html"];
var lasjeSamponi = ["produkti/JohnMasters/lasjeSamponi/BareUnscentedNeodisavljenSampon.html","produkti/JohnMasters/lasjeSamponi/EveningPrimroseSampon.html","produkti/JohnMasters/lasjeSamponi/HerbalCiderHairClarifier&ColorSealerZeliscnikis.html","produkti/JohnMasters/lasjeSamponi/Honey&HibiscusSampon.html","produkti/JohnMasters/lasjeSamponi/LavenderRosemarySampon.html","produkti/JohnMasters/lasjeSamponi/Zinc&SageSampon&Balzam.html"];
var lasjeStiliranje = ["produkti/JohnMasters/lasjeStiliranje/BourbonVanilla&TangerineMaskazateksturolas.html","produkti/JohnMasters/lasjeStiliranje/DeepScalpFollicleTreatment&VolumizerZeliscnatinktura.html","produkti/JohnMasters/lasjeStiliranje/HairPomadeVosek.html","produkti/JohnMasters/lasjeStiliranje/SeaMistMorskasolvspreju,ssivko.html","produkti/JohnMasters/lasjeStiliranje/ShineOnNaravnipreparatzaglajenje.html","produkti/JohnMasters/lasjeStiliranje/SweetOrange&SilkProteinGel.html"];
var teloTelo = ["produkti/JohnMasters/teloTelo/100%Arganovoolje.html","produkti/JohnMasters/teloTelo/BareUnscentedNeodisavljengelzaprhanje.html","produkti/JohnMasters/teloTelo/BareUnscentedNeodisavljenlosjon.html","produkti/JohnMasters/teloTelo/Birch&CedarwoodVsestranskomilozaprhanjeinbritje.html","produkti/JohnMasters/teloTelo/BloodOrange&VanillaMlekozatelo.html","produkti/JohnMasters/teloTelo/BloodOrange&VanillaNegovalnigelzaprhanje.html","produkti/JohnMasters/teloTelo/Cacao&CupuacuMaslozarokeintelo.html","produkti/JohnMasters/teloTelo/Lavender,RoseGeranium&YlangYlangMilo.html","produkti/JohnMasters/teloTelo/LipCalmBalzamzaustnice.html","produkti/JohnMasters/teloTelo/Orange&GinsengPiling.html"];


//Redken

var negaNega = ["produkti/Redken/negaNega/AllSoftArgan-6Arganovoolje.html","produkti/Redken/negaNega/AllSoftMaska.html","produkti/Redken/negaNega/BlondeGlamPerfectPlatinumGel.html","produkti/Redken/negaNega/ColorExtendRichRecovery-Globinskamaska.html","produkti/Redken/negaNega/ColorExtendSunSparklingShieldMehcaleclas.html","produkti/Redken/negaNega/ExtremeCATProteinNega.html","produkti/Redken/negaNega/ExtremeStrengthBuilderPLUSMaska.html","produkti/Redken/negaNega/FreshCurlsCurlRefinerKrema.html","produkti/Redken/negaNega/FreshCurlsSpringMoussePena.html","produkti/Redken/negaNega/Nature’sRescueRefiningSeaPolishPiling.html","produkti/Redken/negaNega/SmoothDownButterTreat-Kremnamaska.html"];
var samponi_balzamiSamponi_balzami = ["produkti/Redken/samponi_balzamiSamponi_balzami/AllSoftBalzam.html","produkti/Redken/samponi_balzamiSamponi_balzami/AllSoftSampon.html","produkti/Redken/samponi_balzamiSamponi_balzami/BlondeGlamBalzam.html","produkti/Redken/samponi_balzamiSamponi_balzami/BlondeGlamSampon.html","produkti/Redken/samponi_balzamiSamponi_balzami/ColorExtendBalzam.html","produkti/Redken/samponi_balzamiSamponi_balzami/ColorExtendSampon.html","produkti/Redken/samponi_balzamiSamponi_balzami/ColourExtendSunAfter-SunSampon.html","produkti/Redken/samponi_balzamiSamponi_balzami/DandruffControlSampon.html","produkti/Redken/samponi_balzamiSamponi_balzami/ExtremeBalzam.html","produkti/Redken/samponi_balzamiSamponi_balzami/ExtremeSampon.html","produkti/Redken/samponi_balzamiSamponi_balzami/FreshCurlsBalzam.html","produkti/Redken/samponi_balzamiSamponi_balzami/FreshCurlsSampon.html","produkti/Redken/samponi_balzamiSamponi_balzami/SmoothDown-Balzam.html","produkti/Redken/samponi_balzamiSamponi_balzami/SmoothDown-Sampon.html"];
var stiliranjeStiliranje = ["produkti/Redken/stiliranjeStiliranje/FreshCurlsAntiFrizzShinerKrema.html","produkti/Redken/stiliranjeStiliranje/StraightAlign12Losijon.html","produkti/Redken/stiliranjeStiliranje/TextureRoughPaste12Pasta.html","produkti/Redken/stiliranjeStiliranje/VolumeForceful23Sprej.html","produkti/Redken/stiliranjeStiliranje/VolumeFullEffect04Pena.html"];
var za_moskeZa_moske = ["produkti/Redken/za_moskeZa_moske/CleanSpice2-in-1Sampon&Balzam.html","produkti/Redken/za_moskeZa_moske/MintShapePasta.html","produkti/Redken/za_moskeZa_moske/StylingWorkhardPasta.html"];


var holder = {1 : kozaCiscenje, 2 : kozaMaske, 3 : kozaNega, 4: kozaToniranje, 5 : kozaVlazenje, 6 : lasjeNega, 7 : lasjeSamponi, 8 : lasjeStiliranje, 9 : teloTelo, 10 : negaNega, 11 : samponi_balzamiSamponi_balzami, 12: stiliranjeStiliranje, 13 : za_moskeZa_moske};




function activateTab(active, tab) {
    if(active){
        tab.css("background-color", activeBrownColor);
        tab.children().css('color', activeTextColor);
    }
    else{
        tab.css('background-color', tabColor);
        tab.children().css('color', 'white');
    }
}


function setSubOptionListener(){


    $('.clickable-option').click(function(){

        console.log('sub-option clicked');

        contentContainer.hide();

        var requiredDataNumber = parseInt($(this).attr('data-pannel'));
        var requiredData = holder[requiredDataNumber][0];
        var requiredTabs = $(this).parents().filter('.option-wrapper').find('.option').attr('data-tabs');


        if(requiredTabs){

            console.log(requiredTabs);

            $.ajax({
                    url: requiredTabs
                })
                .done(function(data){
                    bottomTabs.show();
                    bottomTabs.html(data);
                    setBottomTabListener();

                    var tabToActivate = $('.bottom-tab[data-pannel=' + requiredDataNumber + ']');
                    activateTab(true, tabToActivate);

                    currentActiveBottomTab = tabToActivate;
                });
        }
        $.ajax({
                url: requiredData
            })
            .done(function(data){

                $('.produkt-content-container').show();

                produktiInsertContent.html(data);

                produktiInsertContent.fadeIn();
                showArrows(true);
                currentNum = requiredDataNumber;
                currentIndex = 0;
                //setArrowListener();
            });
        // contentContainer.html(ajaxGet(requiredData));
    });

}


function setBottomTabListener(){

    $('.bottom-tab').click(function(){

        activateTab(false, currentActiveBottomTab);

        activateTab(true, $(this));

        currentActiveBottomTab = $(this);

        contentContainer.hide();

        produktiInsertContent.fadeOut();

        var dataRequiredNumber = parseInt($(this).attr('data-pannel'));

        console.log(dataRequiredNumber);

        var dataRequired = holder[dataRequiredNumber][0];

        $.ajax({
                url : dataRequired
            })
            .done(function(data){

                produktiInsertContent.html(data);

                produktiInsertContent.fadeIn();

                showArrows(true);

               // contentContainer.fadeIn();

                currentNum = dataRequiredNumber;
                currentIndex = 0;

                //setArrowListener();
            });

    });

}


function setArrowListener(){


    rightArrow.click(function(){

        console.log('Current index: ' + currentIndex);

        if((currentIndex + 1 < holder[currentNum].length)){
            currentIndex++;

            produktiInsertContent.hide();

            console.log(holder[currentNum][currentIndex]);

            $.ajax({
                    url : holder[currentNum][currentIndex]
                })
                .done(function(data){
                    console.log("rightArrowAjax");
                    produktiInsertContent.html(data);
                    produktiInsertContent.fadeIn();
                })
        }
        else{
            console.log('something wrong with the conditional');
        }

    });


    leftArrow.click(function(){

        console.log('Current index: ' + currentIndex);

        if (!(currentIndex - 1 < 0)){
            currentIndex--;

            produktiInsertContent.hide();

            console.log(holder[currentNum][currentIndex]);

            $.ajax({
                    url : holder[currentNum][currentIndex]
                })
                .done(function(data){
                    produktiInsertContent.html(data);
                    produktiInsertContent.fadeIn();
                })
        }
        else {
            console.log('something wrong with the conditional');
        }

    });
}


function showArrows(bool){

    if(bool){

        leftArrow.show();
        rightArrow.show();

    }
    else{
        leftArrow.hide();
        rightArrow.hide();
    }

}

function setUpperTabListener() {

    upperTab.click(function () {

        activateTab(false, currentActiveUpperTab);

        activateTab(true, $(this));

        produktiInsertContent.fadeOut();

        currentActiveUpperTab = $(this);

        var requiredData = $(this).attr('data-pannel');//Repeat the same process as the prevous 2 functions
        bottomTabs.hide();

        $('.produkt-content-container').hide();
        contentContainer.hide();

        showArrows(false);

        $.ajax({
                url: requiredData
            })
            .done(function (data) {

                contentContainer.html(data);

                contentContainer.fadeIn();

                setSubOptionListener();

            });

    });
}


$(function(){

    $('.produkti-box-bottom-tabs').hide();
    showArrows(false);
    $('.produkt-content-container').hide();

    $('.brand-box').click(function(){

        console.log('brandBox clicked');

        var dataRequired = $(this).attr('data-pannel');
        var tabToActivateNumber = parseInt($(this).attr('data-tab'));


        console.log(dataRequired);

        $.ajax(dataRequired).done(function (data) {

            var tabToActivate = $('.produkti-box-upper-tabs .upper-tab:nth-child(' + tabToActivateNumber +')');

            contentContainer.html(data);
            produktiBoxContainer.fadeIn();
            activateTab(true, tabToActivate);
            currentActiveUpperTab = tabToActivate;

            setUpperTabListener();
            setSubOptionListener();
        });

    });

    setArrowListener();
});