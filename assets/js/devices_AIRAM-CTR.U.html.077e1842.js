"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26267],{31803:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>i,data:()=>l});var s=n(6254);const t={},i=(0,n(15356).A)(t,[["render",function(e,a){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[a[8]||(a[8]=(0,s.Lk)("h1",{id:"airam-airam-ctr-u",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#airam-airam-ctr-u"},[(0,s.Lk)("span",null,"Airam AIRAM-CTR.U")])],-1)),(0,s.Lk)("table",null,[a[6]||(a[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[a[2]||(a[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"AIRAM-CTR.U")],-1)),(0,s.Lk)("tr",null,[a[1]||(a[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(n,{to:"/supported-devices/#v=Airam"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.eW)("Airam")]))),_:1})])]),a[3]||(a[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"CTR.U remote")],-1)),a[4]||(a[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"action")],-1)),a[5]||(a[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AIRAM-CTR.U.png",alt:"Airam AIRAM-CTR.U"})])],-1))])]),a[9]||(a[9]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Hold small reset button pressed (located under battery cover on the backside of remote) for 4 seconds and device will reset and will attempt to join network. Keep clicking any button on the frontside of the device to keep device awake while pairing. You should be clicking every two seconds until pairing is complete.</p><p>Device seems to join network also when it is paired directly to Airam bulb (which is joined to network already) (https://www.zigbee2mqtt.io/devices/4713407.html) by keeping ON and DIM buttons pressed while holding remote within 5 centimeters away from Airam bulb.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',9)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>a[7]||(a[7]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),a[10]||(a[10]=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_down_click</code>, <code>brightness_up_click</code>, <code>brightness_down_hold</code>, <code>brightness_up_hold</code>, <code>brightness_down_release</code>, <code>brightness_up_release</code>.</p>',5))])}]]),l=JSON.parse('{"path":"/devices/AIRAM-CTR.U.html","title":"Airam AIRAM-CTR.U control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Airam AIRAM-CTR.U control via MQTT","description":"Integrate your Airam AIRAM-CTR.U via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/AIRAM-CTR.U.md"}')}}]);