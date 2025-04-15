"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94146],{33660:(a,e,n)=>{n.r(e),n.d(e,{comp:()=>l,data:()=>t});var s=n(6254);const i={},l=(0,n(15356).A)(i,[["render",function(a,e){return(0,s.uX)(),(0,s.CE)("div",null,e[0]||(e[0]=[(0,s.Fv)('<h1 id="device-availability" tabindex="-1"><a class="header-anchor" href="#device-availability"><span>Device Availability</span></a></h1><p>The availability feature checks whether your devices are online. The availability state of a device is published to <code>zigbee2mqtt/[FRIENDLY_NAME]/availability</code> with payload <code>{&quot;state&quot;:&quot;online&quot;}</code> or <code>{&quot;state&quot;:&quot;offline&quot;}</code> (this message is a retained MQTT message).</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token comment"># Optional: Availability feature</span></span>\n<span class="line"><span class="token key atrule">availability</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Enable the feature (default: false)</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The availability feature works differently for active and passive devices, since passive devices cannot be pinged.</p><ul><li>Active devices (<em>non battery-powered</em>): by default they have to check-in** every 10 minutes. If they don&#39;t, they will be pinged, if that fails the device will be marked as <code>offline</code>.</li><li>Passive devices (<em>battery-powered</em>): by default they have to check-in** every 25 hours. If they don&#39;t they will be marked as <code>offline</code>.</li></ul><p>Note that this timeout is persisted between Zigbee2MQTT restarts. So if you for example stop Zigbee2MQTT for longer than 10 minutes, all your active devices will be marked as <code>offline</code> initially until they check-in** again.</p><p>** A check-in is any kind of Zigbee message from the device that reaches Zigbee2MQTT (even internal updates that are not displayed/reported).</p><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token comment"># Note: all options are optional</span></span>\n<span class="line"><span class="token key atrule">availability</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token key atrule">active</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token comment"># Time after which an active device will be marked as offline in minutes (default: 10 minutes)</span></span>\n<span class="line">        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">10</span></span>\n<span class="line">        <span class="token comment"># Maximum jitter (in msec) allowed on timeout to avoid availability pings trying to trigger around the same time (default: 30000, min: 1000)</span></span>\n<span class="line">        <span class="token key atrule">max_jitter</span><span class="token punctuation">:</span> <span class="token number">30000</span></span>\n<span class="line">        <span class="token comment"># Enable timeout backoff on failed availability pings (default: true)</span></span>\n<span class="line">        <span class="token comment"># Pattern used: x1.5, x3, x6, x12... (with default timeout of 10min: 10, 15, 30, 60, 120...)</span></span>\n<span class="line">        <span class="token key atrule">backoff</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">        <span class="token comment"># Pause availability pings when backoff reaches over this limit until a new Zigbee message is received from the device. (default: 0, min: 0)</span></span>\n<span class="line">        <span class="token comment"># A value of zero disables pausing, else see `backoff` pattern above.</span></span>\n<span class="line">        <span class="token key atrule">pause_on_backoff_gt</span><span class="token punctuation">:</span> <span class="token number">0</span></span>\n<span class="line">    <span class="token key atrule">passive</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token comment"># Time after which a passive device will be marked as offline in minutes (default: 1500 minutes aka 25 hours)</span></span>\n<span class="line">        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">1500</span></span>\n<span class="line"></span>\n<span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_bulb&#39;</span></span>\n<span class="line">        <span class="token comment"># Set availability: false to disable the availability feature for a specific device</span></span>\n<span class="line">        <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span></span>\n<span class="line">        <span class="token comment"># Change availability timeout to 3 minutes for this device only</span></span>\n<span class="line">        <span class="token key atrule">availability</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">3</span></span>\n<span class="line">            <span class="token comment"># active devices also can specify `max_jitter`, `backoff`, `pause_on_backoff_gt` (see above)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to enable the availability feature for only certain devices, don&#39;t add <code>availability: enabled: true</code> in your <code>configuration.yaml</code> but specify it for that device only, e.g.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span></span>\n<span class="line">        <span class="token comment"># Enable availability for just &#39;my_switch&#39;</span></span>\n<span class="line">        <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-retrieval" tabindex="-1"><a class="header-anchor" href="#state-retrieval"><span>State retrieval</span></a></h2><p>When the availability feature is enabled and a device reconnects or announces itself on the network, Zigbee2MQTT will retrieve the state of the device. This is e.g. handy when a bulb turns itself on after being reconnected to mains power. The following attributes will be read: <code>state</code>, <code>brightness</code>, <code>color_temp</code> and <code>color</code>.</p><h2 id="performance-considerations" tabindex="-1"><a class="header-anchor" href="#performance-considerations"><span>Performance considerations</span></a></h2><ul><li>The pinging can be heavy on the coordinator, especially if you are using a CC2530 or CC2531 adapter.</li><li>Higher <code>timeout</code> for active devices results in less pinging so less stress on the coordinator.</li></ul><h2 id="groups" tabindex="-1"><a class="header-anchor" href="#groups"><span>Groups</span></a></h2><p>When enabling device availability, availability will also be enabled for groups. A group is marked as available when at least one device in it is available.</p>',17)]))}]]),t=JSON.parse('{"path":"/guide/configuration/device-availability.html","title":"Device Availability","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"git":{"updatedTime":1744682014000,"contributors":[{"name":"joliam","username":"joliam","email":"49640432+joliam@users.noreply.github.com","commits":1,"url":"https://github.com/joliam"}],"changelog":[{"hash":"4b5f8948a233d79db24ca75c42fe1a7dfa5702f0","time":1744682014000,"email":"49640432+joliam@users.noreply.github.com","author":"joliam","message":"Merge branch \'Koenkk:master\' into master"}]},"filePathRelative":"guide/configuration/device-availability.md"}')}}]);