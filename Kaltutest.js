mw.setConfig(
  doFullScreenPlayer: function( callback ) {
    if( !this.fullScreenApiExcludes() && screenfull && screenfull.enabled(doc) && !mw.isOldAndroidChromeNativeBrowser() && !((mw.isIpad() || mw.isIpadOS()) && mw.getConfig('EmbedPlayer.EnableIpadNativeFullscreen'))) {
				callFullScreenAPI();
}  return true;
  'document.EnableFullscreen', true;
);
