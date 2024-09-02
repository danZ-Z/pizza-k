import { formatPrice } from "../lib/utils";
import { PRODUCT_PRICES } from "./prices";

export const PIZZA = [
    {
        heading: 'Šunková', 
        postHeading: '560g - ' + formatPrice(PRODUCT_PRICES.pizza.sunkova / 100), 
        description: 'Tomat, bazalka, šunka, syr - 1,7',
    },
    {
        heading: 'Syrová', 
        postHeading: '620g - ' + formatPrice(PRODUCT_PRICES.pizza.syrova / 100), 
        description: 'Tomat, niva, encián, mozzarella - 1,7',
    },
    {
        heading: 'Salámová', 
        postHeading: '680g - ' + formatPrice(PRODUCT_PRICES.pizza.salamova / 100), 
        description: 'Tomat, bazalka, saláma, cibuľa, syr - 1,7',
    },
    {
        heading: 'Capri', 
        postHeading: '650g - ' + formatPrice(PRODUCT_PRICES.pizza.capri / 100), 
        description: 'Tomat, bazalka, šunka, šampiňóny, kukurica, syr - 1,7',
    },
    {
        heading: 'Capresse', 
        postHeading: '650g - ' + formatPrice(PRODUCT_PRICES.pizza.capresse / 100), 
        description: 'Tomat, bazalka, paradajky, rukola, mozzarella - 1,7',
    },
    {
        heading: 'Quasimodo', 
        postHeading: '700g - ' + formatPrice(PRODUCT_PRICES.pizza.quasimodo / 100), 
        description: 'Tomat, bazalka, saláma, klobása, niva, paradajky, šampiňóny, feferóny, syr - 1,7',
    },
    {
        heading: 'Kokošovský gazda', 
        postHeading: '650g - ' + formatPrice(PRODUCT_PRICES.pizza.gazda / 100), 
        description: 'Tomat, bazalka, slanina, klobása, vajcia, cibuľa, baranie rohy, syr - 1,3,7',
    },
    {
        heading: 'Olívia', 
        postHeading: '650g - ' + formatPrice(PRODUCT_PRICES.pizza.olivia / 100), 
        description: 'Tomat, bazalka, šunka, olivy, vajcia, syr - 1,3,7',
    },
    {
        heading: 'Bianca Rucola', 
        postHeading: '660g - ' + formatPrice(PRODUCT_PRICES.pizza.rucola / 100), 
        description: 'Smotanový základ, sézam, rukola, parmezán, syr - 1,7,11',
    },
    {
        heading: 'Bianca Brocoli', 
        postHeading: '680g - ' + formatPrice(PRODUCT_PRICES.pizza.brocoli / 100), 
        description: 'Smotanový základ, šunka, brokolica, niva, syr - 1,7',
    },
    {
        heading: 'Čertovská', 
        postHeading: '600g - ' + formatPrice(PRODUCT_PRICES.pizza.certovska / 100), 
        description: 'Tomat, bazalka, chilli, kuracie mäso, syr - 1,7',
    },
    {
        heading: 'Vegetariana', 
        postHeading: '630g - ' + formatPrice(PRODUCT_PRICES.pizza.vegetariana / 100), 
        description: 'Tomat, bazalka, paradajka, paprika, rukola, syr - 1,7',
    },
    {
        heading: 'Hawai', 
        postHeading: '670g - ' + formatPrice(PRODUCT_PRICES.pizza.hawai / 100), 
        description: 'Tomat, bazalka, šunka, ananás, syr - 1,7',
    },
    {
        heading: 'Moravská', 
        postHeading: '770g - ' + formatPrice(PRODUCT_PRICES.pizza.moravska / 100), 
        description: 'Tomat, moravské mäso, saláma, klobása, olivy, hermelín, slanina, syr - 1,7',
    },
    {
        heading: 'Bačovská', 
        postHeading: '770g - ' + formatPrice(PRODUCT_PRICES.pizza.bacovska / 100), 
        description: 'Smotanový základ, moravské mäso, klobása, vajcia, cibuľa, niva, slanina, syr - 1,3,7',
    },
    {
        heading: 'Tuniaková', 
        postHeading: '650g - ' + formatPrice(PRODUCT_PRICES.pizza.tuniakova / 100), 
        description: 'Tomat, bazalka, cibuľa, tuniak, syr - 1,4,7',
    },
    {
        heading: 'Margarita', 
        postHeading: '520g - ' + formatPrice(PRODUCT_PRICES.pizza.margarita / 100), 
        description: 'Tomat, bazalka, syr - 1,7',
    },
    {
        heading: 'Prosciutto', 
        postHeading: '720g - ' + formatPrice(PRODUCT_PRICES.pizza.prosciutto / 100), 
        description: 'Tomat, bazalka, syr - 1,7',
    },
    {
        heading: 'Kebab pizza', 
        postHeading: '660g - ' + formatPrice(PRODUCT_PRICES.pizza.kebab / 100), 
        description: 'Tomat, bazalka, kebab mäso, med, syr - 1,7',
    },
    {
        heading: 'Bryndzová', 
        postHeading: '660g - ' + formatPrice(PRODUCT_PRICES.pizza.bryndzova / 100), 
        description: 'Smotanový základ, klobása, bryndza, cibuľa, syr - 1,7',
    },
    {
        heading: 'Pizza posúch', 
        postHeading: '290g - ' + formatPrice(PRODUCT_PRICES.pizza.posuch / 100), 
        description: 'Cesto - 1',
    },
    {
        heading: 'Pizza tyčinky', 
        postHeading: '300g - ' + formatPrice(PRODUCT_PRICES.pizza.tycinky / 100), 
        description: 'Cesto, parmezán - 1,7',
    },
] 

export const PIZZA_TOPINGS = [
    {
        heading: '100g',
        postHeading: formatPrice(PRODUCT_PRICES.pizza_topings.meat_cheese / 100),
        description: 'Šunka, saláma, klobása, tuniak, kuracie mäso, moravské mäso, prosciutto, slanina, kebab mäso, niva, encián, mozzarella, parmezán'
    },
    {
        heading: '50g',
        postHeading: formatPrice(PRODUCT_PRICES.pizza_topings.others / 100),
        description: 'Olivy, kukurica, feferóny, vajcia, paradajky, paprika, chilli, šampiňóny, baranie rohy, cibuľa, rukola, ananás, brokolica, med'
    },
]

export const SPECIALS = [
    {
        heading: 'Domáce pečené údené koleno',
        postHeading: '700g - ' + formatPrice(PRODUCT_PRICES.specials.koleno / 100) + ' + za každých 100g doblok ' + formatPrice(PRODUCT_PRICES.specials.naviac / 100),
        description: 'Chren, horčica, feferóny, uhorky, baranie rohy, pizza chlieb - 1,10'
    },
    {
        heading: 'Denko pre partiu',
        postHeading: '1000g - ' + formatPrice(PRODUCT_PRICES.specials.denko_partia / 100),
        description: 'Bravčové rebrá 750g, kuracie krídla 10ks, feferóny, kyslé uhorky, dressing, pizza chlieb - 1,7'
    },
    {
        heading: 'Denko pre partiu ŠPECIÁL',
        postHeading: '2000g - ' + formatPrice(PRODUCT_PRICES.specials.denko_partia_special / 100),
        description: 'Bravčové rebrá 750g, kuracie krídla 10ks, kuracie nugetky 200g, kurací špíz 200g, hranolky 400g, baranie rohy, feferóny, kyslé uhorky, dressing, pizza chlieb - 1,7'
    },
    {
        heading: 'Denko pre partiu s údeným kolenom',
        postHeading: '2200g - ' + formatPrice(PRODUCT_PRICES.specials.denko_koleno / 100),
        description: 'Bravčové rebrá 750g, kuracie krídla 10ks, údene koleno 600g, americké zemiaky 300g, chren, horčica, feferóny, kyslé uhorky, dressing, pizza chlieb - 1,7'
    },
    {
        heading: 'Grilované rebrá',
        postHeading: '500g - ' + formatPrice(PRODUCT_PRICES.specials.rebra / 100),
        description: 'Baranie rohy, feferóny, tzatziky, pizza chlieb - 1,7'
    },
    {
        heading: 'Grilované krídielka',
        postHeading: '1ks - ' + formatPrice(PRODUCT_PRICES.specials.kridielka / 100),
        description: 'Minimálna objednávka 5ks'
    },
    {
        heading: 'Grilovaná klobása',
        postHeading: '150g - ' + formatPrice(PRODUCT_PRICES.specials.klobasa / 100),
        description: 'Chren, horčica - 1,10'
    },
    {
        heading: 'Utopenec',
        postHeading: '1ks - ' + formatPrice(PRODUCT_PRICES.specials.utopenec/ 100),
        description: 'Chlieb - 1'
    },
]

export const HOT_FOOD = [
    {
        heading: 'Kuracie špízy',
        postHeading: '150g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.spizy / 100),
        description: ''
    },
    {
        heading: 'Kuracie nugetky',
        postHeading: '100g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.nugetky / 100),
        description: 'Alergény: 1,3'
    },
    {
        heading: 'Kuracie vyprážané obaľované krídla',
        postHeading: '150g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.kridla_vyprazane / 100),
        description: ''
    },
    {
        heading: 'Cestoviny s kuracím mäsom',
        postHeading: '450g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.cestoviny_maso / 100),
        description: 'Drvené paradajky, kuracie mäso, smotana, parmezán. Alergény: 1,3,6,7,9'
    },
    {
        heading: 'Cestoviny s nivou a kuracím mäsom',
        postHeading: '480g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.cestoviny_niva / 100),
        description: 'Niva, kuracie mäso, smotana, parmezán. Alergény: 1,3,6,7,9'
    },
    {
        heading: 'Cestoviny so šunkou a kukuricou',
        postHeading: '150g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.cestoviny_sunka / 100),
        description: 'Drvené paradajky, šunka, kukurica, smotana, parmezán. Alergény: 1,3,6,7,9'
    },
    {
        heading: 'Vyprážaný syr',
        postHeading: '125g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.syr / 100),
        description: 'Alergény: 1,3,7'
    },
    {
        heading: 'Vyprážaný syr so šunkou',
        postHeading: '115g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.syr_sunka / 100),
        description: 'Alergény: 1,3,7'
    },
]

export const DESSERTS = [
    {
        heading: 'Jablková štrúdľa',
        postHeading: '100g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.jablkova_strudla / 100),
        description: 'Alergény: 1,3,8'
    },
    {
        heading: 'Makovo višňová štrúdľa',
        postHeading: '100g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.makovo_visnova_strudla / 100),
        description: 'Alergény: 1,3'
    },
]

export const TOPPINGS_SIDES = [
    {
        heading: 'Syrová omáčka',
        postHeading: '100g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.omacka_syr / 100),
        description: ''
    },
    {
        heading: 'Tzatziky',
        postHeading: '50g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.omacka_tzatziky / 100),
        description: ''
    },
    {
        heading: 'Tatárska omáčka, Kečup, Cesnakový dressing, Sweet chilli',
        postHeading: '50g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.omacka_ostatne / 100),
        description: ''
    },
    {
        heading: 'Hranolky, Zemiakové lupene, Americké zemiaky',
        postHeading: '150g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.hranolky / 100),
        description: ''
    },
    {
        heading: 'Batatové hranolky',
        postHeading: '150g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.batatove_hranolky / 100),
        description: ''
    },
    {
        heading: 'Pizza chlieb',
        postHeading: '330g - ' + formatPrice(PRODUCT_PRICES.hot_topping_desserts.pizza_chlieb / 100),
        description: ''
    },
]

