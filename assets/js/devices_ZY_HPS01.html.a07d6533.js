"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[19184],{57245:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>n,data:()=>c});var i=t(6254);const o={},n=(0,t(15356).A)(o,[["render",function(e,a){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a[8]||(a[8]=(0,i.Lk)("h1",{id:"tuya-zy-hps01",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-zy-hps01"},[(0,i.Lk)("span",null,"Tuya ZY_HPS01")])],-1)),(0,i.Lk)("table",null,[a[6]||(a[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[a[2]||(a[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZY_HPS01")],-1)),(0,i.Lk)("tr",null,[a[1]||(a[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.eW)("Tuya")]))),_:1})])]),a[3]||(a[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"mmWave radar 5.8GHz")],-1)),a[4]||(a[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"illuminance, occupancy, presence_timeout, move_sensitivity, move_minimum_range, move_maximum_range, breath_sensitivity, breath_minimum_range, breath_maximum_range")],-1)),a[5]||(a[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZY_HPS01.png",alt:"Tuya ZY_HPS01"})])],-1))])]),a[9]||(a[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>a[7]||(a[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),a[10]||(a[10]=(0,i.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="presence-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#presence-timeout-numeric"><span>Presence timeout (numeric)</span></a></h3><p>Presence timeout. Value can be found in the published state on the <code>presence_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>180</code>. The unit of this value is <code>s</code>.</p><h3 id="move-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#move-sensitivity-numeric"><span>Move sensitivity (numeric)</span></a></h3><p>sensitivity of the radar. Value can be found in the published state on the <code>move_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>X</code>.</p><h3 id="move-minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#move-minimum-range-numeric"><span>Move minimum range (numeric)</span></a></h3><p>Movement minimum range. Value can be found in the published state on the <code>move_minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="move-maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#move-maximum-range-numeric"><span>Move maximum range (numeric)</span></a></h3><p>Movement maximum range. Value can be found in the published state on the <code>move_maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="breath-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#breath-sensitivity-numeric"><span>Breath sensitivity (numeric)</span></a></h3><p>Breath sensitivity of the radar. Value can be found in the published state on the <code>breath_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>X</code>.</p><h3 id="breath-minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#breath-minimum-range-numeric"><span>Breath minimum range (numeric)</span></a></h3><p>Breath minimum range. Value can be found in the published state on the <code>breath_minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="breath-maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#breath-maximum-range-numeric"><span>Breath maximum range (numeric)</span></a></h3><p>Breath maximum range. Value can be found in the published state on the <code>breath_maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p>',20))])}]]),c=JSON.parse('{"path":"/devices/ZY_HPS01.html","title":"Tuya ZY_HPS01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZY_HPS01 control via MQTT","description":"Integrate your Tuya ZY_HPS01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-01T19:01:34.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/ZY_HPS01.md"}')}}]);