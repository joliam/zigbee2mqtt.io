"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1799],{84859:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>n,data:()=>c});var a=t(6254);const r={},n=(0,t(15356).A)(r,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"tuya-sdm02v1",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-sdm02v1"},[(0,a.Lk)("span",null,"Tuya SDM02V1")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SDM02V1")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Tuya")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart energy monitor for 2P+N system")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"voltage_l1, voltage_l2, power_l1, power_l2, current_l1, current_l2, energy, produced_energy, power_factor, power, ac_frequency, energy_l1, energy_l2, energy_produced_l1, energy_produced_l2, power_factor_l1, power_factor_l2")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SDM02V1.png",alt:"Tuya SDM02V1"})])],-1))])]),o[9]||(o[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>ac_frequency_calibration</code>: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>ac_frequency_precision</code>: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="voltage-l1-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l1-numeric"><span>Voltage l1 (numeric)</span></a></h3><p>Measured electrical potential value (phase L1). Value can be found in the published state on the <code>voltage_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-l2-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l2-numeric"><span>Voltage l2 (numeric)</span></a></h3><p>Measured electrical potential value (phase L2). Value can be found in the published state on the <code>voltage_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-l1-numeric"><span>Power l1 (numeric)</span></a></h3><p>Instantaneous measured power (phase L1). Value can be found in the published state on the <code>power_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-l2-numeric"><span>Power l2 (numeric)</span></a></h3><p>Instantaneous measured power (phase L2). Value can be found in the published state on the <code>power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-l1-numeric" tabindex="-1"><a class="header-anchor" href="#current-l1-numeric"><span>Current l1 (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase L1). Value can be found in the published state on the <code>current_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-l2-numeric" tabindex="-1"><a class="header-anchor" href="#current-l2-numeric"><span>Current l2 (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase L2). Value can be found in the published state on the <code>current_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Total forward active energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Total reverse active energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-numeric"><span>Power factor (numeric)</span></a></h3><p>Total power factor. Value can be found in the published state on the <code>power_factor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Total active power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="energy-l1-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l1-numeric"><span>Energy l1 (numeric)</span></a></h3><p>Sum of consumed energy (phase L1). Value can be found in the published state on the <code>energy_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-l2-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l2-numeric"><span>Energy l2 (numeric)</span></a></h3><p>Sum of consumed energy (phase L2). Value can be found in the published state on the <code>energy_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-l1-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-l1-numeric"><span>Energy produced l1 (numeric)</span></a></h3><p>Sum of produced energy (phase L1). Value can be found in the published state on the <code>energy_produced_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-l2-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-l2-numeric"><span>Energy produced l2 (numeric)</span></a></h3><p>Sum of produced energy (phase L2). Value can be found in the published state on the <code>energy_produced_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-l1-numeric"><span>Power factor l1 (numeric)</span></a></h3><p>Instantaneous measured power factor (phase L1). Value can be found in the published state on the <code>power_factor_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-l2-numeric"><span>Power factor l2 (numeric)</span></a></h3><p>Instantaneous measured power factor (phase L2). Value can be found in the published state on the <code>power_factor_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p>',36))])}]]),c=JSON.parse('{"path":"/devices/SDM02V1.html","title":"Tuya SDM02V1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya SDM02V1 control via MQTT","description":"Integrate your Tuya SDM02V1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-01T19:01:34.000Z"},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"devices/SDM02V1.md"}')}}]);