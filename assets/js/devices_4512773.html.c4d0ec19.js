"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21425],{67979:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>o,data:()=>l});var t=n(6254);const s={},o=(0,n(15356).A)(s,[["render",function(e,a){const n=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[a[11]||(a[11]=(0,t.Lk)("h1",{id:"namron-4512773",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#namron-4512773"},[(0,t.Lk)("span",null,"Namron 4512773")])],-1)),(0,t.Lk)("table",null,[a[6]||(a[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[a[2]||(a[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"4512773")],-1)),(0,t.Lk)("tr",null,[a[1]||(a[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(n,{to:"/supported-devices/#v=Namron"},{default:(0,t.k6)((()=>a[0]||(a[0]=[(0,t.eW)("Namron")]))),_:1})])]),a[3]||(a[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Zigbee 8 channel switch black")],-1)),a[4]||(a[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"battery, action")],-1)),a[5]||(a[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4512773.png",alt:"Namron 4512773"})])],-1))])]),a[12]||(a[12]=(0,t.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,t.Lk)("span",null,"OTA updates")])],-1)),(0,t.Lk)("p",null,[a[8]||(a[8]=(0,t.eW)("This device supports OTA updates, for more information see ")),(0,t.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,t.k6)((()=>a[7]||(a[7]=[(0,t.eW)("OTA updates")]))),_:1}),a[9]||(a[9]=(0,t.eW)("."))]),a[13]||(a[13]=(0,t.Lk)("h2",{id:"options",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#options"},[(0,t.Lk)("span",null,"Options")])],-1)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>a[10]||(a[10]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),a[14]||(a[14]=(0,t.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_l1</code>, <code>off_l1</code>, <code>brightness_move_up_l1</code>, <code>brightness_move_down_l1</code>, <code>brightness_stop_l1</code>, <code>on_l2</code>, <code>off_l2</code>, <code>brightness_move_up_l2</code>, <code>brightness_move_down_l2</code>, <code>brightness_stop_l2</code>, <code>on_l3</code>, <code>off_l3</code>, <code>brightness_move_up_l3</code>, <code>brightness_move_down_l3</code>, <code>brightness_stop_l3</code>, <code>on_l4</code>, <code>off_l4</code>, <code>brightness_move_up_l4</code>, <code>brightness_move_down_l4</code>, <code>brightness_stop_l4</code>.</p>',7))])}]]),l=JSON.parse('{"path":"/devices/4512773.html","title":"Namron 4512773 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Namron 4512773 control via MQTT","description":"Integrate your Namron 4512773 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/4512773.md"}')}}]);