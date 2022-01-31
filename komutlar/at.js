module.exports = {
  name:"at",
  code:`
  ✅ **$userTag[$mentioned[1]]** adlı üye <#$voiceID> adlı kanaldan atıldı.
  $moveUser[$mentioned[1];$getServerVar[kanal]]
  $onlyIf[$voiceID[$mentioned[1]]==$voiceID;❎ Atmak istediğin üye seninle aynı odada değil.]
  $onlyIf[$mentioned[1]!=;❎ Atmak istediğin üyeyi etiketle.]
  $onlyIf[$authorID==$getChannelVar[özelodakurucu;$voiceID];❎ Bu özel odayı sen kurmamışsın üyeleri odadan atamazsın.]
  $onlyIf[$getChannelVar[özeloda;$voiceID]==yes;❎ Olduğunuz sesli kanal özel oda olarak tanımlanmamış.]
  $onlyIf[$voiceID!=;❎ Özel odana girerek tekrar dene.]
  `
  }
