// Get Elements
const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const minimum = document.getElementById("min-amount");
const maximum = document.getElementById("max-amount");
const result = document.querySelector(".lorem-text");
const word_count = document.getElementById("word-count");
const letter_count = document.getElementById("letter-count");
const copy_btn = document.querySelector(".copy-button");

// VARIABLES
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac lectus ullamcorper lorem vestibulum interdum et in augue. Quisque venenatis risus id urna dapibus luctus.
Sed pretium purus vel quam elementum, eu maximus massa tristique. Aliquam imperdiet mauris vitae pretium faucibus. Phasellus vitae leo ac nulla imperdiet luctus.
Ut tincidunt libero aliquet magna aliquam porttitor.
Aliquam sit amet elit tempus, ultrices dui eu, tincidunt ante.
Suspendisse congue lectus vitae fermentum accumsan.
Nam nec dolor at metus vehicula sagittis.
Nullam et ex sit amet ex pellentesque vulputate.
Praesent nec sapien vitae lectus gravida molestie eu vestibulum purus.
Nulla at ante molestie, convallis arcu et, tincidunt ante.
In sagittis magna sed laoreet viverra.
Quisque sollicitudin nulla sed sagittis consequat.
Cras ultrices dui quis nulla dignissim vestibulum.
Integer venenatis mauris fringilla velit tristique interdum.
Phasellus imperdiet nibh ac sagittis sagittis.
Vestibulum quis tellus ac eros mollis dapibus.
Vestibulum nec sem dapibus, fermentum risus et, faucibus mi.
Mauris sodales enim laoreet lacinia cursus.
Maecenas lobortis mi nec facilisis rutrum.
Pellentesque facilisis nisi at velit faucibus euismod.
Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna.
Curabitur ac libero a eros iaculis tempus a nec elit.
Quisque mollis felis et dictum hendrerit.
Aliquam vitae purus a tortor interdum blandit eget a mi.
Suspendisse eu orci egestas nunc vehicula pulvinar a quis leo.
Mauris eget metus interdum, luctus est ut, egestas orci.
Cras id eros pharetra, aliquet enim quis, luctus nunc.
Vestibulum eget eros hendrerit, pulvinar elit non, pretium purus.
Nulla in nibh eu lacus ornare rhoncus non suscipit libero.
Pellentesque imperdiet arcu sit amet dictum facilisis.
Mauris facilisis lorem sit amet finibus malesuada.
Curabitur ut elit vel lorem ullamcorper viverra eget eu tortor.
Nam dignissim purus id cursus consectetur.
Praesent sed ex id felis tincidunt condimentum.
Sed non ante gravida, pharetra dui et, imperdiet leo.
Duis et ante fermentum, ultrices purus ac, hendrerit ex.
Vestibulum dapibus turpis ut fringilla porttitor.
Aenean imperdiet magna sed mauris tempor, ac aliquam neque venenatis.
Sed consectetur turpis nec elit dapibus fringilla.
Sed eleifend sem ut sapien sodales varius.
Praesent accumsan nulla ac nisl suscipit, vel aliquam tortor auctor.
Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis.
Nulla volutpat ex vel ex pulvinar, non viverra odio lobortis.
Aenean laoreet purus tincidunt neque consectetur, posuere sodales augue gravida.
Vestibulum in urna eu ipsum tristique feugiat.
Aliquam congue risus eu risus euismod luctus.
Praesent sollicitudin neque a ante eleifend, et consequat nulla porta.
Vestibulum rhoncus nunc non nisi ullamcorper gravida.
Ut pulvinar ipsum a felis feugiat vehicula.
Donec feugiat metus at pharetra ornare.
Integer pellentesque risus id enim blandit, vitae consectetur sem scelerisque.
Mauris eget lorem non magna interdum ornare a quis metus.
Vivamus fringilla est at dictum tristique.
Sed aliquam velit et erat dapibus, sit amet tincidunt dui congue.
Sed porta diam sed diam mattis maximus.
Ut rhoncus leo ut pellentesque lobortis.
Suspendisse non tortor consectetur, pulvinar felis et, sodales ipsum.
Cras suscipit massa convallis accumsan elementum.
Suspendisse efficitur eros in ultricies tincidunt.
Nunc quis erat maximus, iaculis quam a, gravida diam.
Nullam volutpat libero id feugiat tincidunt.
Vestibulum a lacus sed urna vehicula ornare ut vel nulla.
In dignissim libero id eros eleifend egestas in eu odio.
Sed in erat sagittis, aliquet mauris in, interdum elit.
Donec a dui hendrerit, elementum arcu quis, fermentum magna.
Suspendisse in dui efficitur, pellentesque nulla nec, gravida nisl.
Fusce sed purus ullamcorper, scelerisque mi ac, ultricies turpis.
Pellentesque sed lectus posuere, viverra massa et, ultricies metus.
Ut tincidunt velit id orci hendrerit, quis accumsan enim sagittis.
Donec at diam at velit tincidunt dictum et in metus.
Vivamus elementum magna pretium nisl iaculis, at rhoncus eros laoreet.
Etiam lacinia turpis nec scelerisque egestas.
Donec sodales ex at euismod scelerisque.
Pellentesque ac leo ac turpis maximus varius ac non ex.
Donec tempus nibh in mauris pellentesque, nec vehicula ligula elementum.
Fusce ac ipsum sed lacus cursus condimentum.
Curabitur quis nisi maximus, condimentum arcu ut, ullamcorper tortor.
Donec convallis nunc non nulla eleifend, eu sodales odio vestibulum.
Phasellus ultrices leo sed magna rutrum, vitae rutrum nisl maximus.
Nullam mollis lorem a lorem cursus, ac placerat felis laoreet.
Integer auctor augue in enim sodales tincidunt.
Vestibulum sed nulla egestas, condimentum nunc a, elementum sapien.
Pellentesque placerat dui bibendum leo fringilla volutpat.
Maecenas eget risus venenatis, egestas elit a, iaculis felis.
Nullam ornare urna ut arcu mollis, sed facilisis leo malesuada.
Pellentesque et ex non lorem gravida dapibus sed eu dui.
Vivamus accumsan tortor eu fringilla scelerisque.
Nunc blandit eros ac venenatis porttitor.
Praesent luctus turpis a nulla fringilla ullamcorper.
Nam quis risus non ligula bibendum varius.
Nunc id arcu non tellus gravida cursus.
Etiam quis libero semper tellus semper tristique a quis urna.
Maecenas vitae nulla id ex eleifend hendrerit.
Aliquam eu odio sed arcu consectetur ornare.
Nulla egestas nisi nec lacus vehicula, sed viverra felis hendrerit.
Morbi placerat est vitae purus condimentum, id condimentum nulla dapibus.
Vivamus vulputate lacus at massa ultrices rhoncus.
Mauris laoreet nibh ac pulvinar faucibus.
Morbi non enim scelerisque, tincidunt odio et, euismod elit.
Vivamus nec arcu nec libero ultricies dictum non sit amet urna.
Aliquam id odio tincidunt, laoreet turpis et, commodo mauris.
Suspendisse vel nulla non risus pretium elementum quis condimentum leo.
In rhoncus purus mattis semper ultrices.
Vivamus pharetra odio ac ornare semper.
Mauris ut nulla dapibus, vestibulum ipsum non, porttitor lectus.
Fusce eleifend orci eget odio hendrerit, eget accumsan metus rutrum.
Ut a quam nec magna placerat volutpat vel at sem.
Etiam placerat leo eu ex laoreet, vitae volutpat magna feugiat.
Vivamus eu justo vel purus gravida cursus.
Donec malesuada ante at bibendum feugiat.
Maecenas tristique dui id purus bibendum, sit amet feugiat libero posuere.
Pellentesque dignissim erat et elit tincidunt malesuada.
Pellentesque non nisi vitae massa pellentesque auctor id non mauris.
Ut eget enim a mauris dapibus porta.
Aliquam eu erat ut risus iaculis venenatis ut efficitur purus.
Vestibulum imperdiet lorem ac massa suscipit pellentesque.
Mauris tempor nulla et bibendum malesuada.
Integer eget lectus nec velit lacinia tincidunt nec vitae lorem.
Donec ut leo quis dui aliquet dapibus.
Aliquam sed enim congue, auctor enim nec, consequat risus.
Proin fermentum arcu in mauris consectetur semper non ac nibh.
Ut ut enim vel nulla interdum tincidunt.
Praesent pellentesque sem a nibh lobortis, vel consectetur velit scelerisque.
Ut non nibh sit amet quam iaculis euismod eget id metus.
Quisque ullamcorper justo at convallis tempus.
Nullam quis justo quis purus scelerisque volutpat.
Proin blandit massa dignissim neque vestibulum efficitur.
Duis venenatis massa id volutpat lacinia.
Proin eu dolor quis libero bibendum ornare.
Nunc volutpat tellus ac elementum convallis.
Suspendisse vitae dolor venenatis, commodo neque at, faucibus purus.
Praesent rhoncus nibh a luctus tristique.
Fusce gravida ante quis lacus vehicula, quis ornare lectus facilisis.
Nam ac mauris bibendum, eleifend lacus id, finibus justo.
Quisque varius lectus vel maximus malesuada.
Nam et metus volutpat, rutrum arcu ac, tristique ipsum.
Mauris convallis tellus a laoreet ullamcorper.
In cursus neque sed elit aliquam aliquam.
Donec ullamcorper nisi quis molestie vehicula.
Etiam dictum justo eget metus fringilla bibendum.
Duis ac nisl a odio vehicula accumsan ultrices id odio.
Sed eleifend diam nec cursus interdum.
Aliquam imperdiet mauris nec erat feugiat vulputate.
Vivamus nec nibh feugiat nunc rhoncus dictum et ac diam.
Nam tincidunt libero non dolor eleifend consequat.
Morbi molestie ex in dui molestie venenatis.
Sed convallis enim ut quam euismod malesuada.
Cras eget turpis id eros tristique varius.
Curabitur porta dui sit amet lorem rutrum ornare.
Donec ut libero vel nisi volutpat dignissim.
In nec ex a lorem bibendum luctus ac vitae turpis.
Sed porta purus quis arcu vestibulum, vitae ultrices leo commodo.
Praesent finibus elit quis ipsum efficitur suscipit.
Nulla ultricies neque sit amet risus mollis suscipit.
Nulla ut turpis ac purus vehicula lobortis.
Morbi volutpat turpis ut urna laoreet interdum.
Quisque porta erat in tortor dapibus luctus vulputate non lacus.
Fusce consectetur leo posuere bibendum semper.
Mauris fringilla lacus nec neque viverra pretium.
Praesent sed nunc eu quam rutrum dignissim.
Suspendisse condimentum urna ac ullamcorper commodo.
Mauris a mi efficitur, commodo urna non, tristique ex.
Aliquam in sem semper, lobortis tortor quis, pharetra mauris.
Nullam ac diam sit amet arcu tempor dignissim sed eget eros.
Nam ut justo fringilla, dapibus mauris vehicula, dapibus nunc.
Cras pretium metus eget viverra ullamcorper.
Integer quis turpis ut risus placerat faucibus in sit amet justo.
Phasellus pellentesque elit sit amet metus elementum consectetur.
Vestibulum sit amet tortor non felis commodo sagittis in eu nisi.
Pellentesque non magna eget ipsum ultricies sodales.
Morbi suscipit tellus vel sapien gravida, in malesuada turpis cursus.
Integer in nibh non nisi semper mattis ut ac lectus.
Vestibulum euismod diam sed mauris aliquam, sed imperdiet metus consequat.
Vivamus suscipit massa sed lorem accumsan, a aliquet velit sollicitudin.
Nulla dictum nisi nec arcu suscipit, quis pellentesque ipsum tempor.
Donec eu sem sed arcu tempor luctus.
Mauris aliquet ipsum nec tortor efficitur, fringilla porta nunc tristique.
Nullam ac sapien auctor, tincidunt eros sed, ullamcorper risus.
Maecenas at enim ac tellus sollicitudin rhoncus.
Nulla non justo non ligula euismod tincidunt.
Nam eleifend mi iaculis tellus tincidunt, ac efficitur metus vulputate.
Vestibulum sit amet libero sit amet lectus euismod congue.
Cras scelerisque ligula quis vulputate varius.
Curabitur venenatis diam eget lectus consectetur, vel placerat leo vehicula.
Phasellus non leo in turpis vestibulum ultricies sed vel sapien.
Duis varius leo quis urna vehicula, at sollicitudin tortor aliquet.
Duis tristique libero vel faucibus lobortis.
Nunc interdum erat et rutrum molestie.
Aenean gravida libero ac tempor pulvinar.
Mauris vel nisi hendrerit, eleifend tortor sed, fermentum ipsum.
In dapibus massa eget gravida facilisis.
Maecenas iaculis ex eget urna efficitur pharetra.
Nunc elementum augue sit amet lacus condimentum dignissim.
Mauris iaculis lectus eget felis semper scelerisque.
Fusce non nisi rutrum, facilisis tortor non, maximus elit.
Proin ut tortor vulputate, fringilla diam eu, vehicula lectus.
Mauris commodo nulla non est pulvinar, ut placerat velit imperdiet.
Cras eget erat luctus orci dapibus accumsan ornare sit amet lorem.
Duis lobortis nisl eu ligula dictum maximus.
Donec non neque eu ipsum consectetur fringilla.
Morbi id mi ullamcorper, efficitur velit at, maximus erat.
Suspendisse ut diam non leo congue accumsan et id mauris.
Sed ut metus sit amet enim egestas consequat in sit amet lectus.
Donec pharetra nisl accumsan urna eleifend, quis pulvinar mi consectetur.
Proin finibus lectus id vulputate euismod.
Etiam tincidunt erat et molestie rutrum.
Cras et enim et augue interdum faucibus.
Vivamus condimentum nulla non velit faucibus, ut accumsan sapien dapibus.
Nullam eu lectus pulvinar, faucibus purus vel, dictum magna.
Nullam id turpis pretium, blandit diam et, dictum mi.
Cras et nibh varius, volutpat mi in, rutrum neque.
Duis consequat purus sed porttitor faucibus.
Sed a quam non eros bibendum tincidunt.
Cras volutpat urna in elit mollis, vitae posuere leo pulvinar.
Proin sit amet eros at nunc faucibus fermentum vel sed erat.
Duis eu turpis a ligula vehicula ullamcorper eget sit amet nibh.
Nullam pharetra metus a orci consectetur porta.
Mauris at ex tincidunt, placerat tortor a, varius velit.
Maecenas luctus sem eget metus pellentesque, eget maximus nisi elementum.
Phasellus auctor lorem non risus malesuada tempor.
Vivamus tristique risus a sem gravida, et malesuada elit rhoncus.
Quisque vehicula sapien at tempus euismod.
Morbi blandit turpis ut blandit maximus.
Morbi tristique tortor at neque maximus, at molestie odio porttitor.
Quisque vel est a enim viverra imperdiet.
Proin eget urna facilisis, semper purus sed, varius justo.
Etiam vel orci pretium, aliquam dui ac, maximus massa.
Nam accumsan leo eu justo rhoncus viverra vel eget justo.
Duis ac massa nec augue molestie malesuada in eget enim.
Vivamus vitae sem faucibus, malesuada nibh at, venenatis tortor.
Nam rutrum felis posuere consectetur aliquet.
Proin tincidunt eros eget auctor pulvinar.
Donec finibus mauris et dictum semper.
Fusce at neque tincidunt, dapibus mi eu, consequat augue.
Quisque ac sapien semper turpis hendrerit rhoncus vel convallis ex.
Mauris id velit a enim convallis accumsan.
Duis vitae tortor sit amet nulla tincidunt lacinia.
Pellentesque mattis neque eu est fringilla pretium.
Pellentesque nec neque gravida, dignissim tortor ut, porttitor felis.
Sed ultricies mi vitae turpis tincidunt sollicitudin.
Proin efficitur dolor eget nulla condimentum bibendum.
Sed accumsan dui sed viverra volutpat.
Integer aliquet odio a tellus scelerisque, id cursus nisl feugiat.
Maecenas tristique arcu sit amet mauris faucibus, eget consectetur urna gravida.
Etiam ut nulla interdum metus blandit venenatis.
Phasellus at leo ac tortor venenatis dapibus.
Integer eu lectus quis nunc pharetra euismod eu et lorem.
Sed vitae diam mattis, viverra velit a, vestibulum massa.
Maecenas vitae augue sodales nisi rhoncus tristique.
Vestibulum eu massa eget nisl ornare ultrices.
Cras lobortis leo a orci varius, sed molestie orci laoreet.
Pellentesque molestie nibh ut tortor porttitor rhoncus.
In egestas massa eget laoreet rhoncus.
Ut porta metus congue gravida sagittis.
Nullam sed velit tempor, facilisis massa ut, luctus lectus.
Nam id turpis sed neque laoreet pulvinar.
Etiam varius felis sit amet tempor feugiat.
Nulla porttitor ligula sit amet varius ullamcorper.
Curabitur rhoncus nunc ac lorem pharetra sodales.
In interdum massa at lacus finibus, non dignissim erat pharetra.
Praesent at ex pulvinar nulla faucibus viverra nec nec diam.
Mauris facilisis odio ut aliquet egestas.
Curabitur laoreet tortor sit amet placerat efficitur.
Donec fermentum lacus id ipsum gravida, at hendrerit est porta.
Sed pretium dui in tortor dictum, sed condimentum sapien gravida.
Curabitur ac urna sed ligula suscipit tincidunt sed in sapien.
Morbi ultrices enim id ornare porttitor.
Integer ut ante et enim rutrum sollicitudin.
Suspendisse ac est pulvinar, maximus metus nec, placerat metus.
Nunc porta velit ac finibus sagittis.
Maecenas cursus lacus vulputate consectetur interdum.
Nulla aliquet purus ut nibh euismod, sit amet interdum sem commodo.
Duis ac lorem auctor, euismod leo ut, congue risus.
Suspendisse feugiat erat vel fringilla tincidunt.
Integer tempus nisi sit amet purus varius suscipit.
Vivamus tincidunt nulla sit amet orci finibus dictum.
Aenean nec enim ac enim bibendum sollicitudin.
In elementum mi nec dignissim malesuada.
Vestibulum sit amet leo vel urna facilisis suscipit at ut diam.
Vestibulum congue ligula et lectus rhoncus, sed congue odio suscipit.
Sed tempus dui eu urna aliquet varius.
Pellentesque in nisi eleifend diam scelerisque tincidunt.
Proin in turpis vel elit maximus aliquam.
Duis sagittis lectus hendrerit sem venenatis, quis ornare orci laoreet.
Ut dictum nulla id auctor auctor.
Nullam quis turpis egestas, suscipit ex in, dapibus tortor.
Nunc varius lectus in dignissim scelerisque.
Nullam efficitur eros sit amet interdum vestibulum.
Suspendisse sed sem at dolor interdum congue quis ac tortor.
Vivamus et neque lobortis, tincidunt odio iaculis, iaculis sapien.
Fusce fringilla arcu nec cursus fringilla.
Vivamus sit amet sem at nunc scelerisque accumsan eget vel erat.
Aliquam id eros sed elit hendrerit egestas.
Aenean congue enim ac interdum dapibus.
Aenean nec ipsum venenatis, luctus lorem non, mollis elit.
Nam a dolor vel elit consectetur fermentum eget at tortor.
Nunc id est facilisis, aliquam mauris vel, pretium neque.
Quisque vel augue et nisi mollis tempus.
Donec fermentum dui id mollis consectetur.
Sed et enim ac magna scelerisque mattis.
Curabitur placerat turpis at turpis vulputate viverra.
Suspendisse eu sapien quis velit feugiat auctor sed et lorem.
Fusce aliquet justo ac turpis pharetra, sed congue tellus maximus.
Duis semper ligula eget tellus rhoncus porta.
Phasellus euismod magna vitae tempus lacinia.
Proin ac odio a sapien mattis porta.
Pellentesque nec velit condimentum, vulputate quam at, elementum erat.
Mauris auctor enim ut felis tincidunt consectetur eu sed neque.
Maecenas molestie urna et ornare tincidunt.
Suspendisse ultricies velit vitae ante rutrum finibus.
Pellentesque ut mi venenatis, auctor odio a, lacinia libero.
Praesent auctor lacus et turpis aliquet, ac pulvinar est cursus.
Fusce non risus ac quam gravida maximus in vitae metus.
In nec magna venenatis, dictum nibh quis, sagittis elit.
Maecenas efficitur eros nec ligula aliquam, sit amet ultricies diam tempus.
Suspendisse molestie mauris ut vehicula eleifend.
Mauris eget ex et mauris dignissim vulputate.
Praesent quis odio non erat porttitor aliquam nec at ante.
Etiam finibus sapien id aliquam lacinia.
Praesent fringilla massa eget est aliquam, et tincidunt nunc blandit.
Etiam vulputate est accumsan elementum commodo.
Aenean molestie leo sit amet sem sodales cursus sed et tellus.
Aliquam nec velit sollicitudin, aliquam libero sed, aliquam nunc.
Aliquam condimentum purus in ultricies blandit.
Nunc faucibus arcu pharetra ipsum auctor tincidunt.
Donec in metus consectetur ex accumsan dictum sed non ligula.
Vestibulum venenatis dolor hendrerit lectus malesuada imperdiet.
Integer et odio sed nisi aliquet rhoncus id eu ex.
Nullam tincidunt mi ut scelerisque blandit.
Donec semper mi id lorem tempor suscipit.
Vestibulum sit amet dui maximus, eleifend sapien condimentum, venenatis nulla.
Nam eu massa at ipsum scelerisque luctus vitae non lacus.
Praesent in justo egestas, dapibus lorem a, feugiat eros.
Donec vitae lacus lacinia, lacinia nisi vel, hendrerit ligula.
Cras vel purus et justo semper molestie.
Proin ultricies diam non nibh sagittis facilisis.
Phasellus fermentum purus elementum magna vulputate, ut molestie massa viverra.
Nam sit amet libero efficitur nibh consectetur hendrerit.
Donec vehicula sem a varius aliquam.
Vivamus vel enim blandit, sagittis massa non, consectetur tellus.
Vivamus vel massa porta, maximus ex a, maximus orci.
Phasellus id leo lacinia, iaculis magna in, auctor nulla.
Maecenas quis turpis in lectus commodo suscipit.
Fusce blandit neque in laoreet rutrum.
Sed in lacus hendrerit, sollicitudin risus nec, venenatis arcu.
Nulla facilisis nisl vel aliquet condimentum.
Vivamus vel sem malesuada diam posuere condimentum et vitae augue.
Phasellus porttitor erat eget arcu cursus eleifend.
Phasellus quis mi nec arcu tempus imperdiet.
Nam consectetur leo ac magna cursus, nec egestas ligula gravida.
Nam gravida enim ut elit auctor cursus.
Maecenas eget leo ultrices, euismod turpis vel, lacinia nisi.
Aenean eleifend lacus nec dapibus lacinia.
Donec eget leo eget justo efficitur auctor ac laoreet massa.
Aliquam sollicitudin velit at risus dictum tincidunt.
Aenean sit amet nibh maximus, imperdiet urna id, ultricies justo.
Curabitur nec sem eget urna fringilla hendrerit.
Nullam id diam non tortor efficitur venenatis non id orci.
Phasellus vitae neque rutrum, fringilla dolor ac, mattis nunc.
Ut et nulla a elit euismod ultrices.
In interdum turpis vel hendrerit laoreet.
Nullam accumsan dolor vel turpis lobortis luctus.
Vestibulum nec felis quis mauris efficitur mattis sit amet eu urna. Curabitur vitae leo finibus, laoreet dui accumsan, porta velit. Vestibulum at risus vitae enim ornare scelerisque id ac tellus. Nam sagittis felis tristique, interdum quam ut, elementum sapien. Nunc dictum quam vel purus iaculis, luctus posuere urna posuere. Nulla condimentum lorem vitae tellus dignissim, in malesuada velit consectetur. Phasellus molestie dui eget magna interdum, eu scelerisque risus ullamcorper. Nulla pellentesque libero non nulla ultrices, sit amet consequat urna egestas. Sed cursus mi ut nulla malesuada, et condimentum diam ullamcorper. Aenean sit amet arcu et nisl accumsan dignissim. Aliquam at justo ut magna viverra tempor.`;

// Split text into an array of sentences
const sentences = text.split(".").map((sen) => {
  return sen.replace(/\r?\n|\r/g, "");
});

console.log(sentences);

// When page loads, generate a default paragraph
generateDefaultParagraph();

// ADD EVENT LISTENER
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const paraValue = parseInt(amount.value);
  const minValue = parseInt(minimum.value);
  const maxValue = parseInt(maximum.value);

  result.innerText = "";

  // Catch errors
  if (
    catchErrors(paraValue) ||
    catchErrors(minValue) ||
    catchErrors(maxValue)
  ) {
    return generateError();
  } else if (minValue > maxValue) {
    return generateError("Min value is greater than max value!");
  }

  if (paraValue > 0) {
    for (let i = 0; i < paraValue; i++) {
      let paragraph = generateParagraph(minValue, maxValue);

      const para = document.createElement("p");
      const br = document.createElement("br");
      const node = document.createTextNode(paragraph);

      para.appendChild(node);
      result.appendChild(para);
      result.appendChild(br);
    }
  } else {
    generateDefaultParagraph();
  }

  updateCounters();
});

copy_btn.addEventListener("click", copyText);

// FUNCTIONS
function generateParagraph(min, max) {
  let paragraph = [];
  let randNum = Math.floor(min + Math.random() * max);

  for (let i = 0; i < randNum; i++) {
    let number = Math.floor(Math.random() * sentences.length);
    let sent = sentences[number] + ".";
    paragraph.push(sent);
  }

  return paragraph.join(" ");
}

function generateDefaultParagraph() {
  let paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac lectus ullamcorper lorem vestibulum interdum et in augue. Quisque venenatis risus id urna dapibus luctus. Sed pretium purus vel quam elementum, eu maximus massa tristique. Aliquam imperdiet mauris vitae pretium faucibus.";

  const para = document.createElement("p");
  const node = document.createTextNode(paragraph);
  para.appendChild(node);

  result.appendChild(para);

  updateCounters();
}

function copyText() {
  const paraArray = Array.from(result.children);
  let string = "";

  paraArray.forEach((para) => {
    string += para.textContent;
    string += "\n";
  });

  navigator.clipboard.writeText(string);
  alert("Text copied to clipboard");
}

function catchErrors(value) {
  if (isNaN(value) || value <= 0) {
    return true;
  }
}

function updateCounters() {
  let wordCount = getWordCount();
  let letterCount = getLetterCount();

  word_count.innerText = `Word Count: ${wordCount}`;
  letter_count.innerText = `Letter Count: ${letterCount}`;
}

function getWordCount() {
  const paraArray = Array.from(result.children);
  let count = 0;
  paraArray.forEach((para) => {
    count += para.textContent.split(" ").filter((num) => num != "").length;
  });
  return count;
}

function getLetterCount() {
  const paraArray = Array.from(result.children);
  let count = 0;
  paraArray.forEach((para) => {
    count += para.textContent.split("").filter((num) => num != "").length;
  });
  return count;
}

function generateError(str = "Please Enter Valid Numbers") {
  generateDefaultParagraph();
  updateCounters();
  let string = "";
  string = str;
  return alert(string);
}
