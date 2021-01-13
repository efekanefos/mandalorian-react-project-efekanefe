import React from "react";

function About() {
  return (
    <div id="about" className="container-fluid">
      <h3 id="mando" className="pt-3 text-center">
        The Mandalor
      </h3>
      <div className="row text-center">
        <div className="col-sm">
          <img
            className="pt-5"
            id="mandoimg"
            src="https://media1.tenor.com/images/710b630a7d3407b0b58c66f76ba7fcc5/tenor.gif?itemid=16072592"
          />
        </div>
        <div className="col-sm">
          <p id="mandoinfo" className="pt-5 mx-auto d-block">
            "Mando" ve "Mandalor" olarak da bilinen Din Djarin, Yeni Cumhuriyet
            Devri'nde yaşamış erkek bir insan olan ödül avcısıydı. Kendisi,
            Mandalor zırhı ve özgün beskar kaskı ile iyi donanımlı ve geçmişi
            gizem perdeleri ardında olan bir bireydi. Küçük yaşta yetim kalmış
            ve bir Kimsesiz olarak Nevarro'da faaliyet gösteren Mandalorlar
            tarafından bir savaşçı olarak eğitilmiş ve eninde sonunda Kavim'e
            katılmış Djarin, gitgide daha da tehlikeli olan galakside zamanla
            savaş görmüş, öz ve kayda değer bir paralı asker olmuştu.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <h3 id="moff" className="pt-4 text-center">
        Moff Gideon
      </h3>
      <div className="row text-center">
        <div className="col-sm order-xl-1 order-lg-1 order-md-2 order-sm-2 order-xs-2">
          <p id="gideoninfo" className="pt-5 mx-auto d-block">
            Gideon, Galaktik İmparatorluk 'un emniyet teşkilatı ve istihbarat
            ajansı olan İmparatorluk Güvenlik Bürosu 'nda bir subay olarak
            hizmet veren erkek bir insandı.YSS 9 yılında Moff pozisyonuna
            yükselmiş ve stormtrooper, keşif askeri, ölüm askeri ve incinerator
            askerleri içeren bir İmparatorluk kalıntısını yönetiyordu.Gideon
            sofistike, bilgili ve düzen getirmekte kararlıydı.Etkileyici ve
            amacına ulaşmak için kendi askerlerini öldürecek kadar acımasızdı.
          </p>
        </div>
        <div className="col-sm order-xl-2 order-lg-2 order-md-1 order-sm-1 order-xs-1">
          <img
            className="pt-5"
            id="moffimg"
            src="https://64.media.tumblr.com/6b35df5d204f4f80ca3c7459fdda9aec/9162dd71fe92a51c-05/s400x600/1242d14b1bf0899b858ec2ef38ad5d4cf80c2bf3.gifv"
          />
        </div>
      </div>
      <br />
      <hr />
      <h3 id="yoda" className="pt-3 text-center">
        Baby Yoda
      </h3>
      <div className="row text-center">
        <div className="col-sm">
          <img
            className="pt-5"
            id="yodaimg"
            src="https://media0.giphy.com/media/j4q4h9uWKWwnYT1k3Z/giphy.gif"
          />
        </div>
        <div className="col-sm">
          <p id="yodainfo" className="pt-5 mx-auto d-block">
            "Çocuk" olarak da bilinen Grogu, Güç'e hassas erkek bir Mandalor
            kimsesiziydi. Jedi Büyük Usta Yoda ve Jedi Ustası Yaddle ile aynı
            türün üyesi olan Grogu, YSÖ 41 yılında doğmuş ve Coruscant'taki Jedi
            Tapınağı'nda büyütülmüştü. Yeni Cumhuriyet Devri'nde bir noktada
            Nikto paralı askerler tarafından Arvala-7 gezegenindeki bir
            sığınakta tutulan Grogu, elli yaşında olmasına rağmen daha bir
            bebekti ve onu bulması için Moff Gideon'ın adına Din Djarin'i işe
            alacak olan İmparatorluk üyesi tarafından aranıyordu.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <h3 id="kuil" className="pt-4 text-center">
        Kuill
      </h3>
      <div className="row text-center">
        <div className="col-sm order-xxl-0 order-xl-0 order-lg-0 order-md-0 order-sm-1 order-xs-1">
          <p id="kuilinfo" className="pt-5 mx-auto d-block">
            Kuiil was an Ugnaught male who had worked a lifetime to be free of
            servitude. He came to the out-of-the-way planet of Arvala-7 seeking
            peace, and worked as a vapor farmer who offered valuable skills to
            those who could meet his price. Eventually, criminals and
            mercenaries trespassed on his world during the time of the New
            Republic, and at some point Kuiil encountered the Mandalorian bounty
            hunter Din Djarin. After the plan to relieve Grogu from being hunted
            went poorly, Kuiil was eventually tracked down, shot, and killed by
            Imperial scout troopers on speeder bikes.
          </p>
        </div>
        <div className="col-sm order-xxl-1 order-xl-1 order-lg-1 order-md-1 order-sm-0 order-xs-0">
          <img
            className="pt-5 pb-3"
            id="kuilimg"
            src="https://64.media.tumblr.com/e63ee891b86018e6bc83f47576c5f86e/b31220b4817cb8a3-dd/s400x600/7a744d2ce26d440b525d99dc0424286e3d33e25c.gifv"
          />
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
