#!/usr/bin/env python3
"""
ZodiacMatch AI Server - Local HTTP Server
Serves the Zodiac Compatibility web app with automatic port selection and browser launch.
"""

import http.server
import socketserver
import webbrowser
import socket
import os
import sys

# Ensure UTF-8 output on Windows consoles if available
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

DEFAULT_PORT = 8085
MAX_PORT_ATTEMPTS = 15

class QuietHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler that silences routine GET 200 logs for cleaner terminal output."""
    def log_message(self, format, *args):
        # Only log errors or non-200 responses
        if len(args) > 1 and str(args[1]) not in ('200', '304'):
            super().log_message(format, *args)

def get_lan_ip():
    """Detect local LAN IP address."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

def start_server(auto_open=True):
    # Ensure working directory is the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    port = DEFAULT_PORT
    httpd = None

    for attempt in range(MAX_PORT_ATTEMPTS):
        try:
            handler = QuietHTTPRequestHandler
            socketserver.TCPServer.allow_reuse_address = True
            httpd = socketserver.TCPServer(("0.0.0.0", port), handler)
            break
        except OSError:
            port += 1

    if not httpd:
        print(f"[Error] Could not find an open port starting from {DEFAULT_PORT}.")
        sys.exit(1)

    lan_ip = get_lan_ip()
    local_url = f"http://localhost:{port}"
    lan_url = f"http://{lan_ip}:{port}"

    print("=" * 70)
    print("      *** ZODIACMATCH AI - SUN SIGN & COUPLE COMPATIBILITY ***")
    print("=" * 70)
    print(f"  Local Access:      {local_url}")
    print(f"  Network (LAN):     {lan_url}")
    print("=" * 70)
    print("  Serving Sun Sign and Couple Compatibility Matrix...")
    print("  Press Ctrl+C to stop the server.")
    print("=" * 70)

    if auto_open:
        try:
            webbrowser.open(local_url)
        except Exception as e:
            print(f"  Could not automatically launch browser: {e}")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[Server] Stopping ZodiacMatch AI server. Goodbye!")
        httpd.server_close()
        sys.exit(0)

if __name__ == "__main__":
    start_server(auto_open=True)
