// Options the user could type in
const prompts = [
  ["hi", "hey", "hallo", "selamat pagi", "selamat siang"],
  ["gimana kabarmu", "bagaimana harimu", "gimana semuanya"],
  ["kamu lagi apa", "apa yang terjadi", "ada apa"],
  ["umur kamu berapa"],
  ["kamu siapa", "apakah kamu orang", "apakah kamu bot", "kamu itu manusia atau bot"],
  ["siapa yang buat kamu", "kamu dibuat siapa"],
  [
    "nama kamu dong",
    "nama kamu",
    "boleh aku tau nama kamu",
    "siapa namamu",
    "gimana kamu manggil dirimu sendiri"
  ],
  ["aku sayang kamu"],
  ["senang", "baik", "menyenangkan", "luar biasa", "indah", "kece"],
  ["buruk", "bosenn", "capek"],
  ["tolong aku", "kasih aku cerita dong", "kasih aku lelucon"],
  ["ah", "iya", "oke", "baik", "bagus"],
  ["dadahh", "dah", "goodbye", "sampe ketemu nanti yes"],
  ["menurut kamu aku harus makan apa hari ini"],
  ["bro"],
  ["apa", "kenapa", "bagaimana", "dimana", "kapan"],
  ["engga","gayakin sih","mungkin","engga makasih"],
  [""],
  ["haha","ha","HAHAHAHAH","hehe","lucu","lawak"],
  ["kamu sudah makan"],
  ["bisakah kamu menjadi teman curhatku"],
  ["tentu, gimana kalo Dion"],
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "hallo","Howdy"],
  [
    "baik.. gimana kabarmu",
    "baik sih, kamu gimana",
    "luar biasa, kalau kamu?"
  ],
  [
    "gaada yang keren si",
    "baru mau tidur",
    "coba kamu tebak?",
    "sebenernya aku gatau"
  ],
  ["aku tidak terbatas"],
  ["aku cuman bot kok", "aku bot. kalo kamu apa?"],
  [" JavaScript"],
  ["bisakah kamu memberiku nama"],
  ["aku sayang kamu jugaa", "aku juga"],
  ["Kamu pernah ngerasa sedih?", "senang mendengarnya"],
  ["kenapa?", "kenapa? kamu ga boleh!", "coba nonton tv"],
  ["gimana kalau?", "pada suatu hari.."],
  ["coba ceritain aku sesuatu", "kasih aku lelucon", "coba ceritakan tentang dirimu"],
  ["dadahh", "Goodbye", "sampe bertemu kembali"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["pertanyaan bagus"],
  ["itu gapapa ","aku ngerti ko","kamu mau bicarain tentang apa?"],
  ["ngomong sesuatu dong :("],
  ["Haha!","Bagus!"],
  ["iya, aku sudah makan"],
  ["tentu saja aku bisa menjadi teman dan tempat kamu bercerita"],
  ["waw nama yang bagus, terimakasih"],
]


// Random for any other user input

const alternative = [
  "Sama",
  "coba aja..",
  "Bro...",
  "coba lagi",
  "aku dengerin...",
  "aku gangerti:/"
]

// Whatever else you want :)

const coronavirus = ["mohon terus dirumah", "jangan lupa pake masker", "untungnya, aku gaada covid", "ini adalah waktu yang sangat tidak menyenangkan"]