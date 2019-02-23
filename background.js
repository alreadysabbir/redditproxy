const RedditProxy = chrome.proxy;

// configurable
// updatable through UI
const ServerConfig = {
  IP: "36.67.206.37",
  PORT: "4145"
};

const Config = {
  mode: "pac_script",
  pacScript: {
    data:
      "function FindProxyForURL(url, host) {\n" +
      "  if (host == 'reddit.com')\n" +
      "    return 'SOCKS4 " +
      ServerConfig.IP +
      ":" +
      ServerConfig.PORT +
      "';\n" +
      "  return 'DIRECT';\n" +
      "}"
  }
};

RedditProxy.settings.set({ value: Config, scope: "regular" }, function() {});
