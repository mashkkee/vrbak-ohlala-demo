/* Meni restorana Vrbak Oh la la.
   Izvor: meni objavljen na Instagram profilu @vrbak_ohlala (objava od 8.2.2024).
   Format stavke: [naziv, cena u RSD, opis (sr), opis (en), oznake]  oznake: v = vegetarijansko, s = preporuka */
window.MENU = [
  { id: "salate", sr: "Salate", en: "Salads", items: [
    ["Grčka", 400, "zelena salata, paradajz, krastavac, masline, feta sir, crveni luk, peršun, origano, maslinovo ulje", "green salad, tomato, cucumber, olives, feta cheese, red onion, parsley, olive oil", "v"],
    ["Šopska", 300, "paradajz, krastavac, feta sir, ljuta papričica, crvena i zelena paprika", "tomato, cucumber, feta cheese, hot pepper, mixed peppers", "v"],
    ["Italijanska salata", 500, "mešana zelena salata, rukola, čeri paradajz, crveni luk, mocarela, ekstra devičansko maslinovo ulje", "mixed salad, arugula, cherry tomatoes, red onion, mozzarella, extra virgin olive oil", "v"],
    ["Kapreze", 500, "mocarela, paradajz, svež bosiljak, balzamiko sirće, maslinovo ulje", "mozzarella, tomato, fresh basil, balsamic vinegar, olive oil", "v"]
  ]},
  { id: "obrok-salate", sr: "Obrok salate", en: "Meal salads", items: [
    ["Calamari Dalmacija", 800, "pohovane lignje na podlozi od mešane zelene salate i čeri paradajza", "fried squid on mixed green salad with cherry tomato", ""],
    ["Cezar", 500, "mešana zelena salata, paradajz, krastavac, piletina, jaje, parmezan, tost hleb, francuski dresing", "mixed green salad, tomato, cucumber, chicken, egg, parmesan, toast, french dressing", "s"],
    ["Ocean", 950, "rukola, mešana zelena salata, čeri paradajz, grilovani gambori, dresing, limun, maslinovo ulje", "arugula, mixed green salad, cherry tomato, grilled shrimp, lemon dressing, olive oil", ""],
    ["Hawaii", 500, "mešana zelena salata, paradajz, krastavac, piletina u kari sosu, ananas, jaje, francuski dresing", "mixed green salad, tomato, cucumber, chicken in curry sauce, pineapple, egg, french dressing", ""],
    ["Beef salad", 800, "mešana zelena salata, rukola, čeri paradajz, biftek, masline, parmezan, listići badema, maslinovo ulje, kukuruz šećerac", "mixed green salad, arugula, cherry tomato, steak, olives, parmesan, sliced almonds, olive oil, corn", ""],
    ["Nicoise", 500, "mešana zelena salata, čeri paradajz, rotkvice, masline, tunjevina, kuvano jaje, crveni luk, preliv od limuna", "mixed green salad, cherry tomato, radish, olives, tuna, boiled egg, red onion, lemon dressing", ""]
  ]},
  { id: "glavna-jela", sr: "Glavna jela", en: "Main courses", items: [
    ["„New York” steak", 1520, "teleći ramstek, rukola, parmezan, krispi čips, pršuta", "veal rump steak, arugula, parmesan, crispy chips, prosciutto", "s"],
    ["„La steak Parisien”", 1520, "juneći biftek, francuski pomfrit, sos „Maison”", "beef steak, french fries, “Maison” sauce", ""],
    ["Steak „Surf and turf”", 1800, "juneći biftek, grilovane tikvice, krompir pire, gambori", "beef steak, grilled zucchini, mashed potato, shrimp", ""],
    ["Diplomatska plata", 3000, "teleći ramstek, juneći biftek, jagnjetina, piletina, teleće kobasice, ćevapi", "veal steak, beef steak, lamb, chicken, veal sausage, ćevapi", ""],
    ["Medaljoni", 1800, "teleći file, krompir pire, kremasti sos od šampinjona", "filet mignon, mashed potato, creamy mushroom sauce", ""],
    ["Jagnjeći kotleti „Maison”", 1500, "špargle, šargarepa, krompir pire", "lamb chops, asparagus, carrot, mashed potato", ""],
    ["Teletina na kajmaku", 1100, "krompir, šargarepa", "veal with kaymak, potato, carrot", ""],
    ["Šatobrijan (za dve osobe)", 3500, "teleći biftek, tost hleb, tri vrste sosa, krompir salata", "chateaubriand for two, toast, three sauces, potato salad", ""]
  ]},
  { id: "rostilj", sr: "Jela sa roštilja", en: "From the grill", items: [
    ["Ćevap (komad)", 90, "", "traditional grilled sausage, per piece", ""],
    ["Domaća teleća viršla", 400, "", "homemade veal sausages", ""],
    ["Pljeskavica", 400, "", "traditional beef patty", ""]
  ]},
  { id: "piletina", sr: "Piletina i ćuretina", en: "Chicken & turkey", items: [
    ["Cordon Bleu", 600, "kremasti sos, grilovano povrće, kroketi", "cream sauce, grilled vegetables, croquettes", ""],
    ["Piletina „Wiena”", 580, "panirani pileći file, pomfrit, tartar sos, miks salata", "breaded chicken fillet, french fries, tartar sauce, mixed salad", ""],
    ["Piletina „Gauda”", 600, "grilovani pileći file, kremasti sos, krompir, sir gauda", "grilled chicken fillet, cream sauce, potatoes, gouda cheese", ""],
    ["Vrbak piletina", 580, "sečena piletina, sezonsko povrće, soja sos, čili sos, riža", "sliced chicken, seasonal vegetables, soy sauce, chilli sauce, rice", "s"],
    ["Pileće rolnice", 740, "pileći file punjen pršutom i edamerom, andaluzijski sos, kroketi od krompira", "chicken fillet filled with prosciutto and edam, Andalusian sauce, potato croquettes", ""],
    ["Piletina „Tokio” u sosu od bundeve", 620, "grilovani pileći file, brokoli, sos od semena bundeve, riža", "grilled chicken fillet, broccoli, pumpkin seed sauce, rice", ""],
    ["Parma Chicken", 640, "pileći file, pršuta, edamer, pistaći, andaluzijski sos, američki krompir, parmezan", "chicken fillet, prosciutto, edam, pistachio, Andalusian sauce, baked potato wedges, parmesan", ""],
    ["Piletina u sosu", 560, "seckana piletina, pečurke, kremasti sos, riža, salata", "sliced chicken, creamy mushroom sauce, rice, salad", ""],
    ["Ćuretina sa njokama", 750, "kremasti sos od plavog sira", "turkey with gnocchi, blue cheese cream sauce", ""]
  ]},
  { id: "paste", sr: "Paste", en: "Pasta", items: [
    ["Pene „Al Fredo”", 530, "piletina, pečurke, parmezan", "chicken, mushroom, parmesan", ""],
    ["Pene „4 vrste sira”", 630, "gorgonzola, feta, dimljeni sir, parmezan", "gorgonzola, feta, smoked cheese, parmesan", "v"],
    ["Pene „Al Pesto”", 500, "pesto sos, parmezan, čeri paradajz, masline", "pesto sauce, parmesan, cherry tomato, olives", "v"],
    ["Bolognese", 530, "bolonjeze sos, mocarela, čeri paradajz", "bolognese sauce, mozzarella, cherry tomato", ""],
    ["Taljatele Cardinal", 1150, "juneći biftek u umaku od tartufa, parmezan, orašasti plodovi", "beef steak in truffle sauce, parmesan, mixed nuts", "s"],
    ["Taljatele „Carbonara”", 530, "pršuta, pileća prsa, parmezan, kremasti sos", "prosciutto, chicken breast, parmesan, cream sauce", ""],
    ["Arabijata", 450, "napolitana sos, ljuta papričica, čeri paradajz", "napolitana sauce, hot pepper, cherry tomatoes", "v"],
    ["Lazanja", 580, "bolonjeze i bešamel sos", "bolognese and béchamel sauce", ""]
  ]},
  { id: "riba", sr: "Riba i morski plodovi", en: "Fish & seafood", items: [
    ["Pastrmka", 670, "file pastrmke, grilovano povrće", "trout fillet, grilled vegetables", ""],
    ["Oslić", 500, "file oslića, tartar sos, pomfrit, salata", "hake fillet, tartar sauce, french fries, salad", ""],
    ["Losos", 1300, "file lososa, grilovane tikvice, krompir pire, citrus sos, nar", "salmon fillet, grilled zucchini, mashed potato, citrus sauce, pomegranate", "s"],
    ["Tuna steak", 1500, "wok povrće, soja sos", "wok vegetables, soy sauce", ""]
  ]},
  { id: "pizza", sr: "Pizza", en: "Pizza", items: [
    ["Margarita", 480, "pelat, sir, origano", "tomato sauce, cheese, oregano", "v"],
    ["Fungi", 570, "pelat, sir, pečurke, origano", "tomato sauce, cheese, mushrooms, oregano", "v"],
    ["Capricciosa", 600, "pelat, sir, sudžuk, pršuta, pečurke, origano", "tomato sauce, cheese, sujuk, prosciutto, mushrooms, oregano", "s"],
    ["Vegetariana", 600, "grilovano sezonsko povrće, pelat, sir, origano", "tomato sauce, cheese, grilled seasonal vegetables, oregano", "v"],
    ["Calzone", 600, "pelat, sir, sudžuk, pršuta, pečurke, origano, pavlaka", "tomato sauce, sujuk, prosciutto, mushrooms, oregano, sour cream", ""],
    ["Quattro formaggi", 650, "četiri vrste sira", "four cheeses", "v"],
    ["Quattro stagioni", 600, "četiri vrste mesa", "four kinds of meat", ""],
    ["Tono", 600, "pelat, sir, tunjevina, masline, origano", "tomato sauce, cheese, tuna, olives, oregano", ""],
    ["Frutti di mare", 800, "pelat, sir, morski plodovi", "tomato sauce, cheese, seafood", ""],
    ["Mozzarella pizza", 650, "pelat, sir, mocarela", "tomato sauce, cheese, fresh mozzarella", "v"],
    ["Kids pizza", 400, "pelat, sir, pileća prsa", "tomato sauce, cheese, chicken breast", ""]
  ]},
  { id: "fast-food", sr: "Burgeri i sendviči", en: "Burgers & sandwiches", items: [
    ["Burger Američki", 470, "američki krompir, čedar sir, paradajz salata, burger sos", "baked potato wedges, cheddar, tomato salad, burger sauce", "s"],
    ["Roast beef", 580, "biftek taljata, tartar sos, zelena salata, paradajz, pomfrit", "beef steak sandwich, tartar sauce, green salad, tomato, french fries", ""],
    ["Tortilja „Curry chicken”", 470, "piletina u kari sosu, miks zelenih salata, paradajz, kukuruz šećerac", "chicken in curry sauce, mixed green salad, tomato, corn", ""],
    ["Sendvič „Wiena”", 470, "panirani pileći file, tartar sos, zelena salata, paradajz, krastavac", "breaded chicken fillet, tartar sauce, green salad, tomato, cucumber", ""],
    ["Hot dog", 370, "baget, senf, pomfrit", "served in a baguette, mustard, french fries", ""],
    ["Roll sendvič", 370, "pršuta, sudžuk, pileća prsa, trapist sir", "prosciutto, sujuk, chicken breast, Trappist cheese", ""]
  ]},
  { id: "prilozi", sr: "Prilozi", en: "Sides", items: [
    ["Pomfrit", 200, "", "french fries", "v"],
    ["Američki krompir", 250, "", "baked potato wedges", "v"],
    ["Riža", 50, "", "rice", "v"],
    ["Masline", 50, "", "olives", "v"],
    ["Feta sir", 100, "", "feta cheese", "v"],
    ["Kajmak", 200, "", "kaymak", "v"],
    ["Jogurt", 90, "", "yogurt", "v"],
    ["Mleko", 60, "", "milk", "v"],
    ["Majonez / kečap", 10, "", "mayonnaise / ketchup", "v"]
  ]},
  { id: "desert", sr: "Dezerti", en: "Desserts", items: [
    ["Tiramisu", 350, "", "", "s"], ["Cheesecake", 350, "", "", ""], ["Monoporcija", 350, "", "single-portion cake", ""],
    ["Choco plazma", 350, "", "", ""], ["Twiks", 350, "", "", ""], ["Jagoda jogurt", 350, "", "strawberry yogurt cake", ""],
    ["Mango", 350, "", "", ""], ["Kinder bueno", 350, "", "", ""], ["Milki – malina", 350, "", "milky raspberry cake", ""],
    ["Bajadera", 350, "", "", ""], ["Nugat torta", 350, "", "nougat cake", ""], ["Black cherry", 350, "", "", ""],
    ["Lady forest", 350, "", "", ""], ["Tropical", 350, "", "", ""], ["Trileće", 350, "", "tres leches cake", "s"],
    ["Palačinka", 350, "nutela i plazma ili eurokrem i plazma", "pancake with Nutella or Eurocrem and Plazma biscuit", ""]
  ]},
  { id: "pice", sr: "Piće", en: "Drinks", items: [
    ["Negazirana voda 0,33 / 0,75", "140 / 280", "", "still water", ""],
    ["Gazirana voda 0,33 / 0,75", "140 / 280", "", "sparkling water", ""],
    ["Ice tea 0,25", 190, "", "", ""], ["Coca-Cola Zero 0,25", 190, "", "", ""],
    ["Schweppes 0,25", 190, "Tonic, Bitter lemon, Mojito", "Tonic, Bitter lemon, Mojito", ""],
    ["Sprite 0,25", 190, "", "", ""], ["Fanta 0,25", 190, "", "", ""], ["Cockta 0,25", 190, "", "", ""],
    ["Limona 0,25", 200, "", "", ""], ["Orangina 0,25", 200, "crvena ili žuta", "red or yellow", ""],
    ["Red Bull 0,25", 350, "", "", ""], ["Guarana 0,25", 200, "", "", ""], ["Energis 0,25", 200, "", "", ""],
    ["Voćni sok 0,25", 190, "borovnica, breskva, narandža, jabuka, jagoda", "blueberry, peach, orange, apple, strawberry", ""],
    ["Multivitamin 0,25", 190, "", "", ""], ["Cedevita 0,25", 190, "", "", ""], ["Remix Knjaz 0,25", 190, "", "", ""],
    ["Campi sokovi", 200, "", "Campi juices", ""]
  ]}
];
