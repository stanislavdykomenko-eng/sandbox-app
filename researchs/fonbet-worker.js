!(function () {
  "use strict";
  var A = {
      72883: function () {
        const A = "a".charCodeAt(0) - 10,
          I = "0".charCodeAt(0);
        const i = new TextEncoder();
        var g = function (A, I, i, g) {
          return new (i || (i = Promise))(function (B, n) {
            function c(A) {
              try {
                Q(g.next(A));
              } catch (A) {
                n(A);
              }
            }
            function t(A) {
              try {
                Q(g.throw(A));
              } catch (A) {
                n(A);
              }
            }
            function Q(A) {
              var I;
              A.done
                ? B(A.value)
                : ((I = A.value),
                  I instanceof i
                    ? I
                    : new i(function (A) {
                        A(I);
                      })).then(c, t);
            }
            Q((g = g.apply(A, I || [])).next());
          });
        };
        var B = class Mutex {
          constructor() {
            this._mutex = Promise.resolve();
          }
          lock() {
            let A = () => {};
            return (
              (this._mutex = this._mutex.then(() => new Promise(A))),
              new Promise((I) => {
                A = I;
              })
            );
          }
          dispatch(A) {
            return g(this, void 0, void 0, function* () {
              const I = yield this.lock();
              try {
                return yield Promise.resolve(A());
              } finally {
                I();
              }
            });
          }
        };
        function n(A) {
          if ("function" == typeof Uint8Array.fromBase64)
            return Uint8Array.fromBase64(A);
          const I = atob(A),
            i = I.length,
            g = new Uint8Array(i);
          for (let A = 0; A < i; A++) g[A] = I.charCodeAt(A);
          return g;
        }
        var c = JSON.parse(
            '{"p":"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"}',
          ),
          t = function (A, I, i, g) {
            return new (i || (i = Promise))(function (B, n) {
              function c(A) {
                try {
                  Q(g.next(A));
                } catch (A) {
                  n(A);
                }
              }
              function t(A) {
                try {
                  Q(g.throw(A));
                } catch (A) {
                  n(A);
                }
              }
              function Q(A) {
                var I;
                A.done
                  ? B(A.value)
                  : ((I = A.value),
                    I instanceof i
                      ? I
                      : new i(function (A) {
                          A(I);
                        })).then(c, t);
              }
              Q((g = g.apply(A, I || [])).next());
            });
          };
        const Q = new B();
        let e;
        function E() {
          return t(this, void 0, void 0, function* () {
            const A = yield (function () {
                return t(this, void 0, void 0, function* () {
                  return Q.dispatch(() =>
                    t(this, void 0, void 0, function* () {
                      if ("undefined" == typeof WebAssembly)
                        throw new Error(
                          "WebAssembly is not supported in this environment!",
                        );
                      if (!e) {
                        const A = n(c.p);
                        e = WebAssembly.compile(A).catch((A) => {
                          throw ((e = void 0), A);
                        });
                      }
                      return yield e;
                    }),
                  );
                });
              })(),
              I = yield WebAssembly.instantiate(A);
            return (
              (function (A) {
                const I = A.exports;
                if (!(I.memory instanceof WebAssembly.Memory))
                  throw new Error(
                    "Invalid SHA256 wasm exports: memory is missing",
                  );
                if (!(I.STATE_SIZE instanceof WebAssembly.Global))
                  throw new Error(
                    "Invalid SHA256 wasm exports: STATE_SIZE is missing",
                  );
                if (!(I.MAIN_BUFFER_SIZE instanceof WebAssembly.Global))
                  throw new Error(
                    "Invalid SHA256 wasm exports: MAIN_BUFFER_SIZE is missing",
                  );
                if ("function" != typeof I.Hash_Init)
                  throw new Error(
                    "Invalid SHA256 wasm exports: Hash_Init is missing",
                  );
                if ("function" != typeof I.Hash_Update)
                  throw new Error(
                    "Invalid SHA256 wasm exports: Hash_Update is missing",
                  );
                if ("function" != typeof I.Hash_Final)
                  throw new Error(
                    "Invalid SHA256 wasm exports: Hash_Final is missing",
                  );
                if ("function" != typeof I.Hash_GetBuffer)
                  throw new Error(
                    "Invalid SHA256 wasm exports: Hash_GetBuffer is missing",
                  );
                if ("function" != typeof I.Hash_GetState)
                  throw new Error(
                    "Invalid SHA256 wasm exports: Hash_GetState is missing",
                  );
              })(I),
              I
            );
          });
        }
        var o = function (A, I, i, g) {
          return new (i || (i = Promise))(function (B, n) {
            function c(A) {
              try {
                Q(g.next(A));
              } catch (A) {
                n(A);
              }
            }
            function t(A) {
              try {
                Q(g.throw(A));
              } catch (A) {
                n(A);
              }
            }
            function Q(A) {
              var I;
              A.done
                ? B(A.value)
                : ((I = A.value),
                  I instanceof i
                    ? I
                    : new i(function (A) {
                        A(I);
                      })).then(c, t);
            }
            Q((g = g.apply(A, I || [])).next());
          });
        };
        class Sha256Hasher {
          constructor(A) {
            ((this._instance = A),
              (this._initialized = !1),
              this.initMemoryMaxSize(A),
              this.initMemoryView(A),
              this.initStateView(A),
              this.initDigestBufferView());
          }
          static create() {
            return o(this, void 0, void 0, function* () {
              const A = yield E();
              return new Sha256Hasher(A);
            });
          }
          init() {
            return (
              (this._initialized = !0),
              this._instance.exports.Hash_Init(256),
              this
            );
          }
          update(A) {
            if (!this._initialized)
              throw new Error("update() called before init()");
            const I = (function (A) {
              if (A instanceof Uint8Array) return A;
              if ("string" == typeof A) return i.encode(A);
              if (ArrayBuffer.isView(A))
                return new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
              throw new Error("Invalid data type!");
            })(A);
            return I.length <= this._memoryMaxSize
              ? (this._memoryView.set(I),
                this._instance.exports.Hash_Update(I.length),
                this)
              : (this.updateUInt8Array(I), this);
          }
          save() {
            if (!this._initialized)
              throw new Error(
                "save() can only be called after init() and before digest()",
              );
            return this._stateView.slice();
          }
          load(A) {
            return (this._stateView.set(A), (this._initialized = !0), this);
          }
          digest() {
            let i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "hex";
            if (!this._initialized)
              throw new Error("digest() called before init()");
            return (
              (this._initialized = !1),
              this._instance.exports.Hash_Final(),
              "binary" === i
                ? this._memoryView.slice(0, 32)
                : "binary-unsafe" === i
                  ? this._memoryView.subarray(0, 32)
                  : (function (i, g, B) {
                      let n = 0;
                      for (let c = 0; c < B; c++) {
                        let B = g[c] >>> 4;
                        ((i[n++] = B > 9 ? B + A : B + I),
                          (B = 15 & g[c]),
                          (i[n++] = B > 9 ? B + A : B + I));
                      }
                      return String.fromCharCode.apply(null, i);
                    })(this._digestBuffer, this._memoryView, 32)
            );
          }
          initMemoryMaxSize(A) {
            const I = A.exports.memory.buffer,
              i = new DataView(I),
              g = Number(A.exports.MAIN_BUFFER_SIZE.value);
            this._memoryMaxSize = i.getUint32(g, !0);
          }
          initMemoryView(A) {
            const I = A.exports.memory.buffer,
              i = A.exports.Hash_GetBuffer();
            this._memoryView = new Uint8Array(I, i, this._memoryMaxSize);
          }
          initStateView(A) {
            const I = A.exports.memory.buffer,
              i = new DataView(I),
              g = Number(A.exports.STATE_SIZE.value),
              B = i.getUint32(g, !0),
              n = A.exports.Hash_GetState();
            this._stateView = new Uint8Array(I, n, B);
          }
          initDigestBufferView() {
            this._digestBuffer = new Uint8Array(64);
          }
          updateUInt8Array(A) {
            let I = 0;
            for (; I < A.length; ) {
              const i = A.subarray(I, I + this._memoryMaxSize);
              ((I += i.length),
                this._memoryView.set(i),
                this._instance.exports.Hash_Update(i.length));
            }
          }
        }
        const a = new TextEncoder();
        function d(A) {
          let I = "";
          for (let i = 0; i < A.length; i += 1)
            I += A[i].toString(16).padStart(2, "0");
          return I;
        }
        const r = new Uint8Array(256);
        for (let A = 0; A < 256; A += 1) r[A] = Math.clz32(A) - 24;
        function y(A) {
          let I = 0;
          for (let i = 0; i < A.length; i += 1) {
            const g = r[A[i]];
            if (((I += g), 8 !== g)) return I;
          }
          return I;
        }
        class DecimalCounterBuffer {
          constructor() {
            let A =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 21;
            ((this.buffer = new Uint8Array(A)),
              (this.cachedViews = new Array(A + 1)));
            for (let I = 0; I <= A; I += 1)
              this.cachedViews[I] = this.buffer.subarray(I);
            ((this.startIndex = A - 1), (this.buffer[this.startIndex] = 48));
          }
          writeUnsafe(A) {
            return this.writeInternal(A);
          }
          addUnsafe(A) {
            let I = A,
              i = this.buffer.length - 1;
            for (; I > 0 && i >= 0; ) {
              const A = I % 10;
              I = (I - A) / 10;
              let g = (i >= this.startIndex ? this.buffer[i] - 48 : 0) + A;
              (g >= 10 && ((g -= 10), (I += 1)),
                (this.buffer[i] = 48 + g),
                (i -= 1));
            }
            if (I > 0)
              throw new Error("Counter overflow in DecimalCounterBuffer");
            const g = i + 1;
            return (
              g < this.startIndex && (this.startIndex = g),
              this.cachedViews[this.startIndex]
            );
          }
          write(A) {
            if (!Number.isSafeInteger(A) || A < 0)
              throw new Error(
                `Counter must be a non-negative safe integer, got ${A}`,
              );
            return this.writeInternal(A);
          }
          writeInternal(A) {
            let I = A,
              i = this.buffer.length;
            do {
              const A = I % 10;
              ((i -= 1), (this.buffer[i] = 48 + A), (I = (I - A) / 10));
            } while (I > 0);
            return ((this.startIndex = i), this.cachedViews[i]);
          }
        }
        var s = function (A, I, i, g) {
          return new (i || (i = Promise))(function (B, n) {
            function c(A) {
              try {
                Q(g.next(A));
              } catch (A) {
                n(A);
              }
            }
            function t(A) {
              try {
                Q(g.throw(A));
              } catch (A) {
                n(A);
              }
            }
            function Q(A) {
              var I;
              A.done
                ? B(A.value)
                : ((I = A.value),
                  I instanceof i
                    ? I
                    : new i(function (A) {
                        A(I);
                      })).then(c, t);
            }
            Q((g = g.apply(A, I || [])).next());
          });
        };
        let C = !1,
          N = null,
          h = null;
        function l(A, I) {
          for (let i = 0; i < A.length; i += 1) {
            const g = A[i] - I[i];
            if (0 !== g) return g;
          }
          return 0;
        }
        function z(A, I) {
          return I < 4
            ? Math.min(2 * A, 32768)
            : I > 18
              ? Math.max(Math.floor(A / 2), 256)
              : A;
        }
        function u() {
          return C || (null !== N && 1 === Atomics.load(N, 0));
        }
        function D() {
          ((C = !0), null !== N && Atomics.store(N, 0, 1));
        }
        self.onmessage = (A) => {
          const I = A.data;
          switch (I.type) {
            case "start":
              return void (function (A) {
                s(this, void 0, void 0, function* () {
                  ((C = !1),
                    (N = A.sharedStopBuffer
                      ? new Int32Array(A.sharedStopBuffer)
                      : null));
                  const {
                      challenge: I,
                      difficulty: i,
                      maxSolveTime: g,
                      workerId: B,
                      workersCount: c,
                      challengeEncoding: t = "utf8",
                      initialBatchSize: Q = 2048,
                      safetyMarginMs: e = 24,
                    } = A,
                    E = (function (A) {
                      let I =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "utf8";
                      switch (I) {
                        case "utf8":
                          return a.encode(A);
                        case "base64":
                          return n(A);
                        default:
                          throw new Error(
                            `Unsupported challenge encoding: ${String(I)}`,
                          );
                      }
                    })(I, t),
                    o = yield (function () {
                      return s(this, void 0, void 0, function* () {
                        return (
                          null === h && (h = Sha256Hasher.create()),
                          yield h
                        );
                      });
                    })(),
                    r = new DecimalCounterBuffer();
                  (o.init(), o.update(E));
                  const f = o.save(),
                    M = performance.now(),
                    p = M + Math.max(0, g - e);
                  let q = B,
                    F = Q,
                    R = 0,
                    S = M,
                    G = 0,
                    H = -1,
                    J = null,
                    w = r.writeUnsafe(q);
                  for (; !u(); ) {
                    const A = performance.now();
                    for (let A = 0; A < F; A += 1) {
                      (o.load(f), o.update(w));
                      const A = o.digest("binary-unsafe"),
                        I = y(A);
                      if (
                        (I > H
                          ? ((H = I),
                            (G = q),
                            null === J ? (J = A.slice()) : J.set(A))
                          : I === H &&
                            null !== J &&
                            l(A, J) < 0 &&
                            ((G = q), J.set(A)),
                        (R += 1),
                        I >= i)
                      )
                        return (
                          D(),
                          void postMessage({
                            type: "solved",
                            payload: {
                              solved: !0,
                              counter: String(q),
                              leadingZeroBits: I,
                              hashHex: d(A),
                              elapsedMs: Math.round(performance.now() - M),
                              attempts: q,
                            },
                          })
                        );
                      ((q += c), (w = r.addUnsafe(c)));
                    }
                    const I = performance.now();
                    if (
                      (I - S >= 200 &&
                        (postMessage({
                          type: "progress",
                          payload: {
                            workerId: B,
                            hashesTried: R,
                            bestLeadingZeroBits: Math.max(H, 0),
                          },
                        }),
                        (S = I)),
                      I >= p)
                    )
                      return void postMessage({
                        type: "timeout-best",
                        payload: {
                          solved: !1,
                          counter: J ? String(G) : "0",
                          leadingZeroBits: Math.max(H, 0),
                          hashHex: J ? d(J) : "",
                          elapsedMs: Math.round(I - M),
                          attempts: R * c,
                        },
                      });
                    F = z(F, I - A);
                  }
                  postMessage({
                    type: "stopped",
                    payload: J
                      ? {
                          solved: !1,
                          counter: String(G),
                          leadingZeroBits: Math.max(H, 0),
                          hashHex: d(J),
                          elapsedMs: Math.round(performance.now() - M),
                          attempts: q,
                        }
                      : null,
                  });
                });
              })(I.payload);
            case "stop":
              return ((C = !0), void (null != N && Atomics.store(N, 0, 1)));
            default:
              return;
          }
        };
      },
    },
    I = {};
  function i(g) {
    var B = I[g];
    if (void 0 !== B) return B.exports;
    var n = (I[g] = { exports: {} });
    return (A[g](n, n.exports, i), n.exports);
  }
  ((i.m = A),
    (i.c = I),
    (i.o = function (A, I) {
      return Object.prototype.hasOwnProperty.call(A, I);
    }),
    (function () {
      i.S = {};
      var A = {},
        I = {};
      i.I = function (g, B) {
        B || (B = []);
        var n = I[g];
        if ((n || (n = I[g] = {}), !(B.indexOf(n) >= 0))) {
          if ((B.push(n), A[g])) return A[g];
          i.o(i.S, g) || (i.S[g] = {});
          i.S[g];
          var c = [];
          return c.length
            ? (A[g] = Promise.all(c).then(function () {
                return (A[g] = 1);
              }))
            : (A[g] = 1);
        }
      };
    })(),
    (function () {
      if (void 0 !== i) {
        var A = i.u,
          I = i.e,
          g = {},
          B = {},
          n = i.l;
        ((i.l = function (A, I, i, g) {
          var c = 12e4;
          if ("undefined" != typeof window) {
            var t =
                !!window.staticManager &&
                window.staticManager.hasAvailableServer(),
              Q = "number" == typeof window.__CHUNK_TIMEOUT__;
            t && Q && (c = window.__CHUNK_TIMEOUT__);
          }
          B[A] = !1;
          var e = setTimeout(function () {
            ((B[A] = !0), I({ type: "timeout", target: { src: A } }));
          }, c);
          return n(
            A,
            function (A) {
              (clearTimeout(e), I(A));
            },
            i,
            g,
          );
        }),
          (i.e = function (n) {
            const c = window.staticManager
              ? window.staticManager.getServer()
              : null;
            if (c) {
              const A = window._buildInfo.staticSiteDir;
              i.p = window.location.protocol + c + A + "/";
            }
            var t = i.p + A(n);
            return I(n)
              .then(function (A) {
                return (
                  window.staticManager &&
                    c &&
                    !B[t] &&
                    window.staticManager.markAsAvailable(c),
                  delete B[t],
                  A
                );
              })
              .catch(function (A) {
                (window.staticManager &&
                  c &&
                  window.staticManager.markAsUnavailable(c),
                  delete B[t]);
                var I = g.hasOwnProperty(n) ? g[n] : 10;
                if (I < 1) throw A;
                return new Promise(function (A) {
                  var B = window.staticManager
                    ? window.staticManager.listLength
                    : 10;
                  setTimeout(
                    function () {
                      ((g[n] = I - 1), A(i.e(n)));
                    },
                    (function (A) {
                      return A > 3 ? 1e3 : 300 * A;
                    })(B - I + 1),
                  );
                });
              });
          }));
      }
    })());
  i(72883);
})();
