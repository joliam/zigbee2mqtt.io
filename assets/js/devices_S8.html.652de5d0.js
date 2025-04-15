"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15943],{90471:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>n});var a=o(6254);const d={},i=(0,o(15356).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"soda-s8",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#soda-s8"},[(0,a.Lk)("span",null,"SODA S8")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"S8")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=SODA"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("SODA")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"S8 premium window handle")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, battery_low, vacation, alarm, alarm_switch, handlesound, opening_mode, temperature, humidity, keysound, sensitivity, position, button_left, button_right, duration, update_frequency, calibrate")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S8.png",alt:"SODA S8"})])],-1))])]),t[9]||(t[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>The handles are from <a href="https://soda-gmbh.de/" target="_blank" rel="noopener noreferrer">SODA GmBh</a> and sold on <a href="https://www.amazon.de/sp?ie=UTF8&amp;isAmazonFulfilled=0&amp;marketplaceSeller=1&amp;seller=AS4J66PXH3SHW" target="_blank" rel="noopener noreferrer">Amazon Germany</a>.</p><p><a href="https://soda-gmbh.de/assets/download/S8_Premium_Anleitung.pdf" target="_blank" rel="noopener noreferrer">Documentation/Manual</a></p><h3 id="pairing-resetting" tabindex="-1"><a class="header-anchor" href="#pairing-resetting"><span>Pairing &amp; Resetting</span></a></h3><ul><li><p>To pair, press left button while inserting the batteries.</p></li><li><p>To reset, press both buttons while inserting batteries.</p></li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',6)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="vacation-binary" tabindex="-1"><a class="header-anchor" href="#vacation-binary"><span>Vacation (binary)</span></a></h3><p>Vacation mode. Value can be found in the published state on the <code>vacation</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacation&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> vacation is ON, if <code>OFF</code> OFF.</p><h3 id="alarm-enum" tabindex="-1"><a class="header-anchor" href="#alarm-enum"><span>Alarm (enum)</span></a></h3><p>Alarm. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>ALARM</code>, <code>IDLE</code>.</p><h3 id="alarm-switch-binary" tabindex="-1"><a class="header-anchor" href="#alarm-switch-binary"><span>Alarm switch (binary)</span></a></h3><p>Alarm enable. Value can be found in the published state on the <code>alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id="handlesound-binary" tabindex="-1"><a class="header-anchor" href="#handlesound-binary"><span>Handlesound (binary)</span></a></h3><p>Handle closed sound. Value can be found in the published state on the <code>handlesound</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;handlesound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> handlesound is ON, if <code>OFF</code> OFF.</p><h3 id="opening-mode-enum" tabindex="-1"><a class="header-anchor" href="#opening-mode-enum"><span>Opening mode (enum)</span></a></h3><p>Window tilt. Value can be found in the published state on the <code>opening_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>closed</code>, <code>tilted</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="keysound-binary" tabindex="-1"><a class="header-anchor" href="#keysound-binary"><span>Keysound (binary)</span></a></h3><p>Key beep sound. Value can be found in the published state on the <code>keysound</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keysound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> keysound is ON, if <code>OFF</code> OFF.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>Sensitivity of the alarm sensor. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>max</code>.</p><h3 id="position-enum" tabindex="-1"><a class="header-anchor" href="#position-enum"><span>Position (enum)</span></a></h3><p>Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>up</code>, <code>right</code>, <code>down</code>, <code>left</code>.</p><h3 id="button-left-enum" tabindex="-1"><a class="header-anchor" href="#button-left-enum"><span>Button left (enum)</span></a></h3><p>Value can be found in the published state on the <code>button_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>released</code>, <code>pressed</code>.</p><h3 id="button-right-enum" tabindex="-1"><a class="header-anchor" href="#button-right-enum"><span>Button right (enum)</span></a></h3><p>Value can be found in the published state on the <code>button_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>released</code>, <code>pressed</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric"><span>Duration (numeric)</span></a></h3><p>Duration of the alarm. Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>sec</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="update-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#update-frequency-numeric"><span>Update frequency (numeric)</span></a></h3><p>Update frequency. Value can be found in the published state on the <code>update_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;update_frequency&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>700</code>. The unit of this value is <code>min</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="calibrate-enum" tabindex="-1"><a class="header-anchor" href="#calibrate-enum"><span>Calibrate (enum)</span></a></h3><p>Value can be found in the published state on the <code>calibrate</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate&quot;: NEW_VALUE}</code>. The possible values are: <code>clear</code>, <code>execute</code>.</p>',36))])}]]),n=JSON.parse('{"path":"/devices/S8.html","title":"SODA S8 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SODA S8 control via MQTT","description":"Integrate your SODA S8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:40.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/S8.md"}')}}]);