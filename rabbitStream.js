const CryptoJS = require("./cryptojs")
const $ = require('./jquery')
const fs = require('fs')
const { JSDOM } = require("jsdom");

// Create a fake DOM
const html = fs.readFileSync('test.html','utf-8')
// console.log(html)

//creating fake window here 👀
const dom = new JSDOM(html);

// Access the fake window object
global.window = dom.window;
global.document = dom.window.document;
// jaw player starts from here 
(() => {
  var B9;
  var BB;
  var Bm;
  var BJ;
  var Bh = {
    696: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Br,
      });
      const Br = {
        advertising: {
          admessage: "This ad will end in xx",
          cuetext: "Advertisement",
          displayHeading: "Advertisement",
          loadingAd: "Loading ad",
          podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
          skipmessage: "Skip ad in xx",
          skiptext: "Skip",
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
          badConnection:
            "This video cannot be played because of a problem with your internet connection.",
          cantLoadPlayer: "Sorry, the video player failed to load.",
          cantPlayInBrowser: "The video cannot be played in this browser.",
          cantPlayVideo: "This video file cannot be played.",
          errorCode: "Error Code",
          liveStreamDown: "The live stream is either down or has ended.",
          protectedContent:
            "There was a problem providing access to protected content.",
          technicalError:
            "This video cannot be played because of a technical error.",
        },
        exitFullscreen: "Exit Fullscreen",
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        logo: "Logo",
        mute: "Mute",
        next: "Next",
        nextUp: "Next Up",
        notLive: "Not Live",
        off: "Off",
        pause: "Pause",
        pipIcon: "Picture in Picture (PiP)",
        play: "Play",
        playback: "Play",
        playbackRates: "Playback Rates",
        player: "Video Player",
        poweredBy: "Powered by",
        prev: "Previous",
        related: {
          autoplaymessage: "Next up in xx",
          heading: "More Videos",
        },
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {
          copied: "Copied",
          email: "Email",
          embed: "Embed",
          heading: "Share",
          link: "Link",
        },
        slider: "Seek",
        stop: "Stop",
        unmute: "Unmute",
        videoInfo: "About This Video",
        volume: "Volume",
        volumeSlider: "Volume",
        shortcuts: {
          playPause: "Play/Pause",
          volumeToggle: "Mute/Unmute",
          fullscreenToggle: "Fullscreen/Exit Fullscreen",
          seekPercent: "Seek %",
          keyboardShortcuts: "Keyboard Shortcuts",
          increaseVolume: "Increase Volume",
          decreaseVolume: "Decrease Volume",
          seekForward: "Seek Forward",
          seekBackward: "Seek Backward",
          spacebar: "SPACE",
          captionsToggle: "Captions On/Off",
          shortcutsToggle: "Shortcuts Open/Close",
        },
        captionsStyles: {
          subtitleSettings: "Subtitle Settings",
          color: "Font Color",
          fontOpacity: "Font Opacity",
          userFontScale: "Font Size",
          fontFamily: "Font Family",
          edgeStyle: "Character Edge",
          backgroundColor: "Background Color",
          backgroundOpacity: "Background Opacity",
          windowColor: "Window Color",
          windowOpacity: "Window Opacity",
          white: "White",
          black: "Black",
          red: "Red",
          green: "Green",
          blue: "Blue",
          yellow: "Yellow",
          magenta: "Magenta",
          cyan: "Cyan",
          none: "None",
          raised: "Raised",
          depressed: "Depressed",
          uniform: "Uniform",
          dropShadow: "Drop Shadow",
        },
        disabled: "Disabled",
        enabled: "Enabled",
        reset: "Reset",
      };
    },
    9128: (Bp, Be, Bx) => {
      "use strict";

      function Br(BO, BY, BS) {
        function Bb() {
          while (BU.length > 0) {
            var { command: BK, args: Bf } = BU.shift();
            (Bn[BK] || BO[BK]).apply(BO, Bf);
          }
        }
        const BU = [];
        const Bn = {};
        BY.forEach((BK) => {
          const Bf = BO[BK];
          Bn[BK] = Bf;
          BO[BK] = function (...Bo) {
            if (BS()) {
              BU.push({
                command: BK,
                args: Bo,
              });
            } else {
              Bb();
              if (Bf) {
                Bf.apply(this, Bo);
              }
            }
          };
        });
        Object.defineProperty(this, "queue", {
          enumerable: true,
          get: () => BU,
        });
        this.flush = Bb;
        this.empty = function () {
          BU.length = 0;
        };
        this.off = function () {
          BY.forEach((BK) => {
            var Bf = Bn[BK];
            if (Bf) {
              BO[BK] = Bf;
              delete Bn[BK];
            }
          });
        };
        this.destroy = function () {
          this.off();
          this.empty();
        };
      }
      Bx.d(Be, {
        Z: () => Br,
      });
    },
    4742: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Br,
      });
      const Br = {
        debug: false,
      };
    },
    5191: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        R: () => BO,
        a: () => Br,
      });
      const Br = function (BY) {
        return (BY = BY.slice && BY.slice(-2) === "px" ? BY.slice(0, -2) : BY);
      };
      const BO = function (BY, BS) {
        var Bb;
        if (BS.toString().indexOf("%") !== -1 && typeof BY == "string" && BY) {
          if (/^\d*\.?\d+%$/.test(BY)) {
            return BY;
          } else if (
            (BS = BY.indexOf(":")) === -1 ||
            ((Bb = parseFloat(BY.substr(0, BS))),
            (BY = parseFloat(BY.substr(BS + 1))),
            Bb <= 0) ||
            BY <= 0
          ) {
            return 0;
          } else {
            return (BY / Bb) * 100 + "%";
          }
        } else {
          return 0;
        }
      };
    },
    5083: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        G0: () => Bf,
        ZP: () => Bo,
        ke: () => BK,
      });
      var Br = Bx(5191);
      var BO = Bx(1569);
      var BY = Bx(9888);
      var BS = Bx(6042);
      var Bb = Bx(8348);
      var BU = Bx(696);
      var Bn = Bx(8518);
      const BK = {
        autoPause: {
          viewability: false,
          pauseAds: false,
        },
        autostart: false,
        allowFullscreen: true,
        bandwidthEstimate: null,
        bitrateSelection: null,
        castAvailable: false,
        controls: true,
        cues: [],
        defaultPlaybackRate: 1,
        displaydescription: true,
        displaytitle: true,
        displayPlaybackLabel: false,
        enableAdLoadingUI: true,
        enableShortcuts: true,
        floating: {
          mode: "never",
        },
        height: 360,
        intl: {},
        item: 0,
        language: "en",
        liveTimeout: null,
        localization: BU.Z,
        mute: false,
        nextUpDisplay: true,
        playbackRateControls: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        renderCaptionsNatively: false,
        repeat: false,
        showUIWhen: "onReady",
        stretching: "uniform",
        volume: 90,
        width: 640,
      };
      const Bf = function (BD) {
        if (BD < 5) {
          return 5;
        } else {
          return BD;
        }
      };
      const Bo = function (BD, BN) {
        var Bk;
        var BL = {};
        if (
          BN &&
          (function (Bd) {
            if (Bd == null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }
            return Object.prototype.hasOwnProperty.call(Object(Bd), "mute");
          })(BN)
        ) {
          if (typeof BN.mute == "boolean") {
            BL.mute = BN.mute;
          }
          delete BN.mute;
        }
        var BL = Object.assign(
          {},
          BL,
          (BL = window) == null || (BL = BL.jwplayer) == null
            ? undefined
            : BL.defaults,
          BN,
          BD
        );
        Bk = BL;
        Object.keys(Bk).forEach((Bd) => {
          if (Bd !== "id") {
            Bk[Bd] = (0, BY.serialize)(Bk[Bd]);
          }
        });
        var BN = BL.forceLocalizationDefaults ? BK.language : (0, Bn.G3)();
        var BD = (0, Bn.tK)(BL.intl);
        BL.localization = (0, Bn.Mh)(BU.Z, (0, Bn.Pm)(BL, BD, BN));
        var Bg = Object.assign({}, BK, BL);
        if (Bg.base === ".") {
          Bg.base = (0, BO.getScriptPath)("jwplayer.js");
        }
        Bg.base = (Bg.base || (0, BO.loadFrom)()).replace(/\/?$/, "/");
        Bx.p = Bg.base;
        Bg.width = (0, Br.a)(Bg.width);
        Bg.height = (0, Br.a)(Bg.height);
        Bg.aspectratio = (0, Br.R)(Bg.aspectratio, Bg.width);
        if (typeof Bg.volume == "string") {
          Bg.volume = parseFloat(Bg.volume);
        }
        Bg.volume = (0, BS.qh)(Bg.volume)
          ? Math.min(Math.max(0, Bg.volume), 100)
          : BK.volume;
        Bg.mute = Boolean(Bg.mute);
        Bg.language = BN;
        Bg.intl = BD;
        var BN = Bg.playlistIndex;
        if (BN) {
          Bg.item = BN;
        }
        if (!(0, BS.hj)(Bg.item)) {
          Bg.item = 0;
        }
        var BD = BL.autoPause;
        if (BD) {
          Bg.autoPause.viewability =
            !("viewability" in BD) || Boolean(BD.viewability);
        }
        var BN = Bg.playbackRateControls;
        if (BN) {
          let Bd = Bg.playbackRates;
          if (
            (Bd = (Bd = Array.isArray(BN) ? BN : Bd)
              .filter((Bt) => (0, BS.hj)(Bt) && Bt >= 0.25 && Bt <= 4)
              .map((Bt) => Math.round(Bt * 100) / 100)).indexOf(1) < 0
          ) {
            Bd.push(1);
          }
          Bd.sort();
          Bg.playbackRateControls = true;
          Bg.playbackRates = Bd;
        }
        if (
          !Bg.playbackRateControls ||
          Bg.playbackRates.indexOf(Bg.defaultPlaybackRate) < 0
        ) {
          Bg.defaultPlaybackRate = 1;
        }
        Bg.playbackRate = Bg.defaultPlaybackRate;
        if (!Bg.aspectratio) {
          delete Bg.aspectratio;
        }
        BL = Bg.playlist;
        if (BL) {
          if (Array.isArray(BL.playlist)) {
            Bg.feedData = BL;
            Bg.playlist = BL.playlist;
          }
        } else {
          const Bt = (0, BS.ei)(Bg, [
            "title",
            "description",
            "type",
            "mediaid",
            "image",
            "images",
            "file",
            "sources",
            "tracks",
            "preload",
            "duration",
            "chapters",
          ]);
          Bg.playlist = [Bt];
        }
        Bg.qualityLabels = Bg.qualityLabels || Bg.hlslabels;
        delete Bg.duration;
        let Ba = Bg.liveTimeout;
        if (Ba !== null) {
          if ((0, BS.qh)(Ba)) {
            if (Ba !== 0) {
              Ba = Math.max(30, Ba);
            }
          } else {
            Ba = null;
          }
          Bg.liveTimeout = Ba;
        }
        BD = parseFloat(Bg.bandwidthEstimate);
        BN = parseFloat(Bg.bitrateSelection);
        Bg.bandwidthEstimate = (0, BS.qh)(BD)
          ? BD
          : (function (Bc) {
              Bc = parseFloat(Bc);
              if ((0, BS.qh)(Bc)) {
                return Math.max(Bc, 1);
              } else {
                return BK.bandwidthEstimate;
              }
            })(Bg.defaultBandwidthEstimate);
        Bg.bitrateSelection = (0, BS.qh)(BN) ? BN : BK.bitrateSelection;
        Bg.liveSyncDuration = Bf(Bg.liveSyncDuration);
        Bg.backgroundLoading = (
          (0, BS.jn)(Bg.backgroundLoading) ? Bg : Bb.Features
        ).backgroundLoading;
        Bg.enableAdLoadingUI =
          !Bb.Features.enableAdLoadingUI || Boolean(Bg.enableAdLoadingUI);
        return Bg;
      };
    },
    2894: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Ep: () => BY,
        Jt: () => BS,
        Tr: () => BO,
        Zq: () => Bb,
      });
      var Br = Bx(4446);
      const BO = {};
      const BY = function (BU, Bn) {
        return () => {
          throw new Br.rG(Br.pJ, BU, Bn);
        };
      };
      const BS = function (BU, Bn) {
        return () => {
          throw new Br.rG(null, BU, Bn);
        };
      };
      const Bb = function () {
        return Bx.e(681)
          .then(
            function (BU) {
              return Bx(7047).default;
            }.bind(null, Bx)
          )
          .catch(BY(Br.fU + 101));
      };
    },
    623: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        ZP: () => m8,
        c2: () => m7,
      });
      var Br = Bx(9128);
      var BO = Bx(2445);
      var BY = Bx(2894);
      var BS = Bx(393);
      var Bb = Bx(8320);
      var BU = Bx(2963);
      var Bn = Bx(670);
      var BK = Bx(4601);
      var Bf = Bx(4446);
      var Bo = Bx(8348);
      let BD = null;
      function BN() {
        var m9 = window.IntersectionObserverEntry;
        return (
          !m9 ||
          !("IntersectionObserver" in window) ||
          !("intersectionRatio" in m9.prototype)
        );
      }
      function Bk() {
        return (
          BN()
            ? Bx.e(943)
                .then(
                  function (m9) {
                    return Bx(6337);
                  }.bind(null, Bx)
                )
                .catch((0, BY.Ep)(Bf.fU + 120))
            : Promise.resolve()
        ).then(BY.Zq);
      }
      const BL = function (m9) {
        var mB;
        var mm = m9.get("controls");
        var mJ = BN();
        var m9 = (function (mh) {
          const mH = mh.get("playlist");
          if (Array.isArray(mH) && mH.length) {
            var mq = (0, Bb.bx)(mh.get("item"), mH.length);
            var mw = (0, Bb.T5)((0, BS.Z)(mH[mq]), mh);
            for (let mx = 0; mx < mw.length; mx++) {
              var mp = mw[mx];
              var me = mh.getProviders();
              for (let mr = 0; mr < BU.B.length; mr++) {
                const mO = BU.B[mr];
                if (me.providerSupports(mO, mp)) {
                  return mO.name === "html5";
                }
              }
            }
          }
          return false;
        })(m9);
        if (Bo.OS.tizen) {
          return Bk();
        } else if (mm && mJ && m9) {
          mB = Bx.e(605)
            .then(
              function (mh) {
                Bx(6337);
                var mH = Bx(7047).default;
                BK.v.controls = Bx(5827).default;
                (0, Bn.Z)(Bx(9181).default);
                return mH;
              }.bind(null, Bx)
            )
            .catch((0, BY.Ep)(Bf.fU + 105));
          return (BY.Tr.html5 = mB);
        } else if (mm && m9) {
          mB = Bx.e(207)
            .then(
              function (mh) {
                var mH = Bx(7047).default;
                BK.v.controls = Bx(5827).default;
                (0, Bn.Z)(Bx(9181).default);
                return mH;
              }.bind(null, Bx)
            )
            .catch((0, BY.Ep)(Bf.fU + 104));
          return (BY.Tr.html5 = mB);
        } else if (mm && mJ) {
          return Bx.e(493)
            .then(
              function (mh) {
                Bx(6337);
                var mH = Bx(7047).default;
                BK.v.controls = Bx(5827).default;
                return mH;
              }.bind(null, Bx)
            )
            .catch((0, BY.Ep)(Bf.fU + 103));
        } else if (mm) {
          return Bx.e(581)
            .then(
              function (mh) {
                var mH = Bx(7047).default;
                BK.v.controls = Bx(5827).default;
                return mH;
              }.bind(null, Bx)
            )
            .catch((0, BY.Ep)(Bf.fU + 102));
        } else {
          return Bk();
        }
      };
      var Bg = Bx(1643);
      var Ba = Bx(7263);
      var Bd = Bx(676);
      var Bt = Bx(8518);
      var Bc = Bx(8675);
      var BR = Bx(8381);
      function BQ(m9, mB, mm) {
        (m9 = m9.attributes).playlist = (0, Bb.ZP)(mB);
        m9.feedData = mm;
      }
      function BV(m9) {
        const mB = m9.get("playlist");
        return new Promise((mm, mJ) => {
          if (typeof mB != "string") {
            const mH = m9.get("feedData") || {};
            BQ(m9, mB, mH);
            return mm();
          }
          var mh = new Ba.Z();
          mh.on(Bg.Ow, function (mq) {
            var mw = mq.playlist;
            delete mq.playlist;
            BQ(m9, mw, mq);
            mm();
          });
          mh.on(Bg.pn, (mq) => {
            BQ(m9, [], {});
            mJ((0, Bf.l9)(mq, Bf.xk));
          });
          mh.load(mB);
        });
      }
      function BE(m9) {
        return m9.attributes._destroyed;
      }
      var BW = Bx(1918);
      var BT = Bx(6599);
      var Bl = Bx(7010);
      function BC(m9) {
        let mB;
        this.start = function (mm) {
          const mJ = BX(m9, mm);
          const mh = Promise.all([
            ((mm = m9), (BD = BD || BL(mm))),
            BF(m9),
            mJ,
            Bz(m9),
            BM(m9),
            Bj(m9),
            BP(m9),
          ]);
          mm = new Promise((mH, mq) => {
            mB = setTimeout(() => {
              mq(new Bf.rG(Bf.pJ, Bf.T6));
            }, 60000);
            var mw = () => {
              clearTimeout(mB);
              setTimeout(mH, 60000);
            };
            mh.then(mw).catch(mw);
          });
          return Promise.race([mh, mm])
            .catch((mH) => {
              var mq = () => {
                throw mH;
              };
              return mJ.then(mq).catch(mq);
            })
            .then((mH) => {
              if ((mH = mH) && mH.length) {
                mq = mH
                  .reduce((mw, mp) => mw.concat(mp), [])
                  .filter((mw) => (mw == null ? undefined : mw.code));
                return {
                  core: mH[0],
                  warnings: mq,
                };
              } else {
                return {
                  core: null,
                  warnings: [],
                };
              }
              var mq;
            });
        };
        this.destroy = function () {
          clearTimeout(mB);
          m9.set("_destroyed", true);
          m9 = null;
        };
      }
      const Bj = function (m9) {
        var mB = m9.get("skin") ? m9.get("skin").url : undefined;
        if (
          typeof mB != "string" ||
          (function (mm) {
            var mJ = document.styleSheets;
            for (let mh = 0, mH = mJ.length; mh < mH; mh++) {
              if (mJ[mh].href === mm) {
                return 1;
              }
            }
          })(mB)
        ) {
          return Promise.resolve();
        }
        {
          const mm = true;
          return new Bd.ZP(mB, true).load().catch((mJ) => mJ);
        }
      };
      const Bi = (m9) => {
        m9 = m9.get("advertising");
        return Boolean(m9 == null ? undefined : m9.outstream);
      };
      const Bz = (m9) =>
        Bi(m9)
          ? Promise.resolve()
          : BV(m9)
              .then(() => {
                if (m9.get("drm") || (0, BW.w0)(m9.get("playlist"))) {
                  return (0, BW.lD)(m9.get("edition"));
                }
              })
              .then(() => {
                return BV((mB = m9)).then(() => {
                  if (!BE(mB)) {
                    var mm = (0, Bb.s7)(mB.get("playlist"), mB);
                    mB.attributes.playlist = mm;
                    try {
                      (0, Bb._)(mm);
                    } catch (mq) {
                      mq.code += Bf.xk;
                      throw mq;
                    }
                    var mJ = mB.getProviders();
                    var mh = (0, Bb.bx)(mB.get("item"), mm.length);
                    var { provider: mh, name: mH } = mJ.choose(
                      mm[mh].sources[0]
                    );
                    if (typeof mh == "function") {
                      return mh;
                    } else if (BY.Tr.html5 && mH === "html5") {
                      return BY.Tr.html5;
                    } else {
                      return mJ.load(mH).catch((mw) => {
                        throw (0, Bf.l9)(mw, Bf.y4);
                      });
                    }
                  }
                });
                var mB;
              });
      const BM = (m9, mB) => {
        var mm = [
          ((mJ) => {
            const mh = mJ.attributes;
            const mH = mh.error;
            if (mH && mH.code === BT.u5) {
              const mq = mh.pid;
              const mw = mh.ph;
              const mp = new BT.ZP(mh.key);
              if (mw > 0 && mw < 4 && mq && mp.duration() > -7776000000) {
                return new Bd.ZP(
                  "//content.jwplatform.com/libraries/" + mq + ".js"
                )
                  .load()
                  .then(() => {
                    var me = window.jwplayer.defaults.key;
                    var mx = new BT.ZP(me);
                    if (!mx.error() && mx.token() === mp.token()) {
                      mh.key = me;
                      mh.edition = mx.edition();
                      mh.error = mx.error();
                    }
                  })
                  .catch(() => {});
              }
            }
            return Promise.resolve();
          })(m9),
        ];
        if (!Bi(m9)) {
          mm.push(Promise.resolve());
        }
        return Promise.all(mm);
      };
      const BX = (m9, mB) => {
        var mm;
        var mJ;
        var mh;
        var mH = () => (0, Bc.ZP)(m9, mB);
        if ((0, Bl.Z)()) {
          mJ = mm = m9;
          mh = mB;
          return Bx.e(168)
            .then(((mq) => new (Bx(5545).default)(mh).setup(mJ)).bind(null, Bx))
            .catch((0, BY.Ep)(Bf.fU + 130))
            .then(() => Bj(mm))
            .then(mH)
            .catch(mH);
        } else {
          return mH();
        }
      };
      const BP = function (m9) {
        const mB = m9.attributes;
        const { language: mm, base: mJ, setupConfig: mh, intl: mH } = mB;
        const mq = (0, Bt.Pm)(mh, mH, mm);
        if (!(0, Bt.q2)(mm) || (0, Bt.dl)(mq)) {
          return Promise.resolve();
        } else {
          return new Promise((mw) =>
            (0, Bt.Dq)(mJ, mm)
              .then(({ response: mp }) => {
                if (!BE(m9)) {
                  if (!mp) {
                    throw new Bf.rG(null, Bf.wH);
                  }
                  mB.localization = (0, Bt.Mh)(mp, mq);
                  mw();
                }
              })
              .catch((mp) => {
                mw(mp.code === Bf.wH ? mp : (0, Bf.l9)(mp, Bf.A6));
              })
          );
        }
      };
      const BF = (m9) =>
        new Promise((mB) => {
          var mm;
          if (m9.attributes.liveSyncDuration > 45) {
            return mB((0, Bf.l9)(new Error(), Bf.wM));
          } else if (
            (mm =
              Array.isArray(m9.attributes.playlist) &&
              m9.attributes.playlist.map((mJ) => mJ.chapters)) != null &&
            mm.length
          ) {
            return (0, BR.T2)(mm, mB);
          } else {
            return mB();
          }
        });
      var Bs = Bx(2303);
      var By = Bx(7411);
      var BZ = Bx(9888);
      var BG = Bx(4742);
      let Bv = {
        removeItem(m9) {},
      };
      try {
        Bv = window.localStorage || Bv;
      } catch (m9) {}
      const BA = class {
        constructor(mB, mm) {
          this.namespace = mB;
          this.items = mm;
        }
        getAllItems() {
          return this.items.reduce((mB, mm) => {
            var mJ = Bv[this.namespace + "." + mm];
            if (mJ) {
              mB[mm] =
                mm !== "captions" ? (0, BZ.serialize)(mJ) : JSON.parse(mJ);
            }
            return mB;
          }, {});
        }
        track(mB) {
          this.items.forEach((mm) => {
            mB.on("change:" + mm, (mJ, mh) => {
              try {
                if (mm === "captions") {
                  mh = JSON.stringify(mh);
                }
                Bv[this.namespace + "." + mm] = mh;
              } catch (mH) {
                if (BG.Z.debug) {
                  console.error(mH);
                }
              }
            });
          });
        }
        clear() {
          this.items.forEach((mB) => {
            Bv.removeItem(this.namespace + "." + mB);
          });
        }
      };
      var BI = Bx(7753);
      var Bu = Bx(9918);
      var Be = Bx(328);
      var m0 = Bx(4225);
      var m1 = Bx(7683);
      var m2 = Bx(4609);
      var m3 = Bx(5882);
      Bx(4671);
      Bx(9926);
      function m4(mB, mm) {
        if (mm && mm.code) {
          if (mm.sourceError) {
            console.error(mm.sourceError);
          }
          console.error(Bf.rG.logMessage(mm.code));
        }
      }
      function m5(mB) {
        if (mB && mB.code) {
          console.warn(Bf.rG.logMessage(mB.code));
        }
      }
      function m6(mB) {
        this._events = {};
        this.modelShim = new BI.Z();
        this.modelShim._qoeItem = new By.Z();
        this.mediaShim = {};
        this.setup = new BC(this.modelShim);
        this.currentContainer = this.originalContainer = mB;
        this.apiQueue = new Br.Z(
          this,
          [
            "load",
            "play",
            "pause",
            "seek",
            "stop",
            "playlistItem",
            "playlistNext",
            "playlistPrev",
            "next",
            "preload",
            "setAllowFullscreen",
            "setConfig",
            "setCurrentAudioTrack",
            "setCurrentCaptions",
            "setCurrentQuality",
            "setFullscreen",
            "setPip",
            "requestPip",
            "addButton",
            "removeButton",
            "castToggle",
            "requestCast",
            "setMute",
            "setVolume",
            "setPlaybackRate",
            "addCues",
            "setCues",
            "getCues",
            "setPlaylistItem",
            "stopCasting",
            "getChapters",
            "getCurrentChapter",
            "setChapter",
            "resize",
            "setCaptions",
            "setControls",
          ],
          () => true
        );
      }
      const m7 = function (mB, mm) {
        if (!document.body.contains(mB.currentContainer)) {
          const mJ = document.getElementById(mB.get("id"));
          if (mJ) {
            mB.currentContainer = mJ;
          }
        }
        if (mB.currentContainer.parentElement) {
          mB.currentContainer.parentElement.replaceChild(
            mm,
            mB.currentContainer
          );
        }
        mB.currentContainer = mm;
      };
      Object.assign(m6.prototype, {
        on: Be.ZP.on,
        once: Be.ZP.once,
        off: Be.ZP.off,
        trigger: Be.ZP.trigger,
        init(mB, mm) {
          const mJ = this.modelShim;
          const mh = new BA("jwplayer", [
            "volume",
            "mute",
            "captionLabel",
            "captions",
            "bandwidthEstimate",
            "bitrateSelection",
            "qualityLabel",
            "enableShortcuts",
          ]);
          const mH = mh == null ? undefined : mh.getAllItems();
          mJ.attributes = mJ.attributes || {};
          Object.assign(this.mediaShim, Bu.L4);
          const mq = mB;
          const mw = (0, BO.ZP)(Object.assign({}, mB), mH);
          mw.id = mm.id;
          mw.setupConfig = mq;
          Object.assign(mJ.attributes, mw, Bu.bv);
          mJ.getProviders = function () {
            return new Bs.Z(mw);
          };
          mJ.setProvider = function () {};
          let mp = (0, m1.Z)();
          {
            if (!mJ.get("backgroundLoading")) {
              mp = (0, m2.Z)(mp.getPrimedElement(), mp);
            }
            const me = (this.primeUi = new m3.ZP(
              (0, m3.GU)(this.originalContainer)
            ).once("gesture", () => {
              mp.prime();
              this.preload();
              me.destroy();
            }));
          }
          mJ.on("change:errorEvent", m4);
          return this.setup
            .start(mm)
            .then((mx) => {
              var mr = mx.core;
              if (!mr) {
                throw (0, Bf.l9)(null, Bf.y7);
              }
              if (this.setup) {
                this.on(Bg.cM, m5);
                mx.warnings.forEach((mY) => {
                  this.trigger(Bg.cM, mY);
                });
                mx = this.modelShim.clone();
                if (mx.error) {
                  throw mx.error;
                }
                var mO = this.apiQueue.queue.slice(0);
                this.apiQueue.destroy();
                Object.assign(this, mr.prototype);
                this.playerSetup(
                  mx,
                  mm,
                  this.originalContainer,
                  this._events,
                  mO,
                  mp
                );
                var mr = this._model;
                mJ.off("change:errorEvent", m4);
                mr.on("change:errorEvent", m4);
                mh.track(mr);
                return this.updatePlaylist(
                  mr.get("playlist"),
                  mr.get("feedData")
                ).catch((mY) => {
                  var mS = mY.code === Bf._M ? Bf.IB : Bf.xk;
                  throw (0, Bf.l9)(mY, mS);
                });
              }
            })
            .then(() => {
              if (this.setup) {
                this.playerReady();
              }
            })
            .catch((mx) => {
              var mr;
              var mO;
              var mY;
              if (this.setup) {
                mr = this;
                mO = mm;
                mY = mx;
                Promise.resolve().then(() => {
                  var mS = (0, Bf.Mm)(Bf.ud, Bf.nk, mY);
                  var mb = mr._model || mr.modelShim;
                  mS.message =
                    mS.message || mb.get("localization").errors[mS.key];
                  delete mS.key;
                  var mU = mb.get("contextual");
                  if (!mU) {
                    const mn = (0, m0.Z)(mr, mS);
                    if (m0.Z.cloneIcon) {
                      mn.querySelector(".jw-icon").appendChild(
                        m0.Z.cloneIcon("error")
                      );
                    }
                    m7(mr, mn);
                  }
                  mb.set("errorEvent", mS);
                  mb.set("state", Bg.Vy);
                  mr.trigger(Bg.HH, mS);
                  if (mU) {
                    mO.remove();
                  }
                });
              }
            });
        },
        playerDestroy() {
          if (this.destroy) {
            this.destroy();
          }
          if (this.apiQueue) {
            this.apiQueue.destroy();
          }
          if (this.setup) {
            this.setup.destroy();
          }
          if (this.primeUi) {
            this.primeUi.destroy();
          }
          if (this.currentContainer !== this.originalContainer) {
            m7(this, this.originalContainer);
          }
          this.off();
          this._events =
            this._model =
            this.modelShim =
            this.apiQueue =
            this.primeUi =
            this.setup =
              null;
        },
        getContainer() {
          return this.currentContainer;
        },
        get(mB) {
          if (this.modelShim) {
            if (mB in this.mediaShim) {
              return this.mediaShim[mB];
            } else {
              return this.modelShim.get(mB);
            }
          }
        },
        getItemQoe() {
          return this.modelShim._qoeItem;
        },
        getItemPromise: () => null,
        setItemCallback(mB) {
          if (this.modelShim) {
            this.modelShim.attributes.playlistItemCallback = mB;
          }
        },
        getConfig() {
          return Object.assign({}, this.modelShim.attributes, this.mediaShim);
        },
        getCurrentCaptions() {
          return this.get("captionsIndex");
        },
        getWidth() {
          return this.get("containerWidth");
        },
        getHeight() {
          return this.get("containerHeight");
        },
        getMute() {
          return this.get("mute");
        },
        getProvider() {
          return this.get("provider");
        },
        getState() {
          return this.get("state");
        },
        getAbsolutePosition: () => null,
        getAudioTracks: () => null,
        getCaptionsList: () => null,
        getQualityLevels: () => null,
        getVisualQuality: () => null,
        getCurrentQuality: () => -1,
        getCurrentAudioTrack: () => -1,
        getSafeRegion: () => ({
          x: 0,
          y: 0,
          width: 0,
          height: 0,
        }),
        isBeforeComplete: () => false,
        isBeforePlay: () => false,
        createInstream: () => null,
        skipAd() {},
        getMediaElement() {},
        attachMedia() {},
        detachMedia() {},
        isReady() {
          var mB;
          return (
            ((mB = this._model) == null ? undefined : mB.get("isReady")) ||
            false
          );
        },
      });
      const m8 = m6;
    },
    4446: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        A6: () => Bt,
        DD: () => Bf,
        EY: () => BL,
        H4: () => BT,
        IB: () => Bn,
        MD: () => BQ,
        Mm: () => Bj,
        Sp: () => BW,
        T6: () => BY,
        Y7: () => Bd,
        YQ: () => BK,
        _M: () => Bk,
        aD: () => Ba,
        fU: () => Bb,
        l9: () => Bi,
        nk: () => BO,
        nm: () => Bz,
        o2: () => BN,
        pJ: () => BV,
        rG: () => BC,
        tJ: () => BD,
        ud: () => Bl,
        ul: () => BR,
        wH: () => Bc,
        wM: () => Bg,
        xk: () => BU,
        y4: () => Bo,
        y7: () => BS,
        zO: () => BE,
      });
      var Br = Bx(6042);
      const BO = 100000;
      const BY = 100001;
      const BS = 100002;
      const Bb = 101000;
      const BU = 102000;
      const Bn = 102700;
      const BK = 200001;
      const Bf = 202000;
      const Bo = 104000;
      const BD = 203000;
      const BN = 203640;
      const Bk = 203700;
      const BL = 204000;
      const Bg = 300100;
      const Ba = 300200;
      const Bd = 306000;
      const Bt = 308000;
      const Bc = 308640;
      const BR = "cantPlayVideo";
      const BQ = "badConnection";
      const BV = "cantLoadPlayer";
      const BE = "cantPlayInBrowser";
      const BW = "liveStreamDown";
      const BT = "protectedContent";
      const Bl = "technicalError";
      class BC {
        constructor(BM, BX, BP) {
          this.code = (0, Br.qh)(BX) ? BX : 0;
          this.sourceError = BP || null;
          if (BM) {
            this.key = BM;
          } else {
            delete this.key;
          }
        }
        static logMessage(BM) {
          var BX = BM % 1000;
          var BP = Math.floor((BM - BX) / 1000);
          let BF = BM.toString();
          return (
            "JW Player " +
            (BM > 299999 && BM < 400000 ? "Warning" : "Error") +
            " " +
            BM +
            ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" +
            (BF = BX >= 400 && BX < 600 ? BP + ("400-" + BP + "599") : BF)
          );
        }
      }
      const Bj = function (BM, BX, BP) {
        if (BP instanceof BC && BP.code) {
          return BP;
        } else {
          return new BC(BM, BX, BP);
        }
      };
      const Bi = function (BM, BX) {
        var BP = Bj(Bl, BX, BM);
        BP.code = ((BM && BM instanceof BC && BM.code) || 0) + BX;
        return BP;
      };
      const Bz = function (BM) {
        var { name: BM, message: BX } = BM;
        switch (BM) {
          case "AbortError":
            if (/pause/.test(BX)) {
              return 303213;
            } else if (/load/.test(BX)) {
              return 303212;
            } else {
              return 303210;
            }
          case "NotAllowedError":
            return 303220;
          case "NotSupportedError":
            return 303230;
          default:
            return 303200;
        }
      };
    },
    6391: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Br,
      });
      const Br = [];
    },
    7411: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Bb,
      });
      var Br = Bx(5004);
      const BO = window.performance || {
        timing: {},
      };
      const BY = BO.timing.navigationStart || (0, Br.z)();
      if (!("now" in BO)) {
        BO.now = () => (0, Br.z)() - BY;
      }
      const BS = () => BY + BO.now();
      const Bb = class {
        constructor() {
          this.startTimes = {};
          this.sum = {};
          this.counts = {};
          this.ticks = {};
        }
        start(BU) {
          this.startTimes[BU] = BS();
          this.counts[BU] = this.counts[BU] + 1 || 1;
        }
        end(BU) {
          var Bn;
          if (this.startTimes[BU]) {
            Bn = BS() - this.startTimes[BU];
            delete this.startTimes[BU];
            this.sum[BU] = this.sum[BU] + Bn || Bn;
          }
        }
        dump() {
          var BU;
          var Bn = Object.assign({}, this.sum);
          for (const BK in this.startTimes) {
            if (
              (function (Bf, Bo) {
                if (Bf == null) {
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                }
                return Object.prototype.hasOwnProperty.call(Object(Bf), Bo);
              })(this.startTimes, BK)
            ) {
              BU = BS() - this.startTimes[BK];
              Bn[BK] = Bn[BK] + BU || BU;
            }
          }
          return {
            counts: Object.assign({}, this.counts),
            sums: Bn,
            events: Object.assign({}, this.ticks),
          };
        }
        tick(BU) {
          this.ticks[BU] = BS();
        }
        clear(BU) {
          delete this.ticks[BU];
        }
        between(BU, Bn) {
          if (this.ticks[Bn] && this.ticks[BU]) {
            return this.ticks[Bn] - this.ticks[BU];
          } else {
            return null;
          }
        }
      };
    },
    4601: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        v: () => BS,
        z: () => Bb,
      });
      var Br = Bx(2894);
      var BO = Bx(8348);
      let BY = null;
      const BS = {};
      const Bb = function () {
        return (BY =
          BY ||
          (BO.OS.tizenApp
            ? Bx.e(74)
                .then(
                  function (BU) {
                    var Bn = Bx(3112).default;
                    return (BS.controls = Bn);
                  }.bind(null, Bx)
                )
                .catch(function () {
                  ((BY = null), Br.Jt)(301133)();
                })
            : Bx.e(716)
                .then(
                  function (BU) {
                    var Bn = Bx(5827).default;
                    return (BS.controls = Bn);
                  }.bind(null, Bx)
                )
                .catch(function () {
                  ((BY = null), Br.Jt)(301130)();
                })));
      };
    },
    8348: (Bp, Be, Bx) => {
      "use strict";

      Bx.r(Be);
      Bx.d(Be, {
        Browser: () => Bb,
        Features: () => Bn,
        OS: () => BU,
      });
      var Br = Bx(2268);
      const BO = (BK, Bf) => {
        BK = BK.exec(Bf);
        if (BK && BK.length > 1) {
          return BK[1];
        }
      };
      const BY = navigator.userAgent;
      const BS = () => {};
      const Bb = {
        get androidNative() {
          return (0, Br.O7)();
        },
        get chrome() {
          return (0, Br.i7)();
        },
        get edge() {
          return (0, Br.un)();
        },
        get facebook() {
          return (0, Br.DF)();
        },
        get firefox() {
          return (0, Br.pZ)();
        },
        get ie() {
          return (0, Br.w1)();
        },
        get msie() {
          return (0, Br.A)();
        },
        get safari() {
          return (0, Br.G6)();
        },
        get version() {
          {
            var BK = this;
            var Bf = BY;
            let Bo;
            let BD;
            let BN;
            let Bk;
            if (BK.chrome) {
              Bo =
                Bf.indexOf("Chrome") !== -1
                  ? Bf.substring(Bf.indexOf("Chrome") + 7)
                  : Bf.substring(Bf.indexOf("CriOS") + 6);
            } else if (BK.safari) {
              Bo = Bf.substring(Bf.indexOf("Version") + 8);
            } else if (BK.firefox) {
              Bo = Bf.substring(Bf.indexOf("Firefox") + 8);
            } else if (BK.edge) {
              let BL = Bf.indexOf("Edge");
              if (BL === -1) {
                BL = Bf.indexOf("Edg") + 4;
              } else {
                BL += 5;
              }
              Bo = Bf.substring(BL);
            } else if (BK.ie) {
              if (Bf.indexOf("rv:") !== -1) {
                Bo = Bf.substring(Bf.indexOf("rv:") + 3);
              } else if (Bf.indexOf("MSIE") !== -1) {
                Bo = Bf.substring(Bf.indexOf("MSIE") + 5);
              }
            }
            if (Bo) {
              if (
                (Bk = (Bo =
                  (Bk = (Bo =
                    (Bk = Bo.indexOf(";")) !== -1
                      ? Bo.substring(0, Bk)
                      : Bo).indexOf(" ")) !== -1
                    ? Bo.substring(0, Bk)
                    : Bo).indexOf(")")) !== -1
              ) {
                Bo = Bo.substring(0, Bk);
              }
              BD = parseInt(Bo, 10);
              BN = parseInt(Bo.split(".")[1], 10);
            }
            return {
              version: Bo,
              major: BD,
              minor: BN,
            };
          }
        },
      };
      const BU = {
        get android() {
          return (0, Br.Dt)();
        },
        get iOS() {
          return (0, Br.gn)();
        },
        get mobile() {
          return (0, Br.tq)();
        },
        get mac() {
          return (0, Br.id)();
        },
        get iPad() {
          return (0, Br.zc)();
        },
        get iPhone() {
          return (0, Br.xb)();
        },
        get windows() {
          return BY.indexOf("Windows") > -1;
        },
        get tizen() {
          return (0, Br.yS)();
        },
        get tizenApp() {
          return (0, Br.Q6)();
        },
        get version() {
          {
            var BK = this;
            var Bf = BY;
            let Bo;
            let BD;
            let BN;
            if (BK.windows) {
              Bo = BO(/Windows(?: NT|)? ([._\d]+)/, Bf);
              switch (Bo) {
                case "6.1":
                  Bo = "7.0";
                  break;
                case "6.2":
                  Bo = "8.0";
                  break;
                case "6.3":
                  Bo = "8.1";
              }
            } else if (BK.android) {
              Bo = BO(/Android ([._\d]+)/, Bf);
            } else if (BK.iOS) {
              Bo = BO(/OS ([._\d]+)/, Bf);
            } else if (BK.mac) {
              Bo = BO(/Mac OS X ([._\d]+)/, Bf);
            } else if (BK.tizen) {
              Bo = BO(/Tizen ([._\d]+)/, Bf);
            }
            if (Bo) {
              BD = parseInt(Bo, 10);
              const Bk = Bo.split(/[._]/);
              if (Bk) {
                BN = parseInt(Bk[1], 10);
              }
            }
            return {
              version: Bo,
              major: BD,
              minor: BN,
            };
          }
        },
      };
      const Bn = {
        get flash() {
          return (0, Br.NO)();
        },
        get flashVersion() {
          return (0, Br.dI)();
        },
        get iframe() {
          return (0, Br.cL)();
        },
        get passiveEvents() {
          {
            let Bf = false;
            try {
              var BK = Object.defineProperty({}, "passive", {
                get: () => (Bf = true),
              });
              window.addEventListener("testPassive", BS, BK);
              window.removeEventListener("testPassive", BS, BK);
            } catch (Bo) {}
            return Bf;
          }
        },
        get backgroundLoading() {
          return !BU.iOS && !Bb.safari && !BU.tizen;
        },
        get enableAdLoadingUI() {
          return !BU.iOS && !BU.tizen;
        },
      };
    },
    1643: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        $_: () => BQ,
        $j: () => Bz,
        AQ: () => BP,
        Ax: () => BV,
        B1: () => BL,
        Bs: () => mo,
        Ew: () => BZ,
        FU: () => BG,
        Gj: () => mn,
        HH: () => Bu,
        Hy: () => mJ,
        Ib: () => mS,
        Je: () => BA,
        Jl: () => BX,
        K5: () => Ba,
        Kb: () => Br,
        Ms: () => BC,
        NZ: () => Bi,
        O1: () => m7,
        Ow: () => mw,
        P: () => Bk,
        QF: () => mY,
        R2: () => m2,
        RF: () => mk,
        Rc: () => Bj,
        Rt: () => BR,
        SL: () => mb,
        Sv: () => BD,
        TJ: () => m3,
        U3: () => Bd,
        UF: () => mO,
        UW: () => mh,
        UZ: () => m9,
        V$: () => Bs,
        Vy: () => BU,
        WE: () => BE,
        Wp: () => Bf,
        Z_: () => mU,
        _5: () => BS,
        _B: () => mx,
        aM: () => mB,
        aQ: () => BI,
        bc: () => BO,
        cM: () => Bc,
        cq: () => Bv,
        cy: () => BF,
        gO: () => mq,
        gy: () => m6,
        h7: () => mD,
        ik: () => Bn,
        j0: () => mp,
        jt: () => mr,
        k3: () => BW,
        l5: () => mf,
        nQ: () => BK,
        nv: () => Bo,
        oZ: () => m4,
        ot: () => BN,
        pi: () => By,
        pn: () => Bt,
        qG: () => mN,
        r0: () => Bb,
        rx: () => m8,
        s$: () => BM,
        sF: () => mH,
        t6: () => mL,
        tP: () => Bg,
        uL: () => BT,
        uT: () => m1,
        uc: () => m0,
        ug: () => mm,
        wh: () => Bl,
        xQ: () => BY,
        xf: () => mK,
        yH: () => m5,
      });
      const Br = "buffering";
      const BO = "idle";
      const BY = "complete";
      const BS = "paused";
      const Bb = "playing";
      const BU = "error";
      const Bn = "loading";
      const BK = "stalled";
      const Bf = "drag";
      const Bo = "dragStart";
      const BD = "dragEnd";
      const BN = "click";
      const Bk = "doubleClick";
      const BL = "over";
      const Bg = "move";
      const Ba = "enter";
      const Bd = "out";
      const Bt = BU;
      const Bc = "warning";
      const BR = "adClick";
      const BQ = "mediaLoaded";
      const BV = "adPause";
      const BE = "adPlay";
      const BW = "adSkipped";
      const BT = "adTime";
      const Bl = "autostartNotAllowed";
      const BC = BY;
      const Bj = "ready";
      const Bi = "seek";
      const Bz = "beforePlay";
      const BM = "beforeComplete";
      const BX = "bufferFull";
      const BP = "absolutePositionReady";
      const BF = "displayClick";
      const Bs = "playlistComplete";
      const By = "cast";
      const BZ = "mediaError";
      const BG = "firstFrame";
      const Bv = "playAttempt";
      const BA = "playAttemptFailed";
      const BI = "seeked";
      const Bu = "setupError";
      const m0 = "state";
      const m1 = "bufferChange";
      const m2 = "time";
      const m3 = "ratechange";
      const m4 = "mediaType";
      const m5 = "volume";
      const m6 = "mute";
      const m7 = "metadataCueParsed";
      const m8 = "meta";
      const m9 = "levels";
      const mB = "levelsChanged";
      const mm = "visualQuality";
      const mJ = "controls";
      const mh = "fullscreen";
      const mH = "resize";
      const mq = "playlistItem";
      const mw = "playlist";
      const mp = "audioTracks";
      const mx = "audioTrackChanged";
      const mr = "subtitlesTracks";
      const mO = "subtitlesTrackChanged";
      const mY = "playbackRateChanged";
      const mS = "logoClick";
      const mb = "captionsList";
      const mU = "captionsChanged";
      const mn = "providerFirstFrame";
      const mK = "userAction";
      const mf = "instreamClick";
      const mo = "breakpoint";
      const mD = "fullscreenchange";
      const mN = "bandwidthEstimate";
      const mk = "float";
      const mL = "chapter";
    },
    9918: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        L4: () => BO,
        OG: () => BS,
        bv: () => Br,
        ni: () => BY,
      });
      const Br = {
        audioMode: false,
        itemMeta: {},
        playbackRate: 1,
        playRejected: false,
        state: Bx(1643).bc,
        itemReady: false,
        controlsEnabled: false,
      };
      const BO = {
        position: 0,
        duration: 0,
        buffer: 0,
        currentTime: 0,
      };
      const BY = 120;
      const BS = 25;
    },
    7753: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Br,
      });
      class Br extends Bx(328).ZP {
        constructor() {
          super();
          this.attributes = Object.create(null);
        }
        addAttributes(BO) {
          Object.keys(BO).forEach((BY) => {
            this.add(BY, BO[BY]);
          });
        }
        add(BO, BY) {
          Object.defineProperty(this, BO, {
            get: () => this.attributes[BO],
            set: (BS) => {
              this.set(BO, BS);
            },
            enumerable: false,
          });
          this.attributes[BO] = BY;
        }
        get(BO) {
          return this.attributes[BO];
        }
        set(BO, BY) {
          var BS;
          if (this.attributes[BO] !== BY) {
            BS = this.attributes[BO];
            this.attributes[BO] = BY;
            this.trigger("change:" + BO, this, BY, BS);
          }
        }
        clone() {
          var BO = {};
          var BY = this.attributes;
          if (BY) {
            for (const BS in BY) {
              BO[BS] = BY[BS];
            }
          }
          return BO;
        }
        change(BO, BY, BS) {
          this.on("change:" + BO, BY, BS);
          BO = this.get(BO);
          BY.call(BS, this, BO, BO);
          return this;
        }
      }
    },
    7941: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        dZ: () => BY,
        my: () => Bb,
        qk: () => BS,
        r1: () => BO,
      });
      var Br = Bx(2957);
      const BO = (BU) => {
        let Bn = "";
        if (BU) {
          if (BU.localName) {
            Bn = BU.localName;
          } else if (BU.baseName) {
            Bn = BU.baseName;
          }
        }
        return Bn;
      };
      const BY = (BU) => {
        let Bn = "";
        if (BU) {
          if (BU.textContent) {
            Bn = (0, Br.fy)(BU.textContent);
          } else if (BU.text) {
            Bn = (0, Br.fy)(BU.text);
          }
        }
        return Bn;
      };
      const BS = (BU, Bn) => BU.childNodes[Bn];
      const Bb = (BU) => (BU.childNodes ? BU.childNodes.length : 0);
    },
    6769: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () =>
          function (BK) {
            var Bf = [];
            Bf.feedData = {};
            for (let Bk = 0; Bk < (0, Br.my)(BK); Bk++) {
              var Bo = (0, Br.qk)(BK, Bk);
              if ((0, Br.r1)(Bo).toLowerCase() === "channel") {
                for (let BL = 0; BL < (0, Br.my)(Bo); BL++) {
                  var BD = (0, Br.qk)(Bo, BL);
                  var BN = (0, Br.r1)(BD).toLowerCase();
                  if (BN === "item") {
                    Bf.push(Bn(BD));
                  } else if (BN) {
                    Bf.feedData[BN] = (0, Br.dZ)(BD);
                  }
                }
              }
            }
            return Bf;
          },
      });
      var Br = Bx(7941);
      var BO = Bx(2957);
      function BY(BK, Bf) {
        const Bo = [];
        for (let Bk = 0; Bk < (0, Br.my)(BK); Bk++) {
          var BD = BK.childNodes[Bk];
          if (BD.prefix === "media" && (0, Br.r1)(BD)) {
            switch ((0, Br.r1)(BD).toLowerCase()) {
              case "content":
                if ((0, BO.Dc)(BD, "duration")) {
                  Bf.duration = (0, BO.m9)((0, BO.Dc)(BD, "duration"));
                }
                if ((0, BO.Dc)(BD, "url")) {
                  Bf.sources ||= [];
                  const BL = {
                    file: (0, BO.Dc)(BD, "url"),
                    type: (0, BO.Dc)(BD, "type"),
                    width: (0, BO.Dc)(BD, "width"),
                    label: (0, BO.Dc)(BD, "label"),
                  };
                  const Bg = ((Ba) => {
                    var Bd = [];
                    for (let Bc = 0; Bc < (0, Br.my)(Ba); Bc++) {
                      var Bt = Ba.childNodes[Bc];
                      if (
                        Bt.prefix === "jwplayer" &&
                        (0, Br.r1)(Bt).toLowerCase() === "mediatypes"
                      ) {
                        Bd.push((0, Br.dZ)(Bt));
                      }
                    }
                    return Bd;
                  })(BD);
                  if (Bg.length) {
                    BL.mediaTypes = Bg;
                  }
                  Bf.sources.push(BL);
                }
                if ((0, Br.my)(BD) > 0) {
                  Bf = BY(BD, Bf);
                }
                break;
              case "title":
                Bf.title = (0, Br.dZ)(BD);
                break;
              case "description":
                Bf.description = (0, Br.dZ)(BD);
                break;
              case "guid":
                Bf.mediaid = (0, Br.dZ)(BD);
                break;
              case "thumbnail":
                Bf.image ||= (0, BO.Dc)(BD, "url");
                break;
              case "group":
                BY(BD, Bf);
                break;
              case "subtitle": {
                const Ba = {
                  file: (0, BO.Dc)(BD, "url"),
                  kind: "captions",
                };
                if ((0, BO.Dc)(BD, "lang").length > 0) {
                  BN = (0, BO.Dc)(BD, "lang");
                  undefined;
                  Ba.label =
                    {
                      zh: "Chinese",
                      nl: "Dutch",
                      en: "English",
                      fr: "French",
                      de: "German",
                      it: "Italian",
                      ja: "Japanese",
                      pt: "Portuguese",
                      ru: "Russian",
                      es: "Spanish",
                    }[BN] || BN;
                }
                Bo.push(Ba);
                break;
              }
            }
          }
        }
        var BN;
        Bf.tracks ||= [];
        for (let Bd = 0; Bd < Bo.length; Bd++) {
          Bf.tracks.push(Bo[Bd]);
        }
        return Bf;
      }
      const BS = BY;
      var Bb = Bx(9888);
      var BU = Bx(393);
      const Bn = (BK) => {
        var Bf = {};
        for (let BN = 0; BN < BK.childNodes.length; BN++) {
          var Bo = BK.childNodes[BN];
          var BD = (0, Br.r1)(Bo);
          if (BD) {
            switch (BD.toLowerCase()) {
              case "enclosure":
                Bf.file = (0, BO.Dc)(Bo, "url");
                break;
              case "title":
                Bf.title = (0, Br.dZ)(Bo);
                break;
              case "guid":
                Bf.mediaid = (0, Br.dZ)(Bo);
                break;
              case "pubdate":
                Bf.date = (0, Br.dZ)(Bo);
                break;
              case "description":
                Bf.description = (0, Br.dZ)(Bo);
                break;
              case "link":
                Bf.link = (0, Br.dZ)(Bo);
                break;
              case "category":
                if (Bf.tags) {
                  Bf.tags += (0, Br.dZ)(Bo);
                } else {
                  Bf.tags = (0, Br.dZ)(Bo);
                }
            }
          }
        }
        return new BU.Z(
          (function (Bk, BL) {
            var Bg = "default";
            var Ba = "file";
            var Bd = [];
            var Bt = [];
            var Bc = BL;
            for (let BQ = 0; BQ < Bk.childNodes.length; BQ++) {
              var BR = Bk.childNodes[BQ];
              if (BR.prefix === "jwplayer") {
                const BV = (0, Br.r1)(BR);
                if (BV === "source") {
                  delete BL.sources;
                  Bd.push({
                    file: (0, BO.Dc)(BR, Ba),
                    default: (0, BO.Dc)(BR, Bg),
                    label: (0, BO.Dc)(BR, "label"),
                    type: (0, BO.Dc)(BR, "type"),
                  });
                } else if (BV === "track") {
                  delete BL.tracks;
                  Bt.push({
                    file: (0, BO.Dc)(BR, Ba),
                    default: (0, BO.Dc)(BR, Bg),
                    kind: (0, BO.Dc)(BR, "kind"),
                    label: (0, BO.Dc)(BR, "label"),
                  });
                } else {
                  BL[BV] = (0, Bb.serialize)((0, Br.dZ)(BR));
                  if (BV === "file" && BL.sources) {
                    delete BL.sources;
                  }
                }
              }
              BL[Ba] ||= BL.link;
            }
            if (Bd.length) {
              BL.sources = [];
              for (let BE = 0; BE < Bd.length; BE++) {
                const BW = Bd[BE];
                if (BW.file.length > 0) {
                  BW[Bg] = Bd[BE][Bg] === "true";
                  if (!BW.label) {
                    delete BW.label;
                  }
                  Bc.sources.push(BW);
                }
              }
            }
            if (Bt.length) {
              BL.tracks = [];
              for (let BT = 0; BT < Bt.length; BT++) {
                const Bl = Bt[BT];
                if (Bl.file && Bl.file.length > 0) {
                  Bl[Bg] = Bt[BT][Bg] === "true";
                  Bl.kind = Bt[BT].kind.length ? Bt[BT].kind : "captions";
                  if (!Bl.label) {
                    delete Bl.label;
                  }
                  Bc.tracks.push(Bl);
                }
              }
            }
            return Bc;
          })(BK, BS(BK, Bf))
        );
      };
    },
    2557: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        t: () => Br,
        u: () => BO,
      });
      class Br {
        constructor(BY, BS) {
          this.defaultLanguage = BY;
          this.timestamps = BS;
        }
      }
      class BO {
        constructor({ title: BY = {}, group: BS, time: Bb, image: BU }) {
          this.title = {};
          this.time = Bb;
          this.group = BS;
          this.image = BU;
          Object.keys(BY).forEach((Bn) => {
            var BK = BY[Bn];
            this.addTitle(Bn, BK);
          });
        }
        addTitle(BY, BS) {
          this.title[BY] = BS;
        }
      }
    },
    393: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => BU,
      });
      var Br = Bx(6053);
      function BO(Bn) {
        var BK;
        if (Bn && Bn.file) {
          (Bn = Object.assign(
            {},
            {
              kind: "captions",
              default: false,
            },
            Bn
          )).kind =
            ((BK = Bn.kind), BY.indexOf(BK) !== -1 ? Bn.kind : "captions");
          Bn.default = Boolean(Bn.default);
          return Bn;
        }
      }
      const BY = ["captions", "metadata", "thumbnails", "chapters"];
      var BS = Bx(9918);
      const Bb = Array.isArray;
      const BU = function (Bn) {
        if (!Bb((Bn = Bn || {}).tracks)) {
          delete Bn.tracks;
        }
        var BK = Object.assign(
          {},
          {
            sources: [],
            tracks: [],
            minDvrWindow: BS.ni,
          },
          Bn
        );
        if (BK.sources === Object(BK.sources) && !Bb(BK.sources)) {
          BK.sources = [(0, Br.Z)(BK.sources)];
        }
        if (!Bb(BK.sources) || BK.sources.length === 0) {
          if (Bn.levels) {
            BK.sources = Bn.levels;
          } else {
            BK.sources = [(0, Br.Z)(Bn)];
          }
        }
        for (let BD = 0; BD < BK.sources.length; BD++) {
          var Bf;
          var Bo = BK.sources[BD];
          if (Bo) {
            Bf = Bo.default;
            Bo.default = !!Bf && Bf.toString() === "true";
            BK.sources[BD].label ||= BD.toString();
            BK.sources[BD] = (0, Br.Z)(BK.sources[BD]);
          }
        }
        BK.sources = BK.sources.filter(Boolean);
        if (!Bb(BK.tracks)) {
          BK.tracks = [];
        }
        if (Bb(BK.captions)) {
          BK.tracks = BK.tracks.concat(BK.captions);
          delete BK.captions;
        }
        BK.tracks = BK.tracks.map(BO).filter(Boolean);
        return BK;
      };
    },
    7263: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Bn,
      });
      var Br = Bx(1643);
      var BO = Bx(7941);
      var BY = Bx(6769);
      var BS = Bx(6886);
      var Bb = Bx(328);
      var BU = Bx(4446);
      const Bn = function () {
        function BK(BD) {
          try {
            const BN = BD.responseXML ? BD.responseXML.childNodes : null;
            let Bk;
            let BL = null;
            if (BN) {
              for (
                let Bg = 0;
                Bg < BN.length && (BL = BN[Bg]).nodeType === 8;
                Bg++
              );
              if (
                (BL = BL && (0, BO.r1)(BL) === "xml" ? BL.nextSibling : BL) &&
                (0, BO.r1)(BL) === "rss"
              ) {
                const Ba = (0, BY.Z)(BL);
                Bk = Object.assign(
                  {
                    playlist: Ba,
                  },
                  Ba.feedData
                );
              }
            }
            if (!Bk) {
              try {
                const Bd = JSON.parse(BD.responseText);
                if (Array.isArray(Bd)) {
                  Bk = {
                    playlist: Bd,
                  };
                } else {
                  if (!Array.isArray(Bd.playlist)) {
                    throw Error("Playlist is not an array");
                  }
                  Bk = Bd;
                }
              } catch (Bt) {
                throw new BU.rG(BU.ul, 621, Bt);
              }
            }
            Bf.trigger(Br.Ow, Bk);
          } catch (Bc) {
            Bo(Bc);
          }
        }
        const Bf = Object.assign(this, Bb.ZP);
        const Bo = function (BD) {
          if (BD instanceof BU.rG && !BD.code) {
            BD = new BU.rG(BU.ul, 0);
          }
          Bf.trigger(Br.pn, BD);
        };
        this.load = function (BD) {
          (0, BS.h)(BD, BK, (BN, Bk, BL, Bg) => {
            Bo(Bg);
          });
        };
        this.destroy = function () {
          this.off();
        };
      };
    },
    8320: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        ZP: () => Ba,
        s7: () => BN,
        T5: () => Bg,
        YF: () => BD,
        _: () => Bk,
        bx: () => BL,
      });
      const Br = {
        none: true,
        metadata: true,
        auto: true,
      };
      const BO = (Bd, Bt) => (Br[Bd] ? Bd : Br[Bt] ? Bt : "metadata");
      var BY = Bx(393);
      var BS = Bx(6053);
      var Bb = Bx(2303);
      var BU = Bx(4446);
      const Bn = (Bd, Bt) => (Bd === undefined ? Bt : Bd);
      const BK = (Bd, Bt, Bc) => {
        if (Bc in Bt) {
          Bd[Bc] = Bt[Bc];
        }
      };
      const Bf = (Bd, Bt) => {
        const Bc = Bt.attributes;
        const { sources: BR, allSources: BQ, preload: BV, drm: BE } = Bd;
        const BW = Bn(Bd.withCredentials, Bc.withCredentials);
        return (BQ || BR)
          .map(function (BT) {
            var Bl;
            var BC;
            var Bj;
            if (BT !== Object(BT)) {
              return null;
            } else {
              BK(BT, Bc, "androidhls");
              BK(BT, Bc, "hlsjsdefault");
              BK(BT, Bc, "safarihlsjs");
              Bj = BT;
              Bl = Bd;
              BC = Bc;
              if (!Bj.liveSyncDuration) {
                Bl = Bl.liveSyncDuration ? Bl : BC;
                BK(Bj, Bl, "liveSyncDuration");
              }
              BK(BT, Bc, "_hlsjsProgressive");
              BT.preload = BO(BT.preload, BV);
              if ((BC = BT.drm || BE || Bc.drm)) {
                BT.drm = BC;
              }
              if ((Bj = Bn(BT.withCredentials, BW)) !== undefined) {
                BT.withCredentials = Bj;
              }
              return (0, BS.Z)(BT);
            }
          })
          .filter(Boolean);
      };
      const Bo = (Bd, Bt) => {
        var Bc = ((BV, BE) => {
          for (let Bl = 0; Bl < BV.length; Bl++) {
            var BW = BV[Bl];
            var BT = BE.choose(BW).providerToCheck;
            if (BT) {
              return {
                type: BW.type,
                provider: BT,
              };
            }
          }
          return null;
        })(Bd, (Bt = Bt && Bt.choose ? Bt : new Bb.Z()));
        if (!Bc) {
          return [];
        }
        const BR = Bc.provider;
        const BQ = Bc.type;
        return Bd.filter(function (BV) {
          return BV.type === BQ && Bt.providerSupports(BR, BV);
        });
      };
      const BD = (Bd, Bt, Bc) => {
        var BR = Bd.getProviders();
        var BQ = Bd.get("preload");
        var BV = Bd.get("jwStart");
        var BE = Object.assign({}, Bt);
        BE.preload = BO(Bt.preload, BQ);
        BE.allSources = Bf(BE, Bd);
        BE.sources = Bo(BE.allSources, BR);
        if (BE.sources.length) {
          BE.file = BE.sources[0].file;
          BE.feedData = Bc;
          if (BV && BV !== -1 && Bd.get("generateSEOMetadata")) {
            BE.starttime = BV;
          }
          if ((BQ = (Bt = BE).sources[0].liveSyncDuration)) {
            Bt.liveSyncDuration = Bt.dvrSeekLimit = BQ;
          }
          return Bt;
        }
      };
      const BN = (Bd, Bt, Bc) => {
        const BR = Object.assign({}, Bc);
        delete BR.playlist;
        return Bd.map((BQ) => BD(Bt, BQ, BR)).filter(Boolean);
      };
      const Bk = (Bd) => {
        if (!Array.isArray(Bd) || Bd.length === 0) {
          throw new BU.rG(BU.ul, 630);
        }
      };
      const BL = (Bd, Bt) => {
        let Bc = (parseInt(Bd, 10) || 0) % Bt;
        if (Bc < 0) {
          Bc += Bt;
        }
        return Bc;
      };
      const Bg = (Bd, Bt) => Bo(Bf(Bd, Bt), Bt.getProviders());
      const Ba = function (Bd) {
        return (Array.isArray(Bd) ? Bd : [Bd]).map(BY.Z);
      };
    },
    6053: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => BY,
      });
      var Br = Bx(7034);
      var BO = Bx(2957);
      const BY = function (BS) {
        if (BS && BS.file) {
          const BU = Object.assign(
            {},
            {
              default: false,
              type: "",
            },
            BS
          );
          BU.file = (0, BO.fy)("" + BU.file);
          var BS = /^[^/]+\/(?:x-)?([^/]+)$/;
          var Bb = BU.type;
          if (BS.test(Bb)) {
            BU.mimeType = Bb;
            BU.type = Bb.replace(BS, "$1");
          }
          if ((0, Br.isYouTube)(BU.file)) {
            BU.type = "youtube";
          } else if ((0, Br.isRtmp)(BU.file)) {
            BU.type = "rtmp";
          } else {
            BU.type ||= (0, BO.AO)(BU.file);
          }
          if (BU.type) {
            switch (BU.type) {
              case "m3u8":
              case "vnd.apple.mpegurl":
                BU.type = "hls";
                break;
              case "dash+xml":
                BU.type = "dash";
                break;
              case "m4a":
                BU.type = "aac";
                break;
              case "smil":
                BU.type = "rtmp";
            }
            Object.keys(BU).forEach(function (Bn) {
              if (BU[Bn] === "") {
                delete BU[Bn];
              }
            });
            return BU;
          }
        }
      };
    },
    4101: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => BK,
      });
      var Br = Bx(676);
      var BO = Bx(9888);
      var BY = Bx(2957);
      var BS = Bx(4446);
      var Bb = Bx(3487);
      function BU(Bf) {
        var Bo;
        var BD;
        if (typeof Bf == "string") {
          if ((Bo = (Bf = Bf.split("?")[0]).indexOf("://")) > 0) {
            return 0;
          } else {
            BD = Bf.indexOf("/");
            Bf = (0, BY.AO)(Bf);
            if (!(Bo < 0) || !(BD < 0) || (Bf && isNaN(Bf))) {
              return 1;
            } else {
              return 2;
            }
          }
        }
      }
      function Bn(Bf) {
        this.url = Bf;
        this.promise_ = null;
      }
      Object.defineProperties(Bn.prototype, {
        promise: {
          get() {
            return this.load();
          },
          set() {},
        },
      });
      Object.assign(Bn.prototype, {
        load() {
          let Bf = this.promise_;
          if (!Bf) {
            if (BU(this.url) === 2) {
              return Promise.resolve(this);
            }
            var Bo = new Br.ZP(
              ((BD) => {
                switch (BU(BD)) {
                  case 0:
                    return BD;
                  case 1:
                    return (0, BO.getAbsolutePath)(BD, window.location.href);
                }
              })(this.url)
            );
            this.loader = Bo;
            Bf = Bo.load().then(() => this);
            this.promise_ = Bf;
          }
          return Bf;
        },
        registerPlugin(Bf, Bo, BD) {
          this.name = Bf;
          this.target = Bo;
          this.js = BD;
        },
        getNewInstance(Bf, Bo, BD) {
          var BN = this.js;
          if (typeof BN != "function") {
            throw new BS.rG(null, (0, Bb.bX)(this.url) + 100);
          }
          const Bk = new BN(Bf, Bo, BD);
          const BL = {
            type: "pluginInitialized",
            name: this.name,
            config: Bo,
          };
          Bk.addToPlayer = function (Bg = false) {
            var Ba = this.getContainer().querySelector(".jw-overlays");
            if (Ba) {
              BD.left = Ba.style.left;
              BD.top = Ba.style.top;
              Ba.appendChild(BD);
              if (Bg) {
                this.trigger("pluginInitialized", BL);
              } else {
                setTimeout(() => this.trigger("pluginInitialized", BL), 0);
              }
              return Bk;
            }
          };
          Bk.resizeHandler = function () {
            var Bg = this.getContainer().querySelector(".jw-overlays");
            if (Bg) {
              Bk.resize(Bg.clientWidth, Bg.clientHeight);
            }
          };
          return Bk;
        },
      });
      const BK = Bn;
    },
    1241: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        ZP: () =>
          function (Bo, BD) {
            var BN = Bo.get("plugins");
            window.jwplayerPluginJsonp = BK;
            return (Bo.pluginLoader = Bo.pluginLoader || new BY())
              .load(BD, Bn, BN, Bo)
              .then((Bk) => {
                if (!Bo.attributes._destroyed) {
                  delete window.jwplayerPluginJsonp;
                  return Bk;
                }
              });
          },
        fo: () => BK,
        Ve: () => Bf,
      });
      var Br = Bx(4446);
      var BO = Bx(3487);
      const BY = function () {
        this.load = function (Bo, BD, BN, Bk) {
          if (BN && typeof BN == "object") {
            return Promise.all(
              Object.keys(BN)
                .filter((BL) => BL)
                .map((BL) => {
                  const Bg = BN[BL];
                  return BD.setupPlugin(BL)
                    .then((Ba) => {
                      if (!Bk.attributes._destroyed) {
                        return (0, BO.MK)(Ba, Bg, Bo);
                      }
                    })
                    .catch((Ba) => {
                      BD.removePlugin(BL);
                      if (Ba.code) {
                        return Ba;
                      } else {
                        return new Br.rG(null, (0, BO.bX)(BL), Ba);
                      }
                    });
                })
            );
          } else {
            return Promise.resolve();
          }
        };
      };
      var BS = Bx(4101);
      var Bb = Bx(5499);
      const BU = {};
      const Bn = new (class {
        setupPlugin(Bo) {
          var BD = this.getPlugin(Bo);
          if (BD) {
            if (BD.url !== Bo) {
              (0, Bb.c)(
                'JW Plugin "' +
                  (0, BO.Nq)(Bo) +
                  '" already loaded from "' +
                  BD.url +
                  '". Ignoring "' +
                  Bo +
                  '."'
              );
            }
            return BD.promise;
          } else {
            return this.addPlugin(Bo).load();
          }
        }
        addPlugin(Bo) {
          var BD = (0, BO.Nq)(Bo);
          let BN = BU[BD];
          if (!BN) {
            BN = new BS.Z(Bo);
            BU[BD] = BN;
          }
          return BN;
        }
        getPlugin(Bo) {
          return BU[(0, BO.Nq)(Bo)];
        }
        removePlugin(Bo) {
          delete BU[(0, BO.Nq)(Bo)];
        }
        getPlugins() {
          return BU;
        }
      })();
      const BK = function (Bo, BD, BN) {
        var Bk = Bn.addPlugin(Bo);
        if (!Bk.js) {
          Bk.registerPlugin(Bo, BD, BN);
        }
      };
      const Bf = async (Bo, BD, BN) => {
        var Bk = (0, BO.Nq)(Bo);
        var BL = Bn.getPlugin(Bk);
        if (BL) {
          return (0, BO.MK)(BL, BD, BN);
        }
        let Bg = Bk === Bo ? Bo : Bo;
        return Bn.setupPlugin(Bg).then((Ba) => (0, BO.MK)(Ba, BD, BN));
      };
    },
    7164: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        MK: () => BS,
        Nq: () => BO,
        bX: () => BY,
      });
      var Br = Bx(5950);
      const BO = function (Bb) {
        var BU = /\/((.(?!\/))+?)\.js/i.exec(Bb);
        var BU = (BU == null ? undefined : BU[1]) || Bb;
        if (BU && BU === "jwpsrv-dnt") {
          return "jwpsrv";
        } else {
          return BU;
        }
      };
      const BY = (Bb) => 305000;
      const BS = (Bb, BU, Bn) => {
        var BK = Bb.name;
        var BU = Object.assign({}, BU, (0, Br.vl)(Bb.url));
        var Bf = document.createElement("div");
        Bf.id = Bn.id + "_" + BK;
        Bf.className = "jw-plugin jw-reset";
        var Bb = Bb.getNewInstance(Bn, BU, Bf);
        Bn.addPlugin(BK, Bb);
        return Bb;
      };
    },
    7683: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        V: () => BY,
        Z: () =>
          function () {
            const BS = Br.Jx;
            const Bb = [];
            const BU = [];
            for (let Bo = 0; Bo < BS; Bo++) {
              const BD = BY();
              Bb.push(BD);
              BU.push(BD);
              BO(BD);
            }
            const Bn = BU.shift();
            const BK = BU.shift();
            let Bf = false;
            return {
              primed: () => Bf,
              prime() {
                Bb.forEach(BO);
                Bf = true;
              },
              played() {
                Bf = true;
              },
              getPrimedElement: () => BU.shift() || null,
              getAdElement: () => Bn,
              getTestElement: () => BK,
              clean(BN) {
                if (BN.src) {
                  BN.removeAttribute("src");
                  try {
                    BN.load();
                  } catch (Bk) {}
                }
              },
              recycle(BN) {
                if (BN && !BU.some((Bk) => Bk === BN)) {
                  this.clean(BN);
                  BU.push(BN);
                }
              },
              syncVolume(BN) {
                const Bk = Math.min(Math.max(0, BN / 100), 1);
                Bb.forEach((BL) => {
                  BL.volume = Bk;
                });
              },
              syncMute(BN) {
                Bb.forEach((Bk) => {
                  Bk.muted = BN;
                });
              },
            };
          },
      });
      var Br = Bx(658);
      const BO = (BS) => {
        if (!BS.src) {
          BS.load();
        }
      };
      const BY = (BS) => {
        const Bb = document.createElement("video");
        Bb.className = "jw-video jw-reset";
        Bb.setAttribute("tabindex", "-1");
        Bb.setAttribute("disableRemotePlayback", "");
        Bb.setAttribute("webkit-playsinline", "");
        Bb.setAttribute("playsinline", "");
        if (BS) {
          Object.keys(BS).forEach((BU) => {
            Bb.setAttribute(BU, BS[BU]);
          });
        }
        return Bb;
      };
    },
    658: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        HB: () => BY,
        Jx: () => Br,
        l_: () => BO,
      });
      const Br = 4;
      const BO = 5;
      const BY = 1;
    },
    4609: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () =>
          function (Br, BO) {
            return Object.assign({}, BO, {
              prime() {
                if (!Br.src) {
                  Br.load();
                }
              },
              getPrimedElement: () => Br,
              clean() {
                BO.clean(Br);
              },
              recycle() {
                BO.clean(Br);
              },
            });
          },
      });
    },
    6528: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => BU,
      });
      var Br = Bx(1643);
      var BO = Bx(1384);
      function BY() {}
      const BS = () => false;
      const Bb = {
        name: "default",
      };
      const BU = {
        supports: BS,
        play: BY,
        pause: BY,
        preload: BY,
        load: BY,
        stop: BY,
        volume: BY,
        mute: BY,
        seek: BY,
        resize: BY,
        remove: BY,
        destroy: BY,
        setVisibility: BY,
        setFullscreen(Bn) {
          return (0, BO.CX)(this, Bn);
        },
        getFullscreen: BS,
        supportsFullscreen: BS,
        getContainer: BY,
        setContainer: BY,
        getName: () => Bb,
        getQualityLevels: BY,
        getCurrentQuality: BY,
        setCurrentQuality: BY,
        getAudioTracks: BY,
        getCurrentAudioTrack: BY,
        setCurrentAudioTrack: BY,
        getSeekRange() {
          return {
            start: 0,
            end: this.getDuration(),
          };
        },
        setPlaybackRate: BY,
        getPlaybackRate: () => 1,
        getBandwidthEstimate: () => null,
        getLiveLatency: () => null,
        attachMedia: BY,
        detachMedia: BY,
        init: BY,
        setState(Bn) {
          this.state = Bn;
          this.trigger(Br.uc, {
            newstate: Bn,
          });
        },
        sendMediaType(Bn) {
          var { type: Bn, mimeType: BK } = Bn[0];
          var Bn =
            Bn === "aac" ||
            Bn === "mp3" ||
            Bn === "mpeg" ||
            (BK && BK.indexOf("audio/") === 0);
          this.trigger(Br.oZ, {
            mediaType: Bn ? "audio" : "video",
          });
        },
        getDuration: () => 0,
        trigger: BY,
      };
    },
    1628: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        V: () => BO,
      });
      var Br = Bx(8348);
      const BO = (BY) =>
        BY.type === "hls" && Br.OS.android
          ? BY.androidhls !== false &&
            !Br.Browser.firefox &&
            parseFloat(Br.OS.version.version || "0") >= 4.4
          : null;
    },
    12: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        U: () => Br,
      });
      const Br = {};
    },
    670: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () =>
          function (Bb) {
            var BU = Bb.getName().name;
            if (!Br.U[BU]) {
              if (
                !(0, BS.sE)(
                  BO.B,
                  (0, BS.wB)({
                    name: BU,
                  })
                )
              ) {
                if (!(0, BS.mf)(Bb.supports)) {
                  throw new Error(
                    "Tried to register a provider with an invalid object"
                  );
                }
                BO.B.unshift({
                  name: BU,
                  supports: Bb.supports,
                });
              }
              (0, BS.ce)(Bb.prototype, BY.Z);
              Br.U[BU] = Bb;
            }
          },
      });
      var Br = Bx(12);
      var BO = Bx(2963);
      var BY = Bx(6528);
      var BS = Bx(6042);
      Bx(328);
    },
    6593: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        B: () => BU,
        H: () => Bb,
      });
      var Br = Bx(1628);
      var BO = Bx(7034);
      var BY = Bx(9025);
      const BS = {
        aac: "audio/mp4",
        mp4: "video/mp4",
        f4v: "video/mp4",
        m4v: "video/mp4",
        mov: "video/mp4",
        mp3: "audio/mpeg",
        mpeg: "audio/mpeg",
        ogv: "video/ogg",
        ogg: "video/ogg",
        oga: "video/ogg",
        vorbis: "video/ogg",
        webm: "video/webm",
        f4a: "video/aac",
        m3u8: "application/vnd.apple.mpegurl",
        m3u: "application/vnd.apple.mpegurl",
        hls: "application/vnd.apple.mpegurl",
      };
      const Bb = (Bn) => {
        if (!BY.Z || !BY.Z.canPlayType) {
          return false;
        }
        if ((0, Br.V)(Bn) === false) {
          return false;
        }
        var BK = Bn.file;
        var Bf = Bn.type;
        if ((0, BO.isRtmp)(BK, Bf)) {
          return false;
        }
        let Bo = Bn.mimeType || BS[Bf];
        return (
          !!Bo &&
          ((BK = Bn.mediaTypes) != null &&
            BK.length &&
            (Bo = [Bo].concat(BK.slice()).join("; ")),
          Boolean(BY.Z.canPlayType(Bo)))
        );
      };
      const BU = [
        {
          name: "html5",
          supports: Bb,
        },
      ];
    },
    1384: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        CX: () => Bn,
        IP: () => Bf,
        If: () => BU,
        Nm: () => BK,
      });
      var Br = Bx(1643);
      let BO;
      let BY;
      let BS = false;
      function Bb(Bo, BD, BN) {
        BS = BN;
        Bo.trigger(Br.h7, {
          target: BD.target,
          jwstate: BN,
        });
      }
      const BU = () => BS;
      const Bn = function (Bo, BD) {
        if ((BD = Boolean(BD))) {
          try {
            const Bk =
              Bo.video.webkitEnterFullscreen || Bo.video.webkitEnterFullScreen;
            if (Bk) {
              Bk.apply(Bo.video);
            }
          } catch (BL) {
            return false;
          }
          return Bo.getFullscreen();
        }
        var BN = Bo.video.webkitExitFullscreen || Bo.video.webkitExitFullScreen;
        if (BN) {
          BN.apply(Bo.video);
        }
        return BD;
      };
      const BK = function (Bo, BD) {
        BO = (BN) => Bb(Bo, BN, true);
        BY = (BN) => Bb(Bo, BN, false);
        BD.addEventListener("webkitbeginfullscreen", BO);
        BD.addEventListener("webkitendfullscreen", BY);
      };
      const Bf = (Bo) => {
        Bo.removeEventListener("webkitbeginfullscreen", BO);
        Bo.removeEventListener("webkitendfullscreen", BY);
      };
    },
    6875: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Br,
      });
      const Br =
        "hidden" in document
          ? function () {
              return !document.hidden;
            }
          : "webkitHidden" in document
          ? function () {
              return !document.webkitHidden;
            }
          : function () {
              return true;
            };
    },
    6886: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        E: () => Bb,
        h: () => Bo,
      });
      var Br = Bx(9888);
      var BO = Bx(7034);
      var BY = Bx(4446);
      function BS() {}
      const Bb = (BD) => {
        BD.onload = null;
        BD.onprogress = null;
        BD.onreadystatechange = null;
        BD.onerror = null;
        if ("abort" in BD) {
          BD.abort();
        }
      };
      const BU = (BD, BN, Bk, BL) => {
        BD.onerror(BN, BD.url, BD.xhr, new BY.rG(BN, Bk, BL));
      };
      const Bn = (BD, BN, Bk) => {
        var BL = BN.documentElement;
        if (
          !Bk.requireValidXML ||
          (BL.nodeName !== "parsererror" &&
            !BL.getElementsByTagName("parsererror").length)
        ) {
          if (!BD.responseXML) {
            BD = Object.assign({}, BD, {
              responseXML: BN,
            });
          }
          return Bk.oncomplete(BD);
        }
        BU(Bk, BY.ul, 601);
      };
      const BK = (BD) =>
        function (BN) {
          BN = BN.currentTarget || BD.xhr;
          clearTimeout(BD.timeoutId);
          if (BD.responseType) {
            if (BD.responseType === "json") {
              var Bk = BN;
              var BL = BD;
              if (
                !Bk.response ||
                (typeof Bk.response == "string" &&
                  Bk.responseText.substr(1) !== '"')
              ) {
                try {
                  Bk = Object.assign({}, Bk, {
                    response: JSON.parse(Bk.responseText),
                  });
                } catch (Bg) {
                  BU(BL, BY.ul, 611, Bg);
                  return;
                }
              }
              return BL.oncomplete(Bk);
              return;
            }
          } else {
            let Ba;
            let Bd = BN.responseXML;
            if (Bd) {
              try {
                Ba = Bd.firstChild;
              } catch (Bt) {}
            }
            if (Bd && Ba) {
              return Bn(BN, Bd, BD);
            }
            if (
              BD.useDomParser &&
              BN.responseText &&
              !Bd &&
              (Bd = (0, Br.parseXML)(BN.responseText)) != null &&
              Bd.firstChild
            ) {
              return Bn(BN, Bd, BD);
            }
            if (BD.requireValidXML) {
              BU(BD, BY.ul, 602);
              return;
            }
          }
          BD.oncomplete(BN);
        };
      let Bf;
      const Bo = (BD, BN, Bk, BL) => {
        var Bg;
        let Ba;
        if (BD === Object(BD)) {
          BD = (BL = BD).url;
        }
        const Bd = Object.assign(
          {
            xhr: null,
            url: BD,
            withCredentials: false,
            retryWithoutCredentials: false,
            timeout: 60000,
            timeoutId: -1,
            oncomplete: BN || BS,
            onerror: Bk || BS,
            mimeType: BL && !BL.responseType ? "text/xml" : "",
            requireValidXML: false,
            responseType: BL != null && BL.plainText ? "text" : "",
            useDomParser: false,
            requestFilter: null,
          },
          BL
        );
        const Bt = Bf("Error loading file", Bd);
        if ("XMLHttpRequest" in window) {
          Ba = Bd.xhr = Bd.xhr || new window.XMLHttpRequest();
          if (typeof Bd.requestFilter == "function") {
            let Bc;
            try {
              Bc = Bd.requestFilter({
                url: BD,
                xhr: Ba,
              });
            } catch (BR) {
              Bt(BR, 5);
              return Ba;
            }
            if (Bc && "open" in Bc && "send" in Bc) {
              Ba = Bd.xhr = Bc;
            }
          }
          Bg = Bd;
          Ba.onreadystatechange = function (BQ) {
            var BV = BQ.currentTarget || Bg.xhr;
            if (BV.readyState === 4) {
              clearTimeout(Bg.timeoutId);
              BV = BV.status;
              if (!(BV >= 400)) {
                if (BV === 200) {
                  return BK(Bg)(BQ);
                } else {
                  if (
                    BV === 0 &&
                    (0, BO.isFileProtocol)() &&
                    !/^[a-z][a-z0-9+.-]*:/.test(Bg.url)
                  ) {
                    BU(Bg, BY.ul, 7);
                  }
                  return;
                }
              }
              BU(Bg, BY.ul, BV < 600 ? BV : 6);
            }
          };
          Ba.onerror = Bt;
          if ("overrideMimeType" in Ba) {
            if (Bd.mimeType) {
              Ba.overrideMimeType(Bd.mimeType);
            }
          } else {
            Bd.useDomParser = true;
          }
          try {
            BD = BD.replace(/#.*$/, "");
            Ba.open("GET", BD, true);
          } catch (BQ) {
            Bt(BQ, 3);
            return Ba;
          }
          if (Bd.responseType) {
            try {
              Ba.responseType = Bd.responseType;
            } catch (BV) {}
          }
          if (Bd.timeout) {
            Bd.timeoutId = setTimeout(function () {
              Bb(Ba);
              BU(Bd, BY.ud, 1);
            }, Bd.timeout);
            Ba.onabort = function () {
              clearTimeout(Bd.timeoutId);
            };
          }
          try {
            if (Bd.withCredentials && "withCredentials" in Ba) {
              Ba.withCredentials = true;
            }
            Ba.send();
          } catch (BE) {
            Bt(BE, 4);
          }
          return Ba;
        }
        BU(Bd, BY.ud, 2);
      };
      Bf = (BD, BN) =>
        function (Bk, BL) {
          var Bg = Bk.currentTarget || BN.xhr;
          clearTimeout(BN.timeoutId);
          if (BN.retryWithoutCredentials && BN.xhr.withCredentials) {
            Bb(Bg);
            const Ba = Object.assign({}, BN, {
              xhr: null,
              withCredentials: false,
              retryWithoutCredentials: false,
            });
            Bo(Ba);
          } else {
            if (!BL && Bg.status >= 400 && Bg.status < 600) {
              BL = Bg.status;
            }
            BU(BN, BL ? BY.ul : BY.ud, BL || 6, Bk);
          }
        };
    },
    328: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        IH: () => Bn,
        S1: () => BK,
        X$: () => Bf,
        ZP: () => Bb,
        on: () => BU,
        wj: () => Bo,
      });
      function Br(BD, BN) {
        if (BD == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(BD), BN);
      }
      const BO = (BD, BN, Bk, BL) => {
        let Bg = -1;
        const Ba = BD.length;
        while (++Bg < Ba) {
          const Bd = BD[Bg];
          if (BL) {
            try {
              Bd.callback.apply(Bd.context || Bk, BN);
            } catch (Bt) {
              console.log('Error in "' + BL + '" event handler:', Bt);
            }
          } else {
            Bd.callback.apply(Bd.context || Bk, BN);
          }
        }
      };
      const BY = /\s+/;
      const BS = (BD, BN, Bk, BL) => {
        if (Bk) {
          if (typeof Bk == "object") {
            for (const Bg in Bk) {
              if (Br(Bk, Bg)) {
                BD[BN].apply(BD, [Bg, Bk[Bg]].concat(BL));
              }
            }
            return false;
          }
          if (BY.test(Bk)) {
            const Ba = Bk.split(BY);
            for (let Bd = 0, Bt = Ba.length; Bd < Bt; Bd++) {
              BD[BN].apply(BD, [Ba[Bd]].concat(BL));
            }
            return false;
          }
        }
        return true;
      };
      class Bb {
        on(BD, BN, Bk) {
          if (BS(this, "on", BD, [BN, Bk]) && BN) {
            ((this._events ||= {})[BD] ||= []).push({
              callback: BN,
              context: Bk,
            });
          }
          return this;
        }
        once(BD, BN, Bk) {
          if (!BS(this, "once", BD, [BN, Bk]) || !BN) {
            return this;
          }
          let BL = 0;
          function Bg() {
            if (!BL++) {
              Ba.off(BD, Bg);
              BN.apply(this, arguments);
            }
          }
          const Ba = this;
          Bg._callback = BN;
          return this.on(BD, Bg, Bk);
        }
        off(BD, BN, Bk) {
          if (this._events && BS(this, "off", BD, [BN, Bk])) {
            if (BD || BN || Bk) {
              const Ba = BD ? [BD] : Object.keys(this._events);
              for (let Bd = 0, Bt = Ba.length; Bd < Bt; Bd++) {
                BD = Ba[Bd];
                var BL = this._events[BD];
                if (BL) {
                  const Bc = (this._events[BD] = []);
                  if (BN || Bk) {
                    for (let BR = 0, BQ = BL.length; BR < BQ; BR++) {
                      var Bg = BL[BR];
                      if (
                        (BN &&
                          BN !== Bg.callback &&
                          BN !== Bg.callback._callback) ||
                        (Bk && Bk !== Bg.context)
                      ) {
                        Bc.push(Bg);
                      }
                    }
                  }
                  if (!Bc.length) {
                    delete this._events[BD];
                  }
                }
              }
            } else {
              delete this._events;
            }
          }
          return this;
        }
        trigger(BD, ...BN) {
          var Bk;
          if (
            this._events &&
            BS(this, "trigger", BD, BN) &&
            ((BD = this._events[BD]),
            (Bk = this._events.all),
            BD && BO(BD, BN, this),
            Bk)
          ) {
            BO(Bk, arguments, this);
          }
          return this;
        }
        triggerSafe(BD, ...BN) {
          var Bk;
          var BL;
          if (
            this._events &&
            BS(this, "trigger", BD, BN) &&
            ((Bk = this._events[BD]),
            (BL = this._events.all),
            Bk && BO(Bk, BN, this, BD),
            BL)
          ) {
            BO(BL, arguments, this, BD);
          }
          return this;
        }
      }
      const BU = Bb.prototype.on;
      const Bn = Bb.prototype.once;
      const BK = Bb.prototype.off;
      const Bf = Bb.prototype.trigger;
      const Bo = Bb.prototype.triggerSafe;
      Bb.on = BU;
      Bb.once = Bn;
      Bb.off = BK;
      Bb.trigger = Bf;
    },
    2268: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        A: () => Bf,
        DF: () => Bn,
        Dt: () => Ba,
        G6: () => BL,
        NO: () => BR,
        O7: () => Bd,
        Q6: () => BD,
        cL: () => Bc,
        dI: () => BQ,
        gn: () => Bg,
        i7: () => BN,
        id: () => BU,
        pZ: () => BY,
        tq: () => Bt,
        un: () => BK,
        w1: () => Bk,
        xb: () => BS,
        yS: () => Bo,
        zc: () => Bb,
      });
      const Br = (BV) => navigator.userAgent.match(BV) !== null;
      const BO = () =>
        navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      const BY = () => Br(/firefox\//i);
      const BS = () => Br(/iP(hone|od)/i);
      const Bb = () => Br(/iPad/i) || BO();
      const BU = () => Br(/Macintosh/i) && !BO();
      const Bn = () => Br(/FBAV/i);
      const BK = () => Br(/\sEdge?\/\d+/i);
      const Bf = () => Br(/msie/i);
      const Bo = () => Br(/SMART-TV/);
      const BD = () => Bo() && !Br(/SamsungBrowser/);
      const BN = () =>
        Br(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !BK() && !Br(/UCBrowser/i);
      const Bk = () =>
        !Br(/\sEdg\/\d+/i) && (BK() || Br(/trident\/.+rv:\s*11/i) || Bf());
      const BL = () =>
        Br(/safari/i) &&
        !Br(/(?:Chrome|CriOS|chromium|android|phantom)/i) &&
        !Bo();
      const Bg = () => Br(/iP(hone|ad|od)/i) || BO();
      const Ba = function () {
        if (typeof Ba.mock_ == "boolean") {
          return Ba.mock_;
        } else {
          return Br(/Android/i) && !Br(/Windows Phone/i);
        }
      };
      const Bd = () =>
        (!Br(/chrome\/[123456789]/i) || !!Br(/chrome\/18/i) || !!BY()) && Ba();
      Ba.mock_ = null;
      const Bt = () => Bg() || Ba() || Br(/Windows Phone/i);
      const Bc = function () {
        if (typeof Bc.mock_ == "boolean") {
          return Bc.mock_;
        }
        try {
          return window.self !== window.top;
        } catch (BV) {
          return true;
        }
      };
      Bc.mock_ = null;
      const BR = () => false;
      const BQ = () => 0;
    },
    8381: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        $W: () => BS,
        Mf: () => BU,
        T2: () => Bn,
        _b: () => Bb,
      });
      var Br = Bx(8518);
      var BO = Bx(2557);
      var BY = Bx(4446);
      const BS = function (BK, Bf) {
        const Bo = [];
        if (BK && BK.timestamps && BK.timestamps.length) {
          const BD = BK.timestamps.sort((BN, Bk) => BN.begin - Bk.begin);
          BD.forEach((BN, Bk) => {
            var BL = ((Bd, Bt = "en") => {
              let Bc = (0, Br.G3)();
              var BR = Object.keys(Bd.title);
              var BQ = BR[0];
              for (; !Bd.title[Bc]; ) {
                const BV = BR.find(
                  (
                    (BW) => (BT) =>
                      BT.indexOf(BW) === 0
                  )(Bc)
                );
                if (BV) {
                  Bc = BV;
                  break;
                }
                const BE = Bc.lastIndexOf("-");
                if (BE <= 0) {
                  Bc = null;
                  break;
                }
                Bc = Bc.slice(0, BE);
              }
              return Bc || (BR.indexOf(Bt) >= 0 ? Bt : BQ);
            })(BN, BK.defaultLanguage);
            var BL = BN.title[BL];
            var Bg = BN.time;
            var BN = BN.image;
            let Ba = Bf;
            Bg = {
              begin: Bg,
              end: (Ba = Bk + 1 < BD.length ? BD[Bk + 1].time : Ba),
              text: BL,
              cueType: "chapters",
            };
            if (BN) {
              Bg.image = BN;
            }
            Bo.push(Bg);
          });
        }
        return Bo;
      };
      const Bb = function (BK, Bf) {
        const Bo = (0, Br.G3)();
        const BD = BK.reduce(function (BN, Bk) {
          var BL;
          if (!Bk || !Bk.cueType || Bk.cueType === "chapters") {
            (BL = new BO.u({
              time: Bk.begin,
              image: Bk.image,
            })).addTitle(Bo, Bk.text);
            BN.push(BL);
          }
          return BN;
        }, []);
        if (Bf) {
          Bf.timestamps = BD;
          return Bf;
        } else {
          return new BO.t(Bo, BD);
        }
      };
      const BU = function (BK, Bf) {
        if (typeof BK != "number" || BK < 0 || !Bf || !Bf.length) {
          return null;
        }
        let Bo = null;
        for (let BN = 0; BN < Bf.length; BN++) {
          var BD = Bf[BN];
          if (!(BD.time > BK)) {
            if (!Bo || BD.time > Bo.time) {
              Bo = BD;
            }
          }
        }
        return Bo;
      };
      const Bn = function (BK, Bf) {
        let Bo = true;
        BK.forEach((BD) => {
          if (
            !!BD &&
            (!BD.defaultLanguage ||
              !BD.timestamps ||
              !!BD.timestamps.some(
                (BN) => !BN.title || BN.time === null || BN.time === undefined
              ))
          ) {
            Bo = false;
          }
        });
        return Bf(Bo ? null : (0, BY.l9)(new Error(), BY.aD));
      };
    },
    974: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        HY: () => Bf,
        iv: () => BU,
        oB: () => Bb,
        oI: () => BS,
        vs: () => Bn,
      });
      function Br(Bo, BD) {
        if (Bo == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(Bo), BD);
      }
      var BO = Bx(2957);
      var Be = Bx(9563);
      var BY = Bx.n(Be);
      const BS = BY().clear;
      const Bb = (Bo, BD) => {
        if (Bo != null) {
          let Bd;
          if (Bo.length === undefined) {
            Bo = [Bo];
          }
          var BN;
          var Bk;
          var BL = {};
          for (Bd in BD) {
            if (Br(BD, Bd)) {
              BN = Bd;
              Bk = BD[Bd];
              BL[Bd] =
                Bk === "" || Bk == null
                  ? ""
                  : typeof Bk == "string" && isNaN(Bk)
                  ? /png|gif|jpe?g/i.test(Bk) && Bk.indexOf("url") < 0
                    ? "url(" + Bk + ")"
                    : Bk
                  : Bk === 0 || BN === "z-index" || BN === "opacity"
                  ? "" + Bk
                  : /color/i.test(BN)
                  ? "#" + (0, BO.vk)(Bk.toString(16).replace(/^0x/i, ""), 6)
                  : Math.ceil(Bk) + "px";
            }
          }
          for (let Bt = 0; Bt < Bo.length; Bt++) {
            var Bg;
            var Ba = Bo[Bt];
            if (Ba != null) {
              for (Bd in BL) {
                if (
                  Br(BL, Bd) &&
                  ((Bg = ((Bc) => {
                    Bc = Bc.split("-");
                    for (let BR = 1; BR < Bc.length; BR++) {
                      Bc[BR] = Bc[BR].charAt(0).toUpperCase() + Bc[BR].slice(1);
                    }
                    return Bc.join("");
                  })(Bd)),
                  Ba.style[Bg] !== BL[Bd])
                ) {
                  Ba.style[Bg] = BL[Bd];
                }
              }
            }
          }
        }
      };
      const BU = (Bo, BD, BN, Bk) => {
        BN = BN || "all-players";
        let BL = "";
        if (typeof BD == "object") {
          const Bg = document.createElement("div");
          Bb(Bg, BD);
          let Ba = Bg.style.cssText;
          if (Br(BD, "content")) {
            Ba = Ba && Ba + ' content: "' + BD.content + '";';
          }
          if (Bk) {
            Ba = Ba && Ba.replace(/;/g, " !important;");
          }
          BL = "{" + Ba + "}";
        } else if (typeof BD == "string") {
          BL = BD;
        }
        if (BL !== "" && BL !== "{}") {
          BY().style([[Bo, Bo + BL]], BN);
        } else {
          BY().clear(BN, Bo);
        }
      };
      const Bn = (Bo, BD) => {
        Bb(Bo, {
          transform: BD,
        });
      };
      let BK;
      const Bf = (Bo, BD) => {
        let BN = "rgb";
        var Bk = BD !== undefined && BD !== 100;
        if (Bk) {
          BN += "a";
        }
        if (!BK) {
          const BL = document.createElement("canvas");
          BL.height = 1;
          BL.width = 1;
          BK = BL.getContext("2d", {
            willReadFrequently: true,
          });
        }
        if (Bo) {
          if (!isNaN(parseInt(Bo, 16))) {
            Bo = "#" + Bo;
          }
        } else {
          Bo = "#000000";
        }
        BK.clearRect(0, 0, 1, 1);
        BK.fillStyle = Bo;
        BK.fillRect(0, 0, 1, 1);
        Bo = BK.getImageData(0, 0, 1, 1).data;
        BN += "(" + Bo[0] + ", " + Bo[1] + ", " + Bo[2];
        if (Bk) {
          BN += ", " + BD / 100;
        }
        return BN + ")";
      };
    },
    5004: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        z: () => Br,
      });
      const Br =
        Date.now ||
        function () {
          return new Date().getTime();
        };
    },
    2799: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        A8: () => Bl,
        AH: () => Bj,
        EU: () => Bk,
        FK: () => Bg,
        IV: () => BR,
        L_: () => BQ,
        P$: () => BE,
        SH: () => BC,
        UM: () => BM,
        Ww: () => BX,
        az: () => BN,
        bJ: () => BD,
        cS: () => BT,
        cn: () => Bc,
        gB: () => Bo,
        i3: () => Bi,
        kq: () => BW,
        nG: () => Bz,
        nh: () => BL,
        oH: () => BK,
        og: () => BV,
        pv: () => Bn,
        s1: () => Bt,
      });
      var Br = Bx(2957);
      var BO = Bx(6042);
      var BY = Bx(8348);
      const BS = window.DOMParser;
      let Bb;
      let BU = true;
      const Bn = (BP, BF) => BP.classList.contains(BF);
      const BK = (BP) => {
        var BF = BP.querySelectorAll("script,object,iframe,meta");
        for (let By = BF.length; By--; ) {
          var Bs = BF[By];
          Bs.parentNode.removeChild(Bs);
        }
        return BP;
      };
      const Bf =
        /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/;
      const Bo = (BP) => {
        var BF = BP.attributes;
        for (let BZ = BF.length; BZ--; ) {
          var Bs;
          var By = BF[BZ].name;
          if (/^on/.test(By)) {
            BP.removeAttribute(By);
          }
          if (/href/.test(By)) {
            Bs = BF[BZ].value;
            if (!!/javascript:|javascript&colon;/.test(Bs) || !Bf.test(Bs)) {
              BP.removeAttribute(By);
              console.warn("Invalid or unsafe URL");
            }
          }
        }
        return BP;
      };
      const BD = (BP) => {
        BP = BP;
        if (!Bb) {
          Bb = new BS();
          BU = (() => {
            try {
              if (Bb.parseFromString("", "text/html")) {
                return true;
              }
            } catch (BZ) {}
            return false;
          })();
        }
        const BF = (
          BU
            ? Bb.parseFromString(BP, "text/html")
            : ((Bs = document.implementation.createHTMLDocument("")),
              BP.toLowerCase().indexOf("<!doctype") > -1
                ? (Bs.documentElement.innerHTML = BP)
                : (Bs.body.innerHTML = BP),
              Bs)
        ).body;
        BK(BF);
        var Bs;
        var By = BF.querySelectorAll("*");
        for (let BZ = By.length; BZ--; ) {
          const BG = By[BZ];
          Bo(BG);
        }
        return BF;
      };
      const BN = (BP) => BD(BP).firstChild;
      const Bk = (BP) => {
        while (BP.firstChild) {
          BP.removeChild(BP.firstChild);
        }
      };
      const BL = (BP, BF) => {
        Bk(BP);
        if (BF) {
          var Bs = document.createDocumentFragment();
          var By = BD(BF).childNodes;
          for (let BZ = 0; BZ < By.length; BZ++) {
            Bs.appendChild(By[BZ].cloneNode(true));
          }
          BP.appendChild(Bs);
        }
      };
      const Bg = (BP) => BP + (BP.toString().indexOf("%") > 0 ? "" : "px");
      const Ba = (BP) =>
        (0, BO.HD)(BP.className) ? BP.className.split(" ") : [];
      const Bd = (BP, BF) => {
        BF = (0, Br.fy)(BF);
        if (BP.className !== BF) {
          BP.className = BF;
        }
      };
      const Bt = (BP) => BP.classList || Ba(BP);
      const Bc = (BP, BF) => {
        const Bs = Ba(BP);
        (Array.isArray(BF) ? BF : BF.split(" ")).forEach(function (By) {
          if (!(0, BO.r3)(Bs, By)) {
            Bs.push(By);
          }
        });
        Bd(BP, Bs.join(" "));
      };
      const BR = (BP, BF) => {
        var Bs = Ba(BP);
        var BF = Array.isArray(BF) ? BF : BF.split(" ");
        Bd(BP, (0, BO.e5)(Bs, BF).join(" "));
      };
      const BQ = (BP, BF, Bs) => {
        let By = BP.className || "";
        if (BF.test(By)) {
          By = By.replace(BF, Bs);
        } else if (Bs) {
          By += " " + Bs;
        }
        Bd(BP, By);
      };
      const BV = (BP, BF, Bs) => {
        var By = Bn(BP, BF);
        if ((Bs = (0, BO.jn)(Bs) ? Bs : !By) !== By) {
          (Bs ? Bc : BR)(BP, BF);
        }
      };
      const BE = (BP, BF, Bs) => {
        BP.setAttribute(BF, Bs);
      };
      const BW = (BP) => {
        var BF = document.createElement("link");
        BF.rel = "stylesheet";
        BF.href = BP;
        document.getElementsByTagName("head")[0].appendChild(BF);
      };
      const BT = (BP) => {
        if (BP) {
          Bk(BP);
        }
      };
      const Bl = (BP) => {
        var BF;
        var Bs;
        var By = {
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
        };
        if (
          BP &&
          document.body.contains(BP) &&
          ((BP = BP.getBoundingClientRect()),
          (BF = window.pageYOffset),
          (Bs = window.pageXOffset),
          BP.width || BP.height || BP.left || BP.top)
        ) {
          By.left = BP.left + Bs;
          By.right = BP.right + Bs;
          By.top = BP.top + BF;
          By.bottom = BP.bottom + BF;
          By.width = BP.right - BP.left;
          By.height = BP.bottom - BP.top;
        }
        return By;
      };
      const BC = (BP, BF) => {
        BP.insertBefore(BF, BP.firstChild);
      };
      const Bj = (BP) => BP.nextElementSibling;
      const Bi = (BP) => BP.previousElementSibling;
      const Bz = (BP, BF, Bs = {}, By = document) => {
        if (Bf.test(BP)) {
          let BZ = By.createElement("a");
          BZ.href = BP;
          BZ.target = BF;
          BZ = Bo(Object.assign(BZ, Bs));
          if (BY.Browser.firefox) {
            BZ.dispatchEvent(
              new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window,
              })
            );
          } else {
            BZ.click();
          }
        }
      };
      const BM = () => {
        var BP = window.screen.orientation;
        return (
          (!!BP &&
            (BP.type === "landscape-primary" ||
              BP.type === "landscape-secondary")) ||
          window.orientation === 90 ||
          window.orientation === -90
        );
      };
      const BX = (BP) => {
        BP = BP;
        (BF = document.createElement("textarea")).innerHTML = BP;
        return BF.value
          .replace(/&|<|>|"|''/gm, function (Bs) {
            return "&#" + Bs.charCodeAt(0) + ";";
          })
          .replace(
            /&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim,
            "<$1$2>"
          );
        var BF;
      };
    },
    4429: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => BL,
      });
      var Be = Bx(1569);
      var Br = Bx(7034);
      var BO = Bx(9888);
      var BY = Bx(2957);
      var BS = Bx(7411);
      var Bb = Bx(4742);
      function BU(Bg, Ba) {
        this.name = Bg;
        this.message = Ba.message || Ba.toString();
        this.error = Ba;
      }
      var Bn = Bx(6042);
      var BK = Bx(2268);
      var Bf = Bx(2799);
      var Bo = Bx(974);
      var BD = Bx(6886);
      var BN = Bx(1261);
      var Bk = Bx(5499);
      var Bx = Bx(6234);
      const BL = Object.assign({}, BO, Br, Be, {
        addClass: Bf.cn,
        hasClass: Bf.pv,
        removeClass: Bf.IV,
        replaceClass: Bf.L_,
        toggleClass: Bf.og,
        classList: Bf.s1,
        styleDimension: Bf.FK,
        createElement: Bf.az,
        emptyElement: Bf.EU,
        addStyleSheet: Bf.kq,
        bounds: Bf.A8,
        openLink: Bf.nG,
        replaceInnerHtml: Bf.nh,
        css: Bo.iv,
        clearCss: Bo.oI,
        style: Bo.oB,
        transform: Bo.vs,
        getRgba: Bo.HY,
        ajax: BD.h,
        crossdomain: (Bg) => {
          var Ba = window.URL;
          try {
            var Bd = new Ba(Bg, location.origin);
            return (
              location.protocol + "//" + location.host !=
              Bd.protocol + "//" + Bd.host
            );
          } catch (Bt) {}
          return true;
        },
        tryCatch: function (Bg, Ba, Bd = []) {
          if (Bb.Z.debug) {
            return Bg.apply(Ba || this, Bd);
          }
          try {
            return Bg.apply(Ba || this, Bd);
          } catch (Bt) {
            return new BU(Bg.name, Bt);
          }
        },
        Error: BU,
        Timer: BS.Z,
        log: Bk.c,
        genId: Bx.B,
        between: BN.v,
        foreach: function (Bg, Ba) {
          for (const Bd in Bg) {
            if (
              (function (Bt, Bc) {
                if (Bt == null) {
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                }
                return Object.prototype.hasOwnProperty.call(Object(Bt), Bc);
              })(Bg, Bd)
            ) {
              Ba(Bd, Bg[Bd]);
            }
          }
        },
        flashVersion: BK.dI,
        isIframe: BK.cL,
        indexOf: Bn.cq,
        trim: BY.fy,
        pad: BY.vk,
        extension: BY.AO,
        hms: BY.WZ,
        seconds: BY.m9,
        prefix: BY.O4,
        suffix: BY.uA,
        noop: () => {},
      });
    },
    7543: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        C: () => Br,
      });
      const Br = (BO) =>
        !!(BO = BO || window.event) &&
        Boolean(BO) &&
        /^(?:mouse|pointer|touch|gesture|click|key)/.test(BO.type);
    },
    8518: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Cq: () => BN,
        Dq: () => BQ,
        G3: () => BL,
        Mh: () => BE,
        Pm: () => Bc,
        dl: () => BR,
        id: () => BD,
        q2: () => Bd,
        t6: () => Ba,
        tK: () => Bo,
      });
      var Be = Bx(6042);
      var Br = Bx(2268);
      var BO = Bx(6886);
      var BY = Bx(7034);
      var BS = Bx(696);
      const Bb = {};
      const BU = {
        aa: "Afar",
        ab: "Abkhazian",
        ae: "Avestan",
        af: "Afrikaans",
        ak: "Akan",
        am: "Amharic",
        ar: "Arabic",
        an: "Aragonese",
        as: "Assamese",
        av: "Avaric",
        ay: "Aymara",
        az: "Azerbaijani",
        ba: "Bashkir",
        be: "Belarusian",
        bg: "Bulgarian",
        bh: "Bihari languages",
        bi: "Bislama",
        bm: "Bambara",
        bn: "Bengali",
        bo: "Tibetan",
        br: "Breton",
        bs: "Bosnian",
        ca: "Catalan",
        ce: "Chechen",
        ch: "Chamorro",
        co: "Corsican",
        cr: "Cree",
        cs: "Czech",
        cu: "Church Slavic",
        cv: "Chuvash",
        cy: "Welsh",
        da: "Danish",
        de: "German",
        dv: "Divehi",
        dz: "Dzongkha",
        ee: "Ewe",
        el: "Greek",
        en: "English",
        eo: "Esperanto",
        es: "Spanish",
        et: "Estonian",
        eu: "Basque",
        fa: "Persian",
        ff: "Fulah",
        fi: "Finnish",
        fj: "Fijian",
        fo: "Faroese",
        fr: "French",
        fy: "Western Frisian",
        ga: "Irish",
        gd: "Gaelic",
        gl: "Galician",
        gn: "Guarani",
        gu: "Gujarati",
        gv: "Manx",
        ha: "Hausa",
        he: "Hebrew",
        hi: "Hindi",
        ho: "Hiri Motu",
        hr: "Croatian",
        ht: "Haitian",
        hu: "Hungarian",
        hy: "Armenian",
        hz: "Herero",
        ia: "Interlingua",
        id: "Indonesian",
        ie: "Interlingue",
        ig: "Igbo",
        ii: "Sichuan Yi",
        ik: "Inupiaq",
        io: "Ido",
        is: "Icelandic",
        it: "Italian",
        iu: "Inuktitut",
        ja: "Japanese",
        jv: "Javanese",
        ka: "Georgian",
        kg: "Kongo",
        ki: "Kikuyu",
        kj: "Kuanyama",
        kk: "Kazakh",
        kl: "Kalaallisut",
        km: "Central Khmer",
        kn: "Kannada",
        ko: "Korean",
        kr: "Kanuri",
        ks: "Kashmiri",
        ku: "Kurdish",
        kv: "Komi",
        kw: "Cornish",
        ky: "Kirghiz",
        la: "Latin",
        lb: "Luxembourgish",
        lg: "Ganda",
        li: "Limburgan",
        lo: "Lao",
        ln: "Lingala",
        lt: "Lithuanian",
        lu: "Luba-Katanga",
        lv: "Latvian",
        mg: "Malagasy",
        mh: "Marshallese",
        mi: "Maori",
        mk: "Macedonian",
        ml: "Malayalam",
        mn: "Mongolian",
        mr: "Marathi",
        ms: "Malay",
        mt: "Maltese",
        my: "Burmese",
        na: "Nauru",
        nb: "Bokmål",
        nd: "Ndebele",
        ne: "Nepali",
        ng: "Ndonga",
        nl: "Dutch",
        nn: "Norwegian Nynorsk",
        no: "Norwegian",
        nr: "Ndebele",
        nv: "Navajo",
        ny: "Chichewa",
        oc: "Occitan",
        oj: "Ojibwa",
        om: "Oromo",
        or: "Oriya",
        os: "Ossetian",
        pa: "Panjabi",
        pi: "Pali",
        pl: "Polish",
        pt: "Portuguese",
        ps: "Pushto",
        qu: "Quechua",
        rm: "Romansh",
        rn: "Rundi",
        ro: "Romanian",
        ru: "Russian",
        rw: "Kinyarwanda",
        sa: "Sanskrit",
        sc: "Sardinian",
        sd: "Sindhi",
        se: "Northern Sami",
        sg: "Sango",
        si: "Sinhala",
        sk: "Slovak",
        sl: "Slovenian",
        sm: "Samoan",
        sn: "Shona",
        so: "Somali",
        sq: "Albanian",
        sr: "Serbian",
        ss: "Swati",
        st: "Sotho",
        su: "Sundanese",
        sw: "Swahili",
        sv: "Swedish",
        ta: "Tamil",
        te: "Telugu",
        tg: "Tajik",
        th: "Thai",
        ti: "Tigrinya",
        tk: "Turkmen",
        tl: "Tagalog",
        tn: "Tswana",
        to: "Tonga",
        tr: "Turkish",
        ts: "Tsonga",
        tt: "Tatar",
        tw: "Twi",
        ty: "Tahitian",
        ug: "Uighur",
        uk: "Ukrainian",
        ur: "Urdu",
        uz: "Uzbek",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapük",
        wa: "Walloon",
        wo: "Wolof",
        xh: "Xhosa",
        yi: "Yiddish",
        yo: "Yoruba",
        za: "Zhuang",
        zh: "Chinese",
        zu: "Zulu",
      };
      const Bn = (0, Be.U_)(BU);
      const BK = (BW) => BW.toLowerCase().replace("-", "_");
      const Bf = (BW) => {
        var BW = BK(BW);
        var BT = BW.indexOf("_");
        if (BT === -1) {
          return BW;
        } else {
          return BW.substring(0, BT);
        }
      };
      const Bo = (BW) =>
        BW
          ? Object.keys(BW).reduce((BT, Bl) => {
              BT[BK(Bl)] = BW[Bl];
              return BT;
            }, {})
          : {};
      const BD = (BW) => {
        if (BW) {
          return (BW.length !== 3 && BU[Bf(BW)]) || BW;
        }
      };
      const BN = (BW) => Bn[BW] || "";
      const Bk = (BW) => {
        BW = BW.querySelector("html");
        if (BW) {
          return BW.getAttribute("lang");
        } else {
          return null;
        }
      };
      const BL = function () {
        if (typeof BL.mock_ == "string") {
          return BL.mock_;
        }
        let BW = Bk(document);
        if (!BW && (0, Br.cL)()) {
          try {
            BW = Bk(window.top.document);
          } catch (BT) {}
        }
        return BW || navigator.language || "en";
      };
      BL.mock_ = null;
      const Bg = [
        "ar",
        "da",
        "de",
        "el",
        "es",
        "fi",
        "fr",
        "he",
        "id",
        "it",
        "ja",
        "ko",
        "nb",
        "nl",
        "nn",
        "no",
        "oc",
        "pt",
        "ro",
        "ru",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
      ];
      const Ba = (BW) =>
        BW.charCodeAt(0) === 8207 ||
        /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(BW);
      const Bd = function (BW) {
        if (typeof Bd.mock_ == "boolean") {
          return Bd.mock_;
        } else {
          return Bg.indexOf(Bf(BW)) >= 0;
        }
      };
      Bd.mock_ = null;
      const Bt = (BW, BT, Bl) => {
        BT = BW[Bl] || BT[Bl];
        if (BT) {
          BW[Bl] = BT;
        }
      };
      const Bc = (BW, BT, Bl) =>
        Object.assign(
          {},
          ((BC) => {
            var {
              advertising: Bj,
              related: Bi,
              sharing: Bz,
              abouttext: BM,
            } = BC;
            var BX = Object.assign({}, BC.localization);
            if (Bj) {
              BX.advertising = BX.advertising || {};
              Bt(BX.advertising, Bj, "admessage");
              Bt(BX.advertising, Bj, "cuetext");
              Bt(BX.advertising, Bj, "loadingAd");
              Bt(BX.advertising, Bj, "podmessage");
              Bt(BX.advertising, Bj, "skipmessage");
              Bt(BX.advertising, Bj, "skiptext");
            }
            if (typeof BX.related == "string") {
              BX.related = {
                heading: BX.related,
              };
            } else {
              BX.related = BX.related || {};
            }
            if (Bi) {
              Bt(BX.related, Bi, "autoplaymessage");
            }
            if (Bz) {
              BX.sharing = BX.sharing || {};
              Bt(BX.sharing, Bz, "heading");
              Bt(BX.sharing, Bz, "copied");
            }
            if (BM) {
              Bt(BX, BC, "abouttext");
            }
            var Bj = BX.close || BX.nextUpClose;
            if (Bj) {
              BX.close = Bj;
            }
            return BX;
          })(BW),
          BT[Bf(Bl)],
          BT[BK(Bl)]
        );
      const BR = function (BW) {
        if (typeof BR.mock_ == "boolean") {
          return BR.mock_;
        } else {
          return (0, BY.isDeepKeyCompliant)(
            BS.Z,
            BW,
            (BT, Bl) => typeof Bl[BT] == "string"
          );
        }
      };
      BR.mock_ = null;
      const BQ = function (BW, BT) {
        if (typeof BQ.mock_ == "function") {
          return BQ.mock_;
        }
        let Bl = Bb[BT];
        if (!Bl) {
          const BC =
            BW +
            "translations/" +
            ((BW = Bf(BT)), /^n[bn]$/.test(BW) ? "no" : BW) +
            ".json";
          Bb[BT] = Bl = new Promise((Bj, Bi) => {
            (0, BO.h)({
              url: BC,
              oncomplete: Bj,
              onerror: (Bz, BM, BX, BP) => {
                Bb[BT] = null;
                Bi(BP);
              },
              responseType: "json",
            });
          });
        }
        return Bl;
      };
      BQ.mock_ = null;
      const BV = (BW, BT, Bl, BC) => {
        BW[BT] = Object.assign({}, Bl[BT], BC[BT]);
      };
      const BE = (BW, BT) => {
        var Bl = Object.assign({}, BW, BT);
        BV(Bl, "errors", BW, BT);
        BV(Bl, "related", BW, BT);
        BV(Bl, "sharing", BW, BT);
        BV(Bl, "advertising", BW, BT);
        BV(Bl, "shortcuts", BW, BT);
        BV(Bl, "captionsStyles", BW, BT);
        return Bl;
      };
    },
    5499: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        c: () => Br,
      });
      const Br =
        typeof console.log == "function" ? console.log.bind(console) : () => {};
    },
    1261: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        v: () => Br,
      });
      const Br = function (BO, BY, BS) {
        return Math.max(Math.min(BO, BS), BY);
      };
    },
    9888: (Bp, Be, Bx) => {
      "use strict";

      Bx.r(Be);
      Bx.d(Be, {
        getAbsolutePath: () => BS,
        isAbsolutePath: () => BY,
        parseDimension: () => Bn,
        parseXML: () => Bb,
        serialize: () => BU,
        timeFormat: () => BK,
        timeFormatAria: () => Bf,
      });
      var Br = Bx(6042);
      var BO = Bx(5950);
      const BY = (Bo) => /^(?:(?:https?|file):)?\/\//.test(Bo);
      const BS = (Bo, BD) => (0, BO.kd)(Bo, BD);
      const Bb = (Bo) => {
        let BD = null;
        try {
          if (
            (BD = new window.DOMParser().parseFromString(
              Bo,
              "text/xml"
            )).querySelector("parsererror")
          ) {
            BD = null;
          }
        } catch (BN) {}
        return BD;
      };
      const BU = (Bo) => {
        if (Bo === undefined) {
          return null;
        }
        if (typeof Bo == "string" && Bo.length < 6) {
          var BD = Bo.toLowerCase();
          if (BD === "true") {
            return true;
          }
          if (BD === "false") {
            return false;
          }
          if (!(0, Br.i2)(Number(Bo)) && !(0, Br.i2)(parseFloat(Bo))) {
            return Number(Bo);
          }
        }
        return Bo;
      };
      const Bn = (Bo) =>
        (0, Br.qh)(Bo)
          ? Bo
          : Bo === ""
          ? 0
          : Bo.lastIndexOf("%") > -1
          ? Bo
          : parseInt(Bo.replace("px", ""), 10);
      const BK = (Bo, BD) => {
        if ((0, Br.i2)(Bo)) {
          Bo = parseInt(Bo.toString(), 10);
        }
        if ((0, Br.i2)(Bo) || !isFinite(Bo) || (Bo <= 0 && !BD)) {
          return "00:00";
        } else {
          BD = Bo < 0 ? "-" : "";
          Bo = Math.abs(Bo);
          return (
            BD +
            ((BD = Math.floor(Bo / 3600)) ? BD + ":" : "") +
            ((BD = Math.floor((Bo - BD * 3600) / 60)) < 10 ? "0" : "") +
            BD +
            ":" +
            ((BD = Math.floor(Bo % 60)) < 10 ? "0" : "") +
            BD
          );
        }
      };
      const Bf = (Bo) => {
        var BD;
        if ((0, Br.i2)(Bo)) {
          Bo = parseInt(Bo.toString(), 10);
        }
        if ((0, Br.i2)(Bo) || !isFinite(Bo) || Bo <= 0) {
          return "0 seconds";
        } else {
          return (
            ((BD = Math.floor(Bo / 3600))
              ? BD + (BD >= 1 ? " hour" + (BD > 1 ? "s" : "") + ", " : "")
              : "") +
            ((BD = Math.floor((Bo - BD * 3600) / 60))
              ? BD + (BD >= 1 ? " minute" + (BD > 1 ? "s" : "") + ", " : "")
              : "") +
            (BD = Math.floor(Bo % 60)) +
            (BD >= 1 ? " second" + (BD > 1 ? "s" : "") : "")
          );
        }
      };
    },
    1569: (Bp, Be, Bx) => {
      "use strict";

      Bx.r(Be);
      Bx.d(Be, {
        getScriptPath: () => BY,
        loadFrom: () => BU,
        repo: () => BS,
        versionCheck: () => Bb,
      });
      var Br = Bx(6601);
      var BO = Bx(7034);
      const BY = function (Bn) {
        var BK = document.getElementsByTagName("script");
        for (let BD = 0; BD < BK.length; BD++) {
          var Bf = BK[BD].src;
          if (Bf) {
            var Bo = Bf.lastIndexOf("/" + Bn);
            if (Bo >= 0) {
              return Bf.substr(0, Bo + 1);
            }
          }
        }
        return "";
      };
      const BS = function () {
        var Bn = "//ssl.p.jwpcdn.com/player/v/8.33.2";
        return ((0, BO.isFileProtocol)() ? "https:" : "") + Bn;
      };
      const Bb = function (Bn) {
        var Bn = ("0" + Bn).split(/\W/);
        var BK = Br.i.split(/\W/);
        var Bf = parseFloat(Bn[0]);
        var Bo = parseFloat(BK[0]);
        return (
          !(Bo < Bf) &&
          (Bf !== Bo || !(parseFloat("0" + Bn[1]) > parseFloat(BK[1])))
        );
      };
      const BU = function () {
        return BS();
      };
    },
    6234: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        B: () => BO,
        F: () => Br,
      });
      const Br = 12;
      const BO = (BY) => {
        let BS = "";
        while (BS.length < BY) {
          BS += (() => {
            try {
              var Bb = window.crypto || window.msCrypto;
              if (Bb != null && Bb.getRandomValues) {
                return Bb.getRandomValues(new Uint32Array(1))[0].toString(36);
              }
            } catch (BU) {}
            return Math.random().toString(36).slice(2, 9);
          })();
        }
        return BS.slice(0, BY);
      };
    },
    1776: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        U: () => Br,
        W: () => BO,
      });
      const Br = window.requestAnimationFrame || ((BY) => setTimeout(BY, 17));
      const BO = window.cancelAnimationFrame || clearTimeout;
    },
    676: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        ZP: () => BS,
      });
      var Be = Bx(328);
      var Br = Bx(1643);
      function BO(Bb, BU, Bn) {
        const BK = this;
        let Bf = 0;
        const Bo = (BN) => {
          Bf = 2;
          BK.trigger(Br.pn, BN).off();
        };
        const BD = (BN) => {
          Bf = 3;
          BK.trigger(Br.xQ, BN).off();
        };
        this.getStatus = function () {
          return Bf;
        };
        this.load = function () {
          let BN = BY[Bb];
          if (Bf === 0) {
            if (BN) {
              BN.then(BD).catch(Bo);
            }
            Bf = 1;
            BN = new Promise((Bk, BL) => {
              const Bg = (
                BU
                  ? (BR) => {
                      var BQ = document.createElement("link");
                      BQ.type = "text/css";
                      BQ.rel = "stylesheet";
                      BQ.href = BR;
                      return BQ;
                    }
                  : (BR, BQ) => {
                      var BV = document.createElement("script");
                      BV.type = "text/javascript";
                      BV.charset = "utf-8";
                      BV.async = true;
                      BV.timeout = BQ || 45000;
                      BV.src = BR;
                      return BV;
                    }
              )(Bb, Bn);
              let Ba;
              function Bd(BR) {
                Bt();
                Bo(BR);
                BL(BR);
              }
              const Bt = function () {
                Bg.onerror = Bg.onload = null;
                clearTimeout(Ba);
              };
              Ba = setTimeout(() => {
                Bd(new Error("Network timeout " + Bb));
              }, 45000);
              Bg.onerror = function () {
                Bd(new Error("Failed to load " + Bb));
              };
              Bg.onload = function (BR) {
                Bt();
                BD(BR);
                Bk(BR);
              };
              var Bc =
                document.getElementsByTagName("head")[0] ||
                document.documentElement;
              Bc.insertBefore(Bg, Bc.firstChild);
            });
            BY[Bb] = BN;
          }
          return BN;
        };
      }
      const BY = {};
      Object.assign(BO.prototype, Be.ZP);
      const BS = BO;
    },
    2957: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        AO: () => BU,
        Dc: () => Bb,
        O4: () => Bo,
        U5: () => Bf,
        WZ: () => Bn,
        fy: () => BY,
        m9: () => BK,
        uA: () => BD,
        vk: () => BS,
        zz: () => BN,
      });
      var Br = Bx(6042);
      const BO = window.parseFloat;
      const BY = (Bk) => Bk.replace(/^\s+|\s+$/g, "");
      const BS = (Bk, BL, Bg) => {
        Bk = "" + Bk;
        Bg = Bg || "0";
        while (Bk.length < BL) {
          Bk = Bg + Bk;
        }
        return Bk;
      };
      const Bb = (Bk, BL) => {
        var Bg = Bk.attributes;
        for (let Ba = 0; Ba < Bg.length; Ba++) {
          if (Bg[Ba].name && Bg[Ba].name.toLowerCase() === BL.toLowerCase()) {
            return Bg[Ba].value.toString();
          }
        }
        return "";
      };
      const BU = (Bk) => {
        var BL;
        if (Bk && Bk.substr(0, 4) !== "rtmp") {
          if ((BL = /[(,]format=(m3u8|mpd)-/i.exec(Bk))) {
            return BL[1];
          } else if (
            (BL = Bk.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1")) !== Bk
          ) {
            return BL.toLowerCase();
          } else if (
            (Bk = Bk.split("?")[0].split("#")[0]).lastIndexOf(".") > -1
          ) {
            return Bk.substr(Bk.lastIndexOf(".") + 1, Bk.length).toLowerCase();
          } else {
            return "";
          }
        } else {
          return "";
        }
      };
      const Bn = (Bk) => {
        var BL = ((Bk / 60) | 0) % 60;
        var Bg = Bk % 60;
        return (
          BS(((Bk / 3600) | 0).toString(), 2) +
          ":" +
          BS(BL.toString(), 2) +
          ":" +
          BS(Bg.toFixed(3), 6)
        );
      };
      const BK = (Bk, BL) => {
        if (!Bk) {
          return 0;
        }
        if ((0, Br.qh)(Bk)) {
          return Bk;
        }
        var Bk = Bk.replace(",", ".");
        var Bg = Bk.slice(-1);
        var Ba = Bk.split(":");
        var Bd = Ba.length;
        let Bt = 0;
        if (Bg === "s") {
          Bt = BO(Bk);
        } else if (Bg === "m") {
          Bt = BO(Bk) * 60;
        } else if (Bg === "h") {
          Bt = BO(Bk) * 3600;
        } else if (Bd > 1) {
          let Bc = Bd - 1;
          if (Bd === 4) {
            if (BL) {
              Bt = BO(Ba[Bc]) / BL;
            }
            --Bc;
          }
          Bt = (Bt += BO(Ba[Bc])) + BO(Ba[Bc - 1]) * 60;
          if (Bd >= 3) {
            Bt += BO(Ba[Bc - 2]) * 3600;
          }
        } else {
          Bt = BO(Bk);
        }
        if ((0, Br.qh)(Bt)) {
          return Bt;
        } else {
          return 0;
        }
      };
      const Bf = (Bk, BL, Bg) => {
        if ((0, Br.HD)(Bk) && Bk.slice(-1) === "%") {
          const Ba = BO(Bk);
          if (BL && (0, Br.qh)(BL) && (0, Br.qh)(Ba)) {
            return (BL * Ba) / 100;
          } else {
            return null;
          }
        }
        return BK(Bk, Bg);
      };
      const Bo = (Bk, BL) => Bk.map((Bg) => BL + Bg);
      const BD = (Bk, BL) => Bk.map((Bg) => Bg + BL);
      const BN = (Bk) => Boolean(Bk) && (0, Br.HD)(Bk) && Bk.slice(-1) === "%";
    },
    5882: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        GU: () => Bt,
        ZP: () => BM,
        dO: () => BV,
      });
      var Br = Bx(8348);
      var BO = Bx(1643);
      var Be = Bx(328);
      var BY = Bx(5004);
      var BS = Bx(2799);
      const Bb = "ontouchstart" in window;
      const BU = "PointerEvent" in window && !Br.OS.android;
      const Bn = !BU && (!Bb || !Br.OS.mobile);
      const BK = "window";
      const Bf = "init";
      const Bo = "select";
      const BD = "keydown";
      const BN = Br.Features.passiveEvents;
      const Bk = !!BN && {
        passive: true,
      };
      let BL;
      let Bg;
      const Ba = (BX, BP, BF) => {
        const Bs = BX.el;
        const By = (() => {
          var { target: BZ, touches: BG, changedTouches: Bv } = BF;
          let BA;
          let BI = BF.pointerType;
          BI =
            BG || Bv
              ? ((BA = (BG != null && BG.length ? BG : Bv)[0]), BI || "touch")
              : ((BA = BF), BI || "mouse");
          var { pageX: BG, pageY: Bv } = BA;
          return {
            type: BP,
            pointerType: BI,
            pageX: BG,
            pageY: Bv,
            sourceEvent: BF,
            currentTarget: Bs,
            target: BZ,
          };
        })();
        BX.trigger(BP, By);
      };
      const Bd = (BX, BP, BF) => {
        var Bs = BX.el;
        var By = BF.target;
        BX.trigger(BP, {
          type: BP,
          sourceEvent: BF,
          currentTarget: Bs,
          target: By,
        });
      };
      const Bt = (BX) => {
        BX = BX.ownerDocument || BX;
        return BX.defaultView || BX.parentWindow || window;
      };
      const Bc = (BX, BP, BF, Bs, By = Bk) => {
        let BZ = BX.handlers[BP];
        let BG = BX.options[BP];
        if (!BZ) {
          BZ = BX.handlers[BP] = {};
          BG = BX.options[BP] = {};
        }
        if (BZ[BF]) {
          throw new Error(BP + (" " + BF + " already registered"));
        }
        BZ[BF] = Bs;
        BG[BF] = By;
        BX = BX.el;
        BP = BP === BK ? Bt(BX) : BX;
        if (BP) {
          BP.addEventListener(BF, Bs, By);
        }
      };
      const BR = (BX) => {
        var BP = BX.el;
        if (BX.pointerId !== null) {
          BP.releasePointerCapture(BX.pointerId);
          BX.pointerId = null;
        }
      };
      const BQ = (BX, BP) => {
        const { el: BF, handlers: Bs, options: By } = BX;
        const BZ = BP === BK ? Bt(BF) : BF;
        const BG = Bs[BP];
        const Bv = By[BP];
        if (BG) {
          Object.keys(BG).forEach((BA) => {
            var BI = Bv[BA];
            if (typeof BI == "boolean") {
              BZ.removeEventListener(BA, BG[BA], BI);
            } else {
              BZ.removeEventListener(BA, BG[BA]);
            }
          });
          Bs[BP] = null;
          By[BP] = null;
        }
      };
      const BV = (BX) =>
        (!!Boolean(BX.ctrlKey) && BX.type === "click") ||
        ("which" in BX ? BX.which === 3 : "button" in BX && BX.button === 2);
      const BE = (BX, BP) => {
        Bg = Bg || new BM(document).on("interaction");
        if (!BX.handlers[Bf] && !BX.handlers[Bo]) {
          const BF = BX.el;
          Bc(BX, BP, "blur", () => {
            (0, BS.IV)(BF, "jw-tab-focus");
            BX.clicking = false;
          });
          Bc(BX, BP, "focus", () => {
            if (Bg.event && Bg.event.type === BD) {
              (0, BS.cn)(BF, "jw-tab-focus");
            }
          });
        }
      };
      const BW = (BX, BP, BF, Bs) => {
        if (BU) {
          Bc(BX, BP, "pointerdown", BF, Bs);
        } else {
          if (Bn) {
            Bc(BX, BP, "mousedown", BF, Bs);
          }
          Bc(BX, BP, "touchstart", BF, Bs);
        }
      };
      const BT = (BX) => {
        if (!BX.handlers[Bo]) {
          const BP = BX.el;
          BE(BX, Bo);
          BW(BX, Bo, (BF) => {
            var Bs = BF.target;
            if (!BV(BF) && (!Boolean(BX.directSelect) || Bs === BP)) {
              if (BF.isPrimary && Bs.tagName === "BUTTON") {
                Bs.focus();
              }
              BX.lastStart = (0, BY.z)();
              BX.clicking = true;
            }
          });
          Bc(BX, Bo, "click", (BF) => {
            var Bs;
            var By;
            if (!BV(BF) && (!Boolean(BX.directSelect) || BF.target === BP)) {
              if (!((0, BY.z)() - BX.lastStart > 500) || BX.clicking !== true) {
                By = BF;
                if ((Bs = BX).enableDoubleClick) {
                  if ((0, BY.z)() - Bs.lastClick < 300) {
                    Ba(Bs, BO.P, By);
                    Bs.lastClick = 0;
                  } else {
                    Bs.lastClick = (0, BY.z)();
                  }
                }
                Ba(BX, BO.ot, BF);
              }
              BX.clicking = false;
            }
          });
        }
      };
      const Bl = (BX) =>
        BX.type.indexOf("touch") === 0
          ? (BX.originalEvent || BX).changedTouches[0]
          : BX;
      const BC = (BX) => {
        if (!BX.handlers[Bf]) {
          const { el: BP, passive: BF } = BX;
          const Bs = !!BN && {
            passive: BF,
          };
          const By = (BG) => {
            if (BX.dragged) {
              Ba(BX, BO.Wp, BG);
            } else {
              const { pageX: BA, pageY: BI } = Bl(BG);
              const Bu = BA - BX.startX;
              const m0 = BI - BX.startY;
              if (Bu * Bu + m0 * m0 > 36) {
                Ba(BX, BO.nv, BG);
                BX.dragged = true;
                Ba(BX, BO.Wp, BG);
              }
            }
            var Bv;
            if (!BF && BG.type === "touchmove") {
              if (BG.preventDefault) {
                BG.preventDefault();
              }
            }
          };
          const BZ = (BG) => {
            clearTimeout(BL);
            if (BX.el && (BR(BX), BQ(BX, BK), BX.dragged)) {
              BX.dragged = false;
              Ba(BX, BO.Sv, BG);
            }
          };
          BE(BX, Bf);
          BW(
            BX,
            Bf,
            (BG) => {
              (0, BS.IV)(BP, "jw-tab-focus");
              if (!BV(BG)) {
                var { target: Bv, type: BA } = BG;
                if (!BX.directSelect || Bv === BP) {
                  var { pageX: Bv, pageY: BI } = Bl(BG);
                  BX.dragged = false;
                  BX.startX = Bv;
                  BX.startY = BI;
                  BQ(BX, BK);
                  if (BA === "pointerdown" && BG.isPrimary) {
                    if (!BF) {
                      const Bu = BG.pointerId;
                      BX.pointerId = Bu;
                      BP.setPointerCapture(Bu);
                    }
                    Bc(BX, BK, "pointermove", By, Bs);
                    Bc(BX, BK, "pointercancel", BZ);
                    Bc(BX, BK, "pointerup", BZ);
                  } else if (BA === "mousedown") {
                    Bc(BX, BK, "mousemove", By, Bs);
                    Bc(BX, BK, "mouseup", BZ);
                  } else if (BA === "touchstart") {
                    Bc(BX, BK, "touchmove", By, Bs);
                    Bc(BX, BK, "touchcancel", BZ);
                    Bc(BX, BK, "touchend", BZ);
                  }
                }
              }
            },
            Bs
          );
        }
      };
      const Bj = {
        drag(BX) {
          BC(BX);
        },
        dragStart(BX) {
          BC(BX);
        },
        dragEnd(BX) {
          BC(BX);
        },
        click(BX) {
          BT(BX);
        },
        doubleClick(BX) {
          BX.enableDoubleClick = true;
          BT(BX);
        },
        longPress(BX) {
          const BP = "longPress";
          if (Br.OS.iOS) {
            const BF = () => {
              clearTimeout(BL);
            };
            Bc(BX, BP, "touchstart", (Bs) => {
              BF();
              BL = setTimeout(() => {
                Ba(BX, BP, Bs);
              }, 500);
            });
            Bc(BX, BP, "touchmove", BF);
            Bc(BX, BP, "touchcancel", BF);
            Bc(BX, BP, "touchend", BF);
          } else {
            BX.el.oncontextmenu = (Bs) => {
              Ba(BX, BP, Bs);
              return false;
            };
          }
        },
        focus(BX) {
          const BP = "focus";
          Bc(BX, BP, BP, (BF) => {
            Bd(BX, BP, BF);
          });
        },
        blur(BX) {
          const BP = "blur";
          Bc(BX, BP, BP, (BF) => {
            Bd(BX, BP, BF);
          });
        },
        over(BX) {
          if (BU || Bn) {
            Bc(BX, BO.B1, BU ? "pointerover" : "mouseover", (BP) => {
              if (BP.pointerType !== "touch") {
                Ba(BX, BO.B1, BP);
              }
            });
          }
        },
        out(BX) {
          if (BU) {
            const BP = BX.el;
            Bc(BX, BO.U3, "pointerout", (BF) => {
              var Bs;
              if (BF.pointerType !== "touch" && "clientX" in BF) {
                Bs = document.elementFromPoint(BF.clientX, BF.clientY);
                if (!BP.contains(Bs)) {
                  Ba(BX, BO.U3, BF);
                }
              }
            });
          } else if (Bn) {
            Bc(BX, BO.U3, "mouseout", (BF) => {
              Ba(BX, BO.U3, BF);
            });
          }
        },
        move(BX) {
          if (BU || Bn) {
            Bc(BX, BO.tP, BU ? "pointermove" : "mousemove", (BP) => {
              if (BP.pointerType !== "touch") {
                Ba(BX, BO.tP, BP);
              }
            });
          }
        },
        enter(BX) {
          Bc(BX, BO.K5, BD, (BP) => {
            if (BP.key === "Enter" || BP.keyCode === 13) {
              BP.stopPropagation();
              Bd(BX, BO.K5, BP);
            }
          });
        },
        keydown(BX) {
          Bc(
            BX,
            BD,
            BD,
            (BP) => {
              Bd(BX, BD, BP);
            },
            false
          );
        },
        gesture(BX) {
          const BP = "gesture";
          const BF = (Bs) => Ba(BX, BP, Bs);
          Bc(BX, BP, "click", BF);
          Bc(BX, BP, BD, BF);
        },
        interaction(BX) {
          var BP = "interaction";
          var BF = (Bs) => {
            BX.event = Bs;
          };
          Bc(BX, BP, "mousedown", BF, true);
          Bc(BX, BP, BD, BF, true);
        },
        tap() {},
        doubleTap() {},
      };
      const Bi = /\s+/;
      const Bz = (BX) => BX && !Bi.test(BX) && typeof BX != "object";
      class BM extends Be.ZP {
        constructor(BX, BP) {
          super();
          var BF = !(BP = BP || {}).preventScrolling;
          this.directSelect = Boolean(BP.directSelect);
          this.dragged = false;
          this.enableDoubleClick = false;
          this.el = BX;
          this.handlers = {};
          this.options = {};
          this.lastClick = 0;
          this.lastStart = 0;
          this.passive = BF;
          this.pointerId = null;
          this.startX = 0;
          this.startY = 0;
          this.event = null;
          this.clicking = false;
        }
        on(BX, BP, BF) {
          if (!!Bz(BX) && !this.handlers[BX]) {
            Bj[BX](this);
          }
          return super.on(BX, BP, BF);
        }
        off(BX, BP, BF) {
          if (Bz(BX)) {
            BQ(this, BX);
          } else if (!BX) {
            const Bs = this.handlers;
            Object.keys(Bs).forEach((By) => {
              BQ(this, By);
            });
          }
          return super.off(BX, BP, BF);
        }
        destroy() {
          if (this.el) {
            this.off();
            if (BU) {
              BR(this);
            }
            this.el = null;
          }
        }
      }
    },
    6042: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Cb: () => mq,
        HD: () => BZ,
        Kn: () => Bi,
        P2: () => mD,
        S6: () => Bz,
        UI: () => BA,
        U_: () => mN,
        Yj: () => m4,
        ZP: () => mc,
        _e: () => mU,
        a9: () => ma,
        ar: () => mb,
        ce: () => mk,
        cq: () => mr,
        dp: () => mm,
        e1: () => mx,
        e5: () => mn,
        ei: () => mg,
        hX: () => m8,
        hj: () => By,
        i2: () => Bv,
        jn: () => mh,
        l7: () => mL,
        mf: () => Bs,
        o8: () => mH,
        qh: () => mt,
        r3: () => mO,
        sE: () => m6,
        u4: () => m0,
        vM: () => mw,
        wB: () => mS,
        xV: () => mJ,
        yR: () => m3,
      });
      Be = Bx(5004);
      function Br(mR) {
        if (!Bi(mR)) {
          return [];
        }
        if (BT) {
          return BT(mR);
        }
        var mQ = [];
        for (const mV in mR) {
          if (Bj(mR, mV)) {
            mQ.push(mV);
          }
        }
        return mQ;
      }
      function BO(mR, mQ, ...mV) {
        if (Bl && mR.bind === Bl) {
          return Bl.apply(mR, [mQ].concat(mV));
        }
        if (Bs(mR)) {
          return mE;
        }
        throw new TypeError();
        function mE(...mW) {
          if (!(this instanceof mE)) {
            return mR.apply(mQ, mV.concat(mW));
          }
          Bu.prototype = mR.prototype;
          var mT = new Bu();
          Bu.prototype = null;
          var mW = mR.apply(mT, mV.concat(mW));
          if (Object(mW) === mW) {
            return mW;
          } else {
            return mT;
          }
        }
      }
      function BY(mR, mQ, mV) {
        mQ = mQ || m3;
        let mE = true;
        if (mR == null) {
          return mE;
        } else if (BQ && mR.every === BQ) {
          return mR.every(mQ, mV);
        } else {
          Bz(mR, function (mW, mT, ml) {
            if (!(mE = mE && mQ.call(mV, mW, mT, ml))) {
              return Bf;
            }
          });
          return Boolean(mE);
        }
      }
      function BS(mR, mQ) {
        let mV;
        return function (...mE) {
          if (--mR > 0) {
            mV = mQ.apply(this, mE);
          }
          if (mR <= 1) {
            mQ = null;
          }
          return mV;
        };
      }
      function Bb(mR) {
        if (mR == null) {
          return m3;
        } else if (Bs(mR)) {
          return mR;
        } else {
          return mq(mR);
        }
      }
      function BU(mR) {
        return function (mQ, mV, mE) {
          const mW = {};
          mV = Bb(mV);
          Bz(mQ, function (mT, ml) {
            ml = mV.call(mE, mT, ml, mQ);
            mR(mW, ml, mT);
          });
          return mW;
        };
      }
      function Bn(mR, ...mQ) {
        return function (...mV) {
          let mE = 0;
          var mW = mQ.slice();
          for (let mT = 0, ml = mW.length; mT < ml; mT++) {
            if (Bj(mW[mT], "partial")) {
              mW[mT] = mV[mE++];
            }
          }
          while (mE < arguments.length) {
            mW.push(mV[mE++]);
          }
          return mR.apply(this, mW);
        };
      }
      function BK(mR, mQ, ...mV) {
        return setTimeout(function () {
          return mR.apply(null, mV);
        }, mQ);
      }
      const Bf = {};
      const Bo = Array.prototype;
      const BD = Object.prototype;
      const BN = Function.prototype;
      const Bk = Bo.slice;
      const BL = Bo.concat;
      const Bg = BD.toString;
      const Ba = BD.hasOwnProperty;
      const Bd = Bo.map;
      const Bt = Bo.reduce;
      const Bc = Bo.forEach;
      const BR = Bo.filter;
      const BQ = Bo.every;
      const BV = Bo.some;
      const BE = Bo.indexOf;
      const BW = Array.isArray;
      const BT = Object.keys;
      const Bl = BN.bind;
      const BC = window.isFinite;
      const Bj = function (mR, mQ) {
        return Ba.call(mR, mQ);
      };
      const Bi = function (mR) {
        return mR === Object(mR);
      };
      const Bz = function (mR, mQ, mV) {
        let mE;
        let mW;
        if (mR != null) {
          if (Bc && mR.forEach === Bc) {
            mR.forEach(mQ, mV);
          } else if (mR.length === Number(mR.length)) {
            mE = 0;
            mW = mR.length;
            for (; mE < mW; mE++) {
              if (mQ.call(mV, mR[mE], mE, mR) === Bf) {
                return;
              }
            }
          } else {
            var mT = Br(mR);
            mE = 0;
            mW = mT.length;
            for (; mE < mW; mE++) {
              if (mQ.call(mV, mR[mT[mE]], mT[mE], mR) === Bf) {
                return;
              }
            }
          }
        }
        return mR;
      };
      const BM = Bz;
      const BX = [];
      Bz(["Function", "String", "Number", "Date", "RegExp"], function (mR) {
        BX[mR] = function (mQ) {
          return Bg.call(mQ) == "[object " + mR + "]";
        };
      });
      const BP = BX.Date;
      const BF = BX.RegExp;
      const Bs = BX.Function;
      const By = BX.Number;
      const BZ = BX.String;
      const BG =
        BW ||
        function (mR) {
          return Bg.call(mR) == "[object Array]";
        };
      const Bv = function (mR) {
        return By(mR) && mR != Number(mR);
      };
      const BA = function (mR, mQ, mV) {
        const mE = [];
        if (mR == null) {
          return mE;
        } else if (Bd && mR.map === Bd) {
          return mR.map(mQ, mV);
        } else {
          Bz(mR, function (mW, mT, ml) {
            mE.push(mQ.call(mV, mW, mT, ml));
          });
          return mE;
        }
      };
      const BI = BA;
      const Bu = function () {};
      const m0 = function (mR, mQ, mV, mE) {
        let mW = arguments.length > 2;
        if (mR == null) {
          mR = [];
        }
        if (Bt && mR.reduce === Bt) {
          if (mE) {
            mQ = BO(mQ, mE);
          }
          if (mW) {
            return mR.reduce(mQ, mV);
          } else {
            return mR.reduce(mQ);
          }
        }
        Bz(mR, function (mT, ml, mC) {
          if (mW) {
            mV = mQ.call(mE, mV, mT, ml, mC);
          } else {
            mV = mT;
            mW = true;
          }
        });
        if (mW) {
          return mV;
        }
        throw new TypeError("Reduce of empty array with no initial value");
      };
      const m1 = m0;
      const m2 = m0;
      const m3 = function (mR) {
        return mR;
      };
      const m4 = function (mR, mQ, mV) {
        mQ = mQ || m3;
        let mE = false;
        if (mR == null) {
          return mE;
        } else if (BV && mR.some === BV) {
          return mR.some(mQ, mV);
        } else {
          Bz(mR, function (mW, mT, ml) {
            if ((mE = mE || mQ.call(mV, mW, mT, ml))) {
              return Bf;
            }
          });
          return Boolean(mE);
        }
      };
      const m5 = m4;
      const m6 = function (mR, mQ, mV) {
        let mE;
        m4(mR, function (mW, mT, ml) {
          if (mQ.call(mV, mW, mT, ml)) {
            mE = mW;
            return true;
          }
        });
        return mE;
      };
      const m7 = m6;
      const m8 = function (mR, mQ, mV) {
        const mE = [];
        if (mR == null) {
          return mE;
        } else if (BR && mR.filter === BR) {
          return mR.filter(mQ, mV);
        } else {
          Bz(mR, function (mW, mT, ml) {
            if (mQ.call(mV, mW, mT, ml)) {
              mE.push(mW);
            }
          });
          return mE;
        }
      };
      const m9 = m8;
      const mB = BY;
      const mm = function (mR) {
        if (mR == null) {
          return 0;
        } else {
          return (mR.length === Number(mR.length) ? mR : Br(mR)).length;
        }
      };
      BX.Function = function (mR) {
        return typeof mR == "function";
      };
      const mJ = function (mR) {
        return BC(mR) && !Bv(parseFloat(mR));
      };
      const mh = function (mR) {
        return mR === true || mR === false || Bg.call(mR) == "[object Boolean]";
      };
      const mH = function (mR) {
        return mR === undefined;
      };
      const mq = function (mR) {
        return function (mQ) {
          return mQ[mR];
        };
      };
      const mw = BU(function (mR, mQ, mV) {
        if (Bj(mR, mQ)) {
          mR[mQ].push(mV);
        } else {
          mR[mQ] = [mV];
        }
      });
      const mp = BU(function (mR, mQ, mV) {
        mR[mQ] = mV;
      });
      const mx = function (mR, mQ, mV, mE) {
        var mW = (mV = Bb(mV)).call(mE, mQ);
        let mT = 0;
        let ml = mR.length;
        while (mT < ml) {
          const mC = (mT + ml) >>> 1;
          if (mV.call(mE, mR[mC]) < mW) {
            mT = 1 + mC;
          } else {
            ml = mC;
          }
        }
        return mT;
      };
      const mr = function (mR, mQ, mV) {
        if (mR != null) {
          let mW = 0;
          var mE = mR.length;
          if (mV) {
            if (typeof mV != "number") {
              if (mR[(mW = mx(mR, mQ))] === mQ) {
                return mW;
              } else {
                return -1;
              }
            }
            mW = mV < 0 ? Math.max(0, mE + mV) : mV;
          }
          if (BE && mR.indexOf === BE) {
            return mR.indexOf(mQ, mV);
          }
          for (; mW < mE; mW++) {
            if (mR[mW] === mQ) {
              return mW;
            }
          }
        }
        return -1;
      };
      const mO = function (mR, mQ) {
        return (
          mR != null &&
          (mR.length !== Number(mR.length) &&
            (mR = (function (mV) {
              var mE = Br(mV);
              var mW = Br.length;
              var mT = Array(mW);
              for (let ml = 0; ml < mW; ml++) {
                mT[ml] = mV[mE[ml]];
              }
              return mT;
            })(mR)),
          mr(mR, mQ) >= 0)
        );
      };
      const mY = mO;
      const mS = function (mR) {
        return function (mQ) {
          if (mQ !== mR) {
            for (const mV in mR) {
              if (mR[mV] !== mQ[mV]) {
                return false;
              }
            }
          }
          return true;
        };
      };
      const mb = function (mR, mQ) {
        return m8(mR, mS(mQ));
      };
      const mU = function (mR, mQ) {
        return m6(mR, mS(mQ));
      };
      const mn = function (mR, ...mQ) {
        const mV = BL.apply(Bo, mQ);
        return m8(mR, function (mE) {
          return !mO(mV, mE);
        });
      };
      const mK = Bn(BS, 2);
      const mf = Bn(
        BK,
        {
          partial: Bn,
        },
        1
      );
      const mo = Be.z;
      const mD = function (mR, mQ, mV) {
        let mE;
        let mW;
        let mT;
        let ml = null;
        let mC = 0;
        mV = mV || {};
        function mj() {
          mC = mV.leading === false ? 0 : mo();
          ml = null;
          mT = mR.apply(mE, mW);
          mE = mW = null;
        }
        return function (...mi) {
          var mz = mo();
          if (!mC && mV.leading === false) {
            mC = mz;
          }
          var mM = mQ - (mz - mC);
          mE = this;
          mW = mi;
          if (mM <= 0) {
            clearTimeout(ml);
            ml = null;
            mC = mz;
            mT = mR.apply(mE, mW);
            mE = mW = null;
          } else if (!ml && mV.trailing !== false) {
            ml = setTimeout(mj, mM);
          }
          return mT;
        };
      };
      const mN = function (mR) {
        var mQ = {};
        var mV = Br(mR);
        for (let mE = 0, mW = mV.length; mE < mW; mE++) {
          mQ[mR[mV[mE]]] = mV[mE];
        }
        return mQ;
      };
      const mk = function (mR, ...mQ) {
        Bz(mQ, function (mV) {
          if (mV) {
            for (const mE in mV) {
              if (mR[mE] === undefined) {
                mR[mE] = mV[mE];
              }
            }
          }
        });
        return mR;
      };
      const mL =
        Object.assign ||
        function (mR, ...mQ) {
          Bz(mQ, function (mV) {
            if (mV) {
              for (const mE in mV) {
                if (
                  (function (mW, mT) {
                    if (mW == null) {
                      throw new TypeError(
                        "Cannot convert undefined or null to object"
                      );
                    }
                    return Object.prototype.hasOwnProperty.call(Object(mW), mT);
                  })(mV, mE)
                ) {
                  mR[mE] = mV[mE];
                }
              }
            }
          });
          return mR;
        };
      const mg = function (mR, ...mQ) {
        const mV = {};
        mQ = [].concat(...mQ);
        Bz(mQ, function (mE) {
          if (mE in mR) {
            mV[mE] = mR[mE];
          }
        });
        return mV;
      };
      const ma = function (mR) {
        return function () {
          return mR;
        };
      };
      const mt = (mR) => By(mR) && !Bv(mR);
      const mc = {
        after: function (mR, mQ) {
          return function (...mV) {
            if (--mR < 1) {
              return mQ.apply(this, mV);
            }
          };
        },
        all: BY,
        any: m4,
        before: BS,
        bind: BO,
        clone: function (mR) {
          if (Bi(mR)) {
            if (BG(mR)) {
              return mR.slice();
            } else {
              return mL({}, mR);
            }
          } else {
            return mR;
          }
        },
        collect: BI,
        compact: function (mR) {
          return m8(mR, m3);
        },
        constant: ma,
        contains: mO,
        debounce: (mR, mQ = 100) => {
          let mV;
          return function (...mE) {
            clearTimeout(mV);
            mV = setTimeout(() => {
              mR.apply(this, mE);
            }, mQ);
          };
        },
        defaults: mk,
        defer: mf,
        delay: BK,
        detect: m7,
        difference: mn,
        each: Bz,
        every: mB,
        extend: mL,
        filter: m8,
        find: m6,
        findWhere: mU,
        foldl: m1,
        forEach: BM,
        groupBy: mw,
        has: Bj,
        identity: m3,
        include: mY,
        indexBy: mp,
        indexOf: mr,
        inject: m2,
        invert: mN,
        isArray: BG,
        isBoolean: mh,
        isDate: BP,
        isFinite: mJ,
        isFunction: Bs,
        isNaN: Bv,
        isNull: function (mR) {
          return mR === null;
        },
        isNumber: By,
        isObject: Bi,
        isRegExp: BF,
        isString: BZ,
        isUndefined: mH,
        isValidNumber: mt,
        keys: Br,
        last: function (mR, mQ, mV) {
          if (mR != null) {
            if (mQ == null || mV) {
              return mR[mR.length - 1];
            } else {
              return Bk.call(mR, Math.max(mR.length - mQ, 0));
            }
          }
        },
        map: BA,
        matches: mS,
        max: function (mR, mQ, mV) {
          if (!mQ && BG(mR) && mR[0] === Number(mR[0]) && mR.length < 65535) {
            return Math.max(...mR);
          }
          let mE = -Infinity;
          let mW = -Infinity;
          Bz(mR, function (mT, ml, mC) {
            ml = mQ ? mQ.call(mV, mT, ml, mC) : mT;
            if (ml > mW) {
              mE = mT;
              mW = ml;
            }
          });
          return mE;
        },
        memoize: function (mR, mQ) {
          const mV = {};
          mQ = mQ || m3;
          return function (...mE) {
            var mW = mQ.apply(this, mE);
            if (Bj(mV, mW)) {
              return mV[mW];
            } else {
              return (mV[mW] = mR.apply(this, mE));
            }
          };
        },
        now: mo,
        omit: function (mR, ...mQ) {
          var mV = {};
          for (const mE in mR) {
            if (!mO(mQ, mE)) {
              mV[mE] = mR[mE];
            }
          }
          return mV;
        },
        once: mK,
        partial: Bn,
        pick: mg,
        pluck: function (mR, mQ) {
          return BA(mR, mq(mQ));
        },
        property: mq,
        propertyOf: function (mR) {
          if (mR == null) {
            return function () {};
          } else {
            return function (mQ) {
              return mR[mQ];
            };
          }
        },
        reduce: m0,
        reject: function (mR, mQ, mV) {
          return m8(
            mR,
            function (mE, mW, mT) {
              return !mQ.call(mV, mE, mW, mT);
            },
            mV
          );
        },
        result: function (mR, mQ) {
          if (mR != null) {
            mQ = mR[mQ];
            if (Bs(mQ)) {
              return mQ.call(mR);
            } else {
              return mQ;
            }
          }
        },
        select: m9,
        size: mm,
        some: m5,
        sortedIndex: mx,
        throttle: mD,
        where: mb,
        without: function (mR, ...mQ) {
          return mn(mR, mQ);
        },
      };
    },
    5950: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        O9: () => BS,
        _N: () => BY,
        kd: () => Bn,
        ke: () => Bb,
        vl: () => BO,
      });
      const Br = /^[^:/?#]+:?\/\/[^/?#]+/;
      const BO = function (BK) {
        if (!BK) {
          return {};
        }
        var Bf;
        var Bo = ((BN) => {
          if (BN) {
            return new URL(BN, window.location);
          }
        })(BK);
        var BD = {};
        for (const BN of Bo.searchParams.keys()) {
          if (!BD[BN]) {
            Bf = Bo.searchParams.getAll(BN);
            BD[BN] = Bf.length === 1 ? Bf[0] : Bf;
          }
        }
        return BD;
      };
      const BY = function (BK) {
        if (
          !BK ||
          ((BK = new URLSearchParams(BK).get("jw_start") || -1), isNaN(BK)) ||
          BK < -1
        ) {
          return -1;
        } else {
          return Number(BK);
        }
      };
      const BS = function (BK, Bf = "{seek_to_second_number}") {
        if (BK) {
          BK = new URL(BK);
          BK.searchParams.set("jw_start", "");
          let Bo = BK.toString();
          return (Bo = Bo.replace(/jw_start=?/i, "jw_start=" + Bf));
        }
      };
      const Bb = (BK, Bf) => {
        if (BK) {
          return new URLSearchParams(BK).has(Bf);
        }
      };
      const BU = (BK) => !!BK && BK.match(Br) !== null;
      const Bn = (BK, Bf) => {
        Bf = Bf || document.location.href;
        if (BK && BU(Bf)) {
          if (BU(BK)) {
            return BK;
          } else {
            return new URL(BK, Bf).toString();
          }
        } else {
          return "";
        }
      };
    },
    7034: (Bp, Be, Bx) => {
      "use strict";

      Bx.r(Be);
      Bx.d(Be, {
        exists: () => BO,
        isDeepKeyCompliant: () => BK,
        isFileProtocol: () => BS,
        isHTTPS: () => BY,
        isRtmp: () => Bb,
        isYouTube: () => BU,
        typeOf: () => Bn,
      });
      const Br = window.location.protocol;
      const BO = (Bf) => {
        switch (typeof Bf) {
          case "string":
            return Bf.length > 0;
          case "object":
            return Bf !== null;
          case "undefined":
            return false;
          default:
            return true;
        }
      };
      const BY = () => Br === "https:";
      const BS = () => Br === "file:";
      const Bb = (Bf, Bo) => Bf.indexOf("rtmp:") === 0 || Bo === "rtmp";
      const BU = (Bf, Bo) =>
        Bo === "youtube" ||
        /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(Bf);
      const Bn = (Bf) => {
        var Bo;
        if (Bf === null) {
          return "null";
        } else if ((Bo = typeof Bf) == "object" && Array.isArray(Bf)) {
          return "array";
        } else {
          return Bo;
        }
      };
      const BK = (Bf, Bo, BD) => {
        var BN = Object.keys(Bf);
        return (
          Object.keys(Bo).length >= BN.length &&
          BN.every((Bk) => {
            var BL = Bf[Bk];
            var Bg = Bo[Bk];
            if (BL && typeof BL == "object") {
              return !!Bg && typeof Bg == "object" && BK(BL, Bg, BD);
            } else {
              return BD(Bk, Bf);
            }
          })
        );
      };
    },
    9025: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Br,
      });
      const Br = document.createElement("video");
    },
    6601: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        i: () => Br,
      });
      const Br =
        "8.33.2+commercial_master.561.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.4.10.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.7.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v4.0.3.jwplayer-analytics-kraken@v0.0.4.plugin-gapro@mono";
    },
    4225: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () =>
          function (BS, Bb) {
            var { message: Bb, code: BU } = Bb;
            var Bb = Br(
              BS.get("id"),
              Bb,
              BS.get("localization").errors.errorCode,
              BU.toString()
            );
            var BU = BS.get("width");
            var BS = BS.get("height");
            var Bb = (0, BO.az)(Bb);
            (0, BY.oB)(Bb, {
              width: BU.toString().indexOf("%") > 0 ? BU : BU + "px",
              height: BS.toString().indexOf("%") > 0 ? BS : BS + "px",
            });
            return Bb;
          },
      });
      const Br = (BS, Bb, BU, Bn) =>
        '<div id="' +
        BS +
        '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' +
        BS +
        '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' +
        BS +
        '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' +
        BS +
        '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>' +
        (Bb || "") +
        '<span class="jw-break jw-reset"></span>' +
        (Bn ? ("(" + BU + ": " + Bn + ")").replace(/\s+/g, "&nbsp;") : "") +
        "</div></div></div></div>";
      var BO = Bx(2799);
      var BY = Bx(974);
    },
    9926: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Bn,
      });
      var Br = Bx(1776);
      var BO = Bx(2799);
      var BY = Bx(974);
      const BS = [];
      let Bb = -1;
      const BU = () => {
        (0, Br.W)(Bb);
        Bb = (0, Br.U)(() => {
          BS.forEach((BK) => {
            BK.view.updateBounds();
            var Bf = BK.view.model.get("containerWidth");
            BK.resized = BK.width !== Bf;
            BK.width = Bf;
          });
          BS.forEach((BK) => {
            BK.contractElement.scrollLeft = BK.width * 2;
          });
          BS.forEach((BK) => {
            (0, BY.oB)(BK.expandChild, {
              width: BK.width + 1,
            });
            if (BK.resized && BK.view.model.get("visibility")) {
              BK.view.updateStyles();
            }
          });
          BS.forEach((BK) => {
            BK.expandElement.scrollLeft = BK.width + 1;
          });
          BS.forEach((BK) => {
            if (BK.resized) {
              BK.view.checkResized();
            }
          });
        });
      };
      class Bn {
        constructor(BK, Bf, Bo) {
          var BD = {
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
          };
          var BN = {
            width: "100%",
            height: "100%",
          };
          var Bk = (0, BO.az)(
            '<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'
          );
          var BL = Bk.firstChild;
          var Bg = BL.firstChild;
          var Ba = BL.nextSibling;
          (0, BY.oB)(
            [BL, Ba],
            Object.assign(
              {
                overflow: "auto",
              },
              BD,
              BN
            )
          );
          (0, BY.oB)(Bk, Object.assign({}, BD, BN));
          this.expandElement = BL;
          this.expandChild = Bg;
          this.contractElement = Ba;
          this.hiddenElement = Bk;
          this.element = BK;
          this.view = Bf;
          this.model = Bo;
          this.width = 0;
          this.resized = false;
          if (BK.firstChild) {
            BK.insertBefore(Bk, BK.firstChild);
          } else {
            BK.appendChild(Bk);
          }
          BK.addEventListener("scroll", BU, true);
          BS.push(this);
          BU();
        }
        destroy() {
          var BK;
          if (this.view) {
            if ((BK = BS.indexOf(this)) !== -1) {
              BS.splice(BK, 1);
            }
            this.element.removeEventListener("scroll", BU, true);
            this.element.removeChild(this.hiddenElement);
            this.view = this.model = null;
          }
        }
      }
    },
    4671: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => BN,
      });
      var Br = Bx(6875);
      const BO = [];
      const BY = [];
      const BS = [];
      const Bb = {};
      let BU;
      let Bn = false;
      const BK = (Bk, BL) => {
        for (let Ba = BL.length; Ba--; ) {
          var Bg = BL[Ba];
          if (Bk.target === Bg.getContainer()) {
            Bg.setIntersection(Bk);
            break;
          }
        }
      };
      const Bf = () => {
        BO.forEach((Bk) => {
          Bk.model.set("activeTab", (0, Br.Z)());
        });
      };
      const Bo = (Bk, BL) => {
        Bk = BL.indexOf(Bk);
        if (Bk !== -1) {
          BL.splice(Bk, 1);
        }
      };
      const BD = (Bk) => {
        BS.forEach((BL) => {
          BL(Bk);
        });
      };
      document.addEventListener("visibilitychange", Bf);
      document.addEventListener("webkitvisibilitychange", Bf);
      const BN = {
        add(Bk) {
          BO.push(Bk);
        },
        remove(Bk) {
          Bo(Bk, BO);
          document.removeEventListener("visibilitychange", Bf);
          document.removeEventListener("webkitvisibilitychange", Bf);
          window.removeEventListener("scroll", BD);
        },
        addScrollHandler(Bk) {
          if (!Bn) {
            Bn = true;
            window.addEventListener("scroll", BD);
          }
          BS.push(Bk);
        },
        removeScrollHandler(Bk) {
          Bk = BS.indexOf(Bk);
          if (Bk !== -1) {
            BS.splice(Bk, 1);
          }
        },
        addWidget(Bk) {
          BY.push(Bk);
        },
        removeWidget(Bk) {
          Bo(Bk, BY);
        },
        size: () => BO.length,
        observe(Bk) {
          var BL;
          BL = window.IntersectionObserver;
          BU =
            BU ||
            new BL(
              (Bg) => {
                if (Bg != null && Bg.length) {
                  for (let Bd = Bg.length; Bd--; ) {
                    var Ba = Bg[Bd];
                    BK(Ba, BO);
                    BK(Ba, BY);
                  }
                }
              },
              {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
              }
            );
          if (!Bb[Bk.id]) {
            Bb[Bk.id] = true;
            BU.observe(Bk);
          }
        },
        unobserve(Bk) {
          if (BU && Bb[Bk.id]) {
            delete Bb[Bk.id];
            BU.unobserve(Bk);
          }
        },
      };
    },
    2445: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        ZP: () => Bd,
        qG: () => Ba,
      });
      var Br = Bx(5083);
      var BO = Bx(1569);
      var BY = Bx(6042);
      var BS = Bx(7034);
      var Bb = Bx(6577);
      var BU = Bx(6599);
      var Bn = Bx(386);
      const BK = "__CONTEXTUAL__";
      const Bf = (Bt, Bc) => {
        Bt = Bt.querySelector(Bc);
        if (Bt) {
          return Bt.getAttribute("content");
        }
      };
      var Be = Bx(4737);
      var Bo = Bx.n(Be);
      var BD = Bx(67);
      var BN = Bx(3487);
      const Bk = (Bt) =>
        typeof Bt == "string" &&
        /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(Bt);
      const BL = (Bt) => "https:" + Bt;
      const Bg = (Bt, Bc, BR) => {
        if (Bc) {
          delete (Bt[Bc.client || (0, BN.sb)(BR)] = Bc).client;
        }
      };
      const Ba = (Bt) => {
        const Bc = Object.assign({}, Bt.plugins);
        const BR = (0, Bn.Z)(Bt.edition);
        if (BR("ads")) {
          const BQ = Object.assign({}, Bt.advertising);
          const BV = BQ.client;
          if (BV) {
            delete (Bc[(0, BN.sb)(BV) || BV] = BQ).client;
          }
          if (BQ.bids) {
            Bg(Bc, BQ.bids, "bidding");
          }
        }
        if (BR("jwpsrv")) {
          let BE = Bt.analytics;
          if (BE !== Object(BE)) {
            BE = {};
          }
          Bg(Bc, BE, "jwpsrv");
        }
        Bg(Bc, Bt.ga, "gapro");
        Bg(Bc, Bt.interactive, "interactive");
        Bg(Bc, Bt.keepWatching, "keepWatching");
        return Bc;
      };
      const Bd = function (Bt, Bc) {
        let BR = (0, Br.ZP)(Bt, Bc);
        var Bt = BR.key || Bb.default.key;
        var Bc = new BU.ZP(Bt);
        var BQ = Bc.edition();
        (BR =
          Bc.edition() === "free"
            ? Object.assign(
                {
                  skin: {
                    active: "#ff0046",
                    timeslider: {
                      progress: "none",
                    },
                  },
                  logo: {
                    position: "control-bar",
                    file: Bo(),
                  },
                },
                Br.ke,
                (0, BY.ei)(BR, [
                  "analytics",
                  "aspectratio",
                  "base",
                  "file",
                  "height",
                  "playlist",
                  "sources",
                  "timeSlider",
                  "width",
                ])
              )
            : BR).key = Bt;
        BR.edition = BQ;
        BR.error = Bc.error();
        BR.generateSEOMetadata = BR.generateSEOMetadata || false;
        if (BQ === "unlimited") {
          const BV = (0, BO.getScriptPath)("jwplayer.js");
          if (!BV) {
            throw new Error(
              "Error setting up player: Could not locate jwplayer.js script tag"
            );
          }
          Bx.p = BV;
        }
        BR.related = ((BE) => {
          var BW = (0, Bn.Z)(BE.edition);
          var BT = BE.related;
          var BW = !BW("discovery") || BT !== Object(BT);
          var Bl = !BT || BT.displayMode !== "none";
          var BC = BT || {};
          let Bj = BC.oncomplete === undefined ? "none" : BC.oncomplete;
          let Bi = BC.autoplaytimer;
          if (Bj === false || BE.repeat) {
            Bj = "hide";
          } else if (Bj === "none") {
            Bi = 0;
          }
          BC = (Bj === "autoplay" && Bi <= 0) || Bj === "none";
          return Object.assign({}, BT, {
            disableRelated: BW,
            showButton: Bl,
            oncomplete: Bj,
            autoplaytimer: Bi,
            shouldAutoAdvance: BC,
          });
        })(BR);
        BR.ab &&= ((BE) => {
          let BW = BE.ab;
          if (BW.clone) {
            BW = BW.clone();
          }
          Object.keys(BW.tests).forEach((BT) => {
            BW.tests[BT].forEach((Bl) => {
              if (Bl.addConfig) {
                Bl.addConfig(BE, Bl.selection);
              }
            });
          });
          return BW;
        })(BR);
        BR.plugins = Ba(BR);
        Bt = BR.playlist;
        if ((0, BY.HD)(Bt) && Bt.indexOf(BK) > -1) {
          BR.playlist = ((BE, BW) => {
            var BT =
              BE == null ||
              BE.querySelector == null ||
              (BT = BE.querySelector("title")) == null
                ? undefined
                : BT.textContent;
            var Bl = Bf(BE, 'meta[property="og:title"]');
            let BC = encodeURIComponent(Bl || BT || "");
            Bl =
              Bf(BE, 'meta[property="og:description"]') ||
              Bf(BE, 'meta[name="description"]');
            if (Bl) {
              BC += "&page_description=" + encodeURIComponent(Bl);
            }
            return BW.replace(BK, BC);
          })(document, BR.playlist);
          BR.contextual = true;
        }
        if ((0, BS.isFileProtocol)()) {
          const { playlist: BE, related: BW } = BR;
          if (Bk(BE)) {
            BR.playlist = BL(BE);
          }
          if (BW && Bk(BW.file)) {
            BW.file = BL(BW.file);
          }
        }
        if (
          BR.__abSendDomainToFeeds &&
          ((Bc = BR.playlist), /\.jwplatform.com|\.jwplayer.com/.test(Bc))
        ) {
          BR.playlist =
            (BQ = BR.playlist) +
            ((BQ.indexOf("?") !== -1 ? "&" : "?") +
              "page_domain=" +
              encodeURIComponent((0, BD.X)()));
        }
        return BR;
      };
    },
    6577: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        default: () => m2,
      });
      var Be = Bx(1096);
      var Be = Bx.n(Be);
      window.Promise ||= Be();
      var Be = Bx(1569);
      var Br = Bx(6391);
      var BO = Bx(2963);
      var BY = Bx(670);
      var BO = {
        availableProviders: BO.B,
        registerProvider: BY.Z,
      };
      var BS = Bx(1241);
      BO.registerPlugin = function (m3, m4, m5) {
        if (m3 !== "jwpsrv") {
          (0, BS.fo)(m3, m4, m5);
        }
      };
      const Bb = BO;
      var BU = Bx(8675);
      var Bn = Bx(6601);
      var BK = Bx(4742);
      var Bf = Bx(8348);
      var Bo = Bx(623);
      var BD = Bx(1643);
      var BN = Bx(7411);
      var Bk = Bx(328);
      var BL = Bx(3487);
      const Bg = [["vastxml", "adtag", "schedules"]];
      const Ba = {
        googima: Bg,
        vast: Bg,
      };
      const Bd = (m3, m4) => {
        var m5 = m3.getPlugin(m4);
        var m6 = Object.keys(Ba);
        if (m6.indexOf(m4) === -1) {
          throw new Error(
            "destroyDynamicPlugin must be called with plugins with one of the following plugins: " +
              m6.toString()
          );
        }
        if (m5) {
          if (m5.resize) {
            m3.off("resize", m5.resizeHandler);
          }
          delete m3.plugins[m4];
          if (m5.destroy) {
            try {
              m5.destroy();
            } catch (m7) {}
          }
          m6 = m5.div;
          if (m6 != null && m6.parentElement) {
            m6.parentElement.removeChild(m6);
          }
          m3.trigger("pluginDestroyed", {
            type: "pluginDestroyed",
            name: m4,
          });
        }
      };
      const Bt = (m3, m4, m5, m6) => {
        var m7 = (0, BL.Nq)(m4);
        var m8 = Object.keys(Ba);
        var m6 =
          (m6 = m6)[(m9 = m4)] ||
          m6[(0, BL.sb)(m9)] ||
          m6[(0, BL.Nq)(m9)] ||
          {};
        if (m8.indexOf(m7) === -1) {
          throw new Error(
            "setupDynamicPlugin must be called with plugins with one of the following plugins: " +
              m8.toString()
          );
        }
        Bd(m3, m7);
        var m9 = ((mB, mm, mJ) => {
          const mh = Object.assign({}, mB);
          const mH = Object.assign({}, mm);
          const mq = Object.keys(mH).filter((mw) => mw === null);
          mq.forEach((mw) => delete mh[mw]);
          mq.forEach((mw) => delete mH[mw]);
          mJ.forEach((mw) => {
            if (mw.some((mp) => mH[mp])) {
              mw.forEach((mp) => delete mh[mp]);
            }
          });
          return Object.assign({}, mh, mH);
        })(m6, m5, Ba[m7]);
        return (0, BU.Ve)(m4, m9, m3);
      };
      var Bc = Bx(4429);
      var BR = Bx(6042);
      let BQ = 0;
      function BV(m3, m4) {
        (m4 = new Bo.ZP(m4)).on(BD.Rc, (m5) => {
          m3._qoe.tick("ready");
          m5.setupTime = m3._qoe.between("setup", "ready");
        });
        m4.on("all", (m5, m6) => {
          m3.trigger(m5, m6);
        });
        return m4;
      }
      function BE(m3, m4) {
        const m5 = m3.plugins;
        const m6 = Object.keys(m5).map((m7) => {
          var m8 = m5[m7];
          delete m5[m7];
          return m8;
        });
        if (m4.get("setupConfig")) {
          m3.trigger("remove");
        }
        m3.off();
        m4.playerDestroy();
        m6.forEach((m7) => {
          if (m7.reset) {
            try {
              m7.reset();
            } catch (m8) {}
          } else if (m7.destroy) {
            try {
              m7.destroy();
            } catch (m9) {}
          }
        });
        m4.getContainer().removeAttribute("data-jwplayer-id");
      }
      function BW(m3) {
        const m4 = ++BQ;
        const m5 = m3.id || "player-" + m4;
        const m6 = new BN.Z();
        const m7 = {};
        let m8 = BV(this, m3);
        m6.tick("init");
        m3.setAttribute("data-jwplayer-id", m5);
        Object.defineProperties(this, {
          id: {
            enumerable: true,
            get: () => m5,
          },
          uniqueId: {
            enumerable: true,
            get: () => m4,
          },
          plugins: {
            enumerable: true,
            get: () => m7,
          },
          _qoe: {
            enumerable: true,
            get: () => m6,
          },
          version: {
            enumerable: true,
            get: () => Bn.i,
          },
          Events: {
            enumerable: true,
            get: () => Bk.ZP,
          },
          utils: {
            enumerable: true,
            get: () => Bc.Z,
          },
          _: {
            enumerable: true,
            get: () => BR.ZP,
          },
        });
        Object.assign(this, {
          _events: {},
          setup(m9) {
            m6.clear("ready");
            m6.tick("setup");
            if (m8) {
              BE(this, m8);
            }
            (m8 = BV(this, m3)).init(m9, this);
            return this.on(m9.events, null, this);
          },
          remove() {
            if (this.getPip()) {
              this.setPip(false);
            }
            var m9 = this;
            for (let mB = Br.Z.length; mB--; ) {
              if (Br.Z[mB].uniqueId === m9.uniqueId) {
                Br.Z.splice(mB, 1);
                break;
              }
            }
            if (m8) {
              BE(this, m8);
            }
            Object.keys(m7).forEach((mm) => {
              delete m7[mm];
            });
            return this;
          },
          qoe() {
            var m9 = m8.getItemQoe();
            return {
              setupTime: this._qoe.between("setup", "ready"),
              firstFrame: m9.getFirstFrame ? m9.getFirstFrame() : null,
              player: this._qoe.dump(),
              item: m9.dump(),
            };
          },
          addCues(m9) {
            if (Array.isArray(m9)) {
              m8.addCues(m9);
            }
            return this;
          },
          getAudioTracks: () => m8.getAudioTracks(),
          getBuffer: () => m8.get("buffer"),
          getCaptions: () => m8.get("captions"),
          getCaptionsList: () => m8.getCaptionsList(),
          getConfig: () => m8.getConfig(),
          getContainer: () => m8.getContainer(),
          getControls: () => m8.get("controls"),
          getCues: () => m8.getCues(),
          getCurrentAudioTrack: () => m8.getCurrentAudioTrack(),
          getCurrentCaptions: () => m8.getCurrentCaptions(),
          getCurrentQuality: () => m8.getCurrentQuality(),
          getCurrentTime: () => m8.get("currentTime"),
          getAbsolutePosition: () => m8.getAbsolutePosition(),
          getDuration: () => m8.get("duration"),
          getEnvironment: () => Bf,
          getFullscreen: () => m8.get("fullscreen"),
          getHeight: () => m8.getHeight(),
          getItemMeta: () => m8.get("itemMeta") || {},
          getMute: () => m8.getMute(),
          getContainerPercentViewable: () => m8.get("intersectionRatio"),
          getPercentViewable: () => m8.get("visibility"),
          getPip: () => m8.get("pip"),
          getPlaybackRate: () => m8.get("playbackRate"),
          getPlaylist: () => m8.get("playlist"),
          getPlaylistIndex: () => m8.get("item"),
          getPlaylistItem(m9) {
            var mB;
            if (Bc.Z.exists(m9)) {
              if ((mB = this.getPlaylist())) {
                return mB[m9];
              } else {
                return null;
              }
            } else {
              return m8.get("playlistItem");
            }
          },
          getPosition: () => m8.get("position"),
          getProvider: () => m8.getProvider(),
          getQualityLevels: () => m8.getQualityLevels(),
          getSafeRegion: (m9 = true) => m8.getSafeRegion(m9),
          getState: () => m8.getState(),
          getStretching: () => m8.get("stretching"),
          getContainerViewable: () => m8.get("containerViewable"),
          getViewable: () => m8.get("viewable"),
          getVisualQuality: () => m8.getVisualQuality(),
          getVolume: () => m8.get("volume"),
          getWidth: () => m8.getWidth(),
          isReady: () => m8.isReady(),
          setCaptions(m9) {
            m8.setCaptions(m9);
            return this;
          },
          setConfig(m9) {
            m8.setConfig(m9);
            return this;
          },
          setControls(m9) {
            m8.setControls(m9);
            return this;
          },
          setCurrentAudioTrack(m9) {
            m8.setCurrentAudioTrack(m9);
          },
          setCurrentCaptions(m9) {
            m8.setCurrentCaptions(m9);
          },
          setCurrentQuality(m9) {
            m8.setCurrentQuality(m9);
          },
          setFullscreen(m9) {
            m8.setFullscreen(m9);
            return this;
          },
          setAllowFullscreen(m9) {
            m8.setAllowFullscreen(m9);
            return this;
          },
          setMute(m9) {
            m8.setMute(m9);
            return this;
          },
          setPip(m9) {
            m8.setPip(m9);
            return this;
          },
          setPlaybackRate(m9) {
            m8.setPlaybackRate(m9);
            return this;
          },
          setPlaylistItem(m9, mB) {
            m8.setPlaylistItem(m9, mB);
            return this;
          },
          setCues(m9) {
            if (Array.isArray(m9)) {
              m8.setCues(m9);
            }
            return this;
          },
          setVolume(m9) {
            m8.setVolume(m9);
            return this;
          },
          load(m9, mB) {
            m8.load(m9, mB);
            return this;
          },
          play(m9) {
            m8.play(m9);
            return this;
          },
          pause(m9) {
            m8.pause(m9);
            return this;
          },
          playToggle(m9) {
            switch (this.getState()) {
              case BD.r0:
              case BD.Kb:
                return this.pause(m9);
              default:
                return this.play(m9);
            }
          },
          seek(m9, mB) {
            m8.seek(m9, mB);
            return this;
          },
          playlistItem(m9, mB) {
            m8.playlistItem(m9, mB);
            return this;
          },
          playlistNext(m9) {
            m8.playlistNext(m9);
            return this;
          },
          playlistPrev(m9) {
            m8.playlistPrev(m9);
            return this;
          },
          next(m9) {
            m8.next(m9);
            return this;
          },
          requestPip(m9) {
            m8.requestPip(m9);
            return this;
          },
          castToggle() {
            m8.castToggle();
            return this;
          },
          stopCasting() {
            m8.stopCasting();
            return this;
          },
          requestCast(m9) {
            m8.requestCast(m9);
            return this;
          },
          createInstream: () => m8.createInstream(),
          stop() {
            m8.stop();
            return this;
          },
          resize(m9, mB) {
            m8.resize(m9, mB);
            return this;
          },
          addButton(m9, mB, mm, mJ, mh) {
            m8.addButton(m9, mB, mm, mJ, mh);
            return this;
          },
          removeButton(m9) {
            m8.removeButton(m9);
            return this;
          },
          getMediaElement: () => m8.getMediaElement(),
          attachMedia() {
            m8.attachMedia();
            return this;
          },
          detachMedia() {
            m8.detachMedia();
            return this;
          },
          isBeforeComplete: () => m8.isBeforeComplete(),
          isBeforePlay: () => m8.isBeforePlay(),
          setPlaylistItemCallback(m9, mB) {
            m8.setItemCallback(m9, mB);
          },
          removePlaylistItemCallback() {
            m8.setItemCallback(null);
          },
          getPlaylistItemPromise: (m9) => m8.getItemPromise(m9),
          getFloating: () => Boolean(m8.get("isFloating")),
          setFloating(m9) {
            m8.setConfig({
              floating: {
                mode: m9 ? "always" : "never",
              },
            });
          },
          getChapters: () => m8.getChapters(),
          getCurrentChapter: () => m8.getCurrentChapter(),
          setChapter: (m9) => m8.setChapter(m9),
          setupDynamicPlugin(m9, mB) {
            if (m9) {
              return Bt(this, m9, mB, m8.get("plugins"));
            } else {
              return Promise.resolve();
            }
          },
          destroyDynamicPlugin(m9) {
            if (m9) {
              return Bd(this, m9);
            }
          },
        });
      }
      Object.assign(BW.prototype, {
        on(m3, m4, m5) {
          return Bk.on.call(this, m3, m4, m5);
        },
        once(m3, m4, m5) {
          return Bk.IH.call(this, m3, m4, m5);
        },
        off(m3, m4, m5) {
          return Bk.S1.call(this, m3, m4, m5);
        },
        trigger(m3, m4) {
          (m4 = BR.ZP.isObject(m4) ? Object.assign({}, m4) : {}).type = m3;
          return (BK.Z.debug ? Bk.X$ : Bk.wj).call(this, m3, m4);
        },
        getPlugin(m3) {
          return this.plugins[m3];
        },
        addPlugin(m3, m4) {
          if (typeof (this.plugins[m3] = m4).addToPlayer == "function") {
            if (this.isReady()) {
              m4.addToPlayer.call(this, true);
            } else {
              this.on("ready", function () {
                m4.addToPlayer.call(this, false);
              });
            }
          }
          if (m4.resize) {
            this.on("resize", m4.resizeHandler);
          }
        },
        registerPlugin(m3, m4, m5) {
          (0, BU.fo)(m3, m4, m5);
        },
        getAdBlock: () => false,
        playAd(m3) {},
        pauseAd(m3) {},
        skipAd() {},
      });
      Bx.p = (0, Be.loadFrom)();
      function BT(m3) {
        let m4;
        let m5;
        if (m3) {
          if (typeof m3 == "string") {
            if (!(m4 = Bl(m3))) {
              m5 = document.getElementById(m3);
            }
          } else if (typeof m3 == "number") {
            m4 = Br.Z[m3];
          } else if (m3.nodeType) {
            m5 = m3;
            m4 = Bl(m5.id || m5.getAttribute("data-jwplayer-id"));
          }
        } else {
          m4 = Br.Z[0];
        }
        if (m4) {
          return m4;
        }
        if (m5) {
          const m6 = new BW(m5);
          Br.Z.push(m6);
          return m6;
        }
        return {
          registerPlugin: BU.fo,
        };
      }
      const Bl = (m3) => {
        for (let m4 = 0; m4 < Br.Z.length; m4++) {
          if (Br.Z[m4].id === m3) {
            return Br.Z[m4];
          }
        }
        return null;
      };
      const BC = (m3) => {
        Object.defineProperties(m3, {
          api: {
            get: () => Bb,
            set() {},
          },
          version: {
            get: () => Bn.i,
            set() {},
          },
          debug: {
            get: () => BK.Z.debug,
            set(m4) {
              BK.Z.debug = Boolean(m4);
            },
          },
        });
      };
      BC(BT);
      const Bj = BT;
      var BY = Bx(5882);
      var BO = Bx(6599);
      var Be = Bx(676);
      var Bi = Bx(5592);
      var Bz = Bx(6769);
      var BM = Bx(9025);
      var BX = BR.ZP.extend;
      var BP = {
        _: BR.ZP,
      };
      BP.utils = Object.assign(Bc.Z, {
        key: BO.ZP,
        extend: BX,
        scriptloader: Be.ZP,
        rssparser: {
          parse: Bz.Z,
        },
        tea: Bi.p,
        UI: BY.ZP,
      });
      BP.utils.css.style = BP.utils.style;
      BP.vid = BM.Z;
      var BO = BP;
      var BF = Bx(7543);
      function Bs(m3) {
        var m4 = {};
        Bu(this, m3, m3, m4);
        Bu(this, m3, BW.prototype, m4);
      }
      function By(m3) {
        if ((m3 = Bj(m3)).uniqueId) {
          return (m3._publicApi ||= new Bs(m3));
        } else {
          return m3;
        }
      }
      const BZ = /^(?:on(?:ce)?|off|trigger)$/;
      const BG = (m3) => {
        console.warn(
          "The API method jwplayer()." +
            m3 +
            "() is disabled in the free edition of JW Player."
        );
      };
      const Bv = (m3, m4) => {
        if (m4.length) {
          const m5 = m3.getPlugin("jwpsrv");
          if (m5 != null && m5.trackExternalAPIUsage) {
            m4.forEach((m6) => {
              var m7 = m5;
              var m8 = m6[0];
              var m6 = m6[1];
              try {
                var m9 = ((mB) => {
                  switch (m8) {
                    case "setup":
                      return Boolean(mB);
                    case "getSafeRegion":
                    case "pauseAd":
                    case "setControls":
                    case "setFullscreen":
                    case "setMute":
                      if (Boolean(mB) === mB) {
                        return mB;
                      } else {
                        return undefined;
                      }
                    case "setPlaylistItem":
                    case "getPlaylistItem":
                      if ((mB | 0) === mB) {
                        return mB;
                      } else {
                        return undefined;
                      }
                    case "setPlaybackRate":
                    case "setVolume":
                      return Number(mB);
                    case "setConfig":
                      return Object.keys(Object(mB)).join(",");
                    case "on":
                    case "once":
                    case "off":
                    case "trigger":
                    case "getPlugin":
                    case "addPlugin":
                    case "registerPlugin":
                      return "" + mB;
                  }
                  return null;
                })(m6);
                m7.trackExternalAPIUsage(m8, m9);
              } catch (mB) {
                if (BK.Z.debug) {
                  console.warn(mB);
                }
              }
            });
            m4.length = 0;
          }
        }
      };
      const BA = (m3, m4, m5, m6, m7) =>
        function (...m8) {
          const m9 = m8[0];
          const mB = (m4._trackCallQueue ||= []);
          const mm = BZ.test(m5);
          const mJ = mm && m8[1] && m8[1]._callback;
          const mh =
            m7.edition ||
            ((mH = m7), (mp = m4.getConfig().edition), (mH.edition = mp));
          if (mh === "free") {
            if (
              [
                "addButton",
                "addCues",
                "detachMedia",
                "load",
                "next",
                "pause",
                "play",
                "playlistItem",
                "playlistNext",
                "playlistPrev",
                "playToggle",
                "resize",
                "seek",
                "setCaptions",
                "setConfig",
                "setControls",
                "setCues",
                "setFullscreen",
                "setMute",
                "setPlaybackRate",
                "setPlaylistItem",
                "setVolume",
                "stop",
              ].indexOf(m5) > -1
            ) {
              BG(m5);
              return m3;
            }
            if (
              [
                "createInstream",
                "setCurrentAudioTrack",
                "setCurrentCaptions",
                "setCurrentQuality",
              ].indexOf(m5) > -1
            ) {
              BG(m5);
              return null;
            }
          }
          if (!mJ) {
            mB.push([m5, m9]);
          }
          if (mm) {
            Bv(m4, mB);
            return m4[m5].apply(m3, m8);
          }
          var mH = m5;
          var mq = m8;
          var mw = {
            reason:
              mH !== "play" && mH !== "seek" && mH !== "pause" && (0, BF.C)()
                ? "interaction"
                : "external",
          };
          switch (mH) {
            case "play":
            case "pause":
            case "playToggle":
            case "playlistNext":
            case "playlistPrev":
            case "next":
              mq[0] = mw;
              break;
            case "seek":
            case "playlistItem":
              mq[1] = mw;
          }
          var mp = m4[m5](...m8);
          if (m5 === "remove") {
            m4.off.call(m3);
          } else if (m5 === "setup") {
            m4.off.call(m3);
            m4.off(m9.events, null, m4);
            m4.on.call(m3, m9.events, null, m3);
            m4.on("all", (me, mx) => {
              if (me === "ready") {
                const mr = Object.keys(m4).filter(
                  (mY) =>
                    mY[0] !== "_" &&
                    m6.indexOf(mY) === -1 &&
                    typeof m4[mY] == "function"
                );
                const mO = m6.concat(mr);
                mr.forEach((mY) => {
                  m3[mY] = BA(m3, m4, mY, mO, m7);
                });
              }
              m4.trigger.call(m3, me, mx);
              Bv(m4, mB);
            });
          }
          Bv(m4, mB);
          if (mp === m4) {
            return m3;
          } else {
            return mp;
          }
        };
      const BI = ["getMediaElement"];
      const Bu = (m3, m4, m5, m6) => {
        const m7 = Object.keys(m5);
        m7.forEach((m8) => {
          var m9 = m5[m8];
          if (BI.indexOf(m8) === -1) {
            if (typeof m9 == "function" && m8 !== "Events") {
              m3[m8] = BA(m3, m4, m8, m7, m6);
            } else if (m8 === "_events") {
              m3._events = {};
            } else {
              Object.defineProperty(m3, m8, {
                enumerable: true,
                get: () => m5[m8],
              });
            }
          }
        });
      };
      const m0 = window;
      Object.assign(Bj, BO);
      Object.assign(By, BO);
      BC(By);
      if (typeof m0.define == "function" && m0.define.amd) {
        m0.define([], function () {
          return By;
        });
      }
      let m1 = By;
      const m2 = (m1 = m0.jwplayer ? m0.jwplayer : m1);
    },
    8675: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Ve: () => Br.Ve,
        ZP: () => BO,
        fo: () => Br.fo,
      });
      Bx(3487);
      var Br = Bx(1241);
      const BO = Br.ZP;
    },
    3487: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        MK: () => Br.MK,
        Nq: () => Br.Nq,
        bX: () => BO,
        sb: () => BY,
      });
      Bx(1569);
      var Br = Bx(7164);
      const BO = function (BS) {
        let Bb = (0, Br.bX)(BS);
        if (BS) {
          switch ((0, Br.Nq)(BS)) {
            case "jwpsrv":
              Bb = 305001;
              break;
            case "googima":
              Bb = 305002;
              break;
            case "vast":
              Bb = 305003;
              break;
            case "freewheel":
              Bb = 305004;
              break;
            case "dai":
              Bb = 305005;
              break;
            case "gapro":
              Bb = 305006;
              break;
            case "bidding":
              Bb = 305007;
          }
        }
        return Bb;
      };
      const BY = (BS) => {
        let Bb = "";
        if (
          window.location.protocol !== "https:" &&
          window.location.protocol !== "http:"
        ) {
          Bb = "https:";
        }
        BS = {
          bidding: "//ssl.p.jwpcdn.com/player/v/8.33.2/bidding.js",
          jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.33.2/jwpsrv.js",
          dai: "//ssl.p.jwpcdn.com/player/v/8.33.2/dai.js",
          vast: "//ssl.p.jwpcdn.com/player/v/8.33.2/vast.js",
          googima: "//ssl.p.jwpcdn.com/player/v/8.33.2/googima.js",
          freewheel: "//ssl.p.jwpcdn.com/player/v/8.33.2/freewheel.js",
          gapro: "//ssl.p.jwpcdn.com/player/v/8.33.2/gapro.js",
          interactive: "//ssl.p.jwpcdn.com/player/v/8.33.2/interactive.js",
          keepWatching: "//ssl.p.jwpcdn.com/player/v/8.33.2/keepWatching.js",
        }[BS];
        if (BS) {
          return Bb + BS;
        } else {
          return "";
        }
      };
    },
    1918: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Gb: () => BK,
        d3: () => Bf,
        lD: () => Bn,
        w0: () => BU,
      });
      var Br = Bx(386);
      const BO = [
        {
          configName: "clearkey",
          keyName: "org.w3.clearkey",
        },
        {
          configName: "widevine",
          keyName: "com.widevine.alpha",
        },
        {
          configName: "playready",
          keyName: "com.microsoft.playready",
        },
      ];
      const BY = [];
      const BS = {};
      let Bb;
      const BU = (Bo) =>
        Bo.some(
          (BD) => Boolean(BD.drm) || BD.sources.some((BN) => Boolean(BN.drm))
        );
      const Bn = (Bo) =>
        Bb ||
        (((Boolean(navigator.requestMediaKeySystemAccess) &&
          Boolean(window.MediaKeySystemAccess.prototype.getConfiguration)) ||
          Boolean(window.MSMediaKeys)) &&
        (0, Br.Z)(Bo)("drm")
          ? (BO.forEach((BD) => {
              BN = BD.keyName;
              var BN;
              var Bk = (
                navigator.requestMediaKeySystemAccess
                  ? navigator.requestMediaKeySystemAccess(BN, [
                      {
                        initDataTypes: ["cenc"],
                        videoCapabilities: [
                          {
                            contentType: 'video/mp4;codecs="avc1.4d401e"',
                          },
                        ],
                        audioCapabilities: [
                          {
                            contentType: 'audio/mp4;codecs="mp4a.40.2"',
                          },
                        ],
                      },
                    ])
                  : new Promise((BL, Bg) => {
                      let Ba;
                      try {
                        Ba = new window.MSMediaKeys(BN);
                      } catch (Bd) {
                        Bg(Bd);
                        return;
                      }
                      BL(Ba);
                    })
              )
                .then(function () {
                  BS[BD.configName] = true;
                })
                .catch(function () {
                  BS[BD.configName] = false;
                });
              BY.push(Bk);
            }),
            (Bb = Promise.all(BY)))
          : Promise.resolve());
      const BK = (Bo) => BS[Bo];
      const Bf = (Bo) => {
        if (Bb) {
          return Object.keys(Bo).some((BD) => BK(BD));
        }
      };
    },
    2963: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        B: () => Bo,
      });
      var Be = Bx(6593);
      var Br = Bx(8348);
      var BO = Bx(386);
      var BY = Bx(1918);
      var BS = Bx(9025);
      const Bb = (BD) => {
        if (BD == null || !BD.length || !Array.isArray(BD)) {
          BD = ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"'];
        }
        const BN = window.MediaSource;
        return (
          !!BN &&
          !!BN.isTypeSupported &&
          BD.every((Bk) => BN.isTypeSupported(Bk))
        );
      };
      const BU = (BD) =>
        /hls|m3u8/.test(
          ((BD == null ? undefined : BD.type) || "").toLowerCase()
        ) ||
        ((BD == null ? undefined : BD.file) || "")
          .toLowerCase()
          .indexOf(".m3u8") > -1;
      const Bn = (BD) =>
        /mpd|dash/.test(
          ((BD == null ? undefined : BD.type) || "").toLowerCase()
        ) ||
        ((BD == null ? undefined : BD.file) || "")
          .toLowerCase()
          .indexOf("mpd-time-csf") > -1;
      const BK = Be.B.find((BD) => BD.name === "html5");
      const Bf = BK.supports;
      BK.supports = function (...BD) {
        var [BN, Bk] = BD;
        var BD = Bf.apply(this, BD);
        if (Bn(BN)) {
          return false;
        }
        if (BD && BN.drm && BU(BN)) {
          const BL = (0, BO.Z)(Bk)("drm");
          if (BL && BN.drm.fairplay) {
            const Bg = window.WebKitMediaKeys;
            if (Bg == null || Bg.isTypeSupported == null) {
              return undefined;
            } else {
              return Bg.isTypeSupported("com.apple.fps.1_0", "video/mp4");
            }
          }
          return BL;
        }
        return BD;
      };
      Be.B.push({
        name: "shaka",
        supports: (BD) =>
          (!BD.drm || !!(0, BY.d3)(BD.drm)) &&
          Bb(BD.mediaTypes) &&
          (Bn(BD) || BU(BD)),
      });
      Be.B.unshift({
        name: "hlsjs",
        supports: (BD) => {
          var BN;
          var Bk;
          return (
            !BD.drm &&
            !!BU(BD) &&
            !((BN = Boolean(
              BS.Z == null || BS.Z.canPlayType == null
                ? undefined
                : BS.Z.canPlayType("application/vnd.apple.mpegURL")
            )),
            (Bk =
              typeof (BD == null ? undefined : BD.safarihlsjs) == "boolean" &&
              BD.safarihlsjs),
            typeof (BD == null ? undefined : BD.hlsjsdefault) == "boolean" &&
              BD.hlsjsdefault,
            typeof (BD == null ? undefined : BD.androidhls) == "boolean" &&
              BD.androidhls,
            BN && Br.Browser.safari && !Bk) &&
            (!BN ||
              !Br.OS.android ||
              BD.androidhls === false ||
              BD.hlsjsdefault !== false) &&
            Bb(BD.mediaTypes)
          );
        },
      });
      const Bo = Be.B;
    },
    2303: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => Bn,
      });
      var Br = Bx(2963);
      var BO = Bx(12);
      var BY = Bx(670);
      var BS = Bx(2894);
      var Be = {
        html5: () =>
          Bx.e(250)
            .then(
              function (BK) {
                var Bf = Bx(9181).default;
                (0, BY.Z)(Bf);
                return Bf;
              }.bind(null, Bx)
            )
            .catch((0, BS.Ep)(152)),
      };
      Object.assign(Be, {
        shaka: () =>
          Bx.e(371)
            .then(
              function (BK) {
                var Bf = Bx(2287).default;
                (0, BY.Z)(Bf);
                return Bf;
              }.bind(null, Bx)
            )
            .catch((0, BS.Ep)(154)),
        hlsjs: () =>
          Bx.e(98)
            .then(
              function (BK) {
                var Bf = Bx(9054).default;
                (0, BY.Z)(Bf);
                return Bf;
              }.bind(null, Bx)
            )
            .catch((0, BS.Ep)(153)),
      });
      function Bb(BK) {
        this.config = BK || {};
      }
      const BU = Be;
      Object.assign(Bb.prototype, {
        load(BK) {
          const Bf = BU[BK];
          const Bo = () => Promise.reject(new Error("Failed to load media"));
          if (Bf) {
            return Bf().then(() => {
              return BO.U[BK] || Bo();
            });
          } else {
            return Bo();
          }
        },
        providerSupports: (BK, Bf) => BK.supports(Bf),
        choose(BK) {
          if (BK === Object(BK)) {
            var Bf = Br.B.length;
            for (let BD = 0; BD < Bf; BD++) {
              var Bo = Br.B[BD];
              if (this.providerSupports(Bo, BK)) {
                return {
                  priority: Bf - BD - 1,
                  name: Bo.name,
                  type: BK.type,
                  providerToCheck: Bo,
                  provider: BO.U[Bo.name],
                };
              }
            }
          }
          return {};
        },
      });
      Be = Bb;
      Be.prototype.providerSupports = function (BK, Bf) {
        return BK.supports(Bf, this.config.edition);
      };
      const Bn = Be;
    },
    5140: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        t: () => Br,
      });
      const Br = window.atob;
      window.btoa;
    },
    386: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () =>
          function (BN) {
            const Bk = {
              setup: [Br, BO, BY, BS, Bb, BU, BK, Bf, Bo, Bn],
              drm: [Bb, BU, BK, Bf, Bo],
              ads: [BK, Bf, Bo, Bn, Bb, BU, BY],
              jwpsrv: [Br, BO, BY, BS, Bb, BU, BK, Bo, Bn, BD],
              discovery: [BK, Bb, BU, Bo, Bf],
            };
            return function (BL) {
              return Bk[BL] && Bk[BL].indexOf(BN) > -1;
            };
          },
      });
      const Br = "free";
      const BO = "starter";
      const BY = "business";
      const BS = "premium";
      const Bb = "enterprise";
      const BU = "developer";
      const Bn = "platinum";
      const BK = "ads";
      const Bf = "unlimited";
      const Bo = "trial";
      const BD = "invalid";
    },
    7010: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () =>
          function () {
            return BO(window, document.location.search);
          },
      });
      var Br = Bx(5950);
      const BO = function (BY, BS) {
        return BY.location !== BY.parent.location && (0, Br.ke)(BS, "isAMP");
      };
    },
    560: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        Z: () => BO,
      });
      const Br = () => Br._iframe;
      Br.mock = (BY) => {
        Br._iframe = BY;
      };
      Br.unmock = () => {
        Br._iframe = Br._original;
      };
      Br._iframe = window.top !== window.self;
      Br._original = Br._iframe;
      const BO = Br;
    },
    6599: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        ZP: () => Bn,
        u5: () => Bb,
      });
      var Br = Bx(5592);
      var BO = Bx(386);
      var BY = Bx(5140);
      var BS = Bx(4446);
      const Bb = 100013;
      const BU = "invalid";
      const Bn = class {
        constructor(BK) {
          this.keyData = ((Bf) => {
            let Bo;
            let BD;
            let BN;
            try {
              var Bk = (0, Br.p)(
                Bf || "",
                (0, BY.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")
              ).split("/");
              if ((Bo = Bk[0]) === "pro") {
                Bo = "premium";
              }
              if (!(0, BO.Z)(Bo)("setup")) {
                Bo = BU;
              }
              if (Bk.length > 2) {
                BD = Bk[1];
                const BL = parseInt(Bk[2], 10);
                if (BL > 0) {
                  (BN = new Date()).setTime(BL);
                }
              }
            } catch (Bg) {
              Bo = BU;
            }
            return {
              edition: Bo,
              token: BD,
              expiration: BN,
            };
          })(BK);
          this.edition = function () {
            return this.keyData.edition;
          };
          this.token = function () {
            return this.keyData.token;
          };
          this.expiration = function () {
            return this.keyData.expiration;
          };
          this.duration = function () {
            if (this.keyData.expiration) {
              return this.keyData.expiration.getTime() - new Date().getTime();
            } else {
              return 0;
            }
          };
          this.error = function () {
            let Bf;
            if (BK === undefined) {
              Bf = 100011;
            } else if (this.keyData.edition !== BU && this.keyData.token) {
              if (this.duration() < 0) {
                Bf = Bb;
              }
            } else {
              Bf = 100012;
            }
            if (Bf) {
              return new BS.rG(BS.pJ, Bf);
            } else {
              return null;
            }
          };
        }
      };
    },
    67: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        X: () => BO,
      });
      var Br = Bx(560);
      const BO = () => {
        let BY = window.location.host;
        if ((0, Br.Z)()) {
          BY = (
            document.referrer
              ? ((BS = document.referrer),
                ((Bb = document.createElement("a")).href = BS),
                Bb)
              : {}
          ).host;
          try {
            BY = BY || window.top.location.host;
          } catch (BU) {}
        }
        var BS;
        var Bb;
        return BY;
      };
    },
    5592: (Bp, Be, Bx) => {
      "use strict";

      Bx.d(Be, {
        p: () => BY,
      });
      var Br = Bx(5140);
      const BO = (BS) => {
        var Bb = new Array(Math.ceil(BS.length / 4));
        for (let BU = 0; BU < Bb.length; BU++) {
          Bb[BU] =
            BS.charCodeAt(BU * 4) +
            (BS.charCodeAt(BU * 4 + 1) << 8) +
            (BS.charCodeAt(BU * 4 + 2) << 16) +
            (BS.charCodeAt(BU * 4 + 3) << 24);
        }
        return Bb;
      };
      const BY = function (BS, Bb) {
        BS = String(BS);
        Bb = String(Bb);
        if (BS.length === 0) {
          return "";
        }
        var BU = BO((0, Br.t)(BS));
        var Bn = BO(unescape(encodeURIComponent(Bb)).slice(0, 16));
        var BK = BU.length;
        let Bf;
        let Bo;
        let BD = void BU[BK - 1];
        let BN = BU[0];
        let Bk = Math.floor(6 + 52 / BK) * 2654435769;
        while (Bk) {
          Bo = (Bk >>> 2) & 3;
          for (let BL = BK - 1; BL >= 0; BL--) {
            Bf =
              ((((BD = BU[BL > 0 ? BL - 1 : BK - 1]) >>> 5) ^ (BN << 2)) +
                ((BN >>> 3) ^ (BD << 4))) ^
              ((Bk ^ BN) + (Bn[(BL & 3) ^ Bo] ^ BD));
            BN = BU[BL] -= Bf;
          }
          Bk -= 2654435769;
        }
        BS = ((Bg) => {
          var Ba = new Array(Bg.length);
          for (let Bd = 0; Bd < Bg.length; Bd++) {
            Ba[Bd] = String.fromCharCode(
              Bg[Bd] & 255,
              (Bg[Bd] >>> 8) & 255,
              (Bg[Bd] >>> 16) & 255,
              (Bg[Bd] >>> 24) & 255
            );
          }
          return Ba.join("");
        })(BU).replace(/\0+$/, "");
        try {
          return decodeURIComponent(escape(BS));
        } catch (Bg) {
          return BS;
        }
      };
    },
    1096: function (Bp) {
      Bp.exports = (function () {
        "use strict";

        function Be() {}
        function Bx(Bn) {
          if (!(this instanceof Bx)) {
            throw new TypeError("Promises must be constructed via new");
          }
          if (typeof Bn != "function") {
            throw new TypeError("not a function");
          }
          this._state = 0;
          this._handled = false;
          this._value = undefined;
          this._deferreds = [];
          Bb(Bn, this);
        }
        function Br(Bn, BK) {
          while (Bn._state === 3) {
            Bn = Bn._value;
          }
          if (Bn._state !== 0) {
            Bn._handled = true;
            Bx._immediateFn(function () {
              var Bf;
              var Bo = Bn._state === 1 ? BK.onFulfilled : BK.onRejected;
              if (Bo !== null) {
                try {
                  Bf = Bo(Bn._value);
                } catch (BD) {
                  BY(BK.promise, BD);
                  return;
                }
                BO(BK.promise, Bf);
              } else {
                (Bn._state === 1 ? BO : BY)(BK.promise, Bn._value);
              }
            });
          } else {
            Bn._deferreds.push(BK);
          }
        }
        function BO(Bn, BK) {
          try {
            if (BK === Bn) {
              throw new TypeError("A promise cannot be resolved with itself.");
            }
            if (BK && (typeof BK == "object" || typeof BK == "function")) {
              var Bf = BK.then;
              if (BK instanceof Bx) {
                Bn._state = 3;
                Bn._value = BK;
                return BS(Bn);
              }
              if (typeof Bf == "function") {
                return Bb(
                  ((Bo = Bf),
                  (BD = BK),
                  function () {
                    Bo.apply(BD, arguments);
                  }),
                  Bn
                );
              }
            }
            Bn._state = 1;
            Bn._value = BK;
            BS(Bn);
          } catch (BN) {
            BY(Bn, BN);
          }
          var Bo;
          var BD;
        }
        function BY(Bn, BK) {
          Bn._state = 2;
          Bn._value = BK;
          BS(Bn);
        }
        function BS(Bn) {
          if (Bn._state === 2 && Bn._deferreds.length === 0) {
            Bx._immediateFn(function () {
              if (!Bn._handled) {
                Bx._unhandledRejectionFn(Bn._value);
              }
            });
          }
          for (var BK = 0, Bf = Bn._deferreds.length; BK < Bf; BK++) {
            Br(Bn, Bn._deferreds[BK]);
          }
          Bn._deferreds = null;
        }
        function Bb(Bn, BK) {
          var Bf = false;
          try {
            Bn(
              function (Bo) {
                if (!Bf) {
                  Bf = true;
                  BO(BK, Bo);
                }
              },
              function (Bo) {
                if (!Bf) {
                  Bf = true;
                  BY(BK, Bo);
                }
              }
            );
          } catch (Bo) {
            if (!Bf) {
              Bf = true;
              BY(BK, Bo);
            }
          }
        }
        var BU = setTimeout;
        Bx.prototype.catch = function (Bn) {
          return this.then(null, Bn);
        };
        Bx.prototype.then = function (Bn, BK) {
          var Bf = new this.constructor(Be);
          Br(
            this,
            new (function (Bo, BD, BN) {
              this.onFulfilled = typeof Bn == "function" ? Bn : null;
              this.onRejected = typeof BD == "function" ? BD : null;
              this.promise = BN;
            })(0, BK, Bf)
          );
          return Bf;
        };
        Bx.prototype.finally = function (Bn) {
          var BK = this.constructor;
          return this.then(
            function (Bf) {
              return BK.resolve(Bn()).then(function () {
                return Bf;
              });
            },
            function (Bf) {
              return BK.resolve(Bn()).then(function () {
                return BK.reject(Bf);
              });
            }
          );
        };
        Bx.all = function (Bn) {
          return new Bx(function (BK, Bf) {
            if (!Bn || Bn.length === undefined) {
              throw new TypeError("Promise.all accepts an array");
            }
            var Bo = Array.prototype.slice.call(Bn);
            if (Bo.length === 0) {
              return BK([]);
            }
            var BD = Bo.length;
            for (var BN = 0; Bo.length > BN; BN++) {
              (function Bk(BL, Bg) {
                try {
                  if (
                    Bg &&
                    (typeof Bg == "object" || typeof Bg == "function")
                  ) {
                    var Ba = Bg.then;
                    if (typeof Ba == "function") {
                      return Ba.call(
                        Bg,
                        function (Bd) {
                          Bk(BL, Bd);
                        },
                        Bf
                      );
                    }
                  }
                  Bo[BL] = Bg;
                  if (--BD == 0) {
                    BK(Bo);
                  }
                } catch (Bd) {
                  Bf(Bd);
                }
              })(BN, Bo[BN]);
            }
          });
        };
        Bx.resolve = function (Bn) {
          if (Bn && typeof Bn == "object" && Bn.constructor === Bx) {
            return Bn;
          } else {
            return new Bx(function (BK) {
              BK(Bn);
            });
          }
        };
        Bx.reject = function (Bn) {
          return new Bx(function (BK, Bf) {
            Bf(Bn);
          });
        };
        Bx.race = function (Bn) {
          return new Bx(function (BK, Bf) {
            for (var Bo = 0, BD = Bn.length; Bo < BD; Bo++) {
              Bn[Bo].then(BK, Bf);
            }
          });
        };
        Bx._immediateFn =
          typeof setImmediate == "function"
            ? function (Bn) {
                setImmediate(Bn);
              }
            : function (Bn) {
                BU(Bn, 0);
              };
        Bx._unhandledRejectionFn = function (Bn) {
          if (console !== undefined && console) {
            console.warn("Possible Unhandled Promise Rejection:", Bn);
          }
        };
        return Bx;
      })();
    },
    9563: (Bp) => {
      var Be;
      var Bx;
      var Br = {};
      var BO = {};
      Be = function () {
        return document.head || document.getElementsByTagName("head")[0];
      };
      function BY() {
        return (Bx = Bx === undefined ? Be.apply(this, arguments) : Bx);
      }
      function BS(BK, Bf) {
        var Bo;
        var BD;
        var BN = BO[BK];
        var Bk = (BN =
          BN ||
          (BO[BK] = {
            element:
              ((BK = BK),
              ((BD = document.createElement("style")).type = "text/css"),
              BD.setAttribute("data-jwplayer-id", BK),
              (BK = BD),
              BY().appendChild(BK),
              BD),
            counter: 0,
          })).counter++;
        var BL = BN.element;
        function Bg() {
          Bn(BL, Bk, "");
        }
        (Bo = function (Ba) {
          Bn(BL, Bk, Ba);
        })(Bf.css);
        return function (Ba) {
          if (Ba) {
            if (Ba.css !== Bf.css || Ba.media !== Bf.media) {
              Bo((Bf = Ba).css);
            }
          } else {
            Bg();
          }
        };
      }
      Bp.exports = {
        style: function (BK, Bf) {
          var Bo = Bf;
          for (
            var BD = (function (Bd) {
                var Bt = [];
                var Bc = {};
                for (var BR = 0; BR < Bd.length; BR++) {
                  var BQ = Bd[BR];
                  var BV = BQ[0];
                  var BQ = {
                    css: BQ[1],
                    media: BQ[2],
                  };
                  if (Bc[BV]) {
                    Bc[BV].parts.push(BQ);
                  } else {
                    Bt.push(
                      (Bc[BV] = {
                        id: BV,
                        parts: [BQ],
                      })
                    );
                  }
                }
                return Bt;
              })(BK),
              BN = 0;
            BN < BD.length;
            BN++
          ) {
            var Bk = BD[BN];
            var BL = (Br[Bo] || {})[Bk.id];
            if (BL) {
              for (var Bg = 0; Bg < BL.parts.length; Bg++) {
                BL.parts[Bg](Bk.parts[Bg]);
              }
              for (; Bg < Bk.parts.length; Bg++) {
                BL.parts.push(BS(Bo, Bk.parts[Bg]));
              }
            } else {
              var Ba = [];
              for (var Bg = 0; Bg < Bk.parts.length; Bg++) {
                Ba.push(BS(Bo, Bk.parts[Bg]));
              }
              Br[Bo] = Br[Bo] || {};
              Br[Bo][Bk.id] = {
                id: Bk.id,
                parts: Ba,
              };
            }
          }
        },
        clear: function (BK, Bf) {
          var Bo = Br[BK];
          if (Bo) {
            if (Bf) {
              var BD = Bo[Bf];
              if (BD) {
                for (var BN = 0; BN < BD.parts.length; BN += 1) {
                  BD.parts[BN]();
                }
              }
            } else {
              for (var Bk = Object.keys(Bo), BL = 0; BL < Bk.length; BL += 1) {
                for (
                  var Bg = Bo[Bk[BL]], Ba = 0;
                  Ba < Bg.parts.length;
                  Ba += 1
                ) {
                  Bg.parts[Ba]();
                }
              }
              delete Br[BK];
            }
          }
        },
      };
      Bb = [];
      var Bb;
      function BU(BK, Bf) {
        Bb[BK] = Bf;
        return Bb.filter(Boolean).join("\n");
      }
      function Bn(BK, Bf, Bo) {
        if (BK.styleSheet) {
          BK.styleSheet.cssText = BU(Bf, Bo);
        } else {
          Bo = document.createTextNode(Bo);
          if ((Bf = BK.childNodes[Bf])) {
            BK.replaceChild(Bo, Bf);
          } else {
            BK.appendChild(Bo);
          }
        }
      }
    },
    4737: (Bp) => {
      Bp.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>';
    },
  };
  var BH = {};
  function Bq(Bp) {
    var Be = BH[Bp];
    if (Be === undefined) {
      Be = BH[Bp] = {
        id: Bp,
        loaded: false,
        exports: {},
      };
      Bh[Bp].call(Be.exports, Be, Be.exports, Bq);
      Be.loaded = true;
    }
    return Be.exports;
  }
  Bq.m = Bh;
  Bq.n = (Bp) => {
    var Be = Bp && Bp.__esModule ? () => Bp.default : () => Bp;
    Bq.d(Be, {
      a: Be,
    });
    return Be;
  };
  Bq.d = (Bp, Be) => {
    for (var Bx in Be) {
      if (Bq.o(Be, Bx) && !Bq.o(Bp, Bx)) {
        Object.defineProperty(Bp, Bx, {
          enumerable: true,
          get: Be[Bx],
        });
      }
    }
  };
  Bq.f = {};
  Bq.e = (Bp) =>
    Promise.all(
      Object.keys(Bq.f).reduce((Be, Bx) => {
        Bq.f[Bx](Bp, Be);
        return Be;
      }, [])
    );
  Bq.u = (Bp) =>
    ({
      63: "polyfills.webvtt",
      74: "jwplayer.controls.tizen",
      98: "provider.hlsjs",
      168: "jwplayer.amp",
      207: "jwplayer.core.controls.html5",
      250: "provider.html5",
      347: "vttparser",
      365: "related",
      371: "provider.shaka",
      493: "jwplayer.core.controls.polyfills",
      520: "provider.airplay",
      581: "jwplayer.core.controls",
      605: "jwplayer.core.controls.polyfills.html5",
      681: "jwplayer.core",
      716: "jwplayer.controls",
      926: "jwplayer.stats",
      943: "polyfills.intersection-observer",
      977: "provider.cast",
    }[Bp] + ".js");
  Bq.o = (Bp, Be) => Object.prototype.hasOwnProperty.call(Bp, Be);
  B9 = {};
  BB = "jwplayer:";
  Bq.l = (Bp, Be, Bx, Br) => {
    if (B9[Bp]) {
      B9[Bp].push(Be);
    } else {
      var BO;
      var BY;
      if (Bx !== undefined) {
        for (
          var BS = document.getElementsByTagName("script"), Bb = 0;
          Bb < BS.length;
          Bb++
        ) {
          var BU = BS[Bb];
          if (
            BU.getAttribute("src") == Bp ||
            BU.getAttribute("data-webpack") == BB + Bx
          ) {
            BO = BU;
            break;
          }
        }
      }
      if (!BO) {
        BY = true;
        (BO = document.createElement("script")).charset = "utf-8";
        BO.timeout = 55;
        if (Bq.nc) {
          BO.setAttribute("nonce", Bq.nc);
        }
        BO.setAttribute("data-webpack", BB + Bx);
        BO.src = Bp;
      }
      B9[Bp] = [Be];
      var Be = (BK, Bf) => {
        BO.onerror = BO.onload = null;
        clearTimeout(Bn);
        var Bo = B9[Bp];
        delete B9[Bp];
        if (BO.parentNode) {
          BO.parentNode.removeChild(BO);
        }
        if (Bo) {
          Bo.forEach((BD) => BD(Bf));
        }
        if (BK) {
          return BK(Bf);
        }
      };
      var Bn = setTimeout(
        Be.bind(null, undefined, {
          type: "timeout",
          target: BO,
        }),
        55000
      );
      BO.onerror = Be.bind(null, BO.onerror);
      BO.onload = Be.bind(null, BO.onload);
      if (BY) {
        document.head.appendChild(BO);
      }
    }
  };
  Bq.r = (Bp) => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(Bp, Symbol.toStringTag, {
        value: "Module",
      });
    }
    Object.defineProperty(Bp, "__esModule", {
      value: true,
    });
  };
  Bq.nmd = (Bp) => {
    Bp.paths = [];
    Bp.children ||= [];
    return Bp;
  };
  Bq.p = "";
  Bm = {
    313: 0,
  };
  Bq.f.j = (Bp, Be) => {
    var Bx;
    var Br;
    var BO = Bq.o(Bm, Bp) ? Bm[Bp] : undefined;
    if (BO !== 0) {
      if (BO) {
        Be.push(BO[2]);
      } else {
        Bx = new Promise((BY, BS) => (BO = Bm[Bp] = [BY, BS]));
        Be.push((BO[2] = Bx));
        Be = Bq.p + Bq.u(Bp);
        Br = new Error();
        Bq.l(
          Be,
          (BY) => {
            var BS;
            if (
              Bq.o(Bm, Bp) &&
              ((BO = Bm[Bp]) !== 0 && (Bm[Bp] = undefined), BO)
            ) {
              BS = BY && (BY.type === "load" ? "missing" : BY.type);
              BY = BY && BY.target && BY.target.src;
              Br.message =
                "Loading chunk " + Bp + " failed.\n(" + BS + ": " + BY + ")";
              Br.name = "ChunkLoadError";
              Br.type = BS;
              Br.request = BY;
              BO[1](Br);
            }
          },
          "chunk-" + Bp,
          Bp
        );
      }
    }
  };
  Bw = (Bp, Be) => {
    var Bx;
    var Br;
    var [BO, BY, BS] = Be;
    var Bb = 0;
    if (BO.some((BU) => Bm[BU] !== 0)) {
      for (Bx in BY) {
        if (Bq.o(BY, Bx)) {
          Bq.m[Bx] = BY[Bx];
        }
      }
      if (BS) {
        BS(Bq);
      }
    }
    for (Bp && Bp(Be); Bb < BO.length; Bb++) {
      Br = BO[Bb];
      if (Bq.o(Bm, Br) && Bm[Br]) {
        Bm[Br][0]();
      }
      Bm[Br] = 0;
    }
  };
  (BJ = self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).forEach(
    Bw.bind(null, 0)
  );
  BJ.push = Bw.bind(null, BJ.push.bind(BJ));
  Bq.nc = undefined;
  var Bw = Bq(6577);
  window.jwplayer = Bw.default;
})();



(function (B9, BB) {
  var Bm;
  var BJ;
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = BB();
  } else if (typeof define == "function" && define.amd) {
    define(BB);
  } else {
    B9 = B9 || self;
    Bm = B9.Cookies;
    (BJ = B9.Cookies = BB()).noConflict = function () {
      B9.Cookies = Bm;
      return BJ;
    };
  }
})(this, function () {
  "use strict";

  function B9(Bm) {
    for (var BJ = 1; BJ < arguments.length; BJ++) {
      var Bh;
      var BH = arguments[BJ];
      for (Bh in BH) {
        Bm[Bh] = BH[Bh];
      }
    }
    return Bm;
  }
  var BB = {
    read: function (Bm) {
      return Bm.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (Bm) {
      return encodeURIComponent(Bm).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    },
  };
  return (function Bm(BJ, Bh) {
    function BH(Bq, Bw, Bp) {
      if (typeof document != "undefined") {
        if (typeof (Bp = B9({}, Bh, Bp)).expires == "number") {
          Bp.expires = new Date(Date.now() + Bp.expires * 86400000);
        }
        Bp.expires &&= Bp.expires.toUTCString();
        Bq = encodeURIComponent(Bq)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape);
        Bw = BJ.write(Bw, Bq);
        var Be;
        var Bx = "";
        for (Be in Bp) {
          if (Bp[Be] && ((Bx += "; " + Be), Bp[Be] !== true)) {
            Bx += "=" + Bp[Be].split(";")[0];
          }
        }
        return (document.cookie = Bq + "=" + Bw + Bx);
      }
    }
    return Object.create(
      {
        set: BH,
        get: function (Bq) {
          if (typeof document != "undefined" && (!arguments.length || Bq)) {
            for (
              var Bw = document.cookie ? document.cookie.split("; ") : [],
                Bp = {},
                Be = 0;
              Be < Bw.length;
              Be++
            ) {
              var Bx = Bw[Be].split("=");
              var Br = Bx.slice(1).join("=");
              if (Br[0] === '"') {
                Br = Br.slice(1, -1);
              }
              try {
                var BO = BB.read(Bx[0]);
                Bp[BO] = BJ.read(Br, BO);
                if (Bq === BO) {
                  break;
                }
              } catch (BY) {}
            }
            if (Bq) {
              return Bp[Bq];
            } else {
              return Bp;
            }
          }
        },
        remove: function (Bq, Bw) {
          BH(
            Bq,
            "",
            B9({}, Bw, {
              expires: -1,
            })
          );
        },
        withAttributes: function (Bq) {
          return Bm(this.converter, B9({}, this.attributes, Bq));
        },
        withConverter: function (Bq) {
          return Bm(B9({}, this.converter, Bq), this.attributes);
        },
      },
      {
        attributes: {
          value: Object.freeze(Bh),
        },
        converter: {
          value: Object.freeze(BJ),
        },
      }
    );
  })(BB, {
    path: "/",
  });
});
(function (B9) {
  (function () {
    if (typeof module != "undefined" && module.exports) {
      return function (BB) {
        module.exports = BB();
      };
    }
    if (typeof define == "function" && define.amd) {
      return define;
    }
    if (typeof window != "undefined") {
      return function (BB) {
        window.MobileDetect = BB();
      };
    }
    throw new Error("unknown environment");
  })()(function () {
    "use strict";

    function BB(Bb, BU) {
      return Bb != null && BU != null && Bb.toLowerCase() === BU.toLowerCase();
    }
    function Bm(Bb, BU) {
      var Bn;
      var BK;
      var Bf = Bb.length;
      if (Bf && BU) {
        Bn = BU.toLowerCase();
        BK = 0;
        for (; BK < Bf; ++BK) {
          if (Bn === Bb[BK].toLowerCase()) {
            return true;
          }
        }
      }
      return false;
    }
    function BJ(Bb) {
      for (var BU in Bb) {
        if (BO.call(Bb, BU)) {
          Bb[BU] = new RegExp(Bb[BU], "i");
        }
      }
    }
    function Bh(Bb, BU) {
      this.ua = (Bb || "").substr(0, 500);
      this._cache = {};
      this.maxPhoneWidth = BU || 600;
    }
    var BH;
    var Bq;
    var Bw;
    var Bp;
    var Be;
    var Bx;
    var Br = {
      mobileDetectRules: {
        phones: {
          iPhone: "\\biPhone\\b|\\biPod\\b",
          BlackBerry:
            "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
          HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
          Nexus:
            "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
          Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
          Motorola:
            "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
          Samsung:
            "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
          LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
          Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
          Asus: "Asus.*Galaxy|PadFone.*Mobile",
          NokiaLumia: "Lumia [0-9]{3,4}",
          Micromax:
            "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
          Palm: "PalmSource|Palm",
          Vertu:
            "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
          Pantech:
            "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
          Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
          Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
          iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
          SimValley:
            "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
          Wolfgang:
            "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
          Alcatel: "Alcatel",
          Nintendo: "Nintendo (3DS|Switch)",
          Amoi: "Amoi",
          INQ: "INQ",
          OnePlus: "ONEPLUS",
          GenericPhone:
            "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
        },
        tablets: {
          iPad: "iPad|iPad.*Mobile",
          NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
          GoogleTablet: "Android.*Pixel C",
          SamsungTablet:
            "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
          Kindle:
            "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
          SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
          HPTablet:
            "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
          AsusTablet:
            "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
          BlackBerryTablet: "PlayBook|RIM Tablet",
          HTCtablet:
            "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
          MotorolaTablet:
            "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
          NookTablet:
            "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
          AcerTablet:
            "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
          ToshibaTablet:
            "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
          LGTablet:
            "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
          FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
          PrestigioTablet:
            "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
          LenovoTablet:
            "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
          DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
          YarvikTablet:
            "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
          MedionTablet:
            "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
          ArnovaTablet:
            "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
          IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
          IRUTablet: "M702pro",
          MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
          EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
          AllViewTablet:
            "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
          ArchosTablet:
            "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
          AinolTablet:
            "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
          NokiaLumiaTablet: "Lumia 2520",
          SonyTablet:
            "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
          PhilipsTablet:
            "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
          CubeTablet:
            "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
          CobyTablet:
            "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
          MIDTablet:
            "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
          MSITablet:
            "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
          SMiTTablet:
            "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
          RockChipTablet:
            "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
          FlyTablet: "IQ310|Fly Vision",
          bqTablet:
            "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
          HuaweiTablet:
            "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
          NecTablet: "\\bN-06D|\\bN-08D",
          PantechTablet: "Pantech.*P4100",
          BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
          VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
          ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
          PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
          NabiTablet: "Android.*\\bNabi",
          KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
          DanewTablet:
            "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
          TexetTablet:
            "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
          PlaystationTablet: "Playstation.*(Portable|Vita)",
          TrekstorTablet:
            "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
          PyleAudioTablet:
            "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
          AdvanTablet:
            "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
          DanyTechTablet:
            "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
          GalapadTablet: "Android.*\\bG1\\b(?!\\))",
          MicromaxTablet:
            "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
          KarbonnTablet:
            "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
          AllFineTablet:
            "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
          PROSCANTablet:
            "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
          YONESTablet:
            "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
          ChangJiaTablet:
            "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
          GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
          PointOfViewTablet:
            "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
          OvermaxTablet:
            "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
          HCLTablet:
            "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
          DPSTablet: "DPS Dream 9|DPS Dual 7",
          VistureTablet:
            "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
          CrestaTablet:
            "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
          MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
          ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
          GoCleverTablet:
            "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
          ModecomTablet:
            "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
          VoninoTablet:
            "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
          ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
          StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
          VodafoneTablet:
            "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
          EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
          RossMoorTablet:
            "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
          iMobileTablet: "i-mobile i-note",
          TolinoTablet: "tolino tab [0-9.]+|tolino shine",
          AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
          AMPETablet: "Android.* A78 ",
          SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
          TecnoTablet: "TECNO P9|TECNO DP8D",
          JXDTablet:
            "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
          iJoyTablet:
            "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
          FX2Tablet: "FX2 PAD7|FX2 PAD10",
          XoroTablet:
            "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
          ViewsonicTablet:
            "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
          VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
          OdysTablet:
            "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
          CaptivaTablet: "CAPTIVA PAD",
          IconbitTablet:
            "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
          TeclastTablet:
            "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
          OndaTablet:
            "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
          JaytechTablet: "TPC-PA762",
          BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
          DigmaTablet:
            "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
          EvolioTablet:
            "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
          LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
          AocTablet:
            "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
          MpmanTablet:
            "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
          CelkonTablet:
            "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
          WolderTablet:
            "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
          MediacomTablet:
            "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
          MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
          NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
          NexoTablet:
            "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
          LeaderTablet:
            "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
          UbislateTablet: "UbiSlate[\\s]?7C",
          PocketBookTablet: "Pocketbook",
          KocasoTablet: "\\b(TB-1207)\\b",
          HisenseTablet: "\\b(F5281|E2371)\\b",
          Hudl: "Hudl HT7S3|Hudl 2",
          TelstraTablet: "T-Hub2",
          GenericTablet:
            "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
        },
        oss: {
          AndroidOS: "Android",
          BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
          PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
          SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
          WindowsMobileOS:
            "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
          WindowsPhoneOS:
            "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
          iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
          iPadOS: "CPU OS 13",
          MeeGoOS: "MeeGo",
          MaemoOS: "Maemo",
          JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
          webOS: "webOS|hpwOS",
          badaOS: "\\bBada\\b",
          BREWOS: "BREW",
        },
        uas: {
          Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
          Dolfin: "\\bDolfin\\b",
          Opera:
            "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
          Skyfire: "Skyfire",
          Edge: "Mobile Safari/[.0-9]* Edge",
          IE: "IEMobile|MSIEMobile",
          Firefox:
            "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
          Bolt: "bolt",
          TeaShark: "teashark",
          Blazer: "Blazer",
          Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
          WeChat: "\\bMicroMessenger\\b",
          UCBrowser: "UC.*Browser|UCWEB",
          baiduboxapp: "baiduboxapp",
          baidubrowser: "baidubrowser",
          DiigoBrowser: "DiigoBrowser",
          Mercury: "\\bMercury\\b",
          ObigoBrowser: "Obigo",
          NetFront: "NF-Browser",
          GenericBrowser:
            "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
          PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
        },
        props: {
          Mobile: "Mobile/[VER]",
          Build: "Build/[VER]",
          Version: "Version/[VER]",
          VendorID: "VendorID/[VER]",
          iPad: "iPad.*CPU[a-z ]+[VER]",
          iPhone: "iPhone.*CPU[a-z ]+[VER]",
          iPod: "iPod.*CPU[a-z ]+[VER]",
          Kindle: "Kindle/[VER]",
          Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
          Coast: ["Coast/[VER]"],
          Dolfin: "Dolfin/[VER]",
          Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
          Fennec: "Fennec/[VER]",
          Edge: "Edge/[VER]",
          IE: [
            "IEMobile/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident/[0-9.]+;.*rv:[VER]",
          ],
          NetFront: "NetFront/[VER]",
          NokiaBrowser: "NokiaBrowser/[VER]",
          Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
          "Opera Mini": "Opera Mini/[VER]",
          "Opera Mobi": "Version/[VER]",
          UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
          MQQBrowser: "MQQBrowser/[VER]",
          MicroMessenger: "MicroMessenger/[VER]",
          baiduboxapp: "baiduboxapp/[VER]",
          baidubrowser: "baidubrowser/[VER]",
          SamsungBrowser: "SamsungBrowser/[VER]",
          Iron: "Iron/[VER]",
          Safari: ["Version/[VER]", "Safari/[VER]"],
          Skyfire: "Skyfire/[VER]",
          Tizen: "Tizen/[VER]",
          Webkit: "webkit[ /][VER]",
          PaleMoon: "PaleMoon/[VER]",
          Gecko: "Gecko/[VER]",
          Trident: "Trident/[VER]",
          Presto: "Presto/[VER]",
          Goanna: "Goanna/[VER]",
          iOS: " \\bi?OS\\b [VER][ ;]{1}",
          Android: "Android [VER]",
          BlackBerry: [
            "BlackBerry[\\w]+/[VER]",
            "BlackBerry.*Version/[VER]",
            "Version/[VER]",
          ],
          BREW: "BREW [VER]",
          Java: "Java/[VER]",
          "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
          "Windows Phone": "Windows Phone [VER]",
          "Windows CE": "Windows CE/[VER]",
          "Windows NT": "Windows NT [VER]",
          Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
          webOS: ["webOS/[VER]", "hpwOS/[VER];"],
        },
        utils: {
          Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
          MobileBot:
            "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
          DesktopMode: "WPDesktop",
          TV: "SonyDTV|HbbTV",
          WebKit: "(webkit)[ /]([\\w.]+)",
          Console:
            "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
          Watch: "SM-V700",
        },
      },
      detectMobileBrowsers: {
        fullPattern:
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern:
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i,
      },
    };
    var BO = Object.prototype.hasOwnProperty;
    Br.FALLBACK_PHONE = "UnknownPhone";
    Br.FALLBACK_TABLET = "UnknownTablet";
    Br.FALLBACK_MOBILE = "UnknownMobile";
    var BY =
      "isArray" in Array
        ? Array.isArray
        : function (Bb) {
            return Object.prototype.toString.call(Bb) === "[object Array]";
          };
    var BS = Br.mobileDetectRules;
    for (BH in BS.props) {
      if (BO.call(BS.props, BH)) {
        Bq = BS.props[BH];
        Be = (Bq = BY(Bq) ? Bq : [Bq]).length;
        Bp = 0;
        for (; Bp < Be; ++Bp) {
          if ((Bx = (Bw = Bq[Bp]).indexOf("[VER]")) >= 0) {
            Bw = Bw.substring(0, Bx) + "([\\w._\\+]+)" + Bw.substring(Bx + 5);
          }
          Bq[Bp] = new RegExp(Bw, "i");
        }
        BS.props[BH] = Bq;
      }
    }
    BJ(BS.oss);
    BJ(BS.phones);
    BJ(BS.tablets);
    BJ(BS.uas);
    BJ(BS.utils);
    BS.oss0 = {
      WindowsPhoneOS: BS.oss.WindowsPhoneOS,
      WindowsMobileOS: BS.oss.WindowsMobileOS,
    };
    Br.findMatch = function (Bb, BU) {
      for (var Bn in Bb) {
        if (BO.call(Bb, Bn) && Bb[Bn].test(BU)) {
          return Bn;
        }
      }
      return null;
    };
    Br.findMatches = function (Bb, BU) {
      var Bn;
      var BK = [];
      for (Bn in Bb) {
        if (BO.call(Bb, Bn) && Bb[Bn].test(BU)) {
          BK.push(Bn);
        }
      }
      return BK;
    };
    Br.getVersionStr = function (Bb, BU) {
      var Bn;
      var BK;
      var Bf;
      var Bo;
      var BD = Br.mobileDetectRules.props;
      if (BO.call(BD, Bb)) {
        Bf = (Bn = BD[Bb]).length;
        BK = 0;
        for (; BK < Bf; ++BK) {
          if ((Bo = Bn[BK].exec(BU)) !== null) {
            return Bo[1];
          }
        }
      }
      return null;
    };
    Br.getVersion = function (Bb, BU) {
      Bb = Br.getVersionStr(Bb, BU);
      if (Bb) {
        return Br.prepareVersionNo(Bb);
      } else {
        return NaN;
      }
    };
    Br.prepareVersionNo = function (Bb) {
      var BU = Bb.split(/[a-z._ \/\-]/i);
      if (BU.length === 1) {
        Bb = BU[0];
      }
      if (BU.length > 1) {
        Bb = BU[0] + ".";
        BU.shift();
        Bb += BU.join("");
      }
      return Number(Bb);
    };
    Br.isMobileFallback = function (Bb) {
      return (
        Br.detectMobileBrowsers.fullPattern.test(Bb) ||
        Br.detectMobileBrowsers.shortPattern.test(Bb.substr(0, 4))
      );
    };
    Br.isTabletFallback = function (Bb) {
      return Br.detectMobileBrowsers.tabletPattern.test(Bb);
    };
    Br.prepareDetectionCache = function (Bb, BU, Bn) {
      var BK;
      if (Bb.mobile === B9) {
        if ((BK = Br.findMatch(Br.mobileDetectRules.tablets, BU))) {
          Bb.mobile = Bb.tablet = BK;
          Bb.phone = null;
          return;
        } else if ((BK = Br.findMatch(Br.mobileDetectRules.phones, BU))) {
          Bb.mobile = Bb.phone = BK;
          Bb.tablet = null;
          return;
        } else {
          if (Br.isMobileFallback(BU)) {
            if ((BK = Bh.isPhoneSized(Bn)) === B9) {
              Bb.mobile = Br.FALLBACK_MOBILE;
              Bb.tablet = Bb.phone = null;
            } else if (BK) {
              Bb.mobile = Bb.phone = Br.FALLBACK_PHONE;
              Bb.tablet = null;
            } else {
              Bb.mobile = Bb.tablet = Br.FALLBACK_TABLET;
              Bb.phone = null;
            }
          } else if (Br.isTabletFallback(BU)) {
            Bb.mobile = Bb.tablet = Br.FALLBACK_TABLET;
            Bb.phone = null;
          } else {
            Bb.mobile = Bb.tablet = Bb.phone = null;
          }
          return;
        }
      }
    };
    Br.mobileGrade = function (Bb) {
      var BU = Bb.mobile() !== null;
      if (
        (Bb.os("iOS") && Bb.version("iPad") >= 4.3) ||
        (Bb.os("iOS") && Bb.version("iPhone") >= 3.1) ||
        (Bb.os("iOS") && Bb.version("iPod") >= 3.1) ||
        (Bb.version("Android") > 2.1 && Bb.is("Webkit")) ||
        Bb.version("Windows Phone OS") >= 7 ||
        (Bb.is("BlackBerry") && Bb.version("BlackBerry") >= 6) ||
        Bb.match("Playbook.*Tablet") ||
        (Bb.version("webOS") >= 1.4 && Bb.match("Palm|Pre|Pixi")) ||
        Bb.match("hp.*TouchPad") ||
        (Bb.is("Firefox") && Bb.version("Firefox") >= 12) ||
        (Bb.is("Chrome") && Bb.is("AndroidOS") && Bb.version("Android") >= 4) ||
        (Bb.is("Skyfire") &&
          Bb.version("Skyfire") >= 4.1 &&
          Bb.is("AndroidOS") &&
          Bb.version("Android") >= 2.3) ||
        (Bb.is("Opera") &&
          Bb.version("Opera Mobi") > 11 &&
          Bb.is("AndroidOS")) ||
        Bb.is("MeeGoOS") ||
        Bb.is("Tizen") ||
        (Bb.is("Dolfin") && Bb.version("Bada") >= 2) ||
        ((Bb.is("UC Browser") || Bb.is("Dolfin")) &&
          Bb.version("Android") >= 2.3) ||
        Bb.match("Kindle Fire") ||
        (Bb.is("Kindle") && Bb.version("Kindle") >= 3) ||
        (Bb.is("AndroidOS") && Bb.is("NookTablet")) ||
        (Bb.version("Chrome") >= 11 && !BU) ||
        (Bb.version("Safari") >= 5 && !BU) ||
        (Bb.version("Firefox") >= 4 && !BU) ||
        (Bb.version("MSIE") >= 7 && !BU) ||
        (Bb.version("Opera") >= 10 && !BU)
      ) {
        return "A";
      } else if (
        (Bb.os("iOS") && Bb.version("iPad") < 4.3) ||
        (Bb.os("iOS") && Bb.version("iPhone") < 3.1) ||
        (Bb.os("iOS") && Bb.version("iPod") < 3.1) ||
        (Bb.is("Blackberry") &&
          Bb.version("BlackBerry") >= 5 &&
          Bb.version("BlackBerry") < 6) ||
        (Bb.version("Opera Mini") >= 5 &&
          Bb.version("Opera Mini") <= 6.5 &&
          (Bb.version("Android") >= 2.3 || Bb.is("iOS"))) ||
        Bb.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
        (Bb.version("Opera Mobi") >= 11 && Bb.is("SymbianOS"))
      ) {
        return "B";
      } else {
        if (
          !(Bb.version("BlackBerry") < 5) &&
          !Bb.match("MSIEMobile|Windows CE.*Mobile")
        ) {
          Bb.version("Windows Mobile");
        }
        return "C";
      }
    };
    Br.detectOS = function (Bb) {
      return (
        Br.findMatch(Br.mobileDetectRules.oss0, Bb) ||
        Br.findMatch(Br.mobileDetectRules.oss, Bb)
      );
    };
    Br.getDeviceSmallerSide = function () {
      if (window.screen.width < window.screen.height) {
        return window.screen.width;
      } else {
        return window.screen.height;
      }
    };
    Bh.prototype = {
      constructor: Bh,
      mobile: function () {
        Br.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },
      phone: function () {
        Br.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },
      tablet: function () {
        Br.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },
      userAgent: function () {
        if (this._cache.userAgent === B9) {
          this._cache.userAgent = Br.findMatch(
            Br.mobileDetectRules.uas,
            this.ua
          );
        }
        return this._cache.userAgent;
      },
      userAgents: function () {
        if (this._cache.userAgents === B9) {
          this._cache.userAgents = Br.findMatches(
            Br.mobileDetectRules.uas,
            this.ua
          );
        }
        return this._cache.userAgents;
      },
      os: function () {
        if (this._cache.os === B9) {
          this._cache.os = Br.detectOS(this.ua);
        }
        return this._cache.os;
      },
      version: function (Bb) {
        return Br.getVersion(Bb, this.ua);
      },
      versionStr: function (Bb) {
        return Br.getVersionStr(Bb, this.ua);
      },
      is: function (Bb) {
        return (
          Bm(this.userAgents(), Bb) ||
          BB(Bb, this.os()) ||
          BB(Bb, this.phone()) ||
          BB(Bb, this.tablet()) ||
          Bm(Br.findMatches(Br.mobileDetectRules.utils, this.ua), Bb)
        );
      },
      match: function (Bb) {
        return (Bb = Bb instanceof RegExp ? Bb : new RegExp(Bb, "i")).test(
          this.ua
        );
      },
      isPhoneSized: function (Bb) {
        return Bh.isPhoneSized(Bb || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        if (this._cache.grade === B9) {
          this._cache.grade = Br.mobileGrade(this);
        }
        return this._cache.grade;
      },
    };
    if (typeof window != "undefined" && window.screen) {
      Bh.isPhoneSized = function (Bb) {
        if (Bb < 0) {
          return B9;
        } else {
          return Br.getDeviceSmallerSide() <= Bb;
        }
      };
    } else {
      Bh.isPhoneSized = function () {};
    }
    Bh._impl = Br;
    Bh.version = "1.4.4 2019-09-21";
    return Bh;
  });
})();
(function (B9, BB) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = BB();
  } else if (typeof define == "function" && define.amd) {
    define([], BB);
  } else if (typeof exports == "object") {
    exports.devtoolsDetector = BB();
  } else {
    B9.devtoolsDetector = BB();
  }
})(typeof self != "undefined" ? self : this, function () {
  BB = [
    function (BJ, Bh, BH) {
      "use strict";

      (function (Bq) {
        Bh.c = function () {
          return (typeof performance != "undefined" ? performance : Date).now();
        };
        Bh.b = function (Be) {
          var Bx = (Be = Be === undefined ? {} : Be).includes;
          var Be = Be.excludes;
          var Be = Be === undefined ? [] : Be;
          var Br = false;
          var BO = false;
          for (
            var BY = 0, BS = Bx === undefined ? [] : Bx;
            BY < BS.length;
            BY++
          ) {
            if (BS[BY] === true) {
              Br = true;
              break;
            }
          }
          for (var Bb = 0, BU = Be; Bb < BU.length; Bb++) {
            if (BU[Bb] === true) {
              BO = true;
              break;
            }
          }
          return Br && !BO;
        };
        Bh.d = function (Be, Bx, Br) {
          Be = Bp.a[Be];
          return Be !== undefined && Object(Bw.compare)(Be, Bx, Br);
        };
        Bh.a = function () {
          if (typeof self != "undefined") {
            return self;
          } else if (typeof window != "undefined") {
            return window;
          } else if (Bq !== undefined) {
            return Bq;
          } else {
            return this;
          }
        };
        var Bw = BH(11);
        BH.n(Bw);
        var Bp = BH(5);
      }).call(Bh, BH(10));
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "c", function () {
        return Bw;
      });
      BH.d(Bh, "d", function () {
        return Bp;
      });
      BH.d(Bh, "b", function () {
        return Be;
      });
      BH.d(Bh, "g", function () {
        return Bx;
      });
      BH.d(Bh, "e", function () {
        return Br;
      });
      BH.d(Bh, "a", function () {
        return BO;
      });
      BH.d(Bh, "f", function () {
        return BY;
      });
      var Bq;
      var Bh = BH(3);
      var BH = BH(0);
      var BH = Object(BH.a)();
      var Bw =
        "InstallTrigger" in ((BH == null ? undefined : BH.window) || {}) ||
        /firefox/i.test(Bh.b);
      var Bp = /trident/i.test(Bh.b) || /msie/i.test(Bh.b);
      var Be = /edge/i.test(Bh.b);
      var Bx = /webkit/i.test(Bh.b) && !Be;
      var Br = /IqiyiApp/.test(Bh.b);
      var BO =
        ((Bq = BH == null ? undefined : BH.window) == null
          ? undefined
          : Bq.chrome) !== undefined ||
        /chrome/i.test(Bh.b) ||
        /CriOS/i.test(Bh.b);
      var BY =
        (
          ((BH =
            (Bq = BH == null ? undefined : BH.window) == null
              ? undefined
              : Bq.safari) == null
            ? undefined
            : BH.pushNotification) || false
        ).toString() === "[object SafariRemoteNotification]" ||
        (/safari/i.test(Bh.b) && !BO);
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "b", function () {
        return Bp;
      });
      BH.d(Bh, "c", function () {
        return Be;
      });
      BH.d(Bh, "a", function () {
        return Bx;
      });
      var Bq = BH(1);
      function Bw(Br) {
        if (console) {
          if (!Bq.d && !Bq.b) {
            return console[Br];
          }
          if (Br === "log" || Br === "clear") {
            return function () {
              var BO = [];
              for (var BY = 0; BY < arguments.length; BY++) {
                BO[BY] = arguments[BY];
              }
              console[Br].apply(console, BO);
            };
          }
        }
        return function () {
          for (var BO = 0; BO < arguments.length; BO++) {
            BO;
            0;
          }
        };
      }
      var Bp = Bw("log");
      var Be = Bw("table");
      var Bx = Bw("clear");
    },
    function (BJ, Bh, BH) {
      "use strict";

      Bh.a = function () {
        var Bp;
        var Be = [];
        for (var Bx = 0; Bx < arguments.length; Bx++) {
          Be[Bx] = arguments[Bx];
        }
        if (Bq != null && Bq.document) {
          return (Bp = Bq.document).createElement.apply(Bp, Be);
        } else {
          return {};
        }
      };
      BH.d(Bh, "b", function () {
        return Bw;
      });
      var Bh = BH(0);
      var Bq = Object(Bh.a)();
      var Bw =
        ((BH = Bq == null ? undefined : Bq.navigator) == null
          ? undefined
          : BH.userAgent) || "xxxxx";
    },
    function (BJ, Bh, BH) {
      "use strict";

      Object.defineProperty(Bh, "__esModule", {
        value: true,
      });
      Bh.addListener = function (Bb) {
        BS.addListener(Bb);
      };
      Bh.removeListener = function (Bb) {
        BS.removeListener(Bb);
      };
      Bh.isLaunch = function () {
        return BS.isLaunch();
      };
      Bh.launch = function () {
        BS.launch();
      };
      Bh.stop = function () {
        BS.stop();
      };
      Bh.setDetectDelay = function (Bb) {
        BS.setDetectDelay(Bb);
      };
      var Bq = BH(7);
      var Bw = BH(8);
      BH.d(Bh, "DevtoolsDetector", function () {
        return Bq.a;
      });
      BH.d(Bh, "checkers", function () {
        return Bw;
      });
      var Bp = BH(0);
      BH.d(Bh, "match", function () {
        return Bp.b;
      });
      BH.d(Bh, "specificVersionMatch", function () {
        return Bp.d;
      });
      var Be = BH(1);
      BH.d(Bh, "isFirefox", function () {
        return Be.c;
      });
      BH.d(Bh, "isIE", function () {
        return Be.d;
      });
      BH.d(Bh, "isEdge", function () {
        return Be.b;
      });
      BH.d(Bh, "isWebkit", function () {
        return Be.g;
      });
      BH.d(Bh, "isIqiyiApp", function () {
        return Be.e;
      });
      BH.d(Bh, "isChrome", function () {
        return Be.a;
      });
      BH.d(Bh, "isSafari", function () {
        return Be.f;
      });
      var Bx = BH(2);
      BH.d(Bh, "log", function () {
        return Bx.b;
      });
      BH.d(Bh, "table", function () {
        return Bx.c;
      });
      BH.d(Bh, "clear", function () {
        return Bx.a;
      });
      var Br = BH(19);
      BH.d(Bh, "isMobile", function () {
        return Br.a;
      });
      var BO = BH(5);
      BH.d(Bh, "versionMap", function () {
        return BO.a;
      });
      var BY = BH(6);
      BH.d(Bh, "isMac", function () {
        return BY.d;
      });
      BH.d(Bh, "isIpad", function () {
        return BY.b;
      });
      BH.d(Bh, "isIphone", function () {
        return BY.c;
      });
      BH.d(Bh, "isAndroid", function () {
        return BY.a;
      });
      BH.d(Bh, "isWindows", function () {
        return BY.e;
      });
      var BS = new Bq.a({
        checkers: [
          Bw.erudaChecker,
          Bw.elementIdChecker,
          Bw.regToStringChecker,
          Bw.functionToStringChecker,
          Bw.depRegToStringChecker,
          Bw.dateToStringChecker,
          Bw.performanceChecker,
          Bw.debuggerChecker,
        ],
      });
      Bh.default = BS;
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return Bq;
      });
      var Bq = {};
      for (
        var Bw = 0, Bp = (BH(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || [];
        Bw < Bp.length;
        Bw++
      ) {
        var Be = Bp[Bw].split("/");
        var Bx = Be[0];
        var Be = Be[1];
        Bq[Bx] = Be;
      }
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "d", function () {
        return Bq;
      });
      BH.d(Bh, "b", function () {
        return Bw;
      });
      BH.d(Bh, "c", function () {
        return Bp;
      });
      BH.d(Bh, "a", function () {
        return Be;
      });
      BH.d(Bh, "e", function () {
        return Bx;
      });
      var Bh = BH(3);
      var Bq = /macintosh/i.test(Bh.b);
      var Bw = /ipad/i.test(Bh.b) || (Bq && navigator.maxTouchPoints > 1);
      var Bp = /iphone/i.test(Bh.b);
      var Be = /android/i.test(Bh.b);
      var Bx = /windows/i.test(Bh.b);
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return Bp;
      });
      var Bq =
        (this && this.__awaiter) ||
        function (Bx, Br, BO, BY) {
          return new (BO = BO || Promise)(function (BS, Bb) {
            function BU(Bf) {
              try {
                BK(BY.next(Bf));
              } catch (Bo) {
                Bb(Bo);
              }
            }
            function Bn(Bf) {
              try {
                BK(BY.throw(Bf));
              } catch (Bo) {
                Bb(Bo);
              }
            }
            function BK(Bf) {
              var Bo;
              if (Bf.done) {
                BS(Bf.value);
              } else {
                ((Bo = Bf.value) instanceof BO
                  ? Bo
                  : new BO(function (BD) {
                      BD(Bo);
                    })
                ).then(BU, Bn);
              }
            }
            BK((BY = BY.apply(Bx, Br || [])).next());
          });
        };
      var Bw =
        (this && this.__generator) ||
        function (Bx, Br) {
          var BO;
          var BY;
          var BS;
          var Bb = {
            label: 0,
            sent: function () {
              if (BS[0] & 1) {
                throw BS[1];
              }
              return BS[1];
            },
            trys: [],
            ops: [],
          };
          var BU = {
            next: Bn(0),
            throw: Bn(1),
            return: Bn(2),
          };
          if (typeof Symbol == "function") {
            BU[Symbol.iterator] = function () {
              return this;
            };
          }
          return BU;
          function Bn(BK) {
            return function (Bf) {
              var Bo = [BK, Bf];
              if (BO) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bb) {
                try {
                  BO = 1;
                  if (
                    BY &&
                    (BS =
                      Bo[0] & 2
                        ? BY.return
                        : Bo[0]
                        ? BY.throw || ((BS = BY.return) && BS.call(BY), 0)
                        : BY.next) &&
                    !(BS = BS.call(BY, Bo[1])).done
                  ) {
                    return BS;
                  }
                  BY = 0;
                  switch ((Bo = BS ? [Bo[0] & 2, BS.value] : Bo)[0]) {
                    case 0:
                    case 1:
                      BS = Bo;
                      break;
                    case 4:
                      Bb.label++;
                      return {
                        value: Bo[1],
                        done: false,
                      };
                    case 5:
                      Bb.label++;
                      BY = Bo[1];
                      Bo = [0];
                      continue;
                    case 7:
                      Bo = Bb.ops.pop();
                      Bb.trys.pop();
                      continue;
                    default:
                      if (
                        !(BS =
                          (BS = Bb.trys).length > 0 && BS[BS.length - 1]) &&
                        (Bo[0] === 6 || Bo[0] === 2)
                      ) {
                        Bb = 0;
                        continue;
                      }
                      if (
                        Bo[0] === 3 &&
                        (!BS || (Bo[1] > BS[0] && Bo[1] < BS[3]))
                      ) {
                        Bb.label = Bo[1];
                      } else if (Bo[0] === 6 && Bb.label < BS[1]) {
                        Bb.label = BS[1];
                        BS = Bo;
                      } else {
                        if (!BS || !(Bb.label < BS[2])) {
                          if (BS[2]) {
                            Bb.ops.pop();
                          }
                          Bb.trys.pop();
                          continue;
                        }
                        Bb.label = BS[2];
                        Bb.ops.push(Bo);
                      }
                  }
                  Bo = Br.call(Bx, Bb);
                } catch (BD) {
                  Bo = [6, BD];
                  BY = 0;
                } finally {
                  BO = BS = 0;
                }
              }
              if (Bo[0] & 5) {
                throw Bo[1];
              }
              return {
                value: Bo[0] ? Bo[1] : undefined,
                done: true,
              };
            };
          }
        };
      Be.prototype.launch = function () {
        if (this._detectLoopDelay <= 0) {
          this.setDetectDelay(500);
        }
        if (this._detectLoopStopped) {
          this._detectLoopStopped = false;
          this._detectLoop();
        }
      };
      Be.prototype.stop = function () {
        if (!this._detectLoopStopped) {
          this._detectLoopStopped = true;
          clearTimeout(this._timer);
        }
      };
      Be.prototype.isLaunch = function () {
        return !this._detectLoopStopped;
      };
      Be.prototype.setDetectDelay = function (Bx) {
        this._detectLoopDelay = Bx;
      };
      Be.prototype.addListener = function (Bx) {
        this._listeners.push(Bx);
      };
      Be.prototype.removeListener = function (Bx) {
        this._listeners = this._listeners.filter(function (Br) {
          return Br !== Bx;
        });
      };
      Be.prototype._broadcast = function (Bx) {
        for (var Br = 0, BO = this._listeners; Br < BO.length; Br++) {
          var BY = BO[Br];
          try {
            BY(Bx.isOpen, Bx);
          } catch (BS) {}
        }
      };
      Be.prototype._detectLoop = function () {
        return Bq(this, undefined, undefined, function () {
          var Bx;
          var Br;
          var BO;
          var BY;
          var BS;
          var Bb = this;
          return Bw(this, function (BU) {
            switch (BU.label) {
              case 0:
                Bx = false;
                Br = "";
                BO = 0;
                BY = this._checkers;
                BU.label = 1;
              case 1:
                if (BO < BY.length) {
                  return [4, (BS = BY[BO]).isEnable()];
                } else {
                  return [3, 6];
                }
              case 2:
                if (BU.sent()) {
                  Br = BS.name;
                  return [4, BS.isOpen()];
                } else {
                  return [3, 4];
                }
              case 3:
                Bx = BU.sent();
                BU.label = 4;
              case 4:
                if (Bx) {
                  return [3, 6];
                }
                BU.label = 5;
              case 5:
                BO++;
                return [3, 1];
              case 6:
                if (Bx != this._isOpen) {
                  this._isOpen = Bx;
                  this._broadcast({
                    isOpen: Bx,
                    checkerName: Br,
                  });
                }
                if (this._detectLoopDelay > 0) {
                  this._timer = setTimeout(function () {
                    return Bb._detectLoop();
                  }, this._detectLoopDelay);
                } else {
                  this.stop();
                }
                return [2];
            }
          });
        });
      };
      var Bp = Be;
      function Be(Bx) {
        Bx = Bx.checkers;
        this._listeners = [];
        this._isOpen = false;
        this._detectLoopStopped = true;
        this._detectLoopDelay = 500;
        this._checkers = Bx.slice();
      }
    },
    function (BJ, Bh, BH) {
      "use strict";

      Object.defineProperty(Bh, "__esModule", {
        value: true,
      });
      var Bq = BH(9);
      BH.d(Bh, "depRegToStringChecker", function () {
        return Bq.a;
      });
      var Bw = BH(12);
      BH.d(Bh, "elementIdChecker", function () {
        return Bw.a;
      });
      var Bp = BH(13);
      BH.d(Bh, "functionToStringChecker", function () {
        return Bp.a;
      });
      var Be = BH(14);
      BH.d(Bh, "regToStringChecker", function () {
        return Be.a;
      });
      var Bx = BH(15);
      BH.d(Bh, "debuggerChecker", function () {
        return Bx.a;
      });
      var Br = BH(16);
      BH.d(Bh, "dateToStringChecker", function () {
        return Br.a;
      });
      var BO = BH(17);
      BH.d(Bh, "performanceChecker", function () {
        return BO.a;
      });
      var BY = BH(18);
      BH.d(Bh, "erudaChecker", function () {
        return BY.a;
      });
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return BY;
      });
      var Bq = BH(1);
      var Bw = BH(2);
      var Bp = BH(0);
      var Be =
        (this && this.__awaiter) ||
        function (BS, Bb, BU, Bn) {
          return new (BU = BU || Promise)(function (BK, Bf) {
            function Bo(Bk) {
              try {
                BN(Bn.next(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BD(Bk) {
              try {
                BN(Bn.throw(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BN(Bk) {
              var BL;
              if (Bk.done) {
                BK(Bk.value);
              } else {
                ((BL = Bk.value) instanceof BU
                  ? BL
                  : new BU(function (Bg) {
                      Bg(BL);
                    })
                ).then(Bo, BD);
              }
            }
            BN((Bn = Bn.apply(BS, Bb || [])).next());
          });
        };
      var Bx =
        (this && this.__generator) ||
        function (BS, Bb) {
          var BU;
          var Bn;
          var BK;
          var Bf = {
            label: 0,
            sent: function () {
              if (BK[0] & 1) {
                throw BK[1];
              }
              return BK[1];
            },
            trys: [],
            ops: [],
          };
          var Bo = {
            next: BD(0),
            throw: BD(1),
            return: BD(2),
          };
          if (typeof Symbol == "function") {
            Bo[Symbol.iterator] = function () {
              return this;
            };
          }
          return Bo;
          function BD(BN) {
            return function (Bk) {
              var BL = [BN, Bk];
              if (BU) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bf) {
                try {
                  BU = 1;
                  if (
                    Bn &&
                    (BK =
                      BL[0] & 2
                        ? Bn.return
                        : BL[0]
                        ? Bn.throw || ((BK = Bn.return) && BK.call(Bn), 0)
                        : Bn.next) &&
                    !(BK = BK.call(Bn, BL[1])).done
                  ) {
                    return BK;
                  }
                  Bn = 0;
                  switch ((BL = BK ? [BL[0] & 2, BK.value] : BL)[0]) {
                    case 0:
                    case 1:
                      BK = BL;
                      break;
                    case 4:
                      Bf.label++;
                      return {
                        value: BL[1],
                        done: false,
                      };
                    case 5:
                      Bf.label++;
                      Bn = BL[1];
                      BL = [0];
                      continue;
                    case 7:
                      BL = Bf.ops.pop();
                      Bf.trys.pop();
                      continue;
                    default:
                      if (
                        !(BK =
                          (BK = Bf.trys).length > 0 && BK[BK.length - 1]) &&
                        (BL[0] === 6 || BL[0] === 2)
                      ) {
                        Bf = 0;
                        continue;
                      }
                      if (
                        BL[0] === 3 &&
                        (!BK || (BL[1] > BK[0] && BL[1] < BK[3]))
                      ) {
                        Bf.label = BL[1];
                      } else if (BL[0] === 6 && Bf.label < BK[1]) {
                        Bf.label = BK[1];
                        BK = BL;
                      } else {
                        if (!BK || !(Bf.label < BK[2])) {
                          if (BK[2]) {
                            Bf.ops.pop();
                          }
                          Bf.trys.pop();
                          continue;
                        }
                        Bf.label = BK[2];
                        Bf.ops.push(BL);
                      }
                  }
                  BL = Bb.call(BS, Bf);
                } catch (Bg) {
                  BL = [6, Bg];
                  Bn = 0;
                } finally {
                  BU = BK = 0;
                }
              }
              if (BL[0] & 5) {
                throw BL[1];
              }
              return {
                value: BL[0] ? BL[1] : undefined,
                done: true,
              };
            };
          }
        };
      var Br = / /;
      var BO = false;
      Br.toString = function () {
        BO = true;
        return BY.name;
      };
      var BY = {
        name: "dep-reg-to-string",
        isOpen: function () {
          return Be(this, undefined, undefined, function () {
            return Bx(this, function (BS) {
              BO = false;
              Object(Bw.c)({
                dep: Br,
              });
              Object(Bw.a)();
              return [2, BO];
            });
          });
        },
        isEnable: function () {
          return Be(this, undefined, undefined, function () {
            return Bx(this, function (BS) {
              return [
                2,
                Object(Bp.b)({
                  includes: [true],
                  excludes: [Bq.c, Bq.d],
                }),
              ];
            });
          });
        },
      };
    },
    function (BJ, Bh) {
      var BH = (function () {
        return this;
      })();
      try {
        BH = BH || Function("return this")() || (0, eval)("this");
      } catch (Bq) {
        if (typeof window == "object") {
          BH = window;
        }
      }
      BJ.exports = BH;
    },
    function (BJ, Bh, BH) {
      var Bq;
      if (
        (Bh =
          typeof (Bq = function () {
            var Bw =
              /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
            function Bp(BS) {
              var Bb = BS.replace(/^v/, "").replace(/\+.*$/, "");
              var BU = (function (BK, Bf) {
                if (BK.indexOf(Bf) === -1) {
                  return BK.length;
                } else {
                  return BK.indexOf(Bf);
                }
              })(Bb, "-");
              var Bn = Bb.substring(0, BU).split(".");
              Bn.push(Bb.substring(BU + 1));
              return Bn;
            }
            function Be(BS) {
              if (isNaN(Number(BS))) {
                return BS;
              } else {
                return Number(BS);
              }
            }
            function Bx(BS) {
              if (typeof BS != "string") {
                throw new TypeError("Invalid argument expected string");
              }
              if (!Bw.test(BS)) {
                throw new Error(
                  "Invalid argument not valid semver ('" + BS + "' received)"
                );
              }
            }
            function Br(BS, Bb) {
              [BS, Bb].forEach(Bx);
              for (
                var BU = Bp(BS), Bn = Bp(Bb), BK = 0;
                BK < Math.max(BU.length - 1, Bn.length - 1);
                BK++
              ) {
                var Bf = parseInt(BU[BK] || 0, 10);
                var Bo = parseInt(Bn[BK] || 0, 10);
                if (Bf > Bo) {
                  return 1;
                }
                if (Bo > Bf) {
                  return -1;
                }
              }
              var BD = BU[BU.length - 1];
              var BN = Bn[Bn.length - 1];
              if (BD && BN) {
                var Bk = BD.split(".").map(Be);
                var BL = BN.split(".").map(Be);
                for (BK = 0; BK < Math.max(Bk.length, BL.length); BK++) {
                  if (
                    Bk[BK] === undefined ||
                    (typeof BL[BK] == "string" && typeof Bk[BK] == "number")
                  ) {
                    return -1;
                  }
                  if (
                    BL[BK] === undefined ||
                    (typeof Bk[BK] == "string" && typeof BL[BK] == "number")
                  ) {
                    return 1;
                  }
                  if (Bk[BK] > BL[BK]) {
                    return 1;
                  }
                  if (BL[BK] > Bk[BK]) {
                    return -1;
                  }
                }
              } else if (BD || BN) {
                if (BD) {
                  return -1;
                } else {
                  return 1;
                }
              }
              return 0;
            }
            var BO = [">", ">=", "=", "<", "<="];
            var BY = {
              ">": [1],
              ">=": [0, 1],
              "=": [0],
              "<=": [-1, 0],
              "<": [-1],
            };
            Br.validate = function (BS) {
              return typeof BS == "string" && Bw.test(BS);
            };
            Br.compare = function (BS, Bb, BU) {
              (function (BK) {
                if (typeof BK != "string") {
                  throw new TypeError(
                    "Invalid operator type, expected string but got " +
                      typeof BK
                  );
                }
                if (BO.indexOf(BK) === -1) {
                  throw new TypeError(
                    "Invalid operator, expected one of " + BO.join("|")
                  );
                }
              })(BU);
              var Bn = Br(BS, Bb);
              return BY[BU].indexOf(Bn) > -1;
            };
            return Br;
          }) == "function"
            ? Bq.apply(Bh, [])
            : Bq) !== undefined
      ) {
        BJ.exports = Bh;
      }
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return BY;
      });
      var Bq = BH(1);
      var Bw = BH(2);
      var Bp = BH(0);
      var Bh = BH(3);
      var Be =
        (this && this.__awaiter) ||
        function (BS, Bb, BU, Bn) {
          return new (BU = BU || Promise)(function (BK, Bf) {
            function Bo(Bk) {
              try {
                BN(Bn.next(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BD(Bk) {
              try {
                BN(Bn.throw(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BN(Bk) {
              var BL;
              if (Bk.done) {
                BK(Bk.value);
              } else {
                ((BL = Bk.value) instanceof BU
                  ? BL
                  : new BU(function (Bg) {
                      Bg(BL);
                    })
                ).then(Bo, BD);
              }
            }
            BN((Bn = Bn.apply(BS, Bb || [])).next());
          });
        };
      var Bx =
        (this && this.__generator) ||
        function (BS, Bb) {
          var BU;
          var Bn;
          var BK;
          var Bf = {
            label: 0,
            sent: function () {
              if (BK[0] & 1) {
                throw BK[1];
              }
              return BK[1];
            },
            trys: [],
            ops: [],
          };
          var Bo = {
            next: BD(0),
            throw: BD(1),
            return: BD(2),
          };
          if (typeof Symbol == "function") {
            Bo[Symbol.iterator] = function () {
              return this;
            };
          }
          return Bo;
          function BD(BN) {
            return function (Bk) {
              var BL = [BN, Bk];
              if (BU) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bf) {
                try {
                  BU = 1;
                  if (
                    Bn &&
                    (BK =
                      BL[0] & 2
                        ? Bn.return
                        : BL[0]
                        ? Bn.throw || ((BK = Bn.return) && BK.call(Bn), 0)
                        : Bn.next) &&
                    !(BK = BK.call(Bn, BL[1])).done
                  ) {
                    return BK;
                  }
                  Bn = 0;
                  switch ((BL = BK ? [BL[0] & 2, BK.value] : BL)[0]) {
                    case 0:
                    case 1:
                      BK = BL;
                      break;
                    case 4:
                      Bf.label++;
                      return {
                        value: BL[1],
                        done: false,
                      };
                    case 5:
                      Bf.label++;
                      Bn = BL[1];
                      BL = [0];
                      continue;
                    case 7:
                      BL = Bf.ops.pop();
                      Bf.trys.pop();
                      continue;
                    default:
                      if (
                        !(BK =
                          (BK = Bf.trys).length > 0 && BK[BK.length - 1]) &&
                        (BL[0] === 6 || BL[0] === 2)
                      ) {
                        Bf = 0;
                        continue;
                      }
                      if (
                        BL[0] === 3 &&
                        (!BK || (BL[1] > BK[0] && BL[1] < BK[3]))
                      ) {
                        Bf.label = BL[1];
                      } else if (BL[0] === 6 && Bf.label < BK[1]) {
                        Bf.label = BK[1];
                        BK = BL;
                      } else {
                        if (!BK || !(Bf.label < BK[2])) {
                          if (BK[2]) {
                            Bf.ops.pop();
                          }
                          Bf.trys.pop();
                          continue;
                        }
                        Bf.label = BK[2];
                        Bf.ops.push(BL);
                      }
                  }
                  BL = Bb.call(BS, Bf);
                } catch (Bg) {
                  BL = [6, Bg];
                  Bn = 0;
                } finally {
                  BU = BK = 0;
                }
              }
              if (BL[0] & 5) {
                throw BL[1];
              }
              return {
                value: BL[0] ? BL[1] : undefined,
                done: true,
              };
            };
          }
        };
      var Br = Object(Bh.a)("div");
      var BO = false;
      Object.defineProperty(Br, "id", {
        get: function () {
          BO = true;
          return BY.name;
        },
        configurable: true,
      });
      var BY = {
        name: "element-id",
        isOpen: function () {
          return Be(this, undefined, undefined, function () {
            return Bx(this, function (BS) {
              BO = false;
              Object(Bw.b)(Br);
              Object(Bw.a)();
              return [2, BO];
            });
          });
        },
        isEnable: function () {
          return Be(this, undefined, undefined, function () {
            return Bx(this, function (BS) {
              return [
                2,
                Object(Bp.b)({
                  includes: [true],
                  excludes: [Bq.d, Bq.b, Bq.c],
                }),
              ];
            });
          });
        },
      };
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return BS;
      });
      var Bq = BH(1);
      var Bw = BH(2);
      var Bp = BH(6);
      var Be = BH(0);
      var Bx =
        (this && this.__awaiter) ||
        function (Bb, BU, Bn, BK) {
          return new (Bn = Bn || Promise)(function (Bf, Bo) {
            function BD(BL) {
              try {
                Bk(BK.next(BL));
              } catch (Bg) {
                Bo(Bg);
              }
            }
            function BN(BL) {
              try {
                Bk(BK.throw(BL));
              } catch (Bg) {
                Bo(Bg);
              }
            }
            function Bk(BL) {
              var Bg;
              if (BL.done) {
                Bf(BL.value);
              } else {
                ((Bg = BL.value) instanceof Bn
                  ? Bg
                  : new Bn(function (Ba) {
                      Ba(Bg);
                    })
                ).then(BD, BN);
              }
            }
            Bk((BK = BK.apply(Bb, BU || [])).next());
          });
        };
      var Br =
        (this && this.__generator) ||
        function (Bb, BU) {
          var Bn;
          var BK;
          var Bf;
          var Bo = {
            label: 0,
            sent: function () {
              if (Bf[0] & 1) {
                throw Bf[1];
              }
              return Bf[1];
            },
            trys: [],
            ops: [],
          };
          var BD = {
            next: BN(0),
            throw: BN(1),
            return: BN(2),
          };
          if (typeof Symbol == "function") {
            BD[Symbol.iterator] = function () {
              return this;
            };
          }
          return BD;
          function BN(Bk) {
            return function (BL) {
              var Bg = [Bk, BL];
              if (Bn) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bo) {
                try {
                  Bn = 1;
                  if (
                    BK &&
                    (Bf =
                      Bg[0] & 2
                        ? BK.return
                        : Bg[0]
                        ? BK.throw || ((Bf = BK.return) && Bf.call(BK), 0)
                        : BK.next) &&
                    !(Bf = Bf.call(BK, Bg[1])).done
                  ) {
                    return Bf;
                  }
                  BK = 0;
                  switch ((Bg = Bf ? [Bg[0] & 2, Bf.value] : Bg)[0]) {
                    case 0:
                    case 1:
                      Bf = Bg;
                      break;
                    case 4:
                      Bo.label++;
                      return {
                        value: Bg[1],
                        done: false,
                      };
                    case 5:
                      Bo.label++;
                      BK = Bg[1];
                      Bg = [0];
                      continue;
                    case 7:
                      Bg = Bo.ops.pop();
                      Bo.trys.pop();
                      continue;
                    default:
                      if (
                        !(Bf =
                          (Bf = Bo.trys).length > 0 && Bf[Bf.length - 1]) &&
                        (Bg[0] === 6 || Bg[0] === 2)
                      ) {
                        Bo = 0;
                        continue;
                      }
                      if (
                        Bg[0] === 3 &&
                        (!Bf || (Bg[1] > Bf[0] && Bg[1] < Bf[3]))
                      ) {
                        Bo.label = Bg[1];
                      } else if (Bg[0] === 6 && Bo.label < Bf[1]) {
                        Bo.label = Bf[1];
                        Bf = Bg;
                      } else {
                        if (!Bf || !(Bo.label < Bf[2])) {
                          if (Bf[2]) {
                            Bo.ops.pop();
                          }
                          Bo.trys.pop();
                          continue;
                        }
                        Bo.label = Bf[2];
                        Bo.ops.push(Bg);
                      }
                  }
                  Bg = BU.call(Bb, Bo);
                } catch (Ba) {
                  Bg = [6, Ba];
                  BK = 0;
                } finally {
                  Bn = Bf = 0;
                }
              }
              if (Bg[0] & 5) {
                throw Bg[1];
              }
              return {
                value: Bg[0] ? Bg[1] : undefined,
                done: true,
              };
            };
          }
        };
      function BO() {}
      var BY = 0;
      BO.toString = function () {
        BY++;
        return "";
      };
      var BS = {
        name: "function-to-string",
        isOpen: function () {
          return Bx(this, undefined, undefined, function () {
            return Br(this, function (Bb) {
              BY = 0;
              Object(Bw.b)(BO);
              Object(Bw.a)();
              return [2, BY === 2];
            });
          });
        },
        isEnable: function () {
          return Bx(this, undefined, undefined, function () {
            return Br(this, function (Bb) {
              return [
                2,
                Object(Be.b)({
                  includes: [true],
                  excludes: [Bq.e, Bq.c, (Bp.b || Bp.c) && Bq.a],
                }),
              ];
            });
          });
        },
      };
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return BY;
      });
      var Bq = BH(2);
      var Bw = BH(1);
      var Bp = BH(0);
      var Be =
        (this && this.__awaiter) ||
        function (BS, Bb, BU, Bn) {
          return new (BU = BU || Promise)(function (BK, Bf) {
            function Bo(Bk) {
              try {
                BN(Bn.next(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BD(Bk) {
              try {
                BN(Bn.throw(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BN(Bk) {
              var BL;
              if (Bk.done) {
                BK(Bk.value);
              } else {
                ((BL = Bk.value) instanceof BU
                  ? BL
                  : new BU(function (Bg) {
                      Bg(BL);
                    })
                ).then(Bo, BD);
              }
            }
            BN((Bn = Bn.apply(BS, Bb || [])).next());
          });
        };
      var Bx =
        (this && this.__generator) ||
        function (BS, Bb) {
          var BU;
          var Bn;
          var BK;
          var Bf = {
            label: 0,
            sent: function () {
              if (BK[0] & 1) {
                throw BK[1];
              }
              return BK[1];
            },
            trys: [],
            ops: [],
          };
          var Bo = {
            next: BD(0),
            throw: BD(1),
            return: BD(2),
          };
          if (typeof Symbol == "function") {
            Bo[Symbol.iterator] = function () {
              return this;
            };
          }
          return Bo;
          function BD(BN) {
            return function (Bk) {
              var BL = [BN, Bk];
              if (BU) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bf) {
                try {
                  BU = 1;
                  if (
                    Bn &&
                    (BK =
                      BL[0] & 2
                        ? Bn.return
                        : BL[0]
                        ? Bn.throw || ((BK = Bn.return) && BK.call(Bn), 0)
                        : Bn.next) &&
                    !(BK = BK.call(Bn, BL[1])).done
                  ) {
                    return BK;
                  }
                  Bn = 0;
                  switch ((BL = BK ? [BL[0] & 2, BK.value] : BL)[0]) {
                    case 0:
                    case 1:
                      BK = BL;
                      break;
                    case 4:
                      Bf.label++;
                      return {
                        value: BL[1],
                        done: false,
                      };
                    case 5:
                      Bf.label++;
                      Bn = BL[1];
                      BL = [0];
                      continue;
                    case 7:
                      BL = Bf.ops.pop();
                      Bf.trys.pop();
                      continue;
                    default:
                      if (
                        !(BK =
                          (BK = Bf.trys).length > 0 && BK[BK.length - 1]) &&
                        (BL[0] === 6 || BL[0] === 2)
                      ) {
                        Bf = 0;
                        continue;
                      }
                      if (
                        BL[0] === 3 &&
                        (!BK || (BL[1] > BK[0] && BL[1] < BK[3]))
                      ) {
                        Bf.label = BL[1];
                      } else if (BL[0] === 6 && Bf.label < BK[1]) {
                        Bf.label = BK[1];
                        BK = BL;
                      } else {
                        if (!BK || !(Bf.label < BK[2])) {
                          if (BK[2]) {
                            Bf.ops.pop();
                          }
                          Bf.trys.pop();
                          continue;
                        }
                        Bf.label = BK[2];
                        Bf.ops.push(BL);
                      }
                  }
                  BL = Bb.call(BS, Bf);
                } catch (Bg) {
                  BL = [6, Bg];
                  Bn = 0;
                } finally {
                  BU = BK = 0;
                }
              }
              if (BL[0] & 5) {
                throw BL[1];
              }
              return {
                value: BL[0] ? BL[1] : undefined,
                done: true,
              };
            };
          }
        };
      var Br = / /;
      var BO = false;
      Br.toString = function () {
        BO = true;
        return BY.name;
      };
      var BY = {
        name: "reg-to-string",
        isOpen: function () {
          return Be(this, undefined, undefined, function () {
            return Bx(this, function (BS) {
              BO = false;
              Object(Bq.b)(Br);
              Object(Bq.a)();
              return [2, BO];
            });
          });
        },
        isEnable: function () {
          return Be(this, undefined, undefined, function () {
            return Bx(this, function (BS) {
              return [
                2,
                Object(Bp.b)({
                  includes: [true],
                  excludes: [Bw.g],
                }),
              ];
            });
          });
        },
      };
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return Be;
      });
      var Bq = BH(0);
      var Bw =
        (this && this.__awaiter) ||
        function (Bx, Br, BO, BY) {
          return new (BO = BO || Promise)(function (BS, Bb) {
            function BU(Bf) {
              try {
                BK(BY.next(Bf));
              } catch (Bo) {
                Bb(Bo);
              }
            }
            function Bn(Bf) {
              try {
                BK(BY.throw(Bf));
              } catch (Bo) {
                Bb(Bo);
              }
            }
            function BK(Bf) {
              var Bo;
              if (Bf.done) {
                BS(Bf.value);
              } else {
                ((Bo = Bf.value) instanceof BO
                  ? Bo
                  : new BO(function (BD) {
                      BD(Bo);
                    })
                ).then(BU, Bn);
              }
            }
            BK((BY = BY.apply(Bx, Br || [])).next());
          });
        };
      var Bp =
        (this && this.__generator) ||
        function (Bx, Br) {
          var BO;
          var BY;
          var BS;
          var Bb = {
            label: 0,
            sent: function () {
              if (BS[0] & 1) {
                throw BS[1];
              }
              return BS[1];
            },
            trys: [],
            ops: [],
          };
          var BU = {
            next: Bn(0),
            throw: Bn(1),
            return: Bn(2),
          };
          if (typeof Symbol == "function") {
            BU[Symbol.iterator] = function () {
              return this;
            };
          }
          return BU;
          function Bn(BK) {
            return function (Bf) {
              var Bo = [BK, Bf];
              if (BO) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bb) {
                try {
                  BO = 1;
                  if (
                    BY &&
                    (BS =
                      Bo[0] & 2
                        ? BY.return
                        : Bo[0]
                        ? BY.throw || ((BS = BY.return) && BS.call(BY), 0)
                        : BY.next) &&
                    !(BS = BS.call(BY, Bo[1])).done
                  ) {
                    return BS;
                  }
                  BY = 0;
                  switch ((Bo = BS ? [Bo[0] & 2, BS.value] : Bo)[0]) {
                    case 0:
                    case 1:
                      BS = Bo;
                      break;
                    case 4:
                      Bb.label++;
                      return {
                        value: Bo[1],
                        done: false,
                      };
                    case 5:
                      Bb.label++;
                      BY = Bo[1];
                      Bo = [0];
                      continue;
                    case 7:
                      Bo = Bb.ops.pop();
                      Bb.trys.pop();
                      continue;
                    default:
                      if (
                        !(BS =
                          (BS = Bb.trys).length > 0 && BS[BS.length - 1]) &&
                        (Bo[0] === 6 || Bo[0] === 2)
                      ) {
                        Bb = 0;
                        continue;
                      }
                      if (
                        Bo[0] === 3 &&
                        (!BS || (Bo[1] > BS[0] && Bo[1] < BS[3]))
                      ) {
                        Bb.label = Bo[1];
                      } else if (Bo[0] === 6 && Bb.label < BS[1]) {
                        Bb.label = BS[1];
                        BS = Bo;
                      } else {
                        if (!BS || !(Bb.label < BS[2])) {
                          if (BS[2]) {
                            Bb.ops.pop();
                          }
                          Bb.trys.pop();
                          continue;
                        }
                        Bb.label = BS[2];
                        Bb.ops.push(Bo);
                      }
                  }
                  Bo = Br.call(Bx, Bb);
                } catch (BD) {
                  Bo = [6, BD];
                  BY = 0;
                } finally {
                  BO = BS = 0;
                }
              }
              if (Bo[0] & 5) {
                throw Bo[1];
              }
              return {
                value: Bo[0] ? Bo[1] : undefined,
                done: true,
              };
            };
          }
        };
      var Be = {
        name: "debugger-checker",
        isOpen: function () {
          return Bw(this, undefined, undefined, function () {
            var Bx;
            return Bp(this, function (Br) {
              Bx = Object(Bq.c)();
              (function () {}).constructor("debugger")();
              return [2, Object(Bq.c)() - Bx > 100];
            });
          });
        },
        isEnable: function () {
          return Bw(this, undefined, undefined, function () {
            return Bp(this, function (Bx) {
              return [2, true];
            });
          });
        },
      };
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return BS;
      });
      var Bq = BH(1);
      var Bw = BH(2);
      var Bp = BH(0);
      var Be = BH(4);
      var Bx =
        (this && this.__awaiter) ||
        function (Bb, BU, Bn, BK) {
          return new (Bn = Bn || Promise)(function (Bf, Bo) {
            function BD(BL) {
              try {
                Bk(BK.next(BL));
              } catch (Bg) {
                Bo(Bg);
              }
            }
            function BN(BL) {
              try {
                Bk(BK.throw(BL));
              } catch (Bg) {
                Bo(Bg);
              }
            }
            function Bk(BL) {
              var Bg;
              if (BL.done) {
                Bf(BL.value);
              } else {
                ((Bg = BL.value) instanceof Bn
                  ? Bg
                  : new Bn(function (Ba) {
                      Ba(Bg);
                    })
                ).then(BD, BN);
              }
            }
            Bk((BK = BK.apply(Bb, BU || [])).next());
          });
        };
      var Br =
        (this && this.__generator) ||
        function (Bb, BU) {
          var Bn;
          var BK;
          var Bf;
          var Bo = {
            label: 0,
            sent: function () {
              if (Bf[0] & 1) {
                throw Bf[1];
              }
              return Bf[1];
            },
            trys: [],
            ops: [],
          };
          var BD = {
            next: BN(0),
            throw: BN(1),
            return: BN(2),
          };
          if (typeof Symbol == "function") {
            BD[Symbol.iterator] = function () {
              return this;
            };
          }
          return BD;
          function BN(Bk) {
            return function (BL) {
              var Bg = [Bk, BL];
              if (Bn) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bo) {
                try {
                  Bn = 1;
                  if (
                    BK &&
                    (Bf =
                      Bg[0] & 2
                        ? BK.return
                        : Bg[0]
                        ? BK.throw || ((Bf = BK.return) && Bf.call(BK), 0)
                        : BK.next) &&
                    !(Bf = Bf.call(BK, Bg[1])).done
                  ) {
                    return Bf;
                  }
                  BK = 0;
                  switch ((Bg = Bf ? [Bg[0] & 2, Bf.value] : Bg)[0]) {
                    case 0:
                    case 1:
                      Bf = Bg;
                      break;
                    case 4:
                      Bo.label++;
                      return {
                        value: Bg[1],
                        done: false,
                      };
                    case 5:
                      Bo.label++;
                      BK = Bg[1];
                      Bg = [0];
                      continue;
                    case 7:
                      Bg = Bo.ops.pop();
                      Bo.trys.pop();
                      continue;
                    default:
                      if (
                        !(Bf =
                          (Bf = Bo.trys).length > 0 && Bf[Bf.length - 1]) &&
                        (Bg[0] === 6 || Bg[0] === 2)
                      ) {
                        Bo = 0;
                        continue;
                      }
                      if (
                        Bg[0] === 3 &&
                        (!Bf || (Bg[1] > Bf[0] && Bg[1] < Bf[3]))
                      ) {
                        Bo.label = Bg[1];
                      } else if (Bg[0] === 6 && Bo.label < Bf[1]) {
                        Bo.label = Bf[1];
                        Bf = Bg;
                      } else {
                        if (!Bf || !(Bo.label < Bf[2])) {
                          if (Bf[2]) {
                            Bo.ops.pop();
                          }
                          Bo.trys.pop();
                          continue;
                        }
                        Bo.label = Bf[2];
                        Bo.ops.push(Bg);
                      }
                  }
                  Bg = BU.call(Bb, Bo);
                } catch (Ba) {
                  Bg = [6, Ba];
                  BK = 0;
                } finally {
                  Bn = Bf = 0;
                }
              }
              if (Bg[0] & 5) {
                throw Bg[1];
              }
              return {
                value: Bg[0] ? Bg[1] : undefined,
                done: true,
              };
            };
          }
        };
      var BO = new Date();
      var BY = 0;
      BO.toString = function () {
        BY++;
        return "";
      };
      var BS = {
        name: "date-to-string",
        isOpen: function () {
          return Bx(this, undefined, undefined, function () {
            return Br(this, function (Bb) {
              BY = 0;
              Object(Bw.b)(BO);
              Object(Bw.a)();
              return [2, BY === 2];
            });
          });
        },
        isEnable: function () {
          return Bx(this, undefined, undefined, function () {
            return Br(this, function (Bb) {
              return [
                2,
                Object(Bp.b)({
                  includes: [Bq.a],
                  excludes: [(Be.isIpad || Be.isIphone) && Bq.a],
                }),
              ];
            });
          });
        },
      };
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return BY;
      });
      var Bq = BH(1);
      var Bw = BH(2);
      var Bp = BH(0);
      var Be =
        (this && this.__awaiter) ||
        function (BS, Bb, BU, Bn) {
          return new (BU = BU || Promise)(function (BK, Bf) {
            function Bo(Bk) {
              try {
                BN(Bn.next(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BD(Bk) {
              try {
                BN(Bn.throw(Bk));
              } catch (BL) {
                Bf(BL);
              }
            }
            function BN(Bk) {
              var BL;
              if (Bk.done) {
                BK(Bk.value);
              } else {
                ((BL = Bk.value) instanceof BU
                  ? BL
                  : new BU(function (Bg) {
                      Bg(BL);
                    })
                ).then(Bo, BD);
              }
            }
            BN((Bn = Bn.apply(BS, Bb || [])).next());
          });
        };
      var Bx =
        (this && this.__generator) ||
        function (BS, Bb) {
          var BU;
          var Bn;
          var BK;
          var Bf = {
            label: 0,
            sent: function () {
              if (BK[0] & 1) {
                throw BK[1];
              }
              return BK[1];
            },
            trys: [],
            ops: [],
          };
          var Bo = {
            next: BD(0),
            throw: BD(1),
            return: BD(2),
          };
          if (typeof Symbol == "function") {
            Bo[Symbol.iterator] = function () {
              return this;
            };
          }
          return Bo;
          function BD(BN) {
            return function (Bk) {
              var BL = [BN, Bk];
              if (BU) {
                throw new TypeError("Generator is already executing.");
              }
              while (Bf) {
                try {
                  BU = 1;
                  if (
                    Bn &&
                    (BK =
                      BL[0] & 2
                        ? Bn.return
                        : BL[0]
                        ? Bn.throw || ((BK = Bn.return) && BK.call(Bn), 0)
                        : Bn.next) &&
                    !(BK = BK.call(Bn, BL[1])).done
                  ) {
                    return BK;
                  }
                  Bn = 0;
                  switch ((BL = BK ? [BL[0] & 2, BK.value] : BL)[0]) {
                    case 0:
                    case 1:
                      BK = BL;
                      break;
                    case 4:
                      Bf.label++;
                      return {
                        value: BL[1],
                        done: false,
                      };
                    case 5:
                      Bf.label++;
                      Bn = BL[1];
                      BL = [0];
                      continue;
                    case 7:
                      BL = Bf.ops.pop();
                      Bf.trys.pop();
                      continue;
                    default:
                      if (
                        !(BK =
                          (BK = Bf.trys).length > 0 && BK[BK.length - 1]) &&
                        (BL[0] === 6 || BL[0] === 2)
                      ) {
                        Bf = 0;
                        continue;
                      }
                      if (
                        BL[0] === 3 &&
                        (!BK || (BL[1] > BK[0] && BL[1] < BK[3]))
                      ) {
                        Bf.label = BL[1];
                      } else if (BL[0] === 6 && Bf.label < BK[1]) {
                        Bf.label = BK[1];
                        BK = BL;
                      } else {
                        if (!BK || !(Bf.label < BK[2])) {
                          if (BK[2]) {
                            Bf.ops.pop();
                          }
                          Bf.trys.pop();
                          continue;
                        }
                        Bf.label = BK[2];
                        Bf.ops.push(BL);
                      }
                  }
                  BL = Bb.call(BS, Bf);
                } catch (Bg) {
                  BL = [6, Bg];
                  Bn = 0;
                } finally {
                  BU = BK = 0;
                }
              }
              if (BL[0] & 5) {
                throw BL[1];
              }
              return {
                value: BL[0] ? BL[1] : undefined,
                done: true,
              };
            };
          }
        };
      var Br = null;
      var BO = 0;
      var BY = {
        name: "performance",
        isOpen: function () {
          return Be(this, undefined, undefined, function () {
            var BS;
            var Bb;
            return Bx(this, function (BU) {
              if (Br === null) {
                Br = (function () {
                  var BK = (function () {
                    var BD = {};
                    for (var BN = 0; BN < 500; BN++) {
                      BD[`${BN}`] = `${BN}`;
                    }
                    return BD;
                  })();
                  var Bf = [];
                  for (var Bo = 0; Bo < 50; Bo++) {
                    Bf.push(BK);
                  }
                  return Bf;
                })();
              }
              Bn = Object(Bp.c)();
              Object(Bw.c)(Br);
              BS = Object(Bp.c)() - Bn;
              Bn = Object(Bp.c)();
              Object(Bw.b)(Br);
              Bb = Object(Bp.c)() - Bn;
              BO = Math.max(BO, Bb);
              Object(Bw.a)();
              if (BS == 0 || BO === 0) {
                return [2, false];
              } else {
                return [2, BO * 10 < BS];
              }
              var Bn;
            });
          });
        },
        isEnable: function () {
          return Be(this, undefined, undefined, function () {
            return Bx(this, function (BS) {
              return [
                2,
                Object(Bp.b)({
                  includes: [Bq.a],
                  excludes: [],
                }),
              ];
            });
          });
        },
      };
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return Bp;
      });
      var Bq =
        (this && this.__awaiter) ||
        function (Be, Bx, Br, BO) {
          return new (Br = Br || Promise)(function (BY, BS) {
            function Bb(BK) {
              try {
                Bn(BO.next(BK));
              } catch (Bf) {
                BS(Bf);
              }
            }
            function BU(BK) {
              try {
                Bn(BO.throw(BK));
              } catch (Bf) {
                BS(Bf);
              }
            }
            function Bn(BK) {
              var Bf;
              if (BK.done) {
                BY(BK.value);
              } else {
                ((Bf = BK.value) instanceof Br
                  ? Bf
                  : new Br(function (Bo) {
                      Bo(Bf);
                    })
                ).then(Bb, BU);
              }
            }
            Bn((BO = BO.apply(Be, Bx || [])).next());
          });
        };
      var Bw =
        (this && this.__generator) ||
        function (Be, Bx) {
          var Br;
          var BO;
          var BY;
          var BS = {
            label: 0,
            sent: function () {
              if (BY[0] & 1) {
                throw BY[1];
              }
              return BY[1];
            },
            trys: [],
            ops: [],
          };
          var Bb = {
            next: BU(0),
            throw: BU(1),
            return: BU(2),
          };
          if (typeof Symbol == "function") {
            Bb[Symbol.iterator] = function () {
              return this;
            };
          }
          return Bb;
          function BU(Bn) {
            return function (BK) {
              var Bf = [Bn, BK];
              if (Br) {
                throw new TypeError("Generator is already executing.");
              }
              while (BS) {
                try {
                  Br = 1;
                  if (
                    BO &&
                    (BY =
                      Bf[0] & 2
                        ? BO.return
                        : Bf[0]
                        ? BO.throw || ((BY = BO.return) && BY.call(BO), 0)
                        : BO.next) &&
                    !(BY = BY.call(BO, Bf[1])).done
                  ) {
                    return BY;
                  }
                  BO = 0;
                  switch ((Bf = BY ? [Bf[0] & 2, BY.value] : Bf)[0]) {
                    case 0:
                    case 1:
                      BY = Bf;
                      break;
                    case 4:
                      BS.label++;
                      return {
                        value: Bf[1],
                        done: false,
                      };
                    case 5:
                      BS.label++;
                      BO = Bf[1];
                      Bf = [0];
                      continue;
                    case 7:
                      Bf = BS.ops.pop();
                      BS.trys.pop();
                      continue;
                    default:
                      if (
                        !(BY =
                          (BY = BS.trys).length > 0 && BY[BY.length - 1]) &&
                        (Bf[0] === 6 || Bf[0] === 2)
                      ) {
                        BS = 0;
                        continue;
                      }
                      if (
                        Bf[0] === 3 &&
                        (!BY || (Bf[1] > BY[0] && Bf[1] < BY[3]))
                      ) {
                        BS.label = Bf[1];
                      } else if (Bf[0] === 6 && BS.label < BY[1]) {
                        BS.label = BY[1];
                        BY = Bf;
                      } else {
                        if (!BY || !(BS.label < BY[2])) {
                          if (BY[2]) {
                            BS.ops.pop();
                          }
                          BS.trys.pop();
                          continue;
                        }
                        BS.label = BY[2];
                        BS.ops.push(Bf);
                      }
                  }
                  Bf = Bx.call(Be, BS);
                } catch (Bo) {
                  Bf = [6, Bo];
                  BO = 0;
                } finally {
                  Br = BY = 0;
                }
              }
              if (Bf[0] & 5) {
                throw Bf[1];
              }
              return {
                value: Bf[0] ? Bf[1] : undefined,
                done: true,
              };
            };
          }
        };
      var Bp = {
        name: "eruda",
        isOpen: function () {
          var Be;
          return Bq(this, undefined, undefined, function () {
            return Bw(this, function (Bx) {
              if (typeof eruda != "undefined") {
                return [
                  2,
                  ((Be = eruda?._devTools) == null ? undefined : Be._isShow) ===
                    true,
                ];
              } else {
                return [2, false];
              }
            });
          });
        },
        isEnable: function () {
          return Bq(this, undefined, undefined, function () {
            return Bw(this, function (Be) {
              return [2, true];
            });
          });
        },
      };
    },
    function (BJ, Bh, BH) {
      "use strict";

      BH.d(Bh, "a", function () {
        return Bq;
      });
      var Bh = BH(3);
      var Bq = /mobile/i.test(Bh.b);
    },
  ];
  Bm = {};
  B9.m = BB;
  B9.c = Bm;
  B9.d = function (BJ, Bh, BH) {
    if (!B9.o(BJ, Bh)) {
      Object.defineProperty(BJ, Bh, {
        configurable: false,
        enumerable: true,
        get: BH,
      });
    }
  };
  B9.n = function (BJ) {
    var Bh =
      BJ && BJ.__esModule
        ? function () {
            return BJ.default;
          }
        : function () {
            return BJ;
          };
    B9.d(Bh, "a", Bh);
    return Bh;
  };
  B9.o = function (BJ, Bh) {
    return Object.prototype.hasOwnProperty.call(BJ, Bh);
  };
  B9.p = "";
  return B9((B9.s = 4));
  function B9(BJ) {
    var Bh;
    return (
      Bm[BJ] ||
      ((Bh = Bm[BJ] =
        {
          i: BJ,
          l: false,
          exports: {},
        }),
      BB[BJ].call(Bh.exports, Bh, Bh.exports, B9),
      (Bh.l = true),
      Bh)
    ).exports;
  }
  var BB;
  var Bm;
});
(function (B9) {
  if (
    (typeof exports != "object" || typeof module == "undefined") &&
    typeof define == "function" &&
    define.amd
  ) {
    define(B9);
  } else {
    B9();
  }
})(function () {
  "use strict";

  function B9(Br) {
    var BO = this.constructor;
    return this.then(
      function (BY) {
        return BO.resolve(Br()).then(function () {
          return BY;
        });
      },
      function (BY) {
        return BO.resolve(Br()).then(function () {
          return BO.reject(BY);
        });
      }
    );
  }
  var BB = setTimeout;
  function Bm() {}
  function BJ(Br) {
    if (!(this instanceof BJ)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if (typeof Br != "function") {
      throw new TypeError("not a function");
    }
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    Be(Br, this);
  }
  function Bh(Br, BO) {
    while (Br._state === 3) {
      Br = Br._value;
    }
    if (Br._state === 0) {
      Br._deferreds.push(BO);
    } else {
      Br._handled = true;
      BJ._immediateFn(function () {
        var BY;
        var BS = Br._state === 1 ? BO.onFulfilled : BO.onRejected;
        if (BS === null) {
          (Br._state === 1 ? BH : Bq)(BO.promise, Br._value);
        } else {
          try {
            BY = BS(Br._value);
          } catch (Bb) {
            Bq(BO.promise, Bb);
            return;
          }
          BH(BO.promise, BY);
        }
      });
    }
  }
  function BH(Br, BO) {
    try {
      if (BO === Br) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (BO && (typeof BO == "object" || typeof BO == "function")) {
        var BY = BO.then;
        if (BO instanceof BJ) {
          Br._state = 3;
          Br._value = BO;
          Bw(Br);
          return;
        }
        if (typeof BY == "function") {
          Be(
            ((BS = BY),
            (Bb = BO),
            function () {
              BS.apply(Bb, arguments);
            }),
            Br
          );
          return;
        }
      }
      Br._state = 1;
      Br._value = BO;
      Bw(Br);
    } catch (BU) {
      Bq(Br, BU);
    }
    var BS;
    var Bb;
  }
  function Bq(Br, BO) {
    Br._state = 2;
    Br._value = BO;
    Bw(Br);
  }
  function Bw(Br) {
    if (Br._state === 2 && Br._deferreds.length === 0) {
      BJ._immediateFn(function () {
        if (!Br._handled) {
          BJ._unhandledRejectionFn(Br._value);
        }
      });
    }
    for (var BO = 0, BY = Br._deferreds.length; BO < BY; BO++) {
      Bh(Br, Br._deferreds[BO]);
    }
    Br._deferreds = null;
  }
  function Bp(Br, BO, BY) {
    this.onFulfilled = typeof Br == "function" ? Br : null;
    this.onRejected = typeof BO == "function" ? BO : null;
    this.promise = BY;
  }
  function Be(Br, BO) {
    var BY = false;
    try {
      Br(
        function (BS) {
          if (!BY) {
            BY = true;
            BH(BO, BS);
          }
        },
        function (BS) {
          if (!BY) {
            BY = true;
            Bq(BO, BS);
          }
        }
      );
    } catch (BS) {
      if (!BY) {
        BY = true;
        Bq(BO, BS);
      }
    }
  }
  BJ.prototype.catch = function (Br) {
    return this.then(null, Br);
  };
  BJ.prototype.then = function (Br, BO) {
    var BY = new this.constructor(Bm);
    Bh(this, new Bp(Br, BO, BY));
    return BY;
  };
  BJ.prototype.finally = B9;
  BJ.all = function (Br) {
    return new BJ(function (BO, BY) {
      if (!Br || Br.length === undefined) {
        throw new TypeError("Promise.all accepts an array");
      }
      var BS = Array.prototype.slice.call(Br);
      if (BS.length === 0) {
        return BO([]);
      }
      var Bb = BS.length;
      for (var BU = 0; BU < BS.length; BU++) {
        (function Bn(BK, Bf) {
          try {
            if (Bf && (typeof Bf == "object" || typeof Bf == "function")) {
              var Bo = Bf.then;
              if (typeof Bo == "function") {
                Bo.call(
                  Bf,
                  function (BD) {
                    Bn(BK, BD);
                  },
                  BY
                );
                return;
              }
            }
            BS[BK] = Bf;
            if (--Bb == 0) {
              BO(BS);
            }
          } catch (BD) {
            BY(BD);
          }
        })(BU, BS[BU]);
      }
    });
  };
  BJ.resolve = function (Br) {
    if (Br && typeof Br == "object" && Br.constructor === BJ) {
      return Br;
    } else {
      return new BJ(function (BO) {
        BO(Br);
      });
    }
  };
  BJ.reject = function (Br) {
    return new BJ(function (BO, BY) {
      BY(Br);
    });
  };
  BJ.race = function (Br) {
    return new BJ(function (BO, BY) {
      for (var BS = 0, Bb = Br.length; BS < Bb; BS++) {
        Br[BS].then(BO, BY);
      }
    });
  };
  BJ._immediateFn =
    typeof setImmediate == "function"
      ? function (Br) {
          setImmediate(Br);
        }
      : function (Br) {
          BB(Br, 0);
        };
  BJ._unhandledRejectionFn = function (Br) {
    if (typeof console != "undefined" && console) {
      console.warn("Possible Unhandled Promise Rejection:", Br);
    }
  };
  var Bx = (function () {
    if (typeof self != "undefined") {
      return self;
    }
    if (typeof window != "undefined") {
      return window;
    }
    if (typeof global != "undefined") {
      return global;
    }
    throw new Error("unable to locate global object");
  })();
  if ("Promise" in Bx) {
    Bx.Promise.prototype.finally ||= B9;
  } else {
    Bx.Promise = BJ;
  }
});
const H = new MobileDetect(window.navigator.userAgent);
const q = new URLSearchParams(window.location.search);
if (
  !H.match("playstation|xbox|smart-tv|smarttv") &&
  H.mobile() === null &&
  !q.get("_debug")
) {
  devtoolsDetector.addListener(function (B9) {
    if (B9) {
      window.location.reload();
      window.parent.location.reload();
    }
  });
  devtoolsDetector.launch();
}

const w = (B9, BB) => {
  try {
    var Bm = CryptoJS.AES.decrypt(B9, BB);
    return JSON.parse(Bm.toString(CryptoJS.enc.Utf8));
  } catch (BJ) {
    console.log(BJ.message);
  }
  return [];
};
const p = (B9) => Array.isArray(B9);
const e = (...B9) => B9.join("");
const x = () => {
  if (R.getPosition() > 10) {
    R.seek(R.getPosition() - 10);
  } else {
    R.seek(0);
  }
};
const r = () => {
  if (R.getPosition() < R.getDuration()) {
    R.seek(R.getPosition() + 10);
  }
};
const O = () => {
  window.open("/embed-2/download/" + T, "_blank");
};
const Y = () => {
  window.open("/embed-1/download/" + T, "_blank");
};
const S = (B9) =>
  typeof Storage != "undefined" && localStorage.getItem(B9)
    ? localStorage.getItem(B9)
    : null;
const b = (B9, BB) => {
  if (typeof Storage != "undefined") {
    localStorage.setItem(B9, BB);
  }
};
const U = (B9) => {
  if (typeof Storage != "undefined") {
    localStorage.removeItem(B9);
  }
};
let K;
(function () {
  const B9 = {};
  let BB;
  if (typeof document != "undefined" && document.currentScript !== null) {
    BB = new URL(document.currentScript.src, location.href).toString();
  }
  let Bm = undefined;
  const BJ = new Array(128).fill(undefined);
  function Bh(BE) {
    return BJ[BE];
  }
  BJ.push(undefined, null, true, false);
  let BH = 0;
  let Bq = null;
  function Bw() {
    return (Bq =
      Bq !== null && Bq.byteLength !== 0
        ? Bq
        : new Uint8Array(Bm.memory.buffer));
  }
  const Bp =
    typeof TextEncoder != "undefined"
      ? new TextEncoder("utf-8")
      : {
          encode: () => {
            throw Error("TextEncoder not available");
          },
        };
  const Be =
    typeof Bp.encodeInto == "function"
      ? function (BE, BW) {
          return Bp.encodeInto(BE, BW);
        }
      : function (BE, BW) {
          var BT = Bp.encode(BE);
          BW.set(BT);
          return {
            read: BE.length,
            written: BT.length,
          };
        };
  function Bx(BE, BW, BT) {
    if (BT === undefined) {
      var Bl = Bp.encode(BE);
      const BX = BW(Bl.length, 1) >>> 0;
      Bw()
        .subarray(BX, BX + Bl.length)
        .set(Bl);
      BH = Bl.length;
      return BX;
    }
    let BC = BE.length;
    let Bj = BW(BC, 1) >>> 0;
    var Bi = Bw();
    let Bz = 0;
    for (; Bz < BC; Bz++) {
      var BM = BE.charCodeAt(Bz);
      if (BM > 127) {
        break;
      }
      Bi[Bj + Bz] = BM;
    }
    if (Bz !== BC) {
      if (Bz !== 0) {
        BE = BE.slice(Bz);
      }
      Bj = BT(Bj, BC, (BC = Bz + BE.length * 3), 1) >>> 0;
      Bl = Bw().subarray(Bj + Bz, Bj + BC);
      BW = Be(BE, Bl);
      Bz += BW.written;
      Bj = BT(Bj, BC, Bz, 1) >>> 0;
    }
    BH = Bz;
    return Bj;
  }
  function Br(BE) {
    return BE == null;
  }
  let BO = null;
  function BY() {
    return (BO =
      BO === null ||
      BO.buffer.detached === true ||
      (BO.buffer.detached === undefined && BO.buffer !== Bm.memory.buffer)
        ? new DataView(Bm.memory.buffer)
        : BO);
  }
  let BS = BJ.length;
  function Bb(BE) {
    if (!(BE < 132)) {
      BJ[BE] = BS;
      BS = BE;
    }
  }
  function BU(BE) {
    var BW = Bh(BE);
    Bb(BE);
    return BW;
  }
  const Bn =
    typeof TextDecoder != "undefined"
      ? new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true,
        })
      : {
          decode: () => {
            throw Error("TextDecoder not available");
          },
        };
  function BK(BE, BW) {
    BE >>>= 0;
    return Bn.decode(Bw().subarray(BE, BE + BW));
  }
  function Bf(BE) {
    if (BS === BJ.length) {
      BJ.push(BJ.length + 1);
    }
    var BW = BS;
    BS = BJ[BW];
    BJ[BW] = BE;
    return BW;
  }
  if (typeof TextDecoder != "undefined") {
    Bn.decode();
  }
  const Bo =
    typeof FinalizationRegistry == "undefined"
      ? {
          register: () => {},
          unregister: () => {},
        }
      : new FinalizationRegistry((BE) => {
          Bm.__wbindgen_export_2.get(BE.dtor)(BE.a, BE.b);
        });
  function BD(BE, BW, BT, Bl) {
    const BC = {
      a: BE,
      b: BW,
      cnt: 1,
      dtor: BT,
    };
    BE = (...Bj) => {
      BC.cnt++;
      try {
        return Bl(BC.a, BC.b, ...Bj);
      } finally {
        if (--BC.cnt == 0) {
          Bm.__wbindgen_export_2.get(BC.dtor)(BC.a, BC.b);
          BC.a = 0;
          Bo.unregister(BC);
        }
      }
    };
    BE.original = BC;
    Bo.register(BE, BC, BC);
    return BE;
  }
  function BN(BE, BW) {
    return BU(Bm.__wbindgen_export_3(BE, BW));
  }
  function Bk(BE, BW, BT) {
    Bm.__wbindgen_export_4(BE, BW, Bf(BT));
  }
  function BL(BE, BW) {
    Bm.__wbindgen_export_5(BE, BW);
  }
  function Bg(BE, BW) {
    try {
      return BE.apply(this, BW);
    } catch (BT) {
      Bm.__wbindgen_export_6(Bf(BT));
    }
  }
  function Ba(BE, BW) {
    BW = BW(+BE.length, 1) >>> 0;
    Bw().set(BE, BW);
    BH = BE.length;
    return BW;
  }
  async function Bd(BE, BW) {
    var BT;
    var Bl;
    if (typeof Response == "function" && BE instanceof Response) {
      BT = await BE.arrayBuffer();
      Bl = await WebAssembly.instantiate(BT, BW);
      return Object.assign(Bl, {
        bytes: BT,
      });
    } else if (
      (Bl = await WebAssembly.instantiate(BE, BW)) instanceof
      WebAssembly.Instance
    ) {
      return {
        instance: Bl,
        module: BE,
      };
    } else {
      return Bl;
    }
  }
  function Bt() {
    const BE = {
      wbg: {},
    };
    BE.wbg.__wbindgen_is_undefined = function (BW) {
      return Bh(BW) === undefined;
    };
    BE.wbg.__wbindgen_is_null = function (BW) {
      return Bh(BW) === null;
    };
    BE.wbg.__wbindgen_string_get = function (BW, BT) {
      var BT = Bh(BT);
      var BT = typeof BT == "string" ? BT : undefined;
      var BT = Br(BT)
        ? 0
        : Bx(BT, Bm.__wbindgen_export_0, Bm.__wbindgen_export_1);
      var Bl = BH;
      BY().setInt32(BW + 4, Bl, true);
      BY().setInt32(BW + 0, BT, true);
    };
    BE.wbg.__wbindgen_object_drop_ref = function (BW) {
      BU(BW);
    };
    BE.wbg.__wbindgen_cb_drop = function (BW) {
      BW = BU(BW).original;
      return BW.cnt-- == 1 && !(BW.a = 0);
    };
    BE.wbg.__wbindgen_string_new = function (BW, BT) {
      return Bf(BK(BW, BT));
    };
    BE.wbg.__wbindgen_boolean_get = function (BW) {
      BW = Bh(BW);
      if (typeof BW == "boolean") {
        if (BW) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return 2;
      }
    };
    BE.wbg.__wbindgen_number_get = function (BW, BT) {
      BT = Bh(BT);
      BT = typeof BT == "number" ? BT : undefined;
      BY().setFloat64(BW + 8, Br(BT) ? 0 : BT, true);
      BY().setInt32(BW + 0, !Br(BT), true);
    };
    BE.wbg.__wbg_instanceof_CanvasRenderingContext2d_4ec30ddd3f29f8f9 =
      function (BW) {
        let BT;
        try {
          BT = Bh(BW) instanceof CanvasRenderingContext2D;
        } catch (Bl) {
          BT = false;
        }
        return BT;
      };
    BE.wbg.__wbg_setfillStyle_59f426135f52910f = function (BW, BT) {
      Bh(BW).fillStyle = Bh(BT);
    };
    BE.wbg.__wbg_setshadowBlur_229c56539d02f401 = function (BW, BT) {
      Bh(BW).shadowBlur = BT;
    };
    BE.wbg.__wbg_setshadowColor_340d5290cdc4ae9d = function (BW, BT, Bl) {
      Bh(BW).shadowColor = BK(BT, Bl);
    };
    BE.wbg.__wbg_setfont_16d6e31e06a420a5 = function (BW, BT, Bl) {
      Bh(BW).font = BK(BT, Bl);
    };
    BE.wbg.__wbg_settextBaseline_c3266d3bd4a6695c = function (BW, BT, Bl) {
      Bh(BW).textBaseline = BK(BT, Bl);
    };
    BE.wbg.__wbg_drawImage_cb13768a1bdc04bd = function () {
      return Bg(function (BW, BT, Bl, BC) {
        Bh(BW).drawImage(Bh(BT), Bl, BC);
      }, arguments);
    };
    BE.wbg.__wbg_getImageData_66269d289f37d3c7 = function () {
      return Bg(function (BW, BT, Bl, BC, Bj) {
        return Bf(Bh(BW).getImageData(BT, Bl, BC, Bj));
      }, arguments);
    };
    BE.wbg.__wbg_rect_2fa1df87ef638738 = function (BW, BT, Bl, BC, Bj) {
      Bh(BW).rect(BT, Bl, BC, Bj);
    };
    BE.wbg.__wbg_fillRect_4dd28e628381d240 = function (BW, BT, Bl, BC, Bj) {
      Bh(BW).fillRect(BT, Bl, BC, Bj);
    };
    BE.wbg.__wbg_fillText_07e5da9e41652f20 = function () {
      return Bg(function (BW, BT, Bl, BC, Bj) {
        Bh(BW).fillText(BK(BT, Bl), BC, Bj);
      }, arguments);
    };
    BE.wbg.__wbg_setProperty_5144ddce66bbde41 = function () {
      return Bg(function (BW, BT, Bl, BC, Bj) {
        Bh(BW).setProperty(BK(BT, Bl), BK(BC, Bj));
      }, arguments);
    };
    BE.wbg.__wbg_createElement_03cf347ddad1c8c0 = function () {
      return Bg(function (BW, BT, Bl) {
        return Bf(Bh(BW).createElement(BK(BT, Bl)));
      }, arguments);
    };
    BE.wbg.__wbg_querySelector_118a0639aa1f51cd = function () {
      return Bg(function (BW, BT, Bl) {
        BW = Bh(BW).querySelector(BK(BT, Bl));
        if (Br(BW)) {
          return 0;
        } else {
          return Bf(BW);
        }
      }, arguments);
    };
    BE.wbg.__wbg_querySelectorAll_50c79cd4f7573825 = function () {
      return Bg(function (BW, BT, Bl) {
        return Bf(Bh(BW).querySelectorAll(BK(BT, Bl)));
      }, arguments);
    };
    BE.wbg.__wbg_getAttribute_706ae88bd37410fa = function (BW, BT, Bl, BC) {
      BT = Bh(BT).getAttribute(BK(Bl, BC));
      Bl = Br(BT) ? 0 : Bx(BT, Bm.__wbindgen_export_0, Bm.__wbindgen_export_1);
      BC = BH;
      BY().setInt32(BW + 4, BC, true);
      BY().setInt32(BW + 0, Bl, true);
    };
    BE.wbg.__wbg_target_6795373f170fd786 = function (BW) {
      BW = Bh(BW).target;
      if (Br(BW)) {
        return 0;
      } else {
        return Bf(BW);
      }
    };
    BE.wbg.__wbg_addEventListener_f984e99465a6a7f4 = function () {
      return Bg(function (BW, BT, Bl, BC) {
        Bh(BW).addEventListener(BK(BT, Bl), Bh(BC));
      }, arguments);
    };
    BE.wbg.__wbg_instanceof_HtmlCanvasElement_1e81f71f630e46bc = function (BW) {
      let BT;
      try {
        BT = Bh(BW) instanceof HTMLCanvasElement;
      } catch (Bl) {
        BT = false;
      }
      return BT;
    };
    BE.wbg.__wbg_setwidth_233645b297bb3318 = function (BW, BT) {
      Bh(BW).width = BT >>> 0;
    };
    BE.wbg.__wbg_setheight_fcb491cf54e3527c = function (BW, BT) {
      Bh(BW).height = BT >>> 0;
    };
    BE.wbg.__wbg_getContext_dfc91ab0837db1d1 = function () {
      return Bg(function (BW, BT, Bl) {
        BW = Bh(BW).getContext(BK(BT, Bl));
        if (Br(BW)) {
          return 0;
        } else {
          return Bf(BW);
        }
      }, arguments);
    };
    BE.wbg.__wbg_toDataURL_97b108dd1a4b7454 = function () {
      return Bg(function (BW, BT) {
        var BT = Bx(
          Bh(BT).toDataURL(),
          Bm.__wbindgen_export_0,
          Bm.__wbindgen_export_1
        );
        var Bl = BH;
        BY().setInt32(BW + 4, Bl, true);
        BY().setInt32(BW + 0, BT, true);
      }, arguments);
    };
    BE.wbg.__wbg_style_ca229e3326b3c3fb = function (BW) {
      return Bf(Bh(BW).style);
    };
    BE.wbg.__wbg_instanceof_HtmlImageElement_9c82d4e3651a8533 = function (BW) {
      let BT;
      try {
        BT = Bh(BW) instanceof HTMLImageElement;
      } catch (Bl) {
        BT = false;
      }
      return BT;
    };
    BE.wbg.__wbg_src_87a0e38af6229364 = function (BW, BT) {
      var BT = Bx(Bh(BT).src, Bm.__wbindgen_export_0, Bm.__wbindgen_export_1);
      var Bl = BH;
      BY().setInt32(BW + 4, Bl, true);
      BY().setInt32(BW + 0, BT, true);
    };
    BE.wbg.__wbg_width_e1a38bdd483e1283 = function (BW) {
      return Bh(BW).width;
    };
    BE.wbg.__wbg_height_e4cc2294187313c9 = function (BW) {
      return Bh(BW).height;
    };
    BE.wbg.__wbg_complete_1162c2697406af11 = function (BW) {
      return Bh(BW).complete;
    };
    BE.wbg.__wbg_data_d34dc554f90b8652 = function (BW, BT) {
      var BT = Ba(Bh(BT).data, Bm.__wbindgen_export_0);
      var Bl = BH;
      BY().setInt32(BW + 4, Bl, true);
      BY().setInt32(BW + 0, BT, true);
    };
    BE.wbg.__wbg_origin_305402044aa148ce = function () {
      return Bg(function (BW, BT) {
        var BT = Bx(
          Bh(BT).origin,
          Bm.__wbindgen_export_0,
          Bm.__wbindgen_export_1
        );
        var Bl = BH;
        BY().setInt32(BW + 4, Bl, true);
        BY().setInt32(BW + 0, BT, true);
      }, arguments);
    };
    BE.wbg.__wbg_length_8a9352f7b7360c37 = function (BW) {
      return Bh(BW).length;
    };
    BE.wbg.__wbg_get_c30ae0782d86747f = function (BW, BT) {
      BW = Bh(BW)[BT >>> 0];
      if (Br(BW)) {
        return 0;
      } else {
        return Bf(BW);
      }
    };
    BE.wbg.__wbg_timeOrigin_f462952854d802ec = function (BW) {
      return Bh(BW).timeOrigin;
    };
    BE.wbg.__wbg_instanceof_Window_cee7a886d55e7df5 = function (BW) {
      let BT;
      try {
        BT = Bh(BW) instanceof Window;
      } catch (Bl) {
        BT = false;
      }
      return BT;
    };
    BE.wbg.__wbg_document_eb7fd66bde3ee213 = function (BW) {
      BW = Bh(BW).document;
      if (Br(BW)) {
        return 0;
      } else {
        return Bf(BW);
      }
    };
    BE.wbg.__wbg_location_b17760ac7977a47a = function (BW) {
      return Bf(Bh(BW).location);
    };
    BE.wbg.__wbg_localStorage_3d538af21ea07fcc = function () {
      return Bg(function (BW) {
        BW = Bh(BW).localStorage;
        if (Br(BW)) {
          return 0;
        } else {
          return Bf(BW);
        }
      }, arguments);
    };
    BE.wbg.__wbg_performance_4ca1873776fdb3d2 = function (BW) {
      BW = Bh(BW).performance;
      if (Br(BW)) {
        return 0;
      } else {
        return Bf(BW);
      }
    };
    BE.wbg.__wbg_origin_e1f8acdeb3a39a2b = function (BW, BT) {
      var BT = Bx(
        Bh(BT).origin,
        Bm.__wbindgen_export_0,
        Bm.__wbindgen_export_1
      );
      var Bl = BH;
      BY().setInt32(BW + 4, Bl, true);
      BY().setInt32(BW + 0, BT, true);
    };
    BE.wbg.__wbg_get_8986951b1ee310e0 = function (BW, BT, Bl) {
      BW = Bh(BW)[BK(BT, Bl)];
      if (Br(BW)) {
        return 0;
      } else {
        return Bf(BW);
      }
    };
    BE.wbg.__wbg_setTimeout_6ed7182ebad5d297 = function () {
      return Bg(function (BW, BT, Bl) {
        return Bh(BW).setTimeout(Bh(BT), Bl);
      }, arguments);
    };
    BE.wbg.__wbindgen_is_object = function (BW) {
      BW = Bh(BW);
      return typeof BW == "object" && BW !== null;
    };
    BE.wbg.__wbg_crypto_1d1f22824a6a080c = function (BW) {
      return Bf(Bh(BW).crypto);
    };
    BE.wbg.__wbg_process_4a72847cc503995b = function (BW) {
      return Bf(Bh(BW).process);
    };
    BE.wbg.__wbg_versions_f686565e586dd935 = function (BW) {
      return Bf(Bh(BW).versions);
    };
    BE.wbg.__wbg_node_104a2ff8d6ea03a2 = function (BW) {
      return Bf(Bh(BW).node);
    };
    BE.wbg.__wbindgen_is_string = function (BW) {
      return typeof Bh(BW) == "string";
    };
    BE.wbg.__wbg_require_cca90b1a94a0255b = function () {
      return Bg(function () {
        return Bf(module.require);
      }, arguments);
    };
    BE.wbg.__wbg_msCrypto_eb05e62b530a1508 = function (BW) {
      return Bf(Bh(BW).msCrypto);
    };
    BE.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
      return Bg(function (BW, BT) {
        Bh(BW).randomFillSync(BU(BT));
      }, arguments);
    };
    BE.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function () {
      return Bg(function (BW, BT) {
        Bh(BW).getRandomValues(Bh(BT));
      }, arguments);
    };
    BE.wbg.__wbindgen_is_function = function (BW) {
      return typeof Bh(BW) == "function";
    };
    BE.wbg.__wbg_self_05040bd9523805b9 = function () {
      return Bg(function () {
        return Bf(self.self);
      }, arguments);
    };
    BE.wbg.__wbg_window_adc720039f2cb14f = function () {
      return Bg(function () {
        return Bf(window.window);
      }, arguments);
    };
    BE.wbg.__wbg_globalThis_622105db80c1457d = function () {
      return Bg(function () {
        return Bf(globalThis.globalThis);
      }, arguments);
    };
    BE.wbg.__wbg_global_f56b013ed9bcf359 = function () {
      return Bg(function () {
        return Bf(global.global);
      }, arguments);
    };
    BE.wbg.__wbg_newnoargs_cfecb3965268594c = function (BW, BT) {
      return Bf(new Function(BK(BW, BT)));
    };
    BE.wbg.__wbindgen_object_clone_ref = function (BW) {
      return Bf(Bh(BW));
    };
    BE.wbg.__wbg_eval_c824e170787ad184 = function () {
      return Bg(function (BW, BT) {
        const Bl = eval(BK(BW, BT));
        return Bf(Bl);
      }, arguments);
    };
    BE.wbg.__wbg_call_3f093dd26d5569f8 = function () {
      return Bg(function (BW, BT) {
        return Bf(Bh(BW).call(Bh(BT)));
      }, arguments);
    };
    BE.wbg.__wbg_call_67f2111acd2dfdb6 = function () {
      return Bg(function (BW, BT, Bl) {
        return Bf(Bh(BW).call(Bh(BT), Bh(Bl)));
      }, arguments);
    };
    BE.wbg.__wbg_toString_6eb7c1f755c00453 = function (BW) {
      return Bf(Bh(BW).toString());
    };
    BE.wbg.__wbg_set_961700853a212a39 = function () {
      return Bg(function (BW, BT, Bl) {
        return Reflect.set(Bh(BW), Bh(BT), Bh(Bl));
      }, arguments);
    };
    BE.wbg.__wbg_buffer_b914fb8b50ebbc3e = function (BW) {
      return Bf(Bh(BW).buffer);
    };
    BE.wbg.__wbg_toString_139023ab33acec36 = function (BW) {
      return Bf(Bh(BW).toString());
    };
    BE.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e = function (
      BW,
      BT,
      Bl
    ) {
      return Bf(new Uint8Array(Bh(BW), BT >>> 0, Bl >>> 0));
    };
    BE.wbg.__wbg_new_b1f2d6842d615181 = function (BW) {
      return Bf(new Uint8Array(Bh(BW)));
    };
    BE.wbg.__wbg_newwithlength_0d03cef43b68a530 = function (BW) {
      return Bf(new Uint8Array(BW >>> 0));
    };
    BE.wbg.__wbg_buffer_67e624f5a0ab2319 = function (BW) {
      return Bf(Bh(BW).buffer);
    };
    BE.wbg.__wbg_subarray_adc418253d76e2f1 = function (BW, BT, Bl) {
      return Bf(Bh(BW).subarray(BT >>> 0, Bl >>> 0));
    };
    BE.wbg.__wbg_length_21c4b0ae73cba59d = function (BW) {
      return Bh(BW).length;
    };
    BE.wbg.__wbg_set_7d988c98e6ced92d = function (BW, BT, Bl) {
      Bh(BW).set(Bh(BT), Bl >>> 0);
    };
    BE.wbg.__wbindgen_throw = function (BW, BT) {
      throw new Error(BK(BW, BT));
    };
    BE.wbg.__wbindgen_memory = function () {
      return Bf(Bm.memory);
    };
    BE.wbg.__wbindgen_closure_wrapper117 = function (BW, BT, Bl) {
      return Bf(BD(BW, BT, 2, BN));
    };
    BE.wbg.__wbindgen_closure_wrapper119 = function (BW, BT, Bl) {
      return Bf(BD(BW, BT, 2, Bk));
    };
    BE.wbg.__wbindgen_closure_wrapper121 = function (BW, BT, Bl) {
      return Bf(BD(BW, BT, 2, BL));
    };
    BE.wbg.__wbindgen_closure_wrapper123 = function (BW, BT, Bl) {
      return Bf(BD(BW, BT, 9, Bk));
    };
    return BE;
  }
  function Bc(BE, BW) {}
  function BR(BE, BW) {
    Bm = BE.exports;
    BV.__wbindgen_wasm_module = BW;
    BO = null;
    Bq = null;
    return Bm;
  }
  function BQ(BE) {
    if (Bm !== undefined) {
      return Bm;
    }
    if (BE !== undefined && Object.getPrototypeOf(BE) === Object.prototype) {
      BE = BE.module;
    } else {
      console.warn(
        "using deprecated parameters for `initSync()`; pass a single object instead"
      );
    }
    var BW = Bt();
    Bc(BW);
    if (!(BE instanceof WebAssembly.Module)) {
      BE = new WebAssembly.Module(BE);
    }
    var BW = new WebAssembly.Instance(BE, BW);
    return BR(BW, BE);
  }
  async function BV(BE) {
    var BW;
    var BT;
    if (Bm !== undefined) {
      return Bm;
    } else {
      BW = Bt();
      ({
        instance: BE,
        module: BW,
        bytes: BT,
      } = ((BE = fetch(BE)), Bc(BW), await Bd(await BE, BW)));
      BR(BE, BW);
      return BT;
    }
  }
  B9.groot = function () {
    Bm.groot();
  };
  K = Object.assign(
    BV,
    {
      initSync: BQ,
    },
    B9
  );
})();
const f = (B9) => {
  $("#log-stack").append("<div> " + B9 + " <div>");
};
const o = async (B9) => {
  B9.mu = B9.location.pathname;
  B9.ra = B9.requestAnimationFrame || function () {};
  B9.t = (B9.performance && B9.performance.timeOrigin) || 0;
  if (B9.mu == null || B9.ra == null) {
    return null;
  } else if (B9.mu.length > 0) {
    return B9;
  } else {
    return undefined;
  }
};
const D = async (B9) =>
  /\{\s+\[native code\]/.test(Function.prototype.toString.call(B9));
const N = () => {
  try {
    navigator.appVersion;
    var B9;
    var BB;
    var Bm;
    var BJ = navigator.userAgent;
    var Bh = navigator.appName;
    var BH = "" + parseFloat(navigator.appVersion);
    var Bq = parseInt(navigator.appVersion, 10);
    if ((BB = BJ.indexOf("Opera")) != -1) {
      Bh = "Opera";
      BH = BJ.substring(BB + 6);
      if ((BB = BJ.indexOf("Version")) != -1) {
        BH = BJ.substring(BB + 8);
      }
    } else if ((BB = BJ.indexOf("MSIE")) != -1) {
      Bh = "Microsoft Internet Explorer";
      BH = BJ.substring(BB + 5);
    } else if ((BB = BJ.indexOf("Chrome")) != -1) {
      Bh = "Chrome";
      BH = BJ.substring(BB + 7);
    } else if ((BB = BJ.indexOf("Safari")) != -1) {
      Bh = "Safari";
      BH = BJ.substring(BB + 7);
      if ((BB = BJ.indexOf("Version")) != -1) {
        BH = BJ.substring(BB + 8);
      }
    } else if ((BB = BJ.indexOf("Firefox")) != -1) {
      Bh = "Firefox";
      BH = BJ.substring(BB + 8);
    } else if (
      (B9 = BJ.lastIndexOf(" ") + 1) < (BB = BJ.lastIndexOf("/")) &&
      ((Bh = BJ.substring(B9, BB)),
      (BH = BJ.substring(BB + 1)),
      Bh.toLowerCase() == Bh.toUpperCase())
    ) {
      Bh = navigator.appName;
    }
    if (
      (Bm = (BH =
        (Bm = BH.indexOf(";")) != -1 ? BH.substring(0, Bm) : BH).indexOf(
        " "
      )) != -1
    ) {
      BH = BH.substring(0, Bm);
    }
    Bq = parseInt("" + BH, 10);
    if (isNaN(Bq)) {
      BH = "" + parseFloat(navigator.appVersion);
      Bq = parseInt(navigator.appVersion, 10);
    }
    return {
      browserName: Bh,
      fullVersion: +BH.split(".")[0],
      majorVersion: Bq,
    };
  } catch (Bw) {
    return {
      browserName: "",
      fullVersion: "",
      majorVersion: "",
    };
  }
};
const k = async () => {
  var B9 = N();
  var BB =
    (document &&
      document.getElementById &&
      document.getElementById("9cbc1d63ef40c79")) != null;
  var Bm = document && document.createElement("canvas");
  var BJ = Bm && Bm.getContext != null;
  var Bh = CanvasGradient != null;
  var BH = window.WebSocket != null;
  var Bq = document && document.$cdc_asdjflasutopfhvcZLmcfl_ != null;
  var Bw = window.GPU != null;
  var Bp = window.webkitMediaStream != null;
  var Be = window.RTCPeerConnection != null;
  var Bx = window.RTCDataChannel != null;
  var Bm = Bm && Bm.getContext && Bm.getContext("webgl") != null;
  var Br = window.WebGLActiveInfo != null;
  var BO = window.WebAssembly != null;
  var BY = window.WebAssembly && WebAssembly.instantiate != null;
  var BS = window.WebAssembly && WebAssembly.Module != null;
  BB = [
    BB,
    BJ,
    BH,
    Bq,
    Bw,
    Bp,
    Be,
    Bx,
    Bm,
    Br,
    BO,
    BY,
    window.mdn != null,
    window.chrome != null,
    window.documentPictureInPicture != null,
    BS,
    window.Audio,
    Bh,
    window.document != null,
    window.navigator != null,
    window.navigator && window.navigator.userAgentData != null,
    window.navigator &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile == 1,
    window.navigator &&
      window.navigator &&
      window.navigator.appCodeName == "Mozilla",
    B9 && B9.fullVersion && B9.fullVersion < 100,
  ]
    .map((Bb) => (Bb ? "1" : "0"))
    .join("");
  window.browser_version = (function (Bb) {
    for (var BU = Bb.match(/.{1,8}/g), Bn = [], BK = 0; BK < BU.length; BK++) {
      Bn.push(+parseInt(BU[BK], 2).toString(10));
    }
    return (Bn[0] << 24) | (Bn[1] << 16) | (Bn[2] << 8) | Bn[3];
  })(BB);
};
const L = async (B9) => {
  var BB;
  if (B9 != null && B9.mu != null) {
    if ((BB = mu.split("/")) == null || (BB.length < 2 && !D(B9.eval))) {
      return "";
    } else {
      B9.xrax = BB[BB.length - 1];
      return;
    }
  }
};
const g = async () => {
  L(await o(window));
};
function a(B9) {
  return [
    (B9 & 4278190080) >> 24,
    (B9 & 16711680) >> 16,
    (B9 & 65280) >> 8,
    B9 & 255,
  ];
}
const d = (B9) => {
  var BB;
  var Bm = null;
  if (
    (Bm = B9.navigate) == null ||
    ((BB = B9.localStorage.getItem("ktime")), B9.t != BB)
  ) {
    return null;
  } else {
    B9 = Bm();
    return new Uint8Array(B9);
  }
};
const t = async (B9, BB) => {
  try {
    for (let Bm = 0; Bm < B9.length; Bm++) {
      B9[Bm] = B9[Bm] ^ BB[Bm % BB.length];
    }
  } catch (BJ) {
    return null;
  }
};
const c = async (B9) => {
  try {
    var BB = await K("/images/loading.png?v=0.0.9");
    window.bytes = BB;
    K.groot();
    B9.jwt_plugin(BB);
  } catch (Bm) {
    console.log(Bm);
    B9.error = true;
  }
};
var R = jwplayer("megacloud-player");
var Q = [];
var V = [];
var E = Boolean(parseInt(settings.autoPlay));
var W = false;
var T = $("#megacloud-player").data("id");
var l = $("#megacloud-player").data("realid");
var C = parseInt(settings.time);
var j = {
  channel: "megacloud",
};
var i = true;
var z = [];
const M = () => {
  $.get("/embed-1/ajax/e-1/banners", (B9) => {
    if (B9 && B9.status) {
      z = B9.data;
    }
  });
};
M();
const X = new MobileDetect(window.navigator.userAgent);
const P = () => {
  var B9 = Math.floor(Math.random() * z.length);
  return z[B9];
};
const F = () => {
  var B9 = P();
  if (B9) {
    $("#overlay-center").html(
      '<a id="closeBanner" href="javascript:;" style="position: absolute; top: -15px; right: -15px; z-index: 99; background:#fff; width:30px;height:30px;border-radius:50%; text-align:center;border:solid 1px;"><img style="width:16px;margin-top:7px;" src="/images/close.png"/></a><a rel="nofollow" target="_blank" href="' +
        B9.link +
        '"><img src="' +
        B9.image +
        '" style="max-width:100%; width:300px;" /></a>'
    );
    $("#overlay-center").show();
  }
};
const s = "sources";
const y = "tracks";
const Z = "playbackRateControls";
const G = "mute";
const v = "cast";
const A = "autostart";
var I = null;
var u = 0;
var B0 = 0;
var B1 = 0;
const B2 = () => {
  I = setInterval(() => {
    B0 = R.getPosition();
    if (B1 === B0) {
      u++;
    } else {
      B1 = B0;
      u = 0;
    }
  }, 1000);
};
const B3 = () => {
  var B9 = {
    key: "7MeMRClEneUmFoHRO3u3ypzAZXlVgNtBE2pKDw==",
  };
  B9[Z] = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];
  B9[A] = E;
  B9[s] = Q;
  B9[G] = false;
  B9[v] = {};
  B9[y] = V;
  return B9;
};
const B4 = ({ sources: B9, tracks: BB }) => {
  B9 = {
    ...B3(),
    sources: B9,
    tracks: BB,
  };
  R.setup(B9);
  R.on("ready", () => {
    $(".jw-icon-rewind").remove();
    R.addButton(
      "/images/skip-10-next.svg?v=0.1",
      "+10s",
      r,
      "forward-10s-button"
    );
    R.addButton(
      "/images/skip-10-prev.svg?v=0.1",
      "-10s",
      x,
      "rewind-10s-button"
    );
    if (i) {
      $("#megacloud-player").prepend(
        '<div id="overlay-container"><div id="overlay-center" style="position: absolute; top: 35%; left: 50%; margin-left: -150px; z-index: 9;"></div></div>'
      );
      F();
    }
  });
  R.on("pause", () => {
    if ($("#overlay-center").length > 0 && X.mobile() === null) {
      F();
    }
  });
  R.on("firstFrame", () => {
    var Bm;
    if (l) {
      Bm = S("vc_m_" + l + "_time");
      if (C > 0) {
        R.seek(C);
      } else if (Bm) {
        R.seek(Bm);
      }
    }
  });
  R.on("play", () => {
    $("#overlay-center").hide();
  });
  R.on("levels", (Bm) => {
    if (Bm.levels.length > 0) {
      Bm.levels.forEach((BJ, Bh) => {
        if (BJ.label === "720p") {
          R.setCurrentQuality(Bh);
        }
      });
    }
  });
  R.on("buffer", (Bm) => {
    console.log("player buffer");
    if (!W) {
      B2();
    }
  });
  R.on("time", () => {
    if (I) {
      clearInterval(I);
    }
    if (l) {
      b("vc_m_" + l + "_time", R.getPosition());
    }
    j.event = "time";
    j.time = R.getPosition();
    j.duration = R.getDuration();
    j.percent = (R.getPosition() / R.getDuration()) * 100;
    window.parent.postMessage(JSON.stringify(j), "*");
  });
  R.on("complete", () => {
    C = 0;
    U("vc_m_" + l + "_time");
    j.event = "complete";
    window.parent.postMessage(JSON.stringify(j), "*");
  });
  R.on("error", () => {
    B5();
  });
  R.on("setupError", () => {
    B5();
  });
};
const B5 = () => {
  i = false;
  j.event = "error";
  window.parent.postMessage(JSON.stringify(j), "*");
};
const B6 = () => {
  $("#overlay-center").hide();
  R.play();
};
$(document).on("click", "#closeBanner", () => {
  B6();
});
const B7 = (B9, BB) => {
  var Bm;
  var BJ = window.browser_version;
  const Bh =
    (window.localStorage && window.localStorage.getItem("kversion")) || BJ;
  var BH = (window.localStorage && window.localStorage.getItem("kid")) || "";
  if (window.pid == null) {
    console.log("=> pid null");
  } else {
    var Bq = d(window);
    var BH =
      "/embed-1/ajax/e-1/getSources?id=" +
      window.pid +
      "&v=" +
      Bh +
      "&h=" +
      BH +
      "&b=" +
      BJ;
    const Bw = {
      sources: [],
      tracks: [],
    };
    $.get(BH, function (Bp) {
      var Be;
      if (p(Bp.sources)) {
        Bw.sources = Bp.sources;
      } else {
        Bm = a(Bh);
        Be = Bp.t != 0 ? (t(Bq, Bm), Bq) : ((Be = Bp.k), t(Be, Bm), Be);
        Be = btoa(String.fromCharCode.apply(null, new Uint8Array(Be)));
        Bw.sources = w(Bp.sources, Be);
      }
      Bw.tracks = Bp.tracks;
      BB(Bw);
    });
  }
};
const B8 = () => {
  g().then(() => k());
  c(window);
  const B9 = setInterval(() => {
    if (window.navigate != null || !!window.error) {
      clearInterval(B9);
      B7(window.xrax, B4);
    }
  }, 100);
};
B8();
