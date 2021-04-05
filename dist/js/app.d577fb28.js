(function (e) { function t(t) { for (var a, r, i = t[0], u = t[1], c = t[2], l = 0, d = []; l < i.length; l++)r = i[l], Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]), n[r] = 0; for (a in u)Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]); m && m(t); while (d.length)d.shift()(); return o.push.apply(o, c || []), s(); } function s() { for (var e, t = 0; t < o.length; t++) { for (var s = o[t], a = !0, r = 1; r < s.length; r++) { const u = s[r]; n[u] !== 0 && (a = !1); }a && (o.splice(t--, 1), e = i(i.s = s[0])); } return e; } const a = {}; var n = { app: 0 }; var o = []; function r(e) { return `${i.p}js/${{ about: 'about' }[e] || e}.${{ about: '1c98f0bb' }[e]}.js`; } function i(t) { if (a[t]) return a[t].exports; const s = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(s.exports, s, s.exports, i), s.l = !0, s.exports; }i.e = function (e) { const t = []; let s = n[e]; if (s !== 0) if (s)t.push(s[2]); else { const a = new Promise((((t, a) => { s = n[e] = [t, a]; }))); t.push(s[2] = a); let o; const u = document.createElement('script'); u.charset = 'utf-8', u.timeout = 120, i.nc && u.setAttribute('nonce', i.nc), u.src = r(e); const c = new Error(); o = function (t) { u.onerror = u.onload = null, clearTimeout(l); const s = n[e]; if (s !== 0) { if (s) { const a = t && (t.type === 'load' ? 'missing' : t.type); const o = t && t.target && t.target.src; c.message = `Loading chunk ${e} failed.\n(${a}: ${o})`, c.name = 'ChunkLoadError', c.type = a, c.request = o, s[1](c); }n[e] = void 0; } }; var l = setTimeout((() => { o({ type: 'timeout', target: u }); }), 12e4); u.onerror = u.onload = o, document.head.appendChild(u); } return Promise.all(t); }, i.m = e, i.c = a, i.d = function (e, t, s) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s }); }, i.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, i.t = function (e, t) { if (1 & t && (e = i(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const s = Object.create(null); if (i.r(s), Object.defineProperty(s, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const a in e)i.d(s, a, ((t) => e[t]).bind(null, a)); return s; }, i.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return i.d(t, 'a', t), t; }, i.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, i.p = '/', i.oe = function (e) { throw console.error(e), e; }; let u = window.webpackJsonp = window.webpackJsonp || []; const c = u.push.bind(u); u.push = t, u = u.slice(); for (let l = 0; l < u.length; l++)t(u[l]); var m = c; o.push([0, 'chunk-vendors']), s(); }({
  0(e, t, s) { e.exports = s('56d7'); },
  '034f': function (e, t, s) {
    s('85ec');
  },
  1(e, t) {},
  10(e, t) {},
  11(e, t) {},
  12(e, t) {},
  13(e, t) {},
  14(e, t) {},
  '14c3': function (e, t, s) {
    s('c8f0');
  },
  '1a12': function (e, t, s) {},
  2(e, t) {},
  3(e, t) {},
  4(e, t) {},
  5(e, t) {},
  '56d7': function (e, t, s) {
    s.r(t); const a = s('2b0e'); const n = function () { const e = this; const t = e.$createElement; const s = e._self._c || t; return s('div', { staticClass: 'app' }, [s('Navbar'), s('router-view')], 1); }; const o = []; const r = function () {
      const e = this; const t = e.$createElement; const s = e._self._c || t; return s('div', { staticClass: 'navbar' }, [s('div', { staticClass: 'container' }, [s('router-link', { staticClass: 'btn btn-success', attrs: { to: '/' } }, [s('h1', [e._v('Fancy Chat')])]), s('div', { staticClass: 'userpanel' }, [!0 === e.$store.state.loggedIn ? s('div', { staticClass: 'userToast' }, [e._v('Welcome '), s('span', { staticClass: 'capitalize' }, [e._v(e._s(e.$store.state.username))]), e._v('!')]) : e._e(), !0 === e.$store.state.loggedIn ? s('button', { staticClass: 'btn btn-danger', on: { click: e.LogOut } }, [e._v('Log Out')]) : e._e(), !1 === e.$store.state.loggedIn ? s('button', { staticClass: 'btn btn-primary', on: { click(t) { t.preventDefault(), e.logIn = !e.logIn; } } }, [e._v('Log In')]) : e._e()])], 1), s('div', {
        directives: [{
          name: 'show', rawName: 'v-show', value: e.logIn && !1 === e.$store.state.loggedIn, expression: 'logIn && $store.state.loggedIn === false',
        }],
        staticClass: 'logInWindow',
      }, [s('form', { attrs: { action: '' } }, [s('div', { staticClass: 'error-message' }, [e._v(e._s(e.error))]), s('div', { staticClass: 'username-input inputs' }, [s('label', { attrs: { for: 'username' } }, [e._v('Username: ')]), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.username, expression: 'username',
        }],
        attrs: { type: 'text', name: 'username', id: 'username' },
        domProps: { value: e.username },
        on: { input(t) { t.target.composing || (e.username = t.target.value); } },
      })]), s('div', { staticClass: 'password-input inputs' }, [s('label', { attrs: { for: 'password' } }, [e._v('Password: ')]), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.password, expression: 'password',
        }],
        attrs: { type: 'password', name: 'password', id: 'password' },
        domProps: { value: e.password },
        on: { input(t) { t.target.composing || (e.password = t.target.value); } },
      })]), s('div', { staticClass: 'buttons' }, [s('button', { staticClass: 'btn btn-primary', on: { click(t) { return t.preventDefault(), e.LogIn(t); } } }, [e._v('Log in')]), s('button', { staticClass: 'btn btn-success', on: { click(t) { return t.preventDefault(), e.CreateAccount(t); } } }, [e._v('Create Account')])])])])]);
    }; const i = []; const u = s('2a4e'); const c = 'http://localhost:5050/'; const l = {
      name: 'Navbar',
      data() {
        return {
          logIn: !1, username: '', password: '', error: '',
        };
      },
      methods: { LogIn() { const e = { username: this.username, password: u(this.password), secured: 'y' }; fetch(`${c}login`, { method: 'POST', body: JSON.stringify(e), headers: { 'content-type': 'application/json' } }).then((e) => e.json()).then((e) => { e.error ? this.error = e.error : (this.error = '', this.showMessageForm = !1, this.logIn = !this.logIn, sessionStorage.setItem('user', e.username), this.$store.commit('logIn', { username: e.username })); }); }, CreateAccount() { const e = { username: this.username, password: u(this.password), secured: 'y' }; fetch(`${c}users`, { method: 'POST', body: JSON.stringify(e), headers: { 'content-type': 'application/json' } }).then((e) => e.json()).then((e) => { e.error ? this.error = e.error : (this.error = e, this.showMessageForm = !1, sessionStorage.setItem('user', e.username), this.$store.commit('logIn', { username: e.username })); }); }, LogOut() { this.username = '', this.password = '', this.$store.commit('logOut'); } },
    }; const m = l; const d = (s('5dfc'), s('2877')); const g = Object(d.a)(m, r, i, !1, null, null, null); const p = g.exports; const h = { name: 'Nav', components: { Navbar: p } }; const f = h; const v = (s('034f'), Object(d.a)(f, n, o, !1, null, null, null)); const b = v.exports; const _ = s('8c4f'); const w = function () {
      const e = this; const t = e.$createElement; const s = e._self._c || t; return s('div', { staticClass: 'chat' }, [s('div', [e._v(`${e._s(e.testLog)} `)]), !0 === e.$store.state.loggedIn ? s('div', { staticClass: 'messagebody scrollable' }, [e.$store.state.messages.length == 0 ? s('div', { staticClass: 'messagebody' }, [s('h2', [e._v('No messages here :(')])]) : e._e(), e.$store.state.messages.length > 0 ? s('div', { staticClass: 'wrapper' }, e._l(e.$store.state.messages, ((t) => s('div', { key: t._id, staticClass: 'chatMessages card mt-2' }, [s('div', { staticClass: 'card-body chat-box' }, [s('div', { staticClass: 'dateTime text-muted card-subtitle' }, [e._v(` ${e._s(t.hour)}:${e._s(t.minute)} `)]), s('div', { staticClass: 'username card-title' }, [e._v(` ${e._s(t.username)}`)]), s('div', { staticClass: 'message card-text' }, [e._v(` ${e._s(t.message)}`)])])]))), 0) : e._e()]) : e._e(), !1 === e.$store.state.loggedIn ? s('div', { staticClass: 'notLogged' }, [s('p', [e._v('Need to be logged in to view chat')])]) : e._e(), s('div', { staticClass: 'bottom footer chatbox' }, [s('form', { staticClass: 'chat-form', attrs: { action: '' } }, [s('label', { staticClass: 'chat-label', attrs: { for: 'message' } }, [e._v('⌨')]), e.$store.state.loggedIn == 0 ? s('input', {
        staticClass: 'chat-text',
        attrs: {
          disabled: '', type: 'text', name: 'message', id: 'message',
        },
      }) : e._e(), e.$store.state.loggedIn == 0 ? s('button', { staticClass: 'btn btn-success', attrs: { disabled: '' } }, [e._v('Send')]) : e._e(), e.$store.state.loggedIn != 0 ? s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message, expression: 'message',
        }],
        staticClass: 'chat-text',
        attrs: {
          type: 'text', name: 'message', id: 'message', autofocus: '',
        },
        domProps: { value: e.message },
        on: { input(t) { t.target.composing || (e.message = t.target.value); } },
      }) : e._e(), e.$store.state.loggedIn != 0 ? s('button', { staticClass: 'btn btn-success', on: { click(t) { return t.preventDefault(), e.pushMessage(t); } } }, [e._v('Send')]) : e._e()])])]);
    }; const y = []; const C = 'http://localhost:5050/'; const I = {
      name: 'App',
      data() {
        return {
          messages: [], message: '', error: '', testLog: '',
        };
      },
      methods: { pushMessage() { fetch(`${C}message`, { method: 'POST', body: JSON.stringify({ username: this.$store.state.username, message: this.message }), headers: { 'content-type': 'application/json' } }).then((e) => e.json()).then((e) => { if (e.details) { const t = e.details.map((e) => e.message).join('. '); this.error = t; } else this.error = '', this.showMessageForm = !1, this.message = '', this.$store.commit('pushMessage', e), this.messages.length === 0 && (this.messages = this.$store.state.messages); }); }, updateMessages(e) { this.$store.commit('updateMessages', e); }, logIn() { this.$store.commit('logIn', { username: sessionStorage.getItem('user') }); } },
      mounted() { fetch(C).then((e) => e.json()).then((e) => { this.messages = e, this.updateMessages(e); }), sessionStorage.getItem('user') && this.logIn(); },
    }; const $ = I; const O = (s('14c3'), Object(d.a)($, w, y, !1, null, null, null)); const j = O.exports; a.a.use(_.a); const x = [{ path: '/', name: 'Chat', component: j }, { path: '/login', name: 'Login', component() { return s.e('about').then(s.bind(null, 'a55b')); } }]; const S = new _.a({ routes: x }); const M = S; const P = s('2f62'); const L = s('2784'); a.a.use(P.a); const N = new P.a.Store({
      state: {
        messages: [], messageBody: { username: '', message: '', dateTime: new Date() }, loggedIn: !1, username: '',
      },
      mutations: {
        pushMessage(e, t) { e.messages = [...e.messages, t]; }, updateMessages(e, t) { e.messages = t; }, resetMessages(e) { e.messages = []; }, logIn(e, t) { e.username = t.username, e.loggedIn = !0; }, logOut(e) { e.username = '', e.loggedIn = !1; },
      },
      plugins: [Object(L.a)({ statesPaths: ['messages'] })],
    }); a.a.config.productionTip = !1, new a.a({ store: N, router: M, render(e) { return e(b); } }).$mount('#app');
  },
  '5dfc': function (e, t, s) {
    s('1a12');
  },
  6(e, t) {},
  7(e, t) {},
  8(e, t) {},
  '85ec': function (e, t, s) {},
  9(e, t) {},
  c8f0(e, t, s) {},
}));
// # sourceMappingURL=app.d577fb28.js.map
