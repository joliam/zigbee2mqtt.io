"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30248],{50088:(e,o,a)=>{a.r(o),a.d(o,{comp:()=>s,data:()=>r});var t=a(6254);const n={},s=(0,a(15356).A)(n,[["render",function(e,o){const a=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[o[8]||(o[8]=(0,t.Lk)("h1",{id:"awox-33952",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#awox-33952"},[(0,t.Lk)("span",null,"AwoX 33952")])],-1)),(0,t.Lk)("table",null,[o[6]||(o[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[o[2]||(o[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"33952")],-1)),(0,t.Lk)("tr",null,[o[1]||(o[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(a,{to:"/supported-devices/#v=AwoX"},{default:(0,t.k6)((()=>o[0]||(o[0]=[(0,t.eW)("AwoX")]))),_:1})])]),o[3]||(o[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Remote controller")],-1)),o[4]||(o[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"action")],-1)),o[5]||(o[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/33952.png",alt:"AwoX 33952"})])],-1))])]),o[9]||(o[9]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="upgrading-firmware" tabindex="-1"><a class="header-anchor" href="#upgrading-firmware"><span>Upgrading firmware</span></a></h3><p>Before pairing with Zigbee2MQTT, it is to good update the firmware of the remote controller via Bluetooth. To do this, install the &quot;AwoX HomeControl&quot; app on your smartphone, pair the device by holding for 3s power on and blue button and according to the instruction in the app to update the firmware.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Enable Zigbee2MQTT pairing and push power on and the coloured wheel on the remote controller. The red LED indication in the middle of the device should flash 3 times (this clears the memory of the remote controller). After that hold the power button for 3 seconds.</p><h2 id="warning-degrades-network-performance" tabindex="-1"><a class="header-anchor" href="#warning-degrades-network-performance"><span>Warning: degrades network performance</span></a></h2><p>AwoX devices are known to cause network instability. If your Zigbee network has poor performance or you are seeing errors like <code>NO_NETWORK_ROUTE</code> you should remove this device from the network. It <a href="https://github.com/Koenkk/zigbee2mqtt/discussions/18366" target="_blank" rel="noopener noreferrer">may help</a> to OTA update your device via the &quot;AwoX HomeControl&quot; app over Bluetooth.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',8)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>o[7]||(o[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,t.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>red</code>, <code>refresh</code>, <code>refresh_colored</code>, <code>blue</code>, <code>yellow</code>, <code>green</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>recall_1</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>.</p>',5))])}]]),r=JSON.parse('{"path":"/devices/33952.html","title":"AwoX 33952 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"AwoX 33952 control via MQTT","description":"Integrate your AwoX 33952 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-01T08:48:44.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/33952.md"}')}}]);