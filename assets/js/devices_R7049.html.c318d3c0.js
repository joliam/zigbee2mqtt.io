"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92544],{96844:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>l,data:()=>r});var o=t(6254);const s={},l=(0,t(15356).A)(s,[["render",function(e,a){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[a[7]||(a[7]=(0,o.Lk)("h1",{id:"woox-r7049",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#woox-r7049"},[(0,o.Lk)("span",null,"Woox R7049")])],-1)),(0,o.Lk)("table",null,[a[6]||(a[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[a[2]||(a[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"R7049")],-1)),(0,o.Lk)("tr",null,[a[1]||(a[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(t,{to:"/supported-devices/#v=Woox"},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)("Woox")]))),_:1})])]),a[3]||(a[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Smart smoke alarm")],-1)),a[4]||(a[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery_low, smoke, test_alarm, test_alarm_result, battery_level, alarm, fault_alarm, silence_siren")],-1)),a[5]||(a[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/R7049.png",alt:"Woox R7049"})])],-1))])]),a[8]||(a[8]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Hold the Test button pressed for 5 seconds (until the red LED blinks). After this the device will reset and try to join a network.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary"><span>Smoke (binary)</span></a></h3><p>Smoke alarm status. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="test-alarm-binary" tabindex="-1"><a class="header-anchor" href="#test-alarm-binary"><span>Test alarm (binary)</span></a></h3><p>Test alarm. Value can be found in the published state on the <code>test_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;test_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> test alarm is ON, if <code>false</code> OFF.</p><h3 id="test-alarm-result-enum" tabindex="-1"><a class="header-anchor" href="#test-alarm-result-enum"><span>Test alarm result (enum)</span></a></h3><p>Test alarm result. Value can be found in the published state on the <code>test_alarm_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>.</p><h3 id="battery-level-enum" tabindex="-1"><a class="header-anchor" href="#battery-level-enum"><span>Battery level (enum)</span></a></h3><p>Battery level state. Value can be found in the published state on the <code>battery_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary"><span>Alarm (binary)</span></a></h3><p>Alarm enable. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="fault-alarm-binary" tabindex="-1"><a class="header-anchor" href="#fault-alarm-binary"><span>Fault alarm (binary)</span></a></h3><p>Fault alarm status. Value can be found in the published state on the <code>fault_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault alarm is ON, if <code>false</code> OFF.</p><h3 id="silence-siren-binary" tabindex="-1"><a class="header-anchor" href="#silence-siren-binary"><span>Silence siren (binary)</span></a></h3><p>Silence siren. Value can be found in the published state on the <code>silence_siren</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence_siren&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence siren is ON, if <code>false</code> OFF.</p>',20))])}]]),r=JSON.parse('{"path":"/devices/R7049.html","title":"Woox R7049 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Woox R7049 control via MQTT","description":"Integrate your Woox R7049 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-06-08T15:36:48.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/R7049.md"}')}}]);