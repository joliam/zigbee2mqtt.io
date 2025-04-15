"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90621],{48592:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>i,data:()=>o});var n=t(6254);const s={},i=(0,t(15356).A)(s,[["render",function(e,a){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a[8]||(a[8]=(0,n.Lk)("h1",{id:"icasa-iczb-rm11s",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#icasa-iczb-rm11s"},[(0,n.Lk)("span",null,"iCasa ICZB-RM11S")])],-1)),(0,n.Lk)("table",null,[a[6]||(a[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[a[2]||(a[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ICZB-RM11S")],-1)),(0,n.Lk)("tr",null,[a[1]||(a[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=iCasa"},{default:(0,n.k6)((()=>a[0]||(a[0]=[(0,n.eW)("iCasa")]))),_:1})])]),a[3]||(a[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Zigbee 3.0 remote control")],-1)),a[4]||(a[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action")],-1)),a[5]||(a[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ICZB-RM11S.png",alt:"iCasa ICZB-RM11S"})])],-1))])]),a[9]||(a[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold All On button on the Remote until the Status LED turns on. Then immediately press the All Off button. The Status LED will blink 5 times quickly to indicate a successful pairing.</p><h3 id="resetting" tabindex="-1"><a class="header-anchor" href="#resetting"><span>Resetting</span></a></h3><p>Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press 5 times the All On button.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',6)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>a[7]||(a[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),a[10]||(a[10]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>recall_*</code>, <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p>',7))])}]]),o=JSON.parse('{"path":"/devices/ICZB-RM11S.html","title":"iCasa ICZB-RM11S control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"iCasa ICZB-RM11S control via MQTT","description":"Integrate your iCasa ICZB-RM11S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-01T12:47:02.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/ICZB-RM11S.md"}')}}]);