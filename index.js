const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token:process.env.bot,
  prefix:"$getServerVar[prefix]",
  intents:["GUILDS", "GUILD_MESSAGES"]
})

//Eventler.
bot.onMessage() 

//Komutların alınıcağı klasör.
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

const {Panel} = require("@akarui/aoi.panel")

//Bot Paneliniz.
const panel = new Panel({
    username:"Kullanıcı",//Kullanıcı adınız.
    password:"Şifre",//Şifreniz.
    secret:"aoijs",//Packageniz.
    port: 8080,
    bot: bot,//Bot clientiniz.
    mainFile:"index.js",//Ana dosyanız.
    commands:"komutlar"//Komutların eklenip sileneceği klasör.
})
panel.loadPanel()//Panel yükeleme eventi.

panel.onError()//Hata eventi.

//Hazır Eventi.
bot.readyCommand({
    channel:"",
    code:`$log[Bot $userTag[$clientID] adıyla başlatıldı!]`
})

//Bot durumu.
bot.status({
  text:"Aoi.js V5 Boş Altyapı",
  type:"PLAYING",//PLAYING,WATCHING,LISTENING,STREAMING,COMPETING.
  status:"online",//idle,dnd,online,invisible.
  time: 12//Zaman
})

//Not: STREAMING yazarsanız url:"yt vidyo yada twich yayın linki" ekleyin.

//Variableler.
bot.variables({
prefix:"Prefixinizi yazınız."
})
