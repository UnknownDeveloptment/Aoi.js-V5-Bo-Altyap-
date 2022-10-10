module.exports = ({
  name: "prefix",
  code: `$setServerVar[prefix;$message[1]]
$onlyPerms[admin;Bu komutu sadece **Admin** yetkisi olanlar kullanabilir.]
$title[Prefix Ayarlandı]
$description[Bu sunucuda prefixim başarı ile \`$message[1]\` ayarlandı.]
$color[24f600]
$onlyIf[$getServerVar[prefix]!=$message[1];Bu sunucudaki prefixim zaten \`$message[1]\`]
$argsCheck[&gt;;Prefixi yazmadan nasıl ayarlıyayım?]
$suppressErrors`
}
