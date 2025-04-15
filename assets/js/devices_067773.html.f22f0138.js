"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57118],{76709:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>o,data:()=>i});var s=n(6254);const t={},o=(0,n(15356).A)(t,[["render",function(e,a){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[a[14]||(a[14]=(0,s.Lk)("h1",{id:"legrand-067773",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#legrand-067773"},[(0,s.Lk)("span",null,"Legrand 067773")])],-1)),(0,s.Lk)("table",null,[a[6]||(a[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[a[2]||(a[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"067773")],-1)),(0,s.Lk)("tr",null,[a[1]||(a[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(n,{to:"/supported-devices/#v=Legrand"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.eW)("Legrand")]))),_:1})])]),a[3]||(a[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Wireless remote switch")],-1)),a[4]||(a[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"battery, action")],-1)),a[5]||(a[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/067773.png",alt:"Legrand 067773"})])],-1))])]),a[15]||(a[15]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="legacy-integration" tabindex="-1"><a class="header-anchor" href="#legacy-integration"><span>Legacy integration</span></a></h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers"><span>Model numbers</span></a></h3><p>Model number depends on the country and the colour of the devices. French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 23&quot;, &quot;0 677 73&quot;, and &quot;0 648 93&quot;. Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 13&quot;, &quot;7 418 43&quot; and &quot;7 418 73&quot;. American models are branded as radiant with Netatmo, model numbers are the same as the French ones, but sized for American boxes and plates.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3>',7)),(0,s.Lk)("p",null,[a[8]||(a[8]=(0,s.eW)("The remote supports ")),(0,s.bF)(n,{to:"/guide/usage/binding.html"},{default:(0,s.k6)((()=>a[7]||(a[7]=[(0,s.eW)("binding")]))),_:1}),a[9]||(a[9]=(0,s.eW)("."))]),a[16]||(a[16]=(0,s.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,s.Lk)("span",null,"OTA updates")])],-1)),(0,s.Lk)("p",null,[a[11]||(a[11]=(0,s.eW)("This device supports OTA updates, for more information see ")),(0,s.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.k6)((()=>a[10]||(a[10]=[(0,s.eW)("OTA updates")]))),_:1}),a[12]||(a[12]=(0,s.eW)("."))]),a[17]||(a[17]=(0,s.Lk)("h2",{id:"options",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#options"},[(0,s.Lk)("span",null,"Options")])],-1)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>a[13]||(a[13]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),a[18]||(a[18]=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p>',7))])}]]),i=JSON.parse('{"path":"/devices/067773.html","title":"Legrand 067773 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067773 control via MQTT","description":"Integrate your Legrand 067773 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/067773.md"}')}}]);