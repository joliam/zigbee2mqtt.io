"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87913],{33235:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>n,data:()=>d});var i=t(6254);const o={},n=(0,t(15356).A)(o,[["render",function(e,a){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a[8]||(a[8]=(0,i.Lk)("h1",{id:"tuya-zy-m100-s-2",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-zy-m100-s-2"},[(0,i.Lk)("span",null,"Tuya ZY-M100-S_2")])],-1)),(0,i.Lk)("table",null,[a[6]||(a[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[a[2]||(a[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZY-M100-S_2")],-1)),(0,i.Lk)("tr",null,[a[1]||(a[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.eW)("Tuya")]))),_:1})])]),a[3]||(a[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Mini human breathe sensor")],-1)),a[4]||(a[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"illuminance, presence, target_distance, radar_sensitivity, minimum_range, maximum_range, detection_delay, fading_time")],-1)),a[5]||(a[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZY-M100-S_2.png",alt:"Tuya ZY-M100-S_2"})])],-1))])]),a[9]||(a[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>a[7]||(a[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),a[10]||(a[10]=(0,i.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric"><span>Radar sensitivity (numeric)</span></a></h3><p>sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#minimum-range-numeric"><span>Minimum range (numeric)</span></a></h3><p>Minimum range. Value can be found in the published state on the <code>minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id="maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#maximum-range-numeric"><span>Maximum range (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id="detection-delay-numeric" tabindex="-1"><a class="header-anchor" href="#detection-delay-numeric"><span>Detection delay (numeric)</span></a></h3><p>Detection delay. Value can be found in the published state on the <code>detection_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric"><span>Fading time (numeric)</span></a></h3><p>Fading time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1500</code>. The unit of this value is <code>s</code>.</p>',18))])}]]),d=JSON.parse('{"path":"/devices/ZY-M100-S_2.html","title":"Tuya ZY-M100-S_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZY-M100-S_2 control via MQTT","description":"Integrate your Tuya ZY-M100-S_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/ZY-M100-S_2.md"}')}}]);