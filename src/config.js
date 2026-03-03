module.exports = {
  token:
    process.env.DISCORD_TOKEN ||
    "MTQ3ODQ5NjEyODM0ODQ1NDk0Mw.GRU3Sl.iU28hmwLCZBiFvPl1J8eV1A7u3Kfg0JQFCcgAE", // your discord bot token
  clientId: process.env.CLIENT_ID || "1478496128348454943",
  prefix: process.env.PREFIX || ",", // bot prefix
  ownerID: (process.env.OWNER_IDS || "1321883217455874082").split(","), //your discord id
  SpotifyID: process.env.SPOTIFY_ID || "da88073ec4c14c3b8da27a4071482d51", // spotify client id
  SpotifySecret:
    process.env.SPOTIFY_SECRET || "43daf3259ab14b4ab0cc45c98764ac22", // spotify client secret
  ankushcolor: "#ff0000", // embed colour
  bugReportChannel: "", // ID of the channel where bug reports will be sent
  embedColor: "#ff0000", // Using your existing ankushcolor
  supportServer: "https://discord.com/invite/w77ymEU82a", // Your support server link

  nodes: [
    {
      url: `lavalinkv4.serenetia.com:80`,
      name: `NOTHING`,
      auth: `https://dsc.gg/ajidevserver`,
      secure: false,
    },
  ],
};
