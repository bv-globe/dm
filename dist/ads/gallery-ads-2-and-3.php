<div id="ad_bigbox3" class="adSlot"><!--<img src="images/listings/reNews__listings__2.jpg" />--></div>

<div id="ad_bigbox4" class="adSlot"><!--<img src="images/listings/reNews__listings__3.jpg" />--></div>

<script>
    var networkCode = 61381659;
    var topLevelAdUnit = "testboston.com";
    var s1 = "testboston.com";
    var s2 = "real-estate";
    var adUnit = topLevelAdUnit + "/" + s2;
    var slotName = "/" + networkCode + "/" + adUnit;
    
    googletag.cmd.push(function() {
        googletag.defineSlot(slotName, [300,250], "ad_bigbox3")
        googletag.defineSlot(slotName, [300,250], "ad_bigbox4")
        .addService(googletag.pubads())
        .setTargeting("pos", "ad_bigbox3")
        .setTargeting("pos", "ad_bigbox4");
        googletag.pubads().setTargeting("s1",s1);
        googletag.pubads().setTargeting("s2",s2);      
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });
</script>

<script type="text/javascript">
    googletag.cmd.push(function() {
        googletag.display("ad_bigbox3");
        googletag.display("ad_bigbox4");
    });
</script>