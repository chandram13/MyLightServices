// Marvish Chandra

class electricalServices{
    function electricalTroubleshooting(hour,repairCost,foot,light){
        consultationFee = 400;
        averageServices = 80 * hour + repairCost;
        hundredampPanel = 1100;
        fourhundredamp_Panel = 4000;
        replace_electricalpanel = 2500;
        newWiring = 80 * hour + 8 * foot;
        replaceSwitch = 200;
        lightFixture = 400;
        installLighting = 80 * hour + 200 * light;
        wiring_majorReno = 1500;
        homeWiring = 4000;
        personalPermit = 300;
    }
    function codeViolatons(outlet){
        smokeAlarm = 30;
        receptacleTester = 40;
        replaceOutlets = 20 * outlet;
        rewiringOutlets = 15 * outlet;
        replaceOutlet = 60;
        upgradeAMP = 1500;
    }
    function breakersFuses(breaker){
        breakerCost = 60 * breaker;
        lowBreaker = 130;
        highBreaker = 280; // 200 amps and higher
        replace_circuit_breaker = 4500;
        fuseReplacement = 100;
        brokenFuse = 300;
    }
    function poolSpa(month){
        poolInstallation = 4500;
        monthlyPool = 30 * month;
        poolCleaner = 2000;
        spaWiring = 800;
        runningSpa = 50 * month;
    }
    function carServices(hour,expectedInstallation){
        totalCost = 2500;
        secondLevel = 1200;
        laborCost = 100 * hour + expectedInstallation;
    }
    function homeGenerators(hour){
        homeGen = 80 * hour + 900; // installation
        // varying generator cost based on coverage
        twotofivekw = 1400;
        seventotenkw = 3000;
        thirteentosixteenkw = 4500;
        seventeentotwentykw = 6000;
        twentytwo_twentyfive = 12000;
        thirty_fourtyeight = 16000;
    }
    function electicFans(){
        ceilingFans = 250;
        fanInstallation = 600;
        residentalFans = 1400;
        wholeHouse = 1200;
    }
    function lightingFixtures(unit){
        totalFixture = 425 + 40 * unit;
    }
    function landSecurity(month){
        outdoorLighting = 4000;
        securityInstallation = 400;
        securityOperation = 60 * month;
    }
    function dataCabling(){
        voiceCost = 500;
    }
    function surgeProtector(installation){
        homeSurge = 300 + installation;
    }
    function switchingSystems(){
        transferSwitch = 2500;
    }
    function applianceCircuits(){
        wiring = 320;
        circuitBreaker = 200;
        gasLine = 760;
        fridge = 300;
        cookTop = 155;
        range = 125;
        smartFridge = 500;
        washingMachine = 500;
        dryerMachine = 400;
    }
    function doorbellServices(){
        wiredDoorbell = 75;
        ringDoorbell = 250;
        wirelessIntercoms = 500;
        wiredIntercoms = 10000;
    }
}
