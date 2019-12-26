const data = [
    {
      name: "Alumax",
      href: "www.alumaxshowerdoor.com",
      products: ["shower_doors"],
      styles: [],
      review: [],
    },
    {
      name: "Amba",
      href: "www.ambaproducts.com",
      products: ["towel_warmers"],
      styles: [],
      review: [],
    },
    {
      name: "Aquatic",
      href: "aquaticbath.com",
      products: ["tubs_acrylic"],
      styles: [],
      review: [],
    },
    {
      name: "Artos",
      href: "artos-westover.com",
      products: ["towel_warmers", "faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Ayre",
      href: "ayrelight.com",
      products: ["lighting"],
      styles: [],
      review: [],
    },
    {
      name: "Bain Ultra",
      href: "www.bainultra.com",
      products: ["tubs_acrylic"],
      styles: [],
      review: [],
    },
    {
      name: "Barclay",
      href: "www.barclayproducts.com",
      products: ["tubs_castiron", "sinks", "toilets"],
      styles: [],
      review: [],
    },
    {
      name: "Basco",
      href: "www.bascoshowerdoor.com",
      products: ["shower_doors"],
      styles: [],
      review: [],
    },
    {
      name: "Berenson Hardware",
      href: "www.berensonhardware.com",
      products: ["hardware"],
      styles: [],
      review: [],
    },
    {
      name: "Bertch",
      href: "www.bertch.com",
      products: ["cabinets"],
      styles: [],
      review: [],
    },
    {
      name: "Brizo",
      href: "www.brizo.com",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Century Bathworks",
      href: "www.centurybathworks.com",
      products: ["shower_doors"],
      styles: [],
      review: [],
    },
    {
      name: "Cheviot",
      href: "www.cheviotproducts.com",
      products: ["faucets", "tubs_acrylic", "tubs_castiron", "sinks", "toilets"],
      styles: [],
      review: [],
    },
    {
      name: "Chicago Facuet",
      href: "www.chicagofaucets.com",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Decolav",
      href: "www.decolav.com",
      products: ["sinks", "countertops", "cabinets"],
      styles: [],
      review: [],
    },
    {
      name: "Delta",
      href: "www.deltafaucet.com/index.html",
      products: ["faucets", "tubs_acrylic", "toilets"],
      styles: [],
      review: [],
    },
    {
      name: "Dornbracht",
      href: "https://www.dornbracht.com/en",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Duravit",
      href: "www.duravit.us/html/default/home.us-en.html#/welcome",
      products: ["sinks", "toilets", "tubs_acrylic"],
      styles: [],
      review: [],
    },
    {
      name: "DXV",
      href: "www.dxv.com/en",
      products: ["sinks", "faucets", "toilets", "tubs_acrylic"],
      styles: [],
      review: [],
    },
    {
      name: "Everpure",
      href: "everpure.pentair.com",
      products: ["water_filtration"],
      styles: [],
      review: [],
    },
    {
      name: "EWS",
      href: "https://www.ewswater.com",
      products: ["water_filtration"],
      styles: [],
      review: [],
    },
    {
      name: "Fairmont",
      href: "www.fairmontdesigns.com/bath",
      products: ["vanities", "cabinets", "mirrors", "sink_tops"],
      styles: [],
      review: [],
    },
    {
      name: "Feiss",
      href: "www.feiss.com",
      products: ["lighting", "mirrors"],
      styles: [],
      review: [],
    },
    {
      name: "Fleurco",
      href: "www.fleurco.com",
      products: ["shower_doors", "tubs_acrylic", "mirrors", "vanities"],
      styles: [],
      review: [],
    },
    {
      name: "Foremost",
      href: "www.foremostbath.com",
      products: ["vanities", "sink_tops"],
      styles: [],
      review: [],
    },
    {
      name: "Geberit",
      href: "www.geberitnorthamerica.com",
      products: ["toilets", "bidets", "urinals", "tubs_acrylic"],
      styles: [],
      review: [],
    },
    {
      name: "Gerber",
      href: "www.gerberonline.com",
      products: ["toilets", "sinks", "faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Gessi",
      href: "www.gessi.com",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Ginger",
      href: "www.gingerco.com",
      products: ["accessories"],
      styles: [],
      review: [],
    },
    {
      name: "Glasscrafters",
      href: "www.glasscraftersinc.com",
      products: ["shower_doors", "mirrors"],
      styles: [],
      review: [],
    },
    {
      name: "Graff",
      href: "www.graff-faucets.com/en",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Grohe",
      href: "www.grohe.com/us",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Hansgrohe",
      href: "www.hansgrohe-usa.com",
      products: ["faucets", "tubs_acrylic"],
      styles: [],
      review: [],
    },
    {
      name: "Harrington Brass",
      href: "www.harringtonbrassworks.com",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Hydrosystems",
      href: "https://hydrosystem.com",
      products: ["tubs_acrylic", "sinks"],
      styles: [],
      review: [],
    },
    {
      name: "Icera",
      href: "https://www.icerausa.com",
      products: ["toilets", "bidets", "sinks"],
      styles: [],
      review: [],
    },
    {
      name: "Infinity Drain",
      href: "infinitydrain.com",
      products: ["drains"],
      styles: [],
      review: [],
    },
    {
      name: "Insinkerator",
      href: "shop.insinkerator.com/?utid=sem&amp;gclid=CLu3lNyp5skCFQooaQodi7sC-g",
      products: ["garbage_disposal"],
      styles: [],
      review: [],
    },
    {
      name: "Invisia",
      href: "www.invisiacollection.com",
      products: ["safety"],
      styles: [],
      review: [],
    },
    {
      name: "Jaclo",
      href: "www.jaclo.com",
      products: ["faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Just",
      href: "www.justmfg.com",
      products: ["sinks", "faucets"],
      styles: [],
      review: [],
    },
    {
      name: "Kartners",
      href: "www.kartners.com",
      products: ["accessories"],
      styles: [],
      review: [],
    },
    {
      name: "Kimball &amp; Young",
      href: "www.aptations.com",
      products: ["mirrors"],
      styles: [],
      review: [],
    },
    {
      name: "Kohler",
      href: "www.kohler.com",
      products: ["faucets", "sinks", "toilets", "tubs_acrylic", "shower_doors"],
      styles: [],
      review: [],
    },
    {
      name: "Lacava",
      href: "www.lacava.com",
      products: ["tubs_acrylic", "sinks", "faucets", "toilets", "vanities", "cabinets", "mirrors", "accessories"],
      styles: [],
      review: [],
    },
    {
      name: "Lakes Bathrooms",
      href: "lakesbathrooms.co.uk",
      products: ["shower_doors"],
      styles: [],
      review: [],
    },
    {
      name: "Laufen",
      href: "www.us.laufen.com/en",
      products: ["tubs_acrylic", "sinks", "faucets", "toilets", "bidets", "vanities", "cabinets", "accessories"],
      styles: [],
      review: [],
    },
    {
      name: "Linkasink",
      href: "www.linkasink.com",
      products: ["sink_tops", "fancy"],
      styles: [],
      review: [],
    },
    {
      name: "MAAX/Pearl",
      href: "www.maax.com/en",
      products: ["tubs_acrylic", "shower_doors"],
      styles: [],
      review: [],
    },
    {
      name: "Moen",
      href: "www.moen.com",
      products: ["faucets", "lighting", "accessories"],
      styles: [],
      review: [],
    },
    {
      name: "Mountain Products",
      href: "mountainplumbing.com",
      products: ["plumbing"],
      styles: [],
      review: [],
    },
    {
      name: "Mr. Steam",
      href: "www.mrsteam.com",
      products: ["steam"],
      styles: [],
      review: [],
    },
    {
      name: "MTI",
      href: "mtibaths.com",
      products: ["tubs_acrylic", "sinks", "vanities"],
      styles: ["modern"],
      review: [],
    },
    {
      name: "Myson",
      href: "www.myson.co.uk",
      products: ["towel_warmers", "radiators", "heated_floors"],
      styles: [],
      review: [],
    },
    {
      name: "Native Trails",
      href: "www.nativetrails.net",
      products: ["sinks", "tubs_copper", "tubs_concrete", "vanities", "mirrors", "accessories"],
      styles: ["contemporary", "transitional"],
      review: ["nope"],
    },
    {
      name: "Neptune",
      href: "produitsneptune.com/en",
      products: ["tubs_acrylic", "toilets", "sinks", "faucets"],
      styles: ["contemporary", "traditional", "transitional"],
      review: [],
    },
    {
      name: "Newport Brass",
      href: "www.newportbrass.com",
      products: ["faucets", "accessories"],
      styles: [],
      review: [],
    },
    {
      name: "Oceania",
      href: "www.oceania-attitude.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Oliveri",
      href: "www.oliverisinks.com/us",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Panasonic",
      href: "shop.panasonic.com/home-and-office/power-tools-and-ventilation-systems/ventilation-systems/ceiling-insert-fans#",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Phylrich",
      href: "www.phylrich.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Quiescence Stone",
      href: "www.quiescenceisd.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Richilieu",
      href: "www.richelieu.com/us/en",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Robern",
      href: "www.robern.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Rohl",
      href: "rohlhome.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Ronbow",
      href: "www.ronbow.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Ryvyr",
      href: "ryvyr.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Santec",
      href: "www.santecfaucet.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Schaub",
      href: "schaubandcompany.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Smedbo",
      href: "smedbo.businesscatalyst.com/index.html",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "St. Thomas",
      href: "www.stthomascreations.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Thermasol",
      href: "https://www.thermasol.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Toto",
      href: "www.totousa.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Vanity Flair",
      href: "thefurnitureguild.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Victoria + Albert",
      href: "vandabaths.com/can/americas",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Villeroy &amp; Boch",
      href: "www.villeroy-boch.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Vissoni",
      href: "www.vissoni.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Waterstone",
      href: "www.waterstoneco.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Water Décor",
      href: "www.waterdecor.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Wet Style",
      href: "wetstyle.ca",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Woodpro",
      href: "https://www.woodpro.com",
      products: ["noproducts"],
      styles: [],
      review: [],
    },
    {
      name: "Zucchetti",
      href: "www.zucchettikos.it/en/zucchetti-about-us",
      products: ["noproducts"],
      styles: [],
      review: [],
    }
  ]

export default data;