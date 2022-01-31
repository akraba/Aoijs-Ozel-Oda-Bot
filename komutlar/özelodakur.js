module.exports = {
  name:"özel-oda-kur",
  code:`
  ✅ <@$authorID> Sana özel bir oda kuruldu!
  $setChannelVar[özelodakurucu;$authorID;$get[kanal]]
  $setChannelVar[özeloda;yes;$get[kanal]]
  $moveUser[$authorID;$get[kanal]]
  $modifyChannelPerms[$get[kanal];+connect;+speak;$authorID]
  $modifyChannelPerms[$get[kanal];-connect;$guildID]
  $let[kanal;$createChannel[$message;voice;yes;$getServerVar[kategori]]]
  $onlyIf[$voiceID==$getServerVar[kanal];❎ <#$getServerVar[kanal]> Adlı ses kanalına girip tekrar dene.]
  $onlyIf[$getServerVar[kanal]!=;❎ Kanal ayarlayın]
  $onlyIf[$getServerVar[kategori]!=;❎ Kategori ayarlayın]
  `
  }
