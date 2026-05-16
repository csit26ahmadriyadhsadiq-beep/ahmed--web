const data = [
  /* ===== علماء ===== */

  {
    title:
      "محمد بن عبدالله نبي ورسول من الله ولد عام 571 ميلادي و توفي عام 632",

    text: "نبي و رسول من الله كان عظيم الاخلاق   .",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Muhammad_Masjid_an-Nabawi_Calligraphy.svg/500px-Muhammad_Masjid_an-Nabawi_Calligraphy.svg.png",
    bio: "مثل المؤمن مثل النحله لا تأكل الا طيبا ولا تضع الا طيبا وان وقفت على عود نخلا لن تكسره  .",
  },
  {
    title: "ألبرت أينشتاين",

    text: "عالم فيزياء وضع نظرية النسبية ولد عام 1879.",

    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    bio: "ولد في ألمانيا 1879، وغيّر مفهوم الزمن والطاقة في الفيزياء.",
  },

  {
    title: "إسحاق نيوتن",

    text: "مكتشف قوانين الحركة والجاذبية.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/250px-GodfreyKneller-IsaacNewton-1689.jpg",
    bio: "أسس الفيزياء الكلاسيكية في القرن 17.",
  },

  {
    title: "زها حديد",

    text: "  معمارية عراقية عالمية.",

    img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Zaha_Hadid_in_Heydar_Aliyev_Cultural_center_in_Baku_nov_2013_%28cropped%29.jpg",
    bio: "غيرت شكل الهندسة المعمارية الحديثة.",
  },

  {
    title: "تشارلز بابيج",

    text: "أب الحاسوب.",

    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Charles_Babbage_-_1860.jpg",
    bio: "صمم أول فكرة للحاسوب الميكانيكي.",
  },

  {
    title: "ماري كوري",

    text: "اكتشفت الراديوم والبولونيوم.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mariecurie.jpg/960px-Mariecurie.jpg",
    bio: "أول امرأة تحصل على نوبل مرتين.",
  },

  {
    title: "ماكس بلانك",

    text: "مؤسس فيزياء الكم.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Max_Planck_%281858-1947%29.jpg/960px-Max_Planck_%281858-1947%29.jpg",
    bio: "أدخل مفهوم الطاقة الكمومية.",
  },

  /* ===== شعراء ===== */

  {
    title: "المتنبي",

    text: "أشهر شعراء العرب.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Al-Mutanabb%C4%AB%2C_Sayr_mulhimah_min_al-Sharq_wa-al-Gharb.png/250px-Al-Mutanabb%C4%AB%2C_Sayr_mulhimah_min_al-Sharq_wa-al-Gharb.png",
    poem: "وسمعت كلماتي من به صمم \nانا الذي نظر الاعمى الى ادبي",

    bio: "  شاعر عباسي عظيم.",
  },

  {
    title: "الجواهري",

    text: "شاعر العراق الأكبر.",

    img: "https://www.aldiwan.net/public/images/profile/jawahiri.jpg",
    poem: "سلامٌ على هضبات العراقِ\nوشطّيه والجرف والمنحنى",

    bio: "شاعر سياسي ووطني.",
  },

  {
    title: "وليام تيندال ولد عام 1494 واعدم خنق  سنه 1536",

    text: "وهوه عالم عقيده ولغوي ومترجم سبب الاعدام ترجم الانجيل من العبريه الى الانجلزيه  .",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/William_Tyndale.jpg/960px-William_Tyndale.jpg",
    bio: "ولد في مملكه انجلترا و درس في جامعه أوكسفورد .",
  },

  {
    title: "مخائيل سيرفيتوس ولد عام 1511 وقتل حرقا عام  في سويسرا 1553 ",

    text: "فيلسوف وفيزيائي و طبيب وعالم دين اسباني  .",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Michael_Servetus.jpg/500px-Michael_Servetus.jpg",
    poem: " ",
    bio: "سبب وفاة رفض عقيدة الثالوث وايضا بسبب رأيه في الصفات الاهوتيه.",
  },
  {
    title: "أبو العلاء المعري",

    text: "فيلسوف وشاعر.",

    img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Al-Ma%CA%BFarri_by_Khalil_Gibran_%28cropped%29.png",
    poem: "هذا ما جناه أبي عليّ\nوما جنيتُ على أحد",

    bio: "ناقد للفكر الاجتماعي.",
  },
  {
    title: " أبرهام لنكولن",

    text: "الرئيس السادس عشر للولايات المتحده ولدسنه 1809 وقتل عام 1865 ايضا حارب الطائفيه (الحرب الاهليه) و انها العبوديه.",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRCXp5gjLrCFCz7rcuBpSNavyD95QNzH8q_rE79x1A30bzdFydbZcuk_J5NWDIESSarutZb3zUEFPNz6CC4GGFA-RTW9bIYFNQFamqE8r&s=10",
    bio: "  اذا اعطيتني ست ساعات لقطع شجرة فسأقضي الأربع  الاولى في شحذ الفأس.",
  },

  {
    title: "محمد بن باقر بن حيدر بن سماعيل الصدر",

    text: " رجل دين شيعي ولد عام 1935 وستشهد عام 1980.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Muhammad_Baqir_al-Sadr.jpg/500px-Muhammad_Baqir_al-Sadr.jpg",
    quote:
      "أنا معك يا أخي وولدي السني بقدر ما أنا معك يا أخي وولدي الشيعي، انا معكما بقدر ما انتما مع الاسلام.",

    bio: "فيلسوف.",
  },

  {
    title: "كمال الحيدري ولد في كربلاء شارع العباس ولد سنه 1956 حي يرزق ",

    text: "رجل دين شيعي.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kamal_al-Haydari_2018.jpg/500px-Kamal_al-Haydari_2018.jpg",
    quote: "تقاس قوه العقل بمقدار تحمل الحقيقه التي لا تناسب عقلك",

    bio: "فيلسوف.",
  },

  {
    title: " جورج واشنطن ولد عام 1732 و توفي عام 1799 ",

    text: "هو اول رئيس للولايات المتحده ويعد اكثر شخصيه تأثيرا في تأسيس الدولة.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/960px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    quote: "صاحب قرار القانوني حريه التعبير عن الرأي",

    bio: "مؤوسس امريكا .",
  },

  /* ===== جيفارا ===== */

  {
    title: "تشي جيفارا",

    text: "ثوري عالمي.",

    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/CheHigh.jpg",
    quote:
      "كن واقعياً واطلب المستحيل وايضا قال لو أمطرت حرية لرأيت بعض العبيد يحملون المظلات",

    bio: "قاد الثورة الكوبية.",
  },

  /* ===== أطباء وعلوم ===== */

  {
    title: "ويليام مورتون",

    text: "مكتشف التخدير (البنج).",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqwsSxNob01iQ5Tzi_5WFTKqEJlP1PIlzUA&s",
    bio: "أول من استخدم التخدير في الجراحة.",
  },

  /* ===== تاريخ ===== */

  {
    title: "حضارة بابل",

    text: "حضارة عراقية قديمة.",

    img: "https://sabahalnassery.wordpress.com/wp-content/uploads/2015/05/jardin13.jpg",
    bio: "أول حضارة قانونية متطورة.",
  },

  {
    title: "حمورابي",

    text: "ملك بابل.",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-PyoyY13x-D8IwDUm40ztiI4VgJG7Pyz_g&s",
    bio: "وضع أول قانون مكتوب.",
  },

  /* ===== رياضة ===== */

  {
    title: "ارسن فنكر ولد عام 1949 حي يرزق",

    text: " لاعب فرنسي و مدرب كره قدم للفريق ارسنال.",

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Ars%C3%A8ne_Wenger_-_240422_192850_%28cropped%29.jpg/500px-25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Ars%C3%A8ne_Wenger_-_240422_192850_%28cropped%29.jpg",
    quote: "في بعض الانديه النجاح حادث لكن في ارسنال هو واجب.",

    bio: " لعب في فريق موتزيغ.",
  },

  {
    title: "ليونيل ميسي",

    text: "أعظم لاعب كرة قدم.",

    img: "https://www.altaj.news/wp-content/uploads/2022/12/63a19b3051ef6-7.jpeg?",
    bio: "حقق كأس العالم 2022.",
  },

  {
    title: "أدريانو",

    text: "لاعب برازيلي قوي.",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGflWssGW_O0Euok4DYfDuOaJZSIMzrJ8JmQ&s",
    bio: "مهاجم إنتر ميلان السابق.",
  },

  /* ===== شركات ===== */

  {
    title: "آبل",

    text: "شركة تقنية أمريكية.",

    img: "https://fikra.shop/uploads/img_1673212241.jpg",
    bio: "أسسها ستيف جوبز.",
  },

  {
    title: "سامسونك",

    text: "شركة إلكترونيات كورية.",

    img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Logo_samsung_5.jpg",
    bio: "شركة هواتف وتلفزيونات.",
  },

  /* ===== بدون صورة ===== */

  {
    title: "أحمد علي",

    text: "أستاذ في جامعة كربلاء من مواليد 1996 حي يرزق.",

    img: "aa/ahmed.png.jpg",
    bio: "  يعمل في التدريس الجامعي.",
  },
];

function getField(d, arKey, enKey) {
  return d[arKey] || d[enKey] || "";
}

/* ===== عرض ===== */

function load() {
  let g = document.getElementById("grid");
  if (!g) return;

  g.innerHTML = "";

  data.forEach((d, i) => {
    const title = getField(d, "title", "enTitle");
    const text = getField(d, "text", "enText");
    g.innerHTML += `
<div class="card" onclick="openPopup(${i})" dir="auto">
${d.img ? `<img src="${d.img}">` : ""}
<h3>${title}</h3>
<p>${text}</p>
</div>
`;
  });
}

function openPopup(index) {
  const d = data[index];
  if (!d) return;

  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  popup.dir = "auto";

  document.getElementById("title").innerText = getField(d, "title", "enTitle");
  document.getElementById("text").innerText = getField(d, "text", "enText");
  const bio = getField(d, "bio", "enBio");
  const extra =
    getField(d, "poem", "enPoem") || getField(d, "quote", "enQuote") || "";
  document.getElementById("extra").innerText =
    bio + (extra ? "\n\n" + extra : "");
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function init() {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "auto";
  load();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/* ===== SEARCH ===== */

function search() {
  let v = document.getElementById("search").value.toLowerCase();

  document.querySelectorAll(".card").forEach((c) => {
    c.style.display = c.innerText.toLowerCase().includes(v) ? "block" : "none";
  });
}
