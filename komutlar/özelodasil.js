module.exports = {
  name:"özel-oda-sil",
  aliases:"özel-oda-kapat",
  code:`
  ✅ <@$authorID> Özel odanız kapatıldı!
  $deleteChannels[$voiceID]
  $onlyForIDs[$getChannelVar[özelodakurucu;$voiceID];❎ Bu özel odayı sen kurmamışsın silemezsinde.]
  $onlyIf[$getChannelVar[özeloda;$voiceID]!=no;❎ Olduğunuz sesli kanal özel oda kanalı olarak tanımlanmamış.]
  `
  }
