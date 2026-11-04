(function () {
  'use strict';

  const vLSDataimagejpegbase649 = "data:image/jpeg;base64,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";
  (function () {
    'use strict';

    if (globalThis.QXFP) {
      return;
    }
    async function f(p) {
      const v = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(p));
      return [...new Uint8Array(v)].map(p2 => p2.toString(16).padStart(2, "0")).join("");
    }
    function f2() {
      try {
        const v2 = document.createElement("canvas");
        const v3 = v2.getContext("webgl") || v2.getContext("experimental-webgl");
        if (!v3) {
          return {};
        }
        const v4 = v3.getExtension("WEBGL_debug_renderer_info");
        return {
          vendor: v4 ? v3.getParameter(v4.UNMASKED_VENDOR_WEBGL) : v3.getParameter(v3.VENDOR),
          renderer: v4 ? v3.getParameter(v4.UNMASKED_RENDERER_WEBGL) : v3.getParameter(v3.RENDERER)
        };
      } catch (e) {
        return {};
      }
    }
    function f3() {
      try {
        const v5 = document.createElement("canvas");
        v5.width = 220;
        v5.height = 40;
        const v6 = v5.getContext("2d");
        v6.textBaseline = "top";
        v6.font = "14px Arial";
        v6.fillStyle = "#f60";
        v6.fillRect(100, 1, 62, 20);
        v6.fillStyle = "#069";
        v6.fillText("QX-Fingerprint-01", 2, 15);
        return v5.toDataURL();
      } catch (e2) {
        return "nocanvas";
      }
    }
    async function f4() {
      const vNavigator = navigator;
      const vF2 = f2();
      const v7 = vNavigator.userAgentData || null;
      const v8 = vNavigator.connection || {};
      return {
        userAgent: vNavigator.userAgent,
        platform: vNavigator.platform,
        uaPlatform: v7 ? v7.platform : null,
        uaMobile: v7 ? v7.mobile : null,
        brands: v7 ? v7.brands.map(p3 => p3.brand + " " + p3.version).join(", ") : null,
        language: vNavigator.language,
        languages: (vNavigator.languages || []).join(", "),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        screen: screen.width + "x" + screen.height,
        availScreen: screen.availWidth + "x" + screen.availHeight,
        colorDepth: screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        cores: vNavigator.hardwareConcurrency || null,
        memory: vNavigator.deviceMemory || null,
        gpuVendor: vF2.vendor || null,
        gpuRenderer: vF2.renderer || null,
        touchPoints: vNavigator.maxTouchPoints || 0,
        cookieEnabled: vNavigator.cookieEnabled,
        doNotTrack: vNavigator.doNotTrack,
        connectionType: v8.effectiveType || null,
        downlink: v8.downlink || null,
        canvasHash: (await f(f3())).slice(0, 16),
        host: location.hostname || "popup",
        extVersion: "bookmark-1.0.0"
      };
    }
    async function f5(p4) {
      const v9 = [p4.platform, p4.uaPlatform, p4.cores, p4.memory, p4.gpuVendor, p4.gpuRenderer, p4.timezone, p4.colorDepth, p4.touchPoints].join("|");
      return await f(v9);
    }
    async function f6(p5) {
      try {
        const v10 = localStorage.getItem("qx_fp");
        if (v10) {
          return v10;
        }
      } catch (e3) {}
      const v11 = await f5(p5);
      try {
        localStorage.setItem("qx_fp", v11);
      } catch (e4) {}
      return v11;
    }
    const vO = {
      collectInfo: f4,
      getFingerprint: f6
    };
    globalThis.QXFP = vO;
  })();
  (function () {
    'use strict';

    if (window.__ROUND_CONTROL_NATIVE_INJECTED__) {
      return;
    }
    window.__ROUND_CONTROL_NATIVE_INJECTED__ = true;
    console.log("%c[Ayyan Trader Core]%c Native Interceptor Engine Activated.", "background: #1e1e2e; color: #f38ba8; border: 1px solid #f38ba8; padding: 3px 8px; border-radius: 4px; font-weight: bold;", "color: #f38ba8;");
    const vO2 = {
      active: false,
      mockPrice: null,
      duration: 6,
      timerId: null,
      spikeIntervalId: null,
      interceptCount: 0,
      lastRealPrice: null,
      lastRawPacket: null,
      lastAsset: null,
      activeSockets: new Set(),
      logCounter: 0,
      anchorReal: null,
      lastMock: null,
      realDecimals: 0,
      startedAt: 0,
      emitting: false,
      lastStatusAt: 0
    };
    let v12 = false;
    function f7() {
      const vO3 = {
        active: vO2.active,
        intercepts: vO2.interceptCount,
        lastPrice: vO2.lastRealPrice,
        asset: vO2.lastAsset,
        socketCount: vO2.activeSockets.size
      };
      const vO4 = {
        source: "ROUND_CONTROL_INJECTED",
        type: "STATUS_UPDATE",
        payload: vO3
      };
      window.postMessage(vO4, "*");
    }
    const vO5 = {
      symbol: null,
      strongAt: 0,
      awaitingList: false,
      instruments: new Map()
    };
    function f8(p6) {
      if (!p6) {
        return "";
      }
      const v13 = /_otc$/i.test(p6);
      let v14 = p6.replace(/_otc$/i, "").replace(/_/g, "");
      if (/^[A-Z]{6}$/.test(v14)) {
        v14 = v14.slice(0, 3) + "/" + v14.slice(3);
      }
      return v14 + (v13 ? " (OTC)" : "");
    }
    function f9() {
      const v15 = vO5.instruments.get(vO5.symbol);
      const v16 = v15 && Number.isFinite(Number(v15.payout)) ? Number(v15.payout) : null;
      return {
        symbol: vO5.symbol,
        name: v15 && v15.name || f8(vO5.symbol),
        payout: v16
      };
    }
    function f10() {
      if (!vO5.symbol) {
        return;
      }
      window.postMessage({
        source: "ROUND_CONTROL_INJECTED",
        type: "MARKET_UPDATE",
        payload: f9()
      }, "*");
    }
    function f11(p7, p8) {
      if (!p7 || typeof p7 !== "string") {
        return;
      }
      const v17 = Date.now();
      if (!p8 && vO5.strongAt && v17 - vO5.strongAt < 10000) {
        return;
      }
      if (p8) {
        vO5.strongAt = v17;
      }
      if (vO5.symbol === p7) {
        return;
      }
      vO5.symbol = p7;
      f10();
    }
    function f12(p9) {
      const v18 = p9.indexOf("[");
      if (v18 === -1 || v18 > 6) {
        return;
      }
      let v19;
      try {
        v19 = JSON.parse(p9.slice(v18));
      } catch (e5) {
        return;
      }
      if (!Array.isArray(v19) || typeof v19[0] !== "string") {
        return;
      }
      const v20 = v19[0];
      const v21 = v19[1];
      if (v20 === "settings/apply" && v21 && v21.settings && v21.settings.currentAsset && v21.settings.currentAsset.symbol) {
        f11(v21.settings.currentAsset.symbol, true);
      } else if (v20 === "depth/follow" && typeof v21 === "string") {
        f11(v21, true);
      } else if ((v20 === "instruments/update" || v20 === "chart_notification/get") && v21 && typeof v21.asset === "string") {
        f11(v21.asset, false);
      }
    }
    function f13(p10) {
      if (!Array.isArray(p10)) {
        return;
      }
      let v22 = false;
      for (const v23 of p10) {
        if (!Array.isArray(v23) || typeof v23[1] !== "string") {
          continue;
        }
        const vNumber = Number(v23[5]);
        vO5.instruments.set(v23[1], {
          name: typeof v23[2] === "string" ? v23[2].replace(/\n/g, " ").trim() : f8(v23[1]),
          payout: Number.isFinite(vNumber) ? vNumber : null
        });
        v22 = true;
      }
      if (v22) {
        f10();
      }
    }
    function f14(p11) {
      if (typeof p11 === "string") {
        if (p11.indexOf("\"instruments/list\"") !== -1) {
          vO5.awaitingList = true;
          const v24 = p11.indexOf("[");
          try {
            const v25 = JSON.parse(p11.slice(v24));
            if (Array.isArray(v25[1])) {
              f13(v25[1]);
              vO5.awaitingList = false;
            }
          } catch (e6) {}
        }
        return;
      }
      if (!vO5.awaitingList) {
        return;
      }
      const vF = p12 => {
        try {
          const v26 = JSON.parse(p12);
          const v27 = Array.isArray(v26) ? v26 : v26 && Array.isArray(v26.list) ? v26.list : null;
          if (v27 && v27.length && Array.isArray(v27[0])) {
            f13(v27);
            vO5.awaitingList = false;
          }
        } catch (e7) {}
      };
      if (p11 instanceof ArrayBuffer) {
        vF(new TextDecoder().decode(p11));
      } else if (typeof Blob !== "undefined" && p11 instanceof Blob) {
        p11.text().then(vF).catch(() => {});
      }
    }
    function f15(p13) {
      const vString = String(p13);
      const v28 = vString.indexOf(".");
      if (v28 === -1) {
        return 0;
      } else {
        return Math.min(8, vString.length - v28 - 1);
      }
    }
    function f16(p14) {
      return !vO5.symbol || !p14 || p14 === vO5.symbol;
    }
    function f17(p15) {
      const v29 = vO2.mockPrice;
      const vNumber2 = Number(p15);
      if (!Number.isFinite(vNumber2)) {
        if (vO2.lastMock !== null) {
          return vO2.lastMock;
        } else {
          return v29;
        }
      }
      vO2.realDecimals = Math.max(vO2.realDecimals, f15(vNumber2));
      const v30 = Math.max(vO2.realDecimals, f15(v29));
      if (vO2.anchorReal === null) {
        vO2.anchorReal = vNumber2;
      }
      let v31 = vNumber2 - vO2.anchorReal;
      const v32 = Math.max(Math.pow(10, -v30) * 15, Math.abs(v29) * 0.00012);
      if (v31 > v32) {
        v31 = v32;
      }
      if (v31 < -v32) {
        v31 = -v32;
      }
      const vNumber3 = Number((v29 + v31).toFixed(v30));
      vO2.lastMock = vNumber3;
      vO2.lastRealPrice = vNumber2;
      return vNumber3;
    }
    function f18() {
      if (vO2.lastMock !== null) {
        return vO2.lastMock;
      } else {
        return Number(vO2.mockPrice);
      }
    }
    function f19(p16, p17) {
      const v33 = Math.max(vO2.realDecimals, f15(p17), f15(vO2.mockPrice));
      return Number(Number(p16).toFixed(v33));
    }
    function f20(p18, p19 = null, p20 = null) {
      if (!p18 || typeof p18 !== "object") {
        return false;
      }
      let v34 = false;
      const vF3 = p21 => p19 !== null ? Number(p19) : f17(p21);
      if (Array.isArray(p18)) {
        if (p18.length >= 6 && typeof p18[0] === "string" && typeof p18[1] === "number") {
          if (!f16(p18[0])) {
            return false;
          }
          vO2.lastAsset = p18[0];
          f21(p18, 2, 3, 4, 5, p18[1], vF3, p19 !== null);
          if (p20) {
            p18[1] = p20;
          }
          vO2.interceptCount++;
          return true;
        }
        if (p18.length >= 3 && typeof p18[0] === "string" && typeof p18[1] === "number" && (typeof p18[2] === "number" || !isNaN(Number(p18[2])))) {
          if (!f16(p18[0])) {
            return false;
          }
          vO2.lastAsset = p18[0];
          p18[2] = vF3(p18[2]);
          if (p20) {
            p18[1] = p20;
          }
          vO2.interceptCount++;
          return true;
        }
        if (p18.length >= 5 && typeof p18[0] === "number" && typeof p18[1] === "number") {
          f21(p18, 1, 2, 3, 4, p18[0], vF3, p19 !== null);
          if (p20) {
            p18[0] = p20;
          }
          vO2.interceptCount++;
          return true;
        }
        if (p18.length === 2 && typeof p18[0] === "number" && typeof p18[1] === "number") {
          p18[1] = vF3(p18[1]);
          if (p20) {
            p18[0] = p20;
          }
          vO2.interceptCount++;
          return true;
        }
        for (let vLN0 = 0; vLN0 < p18.length; vLN0++) {
          if (typeof p18[vLN0] === "object" && p18[vLN0] !== null) {
            if (f20(p18[vLN0], p19, p20)) {
              v34 = true;
            }
          }
        }
        return v34;
      }
      const v35 = p18.asset || p18.symbol;
      if (v35 && !f16(v35)) {
        return false;
      }
      const v36 = ["close", "c", "price", "last", "rate", "p", "value", "val"].find(p22 => p18[p22] !== undefined && !isNaN(Number(p18[p22])));
      if (v36) {
        const v37 = typeof p18[v36] === "string";
        const vNumber4 = Number(p18[v36]);
        const vVF3 = vF3(vNumber4);
        const v38 = vVF3 - vNumber4;
        const vNumber5 = Number(p18.time ?? p18.t ?? p18.timestamp ?? p18.ts ?? 0);
        const v39 = p19 === null && vNumber5 && vNumber5 >= vO2.startedAt;
        const v40 = p18.open !== undefined ? "open" : p18.o !== undefined ? "o" : null;
        const v41 = p18.high !== undefined ? "high" : p18.h !== undefined ? "h" : null;
        const v42 = p18.low !== undefined ? "low" : p18.l !== undefined ? "l" : null;
        const vF4 = (p23, p24) => {
          p18[p23] = v37 ? String(p24) : p24;
        };
        vF4(v36, vVF3);
        if (v39 && v40) {
          vF4(v40, f19(Number(p18[v40]) + v38, vVF3));
        }
        if (v41) {
          vF4(v41, v39 ? f19(Number(p18[v41]) + v38, vVF3) : Math.max(Number(p18[v41]), vVF3));
        }
        if (v42) {
          vF4(v42, v39 ? f19(Number(p18[v42]) + v38, vVF3) : Math.min(Number(p18[v42]), vVF3));
        }
        if (v35) {
          vO2.lastAsset = v35;
        }
        vO2.interceptCount++;
        v34 = true;
      }
      for (const v43 in p18) {
        if (Object.prototype.hasOwnProperty.call(p18, v43) && typeof p18[v43] === "object" && p18[v43] !== null) {
          if (f20(p18[v43], p19, p20)) {
            v34 = true;
          }
        }
      }
      return v34;
    }
    function f21(p25, p26, p27, p28, p29, p30, p31, p32) {
      const vNumber6 = Number(p25[p29]);
      const vP31 = p31(vNumber6);
      const v44 = vP31 - vNumber6;
      const v45 = !p32 && p30 > 0 && p30 >= vO2.startedAt;
      p25[p29] = vP31;
      if (v45) {
        p25[p26] = f19(Number(p25[p26]) + v44, vP31);
        p25[p27] = f19(Number(p25[p27]) + v44, vP31);
        p25[p28] = f19(Number(p25[p28]) + v44, vP31);
      } else {
        p25[p27] = Math.max(Number(p25[p27] ?? vP31), vP31);
        p25[p28] = Math.min(Number(p25[p28] ?? vP31), vP31);
      }
    }
    function f22(p33, p34) {
      if (typeof p33 !== "string") {
        return p33;
      }
      const v46 = p33.search(/[\[\{]/);
      if (v46 === -1) {
        return p33;
      }
      const v47 = p33.slice(0, v46);
      const v48 = p33.slice(v46);
      try {
        const v49 = JSON.parse(v48);
        if (vO2.logCounter < 3) {
          console.log("%c[Quotex WS Packet Detected]%c", "color: #38bdf8; font-weight: bold;", p33.slice(0, 160));
          vO2.logCounter++;
        }
        if (vO2.active && p34 !== null) {
          const vF20 = f20(v49);
          if (vF20) {
            const v50 = v47 + JSON.stringify(v49);
            console.log("%c[Quotex Price Mutated! -> " + p34 + "]%c", "background: #ef4444; color: black; font-weight: bold; padding: 2px 4px;", v50.slice(0, 160));
            return v50;
          }
        }
      } catch (e8) {}
      return p33;
    }
    function f23(p35, p36) {
      if (p36) {
        vO2.activeSockets.add(p36);
      }
      if (p35.target) {
        vO2.activeSockets.add(p35.target);
      }
      if (p35.currentTarget) {
        vO2.activeSockets.add(p35.currentTarget);
      }
      if (v12) {
        return p35;
      }
      if (vO2.emitting) {
        return p35;
      }
      let v51 = p35.data;
      let v52 = false;
      try {
        f14(v51);
      } catch (e9) {}
      if (v51 instanceof ArrayBuffer) {
        try {
          v51 = new TextDecoder().decode(v51);
          v52 = true;
        } catch (e10) {}
      }
      if (typeof v51 === "string") {
        if (v51.length > 5 && v51.length < 600 && (v51.startsWith("42") || v51.includes("quote") || v51.includes("candle") || v51.includes("price"))) {
          if (!vO5.symbol || v51.indexOf(vO5.symbol) !== -1) {
            vO2.lastRawPacket = v51;
          }
        }
        if (vO2.active && vO2.mockPrice !== null) {
          const vF22 = f22(v51, vO2.mockPrice);
          if (vF22 !== v51) {
            const v53 = Date.now();
            if (v53 - vO2.lastStatusAt > 500) {
              vO2.lastStatusAt = v53;
              f7();
            }
            const v54 = v52 ? new TextEncoder().encode(vF22).buffer : vF22;
            return new Proxy(p35, {
              get(p37, p38, p39) {
                if (p38 === "data") {
                  return v54;
                }
                const v55 = Reflect.get(p37, p38, p39);
                if (typeof v55 === "function") {
                  return v55.bind(p37);
                } else {
                  return v55;
                }
              }
            });
          }
        }
      }
      return p35;
    }
    const v56 = window.WebSocket;
    const v57 = v56.prototype.addEventListener;
    const v58 = v56.prototype.removeEventListener;
    const v59 = Object.getOwnPropertyDescriptor(v56.prototype, "onmessage");
    const v60 = new WeakMap();
    v56.prototype.addEventListener = function (p40, p41, p42) {
      vO2.activeSockets.add(this);
      if (p40 === "message" && typeof p41 === "function") {
        const vThis = this;
        const vF5 = function (p43) {
          vO2.activeSockets.add(vThis);
          const vF23 = f23(p43, vThis);
          return p41.call(this, vF23);
        };
        v60.set(p41, vF5);
        return v57.call(this, p40, vF5, p42);
      }
      return v57.call(this, p40, p41, p42);
    };
    v56.prototype.removeEventListener = function (p44, p45, p46) {
      if (p44 === "message" && typeof p45 === "function") {
        const v61 = v60.get(p45) || p45;
        return v58.call(this, p44, v61, p46);
      }
      return v58.call(this, p44, p45, p46);
    };
    Object.defineProperty(v56.prototype, "onmessage", {
      get() {
        if (v59) {
          return v59.get.call(this);
        } else {
          return null;
        }
      },
      set(p47) {
        vO2.activeSockets.add(this);
        if (typeof p47 !== "function") {
          if (v59) {
            v59.set.call(this, p47);
          }
          return;
        }
        const vThis2 = this;
        const vF6 = function (p48) {
          vO2.activeSockets.add(vThis2);
          const vF232 = f23(p48, vThis2);
          return p47.call(vThis2, vF232);
        };
        v60.set(p47, vF6);
        if (v59) {
          v59.set.call(this, vF6);
        }
      },
      configurable: true,
      enumerable: true
    });
    const v62 = v56.prototype.send;
    v56.prototype.send = function (p49) {
      vO2.activeSockets.add(this);
      if (typeof p49 === "string") {
        try {
          f12(p49);
        } catch (e11) {}
      }
      return v62.call(this, p49);
    };
    const vF7 = function (..._0x621a3e) {
      const v63 = new v56(..._0x621a3e);
      vO2.activeSockets.add(v63);
      console.log("%c[Ayyan Trader Core]%c Quotex WebSocket instance captured:", "color: #38bdf8;", _0x621a3e[0] || "");
      return v63;
    };
    vF7.prototype = v56.prototype;
    vF7.CONNECTING = v56.CONNECTING;
    vF7.OPEN = v56.OPEN;
    vF7.CLOSING = v56.CLOSING;
    vF7.CLOSED = v56.CLOSED;
    window.WebSocket = vF7;
    (function f24() {
      const v64 = window.__thdev === true || document.readyState !== "loading";
      if (!v64) {
        return;
      }
      const v65 = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data");
      if (!v65 || typeof v65.get !== "function") {
        return;
      }
      const v66 = v65.get;
      const v67 = new WeakMap();
      Object.defineProperty(MessageEvent.prototype, "data", {
        configurable: true,
        enumerable: v65.enumerable,
        get() {
          const v68 = v66.call(this);
          const v69 = this.target;
          if (!v69 || typeof v69.url !== "string" || typeof v69.send !== "function") {
            return v68;
          }
          vO2.activeSockets.add(v69);
          if (vO2.emitting) {
            return v68;
          }
          if (v67.has(this)) {
            return v67.get(this);
          }
          let vV68 = v68;
          let v70 = false;
          if (v68 instanceof ArrayBuffer) {
            try {
              vV68 = new TextDecoder().decode(v68);
              v70 = true;
            } catch (e12) {
              return v68;
            }
          }
          if (typeof vV68 !== "string") {
            return v68;
          }
          try {
            f14(vV68);
          } catch (e13) {}
          if (vV68.length > 5 && vV68.length < 600 && (vV68.startsWith("42") || vV68.includes("quote") || vV68.includes("candle") || vV68.includes("price"))) {
            if (!vO5.symbol || vV68.indexOf(vO5.symbol) !== -1) {
              vO2.lastRawPacket = vV68;
            }
          }
          if (!vO2.active || vO2.mockPrice === null) {
            return v68;
          }
          const vF222 = f22(vV68, vO2.mockPrice);
          if (vF222 === vV68) {
            return v68;
          }
          const v71 = v70 ? new TextEncoder().encode(vF222).buffer : vF222;
          v67.set(this, v71);
          const v72 = Date.now();
          if (v72 - vO2.lastStatusAt > 500) {
            vO2.lastStatusAt = v72;
            f7();
          }
          return v71;
        }
      });
      v12 = true;
      console.log("%c[Ayyan Trader Core]%c Late-injection mode — event-level interception active.", "background: #1e1e2e; color: #89b4fa; padding: 3px 8px; border-radius: 4px; font-weight: bold;", "color: #89b4fa;");
    })();
    function f25() {
      const vF18 = f18();
      if (!Number.isFinite(vF18)) {
        return;
      }
      const v73 = Math.floor(Date.now() / 1000);
      const v74 = vO5.symbol || vO2.lastAsset || "USD/BDT_otc";
      let v75 = null;
      if (vO2.lastRawPacket && vO2.lastRawPacket.length < 600) {
        const v76 = performance.now();
        try {
          const v77 = vO2.lastRawPacket.search(/[\[\{]/);
          if (v77 !== -1) {
            const v78 = vO2.lastRawPacket.slice(0, v77);
            const v79 = JSON.parse(vO2.lastRawPacket.slice(v77));
            if (f20(v79, vF18, v73)) {
              v75 = v78 + JSON.stringify(v79);
            }
          }
        } catch (e14) {}
        if (performance.now() - v76 > 8) {
          vO2.lastRawPacket = null;
          v75 = null;
        }
      } else {
        vO2.lastRawPacket = null;
      }
      if (!v75) {
        v75 = "42/s," + JSON.stringify(["quotes", [[v74, v73, vF18]]]);
      }
      vO2.emitting = true;
      vO2.activeSockets.forEach(p50 => {
        if (p50.readyState === WebSocket.CLOSED) {
          return;
        }
        try {
          const vO6 = {
            data: v75,
            origin: p50.url,
            target: p50
          };
          const v80 = new MessageEvent("message", vO6);
          p50.dispatchEvent(v80);
          if (typeof p50.onmessage === "function") {
            p50.onmessage(v80);
          }
        } catch (e15) {}
      });
      vO2.emitting = false;
      if (vO2.activeSockets.size === 0) {
        console.warn("%c[Ayyan Trader Core]%c Waiting for Quotex WebSocket data connection...", "color: #f59e0b; font-weight: bold;");
      }
    }
    function f26(p51, p52) {
      vO2.active = true;
      vO2.mockPrice = Number(p51);
      vO2.duration = Number(p52);
      vO2.anchorReal = null;
      vO2.lastMock = null;
      vO2.realDecimals = 0;
      vO2.startedAt = Date.now() / 1000;
      console.log("%c[Ayyan Trader Core]%c Mock Started! Target Round: " + vO2.mockPrice + " | Duration: " + vO2.duration + "s | Active Sockets: " + vO2.activeSockets.size, "background: #ef4444; color: white; padding: 3px 8px; border-radius: 4px; font-weight: bold;");
      f25();
      clearInterval(vO2.spikeIntervalId);
      vO2.spikeIntervalId = // TOLOOK
      setInterval(() => {
        if (vO2.active) {
          f25();
        }
      }, 120);
      clearTimeout(vO2.timerId);
      vO2.timerId = // TOLOOK
      setTimeout(() => {
        f27();
        window.postMessage({
          source: "ROUND_CONTROL_INJECTED",
          type: "AUTO_STOP"
        }, "*");
      }, vO2.duration * 1000);
      f7();
    }
    function f27() {
      vO2.active = false;
      clearTimeout(vO2.timerId);
      clearInterval(vO2.spikeIntervalId);
      vO2.anchorReal = null;
      vO2.lastMock = null;
      console.log("%c[Ayyan Trader Core]%c Mock Stopped. Natural server stream resumed.", "background: #f38ba8; color: white; padding: 3px 8px; border-radius: 4px; font-weight: bold;");
      f7();
    }
    window.addEventListener("message", p53 => {
      if (p53.source !== window || p53.data?.source !== "ROUND_CONTROL_CONTENT") {
        return;
      }
      const {
        type: _0x3ec714,
        payload: _0x22ede4
      } = p53.data;
      if (_0x3ec714 === "START_MOCK") {
        f26(_0x22ede4.price, _0x22ede4.duration);
      } else if (_0x3ec714 === "STOP_MOCK") {
        f27();
      } else if (_0x3ec714 === "GET_MARKET") {
        f10();
      }
    });
  })();
  (function () {
    'use strict';

    const v81 = (window.location.hostname || "").toLowerCase();
    const v82 = v81.includes("quotex") || v81.includes("qxbroker") || v81.includes("market-qx") || v81 === "localhost" || window.location.protocol === "file:";
    if (!v82) {
      return;
    }
    const vVO8 = {
      active: false,
      mockPrice: null,
      duration: 6,
      remainingSeconds: 6,
      timerInterval: null,
      isMinimized: false
    };
    function f28(p54, p55 = {}) {
      const vO9 = {
        source: "ROUND_CONTROL_CONTENT",
        type: p54,
        payload: p55
      };
      window.postMessage(vO9, "*");
    }
    function f29() {
      if (document.getElementById("cb-traders-root")) {
        return;
      }
      const v83 = document.createElement("div");
      v83.id = "cb-traders-root";
      v83.style.all = "initial";
      const v84 = v83.attachShadow({
        mode: "open"
      });
      const v85 = document.createElement("style");
      v85.textContent = "\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n      user-select: none;\n      -webkit-user-select: none;\n    }\n\n    @keyframes qxFadeUp { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }\n    @keyframes qxPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,.55); } 70% { box-shadow: 0 0 0 6px rgba(239,68,68,0); } }\n    @keyframes qxShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }\n    @keyframes qxSpin { to { transform: rotate(360deg); } }\n\n    @keyframes qxLuxOpen {\n      0%   { opacity: 0; transform: translateY(18px) scale(.80); filter: blur(8px); }\n      55%  { opacity: 1; filter: blur(0); }\n      75%  { transform: translateY(-3px) scale(1.015); }\n      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }\n    }\n    @keyframes qxLuxClose {\n      0%   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }\n      100% { opacity: 0; transform: translateY(12px) scale(.82); filter: blur(6px); }\n    }\n    @keyframes qxOrbIn {\n      0%   { opacity: 0; transform: scale(.35) rotate(-16deg); }\n      55%  { opacity: 1; transform: scale(1.12) rotate(4deg); }\n      100% { opacity: 1; transform: scale(1) rotate(0); }\n    }\n    @keyframes qxOrbGlow {\n      0%, 100% { box-shadow: 0 16px 40px -10px rgba(0,0,0,.9), 0 0 26px -2px rgba(239,68,68,.55); }\n      50%      { box-shadow: 0 16px 44px -8px rgba(0,0,0,.9), 0 0 42px 2px rgba(239,68,68,.9); }\n    }\n    @keyframes qxOrbRing { to { transform: rotate(360deg); } }\n\n    /* Obsidian & Aqua — Luxury Theme */\n    .app-card {\n      position: fixed;\n      top: 50px;\n      left: 30px;\n      z-index: 2147483647;\n      width: 300px;\n      background:\n        radial-gradient(120% 80% at 0% 0%, rgba(239,68,68,.10) 0%, rgba(239,68,68,0) 55%),\n        linear-gradient(180deg, #0a1117 0%, #060a0f 100%);\n      border: 1px solid rgba(239,68,68,.22);\n      border-radius: 18px;\n      box-shadow: 0 30px 60px -20px rgba(0,0,0,.9), 0 0 0 1px rgba(255,255,255,.03) inset, 0 1px 0 rgba(255,255,255,.06) inset;\n      color: #fef2f2;\n      font-size: 13px;\n      overflow: hidden;\n      touch-action: none;\n      transition: border-color .35s ease, box-shadow .35s ease;\n      animation: qxFadeUp .45s cubic-bezier(.2,.8,.2,1) both;\n    }\n    .app-card::before {\n      content: '';\n      position: absolute; inset: 0 0 auto 0; height: 1px;\n      background: linear-gradient(90deg, transparent, rgba(239,68,68,.85), transparent);\n      pointer-events: none;\n    }\n    .app-card.running {\n      border-color: rgba(239,68,68,.6);\n      box-shadow: 0 30px 60px -20px rgba(0,0,0,.9), 0 0 40px -6px rgba(239,68,68,.35);\n    }\n\n    /* Header */\n    .header {\n      padding: 14px 16px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      cursor: grab;\n      background: rgba(255,255,255,.025);\n      backdrop-filter: blur(14px);\n      border-bottom: 1px solid rgba(255,255,255,.06);\n    }\n    .header:active { cursor: grabbing; }\n    .header-left { display: flex; align-items: center; gap: 12px; }\n\n    .logo-frame {\n      width: 40px; height: 40px; border-radius: 50%;\n      padding: 2px;\n      background: conic-gradient(from 180deg, #fca5a5, #b91c1c, #fecaca, #991b1b, #fca5a5);\n      overflow: hidden;\n      display: flex; align-items: center; justify-content: center;\n      flex-shrink: 0; cursor: pointer;\n      box-shadow: 0 6px 18px -4px rgba(239,68,68,.45);\n      transition: transform .3s cubic-bezier(.2,.8,.2,1);\n    }\n    .logo-frame:hover { transform: scale(1.06) rotate(-4deg); }\n    .logo-frame img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: 2px solid #060a0f; pointer-events: none; -webkit-user-drag: none; }\n\n    .title-group { display: flex; flex-direction: column; gap: 2px; }\n    .brand-title {\n      font-family: \"Didot\", \"Bodoni MT\", \"Playfair Display\", Georgia, serif;\n      font-weight: 600; font-size: 15px; letter-spacing: 2.5px; color: #fef2f2;\n    }\n    .brand-tag {\n      font-size: 9px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase;\n      display: flex; align-items: center; gap: 6px;\n      background: linear-gradient(90deg, #fca5a5, #dc2626, #fca5a5);\n      background-size: 200% auto;\n      -webkit-background-clip: text; background-clip: text; color: transparent;\n      animation: qxShimmer 4s linear infinite;\n    }\n    .status-dot-green {\n      width: 6px; height: 6px; border-radius: 50%;\n      background: #ef4444; display: inline-block;\n      animation: qxPulse 2.2s ease-out infinite;\n    }\n\n    .header-right { display: flex; align-items: center; gap: 6px; }\n    .btn-header-action {\n      width: 26px; height: 26px; border-radius: 8px;\n      background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);\n      color: #7f9aa3; display: flex; align-items: center; justify-content: center;\n      cursor: pointer; font-size: 13px; font-weight: 700;\n      transition: background-color .2s, color .2s, border-color .2s, transform .2s;\n    }\n    .btn-header-action:hover { background: rgba(239,68,68,.12); color: #fca5a5; border-color: rgba(239,68,68,.45); transform: translateY(-1px); }\n\n    /* Body */\n    .body { padding: 16px 16px 18px; display: flex; flex-direction: column; gap: 13px; }\n\n    /* Market Strip */\n    .market-strip {\n      background: rgba(255,255,255,.03);\n      border: 1px solid rgba(255,255,255,.07);\n      border-radius: 12px; padding: 10px 13px;\n      display: flex; align-items: center; justify-content: space-between;\n    }\n    .market-symbol { font-weight: 700; font-size: 13px; color: #fca5a5; letter-spacing: .6px; font-family: ui-monospace, Menlo, Consolas, monospace; }\n    .market-live-pill {\n      font-size: 9px; font-weight: 800; letter-spacing: 1.2px; color: #f87171;\n      background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.28);\n      padding: 3px 9px; border-radius: 20px; display: flex; align-items: center; gap: 4px;\n    }\n\n    /* Fields */\n    .field-group { display: flex; flex-direction: column; gap: 6px; }\n    .field-header { display: flex; justify-content: space-between; align-items: center; }\n    .field-label { font-size: 10px; font-weight: 700; color: #7f9aa3; letter-spacing: 1.6px; text-transform: uppercase; }\n    .countdown-indicator { font-size: 11px; font-weight: 800; color: #fca5a5; font-family: ui-monospace, monospace; letter-spacing: .5px; }\n\n    .pro-input {\n      width: 100%;\n      background: rgba(0,0,0,.45);\n      border: 1px solid rgba(255,255,255,.08);\n      border-radius: 11px; padding: 11px 13px;\n      color: #fef2f2; font-size: 13px; font-weight: 600;\n      font-family: ui-monospace, Menlo, Consolas, monospace;\n      outline: none;\n      box-shadow: 0 1px 0 rgba(255,255,255,.03) inset;\n      transition: border-color .25s, box-shadow .25s, background-color .25s;\n    }\n    .pro-input::placeholder { color: #44565e; font-size: 12px; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; }\n    .pro-input:focus { border-color: rgba(239,68,68,.7); box-shadow: 0 0 0 3px rgba(239,68,68,.12); background: rgba(0,0,0,.6); }\n    .pro-input.error { border-color: #ef4444 !important; box-shadow: 0 0 0 3px rgba(239,68,68,.12) !important; }\n\n    /* Chips */\n    .chips-row { display: flex; gap: 6px; margin-top: 2px; }\n    .chip {\n      flex: 1; padding: 5px 0; text-align: center;\n      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);\n      border-radius: 8px; font-size: 10px; font-weight: 700; color: #7f9aa3; cursor: pointer;\n      transition: background-color .2s, color .2s, border-color .2s, transform .2s;\n    }\n    .chip:hover { color: #fca5a5; border-color: rgba(239,68,68,.45); transform: translateY(-1px); }\n    .chip.active-chip { background: linear-gradient(180deg, #fca5a5, #dc2626); color: #031018; border-color: transparent; box-shadow: 0 4px 12px -4px rgba(239,68,68,.6); }\n\n    /* Progress */\n    .progress-track { height: 3px; background: rgba(255,255,255,.06); border-radius: 3px; overflow: hidden; display: none; margin-top: 2px; }\n    .progress-track.active { display: block; }\n    .progress-fill { height: 100%; width: 100%; background: linear-gradient(90deg, #dc2626, #fca5a5); box-shadow: 0 0 10px rgba(239,68,68,.6); transition: width 1s linear; }\n\n    /* Buttons */\n    .button-row { display: flex; gap: 10px; margin-top: 2px; }\n    .btn {\n      flex: 1; padding: 12px 0; border-radius: 12px; border: none;\n      font-weight: 800; font-size: 11.5px; cursor: pointer; letter-spacing: 1.6px; text-transform: uppercase;\n      position: relative; overflow: hidden;\n      transition: transform .2s cubic-bezier(.2,.8,.2,1), box-shadow .25s, background-color .25s, color .25s, border-color .25s, opacity .2s;\n    }\n    .btn:active:not(:disabled) { transform: scale(.97); }\n    .btn-start {\n      background: linear-gradient(180deg, #fca5a5 0%, #ef4444 55%, #b91c1c 100%);\n      color: #031018;\n      box-shadow: 0 10px 22px -8px rgba(239,68,68,.7), 0 1px 0 rgba(255,255,255,.5) inset;\n    }\n    .btn-start:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 14px 28px -8px rgba(239,68,68,.85), 0 1px 0 rgba(255,255,255,.5) inset; }\n    .btn-stop { background: rgba(239,68,68,.06); border: 1px solid rgba(239,68,68,.45); color: #f87171; }\n    .btn-stop:hover:not(:disabled) { background: rgba(239,68,68,.16); border-color: #ef4444; }\n    .btn:disabled { opacity: .3; cursor: not-allowed; box-shadow: none; }\n\n    /* Footer */\n    .footer { display: flex; flex-direction: column; gap: 7px; border-top: 1px solid rgba(255,255,255,.06); padding-top: 10px; }\n    .footer-status-row { display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: #5f7680; font-weight: 700; letter-spacing: .8px; }\n    .intercepts-text { color: #ef4444; font-family: ui-monospace, monospace; }\n\n    /* Minimized orb — luxury floating badge */\n    .minimized-pill {\n      position: fixed; top: 50px; left: 30px; z-index: 2147483647;\n      display: none; flex-direction: column; align-items: center; gap: 8px;\n      cursor: grab; touch-action: none;\n      transition: transform .32s cubic-bezier(.2,.8,.2,1);\n    }\n    .minimized-pill:hover { transform: scale(1.06) translateY(-2px); }\n    .minimized-pill.dragging { cursor: grabbing; transform: scale(1.08); transition: none; }\n    .orb-shell {\n      position: relative;\n      width: 72px; height: 72px; border-radius: 20px;\n      padding: 3px;\n      background: conic-gradient(from 140deg, #fca5a5, #b91c1c, #fecaca, #991b1b, #f87171, #fca5a5);\n      box-shadow: 0 16px 40px -10px rgba(0,0,0,.9), 0 0 26px -2px rgba(239,68,68,.55);\n      display: flex; align-items: center; justify-content: center; overflow: hidden;\n      animation: qxOrbGlow 3.4s ease-in-out infinite;\n    }\n    .orb-shell::before {\n      content: ''; position: absolute; inset: -40%;\n      background: conic-gradient(from 0deg, transparent 0 55%, rgba(252,165,165,.9) 72%, transparent 85% 100%);\n      animation: qxOrbRing 4.5s linear infinite; pointer-events: none;\n    }\n    .orb-shell img {\n      position: relative; z-index: 1;\n      width: 100%; height: 100%; object-fit: cover; border-radius: 17px;\n      border: 2px solid #0a0505; background: #0a0505;\n      pointer-events: none; -webkit-user-drag: none;\n    }\n    .orb-label {\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Arial, sans-serif;\n      font-size: 11px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase;\n      color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,.6);\n      padding: 4px 16px; border-radius: 10px;\n      background: linear-gradient(180deg, rgba(185,28,28,.78), rgba(32,6,6,.82));\n      border: 1px solid rgba(239,68,68,.55);\n      box-shadow: 0 6px 16px -8px rgba(239,68,68,.45), 0 1px 0 rgba(255,255,255,.06) inset;\n      pointer-events: none; white-space: nowrap;\n    }\n\n    /* License Gate */\n    .lic-head {\n      display: flex; align-items: center; justify-content: space-between;\n      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);\n      border-radius: 12px; padding: 10px 13px;\n    }\n    .lic-lock-pill {\n      font-size: 9px; font-weight: 800; letter-spacing: 1.2px; color: #fca5a5;\n      background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.35);\n      padding: 3px 9px; border-radius: 20px;\n    }\n    .lic-input { text-transform: uppercase; letter-spacing: 1.2px; text-align: center; }\n    .lic-msg { font-size: 11px; font-weight: 600; color: #f87171; min-height: 14px; line-height: 1.35; text-align: center; }\n    .btn-full { width: 100%; flex: none; }\n    .btn-contact { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.1); color: #a9c3cb; }\n    .btn-contact:hover { background: rgba(239,68,68,.08); color: #fca5a5; border-color: rgba(239,68,68,.5); }\n    .checking-text {\n      font-size: 10px; font-weight: 800; color: #5f7680; letter-spacing: 2.4px; text-align: center; padding: 22px 0;\n      display: flex; align-items: center; justify-content: center; gap: 10px;\n    }\n    .spinner { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(239,68,68,.2); border-top-color: #ef4444; animation: qxSpin .8s linear infinite; }\n    .lic-info { font-size: 9px; font-weight: 700; color: #5f7680; letter-spacing: 1.2px; text-align: center; font-family: ui-monospace, monospace; }\n  ";
      const v86 = document.createElement("div");
      v86.innerHTML = "\n    <div class=\"app-card\" id=\"appCard\">\n      <div class=\"header\" id=\"panelHeader\">\n        <div class=\"header-left\">\n          <div class=\"logo-frame\" id=\"headerLogo\" title=\"Tap to minimize\">\n            <img src=\"" + vLSDataimagejpegbase649 + "\" alt=\"\" draggable=\"false\" style=\"width:100%;height:100%;object-fit:cover;border-radius:50%;display:block\">\n          </div>\n          <div class=\"title-group\">\n            <span class=\"brand-title\">AYYAN TRADER</span>\n            <span class=\"brand-tag\"><span class=\"status-dot-green\"></span>QUOTEX PRO</span>\n          </div>\n        </div>\n        <div class=\"header-right\">\n          <div class=\"btn-header-action\" id=\"btnMinimizeHeader\" title=\"Minimize\">—</div>\n        </div>\n      </div>\n\n      <div class=\"body\" id=\"checkingView\">\n        <div class=\"checking-text\"><span class=\"spinner\"></span>VERIFYING LICENSE</div>\n      </div>\n\n      <div class=\"body\" id=\"licenseView\" style=\"display:none\">\n        <div class=\"lic-head\">\n          <span class=\"field-label\">ACCESS</span>\n          <span class=\"lic-lock-pill\">LICENSE REQUIRED</span>\n        </div>\n        <div class=\"field-group\">\n          <span class=\"field-label\">LICENSE KEY</span>\n          <input type=\"text\" class=\"pro-input lic-input\" id=\"inputLicense\" placeholder=\"ENTER YOUR LICENSE KEY\" autocomplete=\"off\" spellcheck=\"false\">\n        </div>\n        <div class=\"lic-msg\" id=\"licMsg\"></div>\n        <button class=\"btn btn-start btn-full\" id=\"btnActivate\">ACTIVATE NOW</button>\n        <button class=\"btn btn-contact btn-full\" id=\"btnContact\">CONTACT ADMIN</button>\n      </div>\n\n      <div class=\"body\" id=\"terminalView\" style=\"display:none\">\n        <div class=\"market-strip\">\n          <span class=\"market-symbol\" id=\"marketPair\">DETECTING…</span>\n          <div class=\"market-live-pill\" id=\"marketPct\">● LIVE</div>\n        </div>\n\n        <div class=\"field-group\">\n          <div class=\"field-header\">\n            <span class=\"field-label\">ROUND NUMBER</span>\n          </div>\n          <input type=\"number\" step=\"any\" class=\"pro-input\" id=\"inputPrice\" placeholder=\"Enter Round Price (e.g. 52.9900)\">\n        </div>\n\n        <div class=\"field-group\">\n          <div class=\"field-header\">\n            <span class=\"field-label\">TIME (SECOND)</span>\n            <span class=\"countdown-indicator\" id=\"countdownText\"></span>\n          </div>\n          <input type=\"number\" min=\"1\" max=\"3600\" class=\"pro-input\" id=\"inputDuration\" placeholder=\"Enter Seconds (default: 6)\">\n          <div class=\"chips-row\">\n            <div class=\"chip\" data-time=\"5\">5s</div>\n            <div class=\"chip\" data-time=\"6\">6s</div>\n            <div class=\"chip\" data-time=\"10\">10s</div>\n            <div class=\"chip\" data-time=\"15\">15s</div>\n            <div class=\"chip\" data-time=\"30\">30s</div>\n          </div>\n          <div class=\"progress-track\" id=\"progressTrack\">\n            <div class=\"progress-fill\" id=\"progressFill\"></div>\n          </div>\n        </div>\n\n        <div class=\"button-row\">\n          <button class=\"btn btn-start\" id=\"btnStart\">START</button>\n          <button class=\"btn btn-stop\" id=\"btnStop\" disabled>STOP</button>\n        </div>\n\n        <div class=\"footer\">\n          <div class=\"footer-status-row\" style=\"display:none\">\n            <span id=\"statusText\">● STANDBY</span>\n            <span class=\"intercepts-text\" id=\"ticksCount\">INTERCEPTS: 0</span>\n          </div>\n          <div class=\"lic-info\" id=\"licInfo\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"minimized-pill\" id=\"minimizedPill\" title=\"Quotex Glitch - Click to Open\">\n      <div class=\"orb-shell\"><img src=\"" + vLSDataimagejpegbase649 + "\" alt=\"\" draggable=\"false\"></div>\n      <span class=\"orb-label\">GLITCH</span>\n    </div>\n  ";
      v84.appendChild(v85);
      v84.appendChild(v86);
      document.body.appendChild(v83);
      const v87 = v84.getElementById("appCard");
      const v88 = v84.getElementById("panelHeader");
      const v89 = v84.getElementById("headerLogo");
      const v90 = v84.getElementById("btnMinimizeHeader");
      const v91 = v84.getElementById("minimizedPill");
      const v92 = v84.getElementById("inputPrice");
      const v93 = v84.getElementById("inputDuration");
      const v94 = v84.getElementById("countdownText");
      const v95 = v84.getElementById("progressTrack");
      const v96 = v84.getElementById("progressFill");
      const v97 = v84.getElementById("btnStart");
      const v98 = v84.getElementById("btnStop");
      const v99 = v84.getElementById("marketPair");
      const v100 = v84.getElementById("marketPct");
      const v101 = v84.getElementById("statusText");
      const v102 = v84.getElementById("ticksCount");
      const v103 = v84.querySelectorAll(".chip");
      const v104 = v84.getElementById("checkingView");
      const v105 = v84.getElementById("licenseView");
      const v106 = v84.getElementById("terminalView");
      const v107 = v84.getElementById("inputLicense");
      const v108 = v84.getElementById("licMsg");
      const v109 = v84.getElementById("btnActivate");
      const v110 = v84.getElementById("btnContact");
      const v111 = v84.getElementById("licInfo");
      const vLSHttpstmeayyan_trader = "https://t.me/mrbeaxt_trader";
      const LOCAL_LICENSE_KEYS = ["MRBEAXT", "MRBEAXTVIP"];
      const LOCAL_LICENSE_DAYS = 30;
      const LICENSE_EXPIRED_MSG = "License expired. Contact mrbeaxt_trader";
      function isLocalLicenseKey(key) {
        return LOCAL_LICENSE_KEYS.includes(String(key || "").trim().toUpperCase());
      }
      function makeLocalExpiry() {
        return new Date(Date.now() + LOCAL_LICENSE_DAYS * 24 * 60 * 60 * 1000).toISOString();
      }
      function isLicenseExpired(lic) {
        if (!lic || !lic.expires_at) {
          return false;
        }
        const exp = new Date(lic.expires_at).getTime();
        return !isNaN(exp) && Date.now() > exp;
      }
      const vVO11 = {
        valid: false,
        checking: false
      };
      const vF8 = function () {
        try {
          var v112 = document.currentScript && document.currentScript.src;
          if (!v112) {
            var v113 = document.getElementsByTagName("script");
            for (var v114 = v113.length - 1; v114 >= 0; v114--) {
              if (v113[v114].src && v113[v114].src.indexOf("/api/engine.js") !== -1) {
                v112 = v113[v114].src;
                break;
              }
            }
          }
          if (v112) {
            return v112.replace(/\/api\/engine\.js.*$/, "");
          }
        } catch (e16) {}
        return "https://market-glitch.vercel.app";
      }();
      const vLSQx_license = "qx_license";
      function f30() {
        let v115 = localStorage.getItem("qx_device_id");
        if (!v115) {
          v115 = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random();
          localStorage.setItem("qx_device_id", v115);
        }
        return v115;
      }
      async function f31(p56, p57) {
        const v116 = await fetch(vF8 + p56, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(p57)
        });
        let vO12 = {};
        try {
          vO12 = await v116.json();
        } catch (e17) {}
        const vO13 = {
          ok: v116.ok,
          status: v116.status,
          data: vO12
        };
        return vO13;
      }
      async function f32(p58) {
        const v117 = localStorage.getItem(vLSQx_license);
        if (!v117) {
          return {
            valid: false,
            reason: "none"
          };
        }
        let v118;
        try {
          v118 = JSON.parse(v117);
        } catch (e18) {
          return {
            valid: false,
            reason: "none"
          };
        }
        if (isLocalLicenseKey(v118.key)) {
          if (isLicenseExpired(v118)) {
            localStorage.removeItem(vLSQx_license);
            return {
              valid: false,
              reason: "expired",
              message: LICENSE_EXPIRED_MSG
            };
          }
          v118.lastOk = Date.now();
          localStorage.setItem(vLSQx_license, JSON.stringify(v118));
          const vO16 = {
            valid: true,
            license: v118
          };
          return vO16;
        }
        try {
          const v119 = await f31("/api/license/verify", {
            token: v118.token,
            fingerprint: v118.fingerprint,
            host: p58 || null,
            version: "bookmark-1.0.0"
          });
          if (v119.ok && v119.data.valid === true) {
            v118.lastOk = Date.now();
            v118.expires_at = v119.data.license.expires_at;
            localStorage.setItem(vLSQx_license, JSON.stringify(v118));
            const vO17 = {
              valid: true,
              license: v118
            };
            return vO17;
          }
          if (v119.ok && v119.data.valid === false) {
            localStorage.removeItem(vLSQx_license);
            const vO18 = {
              valid: false,
              reason: v119.data.reason,
              message: v119.data.message
            };
            return vO18;
          }
          throw new Error("srv");
        } catch (e19) {
          if (v118.lastOk && Date.now() - v118.lastOk < 90000) {
            const vO19 = {
              valid: true,
              license: v118,
              offline: true
            };
            return vO19;
          }
          return {
            valid: false,
            reason: "network",
            message: "Cannot reach license server (this site may be blocking it)."
          };
        }
      }
      async function f33(p59, p60, p61) {
        try {
          const vF30 = f30();
          if (isLocalLicenseKey(p59)) {
            const vO21 = {
              token: "local",
              key: p59.trim().toUpperCase(),
              expires_at: makeLocalExpiry(),
              fingerprint: p60,
              lastOk: Date.now()
            };
            localStorage.setItem(vLSQx_license, JSON.stringify(vO21));
            const vO22 = {
              ok: true,
              license: vO21
            };
            return vO22;
          }
          const vO23 = {
            key: p59,
            fingerprint: p60,
            device_id: vF30,
            info: {
              ...p61
            }
          };
          vO23.info.deviceId = vF30;
          const v120 = await f31("/api/license/activate", vO23);
          if (!v120.ok) {
            return {
              ok: false,
              message: typeof v120.data.detail === "string" ? v120.data.detail : "Activation failed. Try again."
            };
          }
          const vO24 = {
            token: v120.data.token,
            key: v120.data.license.key,
            expires_at: v120.data.license.expires_at,
            fingerprint: p60,
            lastOk: Date.now()
          };
          localStorage.setItem(vLSQx_license, JSON.stringify(vO24));
          const vO25 = {
            ok: true,
            license: vO24
          };
          return vO25;
        } catch (e20) {
          return {
            ok: false,
            message: "Cannot reach license server (this site may be blocking it)."
          };
        }
      }
      function f34(p62) {
        v104.style.display = p62 === "checking" ? "flex" : "none";
        v105.style.display = p62 === "license" ? "flex" : "none";
        v106.style.display = p62 === "terminal" ? "flex" : "none";
      }
      function f35(p63) {
        if (p63) {
          return p63.slice(0, 8) + "••••" + p63.slice(-4);
        } else {
          return "";
        }
      }
      function f36(p64) {
        vVO11.valid = true;
        const v121 = p64.expires_at ? new Date(p64.expires_at).toLocaleDateString() : "LIFETIME";
        v111.textContent = "LICENSE " + f35(p64.key) + " · EXP " + v121;
        f34("terminal");
      }
      function f37(p65) {
        if (vVO8.active) {
          f48();
        }
        vVO11.valid = false;
        v108.textContent = p65 || "";
        f34("license");
      }
      async function f38() {
        if (vVO11.checking) {
          return;
        }
        vVO11.checking = true;
        const v122 = await f32(location.hostname);
        vVO11.checking = false;
        if (v122 && v122.valid) {
          f36(v122.license);
        } else {
          f37(v122 && v122.reason !== "none" ? v122.message : "");
        }
      }
      async function f39() {
        const v123 = v107.value.trim().toUpperCase();
        if (!v123) {
          v107.classList.add("error");
          // TOLOOK
          setTimeout(() => v107.classList.remove("error"), 800);
          v108.textContent = "Please enter your license key.";
          return;
        }
        v109.disabled = true;
        v109.textContent = "ACTIVATING...";
        v108.textContent = "";
        const v124 = await globalThis.QXFP.collectInfo();
        const v125 = await globalThis.QXFP.getFingerprint(v124);
        const v126 = await f33(v123, v125, v124);
        v109.disabled = false;
        v109.textContent = "ACTIVATE NOW";
        if (v126 && v126.ok) {
          v107.value = "";
          f36(v126.license);
        } else {
          v108.textContent = v126 && v126.message || "Activation failed.";
        }
      }
      v109.addEventListener("click", f39);
      v107.addEventListener("keydown", p66 => {
        p66.stopPropagation();
        if (p66.key === "Enter") {
          f39();
        }
      });
      v107.addEventListener("keyup", p67 => p67.stopPropagation());
      v110.addEventListener("click", () => window.open(vLSHttpstmeayyan_trader, "_blank", "noopener"));
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          f38();
        }
      });
      // TOLOOK
      setInterval(f38, 30000);
      f38();
      v103.forEach(p68 => {
        p68.addEventListener("click", () => {
          v103.forEach(p69 => p69.classList.remove("active-chip"));
          p68.classList.add("active-chip");
          v93.value = p68.getAttribute("data-time");
        });
      });
      let v127 = false;
      let v128 = false;
      let vLN02 = 0;
      let vLN03 = 0;
      let vLN04 = 0;
      let vLN05 = 0;
      function f40(p70) {
        if (p70.target.closest("input") || p70.target.closest("button") || p70.target.closest(".chip")) {
          return;
        }
        if (!p70.touches) {
          p70.preventDefault();
        }
        v127 = true;
        v128 = false;
        const v129 = p70.touches ? p70.touches[0].clientX : p70.clientX;
        const v130 = p70.touches ? p70.touches[0].clientY : p70.clientY;
        vLN04 = v129;
        vLN05 = v130;
        const v131 = vVO8.isMinimized ? v91 : v87;
        const v132 = v131.getBoundingClientRect();
        vLN02 = v129 - v132.left;
        vLN03 = v130 - v132.top;
        window.addEventListener("mousemove", f41, {
          passive: false
        });
        window.addEventListener("mouseup", f42);
        window.addEventListener("touchmove", f41, {
          passive: false
        });
        window.addEventListener("touchend", f42);
      }
      function f41(p71) {
        if (!v127) {
          return;
        }
        p71.preventDefault();
        const v133 = p71.touches ? p71.touches[0].clientX : p71.clientX;
        const v134 = p71.touches ? p71.touches[0].clientY : p71.clientY;
        const v135 = vVO8.isMinimized ? v91 : v87;
        if (!v128 && Math.abs(v133 - vLN04) + Math.abs(v134 - vLN05) < 5) {
          return;
        }
        if (!v128) {
          v128 = true;
          v135.classList.add("dragging");
        }
        const v136 = Math.max(10, Math.min(window.innerWidth - v135.offsetWidth - 10, v133 - vLN02));
        const v137 = Math.max(10, Math.min(window.innerHeight - v135.offsetHeight - 10, v134 - vLN03));
        v135.style.left = v136 + "px";
        v135.style.top = v137 + "px";
      }
      function f42() {
        v127 = false;
        v91.classList.remove("dragging");
        v87.classList.remove("dragging");
        if (v128) {
          // TOLOOK
          setTimeout(() => {
            v128 = false;
          }, 0);
        }
        window.removeEventListener("mousemove", f41);
        window.removeEventListener("mouseup", f42);
        window.removeEventListener("touchmove", f41);
        window.removeEventListener("touchend", f42);
      }
      v88.addEventListener("mousedown", f40);
      v88.addEventListener("touchstart", f40, {
        passive: false
      });
      v91.addEventListener("mousedown", f40);
      v91.addEventListener("touchstart", f40, {
        passive: false
      });
      function f43(p72) {
        vVO8.isMinimized = p72;
        const vV87 = v87;
        if (p72) {
          const v138 = vV87.getBoundingClientRect();
          v91.style.left = Math.max(10, v138.left) + "px";
          v91.style.top = Math.max(10, v138.top) + "px";
          vV87.style.animation = "qxLuxClose .42s cubic-bezier(.4,0,.2,1) forwards";
          const vF9 = () => {
            vV87.removeEventListener("animationend", vF9);
            vV87.style.display = "none";
            vV87.style.animation = "";
            v91.style.display = "flex";
            v91.style.animation = "qxOrbIn .55s cubic-bezier(.2,.8,.25,1.3) both";
          };
          vV87.addEventListener("animationend", vF9);
        } else {
          const v139 = v91.getBoundingClientRect();
          v91.style.display = "none";
          v91.style.animation = "";
          vV87.style.left = Math.max(10, Math.min(window.innerWidth - vV87.offsetWidth - 10, v139.left)) + "px";
          vV87.style.top = Math.max(10, Math.min(window.innerHeight - vV87.offsetHeight - 10, v139.top)) + "px";
          vV87.style.display = "block";
          vV87.style.animation = "qxLuxOpen .55s cubic-bezier(.2,.8,.2,1) both";
        }
      }
      v89.addEventListener("click", p73 => {
        p73.stopPropagation();
        if (v128) {
          return;
        }
        f43(true);
      });
      v90.addEventListener("click", p74 => {
        p74.stopPropagation();
        f43(true);
      });
      v91.addEventListener("click", () => {
        if (!v128) {
          f43(false);
        }
      });
      const v140 = /^[A-Z]{2,6}\/[A-Z]{2,6}(\s*\(OTC\))?$/;
      const v141 = /^\+?\d{1,3}\s*%$/;
      const vA = [".asset-select__name", ".tab--active .tab__label", ".tab.active .tab__label", "[class*=\"asset-select\"] [class*=\"name\"]", "[class*=\"tab--active\"] [class*=\"label\"]", "[class*=\"active\"] [class*=\"asset\"] [class*=\"name\"]"];
      const vA2 = [".section-deal__percent", ".asset-select__profit", "[class*=\"asset-select\"] [class*=\"profit\"]", "[class*=\"section-deal\"] [class*=\"percent\"]", "[class*=\"tab--active\"] [class*=\"percent\"]", "[class*=\"profit\"]"];
      const vF10 = p75 => (p75?.textContent || "").split("\n")[0].replace(/\s+/g, " ").trim();
      function f44(p76, p77) {
        for (const v142 of p76) {
          let v143;
          try {
            v143 = document.querySelectorAll(v142);
          } catch (e21) {
            continue;
          }
          for (const v144 of v143) {
            const vVF10 = vF10(v144);
            if (p77.test(vVF10)) {
              return vVF10;
            }
          }
        }
        return null;
      }
      function f45() {
        const v145 = document.querySelectorAll("div, span, button");
        for (const v146 of v145) {
          if (v146.children.length > 1) {
            continue;
          }
          const vVF102 = vF10(v146);
          if (v140.test(vVF102)) {
            return vVF102;
          }
        }
        return null;
      }
      let vLS = "";
      let vLS2 = "";
      let v147 = false;
      function f46(p78, p79) {
        if (p78 && p78 !== vLS) {
          vLS = p78;
          v99.textContent = p78.slice(0, 20);
        }
        if (p79 !== vLS2) {
          vLS2 = p79;
          v100.textContent = p79 ? "● " + p79 : "● LIVE";
        }
      }
      function f47() {
        if (v147) {
          return;
        }
        const v148 = f44(vA, v140) || f45();
        const vF44 = f44(vA2, v141);
        f46(v148, vF44 ? vF44.replace(/\s+/g, "").replace(/^\+/, "") : "");
      }
      f47();
      // TOLOOK
      setInterval(f47, 1000);
      f28("GET_MARKET");
      const vSetInterval = // TOLOOK
      setInterval(() => {
        if (v147) {
          clearInterval(vSetInterval);
        } else {
          f28("GET_MARKET");
        }
      }, 2000);
      v92.addEventListener("keydown", p80 => {
        if (p80.key === "Enter") {
          v97.click();
        }
      });
      v93.addEventListener("keydown", p81 => {
        if (p81.key === "Enter") {
          v97.click();
        }
      });
      v97.addEventListener("click", () => {
        if (!vVO11.valid) {
          f37("License required.");
          return;
        }
        const v149 = v92.value.trim();
        const vParseFloat = parseFloat(v149);
        if (isNaN(vParseFloat)) {
          v92.focus();
          v92.classList.add("error");
          // TOLOOK
          setTimeout(() => v92.classList.remove("error"), 800);
          return;
        }
        const v150 = parseInt(v93.value.trim(), 10) || 6;
        vVO8.active = true;
        vVO8.mockPrice = vParseFloat;
        vVO8.duration = v150;
        vVO8.remainingSeconds = v150;
        v87.classList.add("running");
        v97.disabled = true;
        v98.disabled = false;
        v95.classList.add("active");
        v101.textContent = "● SPIKE ACTIVE";
        v101.style.color = "#ef4444";
        v94.textContent = v150 + "s";
        const vO31 = {
          price: vParseFloat,
          duration: v150
        };
        f28("START_MOCK", vO31);
        clearInterval(vVO8.timerInterval);
        vVO8.timerInterval = // TOLOOK
        setInterval(() => {
          vVO8.remainingSeconds--;
          f49();
          if (vVO8.remainingSeconds <= 0) {
            f48();
          }
        }, 1000);
      });
      v98.addEventListener("click", f48);
      function f48() {
        vVO8.active = false;
        clearInterval(vVO8.timerInterval);
        v87.classList.remove("running");
        v97.disabled = false;
        v98.disabled = true;
        v95.classList.remove("active");
        v94.textContent = "";
        v101.textContent = "● STANDBY";
        v101.style.color = "#5f7680";
        f28("STOP_MOCK");
      }
      function f49() {
        const v151 = Math.max(0, vVO8.remainingSeconds / vVO8.duration * 100);
        v96.style.width = v151 + "%";
        v94.textContent = vVO8.remainingSeconds + "s";
      }
      window.addEventListener("message", p82 => {
        if (p82.source !== window || p82.data?.source !== "ROUND_CONTROL_INJECTED") {
          return;
        }
        const {
          type: _0x1aee47,
          payload: _0x1560ca
        } = p82.data;
        if (_0x1aee47 === "STATUS_UPDATE") {
          if (typeof _0x1560ca.intercepts === "number") {
            v102.textContent = "INTERCEPTS: " + _0x1560ca.intercepts;
          }
        } else if (_0x1aee47 === "MARKET_UPDATE") {
          if (_0x1560ca && _0x1560ca.name) {
            v147 = true;
            f46(_0x1560ca.name, _0x1560ca.payout !== null && _0x1560ca.payout !== undefined ? _0x1560ca.payout + "%" : "");
          }
        } else if (_0x1aee47 === "AUTO_STOP") {
          f48();
        }
      });
    }
    if (document.body) {
      f29();
    } else {
      window.addEventListener("DOMContentLoaded", f29);
    }
  })();
})();