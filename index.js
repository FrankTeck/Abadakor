const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "Aba";

client.on("ready", () => {
    console.log("Abajesuila !");
    client.user.setGame("Aba->Commande, /!\ AbaHelp /!\ ");
});

client.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue ' + member.displayName + ' sur le serveur d\'AbaLulu, je t\'invite à aller voir les #règlement, amuse toi bien sur le Discord :smile: ')
    }).catch(console.error)

    var channel = member.guild.channels.find('name', 'ababienvenue_bye');
    if (!channel) return
    var bvn = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("AbaNouveauEstArrivé")
        .setDescription(`\n Bienvenue **${member.user}** sur le Discord d\'AbaBot :AbaLulu:`)
        .setFooter("Je t'invite à aller dans le channel #règlement pour lire les règle du Discord ;)", member.user.displayAvatarURL)
    channel.sendEmbed(bvn)
    //channel.send("Bienvenue toi : **" + member.user + "** sur : **Développeur(euse)s [FR, 2018]**.")
});

client.on('message', message => {

    if (message.content === "Aba") {
        message.reply("Abadakor");
        console.log('le bot a dit abadakor omg');
    }
    if (message.content === "aba") {
        message.reply("Abadakor");
        console.log('le bot a dit abadakor omg');
    }
    if (message.content === "abaxD") {
        message.reply("C'est marrant");
        console.log('le bot a dit C\'est marrant');
    }

    if (message.content === prefix + "Lulu") {
        var help_embed = new Discord.RichEmbed()
            .setColor("#009966")
            .setTitle("LuluTriel")
            .setImage('https://minotar.net/helm/LuluTriel/300.png')
            .addField("AbaLulu", "LuluTriel, #patrone du game, this is AbaLulu")
            .setFooter("#lulu")
        message.channel.sendMessage(help_embed)
        console.log("Un utilisateur veut plus d'info sur Lulu !")
    }
    if (message.content === prefix + "Franklin") {
        var help_embed = new Discord.RichEmbed()
            .setColor("#009966")
            .setTitle("Franklin")
            .setImage("https://minotar.net/helm/FrankTek/300.png")
            .addField("Franklin, pas la tortue, Franklin is a dev")
            .setFooter("#Franklin")
        message.channel.sendMessage(help_embed)
        console.log("Un utilisateur veut plus d'info sur Franklin !")
    }
    if (message.content === prefix + "Enzo") {
        var help_embed = new Discord.RichEmbed()
            .setColor("#009966")
            .setTitle("Enzo")
            .setImage('https://minotar.net/helm/Enzoo8/300.png')
            .addField("Enzoo, le meilleur^^")
            .setFooter("#Enzoo")
        message.channel.sendMessage(help_embed)
        console.log("Un utilisateur veut plus d'info sur Enzo !")
    }
    if (message.content === prefix + "Help") {
        var help_embed = new Discord.RichEmbed()
            .setColor("#009966")
            .setTitle("Abavoila mes commandes!")
            .setDescription("Voici mes commandes disponibles en tant qu'Ababot")
            .addField("AbaDev", "Invitation pour le discord de Crazy\_Street\_")
            .setFooter("Menu d'aide - AbaBot")
        message.channel.sendMessage(help_embed)
        console.log("Un utilisateur a demandé de l'aide!")
    }

    if (message.content === prefix + "Dev") {
        var help_embed = new Discord.RichEmbed()
            .setColor("#009966")
            .setThumbnail("https://minotar.net/helm/Crazy_Street_/300.png")
            .setTitle("AbaDiscord de Crazy\_Street\_")
            .setDescription("Voici le lien pour le discord de Crazy\_Street\_")
            .addField("AbaDiscord:", "https://discord.gg/JQZ5TKS")
            .setFooter("Invitation Discord - AbaBot")
        message.channel.sendMessage(help_embed)
        console.log("Un utilisateur a demandé de l'aide!")
    }
});

client.login(process.env.TOKEN);
