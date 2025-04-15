"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84437],{7947:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>s});var n=a(6254);const i={},o=(0,a(15356).A)(i,[["render",function(e,t){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[14]||(t[14]=(0,n.Lk)("h1",{id:"ikea-e1766",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ikea-e1766"},[(0,n.Lk)("span",null,"IKEA E1766")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"E1766")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(a,{to:"/supported-devices/#v=IKEA"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("IKEA")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"TRADFRI open/close remote")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"identify, battery, action")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1766.png",alt:"IKEA E1766"})])],-1))])]),t[15]||(t[15]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery) 4 times in a row. The red light on the front side should flash a few times and then turn off (it&#39;s more visible to see the light from the back). After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>Actions</span></a></h3><p>A <code>close</code> or <code>open</code> action is triggered when the corresponding button is pressed. If subsequently held down for &gt; 0.5s, a <code>stop</code> action is triggered upon release.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3>',10)),(0,n.Lk)("p",null,[t[8]||(t[8]=(0,n.eW)("The ")),(0,n.bF)(a,{to:"/guide/usage/binding.html"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("binding")]))),_:1}),t[9]||(t[9]=(0,n.eW)(" functionality of this remote varies per firmware version:"))]),t[16]||(t[16]=(0,n.Fv)('<ul><li>below 2.3.075: supports binding to groups only. It can only be bound to 1 group at a time. By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to <code>zigbee2mqtt/bridge/request/device/unbind</code> payload <code>{&quot;from&quot;: &quot;DEVICE_FRIENDLY_NAME&quot;, &quot;to&quot;: &quot;default_bind_group&quot;}</code>. Wake up the device right before sending the commands by pressing a button on it.</li><li>2.3.075 and greater: supports binding to devices only</li></ul><h3 id="starting-ota-updates" tabindex="-1"><a class="header-anchor" href="#starting-ota-updates"><span>Starting OTA updates</span></a></h3><p>Press the button on it right before hitting the update button in Z2MA, and again every second or two for about 5 seconds until upgrade begin.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4)),(0,n.Lk)("p",null,[t[11]||(t[11]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[10]||(t[10]=[(0,n.eW)("OTA updates")]))),_:1}),t[12]||(t[12]=(0,n.eW)("."))]),t[17]||(t[17]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[13]||(t[13]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[18]||(t[18]=(0,n.Fv)('<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>open</code>, <code>close</code>, <code>stop</code>.</p>',8))])}]]),s=JSON.parse('{"path":"/devices/E1766.html","title":"IKEA E1766 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E1766 control via MQTT","description":"Integrate your IKEA E1766 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-11-09T18:37:38.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/E1766.md"}')}}]);