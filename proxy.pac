function FindProxyForURL(url, host) {
    // Block the specific API path
    if (shExpMatch(url, "*radio.garden/api/geo*")) {
        return "PROXY 0.0.0.0:0";
    }
    // Allow all other traffic
    return "DIRECT";
}
