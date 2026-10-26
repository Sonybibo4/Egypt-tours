
document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();
var v=function(i){return document.getElementById(i).value};
var isEn=document.documentElement.lang!=='ar';var msg=isEn?'Hello, I would like to book: '+v('t')+'\nName: '+v('n')+'\nDate: '+v('d')+'\nPeople: '+v('c'):'مرحبًا، أريد حجز: '+v('t')+'\nالاسم: '+v('n')+'\nالتاريخ: '+v('d')+'\nعدد الأفراد: '+v('c');
window.open('https://wa.me/201043608451?text='+encodeURIComponent(msg),'_blank','noopener');
});
var EN={'أمان في كل خطوة':'Safety at every step','سيارات حديثة مكيفة وسائقون محترفون ومرشد معك طوال الرحلة، لتستمتع براحة بال كاملة.':'Modern air-conditioned cars, professional drivers and a guide with you throughout, so you can relax.','دقة في المواعيد':'Punctual, every time','نصل قبل موعدك، ونلتزم بالبرنامج المتفق عليه من أول لحظة حتى العودة.':'We arrive before your pickup time and stick to the agreed schedule from start to finish.','واتساب':'WhatsApp','العنوان':'Address','تابعنا':'Follow us','شارع الهرم، الجيزة، مصر':'Pyramids Road, Giza, Egypt','شوف كل التقييمات على Tripadvisor':'See all reviews on Tripadvisor','آراء المسافرين':'What travelers say','من تقييمات ضيوفنا بعد الرحلة.':'From guest reviews after their trip.','الشروق عند الهرم كان أجمل ما في رحلتنا لمصر. المرشد عرف كل ركن وأخذنا قبل الزحام.':'Sunrise at the Pyramid was the best part of our trip to Egypt. The guide knew every corner and got us there before the crowds.','سارة، مانشستر':'Sarah, Manchester','سعر واضح من الأول ولا مفاجآت. والسيارة نضيفة ومكيفة والسائق ملتزم بالمواعيد.':'Clear price from the start, no surprises. The car was clean and air-conditioned and the driver was on time.','أحمد، الرياض':'Ahmed, Riyadh','رحنا سقارة ودهشور مع الأولاد، والشرح كان بسيط وممتع للصغار قبل الكبار.':'We visited Saqqara and Dahshur with the kids. The explanation was simple and fun for the little ones as well as the adults.','ماري ولوران، ليون':'Marie & Laurent, Lyon','الرحلات':'Tours','لماذا نحن':'Why us','احجز':'Book','الأهرامات بعيون أهل الجيزة':'The Pyramids, through the eyes of Giza','رحلات منظمة مع مرشدين مصريين مرخّصين، من الهرم الأكبر إلى المتحف المصري الكبير.':'Guided trips with licensed Egyptian guides, from the Great Pyramid to the Grand Egyptian Museum.','احجز رحلتك':'Book your trip','شوف الرحلات':'See the tours','رحلاتنا':'Our tours','كل الأسعار للفرد وتشمل المواصلات الخاصة والمرشد. تذاكر الدخول تُحسب حسب الأسعار الرسمية.':'Prices are per person and include private transport and a guide. Entry tickets are charged at official rates.','شروق الشمس عند الهرم الأكبر':'Sunrise at the Great Pyramid','٤ ساعات – قبل الزحام – مجموعات صغيرة':'4 hours – before the crowds – small groups','نبدأ قبل فتح الأبواب بقليل لنقف أمام الأهرامات الثلاثة والهدوء ما زال يملأ المكان، ثم نكمل بمنظر بانوراما وأبو الهول.':'We arrive just before the gates open and stand before the three pyramids while it is still quiet, then continue to the panorama point and the Sphinx.','من ٩٥٠ جنيه':'From EGP 950','جولة الأهرامات وأبو الهول':'Pyramids & Sphinx tour','٣ ساعات – كل يوم':'3 hours – daily','زيارة الهرم الأكبر ومعبد الوادي وأبو الهول مع شرح تاريخي مبسط.':'Visit the Great Pyramid, the Valley Temple and the Sphinx with a clear historical overview.','من ٧٥٠ جنيه':'From EGP 750','المتحف المصري الكبير':'Grand Egyptian Museum','٤ ساعات':'4 hours','رحلة داخل المتحف المجاور للأهرامات، بما فيها قاعة توت عنخ آمون.':'A visit inside the museum beside the Pyramids, including the Tutankhamun galleries.','من ١٬٢٠٠ جنيه':'From EGP 1,200','سقارة ومنف ودهشور':'Saqqara, Memphis & Dahshur','يوم كامل':'Full day','هرم زوسر المدرّج والهرم المنحني، وغداء محلي في الطريق.':'Djoser’s Step Pyramid and the Bent Pyramid, with a local lunch on the way.','من ١٬٨٠٠ جنيه':'From EGP 1,800','جمل وخيل على هضبة الجيزة':'Camel & horse ride on the Giza Plateau','ساعة – عند الغروب':'1 hour – at sunset','ركوب مع مرافق من الشركة وأسعار ثابتة متفق عليها مسبقًا.':'Rides with a company escort and fixed prices agreed in advance.','من ٤٥٠ جنيه':'From EGP 450','لماذا Benben Tours':'Why Benben Tours','نشتغل في الهضبة كل يوم، ونعرف كيف تكون الزيارة مريحة.':'We work on the plateau every day and know how to make the visit comfortable.','مرشدون مرخّصون':'Licensed guides','يتحدثون العربية والإنجليزية والفرنسية والألمانية.':'Speaking Arabic, English, French and German.','سعر واضح':'Clear pricing','ما تدفعه وقت الحجز هو ما تدفعه بالضبط.':'What you pay at booking is exactly what you pay.','مواصلات خاصة':'Private transport','سيارة مكيفة من الفندق وإليه، في القاهرة والجيزة.':'Air-conditioned car to and from your hotel in Cairo and Giza.','مجموعات صغيرة':'Small groups','حتى ١٠ أفراد لتسمع الشرح وتأخذ وقتك في الصور.':'Up to 10 people, so you hear the guide and have time for photos.','اكتب بياناتك وسنكمل معك التأكيد على واتساب خلال دقائق.':'Fill in your details and we’ll confirm on WhatsApp within minutes.','الاسم':'Name','الرحلة':'Tour','التاريخ':'Date','عدد الأفراد':'Number of people','أرسل الطلب على واتساب':'Send request on WhatsApp','© Benben Tours – شارع الهرم، الجيزة، مصر':'© Benben Tours – Pyramids Road, Giza, Egypt'};
(function(){
function T(a,e){EN[a]=e;return a}
function E(s){return s.replace(/&/g,'&amp;')}
function d20(p){return Math.round(p*0.8)}
var C=[70,45,30,25],
PK={f:T('سيارة + مرشد + غداء + تذاكر','Car + guide + lunch + tickets'),l:T('سيارة + مرشد + غداء','Car + guide + lunch'),c:T('سيارة خاصة فقط','Private car only')},
GR=[T('فرد واحد','Single person'),T('2–5 أفراد','2–5 people'),T('6 أفراد','6 people'),T('7 أفراد فأكثر','7+ people')],
DR=[T('ساعة','1 hour'),T('ساعة ونصف','1.5 hours'),T('ساعتان','2 hours')],
PP=T('جولة خاصة','Private tour'),
D=[
['أهرامات الجيزة وسقارة ومنف','Giza Pyramids, Sakkara & Memphis','الأهرامات وأبو الهول ومعبد الوادي مع إطلالة بانورامية، ثم أهرامات سقارة وتمثال رمسيس الثاني في منف.','Giza Pyramids, Sphinx and Valley Temple with a panorama view, then Sakkara Pyramids and the Ramses II statue in Memphis.','8 ساعات','8 hours','g',{f:[130,100,90,85],l:[110,85,75,70],c:C}],
['أهرامات الجيزة والمتحف المصري','Giza Pyramids & Egyptian Museum','الأهرامات الثلاثة وأبو الهول، ثم المتحف المصري مع القناع الذهبي وتابوت توت عنخ آمون.','The three Giza Pyramids and the Sphinx, then the Egyptian Museum with Tutankhamun’s golden mask and coffin.','8 ساعات','8 hours','g',{f:[115,95,85,75],l:[100,80,70,65],c:C}],
['المتحف المصري والقلعة والقاهرة القبطية','Egyptian Museum, Citadel & Coptic Cairo','المتحف المصري وقلعة صلاح الدين ومسجد محمد علي والكنيسة المعلقة.','The Egyptian Museum, Saladin Citadel, Mohamed Ali Mosque and the Hanging Church.','8 ساعات','8 hours','g',{f:[115,95,85,75],l:[100,80,70,65],c:C}],
['ركوب الجمال أو الخيل','Camel or Horse Riding','جولة على الجمل أو الحصان حول الأهرامات وقت الشروق. السعر لا يشمل تذكرة الدخول.','Camel or horse ride around the Pyramids at sunrise. The price excludes the entry ticket.','من ساعة إلى ساعتين','1–2 hours','d',{x:[25,35,45]}],
['عشاء على النيل','Nile Dinner Cruise','عشاء على النيل مع رقص شرقي وعرض تنورة، وتوصيل بسيارة خاصة من فندقك.','Dinner cruise on the Nile with belly dancing and Tanoura shows, with private car transfers from your hotel.','3 ساعات','3 hours','g',{x:[80,65,50,45]},'عشاء + عروض + سيارة خاصة','Dinner + shows + private car'],
['الإسكندرية','Alexandria','قلعة قايتباي والكتاكومب ومكتبة الإسكندرية وعمود السواري.','Qaitbay Citadel, the Catacombs, the Library of Alexandria and Pompey’s Pillar.','8 ساعات','8 hours','g',{f:[170,125,105,95],l:[155,110,90,80],c:C}],
['مبيت في الواحات البحرية والصحراء البيضاء','Overnight Bahariya Oasis & White Desert','الصحراء السوداء والبيضاء وجبل الكريستال والعيون الساخنة والباردة، مع تخييم في الصحراء البيضاء.','Black and White Desert, Crystal Mountain, hot and cold springs, with camping in the White Desert.','مبيت','Overnight','g',{x:[300,210,170,130]},'سيارة + مرشد + وجبات','Car + guide + meals'],
['كواد بايك (بجي)','Quad Bike (Buggy)','قيادة كواد بايك أو بجي في صحراء الجيزة عند الغروب بإطلالة على الأهرامات. رسوم الدخول غير مشمولة.','Quad bike or buggy ride in the Giza desert at sunset with Pyramids views. Entrance fees are not included.','من ساعة إلى ساعتين','1–2 hours','d',{x:[30,40,50]}],
['متحف الحضارة وخان الخليلي','Museum of Civilization & Market','المتحف القومي للحضارة المصرية وقصر عابدين وسوق خان الخليلي في القاهرة التاريخية.','The National Museum of Egyptian Civilization, Abdeen Palace and Khan El Khalili market in historic Cairo.','8 ساعات','8 hours','g',{f:[100,80,70,60],l:[90,75,60,50],c:C}],
['البر الشرقي بالأقصر','East Bank in Luxor','معبد الكرنك ومعابد الأقصر مع مرشد متخصص في الآثار المصرية.','Karnak Temple and the Luxor Temples with a private Egyptologist guide.','4 ساعات','4 hours','g',{f:[140,125,100,85],l:[120,100,80,65],c:C}],
['البر الغربي بالأقصر','West Bank in Luxor','وادي الملوك ومعبد الملكة حتشبسوت على البر الغربي.','The Valley of the Kings and the temple of Queen Hatshepsut on the West Bank.','4 ساعات','4 hours','g',{f:[155,120,105,90],l:[135,100,85,70],c:C}],
['رحلة بالون هوائي في الأقصر','Hot Air Balloon Ride in Luxor','رحلة بالون هوائي فوق الأقصر، أكبر متحف مفتوح في العالم، مع النقل من فندقك.','A hot air balloon ride over Luxor, the biggest open-air museum, with transfers from your hotel.','30–45 دقيقة','30–45 min','g',{x:[80,70,60,55]},'سيارة خاصة','Private car'],
['البر الشرقي والغربي – يوم كامل','East & West Bank – Full Day','الكرنك ومعبد الأقصر ووادي الملوك ومعبد حتشبسوت في يوم واحد.','Karnak, Luxor Temple, the Valley of the Kings and Hatshepsut Temple in a single day.','6–8 ساعات','6–8 hours','g',{f:[205,165,150,135],l:[185,145,130,115],c:C}],
['أبو سمبل','Abu Simbel','معبدا أبو سمبل المنحوتان في الصخر: معبد رمسيس الثاني ومعبد الملكة نفرتاري.','The two rock-cut temples of Abu Simbel: Ramses II and Queen Nefertari.','9 ساعات','9 hours','g',{f:[240,170,140,130],l:[220,150,110,100],c:C}],
['تجهيز مناسبات على سطح بإطلالة الأهرامات','Rooftop Events with a Pyramids View','ديكور أعياد الميلاد والخطوبة والمناسبات، عشاء رومانسي، تصوير احترافي وباقات مخصصة.','Decor for birthdays, proposals and events, candlelit dinners, professional photography and custom packages.','مناسبات خاصة','Special events','q',{}]
],
BD=T('خصم 20%','20% off'),FR=T('من','From'),VP=T('عرض الأسعار','View prices'),PR=T('للفرد','Per person'),
g=document.getElementById('tg'),out='';
document.querySelector('#tours .lead').textContent=T('الأسعار بالدولار الأمريكي للفرد، بعد خصم 20%. الغداء والتذاكر حسب الباقة المختارة، والإكرامية غير مشمولة.','Prices are per person in US dollars, after a 20% discount. Lunch and tickets depend on the package you choose; tips are not included.');
D.forEach(function(d){
var t=T(d[0],d[1]),ds=T(d[2],d[3]),k=d[6],pr=d[7],
mt=k==='q'?T('مناسبات خاصة','Special events'):T(d[4]+' – جولة خاصة',d[5]+' – Private tour'),
s='<article class="tour">'+(k==='q'?'':'<span class="bd">'+BD+'</span>')+'<h3>'+E(t)+'</h3><div class="meta">'+E(mt)+'</div><p>'+E(ds)+'</p>';
if(k==='q'){s+='<div class="pf"><b>'+T('السعر حسب الطلب','Price on request')+'</b></div>'}
else{
var keys=Object.keys(pr),rows=k==='d'?DR:GR,all=[];
keys.forEach(function(x){if(x!=='c'||keys.length===1)all=all.concat(pr[x])});
var mn=Math.min.apply(null,all);
s+='<div class="pf"><small>'+FR+'</small><b>$'+d20(mn)+'</b><s>$'+mn+'</s></div><details><summary>'+VP+'</summary><div class="tw"><table><tr><th></th>';
keys.forEach(function(x){s+='<th>'+E(x==='x'?(d[8]?T(d[8],d[9]):PR):PK[x])+'</th>'});
s+='</tr>';
rows.forEach(function(r,i){s+='<tr><th>'+r+'</th>';keys.forEach(function(x){var p=pr[x][i];s+='<td><s>$'+p+'</s><b>$'+d20(p)+'</b></td>'});s+='</tr>'});
s+='</table></div></details>'}
out+=s+'</article>'});
g.innerHTML=out;
document.getElementById('t').innerHTML=D.map(function(d){return '<option>'+E(d[0])+'</option>'}).join('');
})();
(function(){
function T(a,e){EN[a]=e;return a}
function E(s){return s.replace(/&/g,'&amp;')}
T('خدمات إضافية','Extra services');T('أسعار الخدمات بالدولار الأمريكي.','Service prices are in US dollars.');
var S=[
['شريحة إنترنت','SIM Card','شريحة بيانات بسعة 20 جيجابايت.','A SIM card with 20 GB of data.',[['للشريحة','Per SIM',20]]],
['تأجير سيارة مع سائق','Car Rental with Driver','داخل الجيزة والقاهرة فقط، بحد أقصى 4 وجهات.','Giza and Cairo only, up to 4 destinations.',[['يوم كامل (8 ساعات)','Full day (8 hours)',80],['نصف يوم (4 ساعات)','Half day (4 hours)',60]]],
['استقبال من المطار','Airport Pick-up','سيارة خاصة من المطار. أرسل لنا رقم رحلتك.','Private car from the airport. Please send us your flight number.',[['سيارة خاصة','Private car',25],['سيارة كبيرة','Big car',35]]]
],o='';
S.forEach(function(s){
o+='<article class="tour"><h3>'+E(T(s[0],s[1]))+'</h3><p>'+E(T(s[2],s[3]))+'</p>'+s[4].map(function(r,i){return '<div class="pf"'+''+'><small>'+E(T(r[0],r[1]))+'</small><b>$'+r[2]+'</b></div>'}).join('')+'</article>'});
document.getElementById('sg').innerHTML=o;
})();
var nodes=[],orig=new Map(),en=false,T0=document.title,w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
while(w.nextNode()){var nd=w.currentNode;if(nd.parentNode.tagName!=='SCRIPT'&&nd.nodeValue.trim()){nodes.push(nd);orig.set(nd,nd.nodeValue)}}
var TR={"Safety at every step":["La sécurité à chaque étape","Sicherheit bei jedem Schritt","Seguridad en cada paso"],"Modern air-conditioned cars, professional drivers and a guide with you throughout, so you can relax.":["Voitures modernes et climatisées, chauffeurs professionnels et un guide à vos côtés tout au long du trajet, pour voyager l’esprit tranquille.","Moderne klimatisierte Fahrzeuge, professionelle Fahrer und ein Guide, der Sie die ganze Zeit begleitet – damit Sie sich entspannen können.","Coches modernos con aire acondicionado, conductores profesionales y un guía a tu lado todo el viaje, para que te relajes."],"Punctual, every time":["Ponctuels, à chaque fois","Immer pünktlich","Puntuales, siempre"],"We arrive before your pickup time and stick to the agreed schedule from start to finish.":["Nous arrivons avant l’heure de prise en charge et respectons le programme convenu du début à la fin.","Wir sind vor der Abholzeit da und halten den vereinbarten Zeitplan von Anfang bis Ende ein.","Llegamos antes de la hora de recogida y respetamos el programa acordado de principio a fin."],
"Tours":["Circuits","Touren","Excursiones"],
"Why us":["Pourquoi nous","Warum wir","Por qué nosotros"],
"Book":["Réserver","Buchen","Reservar"],
"The Pyramids, through the eyes of Giza":["Les Pyramides, vues par ceux de Gizeh","Die Pyramiden – mit den Augen von Gizeh","Las Pirámides, con los ojos de Guiza"],
"Guided trips with licensed Egyptian guides, from the Great Pyramid to the Grand Egyptian Museum.":["Excursions guidées avec des guides égyptiens agréés, de la Grande Pyramide au Grand Musée égyptien.","Geführte Touren mit lizenzierten ägyptischen Guides – von der Cheops-Pyramide bis zum Großen Ägyptischen Museum.","Excursiones guiadas con guías egipcios autorizados, desde la Gran Pirámide hasta el Gran Museo Egipcio."],
"Book your trip":["Réservez votre excursion","Tour buchen","Reserva tu excursión"],
"See the tours":["Voir les circuits","Touren ansehen","Ver las excursiones"],
"Our tours":["Nos circuits","Unsere Touren","Nuestras excursiones"],
"Prices are per person and include private transport and a guide. Entry tickets are charged at official rates.":["Prix par personne, transport privé et guide inclus. Les billets d’entrée sont facturés au tarif officiel.","Preise pro Person inkl. Privattransfer und Guide. Eintrittstickets werden zum offiziellen Preis berechnet.","Precios por persona, con transporte privado y guía incluidos. Las entradas se cobran a la tarifa oficial."],
"Sunrise at the Great Pyramid":["Lever du soleil à la Grande Pyramide","Sonnenaufgang an der Cheops-Pyramide","Amanecer en la Gran Pirámide"],
"4 hours – before the crowds – small groups":["4 h – avant la foule – petits groupes","4 Std. – vor dem Andrang – kleine Gruppen","4 horas – antes de las multitudes – grupos reducidos"],
"We arrive just before the gates open and stand before the three pyramids while it is still quiet, then continue to the panorama point and the Sphinx.":["Nous arrivons juste avant l’ouverture des portes pour contempler les trois pyramides dans le calme, puis nous poursuivons vers le point panoramique et le Sphinx.","Wir kommen kurz vor Öffnung der Tore an und stehen in der Stille vor den drei Pyramiden, danach geht es weiter zum Panoramapunkt und zur Sphinx.","Llegamos justo antes de que abran las puertas y contemplamos las tres pirámides en calma; después seguimos al mirador panorámico y la Esfinge."],
"From EGP 950":["À partir de 950 EGP","Ab 950 EGP","Desde 950 EGP"],
"Pyramids & Sphinx tour":["Visite des Pyramides et du Sphinx","Pyramiden- und Sphinx-Tour","Visita a las Pirámides y la Esfinge"],
"3 hours – daily":["3 h – tous les jours","3 Std. – täglich","3 horas – a diario"],
"Visit the Great Pyramid, the Valley Temple and the Sphinx with a clear historical overview.":["Visite de la Grande Pyramide, du temple de la Vallée et du Sphinx, avec une présentation historique claire.","Besuch der Cheops-Pyramide, des Taltempels und der Sphinx mit einem verständlichen historischen Überblick.","Visita a la Gran Pirámide, el Templo del Valle y la Esfinge con una explicación histórica clara."],
"From EGP 750":["À partir de 750 EGP","Ab 750 EGP","Desde 750 EGP"],
"Grand Egyptian Museum":["Grand Musée égyptien","Großes Ägyptisches Museum","Gran Museo Egipcio"],
"4 hours":["4 heures","4 Stunden","4 horas"],
"A visit inside the museum beside the Pyramids, including the Tutankhamun galleries.":["Visite du musée voisin des Pyramides, avec les salles de Toutânkhamon.","Besuch des Museums neben den Pyramiden, einschließlich der Tutanchamun-Galerien.","Visita al museo junto a las Pirámides, incluidas las salas de Tutankamón."],
"From EGP 1,200":["À partir de 1 200 EGP","Ab 1.200 EGP","Desde 1200 EGP"],
"Saqqara, Memphis & Dahshur":["Saqqarah, Memphis et Dahchour","Sakkara, Memphis & Dahschur","Saqqara, Menfis y Dahshur"],
"Full day":["Journée complète","Ganztägig","Día completo"],
"Djoser’s Step Pyramid and the Bent Pyramid, with a local lunch on the way.":["La pyramide à degrés de Djéser et la pyramide rhomboïdale, avec un déjeuner local en chemin.","Djoser-Stufenpyramide und Knickpyramide, mit einem Mittagessen unterwegs.","La pirámide escalonada de Djoser y la pirámide Romboidal, con almuerzo local en el camino."],
"From EGP 1,800":["À partir de 1 800 EGP","Ab 1.800 EGP","Desde 1800 EGP"],
"Camel & horse ride on the Giza Plateau":["Balade à dos de chameau ou de cheval sur le plateau de Gizeh","Kamel- und Pferdeausritt auf dem Gizeh-Plateau","Paseo en camello o caballo por la meseta de Guiza"],
"1 hour – at sunset":["1 h – au coucher du soleil","1 Std. – bei Sonnenuntergang","1 hora – al atardecer"],
"Rides with a company escort and fixed prices agreed in advance.":["Balades accompagnées par notre équipe, à prix fixes convenus à l’avance.","Ausritte mit Begleitung durch unser Team und vorab vereinbarten Festpreisen.","Paseos acompañados por nuestro equipo, con precios fijos acordados de antemano."],
"From EGP 450":["À partir de 450 EGP","Ab 450 EGP","Desde 450 EGP"],
"Why Benben Tours":["Pourquoi Benben Tours","Warum Benben Tours","Por qué Benben Tours"],
"We work on the plateau every day and know how to make the visit comfortable.":["Nous travaillons chaque jour sur le plateau et savons rendre la visite agréable.","Wir arbeiten jeden Tag auf dem Plateau und wissen, wie der Besuch angenehm wird.","Trabajamos en la meseta todos los días y sabemos cómo hacer la visita cómoda."],
"Licensed guides":["Guides agréés","Lizenzierte Guides","Guías autorizados"],
"Speaking Arabic, English, French and German.":["Parlant arabe, anglais, français et allemand.","Sprechen Arabisch, Englisch, Französisch und Deutsch.","Hablan árabe, inglés, francés y alemán."],
"Clear pricing":["Prix transparents","Klare Preise","Precios claros"],
"What you pay at booking is exactly what you pay.":["Ce que vous payez à la réservation est exactement ce que vous payez.","Was Sie bei der Buchung zahlen, ist genau das, was Sie zahlen.","Lo que pagas al reservar es exactamente lo que pagas."],
"Private transport":["Transport privé","Privattransfer","Transporte privado"],
"Air-conditioned car to and from your hotel in Cairo and Giza.":["Voiture climatisée aller-retour depuis votre hôtel au Caire ou à Gizeh.","Klimatisiertes Fahrzeug von und zu Ihrem Hotel in Kairo und Gizeh.","Coche con aire acondicionado desde y hasta tu hotel en El Cairo y Guiza."],
"Small groups":["Petits groupes","Kleine Gruppen","Grupos reducidos"],
"Up to 10 people, so you hear the guide and have time for photos.":["Jusqu’à 10 personnes, pour bien entendre le guide et avoir le temps de prendre des photos.","Bis zu 10 Personen – so hören Sie den Guide und haben Zeit für Fotos.","Hasta 10 personas, para oír bien al guía y tener tiempo para fotos."],
"What travelers say":["L’avis des voyageurs","Das sagen Reisende","Opiniones de viajeros"],
"Sunrise at the Pyramid was the best part of our trip to Egypt. The guide knew every corner and got us there before the crowds.":["Le lever du soleil à la pyramide a été le moment fort de notre voyage en Égypte. Le guide connaissait chaque recoin et nous a emmenés avant la foule.","Der Sonnenaufgang an der Pyramide war das Highlight unserer Ägyptenreise. Der Guide kannte jeden Winkel und brachte uns vor dem Andrang hin.","El amanecer en la pirámide fue lo mejor de nuestro viaje a Egipto. El guía conocía cada rincón y nos llevó antes de las multitudes."],
"Clear price from the start, no surprises. The car was clean and air-conditioned and the driver was on time.":["Prix clair dès le départ, aucune surprise. Voiture propre et climatisée, chauffeur ponctuel.","Von Anfang an ein klarer Preis, keine Überraschungen. Das Auto war sauber und klimatisiert, der Fahrer pünktlich.","Precio claro desde el principio, sin sorpresas. El coche estaba limpio y con aire acondicionado, y el conductor fue puntual."],
"We visited Saqqara and Dahshur with the kids. The explanation was simple and fun for the little ones as well as the adults.":["Nous avons visité Saqqarah et Dahchour avec les enfants. Les explications étaient simples et amusantes pour les petits comme pour les grands.","Wir waren mit den Kindern in Sakkara und Dahschur. Die Erklärungen waren einfach und unterhaltsam – für Kinder wie Erwachsene.","Visitamos Saqqara y Dahshur con los niños. La explicación fue sencilla y divertida, tanto para los pequeños como para los mayores."],
"Fill in your details and we’ll confirm on WhatsApp within minutes.":["Remplissez vos informations et nous confirmons sur WhatsApp en quelques minutes.","Tragen Sie Ihre Daten ein, wir bestätigen in wenigen Minuten per WhatsApp.","Rellena tus datos y te confirmamos por WhatsApp en pocos minutos."],
"Name":["Nom","Name","Nombre"],
"Tour":["Circuit","Tour","Excursión"],
"Date":["Date","Datum","Fecha"],
"Number of people":["Nombre de personnes","Anzahl der Personen","Número de personas"],
"Send request on WhatsApp":["Envoyer la demande sur WhatsApp","Anfrage per WhatsApp senden","Enviar solicitud por WhatsApp"],
"Address":["Adresse","Adresse","Dirección"],
"Follow us":["Suivez-nous","Folgen Sie uns","Síguenos"],
"Pyramids Road, Giza, Egypt":["Route des Pyramides, Gizeh, Égypte","Pyramids Road, Gizeh, Ägypten","Calle de las Pirámides, Guiza, Egipto"],
"See all reviews on Tripadvisor":["Voir tous les avis sur Tripadvisor","Alle Bewertungen auf Tripadvisor ansehen","Ver todas las opiniones en Tripadvisor"]};
var TR2={"Safety at every step":["Безопасность на каждом этапе","Sicurezza in ogni momento"],"Modern air-conditioned cars, professional drivers and a guide with you throughout, so you can relax.":["Современные автомобили с кондиционером, профессиональные водители и гид рядом на протяжении всей поездки — вам остаётся только расслабиться.","Auto moderne e climatizzate, autisti professionisti e una guida con te per tutto il viaggio, così puoi rilassarti."],"Punctual, every time":["Всегда вовремя","Puntuali, sempre"],"We arrive before your pickup time and stick to the agreed schedule from start to finish.":["Мы приезжаем до назначенного времени и придерживаемся согласованного графика от начала до конца.","Arriviamo prima dell’orario di ritiro e rispettiamo il programma concordato dall’inizio alla fine."],
"Tours":["Туры","Tour"],"Why us":["Почему мы","Perché noi"],"Book":["Забронировать","Prenota"],
"The Pyramids, through the eyes of Giza":["Пирамиды глазами жителей Гизы","Le Piramidi, con gli occhi di Giza"],
"Guided trips with licensed Egyptian guides, from the Great Pyramid to the Grand Egyptian Museum.":["Организованные поездки с лицензированными египетскими гидами: от Великой пирамиды до Большого Египетского музея.","Escursioni guidate con guide egiziane autorizzate, dalla Grande Piramide al Grande Museo Egizio."],
"Book your trip":["Забронируйте поездку","Prenota la tua escursione"],"See the tours":["Смотреть туры","Vedi le escursioni"],"Our tours":["Наши туры","Le nostre escursioni"],
"Prices are per person and include private transport and a guide. Entry tickets are charged at official rates.":["Цены указаны за человека и включают частный трансфер и гида. Входные билеты оплачиваются по официальным тарифам.","Prezzi a persona, con trasporto privato e guida inclusi. I biglietti d’ingresso sono a tariffa ufficiale."],
"Sunrise at the Great Pyramid":["Рассвет у Великой пирамиды","Alba alla Grande Piramide"],
"4 hours – before the crowds – small groups":["4 часа – до толп туристов – малые группы","4 ore – prima della folla – piccoli gruppi"],
"We arrive just before the gates open and stand before the three pyramids while it is still quiet, then continue to the panorama point and the Sphinx.":["Мы приезжаем перед открытием ворот и встречаем рассвет у трёх пирамид в тишине, затем едем на смотровую площадку и к Сфинксу.","Arriviamo poco prima dell’apertura dei cancelli e ammiriamo le tre piramidi nel silenzio, poi proseguiamo verso il punto panoramico e la Sfinge."],
"From EGP 950":["От 950 EGP","Da 950 EGP"],
"Pyramids & Sphinx tour":["Тур по пирамидам и Сфинксу","Tour delle Piramidi e della Sfinge"],
"3 hours – daily":["3 часа – ежедневно","3 ore – ogni giorno"],
"Visit the Great Pyramid, the Valley Temple and the Sphinx with a clear historical overview.":["Посещение Великой пирамиды, Храма в долине и Сфинкса с понятным историческим рассказом.","Visita alla Grande Piramide, al Tempio della Valle e alla Sfinge con una chiara introduzione storica."],
"From EGP 750":["От 750 EGP","Da 750 EGP"],
"Grand Egyptian Museum":["Большой Египетский музей","Grande Museo Egizio"],
"4 hours":["4 часа","4 ore"],
"A visit inside the museum beside the Pyramids, including the Tutankhamun galleries.":["Посещение музея рядом с пирамидами, включая залы Тутанхамона.","Visita al museo accanto alle Piramidi, comprese le sale di Tutankhamon."],
"From EGP 1,200":["От 1 200 EGP","Da 1.200 EGP"],
"Saqqara, Memphis & Dahshur":["Саккара, Мемфис и Дахшур","Saqqara, Menfi e Dahshur"],
"Full day":["Весь день","Giornata intera"],
"Djoser’s Step Pyramid and the Bent Pyramid, with a local lunch on the way.":["Ступенчатая пирамида Джосера и Ломаная пирамида, местный обед по пути.","Piramide a gradoni di Djoser e Piramide Romboidale, con pranzo locale lungo il percorso."],
"From EGP 1,800":["От 1 800 EGP","Da 1.800 EGP"],
"Camel & horse ride on the Giza Plateau":["Верховая прогулка на верблюде или лошади по плато Гиза","Giro a dorso di cammello o cavallo sull’altopiano di Giza"],
"1 hour – at sunset":["1 час – на закате","1 ora – al tramonto"],
"Rides with a company escort and fixed prices agreed in advance.":["Прогулки в сопровождении сотрудника компании, фиксированные цены оговариваются заранее.","Giri con accompagnatore della nostra squadra e prezzi fissi concordati in anticipo."],
"From EGP 450":["От 450 EGP","Da 450 EGP"],
"Why Benben Tours":["Почему Benben Tours","Perché Benben Tours"],
"We work on the plateau every day and know how to make the visit comfortable.":["Мы работаем на плато каждый день и знаем, как сделать визит комфортным.","Lavoriamo sull’altopiano ogni giorno e sappiamo come rendere la visita comoda."],
"Licensed guides":["Лицензированные гиды","Guide autorizzate"],
"Speaking Arabic, English, French and German.":["Говорят на арабском, английском, французском и немецком.","Parlano arabo, inglese, francese e tedesco."],
"Clear pricing":["Прозрачные цены","Prezzi chiari"],
"What you pay at booking is exactly what you pay.":["Сколько вы платите при бронировании, столько и заплатите.","Quanto paghi alla prenotazione è esattamente quanto paghi."],
"Private transport":["Частный трансфер","Trasporto privato"],
"Air-conditioned car to and from your hotel in Cairo and Giza.":["Автомобиль с кондиционером от вашего отеля в Каире или Гизе и обратно.","Auto con aria condizionata da e per il tuo hotel al Cairo e a Giza."],
"Small groups":["Малые группы","Piccoli gruppi"],
"Up to 10 people, so you hear the guide and have time for photos.":["До 10 человек: вы хорошо слышите гида и успеваете сфотографироваться.","Fino a 10 persone, per ascoltare bene la guida e avere tempo per le foto."],
"What travelers say":["Отзывы путешественников","Cosa dicono i viaggiatori"],
"Sunrise at the Pyramid was the best part of our trip to Egypt. The guide knew every corner and got us there before the crowds.":["Рассвет у пирамиды стал лучшей частью нашей поездки в Египет. Гид знал каждый уголок и привёл нас до толп туристов.","L’alba alla piramide è stata la parte più bella del nostro viaggio in Egitto. La guida conosceva ogni angolo e ci ha portati prima della folla."],
"Clear price from the start, no surprises. The car was clean and air-conditioned and the driver was on time.":["Понятная цена с самого начала, без сюрпризов. Чистая машина с кондиционером, водитель пришёл вовремя.","Prezzo chiaro fin dall’inizio, nessuna sorpresa. Auto pulita e climatizzata, autista puntuale."],
"We visited Saqqara and Dahshur with the kids. The explanation was simple and fun for the little ones as well as the adults.":["Мы ездили в Саккару и Дахшур с детьми. Рассказ был простым и интересным и для малышей, и для взрослых.","Abbiamo visitato Saqqara e Dahshur con i bambini. La spiegazione era semplice e divertente per i piccoli e per i grandi."],
"Fill in your details and we’ll confirm on WhatsApp within minutes.":["Заполните данные, и мы подтвердим в WhatsApp в течение нескольких минут.","Compila i tuoi dati e confermeremo su WhatsApp in pochi minuti."],
"Name":["Имя","Nome"],"Tour":["Тур","Escursione"],"Date":["Дата","Data"],"Number of people":["Количество человек","Numero di persone"],
"Send request on WhatsApp":["Отправить заявку в WhatsApp","Invia la richiesta su WhatsApp"],
"Address":["Адрес","Indirizzo"],"Follow us":["Мы в соцсетях","Seguici"],
"Pyramids Road, Giza, Egypt":["Pyramids Road, Гиза, Египет","Pyramids Road, Giza, Egitto"],
"See all reviews on Tripadvisor":["Все отзывы на Tripadvisor","Vedi tutte le recensioni su Tripadvisor"]};
var TR3={"Safety at every step":["全程安全保障"],"Modern air-conditioned cars, professional drivers and a guide with you throughout, so you can relax.":["现代化空调车辆、专业司机，全程有导游陪同，让您安心出行。"],"Punctual, every time":["准时守约"],"We arrive before your pickup time and stick to the agreed schedule from start to finish.":["我们会在接送时间之前到达，并从头到尾严格按约定行程执行。"],
"Tours":["行程"],"Why us":["为什么选择我们"],"Book":["预订"],
"The Pyramids, through the eyes of Giza":["带你用吉萨本地人的视角看金字塔"],
"Guided trips with licensed Egyptian guides, from the Great Pyramid to the Grand Egyptian Museum.":["持证埃及导游带队的精品行程，从胡夫金字塔到大埃及博物馆。"],
"Book your trip":["立即预订行程"],"See the tours":["查看行程"],"Our tours":["我们的行程"],
"Prices are per person and include private transport and a guide. Entry tickets are charged at official rates.":["价格按每人计算，含私人接送和导游。门票按官方价格另收。"],
"Sunrise at the Great Pyramid":["大金字塔日出"],
"4 hours – before the crowds – small groups":["4 小时 – 避开人潮 – 小团出行"],
"We arrive just before the gates open and stand before the three pyramids while it is still quiet, then continue to the panorama point and the Sphinx.":["我们在开门前不久抵达，在宁静中近观三座金字塔，随后前往全景观景台和狮身人面像。"],
"From EGP 950":["EGP 950 起"],
"Pyramids & Sphinx tour":["金字塔与狮身人面像之旅"],
"3 hours – daily":["3 小时 – 每日出发"],
"Visit the Great Pyramid, the Valley Temple and the Sphinx with a clear historical overview.":["参观胡夫金字塔、河谷神庙和狮身人面像，并配有通俗易懂的历史讲解。"],
"From EGP 750":["EGP 750 起"],
"Grand Egyptian Museum":["大埃及博物馆"],
"4 hours":["4 小时"],
"A visit inside the museum beside the Pyramids, including the Tutankhamun galleries.":["参观金字塔旁的博物馆，包括图坦卡蒙展厅。"],
"From EGP 1,200":["EGP 1,200 起"],
"Saqqara, Memphis & Dahshur":["萨卡拉、孟菲斯与代赫舒尔"],
"Full day":["全天"],
"Djoser’s Step Pyramid and the Bent Pyramid, with a local lunch on the way.":["乔塞尔阶梯金字塔和弯曲金字塔，途中享用当地午餐。"],
"From EGP 1,800":["EGP 1,800 起"],
"Camel & horse ride on the Giza Plateau":["吉萨高原骑骆驼 / 骑马"],
"1 hour – at sunset":["1 小时 – 日落时分"],
"Rides with a company escort and fixed prices agreed in advance.":["由公司人员全程陪同，价格固定并提前约定。"],
"From EGP 450":["EGP 450 起"],
"Why Benben Tours":["为什么选择 Benben Tours"],
"We work on the plateau every day and know how to make the visit comfortable.":["我们每天都在高原上工作，知道如何让您的游览更舒适。"],
"Licensed guides":["持证导游"],
"Speaking Arabic, English, French and German.":["会说阿拉伯语、英语、法语和德语。"],
"Clear pricing":["价格透明"],
"What you pay at booking is exactly what you pay.":["预订时支付的价格就是最终价格。"],
"Private transport":["私人接送"],
"Air-conditioned car to and from your hotel in Cairo and Giza.":["空调车往返您在开罗或吉萨的酒店。"],
"Small groups":["小团出行"],
"Up to 10 people, so you hear the guide and have time for photos.":["最多 10 人，方便听清讲解，也有充足的拍照时间。"],
"What travelers say":["游客评价"],
"Sunrise at the Pyramid was the best part of our trip to Egypt. The guide knew every corner and got us there before the crowds.":["金字塔日出是我们埃及之行中最美的部分。导游熟悉每一个角落，带我们在人潮到来之前抵达。"],
"Clear price from the start, no surprises. The car was clean and air-conditioned and the driver was on time.":["一开始价格就很清楚，没有任何意外。车辆干净、有空调，司机也很准时。"],
"We visited Saqqara and Dahshur with the kids. The explanation was simple and fun for the little ones as well as the adults.":["我们带着孩子去了萨卡拉和代赫舒尔，讲解通俗有趣，大人小孩都喜欢。"],
"Fill in your details and we’ll confirm on WhatsApp within minutes.":["填写您的信息，我们将在几分钟内通过 WhatsApp 向您确认。"],
"Name":["姓名"],"Tour":["行程"],"Date":["日期"],"Number of people":["人数"],
"Send request on WhatsApp":["通过 WhatsApp 发送预订请求"],
"Address":["地址"],"Follow us":["关注我们"],
"Pyramids Road, Giza, Egypt":["金字塔路，吉萨，埃及"],
"See all reviews on Tripadvisor":["在 Tripadvisor 查看全部评价"]};
var LX={fr:0,de:1,es:2,ru:0,it:1,zh:0},TT={zh:"Benben Tours – 吉萨与金字塔旅游",ru:"Benben Tours – туры по Гизе и пирамидам",it:"Benben Tours – Turismo a Giza e alle Piramidi",en:"Benben Tours – Giza & Pyramids Tourism",fr:"Benben Tours – Tourisme à Gizeh et aux Pyramides",de:"Benben Tours – Reisen nach Gizeh und zu den Pyramiden",es:"Benben Tours – Turismo en Guiza y las Pirámides"};
function tr(k,L){var e=EN[k];if(!e)return null;if(L==='en')return e;var a=(L==='zh'?TR3:L==='ru'||L==='it'?TR2:TR)[e];return a?a[LX[L]]:e}
function setLang(L){setUI(L);
nodes.forEach(function(n){var o=orig.get(n),k=o.trim().replace(/\s+/g,' '),r=o,t=L==='ar'?null:tr(k,L);
if(t)r=o.replace(o.trim(),t);n.nodeValue=r});
var d=document.documentElement;d.lang=L;d.dir=L==='ar'?'rtl':'ltr';
document.title=L==='ar'?T0:TT[L];
}
var lb=document.getElementById('lb'),lm=document.getElementById('lm');
function setUI(L){document.getElementById('lc').textContent=L.toUpperCase();lm.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-current',b.dataset.l===L?'true':'false')})}
function closeM(){lm.hidden=true;lb.setAttribute('aria-expanded','false')}
lb.addEventListener('click',function(e){e.stopPropagation();var o=lm.hidden;lm.hidden=!o;lb.setAttribute('aria-expanded',String(o))});
lm.addEventListener('click',function(e){var b=e.target.closest('button');if(b){setLang(b.dataset.l);closeM()}});
document.addEventListener('click',closeM);
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
var nl=(navigator.language||'ar').slice(0,2).toLowerCase();
setLang(['ar','en','fr','de','es','ru','it','zh'].indexOf(nl)>-1?nl:'en');
var hd=document.querySelector('header.top');
function sc(){hd.classList.toggle('solid',window.scrollY>40)}
window.addEventListener('scroll',sc,{passive:true});sc();
(function(){var rs=document.querySelectorAll('#reviews .r'),box=document.querySelector('#reviews .rv'),i=0,tm,dots=document.createElement('div');
dots.className='dots';
rs.forEach(function(_,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label',String(k+1));b.onclick=function(){show(k);auto()};dots.appendChild(b)});
box.after(dots);
function show(k){i=k;rs.forEach(function(r,j){r.classList.toggle('on',j===k)});dots.childNodes.forEach(function(b,j){b.setAttribute('aria-current',j===k?'true':'false')})}
function auto(){clearInterval(tm);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)tm=setInterval(function(){show((i+1)%rs.length)},6500)}
show(0);auto()})();
function go(c){var t=c.querySelector('h3').textContent.trim(),e=document.documentElement.lang!=='ar';window.open('https://wa.me/201043608451?text='+encodeURIComponent((e?'Hello, I would like to book: ':'مرحبًا، أريد حجز: ')+t),'_blank','noopener')}
document.querySelectorAll('.tour').forEach(function(c){c.tabIndex=0;c.setAttribute('role','link');c.addEventListener('click',function(e){if(!e.target.closest('details'))go(c)});c.addEventListener('keydown',function(e){if(e.target===c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();go(c)}})});
