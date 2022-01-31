module.exports = {
name:"özel-oda",
code:`
$if[$message[1]==kategori]
✅ Özel oda kategorisi **$channelName[$message[2]]** olarak ayarlandı!
$setServerVar[kategori;$message[2]]
$onlyIf[$channelType[$message[2]]==category;❎ Bu bir kategori değil.]
$onlyIf[$channelExists[$message[2]]==true;❎ Böyle bir kategori yok.]
$onlyIf[$message[2]!=;❎ Kategori ID'si girin.]
$endif

$if[$message[1]==kanal]
✅ Özel oda kanalı **$channelName[$message[2]]** olarak ayarlandı!
$setServerVar[seskanalı;$message[2]]
$onlyIf[$channelType[$message[2]]==voice;❎ Bu bir ses kanalı değil.]
$onlyIf[$channelExists[$message[2]]==true;❎ Böyle bir ses kanalı yok.]
$onlyIf[$message[2]!=;❎ Ses kanalı ID'si girin.]
$endif

$if[$message[1]==kapat
✅ Özel oda sistemi kapatıldı!
$setServerVar[kategori;]
$setServerVar[kanal;]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];kategori;kanal;kapat]==true;❎ **kategori** , **kanal** , **kapat** seçeneklerini kullanın.]
$onlyPerms[admin;❎ Bunu kullanamazsın.]
`
} 
