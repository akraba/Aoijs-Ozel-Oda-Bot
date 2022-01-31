module.exports = {
  name:"çek",
  code:`
  ✅ **$userTag[$mentioned[1]]** adlı üye <#$voiceID> adlı kanala çekildi.
  $moveUser[$mentioned[1];$voiceID]
  $onlyIf[$voiceID[$mentioned[1]]==$getServerVar[kanal];❎ **$userTag[$mentioned[1]]** adlı üyenin <#$getServerVar[kanal]> adkı kanalda olması lazım.]
  $onlyIf[$mentioned[1]!=;❎ Çekilmesini istediğin üyeyi etiketle.]
  $onlyIf[$authorID==$getChannelVar[özelodakurucu;$voiceID];❎ Bu özel odayı sen kurmamışsın üyeleri kanala çekemezsin.]
  $onlyIf[$getChannelVar[özeloda;$voiceID]==yes;❎ Olduğunuz sesli kanal özel oda olarak tanımlanmamış.]
  $onlyIf[$voiceID!=;❎ Özel odana girip tekrar dene]
 `
  }
