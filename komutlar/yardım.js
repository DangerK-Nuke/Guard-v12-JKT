const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {


  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

var prefix = ayarlar.prefix

message.channel.send(new Discord.MessageEmbed()
.setColor('#FF000')
.setDescription(`**FactorBot Yardım Menüsüne Hoşgeldiniz.**
**
ANA KOMUTLAR 
__________________

d!yardım | Tüm Komutları Sıralar.
d!ban  | Etiketlediğiniz Kişiyi Banlar
d!botbilgi | Botun bilgilerini gösterir.
d!davet | Botun davet linkini atar.
d!emojikoruma | Sunucunuzdaki Emojileri Korur.
d!kanalkoruma | Sunucunuzdaki Kanalları Korur.
d!kick | Etiketlediğiniz Kişiyi Banlar.
d!küfürengel | Chatteki küfürleri engeller.
d!reklamengel | Chatteki reklamları engeller.
d!ping | Botun pingini gösterir.
d!rol-koruma | Sunucunuzdaki Rolleri korur.
d!sil | Belirttiğiniz sayıda mesajları siler.
d!uban | Banladığınız kişinin banını kaldırır.
d!slowmode | Yavaş modu aktif eder.

**`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ' ')
)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botta ki Komutları Gösterir.',
  usage: 'yardım'
};